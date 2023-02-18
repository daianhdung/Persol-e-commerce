<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\ResponseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ImageController extends ResponseController
{
    //
    public function uploadFile(Request $request){
        $file = $request->file('image');
        $fileName = $file->getClientOriginalName();
        $path = $file->storeAs('public/images', $fileName);

        return response()->json([
            'path' => $path,
            'url' => Storage::url($path)
        ]);
    }

    public function getImage($fileName){
        $path = "public/images/{$fileName}";
        if(!Storage::exists($path)){
            return $this->errorResponse('Image not found');
        }
        $url = Storage::url($path);
        $image = Storage::get($path);
        return response($image, 200)->header('Content-Type', Storage::mimeType($path));
    }
}
