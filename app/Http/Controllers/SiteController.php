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


    public function testMail(Request $request)
    {
        $order = Order::where('id', '>', 0)->first();
        $unsubscribe = "https://kinder.gpucloud.ru/unsubscribe?email=" . $order->email . "&email_hash=" . $order->email_hash;
        Mail::to($request->mail)->send(new \App\Mail\Frame3($unsubscribe, ''));
    }


    public function testHtml(Request $request)
    {
        return view('mail.html.frame4', ['unsubscribe' => '', 'video' => '']);
    }



    public function unsubscribe(Request $request)
    {
        Order::where('email', $request->email)->where('email_hash', $request->email_hash)->update([
            'status' => 'unsubscribed'
        ]);
        return view('unsubscribe');
    }

    public function liveIframe()
    {
        return view('live-iframe');
    }

    public function patch(Request $request)
    {
        $request->validate(
            [
                'photo' => 'image|max:16384',
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
            ],
            [
                'photo.size' => 'Фото должно быть не болле 16МБ'
            ]
        );

        $data = [
            'name_id' => $request->name,
            'age' => $request->age,
            'achieve_id' => $request->achieve,
            'hobby_id' => $request->hobby,
            'from_id' => $request->from,
            'email' => $request->email,
            'gift_id' => $request->gift,
            'hash' => Str::random(80),
            'email_hash' => Str::random(40),
            'news' => $request->news == 'true' ? 1 : (int)$request->news,
            'status' => 'new',
        ];
        $order = Order::create($data);

        if ($request->file('photo')) {
            $path = $request->file('photo')->store('public/orders/' . $order->id);
            $data['photo'] = str_replace("public/", "", $path);
            $fullpath = $_SERVER['DOCUMENT_ROOT'] . '/../storage/app/' . $path;
            exec("convert $fullpath -resize 600x600\> $fullpath");
            exec("jpegoptim $fullpath -m85 --strip-all");
        }

        $order->update([
            "photo" => $data['photo']
        ]);

        return $fullpath;
    }
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function video(Request $request, $hash)
    {
        return view('video', ['hash' => $hash]);
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function playlistI(Request $request, $hash)
    {
        $nameChunk = "#EXTINF:2.861," . PHP_EOL .
            "#EXT-X-DISCONTINUITY" . PHP_EOL .
            "//montage-vod-hls.cdnvideo.ru/montage-vod/_definst_/mp4:montage/kinder/part_ii/1%20%281280xauto%29.mp4/media_0.ts";
        return view('playlist-i', ['nameChunk' => $nameChunk]);
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function playlistII(Request $request, $hash)
    {
        $nameChunk = "#EXTINF:2.861," . PHP_EOL .
            "#EXT-X-DISCONTINUITY" . PHP_EOL .
            "https://montage-vod-hls.cdnvideo.ru/montage-vod/_definst_/mp4:montage/kinder/part_ii/kamil-1024.mp4/media_0.ts";
        return view('playlist-ii', ['nameChunk' => $nameChunk]);
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function playlistIII(Request $request, $hash)
    {
        $nameChunk = "#EXTINF:2.861," . PHP_EOL .
            "#EXT-X-DISCONTINUITY" . PHP_EOL .
            "https://montage-vod-hls.cdnvideo.ru/montage-vod/_definst_/mp4:montage/kinder/part_ii/kamil-1024.mp4/media_0.ts";
        return view('playlist-iii', ['nameChunk' => $nameChunk]);
    }
}
