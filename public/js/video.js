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

var step = 1;

var chooseBall = function chooseBall(e) {
  var color = "red";
  var clientX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
  window.innerWidth * 0.375 > clientX ? color = "gold" : window.innerWidth - window.innerWidth * 0.375 > clientX ? color = "red" : color = "silver";
  step = 4;
  player.src({
    src: "/playlist-iii/" + color + ".m3u8",
    type: "application/x-mpegURL"
  });
  player.play();
};

var player = videojs("video", {
  sources: [{
    src: "/playlist-i/" + hash + ".m3u8",
    type: "application/x-mpegURL"
  }],
  controls: true,
  control: true,
  poster: "https://montage-cache.cdnvideo.ru/montage/.previews/preview-5fa973f50e47cf6eac7d7b7a.jpg"
}, function () {
  var that = this;
  this.on("ended", function () {
    console.log("ended", that);
    ++step;

    if (step == 2) {
      document.getElementById("photoFrame").style.transform = "scale(1.4)";
      document.getElementById("photoFrame").style.transition = "transform 10s linear";
      document.getElementById("photoFrame").style.backgroundImage = "url(" + photo + ")";
      document.getElementById("photoFrame").style.backgroundRepeat = "no-repeat";
      document.getElementById("photoFrame").style.backgroundSize = "auto 92%";
      document.getElementById("photoFrame").style.backgroundPosition = "top left 57%";
      if (photo) document.getElementById("hover").style.zIndex = "10";
      that.src({
        src: "/playlist-ii/" + hash + ".m3u8",
        type: "application/x-mpegURL"
      });
      that.play();
    }

    if (step == 3) {
      document.getElementById("photoFrame2").style.transform = "scale(1.2)";
      document.getElementById("photoFrame2").style.transition = "transform 10s linear";
      document.getElementById("photoFrame2").style.backgroundRepeat = "no-repeat";
      document.getElementById("photoFrame2").style.backgroundSize = "auto 92%";
      document.getElementById("photoFrame2").style.backgroundPosition = "top left 57%";
      document.getElementById("hover2").style.zIndex = "10";
      that.src({
        src: "https://montage-vod-hls.cdnvideo.ru/montage-vod/_definst_/mp4:montage/kinder/part_viii/all%20%281280xauto%29.mp4/playlist.m3u8",
        type: "application/x-mpegURL"
      });
      that.play();
      document.getElementById("photoFrame2").addEventListener("click", chooseBall);
      document.getElementById("photoFrame2").addEventListener("touchstart", chooseBall);
    }
  });
  this.on("canplay", function () {
    if (step == 2) {
      setTimeout(function () {
        document.getElementById("hover").style.zIndex = "-1";
      }, photo_duration * 1000);
    }

    if (step == 4) {
      document.getElementById("hover2").style.zIndex = "-1";
    }
  });
});

function togglePlayer() {
  // player.paused() ?
  player.play(); // : player.pause();
}

var body = document.getElementsByTagName("body")[0];
body.addEventListener("mouseup", function (event) {// togglePlayer();
});
body.addEventListener("touchstart", function (event) {// togglePlayer();
});
body.addEventListener("touchend", function (event) {
  togglePlayer();
});
window.addEventListener("message", function (event) {
  if (event.data == "start") {
    console.log();
    event.source.postMessage("start:" + player.currentTime(), "*");
  } else if (event.data = "end") {
    event.source.postMessage("end:" + player.currentTime(), "*");
  }
});

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