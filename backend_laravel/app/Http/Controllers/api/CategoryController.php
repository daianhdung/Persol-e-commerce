<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\ResponseController;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends ResponseController
{
    //

    public function getAllCategory(){
        $category = Category::with('brands')->get();

        return $this->successResponse($category, "Thaành công");
    }

    public function createCategory(Request $request){
        $requestData = $request->all();

        $user = Category::create($requestData);

        return $this->successResponse($user, 'Tạo thương hiệu thành công !');
    }

    public function updateCategoryId( $id ,Request $request){
        $requestData = $request->all();
        $user = Category::find($id);
        try{
            $user->update($requestData);
            return $this->successResponse($user, 'Cập nhật thương hiệu thành công !');
        }catch (Exception $e){
            return $this->errorResponse($e, 'Cập nhật thương hiệu thất bại !');
        }
    }

    public function deleteCategory($id){
        $user = Category::find($id);
        if(is_null($user)) {
            return $this->errorResponse("Không tìm thấy thương hiệu");
        }
        $user->delete();
        return $this->successResponse($user,'Xóa thương hiệu thành công');
    }
}
