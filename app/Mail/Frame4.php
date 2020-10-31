<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Frame4 extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    protected $unsubscribe;


    public function __construct($unsubscribe)
    {
        $this->unsubscribe = $unsubscribe;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $this->subject('Поздравление от Kinder Дедушки Мороза!')
            ->view('mail.frame4', [
                'unsubscribe' => $this->unsubscribe
            ]);
        $this->withSwiftMessage(function ($message) {
            $message->getHeaders()
                ->addTextHeader('List-Unsubscribe', $this->unsubscribe);
        });
    }
}
