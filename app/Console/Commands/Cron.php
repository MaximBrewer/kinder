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
        $emails = DB::table('tmp')->limit(1000)->get();
        foreach ($emails as $email) {
            $orders = \App\Models\Order::where('email', $email->mail)->where('status', 'confirmed')->get();
            foreach ($orders as $order) {
                try {
                    $unsubscribe = "https://kinder.gpucloud.ru/unsubscribe?email=" . $order->email . "&email_hash=" . $order->email_hash;
                    Mail::to($order->email)->send(new \App\Mail\Frame3($unsubscribe, $order->hash));
                    $order->update([
                        'sent' => 2
                    ]);
                } catch (Throwable $e) {
                    report($e);
                }
            }
            DB::table('tmp')->where('id', $email->id)->delete();
        }
        $orders = \App\Models\Order::where('status', 'confirmed')->where('sent', 0)->orderBy('id', 'desc')->limit(100)->get();
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
