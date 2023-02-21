<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\ResponseController;
use App\Models\Brand;
use Illuminate\Http\Request;

class BrandController extends ResponseController
{
    //
    public function getAllBrand(){

        $brands = Brand::all();

        return $this->successResponse($brands, "Thành công");
    }

    public function getAllBrandByIdCategory($idCate){
        $brands = Brand::whereHas('categories', function ($query) use ($idCate){
            $query->where('id', $idCate);
        })->get();
        return $this->successResponse($brands, "Thành công");
    }
}
