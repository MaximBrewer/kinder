<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <title>Happy New Year</title>
    <link href="//s.platformcraft.ru/video/videojs/video-js5.19.2.min.css" rel="stylesheet">
    <link href="//s.platformcraft.ru/video/videojs.addon.css" rel="stylesheet">
    <script src="//s.platformcraft.ru/video/videojs/video5.19.2.min.js"></script>
    <script src="//s.platformcraft.ru/video/videojs/plugins/hls/videojs-contrib-hls-5.9.min.js"></script>
    <script src="//s.platformcraft.ru/video/videojs/plugins/videojs.framebyframe.min.js"></script>
    <script src="/js/videojs-playlist.min.js"></script>
    <link rel="preload" href="https://montage-cache.cdnvideo.ru/montage/kinder/part_viii/image.png" as="image">
    <link rel="preload" href="https://montage-cache.cdnvideo.ru/montage/kinder/part_viii/image.png" as="image">
    <link rel="preload" href="{{ $photo }}" as="image">
</head>

<body style="margin:0px">
    <div id="hover" style="opacity:0;overflow:hidden;display:flex;justify-content:center;align-items:center;background-color:#000000;position:absolute;top:0;left:0;z-index:-1;width:100vw;height:100vh;">
        <div id="photoFrame" style="text-align:center;"><img src="https://montage-cache.cdnvideo.ru/montage/kinder/part_iv/photo.png" alt="" style="max-width:100%;" /></div>
    </div>
    <div id="hover2" style="opacity:0;overflow:hidden;display:flex;justify-content:center;align-items:center;background-color:#000000;position:absolute;top:0;left:0;z-index:-1;width:100vw;height:100vh;">
        <div id="photoFrame2" style="text-align:center;"><img src="https://montage-cache.cdnvideo.ru/montage/kinder/part_viii/image.png" alt="" style="max-width:100%;" /></div>
    </div>
    <div id="hover3" style="opacity:1;overflow:hidden;display:flex;justify-content:center;align-items:center;background-color:#000000;position:absolute;top:0;left:0;z-index:100;width:100vw;height:100vh;">
        <div id="photoFrame3" style="text-align:center;position:relative;">
            <img src="https://montage-cache.cdnvideo.ru/montage/kinder/part_xi/image.png" alt="" style="max-width:100%;" />
            <img src="https://montage-cache.cdnvideo.ru/montage/kinder/part_xi/red.png" alt="" style="position:absolute;top: 41.015%;left: 47.1%;opacity: 0;height: 42.4%;" />
            <img src="https://montage-cache.cdnvideo.ru/montage/kinder/part_xi/white.png" alt="" style="position:absolute;top: 41.015%;left: 47.1%;opacity: 0;height: 42.4%;" />
            <img src="https://montage-cache.cdnvideo.ru/montage/kinder/part_xi/gold.png" alt="" style="position:absolute;top: 41.015%;left: 47.1%;opacity: 0;height: 42.4%;" />
        </div>
    </div>
    <video id="video" class="custom-template video-js video-addon-js vjs-default-skin vjs-big-play-centered vjs-nofull" webkit-playsinline playsinline>
        <p class="vjs-no-js">
            Для просмотра включите яваскрипт или обновите браузер до <a href="http://videojs.com/html5-video-support/" target="_blank">совместимых с HTML5 видео</a>
        </p>
    </video>
    <script>
        var hash = "{{ $hash }}",
            photo = "{{ $photo }}",
            photo_duration = "{{ $photo_duration }}";
    </script>
    <script src="/js/video.js?v=1.01"></script>
</body>

</html>