<?php

namespace App\Observers;

use App\Models\Order as ModelsOrder;
use App\Events\Refresh;
use Throwable;
use Illuminate\Support\Facades\Mail;

class Order
{
    //
    public function created(ModelsOrder $order)
    {
        switch ($order->status) {
            case "old":
                break;
            case "new":
                try {
                    $unsubscribe = "https://kinder.gpucloud.ru/unsubscribe?email=" . $order->email . "&email_hash=" . $order->email_hash;
                    Mail::to($order->email)->send(new \App\Mail\Frame2($unsubscribe));
                    event(new Refresh());
                } catch (Throwable $e) {
                    report($e);
                }
                break;
            case "unsubscribed":
                break;
        }
    }
    //
    public function updated(ModelsOrder $order)
    {
        if ($order->wasChanged('status')) {
            switch ($order->status) {
                case "old":
                    break;
                case "new":
                    break;
                case "confirmed":
                    try {
                        $unsubscribe = "https://kinder.gpucloud.ru/unsubscribe?email=" . $order->email . "&email_hash=" . $order->email_hash;
                        Mail::to($order->email)->send(new \App\Mail\Frame3($unsubscribe, $order->hash));
                        $order->update([
                            'sent' => 1
                        ]);
                    } catch (Throwable $e) {
                        report($e);
                    }
                    break;
                case "canceled":
                    try {
                        $unsubscribe = "https://kinder.gpucloud.ru/unsubscribe?email=" . $order->email . "&email_hash=" . $order->email_hash;
                        Mail::to($order->email)->send(new \App\Mail\Frame4($unsubscribe));
                    } catch (Throwable $e) {
                        report($e);
                    }
                    break;
                case "unsubscribed":
                    break;
            }
        }
    }
}
