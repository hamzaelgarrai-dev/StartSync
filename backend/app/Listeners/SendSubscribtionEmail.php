<?php

namespace App\Listeners;

use App\Events\SubscribtionEvent;
use App\Mail\SubscribtionEmail;
use App\Models\NewsLetter;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class SendSubscribtionEmail
{
    /**
     * Create the event listener.
     */
    public $email;
    public function __construct(NewsLetter $email)
    {
      $this->email=$email; 
    }

    /**
     * Handle the event.
     */
    public function handle(SubscribtionEvent $event): void
    {
        $subscriber = $event->subscription;

        Mail::to($subscriber->email)
            ->send(new SubscribtionEmail($subscriber));
    }
}
