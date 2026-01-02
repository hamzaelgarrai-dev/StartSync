<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\GoogleAuthController;
use App\Http\Controllers\ManagerController;
use App\Http\Controllers\MemberController;
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



Route::prefix('auth')->group(function () {
    Route::get('/google/redirect', [GoogleAuthController::class, 'redirect']);
    Route::get('/google/callback', [GoogleAuthController::class, 'callbackGoogle']);
});


Route::post('/register' , [AuthController::class , 'register']);
Route::post('/login', [AuthController::class, 'login']);
//newsletter
Route::post('/newsletter/subscribe', [NewsLetterController::class, 'subscribe']);


Route::middleware('auth:sanctum')->group(function () {
    Route::get('/me', [AuthController::class, 'me']);
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::get('/feedbacks' , [ManagerController::class , 'feedbacks']);
    Route::get('/feedbacks/stats' , [ManagerController::class , 'stats']);
    Route::post('/feedback', [ClientController::class, 'createFeedback']);
    

    Route::get('/projects', [ManagerController::class, 'projects']);
    Route::post('/projects', [ManagerController::class, 'storeProject']);

    Route::get("/teams" , [ManagerController::class , 'teams']);
    Route::post('/teams', [ManagerController::class, 'storeTeam']);
    Route::delete('/teams/{teamId}', [ManagerController::class, 'deleteTeam']);
    Route::post('/teams/{team}/invite', [ManagerController::class, 'invite']);


    Route::get('/assigned-feedbacks', [MemberController::class, 'loadAssignedFeedback']);
    Route::patch('/feedbacks/{feedback}/status', [MemberController::class, 'updateStatus']);
});









