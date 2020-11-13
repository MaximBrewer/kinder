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
    timeoutGifts,
    tp = part_i_duration + part_ii_duration + part_iii_duration,
    tb =
        tp +
        part_iv_duration +
        part_v_duration +
        part_vi_duration +
        part_vii_duration +
        part_viii_duration,
    tg = tb + part_ix_duration + part_x_duration;

var checkTimeouts = function() {
    var ct = player.currentTime();
    clearTimeout(timeoutBall);
    clearTimeout(timeoutPhoto);
    clearTimeout(timeoutGifts);
    if (photo) {
        if (ct < tp) {
            timeoutPhoto = setTimeout(function() {
                setPhoto();
            }, (tp - ct) * 1000 - 500);
        } else if (ct < tp + part_iv_duration) {
            setPhoto();
        }
        if (ct > tp + part_iv_duration + 500) {
            removePhoto();
        }
    }
    if (ct < tb) {
        timeoutBall = setTimeout(function() {
            setBall();
        }, (tb - ct) * 1000 - 500);
    } else {
        // setBall()
    }

    if (ct < tg) {
        timeoutGifts = setTimeout(function() {
            setGifts();
        }, (tg - ct) * 1000 - 500);
    } else {
        // setPhoto()
    }
};

var setBall = function() {
    console.log("setBall");
    player.pause();
};


var setGifts = function() {
    var ct = player.currentTime();
    giftsPauseTimeout = setTimeout(f, part_xi_duration);
    console.log("setGifts");
    player.pause();
};


var removePhoto = function() {
    // console.log(player);
    console.log("removePhoto");
};

var setPhoto = function() {
    console.log(player.children(0).offsetHeight);


    var ct = player.currentTime();
    var tp =
        part_i_duration +
        part_ii_duration +
        part_iii_duration +
        part_iv_duration;
    clearTimeout(timeoutRemovePhoto);
    timeoutRemovePhoto = setTimeout(function() {
        removePhoto();
    }, (tp - ct) * 1000);
};