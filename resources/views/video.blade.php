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
</head>

<body style="margin:0px">
    <video id="video" class="custom-template video-js video-addon-js vjs-default-skin vjs-big-play-centered vjs-nofull" webkit-playsinline playsinline>
        <p class="vjs-no-js">
            Для просмотра включите яваскрипт или обновите браузер до <a href="http://videojs.com/html5-video-support/" target="_blank">совместимых с HTML5 видео</a>
        </p>
    </video>
    <script>
        var hash = "{{ $hash }}";
    </script>
    <script src="/js/video.js?v=1.00"></script>
</body>

</html>