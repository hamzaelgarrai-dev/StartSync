<?php

namespace App\Http\Controllers;

use App\Events\UserRegistred;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

    public function register(RegisterRequest $request)      {

          $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => $request->password, 
            ]);

            UserRegistred::dispatch($user);

            $token = $user->createToken('auth_token')->plainTextToken;

            return response()->json([
                'message' => 'Registration successful',
                'user' => $user,
                'access_token' => $token,
                'token_type' => 'Bearer',
            ], 201);
    }

    public function login(LoginRequest $request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'message' => 'Invalid credentials'
            ], 401);
        }

        $user = Auth::user();
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'login successful',
            'user' => $user,
            'access_token' => $token,
            'token_type' => 'Bearer',
        ],200);
    }

     public function me(Request $request)
    {
        return response()->json($request->user());
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Logged out']);
    }


}
