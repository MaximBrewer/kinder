<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class CheckPhoto extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'check:photo';

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
        $orders = \App\Models\Order::orderBy('id', 'desc')->limit(1000000);
        $orders = $orders->get();
        foreach ($orders as $order) {
            $url = "/var/www/html/kinder.gpucloud.ru/storage/app/public/orders/" . $order->id . "/final.jpg";
            if (is_file($url) && filesize($url) < 400000) {
                echo filesize($url) . ' ' . $order->id . PHP_EOL;
                @unlink($url);
                $order->update([
                    'pic' => 5,
                    'video' => 5,
                ]);
            }
        }
        return 0;
    }
}
