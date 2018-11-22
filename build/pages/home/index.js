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
/******/ 	return __webpack_require__(__webpack_require__.s = 45);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(1)
var $app_style$ = __webpack_require__(2)
var $app_script$ = __webpack_require__(3)

$app_define$('@app-component/min-play', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 1 */
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
/* 2 */
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
/* 3 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    isplaying: {
      type: Boolean,
      default: true
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
};}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(5)
var $app_style$ = __webpack_require__(6)
var $app_script$ = __webpack_require__(7)

$app_define$('@app-component/load-more', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 5 */
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
/* 6 */
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
/* 7 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    hasMore: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {};
  }
};}

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(11)
var $app_style$ = __webpack_require__(12)
var $app_script$ = __webpack_require__(13)

$app_define$('@app-component/loading-view', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 10 */,
/* 11 */
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
/* 12 */
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
/* 13 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {},
  data: function data() {
    return {};
  },
  onInit: function onInit() {}
};}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(60)
var $app_style$ = __webpack_require__(61)
var $app_script$ = __webpack_require__(62)

$app_define$('@app-component/card-header', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 15 */
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
        label: 'kid_kyy_video_baobaokan'
    });
}
function getMusicList() {
    return $http.get('/v1/card_list', {
        label: 'kid_kyy_video_baobaoting'
    });
}
function appConfig(params) {
    return $http.get('/v1/flexibleConfig', {
        vcode: 9527,
        app_id: 'b9527'
    });
}

/***/ }),
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(51)
__webpack_require__(55)
__webpack_require__(59)
__webpack_require__(66)
__webpack_require__(70)
var $app_template$ = __webpack_require__(74)
var $app_style$ = __webpack_require__(75)
var $app_script$ = __webpack_require__(76)

$app_define$('@app-component/card', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 18 */
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
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(46)
__webpack_require__(0)
__webpack_require__(50)
__webpack_require__(82)
__webpack_require__(86)
var $app_template$ = __webpack_require__(94)
var $app_style$ = __webpack_require__(95)
var $app_script$ = __webpack_require__(96)

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(47)
var $app_style$ = __webpack_require__(48)
var $app_script$ = __webpack_require__(49)

$app_define$('@app-component/v-tabs', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 47 */
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
/* 48 */
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
/* 49 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    tabBar: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    currentIndex: {
      type: Number,
      default: 1
    }
  },
  data: function data() {
    return {};
  },
  clickHandler: function clickHandler(index) {
    this.$dispatch('changeCurrentIndex', index);
  },
  onInit: function onInit() {}
};}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(17)
__webpack_require__(9)
var $app_template$ = __webpack_require__(79)
var $app_style$ = __webpack_require__(80)
var $app_script$ = __webpack_require__(81)

$app_define$('@app-component/music-page', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(52)
var $app_style$ = __webpack_require__(53)
var $app_script$ = __webpack_require__(54)

$app_define$('@app-component/swiper-view', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 52 */
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
/* 53 */
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
/* 54 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    data: {
      type: Array,
      default: []
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
};}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(56)
var $app_style$ = __webpack_require__(57)
var $app_script$ = __webpack_require__(58)

$app_define$('@app-component/nav-view', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 56 */
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
/* 57 */
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
/* 58 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  data: function data() {
    return {};
  },
  onInit: function onInit() {},
  bindViewTap: function bindViewTap(option) {
    this.$dispatch('bindViewTap', option);
  }
};}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(14)
var $app_template$ = __webpack_require__(63)
var $app_style$ = __webpack_require__(64)
var $app_script$ = __webpack_require__(65)

$app_define$('@app-component/card-sixteen', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 60 */
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
            "src": "../../common/image/more.svg"
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
/* 61 */
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
/* 62 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        data: {
            type: Object,
            default: []
        }
    },
    data: function data() {
        return {};
    },
    onInit: function onInit() {},
    bindViewTap: function bindViewTap(option) {
        this.$dispatch('bindViewTap', option);
    }
};}

/***/ }),
/* 63 */
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
/* 64 */
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
/* 65 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        data: {
            type: Object,
            default: {}
        }
    },
    data: function data() {
        return {};
    },
    onInit: function onInit() {},
    bindViewTap: function bindViewTap(option) {
        this.$dispatch('bindViewTap', option);
    }
};}

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(14)
var $app_template$ = __webpack_require__(67)
var $app_style$ = __webpack_require__(68)
var $app_script$ = __webpack_require__(69)

$app_define$('@app-component/card-eighteen', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 67 */
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
/* 68 */
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
/* 69 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        data: {
            type: Object,
            default: {}
        }
    },
    data: function data() {
        return {};
    },
    onInit: function onInit() {},
    bindViewTap: function bindViewTap(option) {
        this.$dispatch('bindViewTap', option);
    }
};}

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(14)
var $app_template$ = __webpack_require__(71)
var $app_style$ = __webpack_require__(72)
var $app_script$ = __webpack_require__(73)

$app_define$('@app-component/card-thirtythree', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 71 */
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
/* 72 */
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
/* 73 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        data: {
            type: Object,
            default: {}
        }
    },
    data: function data() {
        return {};
    },
    onInit: function onInit() {},
    bindViewTap: function bindViewTap(option) {
        this.$dispatch('bindViewTap', option);
    }
};}

/***/ }),
/* 74 */
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
/* 75 */
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
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cardType = __webpack_require__(77);

var _cardType2 = _interopRequireDefault(_cardType);

var _getUrl = __webpack_require__(78);

var _getUrl2 = _interopRequireDefault(_getUrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    list: {
      type: Array,
      default: []
    }
  },
  data: function data() {
    return {
      cardType: _cardType2.default
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
    var relativePath = _getUrl2.default.relativePath(data.target);
    var params = Object.assign({}, { title: data.title }, _getUrl2.default.paramsFromURL(data.target));

    this.$app.$def.router.push({
      uri: '/pages' + relativePath,
      params: params
    });
  }
};}

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  RECTANGLE_TWO: 16, // 二图长方形
  SQUARE_THREE: 18, // 三图正方形
  SLIDER: 28, // 轮播图
  NAV: 29, // 导航栏
  SQUARE_TW: 33 // 二图正方形
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var getUrl = function () {
    function getUrl() {
        _classCallCheck(this, getUrl);
    }

    _createClass(getUrl, null, [{
        key: 'relativePath',
        value: function relativePath(url) {
            var relUrl = this.pathSearch(url);
            if (relUrl.indexOf('?') != -1) {
                relUrl = relUrl.split('?')[0];
            }
            return relUrl;
        }
    }, {
        key: 'pathSearch',
        value: function pathSearch(url) {
            var arrUrl = url.split('//');
            var start = arrUrl[1].indexOf('/');
            var relUrl = arrUrl[1].substring(start);
            return relUrl;
        }
    }, {
        key: 'paramsFromURL',
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

exports.default = getUrl;

/***/ }),
/* 79 */
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
/* 80 */
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
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _home = __webpack_require__(15);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
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
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var _this = this;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _home.getMusicList)().then(function (res) {
                _this.list = res.data;
              }).catch(function (res) {
                _this.isRefresh = false;
                _this.$app.$def.prompt.showToast({
                  message: '服务器异常,一会再试试！'
                });
              });

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function getList() {
      return _ref.apply(this, arguments);
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
};}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(17)
__webpack_require__(9)
var $app_template$ = __webpack_require__(83)
var $app_style$ = __webpack_require__(84)
var $app_script$ = __webpack_require__(85)

$app_define$('@app-component/video-page', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 83 */
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
/* 84 */
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
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _home = __webpack_require__(15);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
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
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var _this = this;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _home.getVideoList)().then(function (res) {
                _this.list = res.data;
              }).catch(function (res) {
                _this.isRefresh = false;
                _this.$app.$def.prompt.showToast({
                  message: '服务器异常,一会再试试！'
                });
              });

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function getList() {
      return _ref.apply(this, arguments);
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
};}

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(87)
__webpack_require__(9)
var $app_template$ = __webpack_require__(91)
var $app_style$ = __webpack_require__(92)
var $app_script$ = __webpack_require__(93)

$app_define$('@app-component/news-page', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(4)
var $app_template$ = __webpack_require__(88)
var $app_style$ = __webpack_require__(89)
var $app_script$ = __webpack_require__(90)

$app_define$('@app-component/tab-item', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 88 */
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
/* 89 */
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
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _news = __webpack_require__(18);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
    protected: {
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
        var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(type) {
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
                            }).catch(function (res) {
                                _this.isLoading = false;
                                _this.isRefresh = false;
                                _this.$app.$def.prompt.showToast({
                                    message: '服务器异常,一会再试试！'
                                });
                            });

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function getList(_x) {
            return _ref.apply(this, arguments);
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
};}

/***/ }),
/* 91 */
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
/* 92 */
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
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _news = __webpack_require__(18);

exports.default = {
  props: {
    newsChannels: {
      type: Array,
      default: function _default() {
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
};}

/***/ }),
/* 94 */
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
/* 95 */
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
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _home = __webpack_require__(15);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
  private: {
    isplaying: true,
    minplayVisible: false,
    tabBar: {},
    newsChannels: [],
    currentIndex: 1 },
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
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
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
              }).catch(function (res) {
                _this.$app.$def.prompt.showToast({
                  message: '服务器异常,一会再试试！'
                });
              });

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function fetchData() {
      return _ref.apply(this, arguments);
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


var moduleOwn = exports.default || module.exports;
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
        moduleOwn._descriptor[name] = { access: acc };
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
    }
  });
}}

/***/ })
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map