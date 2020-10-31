<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Frame3 extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    protected $unsubscribe;
    protected $video;


    public function __construct($unsubscribe, $video)
    {
        $this->unsubscribe = $unsubscribe;
        $this->video = $video;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Поздравление от Kinder Дедушки Мороза!')
            ->addTextHeader('List-Unsubscribe', $this->unsubscribe)
            ->view('mail.frame3', [
                'unsubscribe' => $this->unsubscribe,
                'video' => $this->video
            ]);
    }
}
