<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;


class GoogleAuthController extends Controller
{

    
    public function redirect(){

        return Socialite::driver("google")->stateless()->redirect();
    }

    public function callbackGoogle(){
        try {
            $google_user = Socialite::driver("google")->stateless()->user();;
            $user = User::where('google_id' , $google_user->getId())->first();

            if(!$user){

                $new_user = User::create([
                    
                    "name" => $google_user->getName(),
                    "email" => $google_user->getEmail(),
                    "google_id"=>$google_user->getId(),
                    'role' => 'project_manager',


                ]);

            $token = $user->createToken('auth_token')->plainTextToken;

            return response()->json([
                'user'         => $user,
                'access_token' => $token,
                'token_type'   => 'Bearer',
            ]);

            }

        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'Google login failed',
                'error'   => $th->getMessage()
            ], 500);
        }
    }

    
}
