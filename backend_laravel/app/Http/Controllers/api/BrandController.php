<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\ResponseController;
use App\Models\Brand;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;

class BrandController extends ResponseController
{
    //
    public function getAllBrand(){

        $brands = Brand::with('categories')->get();
        return $this->successResponse($brands, "Thành công");
    }

    public function getAllBrandByIdCategory($idCate){
        $brands = Brand::whereHas('categories', function ($query) use ($idCate){
            $query->where('id', $idCate);
        })->get();
        return $this->successResponse($brands, "Thành công");
    }

    public function createBrand(Request $request){
//Request        $brand = '';
//        DB::transaction(function() use($request) {
//            $requestData = $request->all();
//            $brand = Brand::create($requestData);
//
//
//            $categories = $request->category;
//            $brand->id;

//            $brandName = $request->brandName;
            // gọi câu query insert brandname, sau đó lấy đc id brandname
//            $brandId = 7;
//
//            $listCat = $request->categories;
//            $listCat = [
//              1,2,3
//            ];
//
//            $dataInsert = [];
//            foreach($listCat as $cat){
//                $dataInsert[] = [
//                    'category_id' => $cat,
//                    'brand_id' => $brandId
//                ];
//            }
//        });
//
//
//        return $this->successResponse($brand, 'Tạo thương hiệu thành công !');
    }

    public function updateBrandId( $id ,Request $request){
        $requestData = $request->all();
        $user = Brand::find($id);
        try{
            $user->update($requestData);
            return $this->successResponse($user, 'Cập nhật thương hiệu thành công !');
        }catch (Exception $e){
            return $this->errorResponse($e, 'Cập nhật thương hiệu thất bại !');
        }
    }

    public function deleteBrand($id){
        $user = Brand::find($id);
        if(is_null($user)) {
            return $this->errorResponse("Không tìm thấy thương hiệu");
        }
        $user->delete();
        return $this->successResponse($user,'Xóa thương hiệu thành công');

    }

//    public function getBrandByCategory($arrayCate){
//        $arrayIdCate = array_column($arrayCate, 'id');
//
//        $result = [];
//        foreach($arrayIdCate as $item){
//            $brands = Brand::whereHas('categories', function ($query) use ($item){
//                $query->where('id', $item);
//            })->get()->toArray();
////            dd($arrayCate, array_column($arrayCate, 'name', 'id'));
//
//            $sample = [
//                'key a' => 1,
//                'key b' => 2,
//                'key c' => 3
//            ];
//
//            dd(array_search(4, $sample));
//            $index = array_search($item, array_column($arrayCate, 'id'));
//            $result[$arrayCate[$index]['name']] = $brands;
//        }
//        dd($result);
//        return $result;
//    }
//
//    public function getBrandCategory(){
//        $arrayCate = $this->getCategory([1,2,3]);
//        $result = $this->getBrandByCategory($arrayCate);
//
//        return $this->successResponse($result, "Thành công");
//    }
//
//    public function getCategory($ids){
//        $ids = Arr::wrap($ids);
//
//        $result = Category::whereIn('id', $ids)->select('id', 'name')->get()->toArray();
//
//        return $result;
//    }
}
