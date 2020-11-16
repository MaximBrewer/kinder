<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class ForeachUrls extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'foreach:urls';

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
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);

        for ($i = 1; $i <= 158; $i++) {
            curl_setopt(
                $ch,
                CURLOPT_URL,
                "https://kinder.gpucloud.ru/video/g4ERrSzydgfxJwVKsr7a1z5ZQ2ku68bwDhTifWSyCCtugYtF8DAFccNVdKBb2QRQ0vw3zvfZwL1eX9cz?name=" . $i
            );
            curl_exec($ch);
            if (!curl_errno($ch)) {
              $info = curl_getinfo($ch);
              if($info['http_code'] != 200){
                echo $info['http_code'] . ' ' . $i . PHP_EOL;
              }
            } else {
                var_dump(curl_errno($ch));
            }
            sleep(0.3);
        }

        curl_close($ch);

        return 0;
    }
}
