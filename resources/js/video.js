var player = videojs("video", {
    sources: [
        {
            src: "/playlist-i/" + hash + ".m3u8",
            type: "application/x-mpegURL"
        }
    ],
    controls: true,
    control: true,
    poster:
        "https://montage-cache.cdnvideo.ru/montage/.previews/preview-5fa973f50e47cf6eac7d7b7a.jpg"
});

function togglePlayer() {
    player.paused() ? player.play() : player.pause();
}
var body = document.getElementsByTagName("body")[0];

body.addEventListener("mouseup", function(event) {
    console.log(event);
    alert(1)
    togglePlayer();
});
body.addEventListener("touchstart", function(event) {
    console.log(event);
    // togglePlayer();
});
body.addEventListener("touchend", function(event) {
    console.log(event);
    alert(2)
    togglePlayer();
});
