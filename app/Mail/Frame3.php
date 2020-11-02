<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\View;

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
        $mailPlain = View::make('mail.text.frame3', [
            'video' => $this->video
        ]);
        $this->subject('Поздравление от Kinder Дедушки Мороза!')
            ->view('mail.html.frame3', [
                'unsubscribe' => $this->unsubscribe,
                'video' => $this->video
            ]);
        $this->withSwiftMessage(function ($message) use ($mailPlain) {
            $message->addPart($mailPlain, 'text/plain')->getHeaders()
                ->addTextHeader('List-Unsubscribe', $this->unsubscribe);
        });
    }
}
