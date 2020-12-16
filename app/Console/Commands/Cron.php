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
        file_put_contents(
            storage_path(('app/public') . '/orders.js'),
            'window.App.data.orders = ' . $cnt
        );
        file_put_contents(
            storage_path(('app/public') . '/total.json'),
            '{"total":' . $cnt . '}'
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

        $fp = fopen(storage_path('tmp/lock.cron'), 'r+');

        if (flock($fp, LOCK_EX | LOCK_NB)) {
            $orders = \App\Models\Order::whereNotNull('photo')->where('video', 0)->orderBy('id', 'desc')->limit(10)->get();
            foreach ($orders as $order) {
                try {
                    $filepath = storage_path(('app/public/' . $order->id) . "/final.ts");

                    if (!is_file($filepath)) {
                        exec("./makevideo.sh " . storage_path(('app/public/') . $order->photo . " " . storage_path(('app/public/') . $order->id)));
                    }

                    var_dump([$filepath => is_file($filepath)]);


                    if (is_file($filepath)) {

                        $client = new \GuzzleHttp\Client();

                        $response = $client->post('https://auth.platformcraft.ru/token', [
                            'form_params' => ['login' => 'montage', 'password' => 'fz7skpFa']
                        ]);
                        $array = json_decode($response->getBody()->getContents());


                        $client->request('POST', "https://filespot.platformcraft.ru/2/fs/container/" . $array->user_id . "/object/photo/" . $order->id . ".ts", [
                            'multipart' => [
                                [
                                    'name'     => 'file',
                                    'contents' => fopen($filepath, "r"),
                                    'filename' => $order->id . ".ts"
                                ],
                            ],
                            'headers' => [
                                "Authorization" => "Bearer " . $array->access_token
                            ]
                        ]);

                        @unlink(storage_path('app/public/orders/' . $order->id . '/') . "tmp.png");
                        @unlink(storage_path('app/public/orders/' . $order->id . '/') . "perspective.png");
                        @unlink(storage_path('app/public/orders/' . $order->id . '/') . "rotate.png");
                        @unlink(storage_path('app/public/orders/' . $order->id . '/') . "final.jpg");
                        @unlink(storage_path('app/public/orders/' . $order->id . '/') . "final.mp4");
                        @unlink(storage_path('app/public/orders/' . $order->id . '/') . "final.ts");

                        $order->update([
                            'video' => 1
                        ]);
                    }
                } catch (Throwable $e) {
                    report($e);
                }
            }
            fclose($fp);
        }

        return 0;
    }
}
