<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <title>Kinder New Year</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link href="//s.platformcraft.ru/video/videojs/video-js5.19.2.min.css" rel="stylesheet">
    <link href="//s.platformcraft.ru/video/videojs.addon.css" rel="stylesheet">
    <link rel="preload" href="https://montage-cache.cdnvideo.ru/montage/kindern/part_iv/photo.png" as="image">
    <link rel="preload" href="https://montage-cache.cdnvideo.ru/montage/kindern/part_viii/balls.png" as="image">
    <link rel="preload" href="https://montage-cache.cdnvideo.ru/montage/kindern/part_xi/podarki.png" as="image">
    <link rel="preload" href="https://montage-cache.cdnvideo.ru/montage/kindern/part_xi/red.png" as="image">
    <link rel="preload" href="https://montage-cache.cdnvideo.ru/montage/kindern/part_xi/white.png" as="image">
    <link rel="preload" href="https://montage-cache.cdnvideo.ru/montage/kindern/part_xi/gold.png" as="image">
    <link rel="preload" href="{{ $photo }}" as="image">
</head>

<body style="margin:0;padding:0;">
    <div style="overflow:hidden;z-index:-1;position:absolute;top:0;left:0;width:1px;height:1px;">
        <audio id="audio">
            <source src="https://montage-cache.cdnvideo.ru/montage/kindern/music6.mp3" type="audio/mpeg">
            <source src="https://montage-cache.cdnvideo.ru/montage/kindern/music6.wav" type="audio/wav">
        </audio>
    </div>
    <div tabindex="-1" playsinline="" webkit-playsinline="" class="custom-template video-js video-addon-js vjs-default-skin vjs-big-play-centered vjs-nofull vjs-paused vjs-controls-enabled vjs-workinghover vjs-user-active video-dimensions" id="video" role="region" aria-label="video player">
        <video id="video_html5_api" class="vjs-tech" webkit-playsinline="" playsinline="" tabindex="-1">
            <p class="vjs-no-js">
                Для просмотра включите яваскрипт или обновите браузер до <a href="http://videojs.com/html5-video-support/" target="_blank" class="vjs-hidden" hidden="hidden">совместимых с HTML5 видео</a>
            </p>
        </video>
        <div class="vjs-poster" id="poster" tabindex="-1" aria-disabled="false" style="background-image: url(https://montage-cache.cdnvideo.ru/montage/kindern/poster1.jpg);">
        </div>
    </div>
    <script>
        var hash = "{{ $hash }}"
            , photo = "{{ $photo }}"
            , cdn = "{{ $cdn }}"
            , part_ii_duration = "{{ $part_ii_duration }}" * 1
            , part_v_duration = "{{ $part_v_duration }}" * 1
            , part_vi_duration = "{{ $part_vi_duration }}" * 1
            , part_xiii_duration = "{{ $part_xiii_duration }}" * 1
            , part_xiv_duration = "{{ $part_xiv_duration }}" * 1

    </script>
    <script src="/js/video.js?v=2.01"></script>
    <style>
        .video-js:after {
            content: none;
        }

    </style>
</body>

</html>
