<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Throwable;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class Cron extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'cron:exec';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }
    #*/1 * * * * sudo php ~/www/artisan cron:exec
    #*/5 * * * * sudo php ~/www/artisan cron:photo
    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        // @touch('/var/www/html/kinder.gpucloud.ru/count');
        // $count = (int)file_get_contents('/var/www/html/kinder.gpucloud.ru/count');
        // $cnt=0;
        // if ($count < 82000) {
        //     $orders = \App\Models\Order::where('status', 'confirmed')
        //         ->where('opros', 0)
        //         // ->where('email', 'pimax1978@icloud.com')
        //         ->orderBy('id', 'desc')
        //         ->limit(500);
        //     $ordersArray = $orders->get();
        //     $orders->update(['opros' => 3]);
        //     echo (count($ordersArray));
        //     foreach ($ordersArray as $o) {
        //         $order = \App\Models\Order::find($o->id);
        //         if ($order->opros == 3)
        //             try {
        //                 $unsubscribe = "https://kinder.gpucloud.ru/unsubscribe?email=" . $order->email . "&email_hash=" . $order->email_hash;
        //                 Mail::to($order->email)->send(new \App\Mail\Frame5($unsubscribe));
        //                 \App\Models\Order::where('email', $order->email)->update([
        //                     'opros' => 1
        //                 ]);
        //                 $cnt++;
        //             } catch (Throwable $e) {
        //                 report($e);
        //             }
        //     }
        //     $count = (int)file_get_contents('/var/www/html/kinder.gpucloud.ru/count');
        //     file_put_contents('/var/www/html/kinder.gpucloud.ru/count', $count + $cnt);
        // }


        // $orders = \App\Models\Order::where('status', 'confirmed')->where('sent', '<', 3)->orderBy('id', 'desc')->limit(1000);
        // $ordersArray = $orders->get();
        // $orders->update(['sent' => '4']);
        // foreach ($ordersArray as $order) {
        //     try {
        //         $unsubscribe = "https://kinder.gpucloud.ru/unsubscribe?email=" . $order->email . "&email_hash=" . $order->email_hash;
        //         Mail::to($order->email)->send(new \App\Mail\Frame3($unsubscribe, $order->hash));
        //         $order->update([
        //             'sent' => 3
        //         ]);
        //     } catch (Throwable $e) {
        //         report($e);
        //     }
        // }
        // $orders = \App\Models\Order::where('status', 'canceled')->where('sent', '<', 3)->orderBy('id', 'desc')->limit(1000);
        // $ordersArray = $orders->get();
        // $orders->update(['sent' => '4']);
        // echo(count($ordersArray));
        // foreach ($ordersArray as $order) {
        //     try {
        //         $unsubscribe = "https://kinder.gpucloud.ru/unsubscribe?email=" . $order->email . "&email_hash=" . $order->email_hash;
        //         Mail::to($order->email)->send(new \App\Mail\Frame4($unsubscribe));
        //         $order->update([
        //             'sent' => 3
        //         ]);
        //     } catch (Throwable $e) {
        //         report($e);
        //     }
        // }
        return 0;
    }
}
