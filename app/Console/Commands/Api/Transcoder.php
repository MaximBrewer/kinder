<?php

namespace App\Console\Commands\Api;

use Illuminate\Console\Command;

class Transcoder extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'api:transcode {path}';
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
        $params = ['login' => 'montage', 'password' => 'fz7skpFa'];
        $ch = curl_init('https://auth.platformcraft.ru/token');
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        $result = curl_exec($ch);
        curl_close($ch);
        $array = json_decode($result);
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, ["Content-Type: application/json", "Authorization: Bearer " . $array->access_token]);

        $data_array = [
            "presets" => ['5676a27cf9cb101634000002'],
            "del_original" => false
        ];

        for ($i = 1; $i <= 24; $i++) {
            curl_setopt(
                $ch,
                CURLOPT_URL,
                "https://filespot.platformcraft.ru/2/fs/container/" . $array->user_id . "/object/kindern/" . $this->argument('path') . "/" . $i . ".mp4"
            );
            curl_setopt($ch, CURLOPT_POST, 0);
            $object = json_decode(curl_exec($ch));
            try {
                curl_setopt(
                    $ch,
                    CURLOPT_URL,
                    'https://api.platformcraft.ru/1/transcoder/' . $object->id
                );
                curl_setopt($ch, CURLOPT_POST, 1);
                curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data_array));
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
                curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
                curl_setopt($ch, CURLOPT_HTTPHEADER, [
                    'Content-Type: application/json',
                    "Authorization: Bearer " . $array->access_token
                ]);
                $responce = json_decode(curl_exec($ch));
                var_dump($responce);
            } catch (\Exception $e) {
                var_dump($e->getMessage());
            }
            sleep(0.3);
        }
        curl_close($ch);
        return 0;
    }
}
