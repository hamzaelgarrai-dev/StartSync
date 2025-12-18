<?php

namespace App\Listeners;

use App\Events\UserRegistred;
use App\Jobs\RegistringEmailJob;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SendRegisterEmail
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(UserRegistred $event): void
    {
        $user = $event->user;

        RegistringEmailJob::dispatch($user);
    }
}
