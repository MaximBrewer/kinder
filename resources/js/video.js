var player = videojs("video", {
    sources: [
        {
            src:
                "https://montage-vod-hls.cdnvideo.ru/montage-vod/_definst_/mp4:montage/kinder/part_i/all%20%281280xauto%29.mp4/playlist.m3u8",
            type: "application/x-mpegURL"
        }
    ],
    poster:
        "https://montage-cache.cdnvideo.ru/montage/.previews/preview-5fa973f50e47cf6eac7d7b7a.jpg"
});

function togglePlayer() {
    player.paused() ? player.play() : player.pause();
}
var body = document.getElementsByTagName("body")[0];

body.addEventListener("mouseup", function(event) {
    console.log(event);
    togglePlayer();
});
body.addEventListener("touchstart", function(event) {
    console.log(event);
    // togglePlayer();
});
body.addEventListener("touchend", function(event) {
    console.log(event);
    togglePlayer();
});
