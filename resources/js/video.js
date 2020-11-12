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
            "https://montage-cache.cdnvideo.ru/montage/.previews/preview-5fad390a0e47cf6eac7d9536.jpg"
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

var timeoutPhoto;
var timeoutBall;
var timeoutGifts;

var checkTimeouts = function() {
    var ct = player.currentTime();
    var tp = part_i_duration + part_ii_duration + part_iii_duration;
    clearTimeout(timeoutBall);
    clearTimeout(timeoutPhoto);
    clearTimeout(timeoutGifts);

    console.log(tp - ct);
    if (photo) {
        if (ct < tp) {
            timeoutPhoto = setTimeout(function() {
                setPhoto();
            }, (tp - ct) * 1000);
        } else if (ct < tp + part_iv_duration) {
            setPhoto();
        }
        if (ct > tp + part_iv_duration) {
            removePhoto();
        }
    }
    var tb =
        tp +
        part_iv_duration +
        part_v_duration +
        part_vi_duration +
        part_vii_duration +
        part_viii_duration;

    console.log(tb - ct);
    if (ct < tb) {
        timeoutBall = setTimeout(function() {
            setBall();
        }, (tb - ct) * 1000);
    } else {
        // setBall()
    }
    var tg = tb + part_ix_duration + part_x_duration + part_xii_duration;

    console.log(tg - ct);
    if (ct < tg) {
        timeoutGifts = setTimeout(function() {
            setGifts();
        }, (tg - ct) * 1000);
    } else {
        // setPhoto()
    }
};

var removePhoto = function() {
    console.log("removePhoto");
};

var setPhoto = function() {
    console.log("setPhoto");
};

var setBall = function() {
    console.log("setBall");
    player.pause()
};

var setGifts = function() {
    console.log("setGifts");
    player.pause()
};
