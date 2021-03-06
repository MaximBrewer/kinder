<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class MakeVideo extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:video';

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
        exec("touch " . storage_path('tmp/video1.cron'));
        $fp = fopen(storage_path('tmp/video1.cron'), 'r+');
        if (flock($fp, LOCK_EX | LOCK_NB)) {
            try {
                $this->make();
            } catch (\Throwable $e) {
            }
            fclose($fp);
            return 0;
        }
        exec("touch " . storage_path('tmp/video2.cron'));
        $fp = fopen(storage_path('tmp/video2.cron'), 'r+');
        if (flock($fp, LOCK_EX | LOCK_NB)) {
            try {
                $this->make();
            } catch (\Throwable $e) {
            }
            fclose($fp);
            return 0;
        }
        exec("touch " . storage_path('tmp/video3.cron'));
        $fp = fopen(storage_path('tmp/video3.cron'), 'r+');
        if (flock($fp, LOCK_EX | LOCK_NB)) {
            try {
                $this->make();
            } catch (\Throwable $e) {
            }
            fclose($fp);
            return 0;
        }
        exec("touch " . storage_path('tmp/video4.cron'));
        $fp = fopen(storage_path('tmp/video4.cron'), 'r+');
        if (flock($fp, LOCK_EX | LOCK_NB)) {
            try {
                $this->make();
            } catch (\Throwable $e) {
            }
            fclose($fp);
            return 0;
        }
        exec("touch " . storage_path('tmp/video5.cron'));
        $fp = fopen(storage_path('tmp/video5.cron'), 'r+');
        if (flock($fp, LOCK_EX | LOCK_NB)) {
            try {
                $this->make();
            } catch (\Throwable $e) {
            }
            fclose($fp);
            return 0;
        }

        return 0;
    }

    private function make()
    {

        $orders = \App\Models\Order::whereNotNull('photo')->where('video', 0)->where('pic', 1)->orderBy('id', 'desc')->limit(100);
        $orders->update(['video' => 3]);

        if (isset($orders)) {
            $orders = $orders->get();
            $promises = [];
            foreach ($orders as $order) {

                $url = "https://montage-cache.cdnvideo.ru/montage/photo/" . $order->id . ".ts";
                $headers = @get_headers($url);
                echo $headers[0] . PHP_EOL;
                if (strpos($headers[0], '200')) {
                    $order->update([
                        'video' => 1
                    ]);
                    continue;
                }

                $pathf = storage_path("app/public/orders/" . $order->id . "/final.jpg");
                if (is_file($pathf)) {
                    if (filesize($pathf) > 400000) {
                        $client = new \GuzzleHttp\Client();
                        $promises[] = $client->postAsync("https://kinderhappynewyear.space/patch", [
                            'multipart' => [
                                [
                                    'name'     => 'photo',
                                    'contents' => fopen($pathf, "r"),
                                    'filename' => basename($pathf)
                                ],
                                [
                                    'name'     => 'order',
                                    'contents' => $order->id
                                ],
                            ]
                        ])->then(function ($response) use ($pathf, $order) {
                            if (strpos($response->getBody(), '200')) {
                                $order->update([
                                    'video' => 1
                                ]);
                            }
                            echo 'I completed! ' . $response->getBody() . PHP_EOL;
                            echo $pathf . PHP_EOL;
                            echo $order->id . PHP_EOL;
                        });
                        echo "Sent " . $order->id . PHP_EOL;
                    } else {
                        @unlink($pathf);
                        $order->update([
                            'pic' => 0,
                            'video' => 0
                        ]);
                    }
                } else {
                    echo "No image" . PHP_EOL;
                    $order->update([
                        'pic' => 0,
                        'video' => 0
                    ]);
                }
            }
            \GuzzleHttp\Promise\Utils::unwrap($promises);
        }
    }
}
