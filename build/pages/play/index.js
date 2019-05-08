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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/play/index.ux?uxType=page");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/drawer/index.ux?uxType=comp":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/drawer/index.ux?uxType=comp ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".bottomdrawerenter": {
    "animationName": "bottomdrawerenter",
    "animationDuration": "400ms",
    "animationTimingFunction": "ease-in"
  },
  ".bottomdrawerleave": {
    "animationName": "bottomdrawerleave",
    "animationDuration": "300ms",
    "animationTimingFunction": "ease-in"
  },
  "@KEYFRAMES": {
    "bottomdrawerenter": [
      {
        "height": "0px",
        "transform": "{\"translateY\":\"100%\"}",
        "time": 0
      },
      {
        "height": "100%",
        "transform": "{\"translateY\":\"0px\"}",
        "time": 100
      }
    ],
    "bottomdrawerleave": [
      {
        "height": "100%",
        "transform": "{\"translateY\":\"0px\"}",
        "time": 0
      },
      {
        "height": "0px",
        "transform": "{\"translateY\":\"100%\"}",
        "time": 100
      }
    ],
    "topdrawerenter": [
      {
        "height": "0px",
        "transform": "{\"translateY\":\"-100%\"}",
        "time": 0
      },
      {
        "height": "100%",
        "transform": "{\"translateY\":\"0px\"}",
        "time": 100
      }
    ],
    "topdrawerleave": [
      {
        "height": "100%",
        "transform": "{\"translateY\":\"0px\"}",
        "time": 0
      },
      {
        "height": "0px",
        "transform": "{\"translateY\":\"-100%\"}",
        "time": 100
      }
    ],
    "rightdrawerenter": [
      {
        "width": "0px",
        "transform": "{\"translateX\":\"100%\"}",
        "time": 0
      },
      {
        "width": "100%",
        "transform": "{\"translateX\":\"0px\"}",
        "time": 100
      }
    ],
    "rightdrawerleave": [
      {
        "width": "100%",
        "transform": "{\"translateX\":\"0px\"}",
        "time": 0
      },
      {
        "width": "0px",
        "transform": "{\"translateX\":\"100%\"}",
        "time": 100
      }
    ],
    "leftdrawerenter": [
      {
        "width": "0px",
        "transform": "{\"translateX\":\"-100%\"}",
        "time": 0
      },
      {
        "width": "100%",
        "transform": "{\"translateX\":\"0px\"}",
        "time": 100
      }
    ],
    "leftdrawerleave": [
      {
        "width": "100%",
        "transform": "{\"translateX\":\"0px\"}",
        "time": 0
      },
      {
        "width": "0px",
        "transform": "{\"translateX\":\"-100%\"}",
        "time": 100
      }
    ]
  },
  ".topdrawerenter": {
    "animationName": "topdrawerenter",
    "animationDuration": "400ms",
    "animationTimingFunction": "ease-in"
  },
  ".topdrawerleave": {
    "animationName": "topdrawerleave",
    "animationDuration": "300ms",
    "animationTimingFunction": "ease-in"
  },
  ".rightdrawerenter": {
    "animationName": "rightdrawerenter",
    "animationDuration": "400ms",
    "animationTimingFunction": "ease-in"
  },
  ".rightdrawerleave": {
    "animationName": "rightdrawerleave",
    "animationDuration": "300ms",
    "animationTimingFunction": "ease-in"
  },
  ".leftdrawerenter": {
    "animationName": "leftdrawerenter",
    "animationDuration": "400ms",
    "animationTimingFunction": "ease-in"
  },
  ".leftdrawerleave": {
    "animationName": "leftdrawerleave",
    "animationDuration": "300ms",
    "animationTimingFunction": "ease-in"
  },
  ".quist-drawer": {
    "position": "fixed"
  },
  ".quist-drawer-top": {
    "top": "0px",
    "left": "0px",
    "right": "0px",
    "flexDirection": "column",
    "justifyContent": "flex-end"
  },
  ".quist-drawer-right": {
    "top": "0px",
    "bottom": "0px",
    "right": "0px",
    "flexDirection": "row"
  },
  ".quist-drawer-bottom": {
    "bottom": "0px",
    "left": "0px",
    "right": "0px",
    "flexDirection": "column"
  },
  ".quist-drawer-left": {
    "top": "0px",
    "bottom": "0px",
    "left": "0px",
    "flexDirection": "row",
    "justifyContent": "flex-end"
  },
  ".quist-drawer-content": {
    "flexShrink": 0,
    "flexDirection": "column"
  }
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/mask/index.ux?uxType=comp":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/mask/index.ux?uxType=comp ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@KEYFRAMES": {
    "quistOverlayEnter": [
      {
        "opacity": 0,
        "time": 0
      },
      {
        "opacity": 1,
        "time": 100
      }
    ],
    "quistOverlayLeave": [
      {
        "opacity": 1,
        "time": 0
      },
      {
        "opacity": 0,
        "time": 100
      }
    ]
  },
  ".quist-overlay-enter": {
    "animationName": "quistOverlayEnter"
  },
  ".quist-overlay-leave": {
    "animationName": "quistOverlayLeave"
  },
  ".quist-overlay-mask": {
    "position": "fixed",
    "left": "0px",
    "right": "0px",
    "top": "0px",
    "bottom": "0px",
    "justifyContent": "center",
    "alignItems": "center",
    "animationDuration": "200ms",
    "animationFillMode": "forwards"
  }
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/songlist/index.ux?uxType=comp":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/songlist/index.ux?uxType=comp ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  ".list-wrap": {
    "flexDirection": "column",
    "width": "100%",
    "height": "800px",
    "borderTopLeftRadius": "20px",
    "borderTopRightRadius": "20px",
    "backgroundColor": "#ffffff"
  },
  ".list-wrap .list-header": {
    "height": "100px",
    "paddingTop": "0px",
    "paddingRight": "30px",
    "paddingBottom": "0px",
    "paddingLeft": "30px",
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
          "v": "list-wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-header"
        }
      ]
    }
  },
  ".list-wrap .list-header .left": {
    "flexDirection": "row",
    "alignItems": "center",
    "height": "100px",
    "color": "#333333",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-header"
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
  ".list-wrap .list-header .left .icon-music": {
    "height": "40px",
    "marginRight": "10px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-header"
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
          "v": "icon-music"
        }
      ]
    }
  },
  ".list-wrap .list-header .left text": {
    "height": "100px",
    "width": "100%",
    "lines": 1,
    "textOverflow": "ellipsis",
    "fontSize": "32px",
    "lineHeight": "100px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-header"
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
          "t": "t",
          "n": "text"
        }
      ]
    }
  },
  ".list-wrap .list-content": {
    "flex": 1,
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-content"
        }
      ]
    }
  },
  ".list-wrap .list-content .item": {
    "flexDirection": "row",
    "alignItems": "center",
    "marginTop": "0px",
    "marginRight": "30px",
    "marginBottom": "0px",
    "marginLeft": "30px",
    "height": "90px",
    "backgroundColor": "#fcfcfc",
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
          "v": "list-wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-content"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item"
        }
      ]
    }
  },
  ".list-wrap .list-content .item text": {
    "height": "90px",
    "lineHeight": "90px",
    "lines": 1,
    "textOverflow": "ellipsis",
    "color": "#666666",
    "fontSize": "28px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-content"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item"
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
  ".list-wrap .list-content .item .playing": {
    "color": "#20b2aa",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-content"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "playing"
        }
      ]
    }
  },
  ".list-wrap .list-content .item .icon-voice": {
    "height": "35px",
    "marginRight": "10px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-content"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "icon-voice"
        }
      ]
    }
  },
  ".list-wrap .footer text": {
    "width": "100%",
    "height": "92px",
    "fontSize": "28px",
    "textAlign": "center",
    "lineHeight": "92px",
    "color": "rgba(117,117,117,0.5)",
    "backgroundColor": "#f2f2f2",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "footer"
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
  }
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/pages/play/index.ux?uxType=page":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/pages/play/index.ux?uxType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  ".play_page stack": {
    "height": "100%",
    "flexDirection": "column",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "play_page"
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
  ".container_bg": {
    "height": "100%",
    "flexDirection": "column"
  },
  ".container_bg .container_box": {
    "height": "100%",
    "flexDirection": "column",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container_bg"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container_box"
        }
      ]
    }
  },
  ".container_bg .container_box .img_wrap": {
    "height": "100%",
    "width": "100%",
    "backgroundRepeat": "no-repeat",
    "backgroundSize": "cover",
    "backgroundPosition": "50%",
    "transform": "{\"scaleX\":1.5,\"scaleY\":1.5}",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container_bg"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container_box"
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
  ".container_bg .container_box .bg_color": {
    "height": "100%",
    "width": "100%",
    "background": "{\"values\":[{\"type\":\"linearGradient\",\"directions\":[\"to\",\"bottom\"],\"values\":[\"#20b2aa\",\"rgba(255,255,255,0.9)\"]}]}",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container_bg"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container_box"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bg_color"
        }
      ]
    }
  },
  ".cd_container": {
    "height": "100%",
    "flexDirection": "column"
  },
  ".cd_container .cd_box": {
    "height": "100%",
    "flexDirection": "column",
    "alignItems": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "cd_container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "cd_box"
        }
      ]
    }
  },
  ".cd_container .cd_box .turn_container .turn": {
    "width": "230px",
    "height": "345px",
    "marginTop": "-43px",
    "marginRight": "0px",
    "marginBottom": "0px",
    "marginLeft": "156px",
    "backgroundRepeat": "no-repeat",
    "backgroundPosition": "center",
    "backgroundSize": "cover",
    "transformOrigin": "40px 40px",
    "transform": "{\"rotate\":\"-20deg\"}",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "cd_container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "cd_box"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "turn_container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "turn"
        }
      ]
    }
  },
  ".cd_container .cd_box .turn_container .start_turn": {
    "transform": "{\"rotate\":\"0deg\"}",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "cd_container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "cd_box"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "turn_container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "start_turn"
        }
      ]
    }
  },
  ".cd_container .cd_box .coverImgbox": {
    "marginTop": "150px",
    "width": "100%",
    "height": "592px",
    "alignItems": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "cd_container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "cd_box"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "coverImgbox"
        }
      ]
    }
  },
  ".cd_container .cd_box .coverImgbox .coverbgImg": {
    "width": "592px",
    "height": "592px",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderTopColor": "rgba(0,0,0,0)",
    "borderRightColor": "rgba(0,0,0,0)",
    "borderBottomColor": "rgba(0,0,0,0)",
    "borderLeftColor": "rgba(0,0,0,0)",
    "backgroundRepeat": "no-repeat",
    "backgroundPosition": "center",
    "backgroundSize": "cover",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "cd_container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "cd_box"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "coverImgbox"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "coverbgImg"
        }
      ]
    }
  },
  ".cd_container .cd_box .coverImgbox .songcoverImg": {
    "marginTop": "112px",
    "width": "368px",
    "height": "368px",
    "borderRadius": "184px",
    "backgroundRepeat": "no-repeat",
    "backgroundPosition": "center",
    "backgroundSize": "cover",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "cd_container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "cd_box"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "coverImgbox"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "songcoverImg"
        }
      ]
    }
  },
  ".cd_container .cd_box .coverImgbox .icon-play": {
    "width": "592px",
    "height": "592px",
    "justifyContent": "center",
    "alignItems": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "cd_container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "cd_box"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "coverImgbox"
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
  ".cd_container .cd_box .coverImgbox .icon-play image": {
    "width": "100px",
    "height": "100px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "cd_container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "cd_box"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "coverImgbox"
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
  ".cd_container .cd_box .musicisplay": {
    "animationName": "rotate",
    "animationDuration": "15000ms",
    "animationIterationCount": -1,
    "animationTimingFunction": "linear",
    "animationFillMode": "forwards",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "cd_container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "cd_box"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "musicisplay"
        }
      ]
    }
  },
  ".play_minbar": {
    "position": "fixed",
    "right": "0px",
    "left": "0px",
    "bottom": "50px",
    "flexDirection": "column"
  },
  ".play_minbar .progress-wrapper": {
    "width": "100%",
    "paddingTop": "0px",
    "paddingRight": "50px",
    "paddingBottom": "0px",
    "paddingLeft": "50px",
    "justifyContent": "space-between",
    "alignItems": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "play_minbar"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "progress-wrapper"
        }
      ]
    }
  },
  ".play_minbar .progress-wrapper .progress": {
    "flex": 1,
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "play_minbar"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "progress-wrapper"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "progress"
        }
      ]
    }
  },
  ".play_minbar .progress-wrapper text": {
    "color": "rgba(32,178,170,0.8)",
    "fontSize": "20px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "play_minbar"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "progress-wrapper"
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
  ".play_minbar .operators": {
    "display": "flex",
    "alignItems": "center",
    "height": "100px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "play_minbar"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "operators"
        }
      ]
    }
  },
  ".play_minbar .operators .icon": {
    "flex": 1,
    "justifyContent": "center",
    "alignItems": "center",
    "height": "100px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "play_minbar"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "operators"
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
  ".play_minbar .operators .icon image": {
    "height": "50px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "play_minbar"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "operators"
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
  ".play_minbar .operators .play image": {
    "height": "100px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "play_minbar"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "operators"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "play"
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
  }
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/drawer/index.ux?uxType=comp&importNames[]=quist-overlay":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/drawer/index.ux?uxType=comp&importNames[]=quist-overlay ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "quist-overlay",
  "attr": {
    "visible": function () {return this.visible},
    "maskClosable": function () {return this.maskClosable}
  },
  "events": {
    "qui-overlay-click": "overlayClick"
  },
  "children": [
    {
      "type": "div",
      "attr": {
        "show": function () {return this.show}
      },
      "classList": function () {return ['quist-drawer', '' + 'quist-drawer-' + (this.placement)]},
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": function () {return ['quist-drawer-content', this.animationClass]},
          "style": function () {return this.contentStyle},
          "children": [
            {
              "type": "slot",
              "attr": {}
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/mask/index.ux?uxType=comp&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/mask/index.ux?uxType=comp& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "quist-overlay"
  ],
  "children": [
    {
      "type": "div",
      "attr": {
        "show": function () {return this.show}
      },
      "classList": function () {return ['quist-overlay-mask', this.className]},
      "style": {
        "backgroundColor": function () {return this.background}
      },
      "events": {
        "click": "overlayClick"
      },
      "children": [
        {
          "type": "slot",
          "attr": {}
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/songlist/index.ux?uxType=comp&importNames[]=drawer-view":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/songlist/index.ux?uxType=comp&importNames[]=drawer-view ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "drawer-view",
  "attr": {
    "visible": function () {return this.songListVisible},
    "placement": "bottom"
  },
  "events": {
    "on-close": "close"
  },
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "list-wrap"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "list-header"
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
                    "src": "/common/image/music3.svg"
                  },
                  "classList": [
                    "icon-music"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return '' + '播放列表 ( ' + (this.songList.length) + ' )'}
                  }
                }
              ]
            }
          ]
        },
        {
          "type": "list",
          "attr": {
            "id": "list"
          },
          "classList": [
            "list-content"
          ],
          "id": "list",
          "children": [
            {
              "type": "block",
              "attr": {},
              "repeat": {
                "exp": function () {return this.songList},
                "key": "index",
                "value": "item"
              },
              "children": [
                {
                  "type": "list-item",
                  "attr": {
                    "type": "song"
                  },
                  "classList": [
                    "item"
                  ],
                  "events": {
                    "click": function (evt) {this.goIndex(this.index,evt)}
                  },
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": "/common/image/voice.svg",
                        "show": function () {return this.index==this.currentIndex}
                      },
                      "classList": [
                        "icon-voice"
                      ]
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.item.title}
                      },
                      "classList": function () {return ['name', this.index==this.currentIndex?'playing':'']}
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
            "footer"
          ],
          "events": {
            "click": "close"
          },
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "关闭"
              }
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/pages/play/index.ux?uxType=page&importNames[]=song-list":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/pages/play/index.ux?uxType=page&importNames[]=song-list ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "play_page",
    "page_container"
  ],
  "children": [
    {
      "type": "stack",
      "attr": {},
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "container_bg"
          ],
          "children": [
            {
              "type": "stack",
              "attr": {},
              "classList": [
                "container_box"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": function () {return this.songList[this.currentIndex].poster_url}
                  },
                  "classList": [
                    "img_wrap"
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "wave_container"
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "bg_color"
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
            "cd_container"
          ],
          "children": [
            {
              "type": "stack",
              "attr": {},
              "classList": [
                "cd_box"
              ],
              "children": [
                {
                  "type": "stack",
                  "attr": {},
                  "classList": function () {return ['coverImgbox', this.isplaying?'musicisplay':'musicispaused']},
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": "http://c2.h54hterh.top/manage/image/259de4e98ecb9cb5f66e15ec218d6883.png"
                      },
                      "classList": [
                        "coverbgImg"
                      ]
                    },
                    {
                      "type": "image",
                      "attr": {
                        "src": function () {return this.songList[this.currentIndex].poster_url}
                      },
                      "classList": [
                        "songcoverImg"
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "icon-play"
                      ],
                      "events": {
                        "click": "playMusic"
                      },
                      "children": [
                        {
                          "type": "image",
                          "attr": {
                            "src": "/common/image/play3.png"
                          },
                          "shown": function () {return !this.isplaying}
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "turn_container"
                  ],
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": "/common/image/control.png"
                      },
                      "classList": function () {return ['turn', this.isplaying?'start_turn':'start_turn']}
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
            "play_minbar"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "progress-wrapper"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.formatCurrentTime}
                  }
                },
                {
                  "type": "slider",
                  "attr": {
                    "min": "0",
                    "max": function () {return this.duration},
                    "selectedColor": "#20B2AA",
                    "color": "#f4f4f4",
                    "step": "1",
                    "value": function () {return this.currentTime}
                  },
                  "classList": [
                    "progress"
                  ],
                  "events": {
                    "change": "sliderChange"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.formatDuration}
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "operators"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "icon",
                    "mode"
                  ],
                  "events": {
                    "click": "mode"
                  },
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": "/common/image/share2.svg"
                      },
                      "classList": [
                        "icon-playbar-singlecycle"
                      ]
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "icon",
                    "prev"
                  ],
                  "events": {
                    "click": "prev"
                  },
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": "/common/image/prev.svg"
                      },
                      "classList": [
                        "icon-pre"
                      ]
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "icon",
                    "play"
                  ],
                  "events": {
                    "click": "playMusic"
                  },
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": "/common/image/pause.svg"
                      },
                      "classList": [
                        "icon-pause"
                      ],
                      "shown": function () {return this.isplaying}
                    },
                    {
                      "type": "image",
                      "attr": {
                        "src": "/common/image/play2.svg"
                      },
                      "classList": [
                        "icon-play"
                      ],
                      "shown": function () {return !this.isplaying}
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "icon",
                    "next"
                  ],
                  "events": {
                    "click": "next"
                  },
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": "/common/image/next.svg"
                      },
                      "classList": [
                        "icon-next"
                      ]
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "icon",
                    "music-list"
                  ],
                  "events": {
                    "click": "handlerList"
                  },
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": "/common/image/music-list.svg"
                      },
                      "classList": [
                        "icon-music-list"
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
      "type": "song-list",
      "attr": {
        "songListVisible": function () {return this.songListVisible},
        "currentIndex": function () {return this.currentIndex},
        "songList": function () {return this.songList}
      },
      "shown": function () {return this.songList.length},
      "events": {
        "on-close": "close"
      }
    }
  ]
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/access-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/pages/play/index.ux?uxType=page":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/access-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/pages/play/index.ux?uxType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _util = _interopRequireDefault(__webpack_require__(/*! ../../common/js/util */ "./src/common/js/util.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var musicData = {};
var audio = {};
var _default = {
  "private": {
    placement: '',
    songListVisible: false,
    currentIndex: 0,
    album_id: '',
    songList: [],
    playerData: null,
    formatCurrentTime: '00:00',
    formatDuration: '00:00',
    duration: 0,
    currentTime: 0,
    isplaying: false
  },
  onInit: function onInit() {
    var app = this.$app.$def;
    musicData = app.musicData;
    audio = app.audio;
    this.album_id = musicData.album_id;
    this.songList = musicData.list;
    this.playerData = this.songList[this.currentIndex];
    this.$watch('currentIndex', 'watchIndexChange');
    this.$on('changeCurrentIndex', this._changeCurrentIndex);
  },
  onShow: function onShow() {
    var _this = this;

    $umeng_stat.resume(this);
    var currentPlayerId = musicData.currentPlayerId;

    if (currentPlayerId) {
      var currentI = musicData.list.findIndex(function (item) {
        return item.article_id === currentPlayerId;
      });

      if (currentI > -1) {
        this.currentIndex = currentI;
      }
    }

    this.initAudio();

    if (!audio.src || audio.src !== this.playerData.audios[0].audio_src) {
      this.setMusic();
    }

    this.handlerProgress();

    audio.onplay = function () {
      _this.isplaying = true;
    };

    audio.onpause = function () {
      _this.isplaying = false;
    };

    audio.ondurationchange = function () {
      _this.isplaying = true;
    };

    audio.ontimeupdate = function () {
      _this.isplaying = true;

      _this.handlerProgress();
    };

    audio.onended = function () {
      _this.isplaying = false;

      if (_this.currentIndex < Number(_this.songList && _this.songList.length - 1)) {
        _this.currentIndex = _this.currentIndex + 1;
      } else {
        _this.currentIndex = 0;
      }

      _this.setMusic();
    };

    audio.onerror = function (e) {
      _this.$app.$def.prompt.showToast({
        message: "\u97F3\u9891\u6587\u4EF6\u5F02\u5E38\uFF01"
      });
    };
  },
  mode: function mode() {
    this.$app.$def.shareWx();
  },
  prev: function prev() {
    if (this.currentIndex === 0) {
      this.$app.$def.prompt.showToast({
        message: '已经是第一首！'
      });
      return;
    }

    this.currentIndex = this.currentIndex - 1;
    this.setMusic();
  },
  next: function next() {
    if (this.currentIndex === Number(this.songList && this.songList.length - 1)) {
      this.$app.$def.prompt.showToast({
        message: '已经是最后一首!'
      });
      return;
    }

    this.currentIndex = this.currentIndex + 1;
    this.setMusic();
  },
  sliderChange: function sliderChange(e) {
    var value = e.progress - audio.currentTime;

    if (value > 1 || value < -1) {
      audio.currentTime = e.progress;
    }
  },
  close: function close() {
    this.songListVisible = false;
  },
  watchIndexChange: function watchIndexChange(newV, oldV) {
    this.playerData = this.songList[newV];
    musicData.currentIndex = newV;
    console.info("\u76D1\u542C\u6570\u636E\u53D8\u5316\uFF1A", newV, oldV);
  },
  _changeCurrentIndex: function _changeCurrentIndex(options) {
    var index = options.detail;
    this.currentIndex = index;
    this.setMusic();
  },
  handlerProgress: function handlerProgress() {
    this.currentTime = audio.currentTime;
    this.formatCurrentTime = _util["default"].formatSeconds(audio.currentTime || 0);
  },
  initAudio: function initAudio() {
    this.duration = this.playerData.audios[0].duration;
    this.formatDuration = _util["default"].formatSeconds(this.playerData.audios[0].duration);
    this.$page.setTitleBar({
      text: this.playerData.title
    });
  },
  playMusic: function playMusic() {
    this.isplaying = !this.isplaying;

    if (this.isplaying) {
      audio.play();
    } else {
      audio.pause();
    }
  },
  setMusic: function setMusic() {
    audio.src = this.playerData.audios[0].audio_src;
    audio.currentTime = 0;
    this.currentTime = 0;
    audio.play();
    musicData.currentPlayerId = this.playerData.article_id;
    this.initAudio();
  },
  handlerList: function handlerList() {
    this.songListVisible = true;
  },
  onHide: function onHide() {
    $umeng_stat.pause(this);
    this.backstagePlay();
    this.unbind();
  },
  onDestroy: function onDestroy() {
    this.backstagePlay();
    this.unbind();
  },
  backstagePlay: function backstagePlay() {
    audio.onended = function () {
      var list = musicData.list;

      if (musicData.currentIndex < Number(list.length)) {
        musicData.currentIndex = musicData.currentIndex + 1;
      } else {
        musicData.currentIndex = 0;
      }

      musicData.currentPlayerId = list[musicData.currentIndex].article_id;
      audio.src = list[musicData.currentIndex].audios[0].audio_src;
      audio.play();
    };
  },
  unbind: function unbind() {
    audio.onplay = null;
    audio.onpause = null;
    audio.ontimeupdate = null;
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

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/drawer/index.ux?uxType=comp":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/drawer/index.ux?uxType=comp ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  props: {
    maskClosable: {
      type: Boolean,
      "default": true
    },
    visible: {
      type: Boolean,
      "default": false
    },
    placement: {
      type: String,
      "default": 'bottom'
    }
  },
  data: function data() {
    return {
      show: this.visible,
      contentStyle: {},
      animationClass: ''
    };
  },
  onInit: function onInit() {
    this.setDefault();
    this.setContentStyle();
    this.toggleVisible(this.visible);
  },
  setDefault: function setDefault() {
    this.$watch('visible', 'toggleVisible');
  },
  toggleVisible: function toggleVisible(visible) {
    var _this = this;

    this.timeoutId && clearTimeout(this.timeoutId);

    if (visible) {
      this.show = true;
      this.animationClass = "".concat(this.placement, "drawerenter");
    } else {
      this.animationClass = "".concat(this.placement, "drawerleave");
      this.timeoutId = setTimeout(function () {
        _this.show = false;
      }, 200);
    }
  },
  setContentStyle: function setContentStyle() {
    if (this.placement === 'bottom' || this.placement === 'top') {
      this.contentStyle = {
        width: '750px',
        height: 'auto'
      };
    } else {
      this.contentStyle = {
        width: 'auto',
        height: '100%'
      };
    }
  },
  overlayClick: function overlayClick() {
    this.$emit('onClose');
  }
};
exports["default"] = _default;}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/mask/index.ux?uxType=comp":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/mask/index.ux?uxType=comp ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  props: {
    maskClosable: {
      type: Boolean,
      "default": false
    },
    visible: {
      type: Boolean,
      "default": false
    },
    background: {
      type: String,
      "default": 'rgba(0, 0, 0, 0.6)'
    }
  },
  data: {
    show: false,
    className: ''
  },
  onInit: function onInit() {
    this.$watch('visible', 'updateVisible');
    this.updateVisible();
  },
  updateVisible: function updateVisible() {
    var _this = this;

    this.timeoutId && clearTimeout(this.timeoutId);

    if (this.visible) {
      this.show = true;
      this.className = 'quist-overlay-enter';
    } else {
      this.className = 'quist-overlay-leave';
      this.timeoutId = setTimeout(function () {
        _this.show = false;
      }, 200);
    }
  },
  overlayClick: function overlayClick() {
    this.maskClosable ? this.$emit('quiOverlayClick') : '';
  }
};
exports["default"] = _default;}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/songlist/index.ux?uxType=comp":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/songlist/index.ux?uxType=comp ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default2 = {
  props: {
    songListVisible: {
      type: Boolean,
      "default": false
    },
    songList: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    currentIndex: {
      type: Number,
      "default": 0
    }
  },
  onInit: function onInit() {
    this.$watch('songListVisible', 'watchPropsChange');
  },
  onReady: function onReady() {
    this.$element('list').scrollTo({
      index: this.currentIndex,
      smooth: true
    });
  },
  watchPropsChange: function watchPropsChange(newV, oldV) {
    this.$element('list').scrollTo({
      index: this.currentIndex,
      smooth: true
    });
  },
  close: function close() {
    this.$emit('onClose');
  },
  goIndex: function goIndex(index) {
    this.$dispatch('changeCurrentIndex', index);
  }
};
exports["default"] = _default2;}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/drawer/index.ux?uxType=comp&name=drawer-view":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/drawer/index.ux?uxType=comp&name=drawer-view ***!
  \***************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!../mask/index.ux?uxType=comp&name=quist-overlay */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/mask/index.ux?uxType=comp&name=quist-overlay")
var $app_template$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=comp&importNames[]=quist-overlay */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/drawer/index.ux?uxType=comp&importNames[]=quist-overlay")
var $app_style$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!less-loader!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/drawer/index.ux?uxType=comp")
var $app_script$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!../../../node_modules/babel-loader?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/drawer/index.ux?uxType=comp")

$app_define$('@app-component/drawer-view', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/mask/index.ux?uxType=comp&name=quist-overlay":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/mask/index.ux?uxType=comp&name=quist-overlay ***!
  \***************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=comp& */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/mask/index.ux?uxType=comp&")
var $app_style$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!less-loader!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/mask/index.ux?uxType=comp")
var $app_script$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!../../../node_modules/babel-loader?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/mask/index.ux?uxType=comp")

$app_define$('@app-component/quist-overlay', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/songlist/index.ux?uxType=comp&name=song-list":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/songlist/index.ux?uxType=comp&name=song-list ***!
  \***************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!../drawer/index.ux?uxType=comp&name=drawer-view */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/drawer/index.ux?uxType=comp&name=drawer-view")
var $app_template$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=comp&importNames[]=drawer-view */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/songlist/index.ux?uxType=comp&importNames[]=drawer-view")
var $app_style$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!less-loader!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/songlist/index.ux?uxType=comp")
var $app_script$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!../../../node_modules/babel-loader?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/songlist/index.ux?uxType=comp")

$app_define$('@app-component/song-list', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


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

/***/ "./src/pages/play/index.ux?uxType=page":
/*!*********************************************!*\
  !*** ./src/pages/play/index.ux?uxType=page ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!../../components/songlist/index.ux?uxType=comp&name=song-list */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/songlist/index.ux?uxType=comp&name=song-list")
var $app_template$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=page&importNames[]=song-list */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/pages/play/index.ux?uxType=page&importNames[]=song-list")
var $app_style$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!less-loader!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/pages/play/index.ux?uxType=page")
var $app_script$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!../../../node_modules/babel-loader?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/access-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/access-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/pages/play/index.ux?uxType=page")

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