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

        $validator = Validator::make($requestData, [
            'fullname'  => 'required|string|max:30',
            'email'     => 'required|unique:users|email|string',
            'password'  => 'required|string|min:5',
        ]);

        if($validator->fails()){
            return $this->sendError('Thông tin tài khoản không hợp lệ !', $validator->errors());
        }

        $requestData['password'] = Hash::make($requestData['password']) ;
        $user = User::create($requestData);

        return $this->sendResponse($user, 'Đăng ký tài khoản thành công !');
    }
}
