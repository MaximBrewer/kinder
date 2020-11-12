<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <title>Happy New Year</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link href="//s.platformcraft.ru/video/videojs/video-js5.19.2.min.css" rel="stylesheet">
    <link href="//s.platformcraft.ru/video/videojs.addon.css" rel="stylesheet">
    <script src="//s.platformcraft.ru/video/videojs/video5.19.2.min.js"></script>
    <script src="//s.platformcraft.ru/video/videojs/plugins/hls/videojs-contrib-hls-5.9.min.js"></script>
    <script src="//s.platformcraft.ru/video/videojs/plugins/videojs.framebyframe.min.js"></script>
    <script src="/js/videojs-playlist.min.js"></script>
    <link rel="preload" href="https://montage-cache.cdnvideo.ru/montage/kinder/part_iv/photo.png" as="image">
    <link rel="preload" href="https://montage-cache.cdnvideo.ru/montage/kinder/part_viii/image.png" as="image">
    <link rel="preload" href="https://montage-cache.cdnvideo.ru/montage/kinder/part_xi/image.png" as="image">
    <link rel="preload" href="https://montage-cache.cdnvideo.ru/montage/kinder/part_xi/red.png" as="image">
    <link rel="preload" href="https://montage-cache.cdnvideo.ru/montage/kinder/part_xi/white.png" as="image">
    <link rel="preload" href="https://montage-cache.cdnvideo.ru/montage/kinder/part_xi/gold.png" as="image">
    <link rel="preload" href="{{ $photo }}" as="image">
</head>

<body>
    <video id="video" class="custom-template video-js video-addon-js vjs-default-skin vjs-big-play-centered vjs-nofull" webkit-playsinline playsinline>
        <p class="vjs-no-js">
            Для просмотра включите яваскрипт или обновите браузер до <a href="http://videojs.com/html5-video-support/" target="_blank">совместимых с HTML5 видео</a>
        </p>
    </video>
    <script>
        var hash = "{{ $hash }}",
            photo = "{{ $photo }}";
    </script>
    <script src="/js/video.js?v=1.01"></script>
</body>

</html>