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

Route::get('/user', [\App\Http\Controllers\AutheController::class, 'user']);

Route::get('/signup', [\App\Http\Controllers\api\UserController::class, 'register']);


Route::get('/getData', [\App\Http\Controllers\AutheController::class, 'dulieu']);
