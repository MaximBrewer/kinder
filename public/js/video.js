/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/video.js":
/*!*******************************!*\
  !*** ./resources/js/video.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

var resolution = 1280;
var balls = false;
var redImg, whiteImg, goldImg;
var options = {
  hls: {
    maxBufferLength: 3
  }
};

videojs.Hls.xhr.beforeRequest = function () {
  return false;
};

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

var player = videojs("video", {
  flash: options,
  html5: options,
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
    checkTimeouts(that);
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

var draw = function draw() {
  canvas.getContext("2d").drawImage(player, 0, 0);
}; // player.addEventListener('play', function(){
//     if(player.paused || player.ended) return;
//     draw()
// })


var timeoutPhoto,
    timeoutRemovePhoto,
    timeoutBall,
    setBallPause,
    timeoutGifts,
    setGiftsPause,
    tp = part_i_duration + part_ii_duration + part_iii_duration,
    tb = tp + part_iv_duration + part_v_duration + part_vi_duration + part_vii_duration,
    tg = tb + part_viii_duration + part_ix_duration + part_x_duration,
    photoElement = document.createElement("div"),
    ballsElement = document.createElement("div"),
    giftsElement = document.createElement("div"),
    redGiftElement = document.createElement("div"),
    whiteGiftElement = document.createElement("div"),
    goldGiftElement = document.createElement("div");

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
  var segments = player.tech({
    IWillNotUseThisInPlugins: true
  }).hls.playlists.master.playlists[0].segments;
  var start = 0;

  for (i in segments) {
    // console.log(segments[i].uri.indexOf("part_ix"), i, color);
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

  console.log(player, player.tech({
    IWillNotUseThisInPlugins: true
  }), player.tech({
    IWillNotUseThisInPlugins: true
  }).hls);
  console.log(start, start + 1000);
  player.tech({
    IWillNotUseThisInPlugins: true
  }).hls.masterPlaylistController_.mainSegmentLoader_.remove(start, start + 1000);
  player.tech({
    IWillNotUseThisInPlugins: true
  }).hls.masterPlaylistController_.mainSegmentLoader_.resetLoader();
  player.tech({
    IWillNotUseThisInPlugins: true
  }).trigger("syncinfoupdate");
  setTimeout(function () {
    removeBalls();
    player.currentTime(tb + part_viii_duration + part_ix_duration + 1500); // player.play();
  }, 500);
};

var removeBalls = function removeBalls() {
  console.log("removeBalls");
  ballsElement.remove();
};

var setBall = function setBall() {
  console.log("setBall");
  clearTimeout(setBallPause);
  var ct = player.currentTime();
  ballsElement = createEl();
  ballsElement.style.background = "url('https://montage-cache.cdnvideo.ru/montage/kindern/part_viii/balls.png') no-repeat 0 0 / 100%";
  document.getElementById("video").appendChild(ballsElement);
  ballsElement.addEventListener("touchstart", chooseBall);
  ballsElement.addEventListener("click", chooseBall);
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
  giftsElement = createEl();
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
  photoElement = createEl();
  photoElement.style.background = "url('https://montage-cache.cdnvideo.ru/montage/kindern/part_iv/photo.png') no-repeat 0 0 / 100%, url('" + photo + "') no-repeat top left 57%/auto 92%";
  document.getElementById("video").appendChild(photoElement);
  clearTimeout(timeoutRemovePhoto);
  timeoutRemovePhoto = setTimeout(function () {
    removePhoto();
  }, (tp + part_iv_duration - ct) * 1000 + 350);
};

var removeGifts = function removeGifts() {
  console.log("removeGifts");
  document.getElementById("video").removeChild(giftsElement);
};

var removePhoto = function removePhoto() {
  console.log("removePhoto");
  document.getElementById("video").removeChild(photoElement);
};

var createEl = function createEl() {
  player.exitFullscreen();
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
  el.style.position = "absolute";
  el.style.height = height + "px";
  el.style.width = width + "px";
  el.style.top = top + "px";
  el.style.left = left + "px";
  el.style.zIndex = "100";
  el.style.backgroundColor = "#000000";
  return el;
};

/***/ }),

/***/ 1:
/*!*************************************!*\
  !*** multi ./resources/js/video.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/maxim/Projects/kinder/resources/js/video.js */"./resources/js/video.js");


/***/ })

/******/ });