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
            ++step;
            if (step == 2) {
                document.getElementById("hover").style.zIndex = "10";
                document.getElementById("photoFrame").style.transform =
                    "scale(2)";
                document.getElementById("photoFrame").style.transition =
                    "10s linear";
                that.src({
                    type: "audio/mp4",
                    src:
                        "https://montage-cache.cdnvideo.ru/montage/kinder/part_iv/photo.m4a"
                });
                that.play();
            }
            if (step == 3) {
                that.src({
                    type: "application/x-mpegURL",
                    src: "/playlist-ii/" + hash + ".m3u8"
                });
            }
        });
        this.on("loadedmetadata", function() {
            if (step == 3) {
                that.play();
                document.getElementById("hover").style.zIndex = "-1";
            }
        });

        this.on("play", function() {
            console.log("play", step);
            window.scrollTo(0, 1);
        });
        this.on("firstplay", function() {
            console.log("firstplay", that);
        });
        this.on("change", function() {
            console.log("change", that);
        });
        this.on("sourceended", function() {
            console.log("sourceended", that);
        });
        this.on("done", function() {
            console.log("done", that);
        });
        this.on("selectedinitialmedia", function() {
            console.log("selectedinitialmedia", that);
        });
        this.on("sourceopen", function() {
            console.log("sourceopen", that);
        });
        this.on("loadedmetadata", function() {
            console.log("loadedmetadata", that);
        });
        this.on("loadedplaylist", function() {
            console.log("loadedplaylist", that);
        });
        this.on("renditiondisabled", function() {
            console.log("renditiondisabled", that);
        });
        this.on("bandwidthupdate", function() {
            console.log("bandwidthupdate", that);
        });
    }
);

function togglePlayer() {
    player.paused() ? player.play() : player.pause();
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
