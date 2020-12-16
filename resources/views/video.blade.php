<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <title>Kinder New Year</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link href="/css/video-js5.19.2.min.css" rel="stylesheet">
    <link href="/css/videojs.addon.css" rel="stylesheet">
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
        <audio id="audio" allowFullscreen="false"  playsinline>
            <source src="https://montage-cache.cdnvideo.ru/montage/kindern/music6.mp3" type="audio/mpeg">
            <source src="https://montage-cache.cdnvideo.ru/montage/kindern/music6.wav" type="audio/wav">
        </audio>
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

	<script src="//s.platformcraft.ru/video/videojs/video5.19.2.min.js"></script>
	<script src="//s.platformcraft.ru/video/videojs/plugins/hls/videojs-contrib-hls-5.9.min.js"></script>
    <script src="//s.platformcraft.ru/video/videojs/plugins/videojs.framebyframe.min.js"></script>
    <script src="/js/video.js?v=5.03"></script>
    <style>
        .video-js:after {
            content: none;
        }

        .video-js .vjs-control {
            overflow: hidden;
        }
    </style>
</body>

</html>
