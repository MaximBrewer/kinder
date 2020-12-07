<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class Clear extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'clear:orders';

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

        $orders = \App\Models\Order::limit(500)->get();
        foreach ($orders as $order) {
            $delete = \App\Models\Order::where('id', '!=', $order->id)
                ->where('name_id', $order->name_id)
                ->where('age', $order->age)
                ->where('achieve_id', $order->achieve_id)
                ->where('hobby_id', $order->hobby_id)
                ->where('email', $order->email)
                ->where('gift_id', $order->gift_id)
                ->where('name_id', $order->name_id)
                ->where('name_id', $order->name_id)
                ->get();

            var_dump($delete);
            break;
        }
        return 0;
    }
}
