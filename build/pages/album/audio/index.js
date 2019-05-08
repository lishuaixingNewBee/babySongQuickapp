(function(){
  
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/album/audio/index.ux?uxType=page");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/load-more/index.ux?uxType=comp":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/load-more/index.ux?uxType=comp ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".load-more": {
    "height": "60px",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".load-more text": {
    "height": "30px",
    "fontSize": "25px",
    "lineHeight": "30px",
    "marginLeft": "8px",
    "color": "#495060",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "load-more"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  },
  ".load-more .load-more-loading": {
    "flex": 1,
    "justifyContent": "center",
    "alignItems": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "load-more"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "load-more-loading"
        }
      ]
    }
  },
  ".load-more .load-nomore": {
    "width": "80%",
    "justifyContent": "center",
    "alignItems": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "load-more"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "load-nomore"
        }
      ]
    }
  },
  ".load-more .load-nomore .content": {
    "justifyContent": "center",
    "alignItems": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "load-more"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "load-nomore"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "content"
        }
      ]
    }
  },
  ".load-more .load-nomore .content .image": {
    "height": "30px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "load-more"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "load-nomore"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "content"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "image"
        }
      ]
    }
  },
  ".load-more .load-nomore .content .line": {
    "height": "1px",
    "backgroundColor": "#dddee1",
    "flex": 1,
    "marginTop": "0px",
    "marginRight": "10px",
    "marginBottom": "0px",
    "marginLeft": "10px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "load-more"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "load-nomore"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "content"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "line"
        }
      ]
    }
  }
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/minplay/index.ux?uxType=comp":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/minplay/index.ux?uxType=comp ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".page_container": {
    "flexDirection": "column",
    "height": "100%"
  },
  "@KEYFRAMES": {
    "rotate": [
      {
        "transform": "{\"rotate\":\"10deg\"}",
        "time": 0
      },
      {
        "transform": "{\"rotate\":\"360deg\"}",
        "time": 100
      }
    ],
    "bottomdrawerenter": [
      {
        "transform": "{\"translateY\":\"236px\"}",
        "time": 0
      },
      {
        "transform": "{\"translateY\":\"0px\"}",
        "time": 100
      }
    ]
  },
  "text": {
    "color": "#000000"
  },
  ".minPlay_container": {
    "width": "76px",
    "height": "76px",
    "position": "fixed",
    "borderRadius": "38px",
    "bottom": "160px",
    "right": "25px",
    "zIndex": 1,
    "backgroundColor": "#ffffff",
    "transform": "{\"translateY\":\"236px\"}"
  },
  ".minPlay_container image": {
    "width": "100%",
    "height": "100%",
    "borderRadius": "38px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "minPlay_container"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "image"
        }
      ]
    }
  },
  ".minPlay-show": {
    "animationName": "bottomdrawerenter",
    "animationFillMode": "forwards",
    "animationDuration": "300ms",
    "animationTimingFunction": "linear"
  },
  ".musicisplay": {
    "animationName": "rotate",
    "animationDuration": "3000ms",
    "animationTimingFunction": "linear",
    "animationIterationCount": -1
  }
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/pages/album/audio/index.ux?uxType=page":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/pages/album/audio/index.ux?uxType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".page_container": {
    "flexDirection": "column",
    "height": "100%"
  },
  "@KEYFRAMES": {
    "rotate": [
      {
        "transform": "{\"rotate\":\"10deg\"}",
        "time": 0
      },
      {
        "transform": "{\"rotate\":\"360deg\"}",
        "time": 100
      }
    ]
  },
  "text": {
    "color": "#000000"
  },
  ".music_info": {
    "flexDirection": "column"
  },
  ".music_info .header_container": {
    "flexDirection": "column",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "music_info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "header_container"
        }
      ]
    }
  },
  ".music_info .header_container stack": {
    "height": "334px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "music_info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "header_container"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "stack"
        }
      ]
    }
  },
  ".music_info .header_container stack .header_bg": {
    "width": "100%",
    "backgroundRepeat": "no-repeat",
    "backgroundSize": "cover",
    "transform": "{\"scaleX\":1.5,\"scaleY\":1.5}",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "music_info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "header_container"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "stack"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "header_bg"
        }
      ]
    }
  },
  ".music_info .header_container stack .header_content": {
    "width": "100%",
    "height": "100%",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "paddingTop": "0px",
    "paddingRight": "20px",
    "paddingBottom": "100px",
    "paddingLeft": "20px",
    "background": "{\"values\":[{\"type\":\"linearGradient\",\"directions\":[\"to\",\"bottom\"],\"values\":[\"#20b2aa\",\"rgba(255,255,255,0.3)\"]}]}",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "music_info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "header_container"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "stack"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "header_content"
        }
      ]
    }
  },
  ".music_info .header_container stack .header_content .img_wrap": {
    "height": "242px",
    "width": "242px",
    "borderRadius": "10px",
    "backgroundColor": "#f4f4f4",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "music_info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "header_container"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "stack"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "header_content"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "img_wrap"
        }
      ]
    }
  },
  ".music_info .header_container stack .header_content .img_wrap image": {
    "width": "100%",
    "height": "100%",
    "borderRadius": "10px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "music_info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "header_container"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "stack"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "header_content"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "img_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "image"
        }
      ]
    }
  },
  ".music_info .header_container stack .header_content .img_wrap .count_box": {
    "height": "30px",
    "marginTop": "15px",
    "paddingTop": "0px",
    "paddingRight": "6px",
    "paddingBottom": "0px",
    "paddingLeft": "10px",
    "borderTopRightRadius": "15px",
    "borderBottomRightRadius": "15px",
    "backgroundColor": "rgba(0,0,0,0.2)",
    "fontSize": "20px",
    "justifyContent": "center",
    "alignItems": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "music_info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "header_container"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "stack"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "header_content"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "img_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "count_box"
        }
      ]
    }
  },
  ".music_info .header_container stack .header_content .img_wrap .count_box .icon": {
    "backgroundSize": "cover",
    "height": "20px",
    "width": "20px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "music_info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "header_container"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "stack"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "header_content"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "img_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "count_box"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "icon"
        }
      ]
    }
  },
  ".music_info .header_container stack .header_content .img_wrap .count_box .num": {
    "color": "#ffffff",
    "fontSize": "20px",
    "marginLeft": "8px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "music_info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "header_container"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "stack"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "header_content"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "img_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "count_box"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "num"
        }
      ]
    }
  },
  ".music_info .header_container stack .header_content .desc": {
    "flex": 1,
    "flexDirection": "column",
    "marginLeft": "20px",
    "paddingTop": "13px",
    "paddingRight": "0px",
    "paddingBottom": "13px",
    "paddingLeft": "0px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "music_info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "header_container"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "stack"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "header_content"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "desc"
        }
      ]
    }
  },
  ".music_info .header_container stack .header_content .desc .title": {
    "height": "40px",
    "lineHeight": "40px",
    "marginBottom": "16px",
    "color": "#ffffff",
    "fontWeight": "bold",
    "fontSize": "32px",
    "lines": 1,
    "textOverflow": "ellipsis",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "music_info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "header_container"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "stack"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "header_content"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "desc"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "title"
        }
      ]
    }
  },
  ".music_info .header_container stack .header_content .desc .text": {
    "lineHeight": "40px",
    "lines": 4,
    "textOverflow": "ellipsis",
    "fontSize": "28px",
    "color": "rgba(255,255,255,0.8)",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "music_info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "header_container"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "stack"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "header_content"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "desc"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "text"
        }
      ]
    }
  },
  ".music_info .play_all_btn": {
    "marginTop": "-50px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "music_info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "play_all_btn"
        }
      ]
    }
  },
  ".music_info .play_all_btn .list_info": {
    "flexDirection": "row",
    "flex": 1,
    "backgroundColor": "#f9f9f9",
    "borderTopLeftRadius": "20px",
    "borderTopRightRadius": "20px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "music_info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "play_all_btn"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list_info"
        }
      ]
    }
  },
  ".music_info .play_all_btn .list_info .left": {
    "flex": 1,
    "alignItems": "center",
    "paddingLeft": "40px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "music_info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "play_all_btn"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list_info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "left"
        }
      ]
    }
  },
  ".music_info .play_all_btn .list_info .left .icon-play": {
    "width": "40px",
    "height": "40px",
    "marginRight": "10px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "music_info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "play_all_btn"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list_info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "left"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "icon-play"
        }
      ]
    }
  },
  ".music_info .play_all_btn .list_info .left .text_wrap": {
    "flexDirection": "row",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "music_info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "play_all_btn"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list_info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "left"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "text_wrap"
        }
      ]
    }
  },
  ".music_info .play_all_btn .list_info .left .text_wrap .t1": {
    "fontSize": "32px",
    "height": "100px",
    "lineHeight": "100px",
    "color": "#333333",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "music_info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "play_all_btn"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list_info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "left"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "text_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "t1"
        }
      ]
    }
  },
  ".music_info .play_all_btn .list_info .left .text_wrap .t2": {
    "fontSize": "32px",
    "height": "100px",
    "lineHeight": "100px",
    "color": "#aaaaaa",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "music_info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "play_all_btn"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list_info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "left"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "text_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "t2"
        }
      ]
    }
  },
  ".music_info .play_all_btn .list_info .right": {
    "borderTopRightRadius": "15px",
    "flexDirection": "row",
    "alignItems": "center",
    "backgroundColor": "#20b2aa",
    "paddingTop": "0px",
    "paddingRight": "15px",
    "paddingBottom": "0px",
    "paddingLeft": "15px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "music_info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "play_all_btn"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list_info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "right"
        }
      ]
    }
  },
  ".music_info .play_all_btn .list_info .right .icon-yduifenxiang1": {
    "height": "30px",
    "marginRight": "10px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "music_info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "play_all_btn"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list_info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "right"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "icon-yduifenxiang1"
        }
      ]
    }
  },
  ".music_info .play_all_btn .list_info .right .num": {
    "height": "100px",
    "fontSize": "32px",
    "lineHeight": "100px",
    "color": "rgba(255,255,255,0.8)",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "music_info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "play_all_btn"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list_info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "right"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "num"
        }
      ]
    }
  },
  ".songlist_wrap": {
    "flexDirection": "column"
  },
  ".songlist_wrap .musilistItem": {
    "flex": 1,
    "justifyContent": "flex-start",
    "alignItems": "center",
    "height": "110px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "songlist_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "musilistItem"
        }
      ]
    }
  },
  ".songlist_wrap .musilistItem_num": {
    "width": "110px",
    "height": "110px",
    "textAlign": "center",
    "lineHeight": "110px",
    "flexShrink": 0,
    "fontSize": "28px",
    "color": "#666666",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "songlist_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "musilistItem_num"
        }
      ]
    }
  },
  ".songlist_wrap .musilistItem_info": {
    "height": "100%",
    "flex": 1,
    "alignItems": "center",
    "justifyContent": "space-between",
    "borderBottomWidth": "1px",
    "borderTopColor": "#f2f2f2",
    "borderRightColor": "#f2f2f2",
    "borderBottomColor": "#f2f2f2",
    "borderLeftColor": "#f2f2f2",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "songlist_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "musilistItem_info"
        }
      ]
    }
  },
  ".songlist_wrap .musilistItem_info_left": {
    "height": "100%",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "flex-start",
    "paddingTop": "10px",
    "paddingRight": "10px",
    "paddingBottom": "10px",
    "paddingLeft": "10px",
    "width": "530px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "songlist_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "musilistItem_info_left"
        }
      ]
    }
  },
  ".songlist_wrap .musilistItem_info_top": {
    "width": "530px",
    "fontSize": "30px",
    "lines": 1,
    "textOverflow": "ellipsis",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "songlist_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "musilistItem_info_top"
        }
      ]
    }
  },
  ".songlist_wrap .musilistItem_info_name": {
    "lines": 1,
    "textOverflow": "ellipsis",
    "color": "#333333",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "songlist_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "musilistItem_info_name"
        }
      ]
    }
  },
  ".songlist_wrap .musilistItem_info_alias": {
    "color": "#999999",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "songlist_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "musilistItem_info_alias"
        }
      ]
    }
  },
  ".songlist_wrap .musilistItem_info_bottom": {
    "fontSize": "20px",
    "color": "#999999",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "songlist_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "musilistItem_info_bottom"
        }
      ]
    }
  },
  ".songlist_wrap .myplayicon": {
    "marginRight": "40px",
    "height": "40px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "songlist_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "myplayicon"
        }
      ]
    }
  },
  ".songlist_wrap .cerrentMusic": {
    "color": "#20b2aa",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "songlist_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "cerrentMusic"
        }
      ]
    }
  }
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/load-more/index.ux?uxType=comp&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/load-more/index.ux?uxType=comp& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "block",
  "attr": {},
  "children": [
    {
      "type": "list-item",
      "attr": {
        "type": "loadMore"
      },
      "classList": [
        "load-more"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "load-more-loading"
          ],
          "shown": function () {return this.hasMore},
          "children": [
            {
              "type": "progress",
              "attr": {
                "type": "circular"
              }
            },
            {
              "type": "text",
              "attr": {
                "value": "玩命加载中..."
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "load-nomore"
          ],
          "shown": function () {return (!this.hasMore)&&!(this.hasMore)},
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "line"
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "content"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/common/image/nomore.png"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "汪～木有了！"
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "line"
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/minplay/index.ux?uxType=comp&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/minplay/index.ux?uxType=comp& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "block",
  "attr": {},
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "minPlay_container",
        "minPlay-show"
      ],
      "shown": function () {return this.visible},
      "children": [
        {
          "type": "image",
          "attr": {
            "src": "/common/image/music4.svg"
          },
          "classList": function () {return [this.isplaying?'musicisplay':'']},
          "events": {
            "click": "open"
          }
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/pages/album/audio/index.ux?uxType=page&importNames[]=min-play,importNames[]=load-more":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/pages/album/audio/index.ux?uxType=page&importNames[]=min-play,importNames[]=load-more ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "music_page",
    "page_container"
  ],
  "children": [
    {
      "type": "list",
      "attr": {},
      "classList": [
        "songlist_wrap"
      ],
      "events": {
        "scrollbottom": "loadMoreData"
      },
      "children": [
        {
          "type": "list-item",
          "attr": {
            "type": "headerContainer"
          },
          "classList": [
            "music_info"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "header_container"
              ],
              "children": [
                {
                  "type": "stack",
                  "attr": {},
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": function () {return this.image}
                      },
                      "classList": [
                        "header_bg"
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "header_content"
                      ],
                      "children": [
                        {
                          "type": "stack",
                          "attr": {},
                          "classList": [
                            "img_wrap"
                          ],
                          "children": [
                            {
                              "type": "image",
                              "attr": {
                                "src": function () {return this.image}
                              },
                              "classList": [
                                "movie-img"
                              ]
                            },
                            {
                              "type": "div",
                              "attr": {},
                              "classList": [
                                "count_box"
                              ],
                              "children": [
                                {
                                  "type": "image",
                                  "attr": {
                                    "src": "/common/image/music2.svg"
                                  },
                                  "classList": [
                                    "icon"
                                  ]
                                },
                                {
                                  "type": "text",
                                  "attr": {
                                    "value": function () {return this.play_count}
                                  },
                                  "classList": [
                                    "num"
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "desc"
                          ],
                          "children": [
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return this.title}
                              },
                              "classList": [
                                "title"
                              ]
                            },
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return this.description}
                              },
                              "classList": [
                                "text"
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "play_all_btn"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "list_info"
                  ],
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "left"
                      ],
                      "children": [
                        {
                          "type": "image",
                          "attr": {
                            "src": "/common/image/play.svg"
                          },
                          "classList": [
                            "icon-play"
                          ]
                        },
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "text_wrap"
                          ],
                          "events": {
                            "click": function (evt) {this.playMusic(0,evt)}
                          },
                          "children": [
                            {
                              "type": "text",
                              "attr": {
                                "value": "播放全部"
                              },
                              "classList": [
                                "t1"
                              ]
                            },
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return '' + '(共' + (this.item_count) + '首)'}
                              },
                              "classList": [
                                "t2"
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "right"
                      ],
                      "events": {
                        "click": "share"
                      },
                      "children": [
                        {
                          "type": "image",
                          "attr": {
                            "src": "/common/image/share.svg"
                          },
                          "classList": [
                            "icon-yduifenxiang1"
                          ]
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": "分享给小朋友"
                          },
                          "classList": [
                            "num"
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "block",
          "attr": {},
          "repeat": {
            "exp": function () {return this.musicList},
            "key": "index",
            "value": "item"
          },
          "children": [
            {
              "type": "list-item",
              "attr": {
                "type": "item"
              },
              "events": {
                "click": function (evt) {this.playMusic(this.index,evt)}
              },
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": function () {return ['musilistItem', this.index==this.currentIndex?'cerrentMusic':'']},
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.index+1}
                      },
                      "classList": function () {return ['musilistItem_num', this.index==this.currentIndex?'cerrentMusic':'']}
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "musilistItem_info"
                      ],
                      "children": [
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "musilistItem_info_left"
                          ],
                          "children": [
                            {
                              "type": "div",
                              "attr": {},
                              "classList": [
                                "musilistItem_info_top"
                              ],
                              "children": [
                                {
                                  "type": "text",
                                  "attr": {
                                    "value": function () {return this.item.title}
                                  },
                                  "classList": function () {return ['musilistItem_info_name', this.index==this.currentIndex?'cerrentMusic':'']}
                                }
                              ]
                            },
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return this.item.duration}
                              },
                              "classList": function () {return ['musilistItem_info_bottom', this.index==this.currentIndex?'cerrentMusic':'']}
                            }
                          ]
                        },
                        {
                          "type": "image",
                          "attr": {
                            "src": function () {return this.index==this.currentIndex?'/common/image/play2.svg':'/common/image/play.svg'}
                          },
                          "classList": [
                            "myplayicon",
                            "icon-play"
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "load-more",
          "attr": {
            "hasMore": function () {return this.hasMore}
          },
          "shown": function () {return this.hasMore}
        }
      ]
    },
    {
      "type": "min-play",
      "attr": {
        "isplaying": function () {return this.isplaying}
      },
      "shown": function () {return this.minplayVisible}
    }
  ]
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/access-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/pages/album/audio/index.ux?uxType=page":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/access-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/pages/album/audio/index.ux?uxType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _album = __webpack_require__(/*! ../../../api/album */ "./src/api/album.js");

var _util = _interopRequireDefault(__webpack_require__(/*! ../../../common/js/util */ "./src/common/js/util.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  "protected": {
    defaultIndex: '',
    title: '',
    album_id: ''
  },
  "private": {
    isplaying: true,
    minplayVisible: false,
    page_no: 1,
    page_size: 1000,
    isLoading: false,
    hasMore: false,
    currentIndex: -1,
    image: '',
    play_count: '',
    description: '',
    item_count: '',
    musicList: []
  },
  onInit: function onInit() {
    if (this.defaultIndex) {
      this.currentIndex = this.defaultIndex;
    }

    this.musicData = this.$app.$def.musicData;
    this.audio = this.$app.$def.audio;
    this.$page.setTitleBar({
      text: decodeURIComponent(this.title)
    });
    this.getList('down');
  },
  onShow: function onShow() {
    var _this = this;

    $umeng_stat.resume(this);
    this.minplayVisible = true;
    this.isplaying = false;

    if (this.audio.src) {
      this.audio.onplay = function () {
        _this.isplaying = true;
      };

      this.audio.onpause = function () {
        _this.isplaying = false;
      };

      this.audio.ontimeupdate = function () {
        _this.isplaying = true;

        if (_this.musicData.album_id && _this.musicData.album_id === _this.album_id) {
          _this.startFind();
        }
      };
    }
  },
  onHide: function onHide() {
    $umeng_stat.pause(this);
    this.$app.$def.audioHide.call(this);
  },
  onDestroy: function onDestroy() {
    this.$app.$def.audioHide.call(this);
  },
  setInfo: function setInfo(data) {
    this.title = data.album_name;
    data.play_count ? this.play_count = _util["default"].numW(data.play_count) : this.play_count = _util["default"].numW(_util["default"].randomNum(5000, 999999));
    this.item_count = data.item_count;
    this.description = data.description;
    this.image = data.image || data.thumbnail;
  },
  loadMoreData: function loadMoreData() {
    if (this.isLoading && !this.hasMore) {
      return;
    }

    this.getList('up');
  },
  playMusic: function playMusic(index) {
    this.currentIndex = index;
    this.musicData.list = this.musicList;
    this.musicData.currentPlayerId = this.musicList[index].article_id;
    this.musicData.album_id = this.album_id;
    this.$app.$def.router.push({
      uri: '/pages/play'
    });
  },
  getList: function () {
    var _getList = _asyncToGenerator(regeneratorRuntime.mark(function _callee(type) {
      var _this2 = this;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (type === 'down') {
                this.page_no = 1;
              }

              _context.next = 3;
              return (0, _album.getAlbum)(this.album_id, this.page_no, this.page_size).then(function (res) {
                var data = res.data;

                _this2.setInfo(data);

                _this2.isLoading = true;
                _this2.page_no++;
                _this2.hasMore = res.has_next;

                if (data.artilces.length) {
                  var list = data.artilces.slice(0);
                  list.forEach(function (v) {
                    v.duration = _util["default"].formatSeconds(v.audios[0].duration);
                  });
                  type === 'down' ? _this2.musicList = list : _this2.musicList = _this2.musicList.concat(list);
                }
              })["catch"](function (e) {
                _this2.isLoading = false;

                _this2.$app.$def.prompt.showToast({
                  message: '网络异常,一会再试试！'
                });
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function getList(_x) {
      return _getList.apply(this, arguments);
    }

    return getList;
  }(),
  startFind: function startFind() {
    var currentPlayerId = this.musicData.currentPlayerId;

    if (currentPlayerId) {
      var currentI = this.musicList.findIndex(function (item) {
        return item.article_id === currentPlayerId;
      });

      if (currentI > -1) {
        this.currentIndex = currentI;
      }
    }
  },
  share: function share() {
    this.$app.$def.shareWx();
  },
  onMenuPress: function onMenuPress() {
    this.$app.$def.showMenu();
  }
};
exports["default"] = _default;
var moduleOwn = exports["default"] || module.exports;
var accessors = ['public', 'protected', 'private'];

if (moduleOwn.data && accessors.some(function (acc) {
  return moduleOwn[acc];
})) {
  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function (acc) {
    var accType = _typeof(moduleOwn[acc]);

    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);

      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {
          access: acc
        };
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
    }
  });
}}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/load-more/index.ux?uxType=comp":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/load-more/index.ux?uxType=comp ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  props: {
    hasMore: {
      type: Boolean,
      "default": true
    }
  },
  data: function data() {
    return {};
  }
};
exports["default"] = _default;}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/minplay/index.ux?uxType=comp":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/minplay/index.ux?uxType=comp ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  props: {
    isplaying: {
      type: Boolean,
      "default": true
    }
  },
  data: function data() {
    return {
      visible: false
    };
  },
  onInit: function onInit() {
    if (this.$app.$def.musicData.list.length) {
      this.visible = true;
    }
  },
  open: function open() {
    this.$app.$def.router.push({
      uri: '/pages/play'
    });
  }
};
exports["default"] = _default;}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/load-more/index.ux?uxType=comp&name=load-more":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/load-more/index.ux?uxType=comp&name=load-more ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=comp& */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/load-more/index.ux?uxType=comp&")
var $app_style$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!less-loader!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/load-more/index.ux?uxType=comp")
var $app_script$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!../../../node_modules/babel-loader?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/load-more/index.ux?uxType=comp")

$app_define$('@app-component/load-more', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/minplay/index.ux?uxType=comp&name=min-play":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/minplay/index.ux?uxType=comp&name=min-play ***!
  \*************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=comp& */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/minplay/index.ux?uxType=comp&")
var $app_style$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!less-loader!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/minplay/index.ux?uxType=comp")
var $app_script$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!../../../node_modules/babel-loader?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/minplay/index.ux?uxType=comp")

$app_define$('@app-component/min-play', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ "./src/api/album.js":
/*!**************************!*\
  !*** ./src/api/album.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbum = getAlbum;

function getAlbum(album_id) {
  var page_no = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var page_size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var params = {
    album_id: album_id,
    page_no: page_no,
    page_size: page_size
  };
  return $http.get('/v1/album', params);
}

/***/ }),

/***/ "./src/common/js/util.js":
/*!*******************************!*\
  !*** ./src/common/js/util.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var util =
/*#__PURE__*/
function () {
  function util() {
    _classCallCheck(this, util);
  }

  _createClass(util, null, [{
    key: "randomNum",
    value: function randomNum(Min, Max) {
      // 随机数
      var Range = Max - Min;
      var Rand = Math.random();
      var num = Min + Math.round(Rand * Range); //四舍五入

      return num;
    }
  }, {
    key: "numW",
    value: function numW(num) {
      if (num >= 10000) {
        return Math.round(num / 10000 * 100) / 100 + '万';
      }

      return num;
    }
  }, {
    key: "formatSeconds",
    value: function formatSeconds(seconds) {
      // 时间转换 hh:mm:ss
      // 时间
      var ss = parseInt(seconds); // 秒

      var mm = 0; // 分

      var hh = 0; // 小时

      if (ss > 60) {
        mm = parseInt(ss / 60);
        ss = parseInt(ss % 60);
      }

      if (mm > 60) {
        hh = parseInt(mm / 60);
        mm = parseInt(mm % 60);
      }

      var result = ('00' + parseInt(ss)).slice(-2);

      if (mm > 0) {
        result = ('00' + parseInt(mm)).slice(-2) + ':' + result;
      } else {
        result = '00:' + result;
      }

      if (hh > 0) {
        result = ('00' + parseInt(hh)).slice(-2) + ':' + result;
      }

      return result;
    }
    /* eslint-disable */

  }, {
    key: "setConsole",
    value: function setConsole() {
      var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'this is console!';
      var isOneLine = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var author = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GordanLee(github.com/lishuaixingNewBee)';
      console.warn("".concat(text, "  ---  ").concat(author));
    }
  }]);

  return util;
}();

exports["default"] = util;
util.setConsole('李帅醒Plus+狗蛋实验室-基于quickapp开发');

/***/ }),

/***/ "./src/pages/album/audio/index.ux?uxType=page":
/*!****************************************************!*\
  !*** ./src/pages/album/audio/index.ux?uxType=page ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !../../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!../../../components/minplay/index.ux?uxType=comp&name=min-play */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/minplay/index.ux?uxType=comp&name=min-play")
__webpack_require__(/*! !../../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!../../../components/load-more/index.ux?uxType=comp&name=load-more */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/load-more/index.ux?uxType=comp&name=load-more")
var $app_template$ = __webpack_require__(/*! !../../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!../../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=page&importNames[]=min-play,importNames[]=load-more */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/pages/album/audio/index.ux?uxType=page&importNames[]=min-play,importNames[]=load-more")
var $app_style$ = __webpack_require__(/*! !../../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!less-loader!../../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/pages/album/audio/index.ux?uxType=page")
var $app_script$ = __webpack_require__(/*! !../../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!../../../../node_modules/babel-loader?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!../../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/access-loader.js!../../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/access-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/pages/album/audio/index.ux?uxType=page")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/index',{ packagerVersion: '0.4.3'})


/***/ })

/******/ });
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map