<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/signup', [\App\Http\Controllers\api\UserController::class, 'register']);

Route::post('/login', [\App\Http\Controllers\api\AuthController::class, 'login']);
Route::get('/me', [\App\Http\Controllers\api\AuthController::class, 'test']);

