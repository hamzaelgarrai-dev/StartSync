<?php

namespace App\Mail;

use App\Models\NewsLetter;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class SubscribtionEmail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public $subscriber;

    public function __construct(NewsLetter $subscriber)
    {
        $this->subscriber = $subscriber;
    }

    /**
     * Get the message envelope.
     */
    public function build()
    {
        return $this->subject('Welcome Email')
                    ->html("
                        <h1>Welcome, {$this->subscriber->email}!</h1>
                        <p>Thank you for joining our platform.</p>
                        <p>We are happy to have you with us!</p>
                    ");
    }
}
