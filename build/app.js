(function(){
  
  var createAppHandler = function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports) {

var charenc = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
    }
  },

  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      for (var bytes = [], i = 0; i < str.length; i++)
        bytes.push(str.charCodeAt(i) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      for (var str = [], i = 0; i < bytes.length; i++)
        str.push(String.fromCharCode(bytes[i]));
      return str.join('');
    }
  }
};

module.exports = charenc;


/***/ }),
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var $app_script$ = __webpack_require__(20)

$app_define$('@app-application/app', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
})

$app_bootstrap$('@app-application/app',{ packagerVersion: '0.0.5'})


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _system = $app_require$('@app-module/system.audio');

var _system2 = _interopRequireDefault(_system);

var _system3 = $app_require$('@app-module/system.prompt');

var _system4 = _interopRequireDefault(_system3);

var _system5 = $app_require$('@app-module/system.router');

var _system6 = _interopRequireDefault(_system5);

var _system7 = $app_require$('@app-module/system.webview');

var _system8 = _interopRequireDefault(_system7);

var _system9 = $app_require$('@app-module/system.storage');

var _system10 = _interopRequireDefault(_system9);

var _system11 = $app_require$('@app-module/system.network');

var _system12 = _interopRequireDefault(_system11);

__webpack_require__(21);

__webpack_require__(25);

__webpack_require__(26);

var _util = __webpack_require__(31);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  musicData: {
    list: [],
    album_id: '',
    currentPlayerId: '',
    currentIndex: 0
  },
  globalPlay: false,
  appConfig: {
    showMenu: ['保存桌面', '取消']
  },
  onCreate: function onCreate() {
    var _this = this;

    $umeng_stat.init(this);
    _system10.default.get({
      key: 'appConfig',
      success: function success(data) {
        if (data) {
          var appConfig = JSON.parse(data);
          _this.$def.appConfig = appConfig;
        }
      }
    });
  },

  showMenu: _util2.default.showMenu,
  download: _util2.default.download,
  shareWx: _util2.default.shareWx,
  createShortcut: _util2.default.createShortcut,
  audioShow: _util2.default.audioShow,
  audioHide: _util2.default.audioHide,
  audio: _system2.default,
  router: _system6.default,
  storage: _system10.default,
  webview: _system8.default,
  network: _system12.default,
  prompt: _system4.default
};
(exports.default || module.exports).manifest = {"package":"com.kidplay.lite.xbeg","name":"熊宝儿歌故事","versionName":"1.0.3","versionCode":"103","minPlatformVersion":"101","icon":"/common/image/logo.png","features":[{"name":"system.fetch"},{"name":"system.device"},{"name":"system.package"},{"name":"system.webview"},{"name":"system.network"},{"name":"system.notification"},{"name":"system.prompt"},{"name":"system.router"},{"name":"system.share"},{"name":"system.audio"},{"name":"system.storage"},{"name":"system.shortcut"}],"permissions":[{"origin":"*"}],"config":{"logLevel":"debug","data":{"umeng_appkey":"5beb87dbf1f55621d50003b3"}},"router":{"entry":"pages/home","pages":{"pages/home":{"component":"index"},"pages/card/list":{"component":"index"},"pages/album/video":{"component":"index"},"pages/album/audio":{"component":"index"},"pages/play":{"component":"index"}}},"display":{"titleBarBackgroundColor":"#f2f2f2","titleBarTextColor":"#414141","menu":false,"pages":{"pages/home":{"titleBarText":"熊宝儿歌故事","menu":true,"titleBar":true,"titleBarBackgroundColor":"#ffffff","titleBarTextColor":"#414141"},"pages/card/list":{"titleBarText":"列表加载中...","menu":true,"titleBar":true,"titleBarBackgroundColor":"#ffffff","titleBarTextColor":"#414141"},"pages/album/video":{"titleBarText":"视频加载中...","menu":true,"titleBar":true,"titleBarBackgroundColor":"#ffffff","titleBarTextColor":"#414141"},"pages/album/audio":{"titleBarText":"列表加载中...","menu":true,"titleBar":true,"titleBarBackgroundColor":"#20B2AA","titleBarTextColor":"#ffffff"},"pages/play":{"titleBarText":"音乐加载中...","menu":true,"titleBar":true,"titleBarBackgroundColor":"#20B2AA","titleBarTextColor":"#ffffff"}}}};
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 脚本：regenerator.js
// 注意：仅用于注入类库函数，不允许存储页面组件等数据
var injectRef = Object.getPrototypeOf(global) || global;
// 注入regeneratorRuntime
injectRef.regeneratorRuntime = __webpack_require__(22);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(23);


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(24);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 24 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _system = $app_require$('@app-module/system.fetch');

var _system2 = _interopRequireDefault(_system);

var _system3 = $app_require$('@app-module/system.prompt');

var _system4 = _interopRequireDefault(_system3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BASE_URL = 'https://easy-mock.com/mock/5bec37889466046b368d2024/quickapp/api';

var http = function () {
  function http() {
    _classCallCheck(this, http);
  }

  _createClass(http, null, [{
    key: 'request',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(method, Aurl, data) {
        var url, strRegex, reg, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = Aurl;
                strRegex = '(https?|ftp|file)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]';
                reg = new RegExp(strRegex);

                if (!reg.test(url)) {
                  url = BASE_URL + url;
                }
                console.warn('\u8BF7\u6C42\u5730\u5740:' + url);
                _context.next = 7;
                return this.fetch(method, url, data);

              case 7:
                res = _context.sent;

                if (!this.isSuccess(res)) {
                  _context.next = 12;
                  break;
                }

                return _context.abrupt('return', JSON.parse(res.data));

              case 12:
                console.warn('请求错误');
                throw this.requestException(res);

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function request(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      }

      return request;
    }()
  }, {
    key: 'fetch',
    value: function fetch(method, url, data) {
      return new Promise(function (resolve, reject) {
        _system2.default.fetch({
          method: method,
          url: url,
          data: data,
          success: resolve,
          fail: reject
        });
      });
    }
  }, {
    key: 'isSuccess',
    value: function isSuccess(res) {
      var quickappCode = res.code;
      // 快应用请求错误
      if (quickappCode !== 200) {
        return false;
      }
      var quickappData = JSON.parse(res.data);
      return !(quickappData && quickappData.status !== 0);
    }
    /**
     * 异常
     */

  }, {
    key: 'requestException',
    value: function requestException(res) {
      var error = {};
      error.statusCode = res.code;
      var quickappData = res.data;
      if (quickappData) {
        var serverData = JSON.parse(res.data);
        if (serverData) {
          error.serverCode = serverData.status;
          error.message = serverData.msg;
          error.serverData = serverData.data;
        }
      }
      return error;
    }
  }, {
    key: 'get',
    value: function get(url, data) {
      return this.request('GET', url, data);
    }
  }, {
    key: 'put',
    value: function put(url, data) {
      return this.request('PUT', url, data);
    }
  }, {
    key: 'post',
    value: function post(url, data) {
      return this.request('POST', url, data);
    }
  }, {
    key: 'patch',
    value: function patch(url, data) {
      return this.request('PATCH', url, data);
    }
  }, {
    key: 'delete',
    value: function _delete(url, data) {
      return this.request('DELETE', url, data);
    }
  }]);

  return http;
}();
// 全局注册
// export default base


var injectRef = Object.getPrototypeOf(global) || global;
injectRef.$http = http;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _system = $app_require$("@app-module/system.storage");

var _system2 = _interopRequireDefault(_system);

var _md = __webpack_require__(27);

var _md2 = _interopRequireDefault(_md);

var _jsBase = __webpack_require__(30);

var _system3 = $app_require$("@app-module/system.app");

var _system4 = _interopRequireDefault(_system3);

var _system5 = $app_require$("@app-module/system.fetch");

var _system6 = _interopRequireDefault(_system5);

var _system7 = $app_require$("@app-module/system.network");

var _system8 = _interopRequireDefault(_system7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function buildUniqueId(t) {
  var n = [];n.push(DeviceUtil.getAdvertisingId()), n.push(DeviceUtil.getAndroidId()), Promise.all(n).then(function (n) {
    var e = n[0];var i = n[1];StorageUtil.putData(constants.MOBILE_ADVERTISING_ID, e);StorageUtil.putData(constants.MOBILE_ANDROID_ID, i);StorageUtil.putData("umeng_uniqueid", i || e);t(i ? i : e);
  });
}function MD5(t) {
  return (0, _md2.default)(t);
}function encode(t) {
  return _jsBase.Base64.encode(t, !1);
}function checkEmptyArgument(t) {
  return !(!t.length || !this.checkId(t[0]));
}function checkId(t) {
  return !(!t || "string" != typeof t);
}function toString(t) {
  var n = "";if (t) try {
    n = JSON.stringify(t);
  } catch (t) {}return n;
}function stringToArray(t) {
  if (t) try {
    return JSON.parse(t);
  } catch (t) {}return [];
}function toObject(t) {
  if (t) try {
    return JSON.parse(t);
  } catch (t) {}return null;
}function checkAttr(t) {
  return !(!t || "string" != typeof t) || "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && !isArray(t);
}function isArray(t) {
  return "[object Array]" == Object.prototype.toString.call(t);
}function Looper() {}function send(t) {
  _system8.default.getType({ success: function success(n) {
      "none" != n.type && hasEnvelope(t, function (n, e) {
        if (n) {
          if (e) {
            var _n = { md5Key: e, type: "second" };RequestHelper.getInstance().send(_n, function () {
              StoreQueue.getInstance().handleMessage(null), realSend(t);
            });
          }
        } else realSend(t);
      });
    }, fail: function fail(t) {} });
}function hasEnvelope(t, n) {
  StorageUtil.getData(constants.KEY_NO_SEND_REQUEST_KEYS, function (e) {
    if (!e) return void n(!1, null);var i = UmengUtils.stringToArray(e);if (!i || 0 === i.length) return void n(!1, null);for (var o in i) {
      var s = i[o];if (s) {
        if (0 === s.indexOf(constants.KEY_EVENT_PREFIX) && t === constants.REQUEST_TYPE_EVENT) return void n(!0, s);if (0 === s.indexOf(constants.KEY_HALF_SESSION_PREFIX) && t === constants.REQUEST_TYPE_SESSION_HALF) return void n(!0, s);if (0 === s.indexOf(constants.KEY_CLOSE_SESSION_PREFIX) && t === constants.REQUEST_TYPE_SESSION_CLOSE) return void n(!0, s);
      }
    }n(!1, null);
  });
}function realSend(t) {
  if (RequestHelper.getInstance().paramsIsValid(t)) if (t === constants.REQUEST_TYPE_SESSION_HALF) (e = (n = RequestHelper.getInstance().buildSendContent(t, null)).data).analytics && RequestHelper.getInstance().send(n, function (t) {
    t && -1 != t.indexOf(constants.KEY_HALF_SESSION_PREFIX) && (Header.getInstance().setFirstSendFlag(), StorageUtil.putData(constants.APP_FIRST_OPEN_FLAG, "false"));
  });else if (t === constants.REQUEST_TYPE_SESSION_CLOSE) {
    var n = RequestHelper.getInstance().buildSendContent(t, null);if (n && n.data) {
      var e = n.data;e.analytics && RequestHelper.getInstance().send(n);
    }
  } else t === constants.REQUEST_TYPE_EVENT && EventStoreQueue.getInstance().readEkvDatas(function (n) {
    if (n && 0 !== n.length) {
      var e = RequestHelper.getInstance().buildSendContent(t, n);e.data.analytics && RequestHelper.getInstance().send(e);
    }
  });
}function PageController() {
  this._pagelist = [], this._currentPage = {}, this.pageObject = {};
}function UmengAnalysisLib() {
  this.pageController = new PageController();
}function isInit() {
  return !!inited || (console.error("[app.ux] ==> onCreate not invoked init() method"), !1);
}function sendDatas() {
  Header.getInstance().getHeader() ? (Request.send(constants.REQUEST_TYPE_SESSION_HALF), Request.send(constants.REQUEST_TYPE_SESSION_CLOSE), Request.send(constants.REQUEST_TYPE_EVENT)) : setTimeout(sendDatas, 100);
}function Page(t) {
  if (t) {
    var n = t.onShow;t.onShow = function () {
      try {
        UmengAnalysis.resume(this);
      } catch (t) {}if (n) return n.apply(this, arguments);
    };
  }if (t) {
    var _n2 = t.onHide;t.onHide = function () {
      try {
        UmengAnalysis.pause(this);
      } catch (t) {}if (_n2) return _n2.apply(this, arguments);
    };
  }return t;
}var StorageUtil = {
  putData: function putData(t, n, e, i) {
    _system2.default.set({ key: t, value: n, success: function success(t) {
        e && e(t);
      }, fail: function fail(t, n) {
        i && i(t, n);
      } });
  },
  getData: function getData(t, n, e) {
    _system2.default.get({ key: t, success: function success(t) {
        n && n(t);
      }, fail: function fail(t, n) {
        e && e(t, n);
      } });
  },
  deleteData: function deleteData(t, n) {
    _system2.default.delete({ key: t, success: function success(t) {
        n && n(!0);
      }, fail: function fail(t, e) {
        n && n(!1);
      } });
  }
},
    constants = { KEY_NO_SEND_REQUEST_KEYS: "umeng_key_no_send_request", SESSION_INTERVAL: 3e4, TEST_URL: "https://preulogs.umeng.com/unify_logs", RELEASE_URL: "https://ulogs.umeng.com/unify_logs", KEY_SESSION_PREFIX: "umeng_session_prefix_", KEY_EVENT_PREFIX: "umeng_event_prefix_", KEY_HALF_SESSION_PREFIX: "umeng_half_session_prefix_", KEY_CLOSE_SESSION_PREFIX: "umeng_close_session_prefix_", REQUEST_TYPE_SESSION_HALF: 1, REQUEST_TYPE_SESSION_CLOSE: 2, REQUEST_TYPE_EVENT: 3, IS_DEBUG: !1, SDK_VERSION: "1.0.5", APP_FIRST_OPEN_FLAG: "umeng_key_first_open_flag", MOBILE_ADVERTISING_ID: "umeng_mobile_advertising_id", MOBILE_ANDROID_ID: "umeng_android__id" },
    device = $app_require$("@app-module/system.device"),
    network$1 = $app_require$("@app-module/system.network"),
    router = $app_require$("@app-module/system.router"),
    DeviceUtil = {
  getBaseInfo: function getBaseInfo() {
    return new Promise(function (t, n) {
      device.getInfo({ success: function success(n) {
          t(n);
        }, fail: function fail(n) {
          t(null);
        } });
    });
  },
  getNetworkInfo: function getNetworkInfo(t) {
    network$1.getType({ success: function success(n) {
        t(n);
      } });
  },
  getAndroidId: function getAndroidId() {
    return new Promise(function (t, n) {
      device.getUserId({ success: function success(n) {
          t(n.userId);
        }, fail: function fail(n, e) {
          t("");
        } });
    });
  },
  getAdvertisingId: function getAdvertisingId() {
    return new Promise(function (t, n) {
      device.getAdvertisingId({ success: function success(n) {
          t(n.advertisingId);
        }, fail: function fail(n, e) {
          t("");
        } });
    });
  },
  getUniqueId: function getUniqueId() {
    return new Promise(function (t, n) {
      StorageUtil.getData("umeng_uniqueid", function (n) {
        n ? t(n) : buildUniqueId(t);
      }, function () {
        buildUniqueId(t);
      });
    });
  },
  getPageName: function getPageName() {
    try {
      return router.getState().name;
    } catch (t) {}
  }
},
    Log = {
  d: function d(t) {},
  i: function i(t) {},
  e: function e(t) {},
  w: function w(t) {},
  v: function v(t) {}
};var UmengUtils = { MD5: MD5, encode: encode, checkEmptyArgument: checkEmptyArgument, checkId: checkId, stringToArray: stringToArray, toString: toString, toObject: toObject, checkAttr: checkAttr };var $JSON_UMENG_SESSIONS$ = "json_umeng_sessions",
    $JSON_UMENG_HALF_SESSIONS$ = "json_umeng_half_session",
    $JSON_UMENG_CURRENT_SESSION$ = "json_umeng_current_session",
    $JSON_UMENG_PAGE_END_TIME$ = "json_umeng_page_end_time",
    Session = function () {
  function t() {
    return {
      getCurrentSessionId: function getCurrentSessionId() {
        return g;
      },
      getCurrentSession: function getCurrentSession() {
        return c;
      },
      getSessions: function getSessions() {
        return _;
      },
      init: function init(t) {
        this.appkey = t, i();
      },
      endSession: function endSession() {
        c && (r = Date.now(), c.end_time = r, StorageUtil.putData($JSON_UMENG_CURRENT_SESSION$, UmengUtils.toString(c)), StorageUtil.putData($JSON_UMENG_PAGE_END_TIME$, r));
      },
      clearSessions: function clearSessions() {
        StorageUtil.deleteData($JSON_UMENG_SESSIONS$), _.splice(0, _.length), _ = [];
      },
      setOnSessionListener: function setOnSessionListener(t) {
        this.sessionListener = t;
      },
      getHalfSessions: function getHalfSessions() {
        return l;
      },
      clearHalfSession: function clearHalfSession() {
        StorageUtil.deleteData($JSON_UMENG_HALF_SESSIONS$), l.splice(0, l.length), l = [];
      }
    };
  }function n(t, n) {
    var e = Date.now();DeviceUtil.getUniqueId().then(function (t) {
      var i = UmengUtils.MD5(e + ":::" + Session.getInstance().appkey + ":::" + t);n(i);
    });
  }function e(t) {
    var n = {};return n.id = t, n.start_time = Date.now(), n;
  }function i() {
    var t = Date.now();c ? r && t - r > constants.SESSION_INTERVAL && (o(r), s(c)) : StorageUtil.getData($JSON_UMENG_CURRENT_SESSION$, function (n) {
      n && (c = UmengUtils.toObject(n)) ? StorageUtil.getData($JSON_UMENG_PAGE_END_TIME$, function (n) {
        n && t - n > constants.SESSION_INTERVAL ? (o(n), s(c)) : g = c.id;
      }) : s(null);
    });
  }function o(t) {
    try {
      c.end_time = Number.parseInt(t);
    } catch (n) {
      c.end_time = t;
    }var n = t - c.start_time;c.duration = n;
  }function s(t) {
    var i = t ? t.id : "",
        o = Session.getInstance().sessionListener(i);n(i, function (n) {
      c = e(n), StorageUtil.getData($JSON_UMENG_SESSIONS$, function (e) {
        _ = UmengUtils.stringToArray(e), t ? o.pages(function (e) {
          e && e.length > 0 && (t.pages = e, t.$page_num = e.length), _.push(t), StorageUtil.putData($JSON_UMENG_SESSIONS$, UmengUtils.toString(_)), a(o, n);
        }) : a(o, n);
      }), StorageUtil.putData($JSON_UMENG_CURRENT_SESSION$, UmengUtils.toString(c)), g = n;
    });
  }function a(t, n) {
    StorageUtil.getData($JSON_UMENG_HALF_SESSIONS$, function (e) {
      l = UmengUtils.stringToArray(e), c && (l.push(c), StorageUtil.putData($JSON_UMENG_HALF_SESSIONS$, UmengUtils.toString(l)), t.generateSessionAfterHandler(n));
    });
  }var r = void 0,
      c = void 0,
      u = null,
      g = "",
      _ = [],
      l = [];return {
    getInstance: function getInstance() {
      return u || (u = t()), u;
    }
  };
}(),
    $JSON_UMENG_HEADER$ = "json_umeng_header",
    $UMENG_KEY_IMPRINT$ = "umeng_key_imprint",
    MOBILE_NETWORK_2G = "2g",
    MOBILE_NETWORK_3G = "3g",
    MOBILE_NETWORK_4G = "4g",
    MOBILE_NETWORK_NONE = "none",
    BLANK_SPACE = " ",
    UMENG_ADVERTISTING_ID = "idfa",
    UMENG_ANDROID_ID = "android_id",
    Header = function () {
  function t() {
    return {
      init: function init(t) {
        this.appkey = t, this.appInfo = _system4.default.getInfo();var e = this;n(function (t) {
          e.header = t, StorageUtil.putData($JSON_UMENG_HEADER$, UmengUtils.toString(t));
        });
      },
      getHeader: function getHeader(t) {
        switch (t) {case constants.REQUEST_TYPE_SESSION_HALF:
            this.header.st = "1", 1 == a && delete this.header.atm;break;case constants.REQUEST_TYPE_SESSION_CLOSE:case constants.REQUEST_TYPE_EVENT:
            delete this.header.st, delete this.header.atm;}return this.header;
      },
      addHeaderAttr: function addHeaderAttr(t, n) {
        this.header && (this.header["" + t] = n);
      },
      getHeaderAttr: function getHeaderAttr(t) {
        return this.header && this.header.hasOwnProperty(t) ? this.header["" + t] : null;
      },
      getPackageName: function getPackageName() {
        try {
          return this.appInfo.packageName;
        } catch (t) {}return "";
      },
      setFirstSendFlag: function setFirstSendFlag() {
        a = !0;
      }
    };
  }function n(t) {
    DeviceUtil.getBaseInfo().then(function (n) {
      DeviceUtil.getUniqueId().then(function (s) {
        DeviceUtil.getNetworkInfo(function (a) {
          var r = a.type;r === MOBILE_NETWORK_NONE && (r = "unknown");var c = o(n, s, r);StorageUtil.getData($UMENG_KEY_IMPRINT$, function (n) {
            0 != n.length && (c.imprint = n), StorageUtil.getData(constants.APP_FIRST_OPEN_FLAG, function (n) {
              "true" === n && (c.atm = "1"), StorageUtil.getData(constants.MOBILE_ADVERTISING_ID, function (n) {
                if (n) {
                  var _t = e(n);if (_t) {
                    var _n3 = i(UMENG_ADVERTISTING_ID, _t);c.id_tracking = _n3;
                  }
                }StorageUtil.getData(constants.MOBILE_ANDROID_ID, function (n) {
                  if (n) {
                    var _t2 = e(n);if (_t2) if (c.id_tracking && c.id_tracking.snapshots) c.id_tracking.snapshots[UMENG_ANDROID_ID] = _t2;else {
                      var _n4 = i(UMENG_ANDROID_ID, _t2);c.id_tracking = _n4;
                    }
                  }t(c);
                });
              });
            });
          });
        });
      });
    });
  }function e(t) {
    if (t) {
      var _n5 = { identity: t, version: 1, ts: Date.now() };return _n5;
    }
  }function i(t, n) {
    var e = { snapshots: {} };return e.snapshots[t] = n, e;
  }function o(t, n, e) {
    var i = null;if (t) {
      var _e = t.screenWidth,
          _o = t.screenHeight,
          _a = _e > _o ? _e + "*" + _o : _o + "*" + _e,
          r = s.appInfo;i = { app_version: r.versionName, version_code: r.versionCode, device_type: "Phone", package_name: r.packageName, sdk_type: "Android", os: "Android", sdk_version: constants.SDK_VERSION, appkey: s.appkey, device_model: t.model.toLowerCase().indexOf(t.brand.toLowerCase()) > -1 ? t.model : t.brand.toLowerCase() + BLANK_SPACE + t.model, device_brand: t.brand, channel: t.brand.toLowerCase(), device_manufacturer: t.manufacturer, device_manuid: t.model.toLowerCase().indexOf(t.brand.toLowerCase()) > -1 ? t.model : t.brand.toLowerCase() + BLANK_SPACE + t.model, device_name: t.product.toLowerCase().indexOf(t.brand.toLowerCase()) > -1 ? t.product : t.brand.toLowerCase() + BLANK_SPACE + t.product, os_version: t.osVersionName, resolution: _a, language: t.language, display_name: t.name, idmd5: UmengUtils.MD5(n), platform: "quickapp", pro_ver: "1" };
    } else i = { app_version: s.appInfo.versionName, version_code: s.appInfo.versionCode, device_type: "Phone", package_name: s.appInfo.packageName, sdk_type: "Android", os: "Android", sdk_version: constants.SDK_VERSION, appkey: s.appkey, idmd5: UmengUtils.MD5(n), platform: "quickapp", pro_ver: "1" };switch (e) {case MOBILE_NETWORK_4G:
        i.access_subtype = "LTE", i.access = "2G/3G";break;case MOBILE_NETWORK_3G:
        i.access_subtype = "CDMA", i.access = "2G/3G";break;case MOBILE_NETWORK_2G:
        i.access_subtype = "GRPS", i.access = "2G/3G";break;default:
        i.access = e, delete i.access_subtype;}return i;
  }var s = null,
      a = !1;$app_require$("@app-module/system.network");return {
    getInstance: function getInstance() {
      return s || (s = t()), s;
    }
  };
}();Looper.prototype = {
  prepare: function prepare(t) {
    this.queueObject = t, this.isRunning = !1, this.isForceStop = !1;
  },
  loop: function loop() {
    if (!this.isForceStop && this.queueObject && !this.isRunning) for (this.isRunning = !0; this.isRunning;) {
      if (!this.queueObject.isCanPop()) {
        this.isRunning = !1;break;
      }try {
        this.queueObject.dispatchMessage();
      } catch (t) {}
    }
  },
  wait: function wait() {
    this.isRunning = !1;
  },
  forceStop: function forceStop() {
    this.isForceStop = !0;
  },
  cancelForceStop: function cancelForceStop() {
    this.isForceStop = !1, this.loop();
  }
};var RequestQueue = function () {
  function t(t) {
    return !!t && (g.unshift(t), u.loop(), !0);
  }function n() {
    if (g.length > 0) return g.pop();var t = _.length;return t > 0 ? (1 === t && RequestHelper.getInstance().clearNoSendDatas(), _.pop()) : null;
  }function e(t, n) {
    var e = setTimeout(function () {
      i(t);
    }, 3e4),
        o = { key: t, timeOutFun: e, isExe: !1 };S.push(o), n(function (t) {
      i(t);
    });
  }function i(t) {
    for (var _n6 = S.length - 1; _n6 >= 0; _n6--) {
      var _e2 = S[_n6];if (_e2.key === t) {
        if (!_e2.isExe) {
          _e2.isExe = !0;var _t3 = _e2.timeOutFun;_t3 && clearTimeout(_t3), o(), S.splice(_n6, 1);
        }break;
      }
    }
  }function o() {
    --f <= l && u.loop();
  }function s(t) {
    var n = S.length,
        e = t.md5Key;for (var _t4 = n - 1; _t4 >= 0; _t4--) {
      var _n7 = S[_t4];if (_n7.key === e) return o(), !0;
    }return !1;
  }function a() {
    RequestHelper.getInstance().onNoSendDatasListener(function (t) {
      if (t && 0 !== t.length) {
        for (var _n8 in t) {
          var _e3 = { md5Key: t[_n8], type: "second" };_.push(_e3);
        }u.loop();
      }
    });
  }function r() {
    return a(), {
      handleMessage: function handleMessage(n, e) {
        n && "second" === n.type && o(), n && n.data && (n.executeFunction = e, t(n));
      },
      dispatchMessage: function dispatchMessage() {
        if (f > l) return void u.wait();f++;var t = n();if (!s(t)) {
          var _n9 = t.executeFunction;t.data ? e(t.md5Key, _n9) : RequestHelper.getInstance().send(t), this.isCanPop() || u.wait();
        }
      },
      isCanPop: function isCanPop() {
        return g.length > 0 || _.length > 0;
      }
    };
  }var c = void 0,
      u = void 0,
      g = [],
      _ = [];var l = 3;var f = 1;var S = [];return {
    getInstance: function getInstance() {
      return c || (c = r(), (u = new Looper()).prepare(c)), c;
    }
  };
}(),
    StoreQueue = function () {
  function t(t) {
    if (!t) return !1;var n = { key: t, type: l };return u.unshift(n), c.loop(), !0;
  }function n() {
    if (u.length > 0) return u.pop();var t = g.length;if (t > 0) {
      var _n10 = g.pop();return 0 === t && e(), _n10;
    }return e(), null;
  }function e() {
    S || (S = !0, StorageUtil.getData(constants.KEY_NO_SEND_REQUEST_KEYS, function (t) {
      if (S = !1, t) {
        var _n11 = UmengUtils.stringToArray(t);
        var _loop = function _loop(_t5) {
          var e = _n11[_t5];StorageUtil.getData(e, function (t) {
            if (!t || '""' === t) {
              var _t6 = { key: e, type: f };g.push(_t6);
            }g.length > 0 && c.loop();
          });
        };

        for (var _t5 in _n11) {
          _loop(_t5);
        }
      }
    }, function (t) {
      S = !1;
    }));
  }function i(t) {
    StorageUtil.getData(constants.KEY_NO_SEND_REQUEST_KEYS, function (n) {
      (n = n ? JSON.parse(n) : []).push(t), StorageUtil.putData(constants.KEY_NO_SEND_REQUEST_KEYS, UmengUtils.toString(n), function (n) {
        s(t);
      }, function (n, e) {
        s(t);
      });
    }, function (n, e) {
      s(t);
    });
  }function o(t) {
    StorageUtil.getData(constants.KEY_NO_SEND_REQUEST_KEYS, function (n) {
      if (!n) return void s(t);n = UmengUtils.stringToArray(n);for (var _e4 in n) {
        var _i = n[_e4];if (_i === t) {
          n.splice(_e4, 1);break;
        }
      }StorageUtil.putData(constants.KEY_NO_SEND_REQUEST_KEYS, UmengUtils.toString(n), function (n) {
        s(t);
      }, function (n, e) {
        s(t);
      });
    }, function (n, e) {
      s(t);
    });
  }function s(t) {
    --E <= _ && c.loop();
  }function a() {
    return e(), {
      handleMessage: function handleMessage(n) {
        n ? t(n) : e();
      },
      dispatchMessage: function dispatchMessage() {
        if (E > _) return void c.wait();E++;var t = n();if (!t || null === t) return void s();var e = t.key;t.type === l ? i(e) : o(e), this.isCanPop() || c.wait();
      },
      isCanPop: function isCanPop() {
        return u.length > 0 || g.length > 0;
      }
    };
  }var r = void 0,
      c = void 0,
      u = [],
      g = [];var _ = 1,
      l = "write",
      f = "delete";var S = !1,
      E = 1;return {
    getInstance: function getInstance() {
      return r || (r = a(), (c = new Looper()).prepare(r)), r;
    }
  };
}(),
    $UMENG_KEY_IMPRINT$$1 = "umeng_key_imprint";var noSendRequestKeys = [];var RequestHelper = function () {
  function t() {
    var t = [].concat(Session.getInstance().getSessions());if (t && 0 !== t.length) return Session.getInstance().clearSessions(), t;
  }function n() {
    var t = [].concat(Session.getInstance().getHalfSessions());if (t && 0 !== t.length) return Session.getInstance().clearHalfSession(), t;
  }function e(t) {
    StorageUtil.deleteData(t, function (t) {
      t && StoreQueue.getInstance().handleMessage(null);
    });
  }function i(t, n, i, o) {
    if (!t || '""' === t) return void (i && i(n));var s = constants.RELEASE_URL;_system6.default.fetch({ url: s, method: "POST", data: UmengUtils.encode(t), header: { "Content-Type": "quickapp/json", "Msg-Type": "quickapp/json" }, success: function success(t) {
        if (200 === t.code) {
          e(n), o && o(n);try {
            var _n12 = UmengUtils.toObject(t.data),
                _e5 = _n12.imprint;StorageUtil.putData($UMENG_KEY_IMPRINT$$1, _e5), Header.getInstance().addHeaderAttr("imprint", _e5);
          } catch (t) {}
        }
      }, fail: function fail(t, n) {}, complete: function complete() {
        i && i(n);
      } });
  }function o(t, n) {
    var e = UmengUtils.toString(n);var i = null;switch (t) {case constants.REQUEST_TYPE_SESSION_HALF:
        i = constants.KEY_HALF_SESSION_PREFIX;break;case constants.REQUEST_TYPE_SESSION_CLOSE:
        i = constants.KEY_CLOSE_SESSION_PREFIX;break;case constants.REQUEST_TYPE_EVENT:
        i = constants.KEY_EVENT_PREFIX;}var o = i + UmengUtils.MD5(e);return StorageUtil.putData(o, e), StoreQueue.getInstance().handleMessage(o), 0 === noSendRequestKeys.length && StorageUtil.getData(constants.KEY_NO_SEND_REQUEST_KEYS, function (t) {
      if (t) {
        var _n13 = UmengUtils.stringToArray(t);0 === noSendRequestKeys.length && (noSendRequestKeys = _n13, r && r(noSendRequestKeys));
      }
    }), o;
  }function s() {
    return {
      paramsIsValid: function paramsIsValid(t) {
        return -1 !== [constants.REQUEST_TYPE_SESSION_HALF, constants.REQUEST_TYPE_SESSION_CLOSE, constants.REQUEST_TYPE_EVENT].indexOf(t);
      },
      buildSendContent: function buildSendContent(e, i) {
        var s = { header: Header.getInstance().getHeader(e), analytics: null };switch (e) {case constants.REQUEST_TYPE_SESSION_HALF:
            var a = n();if (!a) break;s.analytics = { sessions: a };break;case constants.REQUEST_TYPE_SESSION_CLOSE:
            var r = t();if (!r) break;s.analytics = { sessions: r };break;case constants.REQUEST_TYPE_EVENT:
            i && i.length > 0 && (s.analytics = { ekv: i });}var c = "";return s.analytics && (c = o(e, s)), { data: s, md5Key: c };
      },
      send: function send(t, n) {
        var e = t.md5Key;e && ("second" === t.type ? StorageUtil.getData(e, function (e) {
          t.data = UmengUtils.toObject(e), t.data || n && n(), RequestQueue.getInstance().handleMessage(t, function (e) {
            i(UmengUtils.toString(t.data), t.md5Key, e, n);
          });
        }) : RequestQueue.getInstance().handleMessage(t, function (e) {
          i(UmengUtils.toString(t.data), t.md5Key, e, n);
        }));
      },
      getNoSendRequestKeys: function getNoSendRequestKeys() {
        return noSendRequestKeys;
      },
      onNoSendDatasListener: function onNoSendDatasListener(t) {
        r = t;
      },
      clearNoSendDatas: function clearNoSendDatas() {
        noSendRequestKeys.splice(0, noSendRequestKeys.length), noSendRequestKeys = [];
      }
    };
  }var a, r;return {
    getInstance: function getInstance() {
      return a || (a = s()), a;
    }
  };
}(),
    EventStoreQueue = function () {
  function t(t) {
    if (t) {
      if (!Session.getInstance().getCurrentSessionId()) return void U.unshift(t);h.unshift(t), h.length >= l && S.loop();
    }
  }function n() {
    return h.length < l ? null : h.splice(0, l);
  }function e() {
    p && p.length > 0 && a(function (t) {
      for (var n in p) {
        try {
          p[n](t);
        } catch (t) {}
      }
    }), --E < 1 && (E = 1), E <= f && S.loop();
  }function i(t, n) {
    StorageUtil.putData(u, n, function () {
      StorageUtil.putData(g, UmengUtils.toString(t), function () {
        e();
      }, function () {
        e();
      });
    }, function () {
      e();
    });
  }function o(t, n) {
    t && (p[t] = n);
  }function s(t) {
    t && delete p[t];
  }function a(t) {
    StorageUtil.getData(g, function (n) {
      StorageUtil.deleteData(g, function () {
        t(UmengUtils.stringToArray(n)), S.cancelForceStop();
      });
    }, function () {
      t([]), S.cancelForceStop();
    });
  }function r(t, n) {
    var e = void 0,
        i = Session.getInstance().getCurrentSessionId(),
        o = -1;for (var _n14 in t) {
      var _s = t[_n14];if (e = _s[i]) {
        o = _n14;break;
      }
    }return -1 === o && (e = []), e = e.concat(n), -1 === o ? t.push(_defineProperty({}, i, e)) : t[o][i] = e, t;
  }function c() {
    return {
      saveEkvData: function saveEkvData(n) {
        t(n);
      },
      readEkvDatas: function readEkvDatas(t) {
        t && (S.forceStop(), E <= f ? a(function (n) {
          t(n), S.cancelForceStop();
        }) : o("readEkvDatas", function (n) {
          t(n), s("readEkvDatas"), S.cancelForceStop();
        }));
      },
      handlerNoSessionEkvDatas: function handlerNoSessionEkvDatas() {
        if (U && U.length > 0) {
          Log.d("no sessionId event is " + JSON.stringify(U));for (var _t7 in U) {
            this.saveEkvData(U[_t7]);
          }U.splice(0, U.length);
        }
      },
      quitHandler: function quitHandler() {
        0 !== h.length && (S.forceStop(), E <= f ? StorageUtil.getData(g, function (t) {
          var n = r(UmengUtils.stringToArray(t), h);StorageUtil.putData(g, UmengUtils.toString(n)), h.splice(0, h.length), S.cancelForceStop();
        }, function () {
          S.cancelForceStop();
        }) : o("quitHandler", function (t) {
          var n = UmengUtils.toString(r(t, h));StorageUtil.putData(g, n), h.splice(0, h.length), s("quitHandler"), S.cancelForceStop();
        }));
      },
      dispatchMessage: function dispatchMessage() {
        if (E > f) return void S.wait();E++;var t = n();if (!t || 0 === t.length) return void e();StorageUtil.getData(u, function (n) {
          n || (n = 0), n >= _ + t.length ? e() : StorageUtil.getData(g, function (e) {
            i(r(UmengUtils.stringToArray(e), t), Number(n) + Number(t.length));
          }, function (t, n) {
            e();
          });
        }, function (t, n) {
          e();
        });
      },
      isCanPop: function isCanPop() {
        return h.length >= l;
      }
    };
  }var u = "umeng_ekv_count_key",
      g = "umeng_key_ekvs",
      _ = 1e4,
      l = 5,
      f = 1;var S,
      E = 1,
      d = null,
      p = {},
      h = [],
      U = [];return { getInstance: function getInstance() {
      return d || (d = new c(), (S = new Looper()).prepare(d)), d;
    } };
}();var Request = { send: send };var EventController = function () {
  function t(t, n) {
    var e = { id: t, ts: Date.now() };if (n) switch (typeof n === "undefined" ? "undefined" : _typeof(n)) {case "string":
        e[t] = n;break;case "object":
        for (var i in n) {
          e[i] = n[i];
        }}return e;
  }function n() {
    return {
      addEvent: function addEvent(n, e) {
        var i = t(n, e);EventStoreQueue.getInstance().saveEkvData(i);
      },
      handlerNoSessionEkvDatas: function handlerNoSessionEkvDatas() {
        EventStoreQueue.getInstance().handlerNoSessionEkvDatas();
      },
      quitHandler: function quitHandler() {
        EventStoreQueue.getInstance().quitHandler();
      }
    };
  }var e;return {
    getInstance: function getInstance() {
      return e || (e = n()), e;
    }
  };
}(),
    KEY_PRE_PAGE = "umeng_page_";PageController.prototype = {
  addCurrentPage: function addCurrentPage(t) {
    this._currentPage = { ts: Date.now(), page_name: DeviceUtil.getPageName() }, this.pageObject = t;
  },
  savePage: function savePage(t, n) {
    if (t && n && this._currentPage.page_name && n === this.pageObject) {
      var e = Date.now() - this._currentPage.ts;this._currentPage.duration = Math.abs(e), this._pagelist = this._pagelist.concat(this._currentPage), this._currentPage = {}, this.pageObject = {}, this.saveStroragePages(t);
    }
  },
  saveStroragePages: function saveStroragePages(t) {
    t && this._pagelist.length > 0 && this.updateStorage(KEY_PRE_PAGE + t, this._pagelist);
  },
  getPages: function getPages(t, n) {
    var e = this;StorageUtil.getData(KEY_PRE_PAGE + t, function (i) {
      var o = UmengUtils.stringToArray(i).concat(e._pagelist);e.clear(t), n && n(o);
    }, function (t, e) {
      n && n(null);
    });
  },
  updateStorage: function updateStorage(t, n) {
    if (n && 0 !== n.length) {
      var e = this;StorageUtil.getData(t, function (i) {
        var o = UmengUtils.stringToArray(i).concat(n);StorageUtil.putData(t, UmengUtils.toString(o), function (t) {
          e._pagelist = [];
        });
      });
    }
  },
  clear: function clear(t) {
    StorageUtil.deleteData(KEY_PRE_PAGE + t), this._pagelist = [];
  }
};var inited = !1;UmengAnalysisLib.prototype = {
  init: function init(t) {
    if (!inited) {
      try {
        this.appkey = t.$data.umeng_appkey;
      } catch (t) {}if (!this.appkey) return inited = !1, void console.error("please set umeng_appkey : [manifest.json --\x3e config:{data:{umeng_appkey: xxx}}]");inited = !0, Header.getInstance().init(this.appkey);var n = this;Session.getInstance().setOnSessionListener(function (t) {
        return {
          pages: function pages(e) {
            n.pageController.getPages(t, e);
          },
          generateSessionAfterHandler: function generateSessionAfterHandler(t) {
            EventController.getInstance().handlerNoSessionEkvDatas(), sendDatas();
          }
        };
      }), StorageUtil.getData(constants.APP_FIRST_OPEN_FLAG, function (t) {
        0 == t.length && StorageUtil.putData(constants.APP_FIRST_OPEN_FLAG, "true");
      });
    }
  },
  resume: function resume(t) {
    isInit() && t && (this.pageController.addCurrentPage(t), Session.getInstance().init(this.appkey));
  },
  pause: function pause(t) {
    isInit() && t && (this.pageController.savePage(Session.getInstance().getCurrentSessionId(), t), Session.getInstance().endSession(), EventController.getInstance().quitHandler());
  },
  trackEvent: function trackEvent(t, n) {
    if (isInit()) return UmengUtils.checkId(t) ? n && !UmengUtils.checkAttr(n) ? (console.error("error-----please check trackEvent attr. attr should be 'String' or 'Object'(not include 'Array')"), !1) : (EventController.getInstance().addEvent(t, n), !0) : (console.error("error-----please check trackEvent id. id should be 'String' and not null"), !1);
  }
};var umeng_stat_global = Object.getPrototypeOf(global) || global,
    UmengAnalysis = { _analysisLib: new UmengAnalysisLib(), init: function init(t) {
    this._analysisLib.init(t);
  },
  resume: function resume(t) {
    this._analysisLib.resume(t);
  },
  pause: function pause(t) {
    this._analysisLib.pause(t);
  },
  trackEvent: function trackEvent(t, n) {
    this._analysisLib.trackEvent(t, n);
  }
};!function () {
  umeng_stat_global && (umeng_stat_global.$umeng_stat = UmengAnalysis, umeng_stat_global.Page = Page);
}();exports.default = UmengAnalysis;
//# sourceMappingURL=umenganalysis.es.min.js.map

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

(function(){
  var crypt = __webpack_require__(28),
      utf8 = __webpack_require__(16).utf8,
      isBuffer = __webpack_require__(29),
      bin = __webpack_require__(16).bin,

  // The core
  md5 = function (message, options) {
    // Convert to byte array
    if (message.constructor == String)
      if (options && options.encoding === 'binary')
        message = bin.stringToBytes(message);
      else
        message = utf8.stringToBytes(message);
    else if (isBuffer(message))
      message = Array.prototype.slice.call(message, 0);
    else if (!Array.isArray(message))
      message = message.toString();
    // else, assume byte array already

    var m = crypt.bytesToWords(message),
        l = message.length * 8,
        a =  1732584193,
        b = -271733879,
        c = -1732584194,
        d =  271733878;

    // Swap endian
    for (var i = 0; i < m.length; i++) {
      m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |
             ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00;
    }

    // Padding
    m[l >>> 5] |= 0x80 << (l % 32);
    m[(((l + 64) >>> 9) << 4) + 14] = l;

    // Method shortcuts
    var FF = md5._ff,
        GG = md5._gg,
        HH = md5._hh,
        II = md5._ii;

    for (var i = 0; i < m.length; i += 16) {

      var aa = a,
          bb = b,
          cc = c,
          dd = d;

      a = FF(a, b, c, d, m[i+ 0],  7, -680876936);
      d = FF(d, a, b, c, m[i+ 1], 12, -389564586);
      c = FF(c, d, a, b, m[i+ 2], 17,  606105819);
      b = FF(b, c, d, a, m[i+ 3], 22, -1044525330);
      a = FF(a, b, c, d, m[i+ 4],  7, -176418897);
      d = FF(d, a, b, c, m[i+ 5], 12,  1200080426);
      c = FF(c, d, a, b, m[i+ 6], 17, -1473231341);
      b = FF(b, c, d, a, m[i+ 7], 22, -45705983);
      a = FF(a, b, c, d, m[i+ 8],  7,  1770035416);
      d = FF(d, a, b, c, m[i+ 9], 12, -1958414417);
      c = FF(c, d, a, b, m[i+10], 17, -42063);
      b = FF(b, c, d, a, m[i+11], 22, -1990404162);
      a = FF(a, b, c, d, m[i+12],  7,  1804603682);
      d = FF(d, a, b, c, m[i+13], 12, -40341101);
      c = FF(c, d, a, b, m[i+14], 17, -1502002290);
      b = FF(b, c, d, a, m[i+15], 22,  1236535329);

      a = GG(a, b, c, d, m[i+ 1],  5, -165796510);
      d = GG(d, a, b, c, m[i+ 6],  9, -1069501632);
      c = GG(c, d, a, b, m[i+11], 14,  643717713);
      b = GG(b, c, d, a, m[i+ 0], 20, -373897302);
      a = GG(a, b, c, d, m[i+ 5],  5, -701558691);
      d = GG(d, a, b, c, m[i+10],  9,  38016083);
      c = GG(c, d, a, b, m[i+15], 14, -660478335);
      b = GG(b, c, d, a, m[i+ 4], 20, -405537848);
      a = GG(a, b, c, d, m[i+ 9],  5,  568446438);
      d = GG(d, a, b, c, m[i+14],  9, -1019803690);
      c = GG(c, d, a, b, m[i+ 3], 14, -187363961);
      b = GG(b, c, d, a, m[i+ 8], 20,  1163531501);
      a = GG(a, b, c, d, m[i+13],  5, -1444681467);
      d = GG(d, a, b, c, m[i+ 2],  9, -51403784);
      c = GG(c, d, a, b, m[i+ 7], 14,  1735328473);
      b = GG(b, c, d, a, m[i+12], 20, -1926607734);

      a = HH(a, b, c, d, m[i+ 5],  4, -378558);
      d = HH(d, a, b, c, m[i+ 8], 11, -2022574463);
      c = HH(c, d, a, b, m[i+11], 16,  1839030562);
      b = HH(b, c, d, a, m[i+14], 23, -35309556);
      a = HH(a, b, c, d, m[i+ 1],  4, -1530992060);
      d = HH(d, a, b, c, m[i+ 4], 11,  1272893353);
      c = HH(c, d, a, b, m[i+ 7], 16, -155497632);
      b = HH(b, c, d, a, m[i+10], 23, -1094730640);
      a = HH(a, b, c, d, m[i+13],  4,  681279174);
      d = HH(d, a, b, c, m[i+ 0], 11, -358537222);
      c = HH(c, d, a, b, m[i+ 3], 16, -722521979);
      b = HH(b, c, d, a, m[i+ 6], 23,  76029189);
      a = HH(a, b, c, d, m[i+ 9],  4, -640364487);
      d = HH(d, a, b, c, m[i+12], 11, -421815835);
      c = HH(c, d, a, b, m[i+15], 16,  530742520);
      b = HH(b, c, d, a, m[i+ 2], 23, -995338651);

      a = II(a, b, c, d, m[i+ 0],  6, -198630844);
      d = II(d, a, b, c, m[i+ 7], 10,  1126891415);
      c = II(c, d, a, b, m[i+14], 15, -1416354905);
      b = II(b, c, d, a, m[i+ 5], 21, -57434055);
      a = II(a, b, c, d, m[i+12],  6,  1700485571);
      d = II(d, a, b, c, m[i+ 3], 10, -1894986606);
      c = II(c, d, a, b, m[i+10], 15, -1051523);
      b = II(b, c, d, a, m[i+ 1], 21, -2054922799);
      a = II(a, b, c, d, m[i+ 8],  6,  1873313359);
      d = II(d, a, b, c, m[i+15], 10, -30611744);
      c = II(c, d, a, b, m[i+ 6], 15, -1560198380);
      b = II(b, c, d, a, m[i+13], 21,  1309151649);
      a = II(a, b, c, d, m[i+ 4],  6, -145523070);
      d = II(d, a, b, c, m[i+11], 10, -1120210379);
      c = II(c, d, a, b, m[i+ 2], 15,  718787259);
      b = II(b, c, d, a, m[i+ 9], 21, -343485551);

      a = (a + aa) >>> 0;
      b = (b + bb) >>> 0;
      c = (c + cc) >>> 0;
      d = (d + dd) >>> 0;
    }

    return crypt.endian([a, b, c, d]);
  };

  // Auxiliary functions
  md5._ff  = function (a, b, c, d, x, s, t) {
    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._gg  = function (a, b, c, d, x, s, t) {
    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._hh  = function (a, b, c, d, x, s, t) {
    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._ii  = function (a, b, c, d, x, s, t) {
    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };

  // Package private blocksize
  md5._blocksize = 16;
  md5._digestsize = 16;

  module.exports = function (message, options) {
    if (message === undefined || message === null)
      throw new Error('Illegal argument ' + message);

    var digestbytes = crypt.wordsToBytes(md5(message, options));
    return options && options.asBytes ? digestbytes :
        options && options.asString ? bin.bytesToString(digestbytes) :
        crypt.bytesToHex(digestbytes);
  };

})();


/***/ }),
/* 28 */
/***/ (function(module, exports) {

(function() {
  var base64map
      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

  crypt = {
    // Bit-wise rotation left
    rotl: function(n, b) {
      return (n << b) | (n >>> (32 - b));
    },

    // Bit-wise rotation right
    rotr: function(n, b) {
      return (n << (32 - b)) | (n >>> b);
    },

    // Swap big-endian to little-endian and vice versa
    endian: function(n) {
      // If number given, swap endian
      if (n.constructor == Number) {
        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
      }

      // Else, assume array and swap all items
      for (var i = 0; i < n.length; i++)
        n[i] = crypt.endian(n[i]);
      return n;
    },

    // Generate an array of any length of random bytes
    randomBytes: function(n) {
      for (var bytes = []; n > 0; n--)
        bytes.push(Math.floor(Math.random() * 256));
      return bytes;
    },

    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(bytes) {
      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
        words[b >>> 5] |= bytes[i] << (24 - b % 32);
      return words;
    },

    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(words) {
      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
        bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a hex string
    bytesToHex: function(bytes) {
      for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
      }
      return hex.join('');
    },

    // Convert a hex string to a byte array
    hexToBytes: function(hex) {
      for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
      return bytes;
    },

    // Convert a byte array to a base-64 string
    bytesToBase64: function(bytes) {
      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
        for (var j = 0; j < 4; j++)
          if (i * 8 + j * 6 <= bytes.length * 8)
            base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
          else
            base64.push('=');
      }
      return base64.join('');
    },

    // Convert a base-64 string to a byte array
    base64ToBytes: function(base64) {
      // Remove non-base-64 characters
      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;
          imod4 = ++i % 4) {
        if (imod4 == 0) continue;
        bytes.push(((base64map.indexOf(base64.charAt(i - 1))
            & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))
            | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
      }
      return bytes;
    }
  };

  module.exports = crypt;
})();


/***/ }),
/* 29 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 *  base64.js
 *
 *  Licensed under the BSD 3-Clause License.
 *    http://opensource.org/licenses/BSD-3-Clause
 *
 *  References:
 *    http://en.wikipedia.org/wiki/Base64
 */
;(function (global, factory) {
     true
        ? module.exports = factory(global)
        : typeof define === 'function' && define.amd
        ? define(factory) : factory(global)
}((
    typeof self !== 'undefined' ? self
        : typeof window !== 'undefined' ? window
        : typeof global !== 'undefined' ? global
: this
), function(global) {
    'use strict';
    // existing version for noConflict()
    var _Base64 = global.Base64;
    var version = "2.4.9";
    // if node.js and NOT React Native, we use Buffer
    var buffer;
    if (typeof module !== 'undefined' && module.exports) {
        try {
            buffer = eval("require('buffer').Buffer");
        } catch (err) {
            buffer = undefined;
        }
    }
    // constants
    var b64chars
        = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var b64tab = function(bin) {
        var t = {};
        for (var i = 0, l = bin.length; i < l; i++) t[bin.charAt(i)] = i;
        return t;
    }(b64chars);
    var fromCharCode = String.fromCharCode;
    // encoder stuff
    var cb_utob = function(c) {
        if (c.length < 2) {
            var cc = c.charCodeAt(0);
            return cc < 0x80 ? c
                : cc < 0x800 ? (fromCharCode(0xc0 | (cc >>> 6))
                                + fromCharCode(0x80 | (cc & 0x3f)))
                : (fromCharCode(0xe0 | ((cc >>> 12) & 0x0f))
                   + fromCharCode(0x80 | ((cc >>>  6) & 0x3f))
                   + fromCharCode(0x80 | ( cc         & 0x3f)));
        } else {
            var cc = 0x10000
                + (c.charCodeAt(0) - 0xD800) * 0x400
                + (c.charCodeAt(1) - 0xDC00);
            return (fromCharCode(0xf0 | ((cc >>> 18) & 0x07))
                    + fromCharCode(0x80 | ((cc >>> 12) & 0x3f))
                    + fromCharCode(0x80 | ((cc >>>  6) & 0x3f))
                    + fromCharCode(0x80 | ( cc         & 0x3f)));
        }
    };
    var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
    var utob = function(u) {
        return u.replace(re_utob, cb_utob);
    };
    var cb_encode = function(ccc) {
        var padlen = [0, 2, 1][ccc.length % 3],
        ord = ccc.charCodeAt(0) << 16
            | ((ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8)
            | ((ccc.length > 2 ? ccc.charCodeAt(2) : 0)),
        chars = [
            b64chars.charAt( ord >>> 18),
            b64chars.charAt((ord >>> 12) & 63),
            padlen >= 2 ? '=' : b64chars.charAt((ord >>> 6) & 63),
            padlen >= 1 ? '=' : b64chars.charAt(ord & 63)
        ];
        return chars.join('');
    };
    var btoa = global.btoa ? function(b) {
        return global.btoa(b);
    } : function(b) {
        return b.replace(/[\s\S]{1,3}/g, cb_encode);
    };
    var _encode = buffer ?
        buffer.from && Uint8Array && buffer.from !== Uint8Array.from
        ? function (u) {
            return (u.constructor === buffer.constructor ? u : buffer.from(u))
                .toString('base64')
        }
        :  function (u) {
            return (u.constructor === buffer.constructor ? u : new  buffer(u))
                .toString('base64')
        }
        : function (u) { return btoa(utob(u)) }
    ;
    var encode = function(u, urisafe) {
        return !urisafe
            ? _encode(String(u))
            : _encode(String(u)).replace(/[+\/]/g, function(m0) {
                return m0 == '+' ? '-' : '_';
            }).replace(/=/g, '');
    };
    var encodeURI = function(u) { return encode(u, true) };
    // decoder stuff
    var re_btou = new RegExp([
        '[\xC0-\xDF][\x80-\xBF]',
        '[\xE0-\xEF][\x80-\xBF]{2}',
        '[\xF0-\xF7][\x80-\xBF]{3}'
    ].join('|'), 'g');
    var cb_btou = function(cccc) {
        switch(cccc.length) {
        case 4:
            var cp = ((0x07 & cccc.charCodeAt(0)) << 18)
                |    ((0x3f & cccc.charCodeAt(1)) << 12)
                |    ((0x3f & cccc.charCodeAt(2)) <<  6)
                |     (0x3f & cccc.charCodeAt(3)),
            offset = cp - 0x10000;
            return (fromCharCode((offset  >>> 10) + 0xD800)
                    + fromCharCode((offset & 0x3FF) + 0xDC00));
        case 3:
            return fromCharCode(
                ((0x0f & cccc.charCodeAt(0)) << 12)
                    | ((0x3f & cccc.charCodeAt(1)) << 6)
                    |  (0x3f & cccc.charCodeAt(2))
            );
        default:
            return  fromCharCode(
                ((0x1f & cccc.charCodeAt(0)) << 6)
                    |  (0x3f & cccc.charCodeAt(1))
            );
        }
    };
    var btou = function(b) {
        return b.replace(re_btou, cb_btou);
    };
    var cb_decode = function(cccc) {
        var len = cccc.length,
        padlen = len % 4,
        n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0)
            | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0)
            | (len > 2 ? b64tab[cccc.charAt(2)] <<  6 : 0)
            | (len > 3 ? b64tab[cccc.charAt(3)]       : 0),
        chars = [
            fromCharCode( n >>> 16),
            fromCharCode((n >>>  8) & 0xff),
            fromCharCode( n         & 0xff)
        ];
        chars.length -= [0, 0, 2, 1][padlen];
        return chars.join('');
    };
    var atob = global.atob ? function(a) {
        return global.atob(a);
    } : function(a){
        return a.replace(/[\s\S]{1,4}/g, cb_decode);
    };
    var _decode = buffer ?
        buffer.from && Uint8Array && buffer.from !== Uint8Array.from
        ? function(a) {
            return (a.constructor === buffer.constructor
                    ? a : buffer.from(a, 'base64')).toString();
        }
        : function(a) {
            return (a.constructor === buffer.constructor
                    ? a : new buffer(a, 'base64')).toString();
        }
        : function(a) { return btou(atob(a)) };
    var decode = function(a){
        return _decode(
            String(a).replace(/[-_]/g, function(m0) { return m0 == '-' ? '+' : '/' })
                .replace(/[^A-Za-z0-9\+\/]/g, '')
        );
    };
    var noConflict = function() {
        var Base64 = global.Base64;
        global.Base64 = _Base64;
        return Base64;
    };
    // export Base64
    global.Base64 = {
        VERSION: version,
        atob: atob,
        btoa: btoa,
        fromBase64: decode,
        toBase64: encode,
        utob: utob,
        encode: encode,
        encodeURI: encodeURI,
        btou: btou,
        decode: decode,
        noConflict: noConflict,
        __buffer__: buffer
    };
    // if ES5 is available, make Base64.extendString() available
    if (typeof Object.defineProperty === 'function') {
        var noEnum = function(v){
            return {value:v,enumerable:false,writable:true,configurable:true};
        };
        global.Base64.extendString = function () {
            Object.defineProperty(
                String.prototype, 'fromBase64', noEnum(function () {
                    return decode(this)
                }));
            Object.defineProperty(
                String.prototype, 'toBase64', noEnum(function (urisafe) {
                    return encode(this, urisafe)
                }));
            Object.defineProperty(
                String.prototype, 'toBase64URI', noEnum(function () {
                    return encode(this, true)
                }));
        };
    }
    //
    // export Base64 to the namespace
    //
    if (global['Meteor']) { // Meteor.js
        Base64 = global.Base64;
    }
    // module.exports and AMD are mutually exclusive.
    // module.exports has precedence.
    if (typeof module !== 'undefined' && module.exports) {
        module.exports.Base64 = global.Base64;
    }
    else if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){ return global.Base64 }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
    // that's it!
    return {Base64: global.Base64}
}));


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 显示菜单
 */
function showMenu() {
  var itemList = this.appConfig.showMenu;
  var prompt = $app_require$('@app-module/system.prompt');
  prompt.showContextMenu({
    itemList: itemList,
    success: function success(ret) {
      if (itemList.length - 1 === ret.index) {
        // 取消
        return;
      }
      if (ret.index === 0) {
        // 保存到桌面
        createShortcut();
      } else if (ret.index === 1) {
        // 下载app
        download();
      } else if (ret.index === 2) {
        // 分享到微信
        shareWx();
      }
    }
  });
}
// 分享到微信
function shareWx() {
  var share = $app_require$('@app-module/system.share');
  var prompt = $app_require$('@app-module/system.prompt');
  share.share({
    type: 'image/*',
    data: '/common/image/shareimage.png',
    success: function success(data) {
      console.log('handling success');
    },
    fail: function fail(data, code) {
      prompt.showToast({
        message: '' + code
      });
    }
  });
}

function download() {
  var pkg = $app_require$('@app-module/system.package');
  var prompt = $app_require$('@app-module/system.prompt');
  pkg.install({
    package: 'com.kidplay.xb',
    success: function success(data) {
      console.log('handling success: ' + data.result);
    },
    fail: function fail(data, code) {
      prompt.showToast({
        message: '' + code
      });
    }
  });
}

/**
 * 创建桌面图标
 * 注意：使用加载器测试`创建桌面快捷方式`功能时，请先在`系统设置`中打开`应用加载器`的`桌面快捷方式`权限
 */
function createShortcut() {
  var prompt = $app_require$('@app-module/system.prompt');
  var shortcut = $app_require$('@app-module/system.shortcut');
  shortcut.hasInstalled({
    success: function success(ret) {
      if (ret) {
        prompt.showToast({
          message: '已创建桌面图标'
        });
      } else {
        shortcut.install({
          success: function success() {
            prompt.showToast({
              message: '成功创建桌面图标'
            });
          },
          fail: function fail(errmsg, errcode) {
            prompt.showToast({
              message: errcode + ': ' + errmsg
            });
          }
        });
      }
    }
  });
}

function audioShow() {
  var _this = this;

  this.minplayVisible = true;
  this.isplaying = false;
  if (this.audio.src) {
    // 音乐开始
    this.audio.onplay = function () {
      _this.isplaying = true;
    };
    // 暂停时触发
    this.audio.onpause = function () {
      _this.isplaying = false;
    };
    // 音频播放进度控制
    this.audio.ontimeupdate = function () {
      _this.isplaying = true;
    };
  }
}

function audioHide() {
  this.audio.ontimeupdate = null;
  this.audio.onplay = null;
  this.audio.onpause = null;
  this.minplayVisible = false;
}
exports.default = {
  showMenu: showMenu,
  download: download,
  shareWx: shareWx,
  createShortcut: createShortcut,
  audioShow: audioShow,
  audioHide: audioHide
};

/***/ })
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createAppHandler();
  }
  else {
    window.createAppHandler = createAppHandler
    // H5注入manifest以获取features
    global.manifest = {"package":"com.kidplay.lite.xbeg","name":"熊宝儿歌故事","versionName":"1.0.3","versionCode":"103","minPlatformVersion":"101","icon":"/common/image/logo.png","features":[{"name":"system.fetch"},{"name":"system.device"},{"name":"system.package"},{"name":"system.webview"},{"name":"system.network"},{"name":"system.notification"},{"name":"system.prompt"},{"name":"system.router"},{"name":"system.share"},{"name":"system.audio"},{"name":"system.storage"},{"name":"system.shortcut"}],"permissions":[{"origin":"*"}],"config":{"logLevel":"debug","data":{"umeng_appkey":"5beb87dbf1f55621d50003b3"}},"router":{"entry":"pages/home","pages":{"pages/home":{"component":"index"},"pages/card/list":{"component":"index"},"pages/album/video":{"component":"index"},"pages/album/audio":{"component":"index"},"pages/play":{"component":"index"}}},"display":{"titleBarBackgroundColor":"#f2f2f2","titleBarTextColor":"#414141","menu":false,"pages":{"pages/home":{"titleBarText":"熊宝儿歌故事","menu":true,"titleBar":true,"titleBarBackgroundColor":"#ffffff","titleBarTextColor":"#414141"},"pages/card/list":{"titleBarText":"列表加载中...","menu":true,"titleBar":true,"titleBarBackgroundColor":"#ffffff","titleBarTextColor":"#414141"},"pages/album/video":{"titleBarText":"视频加载中...","menu":true,"titleBar":true,"titleBarBackgroundColor":"#ffffff","titleBarTextColor":"#414141"},"pages/album/audio":{"titleBarText":"列表加载中...","menu":true,"titleBar":true,"titleBarBackgroundColor":"#20B2AA","titleBarTextColor":"#ffffff"},"pages/play":{"titleBarText":"音乐加载中...","menu":true,"titleBar":true,"titleBarBackgroundColor":"#20B2AA","titleBarTextColor":"#ffffff"}}}};
  }
})();
//# sourceMappingURL=app.js.map