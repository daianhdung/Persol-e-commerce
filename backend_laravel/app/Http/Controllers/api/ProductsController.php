<?php
namespace App\Http\Controllers\api;
use App\Models\Product;
use App\Http\Controllers\ResponseController;
use PhpParser\Node\Expr\Isset_;
use Illuminate\Http\Request;

class ProductsController extends ResponseController{
    public function show(){
        $product = Product::all();
        return $this->successResponse($product,'thanh cong');
    }

    public function showbyId($id) {
        $product = Product::find($id);
        if(is_null($product)) {
            return response()->json(['message' => 'Product not found']);
        }
        return response()->json($product::find($id),200);
    }

    public function delete(Product $product,$id){
        $product = Product::find($id);
        if(is_null($product)) {
            return response()->json(['message' => 'Product not found']);
        }
        $product->delete();
        return $this->successResponse($product,'thanh cong');

    }


    public function addproduct(Request $request) {
        $product = Product::create($request->all());
        return response($product,201);
    }



    public function updateproduct(Request $request, $id){
        $product= Product::find($id);
        if(is_null($product)) {
            return response()->json(['message' => 'Product not found']);
        }
        $product -> update($request->all());
        return response($product,200);

    }



}
