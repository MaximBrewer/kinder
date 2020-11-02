<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\View;

class Frame1 extends Mailable
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
        $mailPlain = View::make('mail.text.frame1');
        $this->subject('Поздравление от Kinder Дедушки Мороза!')
            ->view('mail.html.frame1', [
                'unsubscribe' => $this->unsubscribe
            ]);
        $this->withSwiftMessage(function ($message) use ($mailPlain) {
            $message->addPart($mailPlain, 'text/plain')->getHeaders()
                ->addTextHeader('List-Unsubscribe', $this->unsubscribe);
        });
    }
}
