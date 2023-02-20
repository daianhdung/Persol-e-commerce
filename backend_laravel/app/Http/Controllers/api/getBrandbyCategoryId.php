<?php
namespace App\Http\Controllers\api;

use App\Models\Brand;
use App\Models\Category;;
use App\Http\Controllers\ResponseController;


class getBrandbyCategoryId extends ResponseController{
    public function updateproduct($id){ 
        $product = Category::find($id);
        if(is_null($product)) {
            return response()->json(['message' => 'Fail']);
        }
        $product = Brand::all();
        return $this->successResponse($product,'thanh cong');

    }

    

}