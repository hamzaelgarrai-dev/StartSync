<?php

use App\Http\Controllers\AuthController;
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




Route::post('/register' , [AuthController::class , 'register']);
Route::post('/login', [AuthController::class, 'login']);
//newsletter
Route::post('/newsletter/subscribe', [NewsLetterController::class, 'subscribe']);


Route::middleware('auth:sanctum')->group(function () {
    Route::get('/me', [AuthController::class, 'me']);
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::get('/issues' , [ManagerController::class , 'feedbacks']);
    Route::get('/issues/stats' , [ManagerController::class , 'stats']);
    

    Route::get('/projects', [ManagerController::class, 'projects']);
    Route::post('/projects', [ManagerController::class, 'storeProject']);

    Route::get("/teams" , [ManagerController::class , 'teams']);
    Route::post('/teams', [ManagerController::class, 'storeTeam']);
    Route::delete('/teams/{teamId}', [ManagerController::class, 'deleteTeam']);
    Route::post('/teams/{team}/invite', [ManagerController::class, 'invite']);
    Route::get('/invitation/accept/{team}/{email}', [ManagerController::class, 'accept'])->name('team.accept');


    Route::get('/assigned-feedbacks', [MemberController::class, 'loadAssignedFeedback']);
    Route::patch('/issues/{feedback}/status', [MemberController::class, 'updateStatus']);
});

Route::prefix('auth')->group(function () {
    Route::get('/google/redirect', [GoogleAuthController::class, 'redirect']);
    Route::get('/google/callback', [GoogleAuthController::class, 'callbackGoogle']);
});







