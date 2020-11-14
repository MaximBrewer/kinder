"use strict";

var resolution = 640;
window.innerWidth > 640 && (resolution = 1024);
window.innerWidth > 1024 && (resolution = 1280);
var balls = false;
var redImg, whiteImg, goldImg;
var hlsIs = false;

var checkTimeouts = function checkTimeouts() {
  var ct = player.currentTime();
  clearTimeout(timeoutBall);
  clearTimeout(timeoutPhoto);
  clearTimeout(timeoutGifts);

  if (photo) {
    if (ct < tp) {
      timeoutPhoto = setTimeout(function () {
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
    timeoutBall = setTimeout(function () {
      setBall();
    }, (tb - ct) * 1000 - 350);
  } else {// setBall()
  }

  if (ct < tg) {
    timeoutGifts = setTimeout(function () {
      setGifts();
    }, (tg - ct) * 1000 - 350);
  } else {// setPhoto()
  }
};

var audio = videojs("audio", {
  sources: [{
    src: "https://montage-cache.cdnvideo.ru/montage/kindern/music.mp3",
    type: "audio/mpeg"
  }, {
    src: "https://montage-cache.cdnvideo.ru/montage/kindern/music.wav",
    type: "audio/wav"
  }]
}, function () {
  var that = this;
  this.on("ended", function () {
    console.log("audioEnded");
    that.play();
  });
});
var player = videojs("video", {
  sources: [{
    src: "/playlist/" + hash + ".m3u8?resolution=" + resolution,
    type: "application/x-mpegURL"
  }],
  controls: true,
  control: true,
  poster: "https://montage-cache.cdnvideo.ru/montage/.previews/preview-5fae91b4ef3db56d66205367.jpg"
}, function () {
  var that = this;
  this.on("ended", function () {
    checkTimeouts(that);
  });
  this.on("play", function () {
    checkTimeouts(that);
  });
  this.on("pause", function () {
    checkTimeouts(that);
  });
  this.on("firstplay", function () {
    if (audio.paused()) audio.play();
    that.tech({
      IWillNotUseThisInPlugins: true
    }) && that.tech({
      IWillNotUseThisInPlugins: true
    }).hls && (hlsIs = true);

    if (!hlsIs) {
      tg = part_ix_duration + part_x_duration;
    }

    photoElement = createEl("photoElement");
    photoElement.style.background = "url('https://montage-cache.cdnvideo.ru/montage/kindern/part_iv/photo.png') no-repeat 0 0 / 100%, url('" + photo + "') no-repeat top left 57%/auto 92%";
    document.getElementById("video").appendChild(photoElement);
    ballsElement = createEl("ballsElement");
    ballsElement.style.background = "url('https://montage-cache.cdnvideo.ru/montage/kindern/part_viii/balls.png') no-repeat 0 0 / 100%";
    document.getElementById("video").appendChild(ballsElement);
    giftsElement = createEl("giftsElement");
    giftsElement.style.background = "url('https://montage-cache.cdnvideo.ru/montage/kindern/part_xi/podarki.png') no-repeat 0 0 / 100%";
    document.getElementById("video").appendChild(giftsElement);
    redImg = document.createElement("img");
    redImg.src = "https://montage-cache.cdnvideo.ru/montage/kindern/part_xi/red.png";
    redImg.alt = "";
    redImg.style.position = "absolute";
    redImg.style.top = "41.015%";
    redImg.style.left = "47.1%";
    redImg.style.opacity = "0";
    redImg.style.height = "42.4%";
    whiteImg = document.createElement("img");
    whiteImg.src = "https://montage-cache.cdnvideo.ru/montage/kindern/part_xi/white.png";
    whiteImg.alt = "";
    whiteImg.style.position = "absolute";
    whiteImg.style.top = "64.715%";
    whiteImg.style.left = "38.1%";
    whiteImg.style.opacity = "0";
    whiteImg.style.height = "31.4%";
    goldImg = document.createElement("img");
    goldImg.src = "https://montage-cache.cdnvideo.ru/montage/kindern/part_xi/gold.png";
    goldImg.alt = "";
    goldImg.style.position = "absolute";
    goldImg.style.top = "47.3%";
    goldImg.style.left = "66%";
    goldImg.style.opacity = "0";
    goldImg.style.height = "42.4%";
    giftsElement.appendChild(redImg);
    giftsElement.appendChild(whiteImg);
    giftsElement.appendChild(goldImg);
  });
  this.on("change", function () {
    checkTimeouts(that);
  });
  this.on("loadedmetadata", function () {
    checkTimeouts(that);
  });
  this.on("progress", function () {
    checkTimeouts(that);
  });
  this.on("seeking", function () {
    checkTimeouts(that);
  });
  this.on("seeked", function () {
    checkTimeouts(that);
  });
});
var timeoutPhoto,
    timeoutRemovePhoto,
    timeoutBall,
    setBallPause,
    timeoutGifts,
    setGiftsPause,
    tp = part_i_duration + part_ii_duration + part_iii_duration,
    tb = tp + part_iv_duration + part_v_duration + part_vi_duration + part_vii_duration,
    tg = tb + part_viii_duration + part_ix_duration + part_x_duration,
    photoElement,
    ballsElement,
    giftsElement;

var chooseBall = function chooseBall(e) {
  clearTimeout(setBallPause);
  var videoHeight = player.children()[0].offsetHeight,
      videoWidth = player.children()[0].offsetWidth;

  if (videoHeight > videoWidth * 720 / 1280) {
    var width = videoWidth,
        height = width / 1280 * 720,
        top = (videoHeight - height) / 2,
        left = 0;
  } else {
    var height = videoHeight,
        width = height / 720 * 1280;
    top = 0, left = (videoWidth - width) / 2;
  }

  var color = "g";
  var margin = (window.innerWidth - width) / 2;
  var clientX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
  if (margin + width * 0.375 < clientX) color = "r";
  if (margin + (width - width * 0.375) < clientX) color = "s";
  player.src({
    src: "/playlist-color/" + hash + ".m3u8?resolution=" + resolution + "&color=" + color,
    type: "application/x-mpegURL"
  });
  player.play();
  setTimeout(function () {
    removeBalls();
  }, 1000);
};

var chooseBallHls = function chooseBallHls(e) {
  clearTimeout(setBallPause);
  var videoHeight = player.children()[0].offsetHeight,
      videoWidth = player.children()[0].offsetWidth;

  if (videoHeight > videoWidth * 720 / 1280) {
    var width = videoWidth,
        height = width / 1280 * 720,
        top = (videoHeight - height) / 2,
        left = 0;
  } else {
    var height = videoHeight,
        width = height / 720 * 1280;
    top = 0, left = (videoWidth - width) / 2;
  }

  var color = "g";
  var margin = (window.innerWidth - width) / 2;
  var clientX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
  if (margin + width * 0.375 < clientX) color = "r";
  if (margin + (width - width * 0.375) < clientX) color = "s";
  var segments = player.tech_.hls.playlists.master.playlists[0].segments;
  var start = 0;

  for (i in segments) {
    if (segments[i].uri.indexOf("part_ix") > -1) {
      segments[i].resolvedUri = cdn + "part_ix/" + color + "%20%28" + resolution + "xauto%29.mp4/media_0.ts";
      segments[i].uri = cdn + "part_ix/" + color + "%20%28" + resolution + "xauto%29.mp4/media_0.ts";
      break;
    }

    if (segments[i].end) {
      start = segments[i].end;
    } else {
      start += segments[i].duration;
    }
  }

  setTimeout(function () {
    player.play();
    removeBalls();
  }, 1000);
  player.tech_.hls.masterPlaylistController_.mainSegmentLoader_.remove(start, start + 1000);
  player.tech_.hls.masterPlaylistController_.mainSegmentLoader_.resetLoader();
  player.trigger("syncinfoupdate");
  player.play();
  setTimeout(function () {
    player.pause();
    player.currentTime(tb + part_viii_duration + 0.2);
  }, 200);
};

var removeBalls = function removeBalls() {
  console.log("removeBalls");
  document.getElementById("ballsElement") && (document.getElementById("ballsElement").style.zIndex = "-1");
};

var removeGifts = function removeGifts() {
  console.log("removeGifts");
  document.getElementById("giftsElement") && (document.getElementById("giftsElement").style.zIndex = "-1");
};

var removePhoto = function removePhoto() {
  console.log("removePhoto");
  document.getElementById("photoElement") && (document.getElementById("photoElement").style.zIndex = "-1");
};

var setBall = function setBall() {
  console.log("setBall");
  clearTimeout(setBallPause);
  removeBalls();
  var ct = player.currentTime();
  document.getElementById("ballsElement").style.zIndex = "100";

  if (hlsIs) {
    ballsElement.addEventListener("touchstart", chooseBallHls);
    ballsElement.addEventListener("click", chooseBallHls);
  } else {
    ballsElement.addEventListener("touchstart", chooseBall);
    ballsElement.addEventListener("click", chooseBall);
  }

  setBallPause = setTimeout(function () {
    player.pause();
  }, (tb + part_viii_duration - ct) * 1000 - 500);
};

var chooseGift = function chooseGift(e) {
  clearTimeout(setGiftsPause);
  clearTimeout(setBallPause);
  console.log("chooseGift");
  e.target.style.opacity = "1";

  if (redImg.style.opacity == "1" && whiteImg.style.opacity == "1" && goldImg.style.opacity == "1") {
    player.currentTime(tg + part_xi_duration + 0.5);
    player.play();
    setTimeout(function () {
      removeGifts();
    }, 200);
  }
};

var setGifts = function setGifts() {
  console.log("setGifts");
  clearTimeout(setGiftsPause);
  var ct = player.currentTime();
  document.getElementById("giftsElement").style.zIndex = "100";
  redImg.addEventListener("touchstart", chooseGift);
  redImg.addEventListener("click", chooseGift);
  whiteImg.addEventListener("touchstart", chooseGift);
  whiteImg.addEventListener("click", chooseGift);
  goldImg.addEventListener("touchstart", chooseGift);
  goldImg.addEventListener("click", chooseGift);
  setGiftsPause = setTimeout(function () {
    player.pause();
  }, (tg + part_xi_duration - ct) * 1000 - 500);
};

var setPhoto = function setPhoto() {
  var ct = player.currentTime();
  document.getElementById("photoElement").style.zIndex = "100";
  clearTimeout(timeoutRemovePhoto);
  timeoutRemovePhoto = setTimeout(function () {
    removePhoto();
  }, (tp + part_iv_duration - ct) * 1000 + 350);
};

var createEl = function createEl(id) {
  if (player.isFullscreen()) player.exitFullscreen();
  window.scrollTo(0, 1);
  var videoHeight = player.el().offsetHeight,
      videoWidth = player.el().offsetWidth;

  if (videoHeight > videoWidth * 720 / 1280) {
    var width = videoWidth,
        height = width / 1280 * 720,
        top = (videoHeight - height) / 2,
        left = 0;
  } else {
    var height = videoHeight,
        width = height / 720 * 1280;
    top = 0, left = (videoWidth - width) / 2;
  }

  el = document.createElement("div");
  el.id = id;
  el.style.position = "absolute";
  el.style.height = height + "px";
  el.style.width = width + "px";
  el.style.top = top + "px";
  el.style.left = left + "px";
  el.style.zIndex = "-10";
  el.style.backgroundColor = "#000000";
  return el;
};