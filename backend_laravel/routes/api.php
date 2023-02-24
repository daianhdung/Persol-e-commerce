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
Route::get('/product/{id}', [\App\Http\Controllers\api\ProductsController::class, 'detailProduct']);
Route::delete('/delete/{id}', [\App\Http\Controllers\api\ProductsController::class, 'delete']);
Route::post('/add', [\App\Http\Controllers\api\ProductsController::class, 'addproduct']);
Route::put('/update/{id}', [\App\Http\Controllers\api\ProductsController::class, 'updateporoduct']);

Route::post('/product-filter', [\App\Http\Controllers\api\ProductsController::class, 'paginationTest']);

//image api
Route::post('/images', [\App\Http\Controllers\api\ImageController::class, 'uploadFile']);
Route::get('/images/{category}/{fileName}', [\App\Http\Controllers\api\ImageController::class, 'getImage']);

//user api
Route::delete('/deleteUser/{id}', [\App\Http\Controllers\api\ProductsController::class, 'deleteUser']);

//mail
Route::get('/mails', [\App\Http\Controllers\api\ContactController::class, 'getAllMail']);
Route::post('/mail', [\App\Http\Controllers\api\ContactController::class, 'sendMail']);
Route::delete('/mail/{id}', [\App\Http\Controllers\api\ContactController::class, 'deteleMail']);

//Brand
Route::get('/brands', [\App\Http\Controllers\api\BrandController::class, 'getAllBrand']);
Route::get('/categories/{idCate}/brands', [\App\Http\Controllers\api\BrandController::class, 'getAllBrandByIdCategory']);
//Category
Route::get('/categories', [\App\Http\Controllers\api\CategoryController::class, 'getAllCategory']);
