<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Throwable;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Cache;

class sendPhoto extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'cron:photo';

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
        $fp = fopen(storage_path('tmp/lock.cron'), 'r+');
        if (flock($fp, LOCK_EX | LOCK_NB)) {
            $orders = \App\Models\Order::where('video', 3)->orderBy('id', 'desc')->limit(100);
            $orders = $orders->get();
            $promises = [];
            foreach ($orders as $order) {
                $url = "https://montage-cache.cdnvideo.ru/montage/photo/" . $order->id . ".ts";
                $headers = @get_headers($url);
                if (strpos($headers[0], '200')) {
                    $order->update([
                        'video' => 1
                    ]);
                }
            }
            $orders = \App\Models\Order::whereNotNull('photo')->where('video', 0)->orderBy('id', 'desc')->limit(100);
            $orders->update(['video' => 3]);
            fclose($fp);
        }
        $orders = $orders->get();
        $promises = [];
        foreach ($orders as $order) {
            if (is_file(storage_path("app/public/" . $order->photo))) {
                $client = new \GuzzleHttp\Client();
                $promises[] = $client->postAsync("https://kinderhappynewyear.space/patch", [
                    'multipart' => [
                        [
                            'name'     => 'photo',
                            'contents' => fopen(storage_path("app/public/" . $order->photo), "r"),
                            'filename' => basename(storage_path("app/public/" . $order->photo))
                        ],
                        [
                            'name'     => 'order',
                            'contents' => $order->id
                        ],
                    ]
                ])->then(function ($response) {
                    echo 'I completed! ' . $response->getBody();
                });
                echo "Sent" . PHP_EOL;
            } else {
                echo "No image" . PHP_EOL;
                $order->update([
                    'video' => 2
                ]);
            }
        }
        \GuzzleHttp\Promise\Utils::unwrap($promises);
        return 0;
    }
}
