<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class ClearCron extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'cron:clear';

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
        @unlink(storage_path('tmp/pic1.cron'));
        @unlink(storage_path('tmp/pic2.cron'));
        @unlink(storage_path('tmp/pic3.cron'));
        @unlink(storage_path('tmp/pic4.cron'));
        @unlink(storage_path('tmp/pic5.cron'));
        @unlink(storage_path('tmp/check.cron'));
        @unlink(storage_path('tmp/video1.cron'));
        @unlink(storage_path('tmp/video2.cron'));
        @unlink(storage_path('tmp/video3.cron'));
        @unlink(storage_path('tmp/video4.cron'));
        @unlink(storage_path('tmp/video5.cron'));
        return 0;
    }
}
