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
use Intervention\Image\Facades\Image;
use Intervention\Image\ImageManager;


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

    private $cdn = "https://montage-vod-hls.cdnvideo.ru/montage-vod/_definst_/mp4:montage/kindern/";


    public function testMail(Request $request)
    {
        $order = Order::where('id', '>', 0)->first();
        $unsubscribe = "https://kinder.gpucloud.ru/unsubscribe?email=" . $order->email . "&email_hash=" . $order->email_hash;
        Mail::to($request->mail)->send(new \App\Mail\Frame2($unsubscribe, ''));
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
                // 'achieve' => 'exists:achieves,id',
                'from' => 'required|exists:froms,id',
                // 'hobby' => 'exists:hobbies,id',
                'gift' => 'required|exists:gifts,id',
                'email' => 'email:rfc,dns',
                'age' => 'integer|required|min:1',
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
            'hobby_id' => (int) $request->hobby,
            'from_id' => (int) $request->from,
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

            try {
                $exif = exif_read_data($request->file('photo'));
                if (!empty($exif['Orientation'])) {
                    switch ($exif['Orientation']) {
                        case 8:
                            Image::make(storage_path("app/public/" . $order->photo))->rotate(90, 0)->save(storage_path("app/public/" . $order->photo));
                            break;
                        case 3:
                            Image::make(storage_path("app/public/" . $order->photo))->rotate(180, 0)->save(storage_path("app/public/" . $order->photo));
                            break;
                        case 6:
                            Image::make(storage_path("app/public/" . $order->photo))->rotate(-90, 0)->save(storage_path("app/public/" . $order->photo));
                            break;
                    }
                }
            } catch (\Throwable $e) {
            }
        }

        return [];
    }

    private function setChunks($entity, $part, $resolution)
    {
        $chunks = [];
        if ($resolution < 1920)
            $res = file_get_contents($this->cdn . $part . "/" . $entity->link . "%20%28" . $resolution . "xauto%29.mp4/chunklist.m3u8");
        else
            $res = file_get_contents($this->cdn . $part . "/" . $entity->link . "%20%28" . $resolution . "x1080%29.mp4/chunklist.m3u8");
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
        $entity->update(['chunks' . $resolution => serialize($chunks)]);
        return $summ;
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
            'photo' => $order->photo ? "/storage/" . $order->photo : "",
            'cdn' => $this->cdn
        ];

        $orderName = $order->name;

        if ($request->get('name'))
            $orderName = \App\Models\Name::find($request->get('name'));

        if (!$orderName->chunks1024) $this->setChunks($orderName, 'part_ii', 1024);
        if (!$orderName->chunks1280) $this->setChunks($orderName, 'part_ii', 1280);
        if (!$orderName->chunks1920) $duration = $this->setChunks($orderName, 'part_ii', 1920);
        else $duration = $this->countDuration($orderName->chunks1920);
        $data['part_ii_duration'] = $duration;


        if ($order->achieve_id) {
            $orderAchieve = $order->achieve;
            if ($request->get('achieve'))
                $orderAchieve = \App\Models\Achieve::find($request->get('achieve'));

            if (!$orderAchieve->chunks1024) $this->setChunks($orderAchieve, 'part_v', 1024);
            if (!$orderAchieve->chunks1280) $this->setChunks($orderAchieve, 'part_v', 1280);
            if (!$orderAchieve->chunks1920) $duration = $this->setChunks($orderAchieve, 'part_v', 1920);
            else $duration = $this->countDuration($orderAchieve->chunks1920);
            $data['part_v_duration'] = $duration;
        } else {
            $data['part_v_duration'] = 0;
        }

        if ($order->hobby_id) {
            $orderHobby = $order->hobby;
            if ($request->get('hobby'))
                $orderHobby = \App\Models\Hobby::find($request->get('hobby'));

            if (!$orderHobby->chunks1024) $this->setChunks($orderHobby, 'part_vi', 1024);
            if (!$orderHobby->chunks1280) $this->setChunks($orderHobby, 'part_vi', 1280);
            if (!$orderHobby->chunks1920) $duration = $this->setChunks($orderHobby, 'part_vi', 1920);
            else $duration = $this->countDuration($orderHobby->chunks1920);
            $data['part_vi_duration'] = $duration;
        } else {
            $data['part_vi_duration'] = 0;
        }


        $orderGift = $order->gift;
        if ($request->get('gift'))
            $orderGift = \App\Models\Gift::find($request->get('gift'));

        if (!$orderGift->chunks1024) $this->setChunks($orderGift, 'part_xiii', 1024);
        if (!$orderGift->chunks1280) $this->setChunks($orderGift, 'part_xiii', 1280);
        if (!$orderGift->chunks1920) $duration = $this->setChunks($orderGift, 'part_xiii', 1920);
        else $duration = $this->countDuration($orderGift->chunks1920);
        $data['part_xiii_duration'] = $duration;


        $orderFrom = $order->from;
        if ($request->get('from'))
            $orderFrom = \App\Models\From::find($request->get('from'));

        if (!$orderFrom->chunks1024) $this->setChunks($orderFrom, 'part_xiv', 1024);
        if (!$orderFrom->chunks1280) $this->setChunks($orderFrom, 'part_xiv', 1280);
        if (!$orderFrom->chunks1920) $duration = $this->setChunks($orderFrom, 'part_xiv', 1920);
        else $duration = $this->countDuration($orderFrom->chunks1920);
        $data['part_xiv_duration'] = $duration;

        @mkdir(public_path("video/$hash"), 0755, true);
        file_put_contents(public_path("video/$hash/index.html"), view('video', $data));

        return view('video', $data);
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function playlist(Request $request, $hash)
    {
        $resolution = $request->get('resolution', 1280);
        $order = Order::where('hash', $hash)->first();
        $chunks = unserialize($order->name->{"chunks" . $resolution});
        $nameChunk = "";
        $nameUploadChunk = "";

        foreach ($chunks as $key => $chunk) {
            if ($key) $nameChunk .= PHP_EOL;
            if (!$key) $nameChunk .= "#EXT-X-DISCONTINUITY" . PHP_EOL;
            $nameChunk .= "#EXTINF:" . $chunk[0] . "," . PHP_EOL;

            if ($resolution < 1920)
                $nameChunk .= $this->cdn . "part_ii/" . $order->name->link . "%20%28" . $resolution . "xauto%29.mp4/" . $chunk[1];
            else
                $nameChunk .= $this->cdn . "part_ii/" . $order->name->link . "%20%28" . $resolution . "x1080%29.mp4/" . $chunk[1];

            $nameUploadChunk .= $this->cdn . "part_ii/" . $order->name->link . "%20%281920x1080%29.mp4/" . $chunk[1];
        }


        $achieveChunk = "";
        $achieveUploadChunk = "";

        if ($order->achieve_id) {

            $chunks = unserialize($order->achieve->{"chunks" . $resolution});

            foreach ($chunks as $key => $chunk) {
                if ($key) $achieveChunk .= PHP_EOL;
                if (!$key) $achieveChunk .= "#EXT-X-DISCONTINUITY" . PHP_EOL;
                $achieveChunk .= "#EXTINF:" . $chunk[0] . "," . PHP_EOL;
                if ($resolution < 1920)
                    $achieveChunk .= $this->cdn . "part_v/" . $order->achieve->link . "%20%28" . $resolution . "xauto%29.mp4/" . $chunk[1];
                else
                    $achieveChunk .= $this->cdn . "part_v/" . $order->achieve->link . "%20%28" . $resolution . "x1080%29.mp4/" . $chunk[1];

                $achieveUploadChunk .= $this->cdn . "part_v/" . $order->achieve->link . "%20%281920x1080%29.mp4/" . $chunk[1];
            }
        }

        $hobbyChunk = "";
        $hobbyUploadChunk = "";

        if ($order->hobby_id) {

            $chunks = unserialize($order->hobby->{"chunks" . $resolution});

            foreach ($chunks as $key => $chunk) {
                if ($key) $hobbyChunk .= PHP_EOL;
                if (!$key) $hobbyChunk .= "#EXT-X-DISCONTINUITY" . PHP_EOL;
                $hobbyChunk .= "#EXTINF:" . $chunk[0] . "," . PHP_EOL;
                if ($resolution < 1920)
                    $hobbyChunk .= $this->cdn . "part_vi/" . $order->hobby->link . "%20%28" . $resolution . "xauto%29.mp4/" . $chunk[1];
                else
                    $hobbyChunk .= $this->cdn . "part_vi/" . $order->hobby->link . "%20%28" . $resolution . "x1080%29.mp4/" . $chunk[1];

                $hobbyUploadChunk .= $this->cdn . "part_vi/" . $order->hobby->link . "%20%281920x1080%29.mp4/" . $chunk[1];
            }
        }

        $chunks = unserialize($order->gift->{"chunks" . $resolution});
        $giftChunk = "";
        $giftUploadChunk = "";

        foreach ($chunks as $key => $chunk) {
            if ($key) $giftChunk .= PHP_EOL;
            if (!$key) $giftChunk .= "#EXT-X-DISCONTINUITY" . PHP_EOL;
            $giftChunk .= "#EXTINF:" . $chunk[0] . "," . PHP_EOL;
            if ($resolution < 1920)
                $giftChunk .= $this->cdn . "part_xiii/" . $order->gift->link . "%20%28" . $resolution . "xauto%29.mp4/" . $chunk[1];
            else
                $giftChunk .= $this->cdn . "part_xiii/" . $order->gift->link . "%20%28" . $resolution . "x1080%29.mp4/" . $chunk[1];

            $giftUploadChunk .= $this->cdn . "part_xiii/" . $order->gift->link . "%20%281920x1080%29.mp4/" . $chunk[1];
        }

        $chunks = unserialize($order->from->{"chunks" . $resolution});
        $fromChunk = "";
        $fromUploadChunk = "";

        foreach ($chunks as $key => $chunk) {
            if ($key) $fromChunk .= PHP_EOL;
            if (!$key) $fromChunk .= "#EXT-X-DISCONTINUITY" . PHP_EOL;
            $fromChunk .= "#EXTINF:" . $chunk[0] . "," . PHP_EOL;
            if ($resolution < 1920)
                $fromChunk .= $this->cdn . "part_xiv/" . $order->from->link . "%20%28" . $resolution . "xauto%29.mp4/" . $chunk[1];
            else
                $fromChunk .= $this->cdn . "part_xiv/" . $order->from->link . "%20%28" . $resolution . "x1080%29.mp4/" . $chunk[1];

            $fromUploadChunk .= $this->cdn . "part_xiv/" . $order->from->link . "%20%281920x1080%29.mp4/" . $chunk[1];
        }

        $partIChunk = view('chunks.part_i.' . $order->name->gender . '.' . $resolution, ['cdn' => $this->cdn]);
        $partIIIChunk = view('chunks.part_iii.' . $resolution, ['cdn' => $this->cdn]);
        $partIVChunk = $order->photo ? view('chunks.part_iv.' . $resolution, ['cdn' => $this->cdn]) : PHP_EOL;
        $partVIIChunk = view('chunks.part_vii.' . $resolution, ['cdn' => $this->cdn]);
        $partVIIIChunk = view('chunks.part_viii.' . $resolution, ['cdn' => $this->cdn]);
        $partIXChunk = view('chunks.part_ix.srg' . $resolution, ['cdn' => $this->cdn]);
        $partXChunk = view('chunks.part_x.' . $resolution, ['cdn' => $this->cdn]);
        $partXIChunk = view('chunks.part_xi.' . $resolution, ['cdn' => $this->cdn]);
        $partXIIChunk = view('chunks.part_xii.' . $resolution, ['cdn' => $this->cdn]);
        $partXVChunk = view('chunks.part_xv.' . $resolution, ['cdn' => $this->cdn]);
        $partXVIChunk = view('chunks.part_xvi.' . $resolution, ['cdn' => $this->cdn]);
        $partXVIIChunk = view('chunks.part_xvii.' . $resolution, ['cdn' => $this->cdn]);

        $return = view('playlist', [
            'partIChunk' => $partIChunk,
            'nameChunk' => $nameChunk,
            'partIIIChunk' => $partIIIChunk,
            'partIVChunk' => $partIVChunk,
            'achieveChunk' => $achieveChunk,
            'hobbyChunk' => $hobbyChunk,
            'partVIIChunk' => $partVIIChunk,
            'partVIIIChunk' => $partVIIIChunk,
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

        file_put_contents(public_path("playlist/$hash.m3u8"), $return);

        $returnUpload =
            "https://montage-cache.cdnvideo.ru/montage/upload/" . $order->name->gender . ".ts" . PHP_EOL
            . $nameUploadChunk . PHP_EOL
            . "https://montage-cache.cdnvideo.ru/montage/upload/3.ts" . PHP_EOL
            . "https://montage-cache.cdnvideo.ru/montage/photo/" . $order->id . ".ts" . PHP_EOL
            . $achieveUploadChunk . PHP_EOL
            . $hobbyUploadChunk . PHP_EOL
            . "https://montage-cache.cdnvideo.ru/montage/upload/7.ts" . PHP_EOL
            . $giftUploadChunk . PHP_EOL
            . $fromUploadChunk . PHP_EOL
            . "https://montage-cache.cdnvideo.ru/montage/upload/15.ts" . PHP_EOL
            . PHP_EOL;

        file_put_contents(public_path("uploadlist/$hash.m3u8"), $returnUpload);

        return $return;
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function uploadlist(Request $request, $hash)
    {
        $resolution = $request->get('resolution', 1280);
        $order = Order::where('hash', $hash)->first();
        $chunks = unserialize($order->name->{"chunks" . $resolution});
        $nameChunk = "";

        foreach ($chunks as $key => $chunk) {
            if ($key) $nameChunk .= PHP_EOL;
            if (!$key) $nameChunk .= "#EXT-X-DISCONTINUITY" . PHP_EOL;
            $nameChunk .= "#EXTINF:" . $chunk[0] . "," . PHP_EOL;

            if ($resolution < 1920)
                $nameChunk .= $this->cdn . "part_ii/" . $order->name->link . "%20%28" . $resolution . "xauto%29.mp4/" . $chunk[1];
            else
                $nameChunk .= $this->cdn . "part_ii/" . $order->name->link . "%20%28" . $resolution . "x1080%29.mp4/" . $chunk[1];
        }


        $achieveChunk = "";

        if ($order->achieve_id) {

            $chunks = unserialize($order->achieve->{"chunks" . $resolution});

            foreach ($chunks as $key => $chunk) {
                if ($key) $achieveChunk .= PHP_EOL;
                if (!$key) $achieveChunk .= "#EXT-X-DISCONTINUITY" . PHP_EOL;
                $achieveChunk .= "#EXTINF:" . $chunk[0] . "," . PHP_EOL;
                if ($resolution < 1920)
                    $achieveChunk .= $this->cdn . "part_v/" . $order->achieve->link . "%20%28" . $resolution . "xauto%29.mp4/" . $chunk[1];
                else
                    $achieveChunk .= $this->cdn . "part_v/" . $order->achieve->link . "%20%28" . $resolution . "x1080%29.mp4/" . $chunk[1];
            }
        }

        $hobbyChunk = "";

        if ($order->hobby_id) {

            $chunks = unserialize($order->hobby->{"chunks" . $resolution});

            foreach ($chunks as $key => $chunk) {
                if ($key) $hobbyChunk .= PHP_EOL;
                if (!$key) $hobbyChunk .= "#EXT-X-DISCONTINUITY" . PHP_EOL;
                $hobbyChunk .= "#EXTINF:" . $chunk[0] . "," . PHP_EOL;
                if ($resolution < 1920)
                    $hobbyChunk .= $this->cdn . "part_vi/" . $order->hobby->link . "%20%28" . $resolution . "xauto%29.mp4/" . $chunk[1];
                else
                    $hobbyChunk .= $this->cdn . "part_vi/" . $order->hobby->link . "%20%28" . $resolution . "x1080%29.mp4/" . $chunk[1];
            }
        }

        $chunks = unserialize($order->gift->{"chunks" . $resolution});
        $giftChunk = "";

        foreach ($chunks as $key => $chunk) {
            if ($key) $giftChunk .= PHP_EOL;
            if (!$key) $giftChunk .= "#EXT-X-DISCONTINUITY" . PHP_EOL;
            $giftChunk .= "#EXTINF:" . $chunk[0] . "," . PHP_EOL;
            if ($resolution < 1920)
                $giftChunk .= $this->cdn . "part_xiii/" . $order->gift->link . "%20%28" . $resolution . "xauto%29.mp4/" . $chunk[1];
            else
                $giftChunk .= $this->cdn . "part_xiii/" . $order->gift->link . "%20%28" . $resolution . "x1080%29.mp4/" . $chunk[1];
        }

        $chunks = unserialize($order->from->{"chunks" . $resolution});
        $fromChunk = "";

        foreach ($chunks as $key => $chunk) {
            if ($key) $fromChunk .= PHP_EOL;
            if (!$key) $fromChunk .= "#EXT-X-DISCONTINUITY" . PHP_EOL;
            $fromChunk .= "#EXTINF:" . $chunk[0] . "," . PHP_EOL;
            if ($resolution < 1920)
                $fromChunk .= $this->cdn . "part_xiv/" . $order->from->link . "%20%28" . $resolution . "xauto%29.mp4/" . $chunk[1];
            else
                $fromChunk .= $this->cdn . "part_xiv/" . $order->from->link . "%20%28" . $resolution . "x1080%29.mp4/" . $chunk[1];
        }

        $partIChunk = view('chunks.part_i.' . $order->name->gender . '.1920', ['cdn' => $this->cdn]);
        $partIIIChunk = view('chunks.part_iii.' . $resolution, ['cdn' => $this->cdn]);
        $partIVChunk = $order->photo ? view('chunks.part_iv.' . '.1920', ['cdn' => $this->cdn]) : PHP_EOL;
        $partVIIChunk = view('chunks.part_vii.1920', ['cdn' => $this->cdn]);
        $partVIIIChunk = view('chunks.part_viii.1920', ['cdn' => $this->cdn]);
        $partIXChunk = view('chunks.part_ix.srg1920', ['cdn' => $this->cdn]);
        $partXChunk = view('chunks.part_x.1920', ['cdn' => $this->cdn]);
        $partXIChunk = view('chunks.part_xi.' . $resolution, ['cdn' => $this->cdn]);
        $partXIIChunk = view('chunks.part_xii.' . $resolution, ['cdn' => $this->cdn]);
        $partXVChunk = view('chunks.part_xv.' . $resolution, ['cdn' => $this->cdn]);
        $partXVIChunk = view('chunks.part_xvi.' . $resolution, ['cdn' => $this->cdn]);
        $partXVIIChunk = view('chunks.part_xvii.' . $resolution, ['cdn' => $this->cdn]);

        $return = view('playlist', [
            'partIChunk' => $partIChunk,
            'nameChunk' => $nameChunk,
            'partIIIChunk' => $partIIIChunk,
            'partIVChunk' => $partIVChunk,
            'achieveChunk' => $achieveChunk,
            'hobbyChunk' => $hobbyChunk,
            'partVIIChunk' => $partVIIChunk,
            'partVIIIChunk' => $partVIIIChunk,
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

        file_put_contents(public_path("uploadlist/$hash.m3u8"), $return);
        return $return;
    }
}
