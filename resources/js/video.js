var step = 1;
var chooseGift = function(e) {
    e.target.style.opacity = "1";
    if (
        document.getElementById("gftI").style.opacity == "1" &&
        document.getElementById("gftII").style.opacity == "1" &&
        document.getElementById("gftIII").style.opacity == "1"
    ) {
        player.src({
            src: "/playlist-iv/" + hash + ".m3u8",
            type: "application/x-mpegURL"
        });
        step = 6;
        player.play();
    }
};
var chooseBall = function(e) {
    var color = "red";
    var clientX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    window.innerWidth * 0.375 > clientX
        ? (color = "gold")
        : window.innerWidth - window.innerWidth * 0.375 > clientX
        ? (color = "red")
        : (color = "silver");
    step = 4;
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
            ++step;
            console.log("ended", that, step);
            if (step == 2) {
                if (photo) {
                    document.getElementById(
                        "photoFrame"
                    ).style.backgroundImage = "url(" + photo + ")";
                    document.getElementById("hover").style.zIndex = "10";
                    document.getElementById("hover").style.opacity = "1";
                }
                document.getElementById("photoFrame").style.transform =
                    "scale(1.4)";
                document.getElementById("photoFrame").style.transition =
                    "transform 10s linear";
                document.getElementById("photoFrame").style.backgroundRepeat =
                    "no-repeat";
                document.getElementById("photoFrame").style.backgroundSize =
                    "auto 92%";
                document.getElementById("photoFrame").style.backgroundPosition =
                    "top left 57%";
                that.src({
                    src: "/playlist-ii/" + hash + ".m3u8",
                    type: "application/x-mpegURL"
                });
                that.play();
            }
            if (step == 3) {
                document.getElementById("hover").style.opacity = "0";
                document.getElementById("hover").style.zIndex = "-1";
                document.getElementById("hover2").style.opacity = "1";
                document.getElementById("hover2").style.zIndex = "10";
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
            if (step == 5) {
                document.getElementById("hover").style.opacity = "0";
                document.getElementById("hover").style.zIndex = "-1";
                document.getElementById("hover2").style.opacity = "0";
                document.getElementById("hover2").style.zIndex = "-1";
                document.getElementById("hover3").style.zIndex = "10";
                document.getElementById("hover3").style.opacity = "1";
                document.getElementById("photoFrame3").style.transform =
                    "scale(1.2)";
                document.getElementById("photoFrame3").style.transition =
                    "transform 10s linear";
                document.getElementById("photoFrame3").style.backgroundRepeat =
                    "no-repeat";
                document.getElementById("photoFrame3").style.backgroundSize =
                    "auto 92%";
                document.getElementById(
                    "photoFrame2"
                ).style.backgroundPosition = "top left 57%";
                that.src({
                    src:
                        "https://montage-cache.cdnvideo.ru/montage/kinder/part_xi/voice.mp3",
                    type: "audio/mpeg"
                });
                that.play();

                document
                    .getElementById("gftI")
                    .addEventListener("touchstart", chooseGift);
                document
                    .getElementById("gftI")
                    .addEventListener("click", chooseGift);

                document
                    .getElementById("gftII")
                    .addEventListener("touchstart", chooseGift);
                document
                    .getElementById("gftII")
                    .addEventListener("click", chooseGift);

                document
                    .getElementById("gftIII")
                    .addEventListener("touchstart", chooseGift);
                document
                    .getElementById("gftIII")
                    .addEventListener("click", chooseGift);
            }
        });
        this.on("canplay", function() {
            if (step >= 2) {
                setTimeout(function() {
                    document.getElementById("hover").style.zIndex = "-1";
                    document.getElementById("hover").style.opacity = "0";
                }, photo_duration * 1000 + 1500);
            }
            if (step >= 4) {
                document.getElementById("hover2").style.zIndex = "-1";
                document.getElementById("hover2").style.opacity = "0";
            }
            if (step >= 6) {
                document.getElementById("hover3").style.zIndex = "-1";
                document.getElementById("hover3").style.opacity = "0";
            }
        });
        this.on("play", function() {
            console.log("play", step);
            console.log(that.currentTime);
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
        this.on("progress", function() {
            console.log("progress", that);
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
