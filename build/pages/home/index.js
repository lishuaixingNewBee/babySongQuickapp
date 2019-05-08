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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/home/index.ux?uxType=page");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/card/card-header.ux?uxType=comp":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/card/card-header.ux?uxType=comp ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  ".card_title": {
    "marginTop": "20px",
    "marginRight": "0px",
    "marginBottom": "25px",
    "marginLeft": "0px",
    "justifyContent": "space-between"
  },
  ".card_title .c_title": {
    "color": "#333333",
    "fontSize": "36px",
    "fontWeight": "bold",
    "lines": 1,
    "textOverflow": "ellipsis",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "card_title"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "c_title"
        }
      ]
    }
  },
  ".card_title .more": {
    "height": "60px",
    "alignItems": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "card_title"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "more"
        }
      ]
    }
  },
  ".card_title .more text": {
    "marginRight": "-2px",
    "height": "60px",
    "lineHeight": "60px",
    "color": "#aaaaaa",
    "fontSize": "24px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "card_title"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "more"
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
  ".card_title .more .icon-more": {
    "width": "30px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "card_title"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "more"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "icon-more"
        }
      ]
    }
  }
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/card/index.ux?uxType=comp":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/card/index.ux?uxType=comp ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  ".nav_container": {
    "marginTop": "-50px"
  },
  ".card_container": {
    "borderBottomWidth": "20px",
    "borderTopColor": "#f4f4f4",
    "borderRightColor": "#f4f4f4",
    "borderBottomColor": "#f4f4f4",
    "borderLeftColor": "#f4f4f4"
  },
  ".none_border": {
    "borderBottomWidth": "0px"
  }
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/card/s16.ux?uxType=comp":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/card/s16.ux?uxType=comp ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  ".card_wrap": {
    "marginTop": "20px",
    "marginRight": "0px",
    "marginBottom": "0px",
    "marginLeft": "0px",
    "paddingTop": "0px",
    "paddingRight": "20px",
    "paddingBottom": "0px",
    "paddingLeft": "20px",
    "flexDirection": "column"
  },
  ".card_wrap .card_lists": {
    "flexWrap": "wrap",
    "marginRight": "-20px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "card_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "card_lists"
        }
      ]
    }
  },
  ".card_wrap .s16": {
    "width": "50%",
    "flexDirection": "column",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "card_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "s16"
        }
      ]
    }
  },
  ".card_wrap .s16 .card_box": {
    "marginRight": "20px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "card_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "s16"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "card_box"
        }
      ]
    }
  },
  ".card_wrap .s16 .card_box .wrap_img": {
    "width": "100%",
    "height": "206px",
    "borderRadius": "13px",
    "backgroundRepeat": "no-repeat",
    "backgroundPosition": "center",
    "backgroundColor": "#f4f4f4",
    "backgroundSize": "cover",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "card_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "s16"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "card_box"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "wrap_img"
        }
      ]
    }
  },
  ".card_wrap .s16 .description": {
    "flexDirection": "column",
    "marginTop": "15px",
    "marginRight": "0px",
    "marginBottom": "15px",
    "marginLeft": "0px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "card_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "s16"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "description"
        }
      ]
    }
  },
  ".card_wrap .s16 .description .title": {
    "flex": 1,
    "height": "40px",
    "lineHeight": "40px",
    "fontSize": "28px",
    "lines": 1,
    "textOverflow": "ellipsis",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "card_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "s16"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "description"
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
  ".card_wrap .s16 .description .text": {
    "flex": 1,
    "height": "40px",
    "lineHeight": "40px",
    "fontSize": "28px",
    "color": "#aaaaaa",
    "lines": 1,
    "textOverflow": "ellipsis",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "card_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "s16"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "description"
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
  }
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/card/s18.ux?uxType=comp":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/card/s18.ux?uxType=comp ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  ".card_wrap": {
    "marginTop": "20px",
    "marginRight": "0px",
    "marginBottom": "0px",
    "marginLeft": "0px",
    "paddingTop": "0px",
    "paddingRight": "20px",
    "paddingBottom": "0px",
    "paddingLeft": "20px",
    "flexDirection": "column"
  },
  ".card_wrap .card_lists": {
    "flexWrap": "wrap",
    "marginRight": "-20px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "card_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "card_lists"
        }
      ]
    }
  },
  ".card_wrap .s18": {
    "width": "33.3333%",
    "flexDirection": "column",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "card_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "s18"
        }
      ]
    }
  },
  ".card_wrap .s18 .card_box": {
    "marginRight": "20px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "card_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "s18"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "card_box"
        }
      ]
    }
  },
  ".card_wrap .s18 .card_box .wrap_img": {
    "width": "100%",
    "height": "206px",
    "borderRadius": "13px",
    "backgroundRepeat": "no-repeat",
    "backgroundPosition": "center",
    "backgroundSize": "cover",
    "backgroundColor": "#f4f4f4",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "card_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "s18"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "card_box"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "wrap_img"
        }
      ]
    }
  },
  ".card_wrap .s18 .description": {
    "flexDirection": "column",
    "marginTop": "15px",
    "marginRight": "0px",
    "marginBottom": "15px",
    "marginLeft": "0px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "card_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "s18"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "description"
        }
      ]
    }
  },
  ".card_wrap .s18 .description .title": {
    "flex": 1,
    "height": "40px",
    "lineHeight": "40px",
    "fontSize": "28px",
    "lines": 1,
    "textOverflow": "ellipsis",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "card_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "s18"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "description"
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
  ".card_wrap .s18 .description .text": {
    "flex": 1,
    "height": "40px",
    "lineHeight": "40px",
    "fontSize": "28px",
    "color": "#aaaaaa",
    "lines": 1,
    "textOverflow": "ellipsis",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "card_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "s18"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "description"
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
  }
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/card/s33.ux?uxType=comp":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/card/s33.ux?uxType=comp ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  ".card_wrap": {
    "marginTop": "20px",
    "marginRight": "0px",
    "marginBottom": "0px",
    "marginLeft": "0px",
    "paddingTop": "0px",
    "paddingRight": "20px",
    "paddingBottom": "0px",
    "paddingLeft": "20px",
    "flexDirection": "column"
  },
  ".card_wrap .card_lists": {
    "flexWrap": "wrap",
    "marginRight": "-20px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "card_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "card_lists"
        }
      ]
    }
  },
  ".card_wrap .s33": {
    "width": "50%",
    "flexDirection": "column",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "card_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "s33"
        }
      ]
    }
  },
  ".card_wrap .s33 .card_box": {
    "marginRight": "20px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "card_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "s33"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "card_box"
        }
      ]
    }
  },
  ".card_wrap .s33 .card_box .wrap_img": {
    "width": "100%",
    "paddingTop": "100%",
    "borderRadius": "13px",
    "backgroundRepeat": "no-repeat",
    "backgroundPosition": "center",
    "backgroundSize": "cover",
    "backgroundColor": "#f4f4f4",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "card_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "s33"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "card_box"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "wrap_img"
        }
      ]
    }
  },
  ".card_wrap .s33 .description": {
    "flexDirection": "column",
    "marginTop": "15px",
    "marginRight": "0px",
    "marginBottom": "15px",
    "marginLeft": "0px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "card_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "s33"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "description"
        }
      ]
    }
  },
  ".card_wrap .s33 .description .title": {
    "flex": 1,
    "height": "40px",
    "lineHeight": "40px",
    "fontSize": "28px",
    "lines": 1,
    "textOverflow": "ellipsis",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "card_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "s33"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "description"
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
  ".card_wrap .s33 .description .text": {
    "flex": 1,
    "height": "40px",
    "lineHeight": "40px",
    "fontSize": "28px",
    "color": "#aaaaaa",
    "lines": 1,
    "textOverflow": "ellipsis",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "card_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "s33"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "description"
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
  }
}

/***/ }),

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

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/loading/index.ux?uxType=comp":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/loading/index.ux?uxType=comp ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".wrap_loading": {
    "position": "fixed",
    "top": "0px",
    "bottom": "0px",
    "right": "0px",
    "left": "0px",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".wrap_loading .content": {
    "flexDirection": "column",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "wrap_loading"
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
  ".wrap_loading .content image": {
    "width": "250px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "wrap_loading"
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
          "t": "t",
          "n": "image"
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

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/nav/index.ux?uxType=comp":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/nav/index.ux?uxType=comp ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  ".nav-box": {
    "width": "750px",
    "height": "186px",
    "backgroundImage": "/common/image/nav_bg.png",
    "backgroundSize": "cover",
    "paddingTop": "6px",
    "paddingRight": "28px",
    "paddingBottom": "0px",
    "paddingLeft": "28px"
  },
  ".nav-box .nav": {
    "paddingTop": "20px",
    "paddingRight": "0px",
    "paddingBottom": "15px",
    "paddingLeft": "0px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "nav-box"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "nav"
        }
      ]
    }
  },
  ".nav-box .nav .item": {
    "width": "25%",
    "display": "flex",
    "marginTop": "0px",
    "marginRight": "0px",
    "marginBottom": "0px",
    "marginLeft": "0px",
    "flexDirection": "column",
    "alignItems": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "nav-box"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "nav"
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
  ".nav-box .nav .item .item-cion": {
    "width": "80px",
    "height": "80px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "nav-box"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "nav"
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
          "v": "item-cion"
        }
      ]
    }
  },
  ".nav-box .nav .item text": {
    "marginTop": "16px",
    "color": "#212528",
    "fontSize": "28px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "nav-box"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "nav"
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
  }
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/swiper/index.ux?uxType=comp":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/swiper/index.ux?uxType=comp ***!
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
  ".swiper-container .swiper": {
    "height": "380px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "swiper-container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "swiper"
        }
      ]
    }
  },
  ".swiper-container .swiper .wrap-img": {
    "resizeMode": "cover",
    "height": "380px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "swiper-container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "swiper"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "wrap-img"
        }
      ]
    }
  },
  ".swiper-container .dots": {
    "alignSelf": "flex-end",
    "flex": 1,
    "justifyContent": "center",
    "marginBottom": "54px",
    "transform": "{\"translateX\":\"1px\"}",
    "textAlign": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "swiper-container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "dots"
        }
      ]
    }
  },
  ".swiper-container .dots .dot": {
    "marginTop": "0px",
    "marginRight": "4px",
    "marginBottom": "0px",
    "marginLeft": "4px",
    "width": "16px",
    "height": "16px",
    "borderRadius": "8px",
    "backgroundColor": "rgba(255,255,255,0.5)",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "swiper-container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "dots"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "dot"
        }
      ]
    }
  },
  ".swiper-container .dots .active": {
    "width": "40px",
    "borderRadius": "10px",
    "backgroundColor": "rgba(255,255,255,0.8)",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "swiper-container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "dots"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "active"
        }
      ]
    }
  }
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/tab/index.ux?uxType=comp":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/tab/index.ux?uxType=comp ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  ".menu_wrap": {
    "height": "110px",
    "position": "fixed",
    "zIndex": 3,
    "bottom": "0px",
    "left": "0px",
    "right": "0px",
    "borderTopWidth": "1px",
    "borderTopColor": "rgba(255,255,255,0.1)",
    "borderRightColor": "rgba(255,255,255,0.1)",
    "borderBottomColor": "rgba(255,255,255,0.1)",
    "borderLeftColor": "rgba(255,255,255,0.1)",
    "backgroundColor": "#ffffff"
  },
  ".menu_wrap .menu-item": {
    "flex": 1,
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "menu_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "menu-item"
        }
      ]
    }
  },
  ".menu_wrap .menu-item image": {
    "width": "55px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "menu_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "menu-item"
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
  ".menu_wrap .menu-item .tilte text": {
    "fontSize": "25px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "menu_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "menu-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tilte"
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

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/pages/home/index.ux?uxType=page":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/pages/home/index.ux?uxType=page ***!
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
  ".page_container .home_content": {
    "flex": 1,
    "flexDirection": "column",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "page_container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "home_content"
        }
      ]
    }
  },
  ".page_container .home_content .item_content": {
    "flexDirection": "column",
    "paddingBottom": "110px",
    "flex": 1,
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "page_container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "home_content"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item_content"
        }
      ]
    }
  }
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/pages/music/index.ux?uxType=comp":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/pages/music/index.ux?uxType=comp ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  ".video-page": {
    "backgroundColor": "#fcfcfc",
    "flexDirection": "column"
  }
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/pages/news/index.ux?uxType=comp":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/pages/news/index.ux?uxType=comp ***!
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
  ".news-page": {
    "backgroundColor": "#fcfcfc",
    "flexDirection": "column"
  },
  ".news-page .tab-bar": {
    "height": "75px",
    "backgroundColor": "#ffffff",
    "borderTopWidth": "1px",
    "borderTopColor": "rgba(255,255,255,0.1)",
    "borderRightColor": "rgba(255,255,255,0.1)",
    "borderBottomColor": "rgba(255,255,255,0.1)",
    "borderLeftColor": "rgba(255,255,255,0.1)",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "news-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-bar"
        }
      ]
    }
  },
  ".news-page .tab-bar .tab-item-warp": {
    "flex": 1,
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "flex-end",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "news-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-bar"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-item-warp"
        }
      ]
    }
  },
  ".news-page .tab-bar .tab-item-warp text": {
    "width": "100%",
    "height": "74px",
    "lineHeight": "74px",
    "fontSize": "28px",
    "color": "#71777d",
    "textAlign": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "news-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-bar"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-item-warp"
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
  ".news-page .tab-bar .tab-item-warp .active": {
    "fontSize": "32px",
    "color": "#424242",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "news-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-bar"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-item-warp"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "active"
        }
      ]
    }
  },
  ".news-page .tab-bar .tab-item-warp .line": {
    "height": "4px",
    "width": "50%",
    "backgroundColor": "#424242",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "news-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-bar"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-item-warp"
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

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/pages/news/tab-item.ux?uxType=comp":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/pages/news/tab-item.ux?uxType=comp ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  ".list_page": {
    "backgroundColor": "#f4f4f4"
  },
  ".list_wrap": {
    "flexDirection": "column"
  },
  ".list_wrap .card": {
    "marginTop": "30px",
    "marginRight": "20px",
    "marginBottom": "0px",
    "marginLeft": "20px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "card"
        }
      ]
    }
  },
  ".list_wrap .card .card_wrap": {
    "flexDirection": "column",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "card"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "card_wrap"
        }
      ]
    }
  },
  ".list_wrap .s3 .card_wrap": {
    "width": "100%",
    "flexDirection": "row",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "s3"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "card_wrap"
        }
      ]
    }
  },
  ".list_wrap .s3 .card_wrap .wrap_image": {
    "width": "220px",
    "height": "176px",
    "backgroundColor": "#4a4746",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "s3"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "card_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "wrap_image"
        }
      ]
    }
  },
  ".list_wrap .s3 .card_wrap .wrap_image .image": {
    "width": "220px",
    "height": "176px",
    "resizeMode": "cover",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "s3"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "card_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "wrap_image"
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
  ".list_wrap .s3 .card_wrap .content": {
    "height": "176px",
    "flexDirection": "column",
    "flex": 1,
    "backgroundColor": "#ffffff",
    "paddingTop": "10px",
    "paddingRight": "20px",
    "paddingBottom": "10px",
    "paddingLeft": "20px",
    "justifyContent": "space-between",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "s3"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "card_wrap"
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
  ".list_wrap .s3 .card_wrap .content .title": {
    "height": "80px",
    "lineHeight": "40px",
    "fontSize": "30px",
    "color": "#333333",
    "lines": 2,
    "textOverflow": "ellipsis",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "s3"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "card_wrap"
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
          "v": "title"
        }
      ]
    }
  },
  ".list_wrap .s3 .card_wrap .desc": {
    "alignItems": "center",
    "height": "28px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "s3"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "card_wrap"
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
  ".list_wrap .s3 .card_wrap .desc .icon": {
    "height": "28px",
    "marginRight": "10px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "s3"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "card_wrap"
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
          "v": "icon"
        }
      ]
    }
  },
  ".list_wrap .s3 .card_wrap .desc text": {
    "height": "28px",
    "lineHeight": "28px",
    "fontSize": "24px",
    "color": "#999999",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "s3"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "card_wrap"
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
          "t": "t",
          "n": "text"
        }
      ]
    }
  }
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/pages/video/index.ux?uxType=comp":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/pages/video/index.ux?uxType=comp ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  ".video-page": {
    "backgroundColor": "#fcfcfc",
    "flexDirection": "column"
  }
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/card/card-header.ux?uxType=comp&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/card/card-header.ux?uxType=comp& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "card_title"
  ],
  "children": [
    {
      "type": "text",
      "attr": {
        "value": function () {return this.data.title}
      },
      "classList": [
        "c_title"
      ],
      "events": {
        "click": function (evt) {this.bindViewTap(this.data,evt)}
      }
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "more"
      ],
      "shown": function () {return this.data.target},
      "events": {
        "click": function (evt) {this.bindViewTap(this.data,evt)}
      },
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "更多"
          }
        },
        {
          "type": "image",
          "attr": {
            "src": "/common/image/more.svg"
          },
          "classList": [
            "icon-more"
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/card/index.ux?uxType=comp&importNames[]=swiper-view,importNames[]=nav-view,importNames[]=card-sixteen,importNames[]=card-eighteen,importNames[]=card-thirtythree":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/card/index.ux?uxType=comp&importNames[]=swiper-view,importNames[]=nav-view,importNames[]=card-sixteen,importNames[]=card-eighteen,importNames[]=card-thirtythree ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "block",
  "attr": {},
  "children": [
    {
      "type": "block",
      "attr": {},
      "repeat": {
        "exp": function () {return this.list},
        "key": "index",
        "value": "item"
      },
      "children": [
        {
          "type": "list-item",
          "attr": {
            "type": "swiper"
          },
          "shown": function () {return this.item.type_id===this.cardType.SLIDER},
          "children": [
            {
              "type": "swiper-view",
              "attr": {
                "data": function () {return this.item.items}
              }
            }
          ]
        },
        {
          "type": "list-item",
          "attr": {
            "type": "nav"
          },
          "classList": [
            "nav_container"
          ],
          "shown": function () {return this.item.type_id===this.cardType.NAV},
          "children": [
            {
              "type": "nav-view",
              "attr": {
                "data": function () {return this.item.items}
              }
            }
          ]
        },
        {
          "type": "list-item",
          "attr": {
            "type": "cardEighteen"
          },
          "classList": function () {return ['card_container', this.index===(this.list.length-1)?'none_border':'']},
          "shown": function () {return this.item.type_id===this.cardType.SQUARE_THREE},
          "children": [
            {
              "type": "card-eighteen",
              "attr": {
                "data": function () {return this.item}
              }
            }
          ]
        },
        {
          "type": "list-item",
          "attr": {
            "type": "cardSixteen"
          },
          "classList": function () {return ['card_container', this.index===(this.list.length-1)?'none_border':'']},
          "shown": function () {return this.item.type_id===this.cardType.RECTANGLE_TWO},
          "children": [
            {
              "type": "card-sixteen",
              "attr": {
                "data": function () {return this.item}
              }
            }
          ]
        },
        {
          "type": "list-item",
          "attr": {
            "type": "cardThirtythree"
          },
          "classList": function () {return ['card_container', this.index===(this.list.length-1)?'none_border':'']},
          "shown": function () {return this.item.type_id===this.cardType.SQUARE_TW},
          "children": [
            {
              "type": "card-thirtythree",
              "attr": {
                "data": function () {return this.item}
              }
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/card/s16.ux?uxType=comp&importNames[]=card-header":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/card/s16.ux?uxType=comp&importNames[]=card-header ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "card_wrap"
  ],
  "children": [
    {
      "type": "card-header",
      "attr": {
        "data": function () {return this.data}
      }
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "card_lists"
      ],
      "children": [
        {
          "type": "block",
          "attr": {},
          "repeat": {
            "exp": function () {return this.data.items},
            "value": "item"
          },
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "card_item",
                "s16"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "card_box"
                  ],
                  "events": {
                    "click": function (evt) {this.bindViewTap(this.item,evt)}
                  },
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": function () {return this.item.thumbnail?this.item.thumbnail:this.item.image}
                      },
                      "classList": [
                        "wrap_img"
                      ]
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "description"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.item.title}
                      },
                      "classList": [
                        "title"
                      ]
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.item.sub_title}
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
    }
  ]
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/card/s18.ux?uxType=comp&importNames[]=card-header":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/card/s18.ux?uxType=comp&importNames[]=card-header ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "card_wrap"
  ],
  "children": [
    {
      "type": "card-header",
      "attr": {
        "data": function () {return this.data}
      }
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "card_lists"
      ],
      "children": [
        {
          "type": "block",
          "attr": {},
          "repeat": {
            "exp": function () {return this.data.items},
            "value": "item"
          },
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "card_item",
                "s18"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "card_box"
                  ],
                  "events": {
                    "click": function (evt) {this.bindViewTap(this.item,evt)}
                  },
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": function () {return this.item.thumbnail?this.item.thumbnail:this.item.image}
                      },
                      "classList": [
                        "wrap_img"
                      ]
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "description"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.item.title}
                      },
                      "classList": [
                        "title"
                      ]
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.item.sub_title}
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
    }
  ]
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/card/s33.ux?uxType=comp&importNames[]=card-header":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/card/s33.ux?uxType=comp&importNames[]=card-header ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "card_wrap"
  ],
  "children": [
    {
      "type": "card-header",
      "attr": {
        "data": function () {return this.data}
      }
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "card_lists"
      ],
      "children": [
        {
          "type": "block",
          "attr": {},
          "repeat": {
            "exp": function () {return this.data.items},
            "value": "item"
          },
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "card_item",
                "s33"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "card_box"
                  ],
                  "events": {
                    "click": function (evt) {this.bindViewTap(this.item,evt)}
                  },
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": function () {return this.item.thumbnail?this.item.thumbnail:this.item.image}
                      },
                      "classList": [
                        "wrap_img"
                      ]
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "description"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.item.title}
                      },
                      "classList": [
                        "title"
                      ]
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.item.sub_title}
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
    }
  ]
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

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/loading/index.ux?uxType=comp&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/loading/index.ux?uxType=comp& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "wrap_loading"
  ],
  "children": [
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
            "src": "http://c2.h54hterh.top/manage/thumbnail/7d4d21c0f604ccc7f984c4950265cc03.gif"
          }
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

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/nav/index.ux?uxType=comp&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/nav/index.ux?uxType=comp& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "nav-box"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "nav"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "nav-lists"
          ],
          "children": [
            {
              "type": "block",
              "attr": {},
              "repeat": {
                "exp": function () {return this.data},
                "value": "item"
              },
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "item"
                  ],
                  "events": {
                    "click": function (evt) {this.bindViewTap(this.item,evt)}
                  },
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": function () {return this.item.image}
                      },
                      "classList": [
                        "item-cion"
                      ]
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.item.title}
                      },
                      "shown": function () {return this.item.title}
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/swiper/index.ux?uxType=comp&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/swiper/index.ux?uxType=comp& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "swiper-container"
  ],
  "children": [
    {
      "type": "stack",
      "attr": {},
      "children": [
        {
          "type": "swiper",
          "attr": {
            "autoplay": "true",
            "indicator": "false",
            "interval": "2000",
            "loop": "true"
          },
          "classList": [
            "swiper"
          ],
          "events": {
            "change": "swiperChange"
          },
          "children": [
            {
              "type": "block",
              "attr": {},
              "repeat": {
                "exp": function () {return this.data},
                "key": "index",
                "value": "item"
              },
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": function () {return this.item.image}
                  },
                  "classList": [
                    "wrap-img"
                  ],
                  "events": {
                    "click": function (evt) {this.bindViewTap(this.item,evt)}
                  }
                }
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "dots"
          ],
          "children": [
            {
              "type": "block",
              "attr": {},
              "repeat": {
                "exp": function () {return this.data},
                "key": "index",
                "value": "item"
              },
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": function () {return ['dot', this.index===this.swiperCurrent?'active':'']}
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/tab/index.ux?uxType=comp&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/tab/index.ux?uxType=comp& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "footer",
    "menu_wrap"
  ],
  "children": [
    {
      "type": "block",
      "attr": {},
      "shown": function () {return this.tabBar.tabs},
      "repeat": {
        "exp": function () {return this.tabBar.tabs},
        "key": "index",
        "value": "item"
      },
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "menu-item"
          ],
          "events": {
            "click": function (evt) {this.clickHandler(this.index,evt)}
          },
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return this.currentIndex===this.index?this.item.active_icon:this.item.default_icon}
              },
              "classList": [
                "icon"
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "tilte"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.item.title}
                  },
                  "style": {
                    "color": function () {return this.currentIndex===this.index?this.tabBar.active_color:this.tabBar.color}
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/pages/home/index.ux?uxType=page&importNames[]=v-tabs,importNames[]=min-play,importNames[]=music-page,importNames[]=video-page,importNames[]=news-page":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/pages/home/index.ux?uxType=page&importNames[]=v-tabs,importNames[]=min-play,importNames[]=music-page,importNames[]=video-page,importNames[]=news-page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "page_container"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "home_content"
      ],
      "children": [
        {
          "type": "div",
          "attr": {
            "show": function () {return this.currentIndex===0}
          },
          "classList": [
            "item_content"
          ],
          "children": [
            {
              "type": "music-page",
              "attr": {}
            }
          ]
        },
        {
          "type": "div",
          "attr": {
            "show": function () {return this.currentIndex===1}
          },
          "classList": [
            "item_content"
          ],
          "children": [
            {
              "type": "video-page",
              "attr": {}
            }
          ]
        },
        {
          "type": "div",
          "attr": {
            "show": function () {return this.currentIndex===2}
          },
          "classList": [
            "item_content"
          ],
          "children": [
            {
              "type": "news-page",
              "attr": {
                "newsChannels": function () {return this.newsChannels}
              }
            }
          ]
        }
      ]
    },
    {
      "type": "v-tabs",
      "attr": {
        "currentIndex": function () {return this.currentIndex},
        "tabBar": function () {return this.tabBar}
      }
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

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/pages/music/index.ux?uxType=comp&importNames[]=card,importNames[]=loading-view":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/pages/music/index.ux?uxType=comp&importNames[]=card,importNames[]=loading-view ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "video-page"
  ],
  "children": [
    {
      "type": "refresh",
      "attr": {
        "refreshing": function () {return this.isRefresh}
      },
      "events": {
        "refresh": "onPullDownRefresh"
      },
      "children": [
        {
          "type": "list",
          "attr": {},
          "classList": [
            "list"
          ],
          "children": [
            {
              "type": "card",
              "attr": {
                "list": function () {return this.list}
              },
              "shown": function () {return this.list.length}
            }
          ]
        },
        {
          "type": "loading-view",
          "attr": {},
          "shown": function () {return !this.list.length}
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/pages/news/index.ux?uxType=comp&importNames[]=tab-item,importNames[]=loading-view":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/pages/news/index.ux?uxType=comp&importNames[]=tab-item,importNames[]=loading-view ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "news-page"
  ],
  "children": [
    {
      "type": "tabs",
      "attr": {},
      "events": {
        "change": "changeTabIndex"
      },
      "shown": function () {return this.newsChannels.length},
      "children": [
        {
          "type": "tab-bar",
          "attr": {},
          "classList": [
            "tab-bar"
          ],
          "children": [
            {
              "type": "stack",
              "attr": {},
              "classList": [
                "tab-item-warp"
              ],
              "repeat": {
                "exp": function () {return this.newsChannels},
                "key": "index",
                "value": "item"
              },
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.item.title}
                  },
                  "classList": function () {return ['tab-item', this.index===this.currentIndex?'active':'']}
                },
                {
                  "type": "div",
                  "attr": {},
                  "shown": function () {return this.index===this.currentIndex},
                  "classList": [
                    "line"
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "tab-content",
          "attr": {},
          "classList": [
            "tab-content"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "tab-content-section"
              ],
              "repeat": {
                "exp": function () {return this.newsChannels},
                "key": "index",
                "value": "item"
              },
              "children": [
                {
                  "type": "tab-item",
                  "attr": {
                    "cid": function () {return this.item.cid}
                  },
                  "shown": function () {return this.item.show}
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "loading-view",
      "attr": {},
      "shown": function () {return !this.newsChannels.length}
    }
  ]
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/pages/news/tab-item.ux?uxType=comp&importNames[]=load-more":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/pages/news/tab-item.ux?uxType=comp&importNames[]=load-more ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "list_page",
    "page_container"
  ],
  "children": [
    {
      "type": "refresh",
      "attr": {
        "refreshing": function () {return this.isRefresh}
      },
      "events": {
        "refresh": "onPullDownRefresh"
      },
      "children": [
        {
          "type": "list",
          "attr": {},
          "classList": [
            "list_wrap"
          ],
          "events": {
            "scrollbottom": "loadMoreData"
          },
          "children": [
            {
              "type": "block",
              "attr": {},
              "repeat": {
                "exp": function () {return this.list},
                "key": "index",
                "value": "item"
              },
              "children": [
                {
                  "type": "list-item",
                  "attr": {
                    "type": function () {return this.index}
                  },
                  "shown": function () {return this.item.style_type===1||this.item.style_type===3||this.item.style_type===5},
                  "classList": [
                    "card",
                    "s3"
                  ],
                  "events": {
                    "click": function (evt) {this.bindViewTap(this.item,evt)}
                  },
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "card_wrap"
                      ],
                      "children": [
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "content"
                          ],
                          "children": [
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return this.item.title}
                              },
                              "classList": [
                                "title"
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
                                  "type": "image",
                                  "attr": {
                                    "src": "http://c2.h54hterh.top/manage/thumbnail/9fd78f08b5c64a727346ae9ff4390309.png"
                                  },
                                  "shown": function () {return this.index<5},
                                  "classList": [
                                    "icon"
                                  ]
                                },
                                {
                                  "type": "text",
                                  "attr": {
                                    "value": function () {return this.item.source_name}
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "wrap_image"
                          ],
                          "children": [
                            {
                              "type": "image",
                              "attr": {
                                "src": function () {return this.item.thumbnails[0].url}
                              },
                              "classList": [
                                "image"
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
              }
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/pages/video/index.ux?uxType=comp&importNames[]=card,importNames[]=loading-view":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/pages/video/index.ux?uxType=comp&importNames[]=card,importNames[]=loading-view ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "video-page"
  ],
  "children": [
    {
      "type": "refresh",
      "attr": {
        "refreshing": function () {return this.isRefresh}
      },
      "events": {
        "refresh": "onPullDownRefresh"
      },
      "children": [
        {
          "type": "list",
          "attr": {},
          "classList": [
            "list"
          ],
          "children": [
            {
              "type": "card",
              "attr": {
                "list": function () {return this.list}
              },
              "shown": function () {return this.list.length}
            }
          ]
        },
        {
          "type": "loading-view",
          "attr": {},
          "shown": function () {return !this.list.length}
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/access-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/pages/home/index.ux?uxType=page":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/access-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/pages/home/index.ux?uxType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _home = __webpack_require__(/*! ../../api/home */ "./src/api/home.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  "private": {
    isplaying: true,
    minplayVisible: false,
    tabBar: {},
    newsChannels: [],
    currentIndex: 1
  },
  onInit: function onInit() {
    this.audio = this.$app.$def.audio;
    this.$app.$def.storage.get({
      key: 'appConfig',
      success: function success(data) {
        if (data) {
          var _appConfig = JSON.parse(data);

          this.tabBar = _appConfig.tab_bar;
          this.newsChannels = _appConfig.tab_bar.tabs[2].channels;
        }
      }
    });
    this.fetchData();
    this.$on('changeCurrentIndex', this._changeCurrentIndex);
  },
  fetchData: function () {
    var _fetchData = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var _this = this;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _home.appConfig)().then(function (res) {
                var appConfig = res.data.app_config;

                _this.$app.$def.storage.set({
                  key: 'appConfig',
                  value: JSON.stringify(appConfig)
                });

                _this.tabBar = appConfig.tab_bar;
                _this.newsChannels = appConfig.tab_bar.tabs[2].channels;
              })["catch"](function (res) {
                _this.$app.$def.prompt.showToast({
                  message: '服务器异常,一会再试试！'
                });
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function fetchData() {
      return _fetchData.apply(this, arguments);
    }

    return fetchData;
  }(),
  onShow: function onShow() {
    this.$app.$def.audioShow.call(this);
    $umeng_stat.resume(this);
  },
  onHide: function onHide() {
    this.$app.$def.audioHide.call(this);
    $umeng_stat.pause(this);
  },
  onDestroy: function onDestroy() {
    this.$app.$def.audioHide.call(this);
  },
  onMenuPress: function onMenuPress() {
    this.$app.$def.showMenu();
  },
  _changeCurrentIndex: function _changeCurrentIndex(options) {
    var index = options.detail;
    this.currentIndex = index;
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

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/card/card-header.ux?uxType=comp":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/card/card-header.ux?uxType=comp ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  props: {
    data: {
      type: Object,
      "default": []
    }
  },
  data: function data() {
    return {};
  },
  onInit: function onInit() {},
  bindViewTap: function bindViewTap(option) {
    this.$dispatch('bindViewTap', option);
  }
};
exports["default"] = _default;}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/card/index.ux?uxType=comp":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/card/index.ux?uxType=comp ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _cardType = _interopRequireDefault(__webpack_require__(/*! ../../common/js/cardType */ "./src/common/js/cardType.js"));

var _getUrl = _interopRequireDefault(__webpack_require__(/*! ../../common/js/getUrl */ "./src/common/js/getUrl.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  props: {
    list: {
      type: Array,
      "default": []
    }
  },
  data: function data() {
    return {
      cardType: _cardType["default"]
    };
  },
  onInit: function onInit() {
    this.$on('bindViewTap', this._bindViewTap);
  },
  _bindViewTap: function _bindViewTap(option) {
    var data = option.detail;

    if (!data.target) {
      return;
    }

    var relativePath = _getUrl["default"].relativePath(data.target);

    var params = Object.assign({}, {
      title: data.title
    }, _getUrl["default"].paramsFromURL(data.target));
    this.$app.$def.router.push({
      uri: "/pages".concat(relativePath),
      params: params
    });
  }
};
exports["default"] = _default;}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/card/s16.ux?uxType=comp":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/card/s16.ux?uxType=comp ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  props: {
    data: {
      type: Object,
      "default": {}
    }
  },
  data: function data() {
    return {};
  },
  onInit: function onInit() {},
  bindViewTap: function bindViewTap(option) {
    this.$dispatch('bindViewTap', option);
  }
};
exports["default"] = _default;}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/card/s18.ux?uxType=comp":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/card/s18.ux?uxType=comp ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  props: {
    data: {
      type: Object,
      "default": {}
    }
  },
  data: function data() {
    return {};
  },
  onInit: function onInit() {},
  bindViewTap: function bindViewTap(option) {
    this.$dispatch('bindViewTap', option);
  }
};
exports["default"] = _default;}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/card/s33.ux?uxType=comp":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/card/s33.ux?uxType=comp ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  props: {
    data: {
      type: Object,
      "default": {}
    }
  },
  data: function data() {
    return {};
  },
  onInit: function onInit() {},
  bindViewTap: function bindViewTap(option) {
    this.$dispatch('bindViewTap', option);
  }
};
exports["default"] = _default;}

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

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/loading/index.ux?uxType=comp":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/loading/index.ux?uxType=comp ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  props: {},
  data: function data() {
    return {};
  },
  onInit: function onInit() {}
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

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/nav/index.ux?uxType=comp":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/nav/index.ux?uxType=comp ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  props: {
    data: {
      type: Array,
      "default": []
    }
  },
  data: function data() {
    return {};
  },
  onInit: function onInit() {},
  bindViewTap: function bindViewTap(option) {
    this.$dispatch('bindViewTap', option);
  }
};
exports["default"] = _default;}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/swiper/index.ux?uxType=comp":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/swiper/index.ux?uxType=comp ***!
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
    data: {
      type: Array,
      "default": []
    }
  },
  data: function data() {
    return {
      swiperCurrent: 0
    };
  },
  onInit: function onInit() {},
  bindViewTap: function bindViewTap(option) {
    this.$dispatch('bindViewTap', option);
  },
  swiperChange: function swiperChange(e) {
    this.swiperCurrent = e.index;
  }
};
exports["default"] = _default;}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/tab/index.ux?uxType=comp":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/tab/index.ux?uxType=comp ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default2 = {
  props: {
    tabBar: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    currentIndex: {
      type: Number,
      "default": 1
    }
  },
  data: function data() {
    return {};
  },
  clickHandler: function clickHandler(index) {
    this.$dispatch('changeCurrentIndex', index);
  },
  onInit: function onInit() {}
};
exports["default"] = _default2;}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/pages/music/index.ux?uxType=comp":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/pages/music/index.ux?uxType=comp ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _home = __webpack_require__(/*! ../../api/home */ "./src/api/home.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  props: {},
  data: function data() {
    return {
      isRefresh: false,
      list: []
    };
  },
  onInit: function onInit() {
    this.getList();
  },
  getList: function () {
    var _getList = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var _this = this;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _home.getMusicList)().then(function (res) {
                _this.list = res.data;
              })["catch"](function (res) {
                _this.isRefresh = false;

                _this.$app.$def.prompt.showToast({
                  message: '服务器异常,一会再试试！'
                });
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function getList() {
      return _getList.apply(this, arguments);
    }

    return getList;
  }(),
  onPullDownRefresh: function onPullDownRefresh(e) {
    var _this2 = this;

    this.isRefresh = true;
    this.getList().then(function () {
      _this2.isRefresh = false;

      _this2.$app.$def.prompt.showToast({
        message: '数据更新成功'
      });
    });
  }
};
exports["default"] = _default;}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/pages/news/index.ux?uxType=comp":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/pages/news/index.ux?uxType=comp ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _news = __webpack_require__(/*! ../../api/news.js */ "./src/api/news.js");

var _default2 = {
  props: {
    newsChannels: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      currentIndex: 0,
      list: []
    };
  },
  onInit: function onInit() {},
  changeTabIndex: function changeTabIndex(e) {
    var index = e.index;
    var item = Object.assign({}, this.newsChannels[index]);
    item.show = true;
    this.newsChannels.splice(index, 1, item);
    this.currentIndex = index;
  }
};
exports["default"] = _default2;}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/pages/news/tab-item.ux?uxType=comp":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/pages/news/tab-item.ux?uxType=comp ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _news = __webpack_require__(/*! ../../api/news.js */ "./src/api/news.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  "protected": {
    cid: ''
  },
  data: {
    isLoading: false,
    hasMore: true,
    page_token: 1,
    isRefresh: false,
    list: []
  },
  onReady: function onReady() {
    this.getList('down');
  },
  getList: function () {
    var _getList = _asyncToGenerator(regeneratorRuntime.mark(function _callee(type) {
      var _this = this;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (type === 'down') {
                this.page_token = 1;
              }

              this.isLoading = true;
              _context.next = 4;
              return (0, _news.getNewsList)(this.cid, this.page_token).then(function (res) {
                _this.isLoading = false;
                var list = res.data.articles;
                _this.page_token++;

                if (list.length) {
                  _this.hasMore = true;
                  type === 'down' ? _this.list = list : _this.list = _this.list.concat(list);
                } else {
                  _this.hasMore = false;
                }
              })["catch"](function (res) {
                _this.isLoading = false;
                _this.isRefresh = false;

                _this.$app.$def.prompt.showToast({
                  message: '服务器异常,一会再试试！'
                });
              });

            case 4:
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
  bindViewTap: function bindViewTap(option) {
    this.$app.$def.webview.loadUrl({
      url: option.url
    });
  },
  onPullDownRefresh: function onPullDownRefresh(e) {
    var _this2 = this;

    this.isRefresh = true;
    this.getList('down').then(function () {
      _this2.isRefresh = false;

      _this2.$app.$def.prompt.showToast({
        message: '数据更新成功'
      });
    });
  },
  loadMoreData: function loadMoreData() {
    if (this.isLoading && !this.hasMore) {
      return;
    }

    this.getList('up');
  },
  onMenuPress: function onMenuPress() {
    this.$app.$def.showMenu();
  }
};
exports["default"] = _default;}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/pages/video/index.ux?uxType=comp":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/pages/video/index.ux?uxType=comp ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _home = __webpack_require__(/*! ../../api/home */ "./src/api/home.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  props: {},
  data: function data() {
    return {
      isRefresh: false,
      list: []
    };
  },
  onInit: function onInit() {
    this.getList();
  },
  getList: function () {
    var _getList = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var _this = this;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _home.getVideoList)().then(function (res) {
                _this.list = res.data;
              })["catch"](function (res) {
                _this.isRefresh = false;

                _this.$app.$def.prompt.showToast({
                  message: '服务器异常,一会再试试！'
                });
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function getList() {
      return _getList.apply(this, arguments);
    }

    return getList;
  }(),
  onPullDownRefresh: function onPullDownRefresh(e) {
    var _this2 = this;

    this.isRefresh = true;
    this.getList().then(function () {
      _this2.isRefresh = false;

      _this2.$app.$def.prompt.showToast({
        message: '数据更新成功'
      });
    });
  }
};
exports["default"] = _default;}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/card/card-header.ux?uxType=comp&name=card-header":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/card/card-header.ux?uxType=comp&name=card-header ***!
  \*******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./card-header.ux?uxType=comp& */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/card/card-header.ux?uxType=comp&")
var $app_style$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!less-loader!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./card-header.ux?uxType=comp */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/card/card-header.ux?uxType=comp")
var $app_script$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!../../../node_modules/babel-loader?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./card-header.ux?uxType=comp */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/card/card-header.ux?uxType=comp")

$app_define$('@app-component/card-header', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/card/index.ux?uxType=comp&name=card":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/card/index.ux?uxType=comp&name=card ***!
  \******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!../swiper/index.ux?uxType=comp&name=swiper-view */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/swiper/index.ux?uxType=comp&name=swiper-view")
__webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!../nav/index.ux?uxType=comp&name=nav-view */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/nav/index.ux?uxType=comp&name=nav-view")
__webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./s16.ux?uxType=comp&name=card-sixteen */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/card/s16.ux?uxType=comp&name=card-sixteen")
__webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./s18.ux?uxType=comp&name=card-eighteen */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/card/s18.ux?uxType=comp&name=card-eighteen")
__webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./s33.ux?uxType=comp&name=card-thirtythree */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/card/s33.ux?uxType=comp&name=card-thirtythree")
var $app_template$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=comp&importNames[]=swiper-view,importNames[]=nav-view,importNames[]=card-sixteen,importNames[]=card-eighteen,importNames[]=card-thirtythree */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/card/index.ux?uxType=comp&importNames[]=swiper-view,importNames[]=nav-view,importNames[]=card-sixteen,importNames[]=card-eighteen,importNames[]=card-thirtythree")
var $app_style$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!less-loader!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/card/index.ux?uxType=comp")
var $app_script$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!../../../node_modules/babel-loader?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/card/index.ux?uxType=comp")

$app_define$('@app-component/card', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/card/s16.ux?uxType=comp&name=card-sixteen":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/card/s16.ux?uxType=comp&name=card-sixteen ***!
  \************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./card-header.ux?uxType=comp&name=card-header */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/card/card-header.ux?uxType=comp&name=card-header")
var $app_template$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./s16.ux?uxType=comp&importNames[]=card-header */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/card/s16.ux?uxType=comp&importNames[]=card-header")
var $app_style$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!less-loader!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./s16.ux?uxType=comp */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/card/s16.ux?uxType=comp")
var $app_script$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!../../../node_modules/babel-loader?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./s16.ux?uxType=comp */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/card/s16.ux?uxType=comp")

$app_define$('@app-component/card-sixteen', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/card/s18.ux?uxType=comp&name=card-eighteen":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/card/s18.ux?uxType=comp&name=card-eighteen ***!
  \*************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./card-header.ux?uxType=comp&name=card-header */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/card/card-header.ux?uxType=comp&name=card-header")
var $app_template$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./s18.ux?uxType=comp&importNames[]=card-header */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/card/s18.ux?uxType=comp&importNames[]=card-header")
var $app_style$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!less-loader!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./s18.ux?uxType=comp */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/card/s18.ux?uxType=comp")
var $app_script$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!../../../node_modules/babel-loader?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./s18.ux?uxType=comp */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/card/s18.ux?uxType=comp")

$app_define$('@app-component/card-eighteen', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/card/s33.ux?uxType=comp&name=card-thirtythree":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/card/s33.ux?uxType=comp&name=card-thirtythree ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./card-header.ux?uxType=comp&name=card-header */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/card/card-header.ux?uxType=comp&name=card-header")
var $app_template$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./s33.ux?uxType=comp&importNames[]=card-header */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/card/s33.ux?uxType=comp&importNames[]=card-header")
var $app_style$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!less-loader!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./s33.ux?uxType=comp */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/card/s33.ux?uxType=comp")
var $app_script$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!../../../node_modules/babel-loader?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./s33.ux?uxType=comp */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/card/s33.ux?uxType=comp")

$app_define$('@app-component/card-thirtythree', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


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

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/loading/index.ux?uxType=comp&name=loading-view":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/loading/index.ux?uxType=comp&name=loading-view ***!
  \*****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=comp& */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/loading/index.ux?uxType=comp&")
var $app_style$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!less-loader!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/loading/index.ux?uxType=comp")
var $app_script$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!../../../node_modules/babel-loader?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/loading/index.ux?uxType=comp")

$app_define$('@app-component/loading-view', [], function($app_require$, $app_exports$, $app_module$){
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

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/nav/index.ux?uxType=comp&name=nav-view":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/nav/index.ux?uxType=comp&name=nav-view ***!
  \*********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=comp& */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/nav/index.ux?uxType=comp&")
var $app_style$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!less-loader!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/nav/index.ux?uxType=comp")
var $app_script$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!../../../node_modules/babel-loader?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/nav/index.ux?uxType=comp")

$app_define$('@app-component/nav-view', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/swiper/index.ux?uxType=comp&name=swiper-view":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/swiper/index.ux?uxType=comp&name=swiper-view ***!
  \***************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=comp& */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/swiper/index.ux?uxType=comp&")
var $app_style$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!less-loader!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/swiper/index.ux?uxType=comp")
var $app_script$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!../../../node_modules/babel-loader?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/swiper/index.ux?uxType=comp")

$app_define$('@app-component/swiper-view', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/tab/index.ux?uxType=comp&name=v-tabs":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/tab/index.ux?uxType=comp&name=v-tabs ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=comp& */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/tab/index.ux?uxType=comp&")
var $app_style$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!less-loader!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/tab/index.ux?uxType=comp")
var $app_script$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!../../../node_modules/babel-loader?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/tab/index.ux?uxType=comp")

$app_define$('@app-component/v-tabs', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/pages/music/index.ux?uxType=comp&name=music-page":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/pages/music/index.ux?uxType=comp&name=music-page ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!../../components/card/index.ux?uxType=comp&name=card */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/card/index.ux?uxType=comp&name=card")
__webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!../../components/loading/index.ux?uxType=comp&name=loading-view */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/loading/index.ux?uxType=comp&name=loading-view")
var $app_template$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=comp&importNames[]=card,importNames[]=loading-view */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/pages/music/index.ux?uxType=comp&importNames[]=card,importNames[]=loading-view")
var $app_style$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!less-loader!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/pages/music/index.ux?uxType=comp")
var $app_script$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!../../../node_modules/babel-loader?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/pages/music/index.ux?uxType=comp")

$app_define$('@app-component/music-page', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/pages/news/index.ux?uxType=comp&name=news-page":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/pages/news/index.ux?uxType=comp&name=news-page ***!
  \******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./tab-item.ux?uxType=comp&name=tab-item */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/pages/news/tab-item.ux?uxType=comp&name=tab-item")
__webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!../../components/loading/index.ux?uxType=comp&name=loading-view */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/loading/index.ux?uxType=comp&name=loading-view")
var $app_template$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=comp&importNames[]=tab-item,importNames[]=loading-view */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/pages/news/index.ux?uxType=comp&importNames[]=tab-item,importNames[]=loading-view")
var $app_style$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!less-loader!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/pages/news/index.ux?uxType=comp")
var $app_script$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!../../../node_modules/babel-loader?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/pages/news/index.ux?uxType=comp")

$app_define$('@app-component/news-page', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/pages/news/tab-item.ux?uxType=comp&name=tab-item":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/pages/news/tab-item.ux?uxType=comp&name=tab-item ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!../../components/load-more/index.ux?uxType=comp&name=load-more */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/load-more/index.ux?uxType=comp&name=load-more")
var $app_template$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./tab-item.ux?uxType=comp&importNames[]=load-more */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/pages/news/tab-item.ux?uxType=comp&importNames[]=load-more")
var $app_style$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!less-loader!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./tab-item.ux?uxType=comp */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/pages/news/tab-item.ux?uxType=comp")
var $app_script$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!../../../node_modules/babel-loader?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./tab-item.ux?uxType=comp */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/pages/news/tab-item.ux?uxType=comp")

$app_define$('@app-component/tab-item', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/pages/video/index.ux?uxType=comp&name=video-page":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/pages/video/index.ux?uxType=comp&name=video-page ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!../../components/card/index.ux?uxType=comp&name=card */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/card/index.ux?uxType=comp&name=card")
__webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!../../components/loading/index.ux?uxType=comp&name=loading-view */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/loading/index.ux?uxType=comp&name=loading-view")
var $app_template$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=comp&importNames[]=card,importNames[]=loading-view */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/pages/video/index.ux?uxType=comp&importNames[]=card,importNames[]=loading-view")
var $app_style$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!less-loader!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/pages/video/index.ux?uxType=comp")
var $app_script$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!../../../node_modules/babel-loader?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/pages/video/index.ux?uxType=comp")

$app_define$('@app-component/video-page', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ "./src/api/home.js":
/*!*************************!*\
  !*** ./src/api/home.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getVideoList = getVideoList;
exports.getMusicList = getMusicList;
exports.appConfig = appConfig;

function getVideoList() {
  return $http.get('/v1/card_list', {
    label: "kid_kyy_video_baobaokan"
  });
}

function getMusicList() {
  return $http.get('/v1/card_list', {
    label: "kid_kyy_video_baobaoting"
  });
}

function appConfig(params) {
  return $http.get('/v1/flexibleConfig', {
    vcode: 9527,
    app_id: "b9527"
  });
}

/***/ }),

/***/ "./src/api/news.js":
/*!*************************!*\
  !*** ./src/api/news.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNewsList = getNewsList;

function getNewsList(cid) {
  var page_token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var params = {
    app_id: 9567,
    cid: cid,
    page_token: page_token,
    c: 1
  };
  return $http.get('/v2/article', params);
}

/***/ }),

/***/ "./src/common/js/cardType.js":
/*!***********************************!*\
  !*** ./src/common/js/cardType.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  RECTANGLE_TWO: 16,
  // 二图长方形
  SQUARE_THREE: 18,
  // 三图正方形
  SLIDER: 28,
  // 轮播图
  NAV: 29,
  // 导航栏
  SQUARE_TW: 33 // 二图正方形

};
exports["default"] = _default;

/***/ }),

/***/ "./src/common/js/getUrl.js":
/*!*********************************!*\
  !*** ./src/common/js/getUrl.js ***!
  \*********************************/
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

var getUrl =
/*#__PURE__*/
function () {
  function getUrl() {
    _classCallCheck(this, getUrl);
  }

  _createClass(getUrl, null, [{
    key: "relativePath",
    value: function relativePath(url) {
      var relUrl = this.pathSearch(url);

      if (relUrl.indexOf('?') != -1) {
        relUrl = relUrl.split('?')[0];
      }

      return relUrl;
    }
  }, {
    key: "pathSearch",
    value: function pathSearch(url) {
      var arrUrl = url.split('//');
      var start = arrUrl[1].indexOf('/');
      var relUrl = arrUrl[1].substring(start);
      return relUrl;
    }
  }, {
    key: "paramsFromURL",
    value: function paramsFromURL(url) {
      if ('undefined' == url) {
        return {};
      }

      var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
      var paraObj = {};

      for (var i = 0; i < paraString.length; i++) {
        var j = paraString[i];
        paraObj[j.substring(0, j.indexOf("="))] = j.substring(j.indexOf("=") + 1, j.length);
      }

      return paraObj;
    }
  }]);

  return getUrl;
}();

exports["default"] = getUrl;

/***/ }),

/***/ "./src/pages/home/index.ux?uxType=page":
/*!*********************************************!*\
  !*** ./src/pages/home/index.ux?uxType=page ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!../../components/tab/index.ux?uxType=comp&name=v-tabs */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/tab/index.ux?uxType=comp&name=v-tabs")
__webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!../../components/minplay/index.ux?uxType=comp&name=min-play */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/minplay/index.ux?uxType=comp&name=min-play")
__webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!../music/index.ux?uxType=comp&name=music-page */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/pages/music/index.ux?uxType=comp&name=music-page")
__webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!../video/index.ux?uxType=comp&name=video-page */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/pages/video/index.ux?uxType=comp&name=video-page")
__webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!../news/index.ux?uxType=comp&name=news-page */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/pages/news/index.ux?uxType=comp&name=news-page")
var $app_template$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=page&importNames[]=v-tabs,importNames[]=min-play,importNames[]=music-page,importNames[]=video-page,importNames[]=news-page */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/pages/home/index.ux?uxType=page&importNames[]=v-tabs,importNames[]=min-play,importNames[]=music-page,importNames[]=video-page,importNames[]=news-page")
var $app_style$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!less-loader!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/pages/home/index.ux?uxType=page")
var $app_script$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!../../../node_modules/babel-loader?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/access-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/access-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/pages/home/index.ux?uxType=page")

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