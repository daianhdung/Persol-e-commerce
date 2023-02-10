<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{

    protected $table = 'user';
    public $timestamps = false;
    protected $primaryKey = 'id';
    protected $fillable = [
        'email',
        'fullname',
        'password',
        'phone',
        'address',
        'date',
        'role_id'
    ];

}
