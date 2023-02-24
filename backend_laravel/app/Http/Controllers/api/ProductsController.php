<?php

namespace App\Http\Controllers\api;

use App\Models\Product;
use App\Http\Controllers\ResponseController;
use Illuminate\Support\Facades\DB;
use PhpParser\Node\Expr\Isset_;
use Illuminate\Http\Request;

class ProductsController extends ResponseController
{
    public function show()
    {
        $product = Product::all();
        return $this->successResponse($product, 'thanh cong');
    }

    public function detailProduct($id)
    {
        $product = Product::with('imageProduct', 'brand', 'category')->find($id);
        if (is_null($product)) {
            return response()->json(['message' => 'Product not found']);
        }

        return $this->successResponse($product, "Thành công");
    }

    public function delete(Product $product, $id)
    {
        $product = Product::find($id);
        if (is_null($product)) {
            return response()->json(['message' => 'Product not found']);
        }
        $product->delete();
        return $this->successResponse($product, 'thanh cong');

    }


    public function addproduct(Request $request)
    {
        $product = Product::create($request->all());
        return response($product, 201);
    }

    public function updateproduct(Request $request, $id)
    {
        $product = Product::find($id);
        if (is_null($product)) {
            return response()->json(['message' => 'Product not found']);
        }
        $product->update($request->all());
        return response($product, 200);

    }

    public function paginationTest(Request $request)
    {
        $categoryIds = $request->categoryIds;
        $brandIds = $request->brandIds;
        $keyword = $request->keyword;
        $sort = $request->sort;

        $productQuery = Product::where('name', 'like', '%' . $keyword . '%');

        if (!empty($categoryIds)) {
            $productQuery->whereIn("category_id", $categoryIds);
        }
        if (!empty($brandIds)) {
            $productQuery->whereIn("brand_id", $brandIds);
        }


        if ($sort === 'az') {
            $productQuery->orderBy('name', 'asc');
        } elseif ($sort === 'za') {
            $productQuery->orderBy('name', 'desc');
        } elseif ($sort === 'ascPrice') {
            $productQuery->orderBy('price', 'asc');
        } elseif ($sort === 'descPrice') {
            $productQuery->orderBy('price', 'desc');
        }

        $product = $productQuery->paginate(12);

        return $this->successResponse($product, "Thành công");
    }
}
