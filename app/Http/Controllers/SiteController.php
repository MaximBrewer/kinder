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
        echo storage_path('app/public/orders/' . 100);
        // return view('mail.html.frame4', ['unsubscribe' => '', 'video' => '']);
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

        $output = null;

        if ($request->file('photo')) {
            $path = $request->file('photo')->store('public/orders/' . $order->id);

            $data['photo'] = str_replace("public/", "", $path);
            $fullpath = $_SERVER['DOCUMENT_ROOT'] . '/../storage/app/' . $path;

            $order->update([
                "photo" => $data['photo']
            ]);

            exec("convert " .  storage_path("app/public/" . $order->photo) . " -resize 1200x1600\> " . storage_path("app/public/" . $order->photo));
            exec("jpegoptim " . storage_path("app/public/" . $order->photo) . " --strip-all");

            $image = Image::make(storage_path("app/public/" . $order->photo));

            try {
                $exif = exif_read_data($request->file('photo'));
                if (!empty($exif['Orientation'])) {
                    switch ($exif['Orientation']) {
                        case 8:
                            $image->rotate(90, 0);
                            break;
                        case 3:
                            $image->rotate(180, 0);
                            break;
                        case 6:
                            $image->rotate(-90, 0);
                            break;
                    }
                }

                $image->save(storage_path("app/public/" . $order->photo));

                $w = $image->width();
                $h = $image->height();

                $mw = 100 * $w * 1 / ($h * 1);
                $dw = $mw - 75;
                $crw = 0;

                if ($dw > 0)
                    if ($dw > 10) $crw = 10;
                    else $crw = $dw;

                $crh = 0;
                if ($dw < 0)
                    if ($dw < -10) $crh = 10;
                    else $crh = $dw * -1;


                $image->crop($w - ($w * $crw / 100), $h - ($h * $crh / 100), $w * $crw / 100 / 2, $h * $crh / 100 / 2);
                $image->resize(660, 880, function ($constraint) {
                    $constraint->aspectRatio();
                });

                $wn = $image->width();
                $hn = $image->height();

                $img_border = Image::canvas($wn, $hn);

                $img_border->rectangle(0, 0, 660 - 2, $hn - 2, function ($draw) {
                    $draw->border(2, 'rgba(0,0,0,0.4)');
                });

                $image->insert($img_border);

                $wdn = 720 + (660 - $wn) / 2;
                $hdn = 85 + (880 - $hn) / 2;

                $image->save(storage_path("app/public/" . $order->photo));

                exec("convert -background None -virtual-pixel transparent -background transparent " . storage_path("app/public/" . $order->photo) . " +distort Perspective '0,0 0,0  880,10 880,-10  880,630 880,680  0,660 0,660' " . storage_path("app/public/orders/" . $order->id . "/perspective.png"), $output);
                exec("convert " . storage_path("app/public/orders/" . $order->id . "/perspective.png") . "  -background transparent -rotate 1 " . storage_path("app/public/orders/" . $order->id . "/rotate.png"));
                exec("composite -geometry '+'$wdn'+'$hdn " . storage_path("app/public/orders/" . $order->id . "/rotate.png") . " " . storage_path("tmp/photo.png") . " " . storage_path("tmp/mask.jpg") . " " . storage_path("app/public/orders/" . $order->id . "/final.jpg"));

                exec("jpegoptim " . storage_path("app/public/orders/" . $order->id . "/final.jpg") . " --strip-all");

                $order->update([
                    "pic" => 1
                ]);
            } catch (\Throwable $e) {
            }
        }

        return [$output];
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
            'picture' => $order->pic ? "/storage/orders/" . $order->id . "/final.jpg" : "",
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

        @mkdir(public_path("playlist/1024"), 0755, true);
        @mkdir(public_path("playlist/1280"), 0755, true);
        @mkdir(public_path("playlist/1920"), 0755, true);
        @mkdir(public_path("uploadlist"), 0755, true);
        @mkdir(public_path("video"), 0755, true);

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

        $chunks1024 = unserialize($order->name->{"chunks1024"});
        $chunks1280 = unserialize($order->name->{"chunks1280"});
        $chunks1920 = unserialize($order->name->{"chunks1920"});

        $nameChunk1024 = "";
        foreach ($chunks1024 as $key => $chunk) {
            if ($key) {
                $nameChunk1024 .= PHP_EOL;
            }
            $nameChunk1024 .= "#EXTINF:" . $chunk[0] . "," . PHP_EOL;
            if (!$key) {
                $nameChunk1024 .= "#EXT-X-DISCONTINUITY" . PHP_EOL;
            }
            $nameChunk1024 .= $this->cdn . "part_ii/" . $order->name->link . "%20%281024xauto%29.mp4/" . $chunk[1];
        }

        $nameChunk1280 = "";
        foreach ($chunks1280 as $key => $chunk) {
            if ($key) {
                $nameChunk1280 .= PHP_EOL;
            }
            $nameChunk1280 .= "#EXTINF:" . $chunk[0] . "," . PHP_EOL;
            if (!$key) {
                $nameChunk1280 .= "#EXT-X-DISCONTINUITY" . PHP_EOL;
            }
            $nameChunk1280 .= $this->cdn . "part_ii/" . $order->name->link . "%20%281280xauto%29.mp4/" . $chunk[1];
        }

        $nameChunk1920 = "";
        foreach ($chunks1920 as $key => $chunk) {
            if ($key) {
                $nameChunk1920 .= PHP_EOL;
            }
            $nameChunk1920 .= "#EXTINF:" . $chunk[0] . "," . PHP_EOL;
            if (!$key) {
                $nameChunk1920 .= "#EXT-X-DISCONTINUITY" . PHP_EOL;
            }
            $nameChunk1920 .= $this->cdn . "part_ii/" . $order->name->link . "%20%281920x1080%29.mp4/" . $chunk[1];
        }

        $achieveChunk1024 = "";
        $achieveChunk1280 = "";
        $achieveChunk1920 = "";

        if ($order->achieve_id) {

            $chunks1024 = unserialize($order->achieve->{"chunks1024"});
            $chunks1280 = unserialize($order->achieve->{"chunks1280"});
            $chunks1920 = unserialize($order->achieve->{"chunks1920"});

            foreach ($chunks1024 as $key => $chunk) {
                if ($key) {
                    $achieveChunk1024 .= PHP_EOL;
                }
                $achieveChunk1024 .= "#EXTINF:" . $chunk[0] . "," . PHP_EOL;
                if (!$key) {
                    $achieveChunk1024 .= "#EXT-X-DISCONTINUITY" . PHP_EOL;
                }
                $achieveChunk1024 .= $this->cdn . "part_v/" . $order->achieve->link . "%20%281024xauto%29.mp4/" . $chunk[1];
            }

            foreach ($chunks1280 as $key => $chunk) {
                if ($key) {
                    $achieveChunk1280 .= PHP_EOL;
                }
                $achieveChunk1280 .= "#EXTINF:" . $chunk[0] . "," . PHP_EOL;
                if (!$key) {
                    $achieveChunk1280 .= "#EXT-X-DISCONTINUITY" . PHP_EOL;
                }
                $achieveChunk1280 .= $this->cdn . "part_v/" . $order->achieve->link . "%20%281280xauto%29.mp4/" . $chunk[1];
            }

            foreach ($chunks1920 as $key => $chunk) {
                if ($key) {
                    $achieveChunk1920 .= PHP_EOL;
                }
                $achieveChunk1920 .= "#EXTINF:" . $chunk[0] . "," . PHP_EOL;
                if (!$key) {
                    $achieveChunk1920 .= "#EXT-X-DISCONTINUITY" . PHP_EOL;
                }
                $achieveChunk1920 .= $this->cdn . "part_v/" . $order->achieve->link . "%20%281920x1080%29.mp4/" . $chunk[1];
            }
        }

        $hobbyChunk1024 = "";
        $hobbyChunk1280 = "";
        $hobbyChunk1920 = "";

        if ($order->hobby_id) {

            $chunks1024 = unserialize($order->hobby->{"chunks1024"});
            $chunks1280 = unserialize($order->hobby->{"chunks1280"});
            $chunks1920 = unserialize($order->hobby->{"chunks1920"});

            foreach ($chunks1024 as $key => $chunk) {
                if ($key) {
                    $hobbyChunk1024 .= PHP_EOL;
                }
                $hobbyChunk1024 .= "#EXTINF:" . $chunk[0] . "," . PHP_EOL;
                if (!$key) {
                    $hobbyChunk1024 .= "#EXT-X-DISCONTINUITY" . PHP_EOL;
                }
                $hobbyChunk1024 .= $this->cdn . "part_vi/" . $order->hobby->link . "%20%281024xauto%29.mp4/" . $chunk[1];
            }

            foreach ($chunks1280 as $key => $chunk) {
                if ($key) {
                    $hobbyChunk1280 .= PHP_EOL;
                }
                $hobbyChunk1280 .= "#EXTINF:" . $chunk[0] . "," . PHP_EOL;
                if (!$key) {
                    $hobbyChunk1280 .= "#EXT-X-DISCONTINUITY" . PHP_EOL;
                }
                $hobbyChunk1280 .= $this->cdn . "part_vi/" . $order->hobby->link . "%20%281280xauto%29.mp4/" . $chunk[1];
            }

            foreach ($chunks1920 as $key => $chunk) {
                if ($key) {
                    $hobbyChunk1920 .= PHP_EOL;
                }
                $hobbyChunk1920 .= "#EXTINF:" . $chunk[0] . "," . PHP_EOL;
                if (!$key) {
                    $hobbyChunk1920 .= "#EXT-X-DISCONTINUITY" . PHP_EOL;
                }
                $hobbyChunk1920 .= $this->cdn . "part_vi/" . $order->hobby->link . "%20%281920x1080%29.mp4/" . $chunk[1];
            }
        }



        $chunks1024 = unserialize($order->gift->{"chunks1024"});
        $chunks1280 = unserialize($order->gift->{"chunks1280"});
        $chunks1920 = unserialize($order->gift->{"chunks1920"});

        $giftChunk1024 = "";
        foreach ($chunks1024 as $key => $chunk) {
            if ($key) {
                $giftChunk1024 .= PHP_EOL;
            }
            $giftChunk1024 .= "#EXTINF:" . $chunk[0] . "," . PHP_EOL;
            if (!$key) {
                $giftChunk1024 .= "#EXT-X-DISCONTINUITY" . PHP_EOL;
            }
            $giftChunk1024 .= $this->cdn . "part_xiii/" . $order->gift->link . "%20%281024xauto%29.mp4/" . $chunk[1];
        }

        $giftChunk1280 = "";
        foreach ($chunks1280 as $key => $chunk) {
            if ($key) {
                $giftChunk1280 .= PHP_EOL;
            }
            $giftChunk1280 .= "#EXTINF:" . $chunk[0] . "," . PHP_EOL;
            if (!$key) {
                $giftChunk1280 .= "#EXT-X-DISCONTINUITY" . PHP_EOL;
            }
            $giftChunk1280 .= $this->cdn . "part_xiii/" . $order->gift->link . "%20%281280xauto%29.mp4/" . $chunk[1];
        }

        $giftChunk1920 = "";
        foreach ($chunks1920 as $key => $chunk) {
            if ($key) {
                $giftChunk1920 .= PHP_EOL;
            }
            $giftChunk1920 .= "#EXTINF:" . $chunk[0] . "," . PHP_EOL;
            if (!$key) {
                $giftChunk1920 .= "#EXT-X-DISCONTINUITY" . PHP_EOL;
            }
            $giftChunk1920 .= $this->cdn . "part_xiii/" . $order->gift->link . "%20%281920x1080%29.mp4/" . $chunk[1];
        }



        $chunks1024 = unserialize($order->from->{"chunks1024"});
        $chunks1280 = unserialize($order->from->{"chunks1280"});
        $chunks1920 = unserialize($order->from->{"chunks1920"});

        $fromChunk1024 = "";
        foreach ($chunks1024 as $key => $chunk) {
            if ($key) {
                $fromChunk1024 .= PHP_EOL;
            }
            $fromChunk1024 .= "#EXTINF:" . $chunk[0] . "," . PHP_EOL;
            if (!$key) {
                $fromChunk1024 .= "#EXT-X-DISCONTINUITY" . PHP_EOL;
            }
            $fromChunk1024 .= $this->cdn . "part_xiv/" . $order->from->link . "%20%281024xauto%29.mp4/" . $chunk[1];
        }

        $fromChunk1280 = "";
        foreach ($chunks1280 as $key => $chunk) {
            if ($key) {
                $fromChunk1280 .= PHP_EOL;
            }
            $fromChunk1280 .= "#EXTINF:" . $chunk[0] . "," . PHP_EOL;
            if (!$key) {
                $fromChunk1280 .= "#EXT-X-DISCONTINUITY" . PHP_EOL;
            }
            $fromChunk1280 .= $this->cdn . "part_xiv/" . $order->from->link . "%20%281280xauto%29.mp4/" . $chunk[1];
        }

        $fromChunk1920 = "";
        foreach ($chunks1920 as $key => $chunk) {
            if ($key) {
                $fromChunk1920 .= PHP_EOL;
            }
            $fromChunk1920 .= "#EXTINF:" . $chunk[0] . "," . PHP_EOL;
            if (!$key) {
                $fromChunk1920 .= "#EXT-X-DISCONTINUITY" . PHP_EOL;
            }
            $fromChunk1920 .= $this->cdn . "part_xiv/" . $order->from->link . "%20%281920x1080%29.mp4/" . $chunk[1];
        }


        $partIChunk1024 = view('chunks.part_i.' . $order->name->gender . '.1024', ['cdn' => $this->cdn]);
        $partIChunk1280 = view('chunks.part_i.' . $order->name->gender . '.1280', ['cdn' => $this->cdn]);
        $partIChunk1920 = view('chunks.part_i.' . $order->name->gender . '.1920', ['cdn' => $this->cdn]);

        $partIIIChunk1024 = view('chunks.part_iii.1024', ['cdn' => $this->cdn]);
        $partIIIChunk1280 = view('chunks.part_iii.1280', ['cdn' => $this->cdn]);
        $partIIIChunk1920 = view('chunks.part_iii.1920', ['cdn' => $this->cdn]);

        $partIVChunk1024 = $order->photo ? view('chunks.part_iv.1024', ['cdn' => $this->cdn]) : PHP_EOL;
        $partIVChunk1280 = $order->photo ? view('chunks.part_iv.1280', ['cdn' => $this->cdn]) : PHP_EOL;
        $partIVChunk1920 = $order->photo ? view('chunks.part_iv.1920', ['cdn' => $this->cdn]) : PHP_EOL;

        $partVIIChunk1024 = view('chunks.part_vii.1024', ['cdn' => $this->cdn]);
        $partVIIChunk1280 = view('chunks.part_vii.1280', ['cdn' => $this->cdn]);
        $partVIIChunk1920 = view('chunks.part_vii.1920', ['cdn' => $this->cdn]);

        $partVIIIChunk1024 = view('chunks.part_viii.1024', ['cdn' => $this->cdn]);
        $partVIIIChunk1280 = view('chunks.part_viii.1280', ['cdn' => $this->cdn]);
        $partVIIIChunk1920 = view('chunks.part_viii.1920', ['cdn' => $this->cdn]);

        $partIXChunk1024 = view('chunks.part_ix.srg1024', ['cdn' => $this->cdn]);
        $partIXChunk1280 = view('chunks.part_ix.srg1280', ['cdn' => $this->cdn]);
        $partIXChunk1920 = view('chunks.part_ix.srg1920', ['cdn' => $this->cdn]);

        $partXChunk1024 = view('chunks.part_x.1024', ['cdn' => $this->cdn]);
        $partXChunk1280 = view('chunks.part_x.1280', ['cdn' => $this->cdn]);
        $partXChunk1920 = view('chunks.part_x.1920', ['cdn' => $this->cdn]);

        $partXIChunk1024 = view('chunks.part_xi.1024', ['cdn' => $this->cdn]);
        $partXIChunk1280 = view('chunks.part_xi.1280', ['cdn' => $this->cdn]);
        $partXIChunk1920 = view('chunks.part_xi.1920', ['cdn' => $this->cdn]);

        $partXIIChunk1024 = view('chunks.part_xii.1024', ['cdn' => $this->cdn]);
        $partXIIChunk1280 = view('chunks.part_xii.1280', ['cdn' => $this->cdn]);
        $partXIIChunk1920 = view('chunks.part_xii.1920', ['cdn' => $this->cdn]);

        $partXVChunk1024 = view('chunks.part_xv.1024', ['cdn' => $this->cdn]);
        $partXVChunk1280 = view('chunks.part_xv.1280', ['cdn' => $this->cdn]);
        $partXVChunk1920 = view('chunks.part_xv.1920', ['cdn' => $this->cdn]);

        $partXVIChunk1024 = view('chunks.part_xvi.1024', ['cdn' => $this->cdn]);
        $partXVIChunk1280 = view('chunks.part_xvi.1280', ['cdn' => $this->cdn]);
        $partXVIChunk1920 = view('chunks.part_xvi.1920', ['cdn' => $this->cdn]);

        $partXVIIChunk1024 = view('chunks.part_xvii.1024', ['cdn' => $this->cdn]);
        $partXVIIChunk1280 = view('chunks.part_xvii.1280', ['cdn' => $this->cdn]);
        $partXVIIChunk1920 = view('chunks.part_xvii.1920', ['cdn' => $this->cdn]);


        foreach ([1024, 1280, 1920] as $resol) {
            ${"return" . $resol} = view('playlist', [
                'partIChunk' => ${"partIChunk" . $resol},
                'nameChunk' => ${"nameChunk" . $resol},
                'partIIIChunk' => ${"partIIIChunk" . $resol},
                'partIVChunk' => ${"partIVChunk" . $resol},
                'achieveChunk' => ${"achieveChunk" . $resol},
                'hobbyChunk' => ${"hobbyChunk" . $resol},
                'partVIIChunk' => ${"partVIIChunk" . $resol},
                'partVIIIChunk' => ${"partVIIIChunk" . $resol},
                'partIXChunk' => ${"partIXChunk" . $resol},
                'partXChunk' => ${"partXChunk" . $resol},
                'partXIChunk' => ${"partXIChunk" . $resol},
                'partXIIChunk' => ${"partXIIChunk" . $resol},
                'giftChunk' => ${"giftChunk" . $resol},
                'fromChunk' => ${"fromChunk" . $resol},
                'partXVChunk' => ${"partXVChunk" . $resol},
                'partXVIChunk' => ${"partXVIChunk" . $resol},
                'partXVIIChunk' => ${"partXVIIChunk" . $resol},
                'cdn' => $this->cdn
            ]);
            @mkdir(public_path("playlist/" . $resol), 0755, true);
            file_put_contents(public_path("playlist/1024/$hash.m3u8"), ${"return" . $resol});
        }

        $returnUpload = json_encode([
            'gender' => $order->name->gender,
            'name' => $order->name->link,
            'photo' => "https://montage-cache.cdnvideo.ru/montage/photo/" . $order->id . ".ts",
            'achieve' => $order->achieve ? $order->achieve->link : '',
            'hobby' => $order->hobby ? $order->hobby->link : '',
            'gift' => $order->gift->link,
            'from' => $order->from->link,
        ]);

        file_put_contents(public_path("uploadlist/$hash.m3u8"), $returnUpload);

        return ${"return" . $resolution};
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function uploadlist(Request $request, $hash)
    {
        $this->playlist($request, $hash);
        return file_get_contents(public_path("uploadlist/$hash.m3u8"));
    }
}
