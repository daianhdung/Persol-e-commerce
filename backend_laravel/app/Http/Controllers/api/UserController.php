<?php

namespace App\Http\Controllers\api;

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

    public function deleteUser(User $user,$id){
        $user = User::find($id);
        if(is_null($user)) {
            return response()->json(['message' => 'Product not found']);
        }
        $user->delete();
        return $this->successResponse($user,'thanh cong');

    }

    //sua lai add user
    
    public function addproduct(Request $request) {
        $user = User::create($request->all());
        return response($user,201);
    }





}
