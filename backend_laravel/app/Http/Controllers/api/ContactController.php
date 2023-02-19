<?php

namespace App\Http\Controllers\api;


use App\Http\Controllers\ResponseController;
use App\Mail\PersolMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Mockery\Exception;


class ContactController extends ResponseController
{
    //
    public function sendMail(Request $request)
    {

        $data = [
            'subject' => "Thank you for contacting us",
            'body' => "Dear valued customer,\r\nThank you for contacting us. We have received your message and will respond as soon as possible. If your inquiry requires an urgent response, please call our support team at 1-800-123-4567.\n\nBest regards,\nThe Support Team"
        ];

        try {
            Mail::to($request->email)->send(new PersolMail($data));
            return $this->successResponse($data, "Thành công");
        }catch (Exception $exception){
            return $this->errorResponse($exception, 'Thất bại');
        }
    }
}
