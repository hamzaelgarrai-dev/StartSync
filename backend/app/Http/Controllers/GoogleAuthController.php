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

         return response()->json([
                'user'         => $user,
                'access_token' => $token,
                'token_type'   => 'Bearer',
            ]);

    } catch (\Exception $e) {
        return response()->json([
            'message' => 'Google login failed',
            'error' => $e->getMessage()
        ], 500);
    }
    }

    
}

