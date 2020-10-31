<?php

namespace App\Observers;

use App\Models\Order as ModelsOrder;
use App\Events\Refresh;
use Throwable;

class Order
{
    //
    public function updated(ModelsOrder $order)
    {
        if ($order->wasChanged('status')) {

            switch ($order->status) {
                case "new":
                    break;
                case "canceled":
                    break;
                case "confirmed":
                    try {
                        event(new Refresh());
                    } catch (Throwable $e) {
                        report($e);
                    }
                    break;
                case "unsubscribed":
                    break;
                case "old":
                    break;
            }
        }
    }
}
