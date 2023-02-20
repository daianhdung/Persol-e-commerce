<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model{
    protected $table = 'product';

    protected $primaryKey = 'id';

    public $timestamps = false;

    protected $fillable = [
        'id',
        'name',
        'main_image',
        'amount_of_sold',
        'price',
        'category_id',
        'brand_id',
    ];
}
?>
