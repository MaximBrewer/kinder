<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use App\Http\Resources\Bet as BetResource;
use App\Models\Order;

class Refresh implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    /**
     * Create a new event instance.
     *
     * @return void
     */

    public $cnt;

    public function __construct()
    {
        $this->cnt = Order::whereIn('status', ['new', 'confirmed'])->count();
        file_put_contents(
            storage_path(('app/public') . '/orders.js'),
            'window.App.data.orders = ' . $this->cnt
        );
    }

    public function broadcastAs()
    {
        return 'refresh';
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel('kinder');
    }
}
