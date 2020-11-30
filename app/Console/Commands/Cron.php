<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Throwable;
use Illuminate\Support\Facades\Mail;

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
        $orders = \App\Models\Order::where('status', 'confirmed')->where('sent', 0)->orderBy('id', 'desc')->limit(5)->get();
        foreach($orders as $order){
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
