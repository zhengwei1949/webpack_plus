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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

$("#gesturepwd").GesturePasswd({
    backgroundColor: "#252736",  //背景色
    color: "#FFFFFF",   //主要的控件颜色
    roundRadii: 25,    //大圆点的半径
    pointRadii: 6, //大圆点被选中时显示的圆心的半径
    space: 30,  //大圆点之间的间隙
    width: 240,   //整个组件的宽度
    height: 240,  //整个组件的高度
    lineColor: "#00aec7",   //用户划出线条的颜色
    zindex: 100  //整个组件的css z-index属性
});
$("#gesturepwd").on("hasPasswd", function (e, passwd) {
    var result;

    if (passwd == "1235789") {

        result = true;
    }
    else {
        result = false;
    }



    if (result == true) {
        $("#gesturepwd").trigger("passwdRight");
        setTimeout(function () {

            //密码验证正确后的其他操作，打开新的页面等。。。
            alert("密码正确！")
        }, 500);  //延迟半秒以照顾视觉效果
    }
    else {
        $("#gesturepwd").trigger("passwdWrong");

        //密码验证错误后的其他操作。。。

    }
});


/***/ })
/******/ ]);