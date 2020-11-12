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

<body style="margin:0;padding:0;">
    <video id="video" class="custom-template video-js video-addon-js vjs-default-skin vjs-big-play-centered vjs-nofull" webkit-playsinline playsinline>
        <p class="vjs-no-js">
            Для просмотра включите яваскрипт или обновите браузер до <a href="http://videojs.com/html5-video-support/" target="_blank">совместимых с HTML5 видео</a>
        </p>
    </video>
    <script>
        var hash = "{{ $hash }}",
            part_i_duration = "{{ $part_i_duration }}" * 1,
            part_ii_duration = "{{ $part_ii_duration }}" * 1,
            part_iii_duration = "{{ $part_iii_duration }}" * 1,
            part_iv_duration = "{{ $part_iv_duration }}" * 1,
            part_v_duration = "{{ $part_v_duration }}" * 1,
            part_vi_duration = "{{ $part_vi_duration }}" * 1,
            part_vii_duration = "{{ $part_vii_duration }}" * 1,
            part_viii_duration = "{{ $part_viii_duration }}" * 1,
            part_ix_duration = "{{ $part_ix_duration }}" * 1,
            part_x_duration = "{{ $part_x_duration }}" * 1,
            part_xi_duration = "{{ $part_xi_duration }}" * 1,
            part_xii_duration = "{{ $part_xii_duration }}" * 1,
            part_xiii_duration = "{{ $part_xiii_duration }}" * 1,
            part_xiv_duration = "{{ $part_xiv_duration }}" * 1,
            part_xv_duration = "{{ $part_xv_duration }}" * 1,
            part_xvi_duration = "{{ $part_xvi_duration }}" * 1,
            part_xvii_duration = "{{ $part_xvii_duration }}" * 1;
    </script>
    <script src="/js/video.js?v=1.01"></script>
</body>

</html>