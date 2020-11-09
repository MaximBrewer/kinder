var player = videojs(
    "video",
    {
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
    },
    function() {
        var that = this;
        this.on("ended", function() {
            that.src({type: 'video/mp4', src: 'http://www.example.com/path/to/video.mp4'});
        });
    }
);

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

window.addEventListener("message", event => {
    if (event.data == "start") {
        console.log();
        event.source.postMessage("start:" + player.currentTime(), "*");
    } else if ((event.data = "end")) {
        event.source.postMessage("end:" + player.currentTime(), "*");
    }
});
