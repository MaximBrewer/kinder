<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class OrdersController extends Controller
{
    public function total(Request $request)
    {
        return [
            'total' => (int)Cache::get('total')
        ];
    }
}
