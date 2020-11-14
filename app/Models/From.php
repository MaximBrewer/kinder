<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class From extends Model
{
    use HasFactory;
    protected $fillable = ['chunks1920', 'chunks1280', 'chunks1024', 'chunks640'];
}
