<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">

    <title>Happy New Year</title>
    <link href="//s.platformcraft.ru/video/videojs/video-js5.19.2.min.css" rel="stylesheet">
    <link href="//s.platformcraft.ru/video/videojs.addon.css" rel="stylesheet">
</head>

<body style="margin:0px;background:#000000;">
    <script src="//s.platformcraft.ru/video/videojs/video5.19.2.min.js"></script>
    <script src="//s.platformcraft.ru/video/videojs/plugins/hls/videojs-contrib-hls-5.9.min.js"></script>
    <script src="//s.platformcraft.ru/video/videojs/plugins/videojs.framebyframe.min.js"></script>
    <script src="/js/videojs-playlist.min.js"></script>

    <video id="video-i" class="custom-template video-js video-addon-js vjs-default-skin vjs-big-play-centered vjs-fullscreen" poster="https://montage-cache.cdnvideo.ru/montage/.previews/preview-5fa12bb40e47cf646265df14.jpg" controls preload="none" controls preload="auto">
        <source src="https://montage-vod-hls.cdnvideo.ru/montage-vod/_definst_/mp4:montage/kinder/part_i/all-1024.mp4/playlist.m3u8" type="application/x-mpegURL">
        <p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that<a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a></p>
    </video>

    <video id="video-ii" style="display:none;" class="custom-template video-js video-addon-js vjs-default-skin vjs-big-play-centered vjs-fullscreen" controls preload="auto">
        <source src="https://montage-vod-hls.cdnvideo.ru/montage-vod/_definst_/mp4:montage/kinder/part_ii/kamil-1024.mp4/playlist.m3u8" type="application/x-mpegURL">
        <p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser<a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a></p>
    </video>

    <script src="//s.platformcraft.ru/video/jquery-2.1.4.min.js"></script>
    <script>
        var playerII = videojs('video-ii', {
            'html5': {
                nativeTextTracks: false
            },
        }, function() {
            this.on("ended", function() {

            });
        });
        var playerI = videojs('video-i', {
            'html5': {
                nativeTextTracks: false
            },
        }, function() {
            this.on("ended", function() {
                $('#video-ii video').show();
                playerII.play()
                $('#video-i').fadeOut(20);
                setTimeout(function() {
                    $('#video-ii').fadeIn(20);
                }, 20)
            });
        });
    </script>
</body>

</html>