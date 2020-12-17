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
            $orders = \App\Models\Order::whereNotNull('photo')->where('video', 0)->orderBy('id', 'desc')->limit(10)->get();
            foreach ($orders as $order) {
                $url = "https://montage-cache.cdnvideo.ru/montage/photo/" . $order->id . ".ts";
                $headers = @get_headers($url);
                if (strpos($headers[0], '200')) {
                    $order->update([
                        'video' => 1
                    ]);
                } else {
                    if (is_file(storage_path("app/public/" . $order->photo))) {
                        $client = new \GuzzleHttp\Client();
                        $client->request('POST', "https://kinderhappynewyear.space/patch", [
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
                        ]);
                    } else {
                        $order->update([
                            'video' => 2
                        ]);
                    }
                }
            }
            fclose($fp);
        }
        return 0;
    }
}
