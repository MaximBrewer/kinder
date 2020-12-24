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
        $fp = fopen(storage_path('tmp/video.cron'), 'r+');
        // if (flock($fp, LOCK_EX | LOCK_NB)) {
        //     $orders = \App\Models\Order::whereNotNull('photo')->where('video', 0)->where('pic', 1)->orderBy('id', 'desc')->limit(50);
        //     $orders->update(['video' => 3]);
        //     fclose($fp);
        // }
        // if (isset($orders)) {
        //     $orders = $orders->get();
        //     $promises = [];
        //     foreach ($orders as $order) {
        //         $pathf = storage_path("app/public/orders/" . $order->id . "/final.jpg");
        //         if (is_file($pathf)) {
        //             $client = new \GuzzleHttp\Client();
        //             $promises[] = $client->postAsync("https://kinderhappynewyear.space/patch", [
        //                 'multipart' => [
        //                     [
        //                         'name'     => 'photo',
        //                         'contents' => fopen($pathf, "r"),
        //                         'filename' => basename($pathf)
        //                     ],
        //                     [
        //                         'name'     => 'order',
        //                         'contents' => $order->id
        //                     ],
        //                 ]
        //             ])->then(function ($response) {
        //                 echo 'I completed! ' . $response->getBody();
        //             });
        //             echo "Sent" . PHP_EOL;
        //         } else {
        //             echo "No image" . PHP_EOL;
        //             $order->update([
        //                 'video' => 2
        //             ]);
        //         }
        //     }
        //     \GuzzleHttp\Promise\Utils::unwrap($promises);
        // }
        return 0;
    }
}
