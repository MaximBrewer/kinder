var step = 1;

var chooseBall = function(e) {
    var color = "red";
    var clientX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    window.innerWidth * 0.375 > clientX
        ? (color = "gold")
        : window.innerWidth - window.innerWidth * 0.375 > clientX
        ? (color = "red")
        : (color = "silver");
    player.src({
        src: "/playlist-iii/" + color + ".m3u8",
        type: "application/x-mpegURL"
    });
    player.play();
};
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
            console.log("ended", that);
            ++step;
            if (step == 2) {
                document.getElementById("photoFrame").style.transform =
                    "scale(1.4)";
                document.getElementById("photoFrame").style.transition =
                    "transform 10s linear";
                document.getElementById("photoFrame").style.backgroundImage =
                    "url(" + photo + ")";
                document.getElementById("photoFrame").style.backgroundRepeat =
                    "no-repeat";
                document.getElementById("photoFrame").style.backgroundSize =
                    "auto 92%";
                document.getElementById("photoFrame").style.backgroundPosition =
                    "top left 57%";
                if (photo) document.getElementById("hover").style.zIndex = "10";
                that.src({
                    src: "/playlist-ii/" + hash + ".m3u8",
                    type: "application/x-mpegURL"
                });
                that.play();
            }
            if (step == 3) {
                document.getElementById("photoFrame2").style.transform =
                    "scale(1.2)";
                document.getElementById("photoFrame2").style.transition =
                    "transform 10s linear";
                document.getElementById("photoFrame2").style.backgroundRepeat =
                    "no-repeat";
                document.getElementById("photoFrame2").style.backgroundSize =
                    "auto 92%";
                document.getElementById(
                    "photoFrame2"
                ).style.backgroundPosition = "top left 57%";
                document.getElementById("hover2").style.zIndex = "10";
                that.src({
                    src:
                        "https://montage-vod-hls.cdnvideo.ru/montage-vod/_definst_/mp4:montage/kinder/part_viii/all%20%281280xauto%29.mp4/playlist.m3u8",
                    type: "application/x-mpegURL"
                });
                that.play();
                document
                    .getElementById("photoFrame2")
                    .addEventListener("click", chooseBall);
                document
                    .getElementById("photoFrame2")
                    .addEventListener("touchstart", chooseBall);
            }
        });
        this.on("canplay", function() {
            if (step == 2) {
                setTimeout(function() {
                    document.getElementById("hover").style.zIndex = "-1";
                }, photo_duration * 1000);
            }
            if (step == 4) {
                document.getElementById("hover2").style.zIndex = "-1";
            }
        });
    }
);

function togglePlayer() {
    // player.paused() ?
    player.play();
    // : player.pause();
}
var body = document.getElementsByTagName("body")[0];

body.addEventListener("mouseup", function(event) {
    // togglePlayer();
});

body.addEventListener("touchstart", function(event) {
    // togglePlayer();
});
body.addEventListener("touchend", function(event) {
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
