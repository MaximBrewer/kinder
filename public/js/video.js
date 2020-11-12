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

// var step = 1,
//     timerId = null;
// var chooseGift = function(e) {
//     e.target.style.opacity = "1";
//     if (
//         document.getElementById("gftI").style.opacity == "1" &&
//         document.getElementById("gftII").style.opacity == "1" &&
//         document.getElementById("gftIII").style.opacity == "1"
//     ) {
//         player.src({
//             src: "/playlist-iv/" + hash + ".m3u8",
//             type: "application/x-mpegURL"
//         });
//         step = 6;
//         player.play();
//     }
// };
// var chooseBall = function(e) {
//     var color = "red";
//     var clientX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
//     window.innerWidth * 0.375 > clientX
//         ? (color = "gold")
//         : window.innerWidth - window.innerWidth * 0.375 > clientX
//         ? (color = "red")
//         : (color = "silver");
//     step = 4;
//     player.src({
//         src: "/playlist-iii/" + color + ".m3u8",
//         type: "application/x-mpegURL"
//     });
//     player.play();
// };
var player = videojs("video", {
  sources: [{
    src: "/playlist/" + hash + ".m3u8",
    type: "application/x-mpegURL"
  }],
  controls: true,
  control: true,
  poster: "https://montage-cache.cdnvideo.ru/montage/.previews/preview-5fad390a0e47cf6eac7d9536.jpg"
} // function() {
//     var that = this;
//     this.on("ended", function() {
//         ++step;
//         console.log("ended", that, step);
//         if (step == 2) {
//             if (photo) {
//                 document.getElementById(
//                     "photoFrame"
//                 ).style.backgroundImage = "url(" + photo + ")";
//                 document.getElementById("hover").style.zIndex = "10";
//                 document.getElementById("hover").style.opacity = "1";
//             }
//             document.getElementById("photoFrame").style.transform =
//                 "scale(1.4)";
//             document.getElementById("photoFrame").style.transition =
//                 "transform 10s linear";
//             document.getElementById("photoFrame").style.backgroundRepeat =
//                 "no-repeat";
//             document.getElementById("photoFrame").style.backgroundSize =
//                 "auto 92%";
//             document.getElementById("photoFrame").style.backgroundPosition =
//                 "top left 57%";
//             that.src({
//                 src: "/playlist-ii/" + hash + ".m3u8",
//                 type: "application/x-mpegURL"
//             });
//             that.play();
//         }
//         if (step == 3) {
//             document.getElementById("hover").style.opacity = "0";
//             document.getElementById("hover").style.zIndex = "-1";
//             document.getElementById("hover2").style.opacity = "1";
//             document.getElementById("hover2").style.zIndex = "10";
//             document.getElementById("photoFrame2").style.transform =
//                 "scale(1.2)";
//             document.getElementById("photoFrame2").style.transition =
//                 "transform 10s linear";
//             document.getElementById("photoFrame2").style.backgroundRepeat =
//                 "no-repeat";
//             document.getElementById("photoFrame2").style.backgroundSize =
//                 "auto 92%";
//             document.getElementById(
//                 "photoFrame2"
//             ).style.backgroundPosition = "top left 57%";
//             that.src({
//                 src:
//                     "https://montage-vod-hls.cdnvideo.ru/montage-vod/_definst_/mp4:montage/kinder/part_viii/all%20%281280xauto%29.mp4/playlist.m3u8",
//                 type: "application/x-mpegURL"
//             });
//             that.play();
//             document
//                 .getElementById("photoFrame2")
//                 .addEventListener("click", chooseBall);
//             document
//                 .getElementById("photoFrame2")
//                 .addEventListener("touchstart", chooseBall);
//         }
//         if (step == 5) {
//             document.getElementById("hover").style.opacity = "0";
//             document.getElementById("hover").style.zIndex = "-1";
//             document.getElementById("hover2").style.opacity = "0";
//             document.getElementById("hover2").style.zIndex = "-1";
//             document.getElementById("hover3").style.zIndex = "10";
//             document.getElementById("hover3").style.opacity = "1";
//             document.getElementById("photoFrame3").style.transform =
//                 "scale(1.2)";
//             document.getElementById("photoFrame3").style.transition =
//                 "transform 10s linear";
//             document.getElementById("photoFrame3").style.backgroundRepeat =
//                 "no-repeat";
//             document.getElementById("photoFrame3").style.backgroundSize =
//                 "auto 92%";
//             document.getElementById(
//                 "photoFrame2"
//             ).style.backgroundPosition = "top left 57%";
//             that.src({
//                 src:
//                     "https://montage-cache.cdnvideo.ru/montage/kinder/part_xi/voice.mp3",
//                 type: "audio/mpeg"
//             });
//             that.play();
//             document
//                 .getElementById("gftI")
//                 .addEventListener("touchstart", chooseGift);
//             document
//                 .getElementById("gftI")
//                 .addEventListener("click", chooseGift);
//             document
//                 .getElementById("gftII")
//                 .addEventListener("touchstart", chooseGift);
//             document
//                 .getElementById("gftII")
//                 .addEventListener("click", chooseGift);
//             document
//                 .getElementById("gftIII")
//                 .addEventListener("touchstart", chooseGift);
//             document
//                 .getElementById("gftIII")
//                 .addEventListener("click", chooseGift);
//         }
//     });
//     this.on("canplay", function() {
//         if (step >= 2) {
//             setTimeout(function() {
//                 document.getElementById("hover").style.zIndex = "-1";
//                 document.getElementById("hover").style.opacity = "0";
//             }, photo_duration * 1000 + 1500);
//         }
//         if (step >= 4) {
//             document.getElementById("hover2").style.zIndex = "-1";
//             document.getElementById("hover2").style.opacity = "0";
//         }
//         if (step >= 6) {
//             document.getElementById("hover3").style.zIndex = "-1";
//             document.getElementById("hover3").style.opacity = "0";
//         }
//     });
//     this.on("play", function() {
//         console.log("play", step);
//         console.log(that.currentTime());
//         window.scrollTo(0, 1);
//     });
//     this.on("firstplay", function() {
//         console.log("firstplay", that);
//     });
//     this.on("change", function() {
//         console.log("change", that);
//     });
//     this.on("loadedmetadata", function() {
//         console.log("loadedmetadata", that);
//     });
//     this.on("progress", function() {
//         console.log("progress", that);
//     });
//     this.on("seeking", function() {
//         console.log("seeking", that);
//     });
//     this.on("seeked", function() {
//         console.log("seeked", that);
//     });
// }
); // function setPhotoWrapper() {}
// function togglePlayer() {
//     // player.paused() ?
//     player.play();
//     // : player.pause();
// }
// var body = document.getElementsByTagName("body")[0];
// body.addEventListener("mouseup", function(event) {
//     // togglePlayer();
// });
// body.addEventListener("touchstart", function(event) {
//     // togglePlayer();
// });
// body.addEventListener("touchend", function(event) {
//     togglePlayer();
// });
// window.addEventListener("message", event => {
//     if (event.data == "start") {
//         console.log();
//         event.source.postMessage("start:" + player.currentTime(), "*");
//     } else if ((event.data = "end")) {
//         event.source.postMessage("end:" + player.currentTime(), "*");
//     }
// });

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