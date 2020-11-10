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
        $order = Order::where('hash', $hash)->first();

        if ($order->name->chunks) {
            $chunks = unserialize($order->name->chunks);
        } else {
            $chunks = [];
            $res = file_get_contents("https://montage-vod-hls.cdnvideo.ru/montage-vod/_definst_/mp4:montage/kinder/part_ii/" . $order->name->id . "%20%281280xauto%29.mp4/chunklist.m3u8");
            $lines = explode(PHP_EOL, $res);
            $next = false;
            $duration = 0;
            foreach ($lines as $val) {
                if ($next) {
                    $next = false;
                    $chunks[] = [$duration, $val];
                    $duration = 0;
                }
                if (strstr($val, "#EXTINF")) {
                    $next = true;
                    $duration = (float) str_replace(["#EXTINF:", ","], "", $val);
                }
            }
            $order->name->update([
                'chunks' => serialize($chunks)
            ]);
        }
        $nameChunk = "";

        foreach ($chunks as $key => $chunk) {
            if ($key) $nameChunk .= PHP_EOL;
            $nameChunk .= "#EXTINF:" . $chunk[0] . "," . PHP_EOL;
            if (!$key) $nameChunk .= "#EXT-X-DISCONTINUITY" . PHP_EOL;
            $nameChunk .= "https://montage-vod-hls.cdnvideo.ru/montage-vod/_definst_/mp4:montage/kinder/part_ii/" . $order->name->id . "%20%281280xauto%29.mp4/" . $chunk[1];
        }

        if ($order->achieve->chunks) {
            $chunks = unserialize($order->achieve->chunks);
        } else {
            $chunks = [];
            $res = file_get_contents("https://montage-vod-hls.cdnvideo.ru/montage-vod/_definst_/mp4:montage/kinder/part_v/" . $order->achieve->id . "%20%281280xauto%29.mp4/chunklist.m3u8");
            $lines = explode(PHP_EOL, $res);
            $next = false;
            $duration = 0;
            foreach ($lines as $val) {
                if ($next) {
                    $next = false;
                    $chunks[] = [$duration, $val];
                    $duration = 0;
                }
                if (strstr($val, "#EXTINF")) {
                    $next = true;
                    $duration = (float) str_replace(["#EXTINF:", ","], "", $val);
                }
            }
            $order->achieve->update([
                'chunks' => serialize($chunks)
            ]);
        }
        $achieveChunk = "";

        foreach ($chunks as $key => $chunk) {
            if ($key) $achieveChunk .= PHP_EOL;
            $achieveChunk .= "#EXTINF:" . $chunk[0] . "," . PHP_EOL;
            if (!$key) $achieveChunk .= "#EXT-X-DISCONTINUITY" . PHP_EOL;
            $achieveChunk .= "https://montage-vod-hls.cdnvideo.ru/montage-vod/_definst_/mp4:montage/kinder/part_v/" . $order->achieve->id . "%20%281280xauto%29.mp4/" . $chunk[1];
        }

        if ($order->hobby->chunks) {
            $chunks = unserialize($order->hobby->chunks);
        } else {
            $chunks = [];
            $res = file_get_contents("https://montage-vod-hls.cdnvideo.ru/montage-vod/_definst_/mp4:montage/kinder/part_vi/" . $order->hobby->id . "%20%281280xauto%29.mp4/chunklist.m3u8");
            $lines = explode(PHP_EOL, $res);
            $next = false;
            $duration = 0;
            foreach ($lines as $val) {
                if ($next) {
                    $next = false;
                    $chunks[] = [$duration, $val];
                    $duration = 0;
                }
                if (strstr($val, "#EXTINF")) {
                    $next = true;
                    $duration = (float) str_replace(["#EXTINF:", ","], "", $val);
                }
            }
            $order->hobby->update([
                'chunks' => serialize($chunks)
            ]);
        }
        $hobbyChunk = "";

        foreach ($chunks as $key => $chunk) {
            if ($key) $hobbyChunk .= PHP_EOL;
            $hobbyChunk .= "#EXTINF:" . $chunk[0] . "," . PHP_EOL;
            if (!$key) $hobbyChunk .= "#EXT-X-DISCONTINUITY" . PHP_EOL;
            $hobbyChunk .= "https://montage-vod-hls.cdnvideo.ru/montage-vod/_definst_/mp4:montage/kinder/part_vi/" . $order->hobby->id . "%20%281280xauto%29.mp4/" . $chunk[1];
        }
        return view('video', [
            'hash' => $hash,
            'order' => $order,
            'photo_duration' => 4.821,
            'photo' => "/storage/" . $order->photo
        ]);
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function playlistI(Request $request, $hash)
    {
        $order = Order::where('hash', $hash)->first();
        $chunks = unserialize($order->name->chunks);
        $nameChunk = "";

        foreach ($chunks as $key => $chunk) {
            if ($key) $nameChunk .= PHP_EOL;
            $nameChunk .= "#EXTINF:" . $chunk[0] . "," . PHP_EOL;
            if (!$key) $nameChunk .= "#EXT-X-DISCONTINUITY" . PHP_EOL;
            $nameChunk .= "https://montage-vod-hls.cdnvideo.ru/montage-vod/_definst_/mp4:montage/kinder/part_ii/" . $order->name->id . "%20%281280xauto%29.mp4/" . $chunk[1];
        }

        return view('playlist-i', [
            'nameChunk' => $nameChunk
        ]);
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function playlistII(Request $request, $hash)
    {
        $order = Order::where('hash', $hash)->first();

        $photoChunk = '';
        if ($order->photo) {
            $photoChunk = "#EXTINF:4.821," . PHP_EOL .
                "#EXT-X-DISCONTINUITY" . PHP_EOL .
                "https://montage-vod-hls.cdnvideo.ru/montage-vod/_definst_/mp4:montage/kinder/part_iv/all%20%281280xauto%29.mp4/media_0.ts";
        }

        $chunks = unserialize($order->achieve->chunks);
        $achieveChunk = "";

        foreach ($chunks as $key => $chunk) {
            if ($key) $achieveChunk .= PHP_EOL;
            $achieveChunk .= "#EXTINF:" . $chunk[0] . "," . PHP_EOL;
            if (!$key) $achieveChunk .= "#EXT-X-DISCONTINUITY" . PHP_EOL;
            $achieveChunk .= "https://montage-vod-hls.cdnvideo.ru/montage-vod/_definst_/mp4:montage/kinder/part_v/" . $order->achieve->id . "%20%281280xauto%29.mp4/" . $chunk[1];
        }

        $chunks = unserialize($order->hobby->chunks);
        $hobbyChunk = "";

        foreach ($chunks as $key => $chunk) {
            if ($key) $hobbyChunk .= PHP_EOL;
            $hobbyChunk .= "#EXTINF:" . $chunk[0] . "," . PHP_EOL;
            if (!$key) $hobbyChunk .= "#EXT-X-DISCONTINUITY" . PHP_EOL;
            $hobbyChunk .= "https://montage-vod-hls.cdnvideo.ru/montage-vod/_definst_/mp4:montage/kinder/part_vi/" . $order->hobby->id . "%20%281280xauto%29.mp4/" . $chunk[1];
        }

        return view('playlist-ii', [
            'photoChunk' => $photoChunk,
            'achieveChunk' => $achieveChunk,
            'hobbyChunk' => $hobbyChunk
        ]);
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
