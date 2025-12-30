@component('mail::message')
# Hello!

You have been invited to join the team **{{ $teamName }}**. 
Click the button below to accept the invitation and start collaborating.

@component('mail::button', ['url' => $url])
Join Team
@endcomponent

This invitation link will expire in 7 days.

Thanks,<br>
{{ config('app.name') }}
@endcomponent