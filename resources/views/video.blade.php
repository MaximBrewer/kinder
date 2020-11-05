<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">

    <title>Happy New Year</title>
    <link href="//s.platformcraft.ru/video/videojs/video-js5.19.2.min.css" rel="stylesheet">
    <link href="//s.platformcraft.ru/video/videojs.addon.css" rel="stylesheet">
</head>

<body style="margin:0px">
    <script src="//s.platformcraft.ru/video/videojs/video5.19.2.min.js"></script>
    <script src="//s.platformcraft.ru/video/videojs/plugins/hls/videojs-contrib-hls-5.9.min.js"></script>
    <script src="//s.platformcraft.ru/video/videojs/plugins/videojs.framebyframe.min.js"></script>

    <video id="video" class="custom-template video-js video-addon-js vjs-default-skin vjs-big-play-centered vjs-fullscreen" poster="https://montage-cache.cdnvideo.ru/montage/.previews/preview-5fa13c120e47cf6eac7cce64.jpg" controls preload="none" width="640" height="480" data-setup='{
        "html5": {
            "nativeTextTracks": false
        }
    }'>

        <source src="/playlists/{{ $hash }}.m3u8" type="application/x-mpegURL">

        <p class="vjs-no-js">
            Для просмотра необходим <a href="http://videojs.com/html5-video-support/" target="_blank">браузер с поддержкой HTML5 video</a>
        </p>
    </video>
    <script src="//s.platformcraft.ru/video/jquery-2.1.4.min.js"></script>
    <script>
        var player = videojs('video', {
            'html5': {
                nativeTextTracks: false
            },

        }, function() {


            this.on("play", function() {
                this.poster('');
                var pauseBtn = document.querySelector('button.vjs-playing');
                if (pauseBtn) {
                    pauseBtn.focus();
                }
            });


        });







        window.addEventListener('message', event => {
            if (event.data == "start") {
                event.source.postMessage('start:' + player.currentTime(), '*');
            } else if (event.data = "end") {
                event.source.postMessage('end:' + player.currentTime(), '*');
            }
        });
    </script>
</body>

</html>