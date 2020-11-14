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

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/maxim/Projects/kinder/resources/js/video.js: Unexpected token, expected \",\" (184:85)\n\n\u001b[0m \u001b[90m 182 | \u001b[39m    )\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 183 | \u001b[39m    \u001b[90m// player.tech({ IWillNotUseThisInPlugins: true }).hls.resyncLoader();resetEverything\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 184 | \u001b[39m    console\u001b[33m.\u001b[39mlog(player\u001b[33m.\u001b[39mtech({ \u001b[33mIWillNotUseThisInPlugins\u001b[39m\u001b[33m:\u001b[39m \u001b[36mtrue\u001b[39m })\u001b[33m.\u001b[39mhls\u001b[33m.\u001b[39mmainSegmentLoader\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m     | \u001b[39m                                                                                     \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 185 | \u001b[39m    console\u001b[33m.\u001b[39mlog(player\u001b[33m.\u001b[39mtech({ \u001b[33mIWillNotUseThisInPlugins\u001b[39m\u001b[33m:\u001b[39m \u001b[36mtrue\u001b[39m })\u001b[33m.\u001b[39mhls\u001b[33m.\u001b[39mmainSegmentLoader())\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 186 | \u001b[39m    player\u001b[33m.\u001b[39mtrigger(\u001b[32m\"mediachange\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 187 | \u001b[39m    player\u001b[33m.\u001b[39mtech({ \u001b[33mIWillNotUseThisInPlugins\u001b[39m\u001b[33m:\u001b[39m \u001b[36mtrue\u001b[39m })\u001b[33m.\u001b[39mtrigger(\u001b[32m\"mediachange\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n    at Object._raise (/Users/maxim/Projects/kinder/node_modules/@babel/parser/lib/index.js:766:17)\n    at Object.raiseWithData (/Users/maxim/Projects/kinder/node_modules/@babel/parser/lib/index.js:759:17)\n    at Object.raise (/Users/maxim/Projects/kinder/node_modules/@babel/parser/lib/index.js:753:17)\n    at Object.unexpected (/Users/maxim/Projects/kinder/node_modules/@babel/parser/lib/index.js:8966:16)\n    at Object.expect (/Users/maxim/Projects/kinder/node_modules/@babel/parser/lib/index.js:8952:28)\n    at Object.parseCallExpressionArguments (/Users/maxim/Projects/kinder/node_modules/@babel/parser/lib/index.js:10033:14)\n    at Object.parseCoverCallAndAsyncArrowHead (/Users/maxim/Projects/kinder/node_modules/@babel/parser/lib/index.js:9960:29)\n    at Object.parseSubscript (/Users/maxim/Projects/kinder/node_modules/@babel/parser/lib/index.js:9896:19)\n    at Object.parseSubscripts (/Users/maxim/Projects/kinder/node_modules/@babel/parser/lib/index.js:9867:19)\n    at Object.parseExprSubscripts (/Users/maxim/Projects/kinder/node_modules/@babel/parser/lib/index.js:9850:17)\n    at Object.parseUpdate (/Users/maxim/Projects/kinder/node_modules/@babel/parser/lib/index.js:9824:21)\n    at Object.parseMaybeUnary (/Users/maxim/Projects/kinder/node_modules/@babel/parser/lib/index.js:9813:17)\n    at Object.parseExprOps (/Users/maxim/Projects/kinder/node_modules/@babel/parser/lib/index.js:9683:23)\n    at Object.parseMaybeConditional (/Users/maxim/Projects/kinder/node_modules/@babel/parser/lib/index.js:9657:23)\n    at Object.parseMaybeAssign (/Users/maxim/Projects/kinder/node_modules/@babel/parser/lib/index.js:9620:21)\n    at Object.parseExpressionBase (/Users/maxim/Projects/kinder/node_modules/@babel/parser/lib/index.js:9564:23)\n    at /Users/maxim/Projects/kinder/node_modules/@babel/parser/lib/index.js:9558:39\n    at Object.allowInAnd (/Users/maxim/Projects/kinder/node_modules/@babel/parser/lib/index.js:11297:16)\n    at Object.parseExpression (/Users/maxim/Projects/kinder/node_modules/@babel/parser/lib/index.js:9558:17)\n    at Object.parseStatementContent (/Users/maxim/Projects/kinder/node_modules/@babel/parser/lib/index.js:11562:23)\n    at Object.parseStatement (/Users/maxim/Projects/kinder/node_modules/@babel/parser/lib/index.js:11431:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/maxim/Projects/kinder/node_modules/@babel/parser/lib/index.js:12013:25)\n    at Object.parseBlockBody (/Users/maxim/Projects/kinder/node_modules/@babel/parser/lib/index.js:11999:10)\n    at Object.parseBlock (/Users/maxim/Projects/kinder/node_modules/@babel/parser/lib/index.js:11983:10)\n    at Object.parseFunctionBody (/Users/maxim/Projects/kinder/node_modules/@babel/parser/lib/index.js:10963:24)\n    at Object.parseFunctionBodyAndFinish (/Users/maxim/Projects/kinder/node_modules/@babel/parser/lib/index.js:10946:10)\n    at /Users/maxim/Projects/kinder/node_modules/@babel/parser/lib/index.js:12153:12\n    at Object.withTopicForbiddingContext (/Users/maxim/Projects/kinder/node_modules/@babel/parser/lib/index.js:11272:14)\n    at Object.parseFunction (/Users/maxim/Projects/kinder/node_modules/@babel/parser/lib/index.js:12152:10)\n    at Object.parseFunctionOrFunctionSent (/Users/maxim/Projects/kinder/node_modules/@babel/parser/lib/index.js:10377:17)\n    at Object.parseExprAtom (/Users/maxim/Projects/kinder/node_modules/@babel/parser/lib/index.js:10202:21)\n    at Object.parseExprAtom (/Users/maxim/Projects/kinder/node_modules/@babel/parser/lib/index.js:4718:20)\n    at Object.parseExprSubscripts (/Users/maxim/Projects/kinder/node_modules/@babel/parser/lib/index.js:9844:23)\n    at Object.parseUpdate (/Users/maxim/Projects/kinder/node_modules/@babel/parser/lib/index.js:9824:21)\n    at Object.parseMaybeUnary (/Users/maxim/Projects/kinder/node_modules/@babel/parser/lib/index.js:9813:17)\n    at Object.parseExprOps (/Users/maxim/Projects/kinder/node_modules/@babel/parser/lib/index.js:9683:23)");

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