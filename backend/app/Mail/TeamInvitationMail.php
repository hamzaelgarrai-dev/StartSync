<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class TeamInvitationMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
  public $name;
public $email;
public $password;
public $teamName;
    public function __construct($name, $email, $password, $teamName) {

    $this->name = $name;
    $this->email = $email;
    $this->password = $password;
    $this->teamName = $teamName;

   }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope {

      return new Envelope(subject: "You're invited to join {$this->teamName}");
    }  

    /**
     * Get the message content definition.
     */
    public function content(): Content {

      return new Content(markdown: 'team-invitation');
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
