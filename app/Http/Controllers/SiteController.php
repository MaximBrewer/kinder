<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class SiteController extends Controller
{
    //
    public function index()
    {
        return view('app');
    }
    public function live()
    {
        return view('live');
    }
    public function liveIframe()
    {
        return view('live-iframe');
    }
    public function patch(Request $request)
    {
        $unsubscribe = "https://www.kinder.com";
        Mail::to('pimax1978@icloud.com')->send(new \App\Mail\Frame1($unsubscribe));
        return true;
    }
}
