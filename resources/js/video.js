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
                    "10s linear";
                if (photo) document.getElementById("hover").style.zIndex = "10";
                that.src({
                    src: "/playlist-ii/" + hash + ".m3u8",
                    type: "application/x-mpegURL"
                });
                that.play();
            }
            if (step == 3) {
                // that.src({
                //     type: "application/x-mpegURL",
                //     src: "/playlist-ii/" + hash + ".m3u8"
                // });
            }
        });
        this.on("canplay", function() {
            if (step == 2) {
                setTimeout(function() {
                    document.getElementById("hover").style.zIndex = "-1";
                }, photo_duration * 1000);
            }
        });
        this.on("loadedmetadata", function() {
            // if (step == 2) {
            //     setTimeout(function() {
            //         that.play();
            //         setTimeout(function() {
            //             document.getElementById("hover").style.zIndex = "-1";
            //         }, photo_duration * 1000);
            //     }, 1200);
            // }
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
        this.on("audioinfo", function() {
            console.log("audioinfo", that);
        });
        this.on("mediachanging", function() {
            console.log("mediachanging", that);
        });
        this.on("mediachange", function() {
            console.log("mediachange", that);
        });
        this.on("playlistunchanged", function() {
            console.log("playlistunchanged", that);
        });
        this.on("renditiondisabled", function() {
            console.log("renditiondisabled", that);
        });
        this.on("renditionenabled", function() {
            console.log("renditionenabled", that);
        });
        this.on("progress", function(e, c) {
            console.log("progress", e, c);
        });
        this.on("syncinfoupdate", function() {
            console.log("syncinfoupdate", that);
        });
        this.on("timestampoffset", function() {
            console.log("timestampoffset", that);
        });
        this.on("earlyabort", function() {
            console.log("earlyabort", that);
        });
        this.on("seekablechanged", function() {
            console.log("seekablechanged", that);
        });
        this.on("waiting", function() {
            console.log("waiting", that);
        });
        this.on("canplay", function() {
            console.log("canplay", that);
        });
        this.on("mediaupdatetimeout", function() {
            console.log("mediaupdatetimeout", that);
        });
        this.on("dispose", function() {
            console.log("dispose", that);
        });
        this.on("data", function() {
            console.log("data", that);
        });
        this.on("timestamp", function() {
            console.log("timestamp", that);
        });
        this.on("timelineStartInfo", function() {
            console.log("timelineStartInfo", that);
        });
        this.on("baseMediaDecodeTime", function() {
            console.log("baseMediaDecodeTime", that);
        });
        this.on("seeking", function() {
            console.log("seeking", that);
        });
        this.on("seeked", function() {
            console.log("seeked", that);
        });
        this.on("sourceclose", function() {
            console.log("sourceclose", that);
        });
        this.on("sourceclose", function() {
            console.log("sourceclose", that);
        });
        this.on("sourceclose", function() {
            console.log("sourceclose", that);
        });
        this.on("sourceclose", function() {
            console.log("sourceclose", that);
        });
        this.on("sourceclose", function() {
            console.log("sourceclose", that);
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
