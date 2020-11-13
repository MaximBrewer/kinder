var player = videojs(
    "video",
    {
        sources: [
            {
                src: "/playlist/" + hash + ".m3u8",
                type: "application/x-mpegURL"
            }
        ],
        controls: true,
        control: true,
        poster:
            "https://montage-cache.cdnvideo.ru/montage/.previews/preview-5fae91b4ef3db56d66205367.jpg"
    },
    function() {
        var that = this;
        this.on("ended", function() {
            checkTimeouts(that);
        });
        this.on("play", function() {
            checkTimeouts(that);
        });
        this.on("firstplay", function() {
            checkTimeouts(that);
        });
        this.on("change", function() {
            checkTimeouts(that);
        });
        this.on("loadedmetadata", function() {
            checkTimeouts(that);
        });
        this.on("progress", function() {
            checkTimeouts(that);
        });
        this.on("seeking", function() {
            checkTimeouts(that);
        });
        this.on("seeked", function() {
            checkTimeouts(that);
        });
    }
);

var timeoutPhoto,
    timeoutRemovePhoto,
    timeoutBall,
    setBallPause,
    timeoutGifts,
    tp = part_i_duration + part_ii_duration + part_iii_duration,
    tb =
        tp +
        part_iv_duration +
        part_v_duration +
        part_vi_duration +
        part_vii_duration,
    tg = tb + part_ix_duration + part_x_duration,
    photoElement = document.createElement("div"),
    ballsElement = document.createElement("div"),
    giftsElement = document.createElement("div"),
    redGiftElement = document.createElement("div"),
    whiteGiftElement = document.createElement("div"),
    goldGiftElement = document.createElement("div");

var setBall = function() {
    console.log("setBall");
    clearTimeout(setBallPause);
    var ct = player.currentTime();
    ballsElement = createEl();
    ballsElement.style.background =
        "url('https://montage-cache.cdnvideo.ru/montage/kindern/part_viii/balls.png') no-repeat 0 0 / 100%";
    document.getElementById("video").appendChild(ballsElement);
    clearTimeout(setBallPause);
    setBallPause = setTimeout(function() {
        player.pause();
    }, (tb - ct) * 1000 - 350);
};

var setGifts = function() {
    console.log("setGifts");
    var ct = player.currentTime();
    giftsPauseTimeout = setTimeout(f, part_xi_duration);
    player.pause();
};

var setPhoto = function() {
    var ct = player.currentTime();
    photoElement = createEl();
    photoElement.style.background =
        "url('https://montage-cache.cdnvideo.ru/montage/kindern/part_iv/photo.png') no-repeat 0 0 / 100%, url('" +
        photo +
        "') no-repeat top left 57%/auto 92%";
    document.getElementById("video").appendChild(photoElement);

    clearTimeout(timeoutRemovePhoto);
    timeoutRemovePhoto = setTimeout(function() {
        removePhoto();
    }, (tp + part_iv_duration - ct) * 1000 + 350);
};

var removePhoto = function() {
    document.getElementById("video").removeChild(photoElement);
    console.log("removePhoto");
};

var createEl = function() {
    var videoHeight = player.children()[0].offsetHeight,
        videoWidth = player.children()[0].offsetWidth;
    if (videoHeight > (videoWidth * 720) / 1280) {
        var width = videoWidth,
            height = (width / 1280) * 720,
            top = (videoHeight - height) / 2,
            left = 0;
    } else {
        var height = videoHeight,
            width = (height / 720) * 1280;
        (top = 0), (left = (videoWidth - width) / 2);
    }
    el = document.createElement("div");
    el.style.position = "absolute";
    el.style.height = height + "px";
    el.style.width = width + "px";
    el.style.top = top + "px";
    el.style.left = left + "px";
    el.style.zIndex = "100";
    el.style.backgroundColor = "#000000";
    return el;
};

var checkTimeouts = function() {
    var ct = player.currentTime();
    clearTimeout(timeoutBall);
    clearTimeout(timeoutPhoto);
    clearTimeout(timeoutGifts);
    if (photo) {
        if (ct < tp) {
            timeoutPhoto = setTimeout(function() {
                setPhoto();
            }, (tp - ct) * 1000 - 350);
        } else if (ct < tp + part_iv_duration - 350) {
            setPhoto();
        }
        if (ct > tp + part_iv_duration + 350) {
            removePhoto();
        }
    }
    if (ct < tb) {
        timeoutBall = setTimeout(function() {
            setBall();
        }, (tb - ct) * 1000 - 350);
    } else {
        // setBall()
    }

    if (ct < tg) {
        timeoutGifts = setTimeout(function() {
            setGifts();
        }, (tg - ct) * 1000 - 350);
    } else {
        // setPhoto()
    }
};
