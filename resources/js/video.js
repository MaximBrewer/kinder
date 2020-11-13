var resolution = 1280;

var redImg, whiteImg, goldImg;

var player = videojs(
    "video",
    {
        sources: [
            {
                src: "/playlist/" + hash + ".m3u8?resolution=" + resolution,
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
    setGiftsPause,
    tp = part_i_duration + part_ii_duration + part_iii_duration,
    tb =
        tp +
        part_iv_duration +
        part_v_duration +
        part_vi_duration +
        part_vii_duration,
    tg = tb + part_viii_duration + part_ix_duration + part_x_duration,
    photoElement = document.createElement("div"),
    ballsElement = document.createElement("div"),
    giftsElement = document.createElement("div"),
    redGiftElement = document.createElement("div"),
    whiteGiftElement = document.createElement("div"),
    goldGiftElement = document.createElement("div");

var chooseBall = function(e) {
    clearTimeout(setBallPause);
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
    var color = "g";

    var margin = (window.innerWidth - width) / 2;

    var clientX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;

    if (margin + width * 0.375 < clientX) color = "r";
    if (margin + (width - width * 0.375) < clientX) color = "s";

    player.src({
        src:
            "/playlist/" +
            hash +
            ".m3u8?resolution=" +
            resolution +
            "&color=" +
            color,
        type: "application/x-mpegURL"
    });
    player.currentTime(tb + part_viii_duration + 0.5);
    player.play();
    setTimeout(function() {
        removeBalls();
    }, 1000);
};

var chooseGift = function(e) {
    console.log("chooseGift");
    console.log(e);
    e.target.style.opacity = "1";
    if (
        redImg.style.opacity == "1" &&
        whiteImg.style.opacity == "1" &&
        goldImg.style.opacity == "1"
    ) {
        player.currentTime(tg + part_xi_duration + 0.5);
        player.play();
    }
};

var setBall = function() {
    console.log("setBall");
    clearTimeout(setBallPause);
    var ct = player.currentTime();
    ballsElement = createEl();
    ballsElement.style.background =
        "url('https://montage-cache.cdnvideo.ru/montage/kindern/part_viii/balls.png') no-repeat 0 0 / 100%";
    document.getElementById("video").appendChild(ballsElement);
    ballsElement.addEventListener("touchstart", chooseBall);
    ballsElement.addEventListener("click", chooseBall);
    setBallPause = setTimeout(function() {
        player.pause();
    }, (tb + part_viii_duration - ct) * 1000 - 500);
};

var setGifts = function() {
    console.log("setGifts");
    clearTimeout(setGiftsPause);
    var ct = player.currentTime();
    giftsElement = createEl();
    giftsElement.style.background =
        "url('https://montage-cache.cdnvideo.ru/montage/kindern/part_xi/podarki.png') no-repeat 0 0 / 100%";
    document.getElementById("video").appendChild(giftsElement);

    redImg = document.createElement("img");
    redImg.src =
        "https://montage-cache.cdnvideo.ru/montage/kindern/part_xi/red.png";
    redImg.alt = "";
    redImg.style.position = "absolute";
    redImg.style.top = "41.015%";
    redImg.style.left = "47.1%";
    redImg.style.opacity = "0";
    redImg.style.height = "42.4%";

    whiteImg = document.createElement("img");
    whiteImg.src =
        "https://montage-cache.cdnvideo.ru/montage/kindern/part_xi/white.png";
    whiteImg.alt = "";
    whiteImg.style.position = "absolute";
    whiteImg.style.top = "64.715%";
    whiteImg.style.left = "38.1%";
    whiteImg.style.opacity = "0";
    whiteImg.style.height = "31.4%";
    goldImg = document.createElement("img");
    goldImg.src =
        "https://montage-cache.cdnvideo.ru/montage/kindern/part_xi/gold.png";
    goldImg.alt = "";
    goldImg.style.position = "absolute";
    goldImg.style.top = "47.3%";
    goldImg.style.left = "66%";
    goldImg.style.opacity = "0";
    goldImg.style.height = "42.4%";
    giftsElement.appendChild(redImg);
    giftsElement.appendChild(whiteImg);
    giftsElement.appendChild(goldImg);

    redImg.addEventListener("touchstart", chooseGift);
    redImg.addEventListener("click", chooseGift);
    whiteImg.addEventListener("touchstart", chooseGift);
    whiteImg.addEventListener("click", chooseGift);
    goldImg.addEventListener("touchstart", chooseGift);
    goldImg.addEventListener("click", chooseGift);

    setGiftsPause = setTimeout(function() {
        player.pause();
    }, (tg + part_xi_duration - ct) * 1000 - 500);
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
    console.log("removePhoto");
    document.getElementById("video").removeChild(photoElement);
};

var removeBalls = function() {
    console.log("removeBalls");
    document.getElementById("video").removeChild(ballsElement);
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
