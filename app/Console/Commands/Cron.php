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
        $orders = \App\Models\Order::where('status', 'confirmed')->where('sent', '<', 3)->orderBy('id', 'desc')->limit(1000);
        $orders->update(['sent' => '4']);
        $orders = \App\Models\Order::where('status', 'confirmed')->where('sent', 4)->get();
        foreach ($orders as $order) {
            echo $order->email . PHP_EOL;
            try {
                $unsubscribe = "https://kinder.gpucloud.ru/unsubscribe?email=" . $order->email . "&email_hash=" . $order->email_hash;
                Mail::to($order->email)->send(new \App\Mail\Frame3($unsubscribe, $order->hash));
                $order->update([
                    'sent' => 3
                ]);
            } catch (Throwable $e) {
                report($e);
            }
        }
        $orders = \App\Models\Order::where('status', 'canceled')->where('sent', '<', 3)->orderBy('id', 'desc')->limit(1000);
        $orders->update(['sent' => '4']);
        $orders = \App\Models\Order::where('status', 'canceled')->where('sent', 4)->get();
        $orders = $orders->get();
        foreach ($orders as $order) {
            try {
                $unsubscribe = "https://kinder.gpucloud.ru/unsubscribe?email=" . $order->email . "&email_hash=" . $order->email_hash;
                Mail::to($order->email)->send(new \App\Mail\Frame4($unsubscribe));
                $order->update([
                    'sent' => 3
                ]);
            } catch (Throwable $e) {
                report($e);
            }
        }
        return 0;
    }
}
