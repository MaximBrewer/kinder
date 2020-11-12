<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;


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

    private $cdn = "https://montage-vod-hls.cdnvideo.ru/montage-vod/_definst_/mp4:montage/kinder/";


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
            $order->update([
                "photo" => $data['photo']
            ]);
        }

        return [];
    }

    private function setChunks($entity, $part, $resolution)
    {
        $chunks = [];
        $res = file_get_contents($this->cdn . $part . "/" . $entity->id . "%20%28" . $resolution . "xauto%29.mp4/chunklist.m3u8");
        $lines = explode(PHP_EOL, $res);
        $next = false;
        $summ = 0;
        $duration = 0;
        foreach ($lines as $val) {
            if ($next) {
                $next = false;
                $chunks[] = [$duration, $val];
            }
            if (strstr($val, "#EXTINF")) {
                $next = true;
                $duration = (float) str_replace(["#EXTINF:", ","], "", $val);
                $summ += $duration;
            }
        }
        DB::connection()->enableQueryLog();
        $data['chunks' . $resolution] = serialize($chunks);
        Log::notice($entity->update($data));
        var_dump($data);
        die;
        return $summ;
        $queries = DB::getQueryLog();
        Log::notice($queries);
    }



    private function countDuration($chunks)
    {
        $chunks = unserialize($chunks);
        $duration = 0;
        foreach ($chunks as $key => $chunk) {
            $duration += $chunk[0];
        }
        return $duration;
    }
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function video(Request $request, $hash)
    {
        $order = Order::where('hash', $hash)->first();

        $data = [
            'hash' => $hash,
            'order' => $order,
            'part_i_duration' => 71.6,
            'part_iii_duration' => 14.272,
            'pert_iv_duration' => $order->photo ? 5.8 : 0,
            'part_vii_duration' => 24.917,
            'part_viii_duration' => 22.440,
            'part_ix_duration' => 6.967,
            'part_x_duration' => 40.100,
            'part_xi_duration' => 5.800,
            'part_xii_duration' => 13.600,
            'part_xv_duration' => 27.040,
            'part_xvi_duration' => 6.000,
            'part_xvii_duration' => 12.640,
            'photo' => $order->photo ? "/storage/" . $order->photo : ""
        ];

        if (!$order->name->chunks640) $this->setChunks($order->name, 'part_ii', 640);
        if (!$order->name->chunks1024) $this->setChunks($order->name, 'part_ii', 1024);
        if (!$order->name->chunks1280) $duration = $this->setChunks($order->name, 'part_ii', 1280);
        else $duration = $this->countDuration($order->name->chunks1280);
        $data['part_ii_duration'] = $duration;

        if (!$order->achieve->chunks640) $this->setChunks($order->achieve, 'part_v', 640);
        if (!$order->achieve->chunks1024) $this->setChunks($order->achieve, 'part_v', 1024);
        if (!$order->achieve->chunks1280) $duration = $this->setChunks($order->achieve, 'part_v', 1280);
        else $duration = $this->countDuration($order->achieve->chunks1280);
        $data['part_v_duration'] = $duration;

        if (!$order->hobby->chunks640) $this->setChunks($order->hobby, 'part_vi', 640);
        if (!$order->hobby->chunks1024) $this->setChunks($order->hobby, 'part_vi', 1024);
        if (!$order->hobby->chunks1280) $duration = $this->setChunks($order->hobby, 'part_vi', 1280);
        else $duration = $this->countDuration($order->hobby->chunks1280);
        $data['part_vi_duration'] = $duration;

        if (!$order->gift->chunks640) $this->setChunks($order->gift, 'part_xiii', 640);
        if (!$order->gift->chunks1024) $this->setChunks($order->gift, 'part_xiii', 1024);
        if (!$order->gift->chunks1280) $duration = $this->setChunks($order->gift, 'part_xiii', 1280);
        else $duration = $this->countDuration($order->gift->chunks1280);
        $data['part_xiii_duration'] = $duration;

        if (!$order->from->chunks640) $this->setChunks($order->from, 'part_xiv', 640);
        if (!$order->from->chunks1024) $this->setChunks($order->from, 'part_xiv', 1024);
        if (!$order->from->chunks1280) $duration = $this->setChunks($order->from, 'part_xiv', 1280);
        else $duration = $this->countDuration($order->from->chunks1280);
        $data['part_xiv_duration'] = $duration;

        return view('video', $data);
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function playlist(Request $request, $hash, $resolution = 1280)
    {
        $order = Order::where('hash', $hash)->first();
        $chunks = unserialize($order->name->chunks);
        $nameChunk = "";

        foreach ($chunks as $key => $chunk) {
            if ($key) $nameChunk .= PHP_EOL;
            $nameChunk .= "#EXTINF:" . $chunk[0] . "," . PHP_EOL;
            if (!$key) $nameChunk .= "#EXT-X-DISCONTINUITY" . PHP_EOL;
            $nameChunk .= $this->cdn . $order->name->id . "%20%28" . $resolution . "xauto%29.mp4/" . $chunk[1];
        }

        $photoChunk = '';
        if ($order->photo) {
            $photoChunk = "#EXTINF:4.821," . PHP_EOL .
                "#EXT-X-DISCONTINUITY" . PHP_EOL .
                $this->cdn . "part_iv/all%20%28" . $resolution . "xauto%29.mp4/media_0.ts";
        }

        $chunks = unserialize($order->achieve->chunks);
        $achieveChunk = "";

        foreach ($chunks as $key => $chunk) {
            if ($key) $achieveChunk .= PHP_EOL;
            $achieveChunk .= "#EXTINF:" . $chunk[0] . "," . PHP_EOL;
            if (!$key) $achieveChunk .= "#EXT-X-DISCONTINUITY" . PHP_EOL;
            $achieveChunk .= $this->cdn . "part_v/" . $order->achieve->id . "%20%28" . $resolution . "xauto%29.mp4/" . $chunk[1];
        }

        $chunks = unserialize($order->hobby->chunks);
        $hobbyChunk = "";

        foreach ($chunks as $key => $chunk) {
            if ($key) $hobbyChunk .= PHP_EOL;
            $hobbyChunk .= "#EXTINF:" . $chunk[0] . "," . PHP_EOL;
            if (!$key) $hobbyChunk .= "#EXT-X-DISCONTINUITY" . PHP_EOL;
            $hobbyChunk .= $this->cdn . "part_vi/" . $order->hobby->id . "%20%281280xauto%29.mp4/" . $chunk[1];
        }

        $chunks = unserialize($order->gift->chunks);
        $giftChunk = "";

        foreach ($chunks as $key => $chunk) {
            if ($key) $giftChunk .= PHP_EOL;
            $giftChunk .= "#EXTINF:" . $chunk[0] . "," . PHP_EOL;
            if (!$key) $giftChunk .= "#EXT-X-DISCONTINUITY" . PHP_EOL;
            $giftChunk .= $this->cdn . "part_xiii/" . $order->gift->id . "%20%281280xauto%29.mp4/" . $chunk[1];
        }

        $chunks = unserialize($order->from->chunks);
        $fromChunk = "";

        foreach ($chunks as $key => $chunk) {
            if ($key) $fromChunk .= PHP_EOL;
            $fromChunk .= "#EXTINF:" . $chunk[0] . "," . PHP_EOL;
            if (!$key) $fromChunk .= "#EXT-X-DISCONTINUITY" . PHP_EOL;
            $fromChunk .= $this->cdn . "part_xv/" . $order->from->id . "%20%281280xauto%29.mp4/" . $chunk[1];
        }

        $partIChunk = View::first('chunks.part_i.' . $order->name->gender . '.' . $resolution, ['cdn' => $this->cdn]);
        $partIIIChunk = View::first('chunks.part_i.' . $order->name->gender . '.' . $resolution, ['cdn' => $this->cdn]);
        $partIVChunk = View::first('chunks.part_i.' . $order->name->gender . '.' . $resolution, ['cdn' => $this->cdn]);
        $partVIIChunk = View::first('chunks.part_i.' . $order->name->gender . '.' . $resolution, ['cdn' => $this->cdn]);
        $partIXChunk = View::first('chunks.part_i.' . $order->name->gender . '.' . $resolution, ['cdn' => $this->cdn]);
        $partXChunk = View::first('chunks.part_i.' . $order->name->gender . '.' . $resolution, ['cdn' => $this->cdn]);
        $partXIChunk = View::first('chunks.part_i.' . $order->name->gender . '.' . $resolution, ['cdn' => $this->cdn]);
        $partXIIChunk = View::first('chunks.part_i.' . $order->name->gender . '.' . $resolution, ['cdn' => $this->cdn]);
        $partXVChunk = View::first('chunks.part_i.' . $order->name->gender . '.' . $resolution, ['cdn' => $this->cdn]);
        $partXVIChunk = View::first('chunks.part_i.' . $order->name->gender . '.' . $resolution, ['cdn' => $this->cdn]);
        $partXVIIChunk = View::first('chunks.part_i.' . $order->name->gender . '.' . $resolution, ['cdn' => $this->cdn]);

        return view('playlist', [
            'partIChunk' => $partIChunk,
            'nameChunk' => $nameChunk,
            'partIIIChunk' => $partIIIChunk,
            'partIVChunk' => $partIVChunk,
            'achieveChunk' => $achieveChunk,
            'hobbyChunk' => $hobbyChunk,
            'partVIIChunk' => $partVIIChunk,
            'partIXChunk' => $partIXChunk,
            'partXChunk' => $partXChunk,
            'partXIChunk' => $partXIChunk,
            'partXIIChunk' => $partXIIChunk,
            'giftChunk' => $giftChunk,
            'fromChunk' => $fromChunk,
            'partXVChunk' => $partXVChunk,
            'partXVIChunk' => $partXVIChunk,
            'partXVIIChunk' => $partXVIIChunk,
            'cdn' => $this->cdn
        ]);
    }
}
