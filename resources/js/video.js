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
        this.on("ended", function(){
            checkTimeouts(that);
        });
        this.on("play", function(){
            checkTimeouts(that);
        });
        this.on("firstplay", function(){
            checkTimeouts(that);
        });
        this.on("change", function(){
            checkTimeouts(that);
        });
        this.on("loadedmetadata", function(){
            checkTimeouts(that);
        });
        this.on("progress", function(){
            checkTimeouts(that);
        });
        this.on("seeking", function(){
            checkTimeouts(that);
        });
        this.on("seeked", function(){
            checkTimeouts(that);
        });
    }
);

var checkTimeouts = function(player) {
    console.log(player.currentTime())
};
