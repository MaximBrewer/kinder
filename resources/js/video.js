import "eruda";

let ele = document.createElement('div');
document.body.appendChild(ele);
 
eruda.init({
    container: ele,
    tool: ['console', 'elements']
});

var resolution = 1024;
window.innerWidth > 640 && (resolution = 1280);
window.innerWidth > 1024 && (resolution = 1920);
// window.innerWidth > 1280 && (resolution = 1920);

var part_i_duration = 71.517,
    part_iii_duration = 14.272,
    part_iv_duration = photo ? 5.8 : 0,
    part_vii_duration = 24.845,
    part_viii_duration = 10.033,
    part_ix_duration = 20.9,
    part_x_duration = 40.914,
    part_xi_duration = 5.8,
    part_xii_duration = 13.514,
    part_xv_duration = 26.958,
    part_xvi_duration = 5.921,
    part_xvii_duration = 12.562, el;

var paused = true,
    color = "s",
    currentTime = 0,
    photoSetted = 0,
    ballsSetted = 0,
    giftsSetted = 0,
    volumeInit = 0.7,
    setBallsPause,
    setGiftsPause,
    tp = part_i_duration + part_ii_duration + part_iii_duration,
    tb =
        tp +
        part_iv_duration +
        part_v_duration +
        part_vi_duration +
        part_vii_duration,
    tg = tb + part_viii_duration + part_ix_duration + part_x_duration,
    musicStopped = false;


var pauseTimeout30 = false;

var checkTimeouts = function () {
    var ct = player.currentTime();
    paused = true;

    if (photo) {
        if (ct < tp - 0.5) {
            photoSetted && removePhoto();
        } else if (ct < tp + part_iv_duration + 0.5) {
            !photoSetted && setPhoto();
        } else if (ct > tp + part_iv_duration + 0.5) {
            photoSetted && removePhoto();
        }
    }
    if (ct < tb - 0.5) {
        ballsSetted && removeBalls();
    }
    if (ct > tb - 0.5 && ct < tb + part_viii_duration + 0.5) {
        !ballsSetted && setBall();
        paused = false;
    } else if (ct > tb + part_viii_duration + 0.5) {
        ballsSetted && removeBalls();
    }

    if (ct < tg - 0.5) {
        giftsSetted && removeGifts();
    } else if (ct > tg - 0.5 && ct < tg + part_xi_duration + 0.5) {
        !giftsSetted && setGifts();
        paused = false;
    } else if (ct > tg + part_xi_duration + 0.5) {
        giftsSetted && removeGifts();
    }

    if (ct < tb + part_viii_duration + part_ix_duration - 1) {
        if (color == "s") {
            if (ct > tb + part_viii_duration + 6.5) {
                player.currentTime(tb + part_viii_duration + part_ix_duration)
            }
        }

        if (color == "g") {
            if (ct > tb + part_viii_duration + 13.5) {
                player.currentTime(tb + part_viii_duration + part_ix_duration)
            }
        }

        if (color == "r") {
            if (ct > tb + part_viii_duration + 20.5) {
                player.currentTime(tb + part_viii_duration + part_ix_duration)
            }
        }
    }

    if (
        ct >
        tg +
        part_xi_duration +
        part_xii_duration +
        part_xiii_duration +
        part_xiv_duration +
        part_xv_duration +
        part_xvi_duration -
        2
    ) {
        if (!musicStopped) stopMusic();
    } else {
        musicStopped = false;
        audio.volume = volumeInit;
    }

    if (
        ct >
        tg +
        part_xi_duration +
        part_xii_duration +
        part_xiii_duration +
        part_xiv_duration +
        part_xv_duration +
        part_xvi_duration -
        2
    ) {
        if (!musicStopped) stopMusic();
    } else {
        musicStopped = false;
        audio.volume = volumeInit;
    }
};

var setPhoto = function () {
    photoSetted = 1;
    if (player.isFullscreen()) player.exitFullscreen();
    player.play();
    document.getElementById("photoElement").style.zIndex = "100";
},
    removePhoto = function () {
        photoSetted = 0;
        console.log("removePhoto");
        document.getElementById("photoElement") &&
            (document.getElementById("photoElement").style.zIndex = "-1");
    };

var setBall = function () {
    ballsSetted = 1;
    player.play();
    console.log("setBall");
    if (player.isFullscreen()) player.exitFullscreen();
    player.play();
    document.getElementById("ballsElement").style.zIndex = "100";
    document
        .getElementById("ballsElement")
        .addEventListener("touchstart", chooseBall);
    document
        .getElementById("ballsElement")
        .addEventListener("click", chooseBall);
    clearTimeout(setBallsPause);
    var ct = player.currentTime();
    setBallsPause = setTimeout(function () {
        player.pause();
    }, (tb + part_viii_duration - ct - 0.5) * 1000);
};

var removeBalls = function () {
    ballsSetted = 0;
    console.log("removeBalls");
    document.getElementById("ballsElement") &&
        (document.getElementById("ballsElement").style.zIndex = "-1");
};

var setGifts = function () {
    document.getElementById("redImg").style.opacity = 0;
    document.getElementById("whiteImg").style.opacity = 0;
    document.getElementById("goldImg").style.opacity = 0;
    giftsSetted = 1;
    player.play();
    console.log("setGifts");
    if (player.isFullscreen()) player.exitFullscreen();
    player.play();
    clearTimeout(setGiftsPause);
    var ct = player.currentTime();
    document.getElementById("giftsElement").style.zIndex = "100";
    setGiftsPause = setTimeout(function () {
        player.pause();
    }, (tg + part_xi_duration - ct - 0.5) * 1000);
};
var removeGifts = function () {
    giftsSetted = 0;
    console.log("removeGifts");
    document.getElementById("giftsElement") &&
        (document.getElementById("giftsElement").style.zIndex = "-1");
};

var chooseBall = function (e) {
    clearTimeout(setBallsPause);
    var videoHeight = player.el().offsetHeight,
        videoWidth = player.el().offsetWidth;

    if (videoHeight > (videoWidth * 720) / 1280) {
        var width = videoWidth,
            height = (width / 1280) * 720;
    } else {
        var height = videoHeight,
            width = (height / 720) * 1280;
    }

    var margin = (window.innerWidth - width) / 2;

    var clientX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;

    color = "g";
    if (margin + width * 0.375 < clientX) color = "r";
    if (margin + (width - width * 0.375) < clientX) color = "s";

    photo = false;
    player.currentTime(tb + part_viii_duration + (color == "s" ? 0.5 : (color == "g" ? 7.5 : 14.5)));
    player.play();
    setTimeout(function () {
        removeBalls();
    }, 1000);
};

window.addEventListener(
    "resize",
    function () {
        if (player) {
            var videoHeight = player.el().offsetHeight,
                videoWidth = player.el().offsetWidth;
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
            var els = document.getElementsByClassName("resizable");
            Array.from(els).forEach(el => {
                el.style.height = height + "px";
                el.style.width = width + "px";
                el.style.top = top + "px";
                el.style.left = left + "px";
            });
        }
    },
    true
);

var createEl = function (id) {
    window.scrollTo(0, 1);
    var videoHeight = player.el().offsetHeight,
        videoWidth = player.el().offsetWidth;
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
    el.id = id;
    el.style.position = "absolute";
    el.classList.add("resizable");
    el.style.height = height + "px";
    el.style.width = width + "px";
    el.style.top = top + "px";
    el.style.left = left + "px";
    el.style.zIndex = "-10";
    el.style.backgroundColor = "#000000";
    return el;
};
var audio = document.getElementById("audio");
audio.addEventListener("play", function () {
    console.log("audioPlay");
    audio.volume = volumeInit;
})
audio.addEventListener("ended", function () {
    console.log("audioEnded");
    audio.play();
})

var stopMusic = function () {
    musicStopped = true;
    var v = audio.volume * 100 - 1;
    audio.volume = v / 100;
    if (--v * 1 < 0) return false;
    setTimeout(function () {
        stopMusic();
    }, 100);
};

var chooseGift = function (e) {
    e.stopPropagation();
    console.log("chooseGift");
    clearTimeout(setGiftsPause);
    e.target.style.opacity = "1";
    if (
        document.getElementById("redImg") &&
        document.getElementById("redImg").style.opacity == "1" &&
        document.getElementById("whiteImg") &&
        document.getElementById("whiteImg").style.opacity == "1" &&
        document.getElementById("goldImg") &&
        document.getElementById("goldImg").style.opacity == "1"
    ) {
        setTimeout(function () {
            player.currentTime(tg + part_xi_duration + 1.3);
            player.play();
        }, 300);
    }
};

var pauseTimeout30 = false;
var player = videojs(
    "video",
    {
        controlBar: {
            fullscreenToggle: false
        },
        sources: [
            {
                src: "/playlist/" + hash + ".m3u8?resolution=" + resolution,
                type: "application/x-mpegURL"
            }
        ],
        controls: true,
        poster:
            "/img/poster.jpg"
    },
    function () {
        this.allowFullscreen = false;
        var that = this;
        that.el().addEventListener("click", touchAudio);
        that.el().addEventListener("touchstart", touchAudio);
        this.on("play", function () {
            clearTimeout(pauseTimeout30);
            audio.play();
        });
        this.on("pause", function () {
            if (paused) audio.pause();
            else {
                pauseTimeout30 = setTimeout(function () {
                    that.play();
                }, 30000);
            }
        });
        this.on("ended", function () {
            audio.pause();
        });
        this.on("firstplay", function () {
            player.play();
        });
        this.on("timeupdate", function () {
            checkTimeouts(that);
        });
    }
);

var photoElement = createEl("photoElement");
photoElement.style.background =
    "url('https://montage-cache.cdnvideo.ru/montage/kindern/part_iv/photo.png') no-repeat 0 0 / 100%, url('" +
    photo +
    "') no-repeat top left 57.5%/auto 92%, #000000";
document.getElementById("video").appendChild(photoElement);

var ballsElement = createEl("ballsElement");
ballsElement.style.background =
    "url('https://montage-cache.cdnvideo.ru/montage/kindern/part_viii/balls.png') no-repeat 0 0 / 100%";
document.getElementById("video").appendChild(ballsElement);

var giftsElement = createEl("giftsElement");
giftsElement.style.background =
    "url('https://montage-cache.cdnvideo.ru/montage/kindern/part_xi/podarki.png') no-repeat 0 0 / 100%";
document.getElementById("video").appendChild(giftsElement);

var redImg = document.createElement("img");
redImg.id = "redImg";
redImg.src =
    "https://montage-cache.cdnvideo.ru/montage/kindern/part_xi/red.png";
redImg.alt = "";
redImg.style.position = "absolute";
redImg.style.top = "41.015%";
redImg.style.left = "47.1%";
redImg.style.opacity = "0";
redImg.style.height = "42.4%";

var whiteImg = document.createElement("img");
whiteImg.id = "whiteImg";
whiteImg.src =
    "https://montage-cache.cdnvideo.ru/montage/kindern/part_xi/white.png";
whiteImg.alt = "";
whiteImg.style.position = "absolute";
whiteImg.style.top = "64.715%";
whiteImg.style.left = "38.1%";
whiteImg.style.opacity = "0";
whiteImg.style.height = "31.4%";

var goldImg = document.createElement("img");
goldImg.id = "goldImg";
goldImg.src =
    "https://montage-cache.cdnvideo.ru/montage/kindern/part_xi/gold.png";
goldImg.alt = "";
goldImg.style.position = "absolute";
goldImg.style.top = "47.3%";
goldImg.style.left = "66%";
goldImg.style.opacity = "0";
goldImg.style.height = "42.4%";
goldImg.onClick = "chooseGift";

redImg.addEventListener("touchstart", chooseGift);
redImg.addEventListener("click", chooseGift);
whiteImg.addEventListener("touchstart", chooseGift);
whiteImg.addEventListener("click", chooseGift);
goldImg.addEventListener("touchstart", chooseGift);
goldImg.addEventListener("click", chooseGift);

giftsElement.appendChild(redImg);
giftsElement.appendChild(whiteImg);
giftsElement.appendChild(goldImg);

function touchAudio() {
    console.log(player);
    player.play();
    audio.play();
    document.getElementById("video").removeEventListener("click", touchAudio);
    document
        .getElementById("video")
        .removeEventListener("touchstart", touchAudio);
}