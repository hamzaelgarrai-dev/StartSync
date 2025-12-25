<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\GoogleAuthController;
use App\Http\Controllers\ManagerController;
use App\Http\Controllers\NewsLetterController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});




Route::post('/register' , [AuthController::class , 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/me', [AuthController::class, 'me']);
    Route::post('/logout', [AuthController::class, 'logout']);

    
});

Route::prefix('auth')->group(function () {
    Route::get('/google/redirect', [GoogleAuthController::class, 'redirect']);
    Route::get('/google/callback', [GoogleAuthController::class, 'callbackGoogle']);
});


Route::get('/issues' , [ManagerController::class , 'index']);
Route::get('/issues/stats' , [ManagerController::class , 'stats']);
Route::get("/teams" , [ManagerController::class , 'teams']);




//newsletter
Route::post('/newsletter/subscribe', [NewsLetterController::class, 'subscribe']);