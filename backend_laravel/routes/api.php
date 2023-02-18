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

//authentication api
Route::post('/signup', [\App\Http\Controllers\api\UserController::class, 'register']);
Route::post('/login', [\App\Http\Controllers\api\AuthController::class, 'login']);

//product api
Route::get('/product', [\App\Http\Controllers\api\ProductsController::class, 'show']);
Route::get('/product/{id}', [\App\Http\Controllers\api\ProductsController::class, 'showbyId']);
Route::delete('/delete/{id}', [\App\Http\Controllers\api\ProductsController::class, 'delete']);
Route::post('/add', [\App\Http\Controllers\api\ProductsController::class, 'addproduct']);
Route::put('/update/{id}', [\App\Http\Controllers\api\ProductsController::class, 'updateproduct']);

//image api
Route::post('/images', [\App\Http\Controllers\api\ImageController::class, 'uploadFile']);
Route::get('/images/{fileName}', [\App\Http\Controllers\api\ImageController::class, 'getImage']);

//user api
Route::delete('/deleteUser/{id}', [\App\Http\Controllers\api\ProductsController::class, 'deleteUser']);

