<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class CheckVideo extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'check:video';

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
        exec("touch " . storage_path('tmp/check.cron'));
        $fp = fopen(storage_path('tmp/check.cron'), 'r+');
        if (flock($fp, LOCK_EX | LOCK_NB)) {
            try {
                $orders = \App\Models\Order::where('video', '<>', 9)->where('pic', 1)->orderBy('id', 'desc')->limit(5000);
                echo $orders->count();
                $orders = $orders->get();
                foreach ($orders as $order) {
                    $url = "https://montage-cache.cdnvideo.ru/montage/photo/" . $order->id . ".ts";
                    $headers = @get_headers($url);
                    echo $headers[0] . PHP_EOL;
                    if (strpos($headers[0], '200')) {
                        $order->update([
                            'video' => 9
                        ]);
                    } else {
                        $order->update([
                            'video' => 0
                        ]);
                    }
                }
            } catch (\Throwable $e) {
            }
            fclose($fp);
        }
        return 0;
    }
}
