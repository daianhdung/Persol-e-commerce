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
        $category = Category::all();

        return $this->successResponse($category, "Thaành công");
    }
}
