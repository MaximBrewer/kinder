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

var player = videojs("video", {
  sources: [{
    src: "/playlist/" + hash + ".m3u8",
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
var timeoutPhoto,
    timeoutRemovePhoto,
    timeoutBall,
    timeoutGifts,
    tp = part_i_duration + part_ii_duration + part_iii_duration,
    tb = tp + part_iv_duration + part_v_duration + part_vi_duration + part_vii_duration + part_viii_duration,
    tg = tb + part_ix_duration + part_x_duration,
    photoElement = document.createElement("div");

var checkTimeouts = function checkTimeouts() {
  var ct = player.currentTime();
  clearTimeout(timeoutBall);
  clearTimeout(timeoutPhoto);
  clearTimeout(timeoutGifts);

  if (photo) {
    if (ct < tp) {
      timeoutPhoto = setTimeout(function () {
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
    timeoutBall = setTimeout(function () {
      setBall();
    }, (tb - ct) * 1000 - 500);
  } else {// setBall()
  }

  if (ct < tg) {
    timeoutGifts = setTimeout(function () {
      setGifts();
    }, (tg - ct) * 1000 - 500);
  } else {// setPhoto()
  }
};

var setBall = function setBall() {
  console.log("setBall");
  player.pause();
};

var setGifts = function setGifts() {
  var ct = player.currentTime();
  giftsPauseTimeout = setTimeout(f, part_xi_duration);
  console.log("setGifts");
  player.pause();
};

var removePhoto = function removePhoto() {
  document.getElementById("video").removeChild(photoElement);
  console.log("removePhoto");
};

var setPhoto = function setPhoto() {
  var ct = player.currentTime();
  var videoHeight = player.children()[0].offsetHeight,
      videoWidth = player.children()[0].offsetWidth;
  console.log(videoHeight, videoWidth);

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

  photoElement.style.position = "absolute";
  photoElement.style.height = height + "px";
  photoElement.style.background = "url('https://montage-cache.cdnvideo.ru/montage/kindern/part_iv/photo.png') no-repeat center center/ 100%, url('" + photo + "') no-repeat top left 57%/auto 92%";
  photoElement.style.width = width + "px";
  photoElement.style.top = top + "px";
  photoElement.style.left = left + "px";
  photoElement.style.zIndex = "100";
  photoElement.style.backgroundColor = "#000000";
  document.getElementById("video").appendChild(photoElement);
  clearTimeout(timeoutRemovePhoto);
  timeoutRemovePhoto = setTimeout(function () {
    removePhoto();
  }, (tp + part_iv_duration - ct) * 1000 + 500);
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