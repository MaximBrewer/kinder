var step = 1;
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
                    "scale(2)";
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
                // that.src({
                //     src: "/playlist-ii/" + hash + ".m3u8",
                //     type: "application/x-mpegURL"
                // });
                // that.play();
            }
            if (step == 3) {
                // document.getElementById("photoFrame").style.transform =
                //     "scale(2)";
                // document.getElementById("photoFrame").style.transition =
                //     "10s linear";
                // if (photo) document.getElementById("hover").style.zIndex = "10";
                // that.src({
                //     src: "/playlist-ii/" + hash + ".m3u8",
                //     type: "application/x-mpegURL"
                // });
            }
        });
        this.on("canplay", function() {
            if (step == 2) {
                // setTimeout(function() {
                //     document.getElementById("hover").style.zIndex = "-1";
                // }, photo_duration * 1000);
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
