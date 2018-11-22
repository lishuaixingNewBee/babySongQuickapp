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
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
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

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(37)
var $app_style$ = __webpack_require__(38)
var $app_script$ = __webpack_require__(39)

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

/***/ 37:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "video_page",
    "page_container"
  ],
  "children": [
    {
      "type": "stack",
      "attr": {},
      "classList": [
        "video_container"
      ],
      "children": [
        {
          "type": "video",
          "attr": {
            "src": function () {return this.videoList[this.currentIndex].video_src},
            "poster": function () {return this.videoList[this.currentIndex].poster_url},
            "controls": "true",
            "autoplay": "true"
          },
          "shown": function () {return this.videoList.length&&this.isPlay},
          "events": {
            "finish": "bindended"
          }
        },
        {
          "type": "stack",
          "attr": {},
          "classList": [
            "mask"
          ],
          "shown": function () {return !this.isPlay},
          "children": [
            {
              "type": "image",
              "attr": {
                "src": "http://c2.h54hterh.top/manage/thumbnail/01c650ee376e77567f336b3b2ac23f7f.jpeg"
              },
              "classList": [
                "bg"
              ]
            },
            {
              "type": "image",
              "attr": {
                "src": "http://c2.h54hterh.top/manage/thumbnail/b4f6e786166365f446880811447971bb.png"
              },
              "classList": [
                "btn"
              ],
              "events": {
                "click": "play"
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
        "main"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "info"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "detail_1"
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
                      "type": "text",
                      "attr": {
                        "value": function () {return this.album_name}
                      },
                      "classList": [
                        "title"
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "c_desc"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": "动画"
                          },
                          "classList": [
                            "classify"
                          ]
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return '/ ' + (this.source) + ' /'}
                          },
                          "classList": [
                            "source"
                          ]
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return (this.play_count) + '次观看'}
                          },
                          "classList": [
                            "play_count"
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "image",
                  "attr": {
                    "src": "/common/image/wx.svg"
                  },
                  "classList": [
                    "share",
                    "xbtn"
                  ],
                  "events": {
                    "click": "share"
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "detail_2"
              ],
              "shown": function () {return this.description},
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "内容简介"
                  },
                  "classList": [
                    "detail_title"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.description}
                  },
                  "classList": [
                    "detail_info"
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "episode_container"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return '剧集 (' + (this.currentIndex+1) + '/' + (this.videoList.length) + ')'}
                  },
                  "classList": [
                    "title"
                  ]
                },
                {
                  "type": "list",
                  "attr": {
                    "id": "list"
                  },
                  "classList": [
                    "episode_lists"
                  ],
                  "id": "list",
                  "events": {
                    "scrollbottom": "loadMoreData"
                  },
                  "children": [
                    {
                      "type": "block",
                      "attr": {},
                      "repeat": {
                        "exp": function () {return this.videoList},
                        "key": "index",
                        "value": "item"
                      },
                      "children": [
                        {
                          "type": "list-item",
                          "attr": {
                            "type": "episode"
                          },
                          "events": {
                            "click": function (evt) {this.tapItem(this.index,evt)}
                          },
                          "children": [
                            {
                              "type": "stack",
                              "attr": {},
                              "children": [
                                {
                                  "type": "div",
                                  "attr": {},
                                  "classList": [
                                    "episode_item"
                                  ],
                                  "children": [
                                    {
                                      "type": "image",
                                      "attr": {
                                        "src": function () {return this.item.poster_url}
                                      },
                                      "classList": [
                                        "wrap_img"
                                      ]
                                    },
                                    {
                                      "type": "text",
                                      "attr": {
                                        "value": function () {return this.item.title}
                                      },
                                      "classList": [
                                        "text"
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "type": "div",
                                  "attr": {},
                                  "classList": [
                                    "bg"
                                  ]
                                },
                                {
                                  "type": "div",
                                  "attr": {},
                                  "classList": function () {return ['episode_item', this.index===this.currentIndex?'active':'']}
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
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ 38:
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
  ".video_page .video_container": {
    "position": "fixed",
    "width": "750px",
    "height": "421.95px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "video_page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "video_container"
        }
      ]
    }
  },
  ".video_page .video_container .mask": {
    "alignItems": "center",
    "justifyContent": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "video_page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "video_container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "mask"
        }
      ]
    }
  },
  ".video_page .video_container .mask .bg": {
    "width": "100%",
    "height": "100%",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "video_page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "video_container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "mask"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bg"
        }
      ]
    }
  },
  ".video_page .video_container .mask .btn": {
    "width": "120px",
    "height": "120px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "video_page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "video_container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "mask"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "btn"
        }
      ]
    }
  },
  ".video_page .video_container video": {
    "width": "100%",
    "height": "100%",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "video_page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "video_container"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "video"
        }
      ]
    }
  },
  ".video_page .main": {
    "marginTop": "421.95px",
    "flexDirection": "column",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "video_page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "main"
        }
      ]
    }
  },
  ".video_page .main .info": {
    "flexDirection": "column",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "video_page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "main"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "info"
        }
      ]
    }
  },
  ".video_page .main .info .detail_1": {
    "flexDirection": "row",
    "alignItems": "center",
    "paddingTop": "20px",
    "paddingRight": "25px",
    "paddingBottom": "20px",
    "paddingLeft": "25px",
    "borderBottomWidth": "20px",
    "borderTopColor": "#f4f4f4",
    "borderRightColor": "#f4f4f4",
    "borderBottomColor": "#f4f4f4",
    "borderLeftColor": "#f4f4f4",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "video_page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "main"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "detail_1"
        }
      ]
    }
  },
  ".video_page .main .info .detail_1 .left": {
    "flex": 1,
    "flexDirection": "column",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "video_page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "main"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "detail_1"
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
  ".video_page .main .info .detail_1 .left .title": {
    "color": "#333333",
    "fontSize": "36px",
    "fontWeight": "bold",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "video_page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "main"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "detail_1"
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
          "v": "title"
        }
      ]
    }
  },
  ".video_page .main .info .detail_1 .left .c_desc": {
    "marginTop": "5px",
    "marginRight": "0px",
    "marginBottom": "5px",
    "marginLeft": "0px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "video_page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "main"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "detail_1"
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
          "v": "c_desc"
        }
      ]
    }
  },
  ".video_page .main .info .detail_1 .left .c_desc .classify": {
    "color": "#f87c0a",
    "fontSize": "28px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "video_page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "main"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "detail_1"
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
          "v": "c_desc"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "classify"
        }
      ]
    }
  },
  ".video_page .main .info .detail_1 .left .c_desc .source": {
    "color": "#aaaaaa",
    "fontSize": "28px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "video_page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "main"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "detail_1"
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
          "v": "c_desc"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "source"
        }
      ]
    }
  },
  ".video_page .main .info .detail_1 .left .c_desc .play_count": {
    "color": "#aaaaaa",
    "fontSize": "28px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "video_page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "main"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "detail_1"
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
          "v": "c_desc"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "play_count"
        }
      ]
    }
  },
  ".video_page .main .info .detail_1 .xbtn": {
    "height": "60px",
    "width": "60px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "video_page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "main"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "detail_1"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "xbtn"
        }
      ]
    }
  },
  ".video_page .main .info .detail_2": {
    "flexDirection": "column",
    "borderBottomWidth": "20px",
    "borderTopColor": "#f4f4f4",
    "borderRightColor": "#f4f4f4",
    "borderBottomColor": "#f4f4f4",
    "borderLeftColor": "#f4f4f4",
    "paddingTop": "20px",
    "paddingRight": "25px",
    "paddingBottom": "20px",
    "paddingLeft": "25px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "video_page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "main"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "detail_2"
        }
      ]
    }
  },
  ".video_page .main .info .detail_2 .detail_title": {
    "marginTop": "0px",
    "marginRight": "0px",
    "marginBottom": "25px",
    "marginLeft": "0px",
    "color": "#333333",
    "fontSize": "32px",
    "fontWeight": "bold",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "video_page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "main"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "detail_2"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "detail_title"
        }
      ]
    }
  },
  ".video_page .main .info .detail_2 .detail_info": {
    "color": "#333333",
    "fontSize": "26px",
    "lineHeight": "40px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "video_page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "main"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "detail_2"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "detail_info"
        }
      ]
    }
  },
  ".video_page .main .info .episode_container": {
    "height": "300px",
    "flexDirection": "column",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "video_page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "main"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "episode_container"
        }
      ]
    }
  },
  ".video_page .main .info .episode_container .title": {
    "marginTop": "25px",
    "marginRight": "0px",
    "marginBottom": "0px",
    "marginLeft": "25px",
    "color": "#333333",
    "fontSize": "32px",
    "fontWeight": "bold",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "video_page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "main"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "episode_container"
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
  ".video_page .main .info .episode_container .episode_lists": {
    "marginTop": "20px",
    "marginRight": "18px",
    "marginBottom": "20px",
    "marginLeft": "18px",
    "flexDirection": "row",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "video_page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "main"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "episode_container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "episode_lists"
        }
      ]
    }
  },
  ".video_page .main .info .episode_container .episode_lists stack": {
    "height": "300px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "video_page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "main"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "episode_container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "episode_lists"
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
  ".video_page .main .info .episode_container .episode_lists stack .episode_item": {
    "flexDirection": "column",
    "width": "226px",
    "height": "188px",
    "borderTopLeftRadius": "13px",
    "borderTopRightRadius": "13px",
    "marginTop": "0px",
    "marginRight": "7px",
    "marginBottom": "12px",
    "marginLeft": "7px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "video_page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "main"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "episode_container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "episode_lists"
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
          "v": "episode_item"
        }
      ]
    }
  },
  ".video_page .main .info .episode_container .episode_lists stack .episode_item .wrap_img": {
    "width": "100%",
    "height": "127px",
    "borderTopLeftRadius": "13px",
    "borderTopRightRadius": "13px",
    "backgroundColor": "#aaaaaa",
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
          "v": "video_page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "main"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "episode_container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "episode_lists"
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
          "v": "episode_item"
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
  ".video_page .main .info .episode_container .episode_lists stack .episode_item .text": {
    "height": "61px",
    "paddingTop": "0px",
    "paddingRight": "6px",
    "paddingBottom": "0px",
    "paddingLeft": "6px",
    "backgroundColor": "#ffffff",
    "color": "#6c6c78",
    "lineHeight": "61px",
    "textAlign": "center",
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
          "v": "video_page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "main"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "episode_container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "episode_lists"
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
          "v": "episode_item"
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
  ".video_page .main .info .episode_container .episode_lists stack .active": {
    "borderBottomLeftRadius": "8px",
    "borderBottomRightRadius": "8px",
    "borderTopWidth": "6px",
    "borderRightWidth": "6px",
    "borderBottomWidth": "6px",
    "borderLeftWidth": "6px",
    "borderTopColor": "rgba(101,209,212,0.8)",
    "borderRightColor": "rgba(101,209,212,0.8)",
    "borderBottomColor": "rgba(101,209,212,0.8)",
    "borderLeftColor": "rgba(101,209,212,0.8)",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "video_page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "main"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "episode_container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "episode_lists"
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
          "v": "active"
        }
      ]
    }
  },
  ".video_page .main .info .episode_container .episode_lists stack .bg": {
    "backgroundImage": "/common/image/item_bg.png",
    "width": "240px",
    "height": "200px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "video_page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "main"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "episode_container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "episode_lists"
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
          "v": "bg"
        }
      ]
    }
  }
}

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _album = __webpack_require__(10);

var _util = __webpack_require__(8);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
  protected: {
    defaultIndex: '',
    title: '',
    album_id: ''
  },
  private: {
    isPlay: false,
    album_name: '',
    thumbnail: '',
    source: '',
    description: '',
    play_count: '',
    currentIndex: 0,
    videoList: []
  },
  onInit: function onInit() {
    this.$page.setTitleBar({ text: decodeURIComponent(this.title) });
    if (this.defaultIndex) {
      this.currentIndex = this.defaultIndex;
    }
    this.getList();
  },
  onShow: function onShow() {
    $umeng_stat.resume(this);
  },
  onHide: function onHide() {
    $umeng_stat.pause(this);
  },
  play: function play() {
    var _this = this;

    if (this.$app.$def.globalPlay) {
      this.isPlay = true;
    } else {
      this.$app.$def.network.subscribe({
        callback: function callback(data) {
          if (data.type === 'wifi') {
            _this.isPlay = true;
          } else {
            _this.$app.$def.prompt.showDialog({
              message: '您正在使用手机流量播放，是否继续？',
              buttons: [{
                text: '确认',
                color: '#333333'
              }, {
                text: '取消',
                color: '#989898'
              }],
              success: function success(data) {
                if (data.index === 1) {
                  return;
                } else {
                  _this.isPlay = true;
                  _this.$app.$def.globalPlay = true;
                }
              }
            });
          }
        }
      });
    }
  },
  getList: function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var _this2 = this;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _album.getAlbum)(this.album_id).then(function (res) {
                var data = res.data;
                _this2.album_name = data.album_name;
                _this2.thumbnail = data.thumbnail || data.image;
                _this2.source = '熊宝儿歌故事';
                _this2.description = data.description;
                data.play_count ? _this2.play_count = _util2.default.numW(data.play_count) : _this2.play_count = _util2.default.numW(_util2.default.randomNum(5000, 999999));
                _this2.videoList = data.artilces.map(function (v) {
                  return {
                    title: v.title,
                    poster_url: v.poster_url,
                    video_src: v.videos[0].video_src
                  };
                });

                _this2.$forceUpdate();
                _this2.goIndex();
              }).catch(function (res) {
                _this2.$app.$def.prompt.showToast({
                  message: '网络异常,一会再试试！'
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
  bindended: function bindended() {
    if (this.currentIndex < this.videoList.length - 1) {
      this.currentIndex = this.currentIndex + 1;
      this.goIndex();
    }
  },
  tapItem: function tapItem(index) {
    this.currentIndex = index;
    this.goIndex();
  },
  goIndex: function goIndex() {
    this.$element('list').scrollTo({ index: this.currentIndex, smooth: true });
  },
  share: function share() {
    this.$app.$def.shareWx();
  },
  onMenuPress: function onMenuPress() {
    this.$app.$def.showMenu();
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

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = function () {
    function util() {
        _classCallCheck(this, util);
    }

    _createClass(util, null, [{
        key: 'randomNum',
        value: function randomNum(Min, Max) {
            // 随机数
            var Range = Max - Min;
            var Rand = Math.random();
            var num = Min + Math.round(Rand * Range); //四舍五入
            return num;
        }
    }, {
        key: 'numW',
        value: function numW(num) {
            if (num >= 10000) {
                return Math.round(num / 10000 * 100) / 100 + '万';
            }
            return num;
        }
    }, {
        key: 'formatSeconds',
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
        key: 'setConsole',
        value: function setConsole() {
            var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'this is console!';
            var isOneLine = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            var author = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GordanLee(github.com/lishuaixingNewBee)';

            console.warn(text + '  ---  ' + author);
        }
    }]);

    return util;
}();

exports.default = util;

util.setConsole('李帅醒Plus+狗蛋实验室-基于quickapp开发');

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