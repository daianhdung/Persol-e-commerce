<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\ResponseController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends ResponseController
{
    public function register(Request $request){



        $requestData = $request->all();

        $requestData['password'] = Hash::make($requestData['password']);
        $requestData['role_id'] = 1;
        $user = User::create($requestData);

        return $this->successResponse($user, 'Đăng ký tài khoản thành công !');
    }
}
