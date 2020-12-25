<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Intervention\Image\Facades\Image;
use Intervention\Image\ImageManager;

class MakePicture extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:picture';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        exec("touch " . storage_path('tmp/pic.cron'));
        $fp = fopen(storage_path('tmp/pic.cron'), 'r+');
        if (flock($fp, LOCK_EX | LOCK_NB)) {
            $this->convert();
            fclose($fp);
            return 0;
        }
        exec("touch " . storage_path('tmp/pic2.cron'));
        $fp = fopen(storage_path('tmp/pic2.cron'), 'r+');
        if (flock($fp, LOCK_EX | LOCK_NB)) {
            $this->convert();
            fclose($fp);
        }
        return 0;
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    private function convert()
    {


        $orders = \App\Models\Order::whereNotNull('photo')
            ->where('pic', 0)
            // ->where('id', 345056)
            ->orderBy('id', 'desc')
            ->limit(300);

        // $orders->update(['pic' => 3]);
        if (isset($orders)) {
            $orders = $orders->get();
            foreach ($orders as $order) {
                try {
                    echo 1;
                    exec("convert " .  storage_path("app/public/" . $order->photo) . " -resize 1200x1600\> " . storage_path("app/public/" . $order->photo));
                    $image = Image::make(storage_path("app/public/" . $order->photo));
                    $w = $image->width();
                    $h = $image->height();
                    echo 2;
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
                    $image->crop(ceil($w - ($w * $crw / 100)), ceil($h - ($h * $crh / 100)), ceil($w * $crw / 100 / 2), ceil($h * $crh / 100 / 2));
                    echo 3;
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
                    $wdn = ceil(720 + (660 - $wn) / 2);
                    $hdn = ceil(85 + (880 - $hn) / 2);
                    $image->save(storage_path("app/public/" . $order->photo));
                    echo 4;
                    exec("convert -background None -virtual-pixel transparent -background transparent " . storage_path("app/public/" . $order->photo) . " +distort Perspective '0,0 0,0  880,10 880,-10  880,630 880,680  0,660 0,660' " . storage_path("app/public/orders/" . $order->id . "/perspective.png"), $output);
                    exec("convert " . storage_path("app/public/orders/" . $order->id . "/perspective.png") . "  -background transparent -rotate 1 " . storage_path("app/public/orders/" . $order->id . "/rotate.png"));
                    exec("composite -geometry '+'$wdn'+'$hdn " . storage_path("app/public/orders/" . $order->id . "/rotate.png") . " " . storage_path("tmp/photo.png") . " " . storage_path("tmp/mask.jpg") . " " . storage_path("app/public/orders/" . $order->id . "/final.jpg"));
                    exec("jpegoptim " . storage_path("app/public/orders/" . $order->id . "/final.jpg") . " --strip-all");
                    $order->update([
                        "pic" => 1
                    ]);
                    exec("rm " . storage_path("app/public/orders/" . $order->id . "/perspective.png"));
                    exec("rm " . storage_path("app/public/orders/" . $order->id . "/rotate.png"));
                    echo 5;

                    @unlink(storage_path("app/public/orders/" . $order->id . "/perspective.png"));
                    @unlink(storage_path("app/public/orders/" . $order->id . "/rotate.png"));
                    
                } catch (\Throwable $e) {
                }
            }
        }
        return 0;
    }
}
