<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Laravel\Socialite\Facades\Socialite;


class GoogleAuthController extends Controller
{

    
    public function redirect(){

        return Socialite::driver("google")->stateless()->redirectUrl(env('GOOGLE_REDIRECT_URI'))->redirect();
    }

    public function callbackGoogle(){
        try {
        $googleUser = Socialite::driver('google')->stateless()->user();

        $user = User::updateOrCreate(
            ['email' => $googleUser->getEmail()], 
            [
                'name' => $googleUser->getName(),
                'google_id' => $googleUser->getId(),
                'password' => bcrypt(Str::random(16)),
                'role' => "project_manager" 
            ]
        );

        $token = $user->createToken('auth_token')->plainTextToken;

        $data = json_encode([
            'user' => $user,
            'access_token' => $token,
            'token_type' => 'Bearer',
        ]);

        return response("
            <script>
                window.opener.postMessage({
                    type: 'AUTH_SUCCESS',
                    payload: $data
                }, 'http://127.0.0.1:5173');
                window.close();
            </script>
        ", 200);

    } catch (\Exception $e) {
        return response("<script>window.close();</script>", 500);
    }
    }

    
}

