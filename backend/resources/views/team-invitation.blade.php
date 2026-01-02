@component('mail::message')
# Hello!

You have been invited to join the team **{{ $teamName }}**. 
Your account has been created successfully. You can now log in using the credentials below:

**Email:** {{ $email }}  
**Temporary Password:** `{{ $password }}`

@component('mail::button', ['url' => 'http://localhost:5173/login'])
Login to Your Dashboard
@endcomponent



Thanks,<br>
@endcomponent