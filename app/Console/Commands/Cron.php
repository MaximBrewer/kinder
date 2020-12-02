<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Throwable;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Cache;

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

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $cnt = \App\Models\Order::whereIn('status', ['new', 'confirmed'])->count();
        Cache::put('total', $cnt);
        file_put_contents(
            storage_path(('app/public') . '/orders.js'),
            'window.App.data.orders = ' . $cnt
        );
        $orders = \App\Models\Order::where('status', 'confirmed')->where('sent', 0)->orderBy('id', 'desc')->limit(50)->get();
        foreach ($orders as $order) {
            try {
                $unsubscribe = "https://kinder.gpucloud.ru/unsubscribe?email=" . $order->email . "&email_hash=" . $order->email_hash;
                Mail::to($order->email)->send(new \App\Mail\Frame3($unsubscribe, $order->hash));
                $order->update([
                    'sent' => 1
                ]);
            } catch (Throwable $e) {
                report($e);
            }
        }
        return 0;
    }
}
