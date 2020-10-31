<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;


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

    public function unsubscribe()
    {
        return view('unsubscribe');
    }

    public function liveIframe()
    {
        return view('live-iframe');
    }

    public function patch(Request $request)
    {
        $request->validate([
            'photo' => 'required|image|mimes:jpeg,png,jpg,gif,svg,webp',
            'name' => 'required|exists:names,id',
            'achieve' => 'required|exists:achieves,id',
            'from' => 'required|exists:froms,id',
            'hobby' => 'required|exists:hobbies,id',
            'gift' => 'required|exists:gifts,id',
            'email' => 'email:rfc,dns',
            'age' => 'integer|required|min:1|max:12',
            'gender' => 'required|in:boy,girl',
            'agree' => 'accepted',
            'cmail' => 'accepted',
            'personal' => 'accepted'
        ]);

        $path = $request->file('photo')->store('public/orders');

        Order::create([
            'photo' => str_replace("public/", "", $path),
            'name_id' => $request->name,
            'age' => $request->age,
            'achieve_id' => $request->achieve,
            'hobby_id' => $request->hobby,
            'from_id' => $request->from,
            'email' => $request->email,
            'gift_id' => $request->gift,
            'hash' => $request->gender,
            'email_hash' => $request->gender,
            'news' => $request->news == 'true' ? 1 : (int)$request->news,
            'status' => 'new',
        ]);


        return [];
    }
}
