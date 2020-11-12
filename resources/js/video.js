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
        this.on("ended", function(e, that) {
            checkTimeouts(e, that);
        });
        this.on("play", function(e, that) {
            checkTimeouts(e, that);
        });
        this.on("firstplay", function(e, that) {
            checkTimeouts(e, that);
        });
        this.on("change", function(e, that) {
            checkTimeouts(e, that);
        });
        this.on("loadedmetadata", function(e, that) {
            checkTimeouts(e, that);
        });
        this.on("progress", function(e, that) {
            checkTimeouts(e, that);
        });
        this.on("seeking", function(e, that) {
            checkTimeouts(e, that);
        });
        this.on("seeked", function(e, that) {
            checkTimeouts(e, that);
        });
    }
);

var checkTimeouts = function(e, player) {
    console.log(e)
    console.log(player)
};
