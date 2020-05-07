'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var ReactDOM = require('react-dom');

// A packages cache that makes sure that we don't inject the same packageName twice in the same bundle -
// this cache is local to the module closure inside this bundle
var packagesCache = {}; // Cache access to window to avoid IE11 memory leak.

var _win = undefined;

try {
  _win = window;
} catch (e) {
  /* no-op */
}

function setVersion(packageName, packageVersion) {
  if (typeof _win !== 'undefined') {
    // tslint:disable-next-line:no-any
    var packages = _win.__packages__ = _win.__packages__ || {}; // We allow either the global packages or local packages caches to invalidate so testing can
    // just clear the global to set this state

    if (!packages[packageName] || !packagesCache[packageName]) {
      packagesCache[packageName] = packageVersion;
      var versions = packages[packageName] = packages[packageName] || [];
      versions.push(packageVersion);
    }
  }
}

setVersion('@uifabric/set-version', '6.0.0');

var _window = undefined; // Note: Accessing "window" in IE11 is somewhat expensive, and calling "typeof window"
// hits a memory leak, whereas aliasing it and calling "typeof _window" does not.
// Caching the window value at the file scope lets us minimize the impact.

try {
  _window = window;
} catch (e) {}
/* no-op */

/**
 * Helper to get the window object. The helper will make sure to use a cached variable
 * of "window", to avoid overhead and memory leaks in IE11. Note that in popup scenarios the
 * window object won't match the "global" window object, and for these scenarios, you should
 * pass in an element hosted within the popup.
 *
 * @public
 */


function getWindow(rootElement) {
  if ( typeof _window === 'undefined') {
    return undefined;
  } else {
    var el = rootElement;
    return el && el.ownerDocument && el.ownerDocument.defaultView ? el.ownerDocument.defaultView : _window;
  }
}

/**
 * Bugs often appear in async code when stuff gets disposed, but async operations don't get canceled.
 * This Async helper class solves these issues by tying async code to the lifetime of a disposable object.
 *
 * Usage: Anything class extending from BaseModel can access this helper via this.async. Otherwise create a
 * new instance of the class and remember to call dispose() during your code's dispose handler.
 *
 * @public
 */

var Async =
/** @class */
function () {
  // tslint:disable-next-line:no-any
  function Async(parent, onError) {
    this._timeoutIds = null;
    this._immediateIds = null;
    this._intervalIds = null;
    this._animationFrameIds = null;
    this._isDisposed = false;
    this._parent = parent || null;
    this._onErrorHandler = onError;

    this._noop = function () {
      /* do nothing */
    };
  }
  /**
   * Dispose function, clears all async operations.
   */


  Async.prototype.dispose = function () {
    var id;
    this._isDisposed = true;
    this._parent = null; // Clear timeouts.

    if (this._timeoutIds) {
      for (id in this._timeoutIds) {
        if (this._timeoutIds.hasOwnProperty(id)) {
          this.clearTimeout(parseInt(id, 10));
        }
      }

      this._timeoutIds = null;
    } // Clear immediates.


    if (this._immediateIds) {
      for (id in this._immediateIds) {
        if (this._immediateIds.hasOwnProperty(id)) {
          this.clearImmediate(parseInt(id, 10));
        }
      }

      this._immediateIds = null;
    } // Clear intervals.


    if (this._intervalIds) {
      for (id in this._intervalIds) {
        if (this._intervalIds.hasOwnProperty(id)) {
          this.clearInterval(parseInt(id, 10));
        }
      }

      this._intervalIds = null;
    } // Clear animation frames.


    if (this._animationFrameIds) {
      for (id in this._animationFrameIds) {
        if (this._animationFrameIds.hasOwnProperty(id)) {
          this.cancelAnimationFrame(parseInt(id, 10));
        }
      }

      this._animationFrameIds = null;
    }
  };
  /**
   * SetTimeout override, which will auto cancel the timeout during dispose.
   * @param callback - Callback to execute.
   * @param duration - Duration in milliseconds.
   * @returns The setTimeout id.
   */


  Async.prototype.setTimeout = function (callback, duration) {
    var _this = this;

    var timeoutId = 0;

    if (!this._isDisposed) {
      if (!this._timeoutIds) {
        this._timeoutIds = {};
      }
      /* tslint:disable:ban-native-functions */


      timeoutId = setTimeout(function () {
        // Time to execute the timeout, enqueue it as a foreground task to be executed.
        try {
          // Now delete the record and call the callback.
          if (_this._timeoutIds) {
            delete _this._timeoutIds[timeoutId];
          }

          callback.apply(_this._parent);
        } catch (e) {
          if (_this._onErrorHandler) {
            _this._onErrorHandler(e);
          }
        }
      }, duration);
      /* tslint:enable:ban-native-functions */

      this._timeoutIds[timeoutId] = true;
    }

    return timeoutId;
  };
  /**
   * Clears the timeout.
   * @param id - Id to cancel.
   */


  Async.prototype.clearTimeout = function (id) {
    if (this._timeoutIds && this._timeoutIds[id]) {
      /* tslint:disable:ban-native-functions */
      clearTimeout(id);
      delete this._timeoutIds[id];
      /* tslint:enable:ban-native-functions */
    }
  };
  /**
   * SetImmediate override, which will auto cancel the immediate during dispose.
   * @param callback - Callback to execute.
   * @param targetElement - Optional target element to use for identifying the correct window.
   * @returns The setTimeout id.
   */


  Async.prototype.setImmediate = function (callback, targetElement) {
    var _this = this;

    var immediateId = 0;
    var win = getWindow(targetElement);

    if (!this._isDisposed) {
      if (!this._immediateIds) {
        this._immediateIds = {};
      }
      /* tslint:disable:ban-native-functions */


      var setImmediateCallback = function () {
        // Time to execute the timeout, enqueue it as a foreground task to be executed.
        try {
          // Now delete the record and call the callback.
          if (_this._immediateIds) {
            delete _this._immediateIds[immediateId];
          }

          callback.apply(_this._parent);
        } catch (e) {
          _this._logError(e);
        }
      };

      immediateId = win.setTimeout(setImmediateCallback, 0);
      /* tslint:enable:ban-native-functions */

      this._immediateIds[immediateId] = true;
    }

    return immediateId;
  };
  /**
   * Clears the immediate.
   * @param id - Id to cancel.
   * @param targetElement - Optional target element to use for identifying the correct window.
   */


  Async.prototype.clearImmediate = function (id, targetElement) {
    var win = getWindow(targetElement);

    if (this._immediateIds && this._immediateIds[id]) {
      /* tslint:disable:ban-native-functions */
      win.clearTimeout(id);
      delete this._immediateIds[id];
      /* tslint:enable:ban-native-functions */
    }
  };
  /**
   * SetInterval override, which will auto cancel the timeout during dispose.
   * @param callback - Callback to execute.
   * @param duration - Duration in milliseconds.
   * @returns The setTimeout id.
   */


  Async.prototype.setInterval = function (callback, duration) {
    var _this = this;

    var intervalId = 0;

    if (!this._isDisposed) {
      if (!this._intervalIds) {
        this._intervalIds = {};
      }
      /* tslint:disable:ban-native-functions */


      intervalId = setInterval(function () {
        // Time to execute the interval callback, enqueue it as a foreground task to be executed.
        try {
          callback.apply(_this._parent);
        } catch (e) {
          _this._logError(e);
        }
      }, duration);
      /* tslint:enable:ban-native-functions */

      this._intervalIds[intervalId] = true;
    }

    return intervalId;
  };
  /**
   * Clears the interval.
   * @param id - Id to cancel.
   */


  Async.prototype.clearInterval = function (id) {
    if (this._intervalIds && this._intervalIds[id]) {
      /* tslint:disable:ban-native-functions */
      clearInterval(id);
      delete this._intervalIds[id];
      /* tslint:enable:ban-native-functions */
    }
  };
  /**
   * Creates a function that, when executed, will only call the func function at most once per
   * every wait milliseconds. Provide an options object to indicate that func should be invoked
   * on the leading and/or trailing edge of the wait timeout. Subsequent calls to the throttled
   * function will return the result of the last func call.
   *
   * Note: If leading and trailing options are true func will be called on the trailing edge of
   * the timeout only if the throttled function is invoked more than once during the wait timeout.
   *
   * @param func - The function to throttle.
   * @param wait - The number of milliseconds to throttle executions to. Defaults to 0.
   * @param options - The options object.
   * @returns The new throttled function.
   */


  Async.prototype.throttle = function (func, wait, options) {
    var _this = this;

    if (this._isDisposed) {
      return this._noop;
    }

    var waitMS = wait || 0;
    var leading = true;
    var trailing = true;
    var lastExecuteTime = 0;
    var lastResult; // tslint:disable-next-line:no-any

    var lastArgs;
    var timeoutId = null;

    if (options && typeof options.leading === 'boolean') {
      leading = options.leading;
    }

    if (options && typeof options.trailing === 'boolean') {
      trailing = options.trailing;
    }

    var callback = function (userCall) {
      var now = new Date().getTime();
      var delta = now - lastExecuteTime;
      var waitLength = leading ? waitMS - delta : waitMS;

      if (delta >= waitMS && (!userCall || leading)) {
        lastExecuteTime = now;

        if (timeoutId) {
          _this.clearTimeout(timeoutId);

          timeoutId = null;
        }

        lastResult = func.apply(_this._parent, lastArgs);
      } else if (timeoutId === null && trailing) {
        timeoutId = _this.setTimeout(callback, waitLength);
      }

      return lastResult;
    }; // tslint:disable-next-line:no-any


    var resultFunction = function () {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      lastArgs = args;
      return callback(true);
    };

    return resultFunction;
  };
  /**
   * Creates a function that will delay the execution of func until after wait milliseconds have
   * elapsed since the last time it was invoked. Provide an options object to indicate that func
   * should be invoked on the leading and/or trailing edge of the wait timeout. Subsequent calls
   * to the debounced function will return the result of the last func call.
   *
   * Note: If leading and trailing options are true func will be called on the trailing edge of
   * the timeout only if the debounced function is invoked more than once during the wait
   * timeout.
   *
   * @param func - The function to debounce.
   * @param wait - The number of milliseconds to delay.
   * @param options - The options object.
   * @returns The new debounced function.
   */


  Async.prototype.debounce = function (func, wait, options) {
    var _this = this;

    if (this._isDisposed) {
      var noOpFunction = function () {
        /** Do nothing */
      };

      noOpFunction.cancel = function () {
        return;
      };
      /* tslint:disable:no-any */


      noOpFunction.flush = function () {
        return null;
      };
      /* tslint:enable:no-any */


      noOpFunction.pending = function () {
        return false;
      };

      return noOpFunction;
    }

    var waitMS = wait || 0;
    var leading = false;
    var trailing = true;
    var maxWait = null;
    var lastCallTime = 0;
    var lastExecuteTime = new Date().getTime();
    var lastResult; // tslint:disable-next-line:no-any

    var lastArgs;
    var timeoutId = null;

    if (options && typeof options.leading === 'boolean') {
      leading = options.leading;
    }

    if (options && typeof options.trailing === 'boolean') {
      trailing = options.trailing;
    }

    if (options && typeof options.maxWait === 'number' && !isNaN(options.maxWait)) {
      maxWait = options.maxWait;
    }

    var markExecuted = function (time) {
      if (timeoutId) {
        _this.clearTimeout(timeoutId);

        timeoutId = null;
      }

      lastExecuteTime = time;
    };

    var invokeFunction = function (time) {
      markExecuted(time);
      lastResult = func.apply(_this._parent, lastArgs);
    };

    var callback = function (userCall) {
      var now = new Date().getTime();
      var executeImmediately = false;

      if (userCall) {
        if (leading && now - lastCallTime >= waitMS) {
          executeImmediately = true;
        }

        lastCallTime = now;
      }

      var delta = now - lastCallTime;
      var waitLength = waitMS - delta;
      var maxWaitDelta = now - lastExecuteTime;
      var maxWaitExpired = false;

      if (maxWait !== null) {
        // maxWait only matters when there is a pending callback
        if (maxWaitDelta >= maxWait && timeoutId) {
          maxWaitExpired = true;
        } else {
          waitLength = Math.min(waitLength, maxWait - maxWaitDelta);
        }
      }

      if (delta >= waitMS || maxWaitExpired || executeImmediately) {
        invokeFunction(now);
      } else if ((timeoutId === null || !userCall) && trailing) {
        timeoutId = _this.setTimeout(callback, waitLength);
      }

      return lastResult;
    };

    var pending = function () {
      return !!timeoutId;
    };

    var cancel = function () {
      if (pending()) {
        // Mark the debounced function as having executed
        markExecuted(new Date().getTime());
      }
    };

    var flush = function () {
      if (pending()) {
        invokeFunction(new Date().getTime());
      }

      return lastResult;
    }; // tslint:disable-next-line:no-any


    var resultFunction = function () {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      lastArgs = args;
      return callback(true);
    };

    resultFunction.cancel = cancel;
    resultFunction.flush = flush;
    resultFunction.pending = pending;
    return resultFunction;
  };

  Async.prototype.requestAnimationFrame = function (callback, targetElement) {
    var _this = this;

    var animationFrameId = 0;
    var win = getWindow(targetElement);

    if (!this._isDisposed) {
      if (!this._animationFrameIds) {
        this._animationFrameIds = {};
      }
      /* tslint:disable:ban-native-functions */


      var animationFrameCallback = function () {
        try {
          // Now delete the record and call the callback.
          if (_this._animationFrameIds) {
            delete _this._animationFrameIds[animationFrameId];
          }

          callback.apply(_this._parent);
        } catch (e) {
          _this._logError(e);
        }
      };

      animationFrameId = win.requestAnimationFrame ? win.requestAnimationFrame(animationFrameCallback) : win.setTimeout(animationFrameCallback, 0);
      /* tslint:enable:ban-native-functions */

      this._animationFrameIds[animationFrameId] = true;
    }

    return animationFrameId;
  };

  Async.prototype.cancelAnimationFrame = function (id, targetElement) {
    var win = getWindow(targetElement);

    if (this._animationFrameIds && this._animationFrameIds[id]) {
      /* tslint:disable:ban-native-functions */
      win.cancelAnimationFrame ? win.cancelAnimationFrame(id) : win.clearTimeout(id);
      /* tslint:enable:ban-native-functions */

      delete this._animationFrameIds[id];
    }
  }; // tslint:disable-next-line:no-any


  Async.prototype._logError = function (e) {
    if (this._onErrorHandler) {
      this._onErrorHandler(e);
    }
  };

  return Async;
}();

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/* global Reflect, Promise */
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
}

var InjectionMode = {
  /**
   * Avoids style injection, use getRules() to read the styles.
   */
  none: 0,

  /**
   * Inserts rules using the insertRule api.
   */
  insertNode: 1,

  /**
   * Appends rules using appendChild.
   */
  appendChild: 2
};
var STYLESHEET_SETTING = '__stylesheet__';
/**
 * MSIE 11 doesn't cascade styles based on DOM ordering, but rather on the order that each style node
 * is created. As such, to maintain consistent priority, IE11 should reuse a single style node.
 */

var REUSE_STYLE_NODE = typeof navigator !== 'undefined' && /rv:11.0/.test(navigator.userAgent); // tslint:disable-next-line:no-any

var _global = {}; // Grab window.

try {
  _global = window;
} catch (_a) {
  /* leave as blank object */
}

var _stylesheet;
/**
 * Represents the state of styles registered in the page. Abstracts
 * the surface for adding styles to the stylesheet, exposes helpers
 * for reading the styles registered in server rendered scenarios.
 *
 * @public
 */


var Stylesheet =
/** @class */
function () {
  function Stylesheet(config) {
    this._rules = [];
    this._preservedRules = [];
    this._rulesToInsert = [];
    this._counter = 0;
    this._keyToClassName = {};
    this._onResetCallbacks = []; // tslint:disable-next-line:no-any

    this._classNameToArgs = {};
    this._config = __assign({
      injectionMode: InjectionMode.insertNode,
      defaultPrefix: 'css',
      namespace: undefined,
      cspSettings: undefined
    }, config);
    this._keyToClassName = this._config.classNameCache || {};
  }
  /**
   * Gets the singleton instance.
   */


  Stylesheet.getInstance = function () {
    _stylesheet = _global[STYLESHEET_SETTING];

    if (!_stylesheet || _stylesheet._lastStyleElement && _stylesheet._lastStyleElement.ownerDocument !== document) {
      // tslint:disable-next-line:no-string-literal
      var fabricConfig = _global && _global['FabricConfig'] || {};
      _stylesheet = _global[STYLESHEET_SETTING] = new Stylesheet(fabricConfig.mergeStyles);
    }

    return _stylesheet;
  };
  /**
   * Configures the stylesheet.
   */


  Stylesheet.prototype.setConfig = function (config) {
    this._config = __assign(__assign({}, this._config), config);
  };
  /**
   * Configures a reset callback.
   *
   * @param callback - A callback which will be called when the Stylesheet is reset.
   */


  Stylesheet.prototype.onReset = function (callback) {
    this._onResetCallbacks.push(callback);
  };
  /**
   * Generates a unique classname.
   *
   * @param displayName - Optional value to use as a prefix.
   */


  Stylesheet.prototype.getClassName = function (displayName) {
    var namespace = this._config.namespace;
    var prefix = displayName || this._config.defaultPrefix;
    return "" + (namespace ? namespace + '-' : '') + prefix + "-" + this._counter++;
  };
  /**
   * Used internally to cache information about a class which was
   * registered with the stylesheet.
   */


  Stylesheet.prototype.cacheClassName = function (className, key, args, rules) {
    this._keyToClassName[key] = className;
    this._classNameToArgs[className] = {
      args: args,
      rules: rules
    };
  };
  /**
   * Gets the appropriate classname given a key which was previously
   * registered using cacheClassName.
   */


  Stylesheet.prototype.classNameFromKey = function (key) {
    return this._keyToClassName[key];
  };
  /**
   * Gets all classnames cache with the stylesheet.
   */


  Stylesheet.prototype.getClassNameCache = function () {
    return this._keyToClassName;
  };
  /**
   * Gets the arguments associated with a given classname which was
   * previously registered using cacheClassName.
   */


  Stylesheet.prototype.argsFromClassName = function (className) {
    var entry = this._classNameToArgs[className];
    return entry && entry.args;
  };
  /**
   * Gets the arguments associated with a given classname which was
   * previously registered using cacheClassName.
   */


  Stylesheet.prototype.insertedRulesFromClassName = function (className) {
    var entry = this._classNameToArgs[className];
    return entry && entry.rules;
  };
  /**
   * Inserts a css rule into the stylesheet.
   * @param preserve - Preserves the rule beyond a reset boundary.
   */


  Stylesheet.prototype.insertRule = function (rule, preserve) {
    var injectionMode = this._config.injectionMode;
    var element = injectionMode !== InjectionMode.none ? this._getStyleElement() : undefined;

    if (preserve) {
      this._preservedRules.push(rule);
    }

    if (element) {
      switch (this._config.injectionMode) {
        case InjectionMode.insertNode:
          var sheet = element.sheet;

          try {
            sheet.insertRule(rule, sheet.cssRules.length);
          } catch (e) {// The browser will throw exceptions on unsupported rules (such as a moz prefix in webkit.)
            // We need to swallow the exceptions for this scenario, otherwise we'd need to filter
            // which could be slower and bulkier.
          }

          break;

        case InjectionMode.appendChild:
          element.appendChild(document.createTextNode(rule));
          break;
      }
    } else {
      this._rules.push(rule);
    }

    if (this._config.onInsertRule) {
      this._config.onInsertRule(rule);
    }
  };
  /**
   * Gets all rules registered with the stylesheet; only valid when
   * using InsertionMode.none.
   */


  Stylesheet.prototype.getRules = function (includePreservedRules) {
    return (includePreservedRules ? this._preservedRules.join('') : '') + this._rules.join('') + this._rulesToInsert.join('');
  };
  /**
   * Resets the internal state of the stylesheet. Only used in server
   * rendered scenarios where we're using InsertionMode.none.
   */


  Stylesheet.prototype.reset = function () {
    this._rules = [];
    this._rulesToInsert = [];
    this._counter = 0;
    this._classNameToArgs = {};
    this._keyToClassName = {};

    this._onResetCallbacks.forEach(function (callback) {
      return callback();
    });
  }; // Forces the regeneration of incoming styles without totally resetting the stylesheet.


  Stylesheet.prototype.resetKeys = function () {
    this._keyToClassName = {};
  };

  Stylesheet.prototype._getStyleElement = function () {
    var _this = this;

    if (!this._styleElement && typeof document !== 'undefined') {
      this._styleElement = this._createStyleElement();

      if (!REUSE_STYLE_NODE) {
        // Reset the style element on the next frame.
        window.requestAnimationFrame(function () {
          _this._styleElement = undefined;
        });
      }
    }

    return this._styleElement;
  };

  Stylesheet.prototype._createStyleElement = function () {
    var head = document.head;
    var styleElement = document.createElement('style');
    styleElement.setAttribute('data-merge-styles', 'true');
    var cspSettings = this._config.cspSettings;

    if (cspSettings) {
      if (cspSettings.nonce) {
        styleElement.setAttribute('nonce', cspSettings.nonce);
      }
    }

    if (this._lastStyleElement) {
      // If the `nextElementSibling` is null, then the insertBefore will act as a regular append.
      // https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore#Syntax
      head.insertBefore(styleElement, this._lastStyleElement.nextElementSibling);
    } else {
      var placeholderStyleTag = this._findPlaceholderStyleTag();

      if (placeholderStyleTag) {
        head.insertBefore(styleElement, placeholderStyleTag.nextElementSibling);
      } else {
        head.insertBefore(styleElement, head.childNodes[0]);
      }
    }

    this._lastStyleElement = styleElement;
    return styleElement;
  };

  Stylesheet.prototype._findPlaceholderStyleTag = function () {
    var head = document.head;

    if (head) {
      return head.querySelector('style[data-merge-styles]');
    }

    return null;
  };

  return Stylesheet;
}();

/**
 * Separates the classes and style objects. Any classes that are pre-registered
 * args are auto expanded into objects.
 */

function extractStyleParts() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var classes = [];
  var objects = [];
  var stylesheet = Stylesheet.getInstance();

  function _processArgs(argsList) {
    for (var _i = 0, argsList_1 = argsList; _i < argsList_1.length; _i++) {
      var arg = argsList_1[_i];

      if (arg) {
        if (typeof arg === 'string') {
          if (arg.indexOf(' ') >= 0) {
            _processArgs(arg.split(' '));
          } else {
            var translatedArgs = stylesheet.argsFromClassName(arg);

            if (translatedArgs) {
              _processArgs(translatedArgs);
            } else {
              // Avoid adding the same class twice.
              if (classes.indexOf(arg) === -1) {
                classes.push(arg);
              }
            }
          }
        } else if (Array.isArray(arg)) {
          _processArgs(arg);
        } else if (typeof arg === 'object') {
          objects.push(arg);
        }
      }
    }
  }

  _processArgs(args);

  return {
    classes: classes,
    objects: objects
  };
}

/**
 * Sets the current RTL value.
 */
function setRTL(isRTL) {
  if (_rtl !== isRTL) {
    _rtl = isRTL;
  }
}
/**
 * Gets the current RTL value.
 */

function getRTL() {
  if (_rtl === undefined) {
    _rtl = typeof document !== 'undefined' && !!document.documentElement && document.documentElement.getAttribute('dir') === 'rtl';
  }

  return _rtl;
} // This has been split into 2 lines because it was working in Fabric due to the code being transpiled to es5, so this
// was converted to var while not working in Fluent that uses babel to transpile the code to be es6-like. Splitting the
// logic into two lines, however, allows it to work in both scenarios.

var _rtl;

_rtl = getRTL();
function getStyleOptions() {
  return {
    rtl: getRTL()
  };
}

var rules = {};
function kebabRules(rulePairs, index) {
  var rule = rulePairs[index];
  rulePairs[index] = rules[rule] = rules[rule] || rule.replace(/([A-Z])/g, '-$1').toLowerCase();
}

var _vendorSettings;

function getVendorSettings() {
  if (!_vendorSettings) {
    var doc = typeof document !== 'undefined' ? document : undefined;
    var nav = typeof navigator !== 'undefined' ? navigator : undefined;
    var userAgent = nav ? nav.userAgent.toLowerCase() : undefined;

    if (!doc) {
      _vendorSettings = {
        isWebkit: true,
        isMoz: true,
        isOpera: true,
        isMs: true
      };
    } else {
      _vendorSettings = {
        isWebkit: !!(doc && 'WebkitAppearance' in doc.documentElement.style),
        isMoz: !!(userAgent && userAgent.indexOf('firefox') > -1),
        isOpera: !!(userAgent && userAgent.indexOf('opera') > -1),
        isMs: !!(nav && (/rv:11.0/i.test(nav.userAgent) || /Edge\/\d./i.test(navigator.userAgent)))
      };
    }
  }

  return _vendorSettings;
}

var autoPrefixNames = {
  'user-select': 1
};
function prefixRules(rulePairs, index) {
  var vendorSettings = getVendorSettings();
  var name = rulePairs[index];

  if (autoPrefixNames[name]) {
    var value = rulePairs[index + 1];

    if (autoPrefixNames[name]) {
      if (vendorSettings.isWebkit) {
        rulePairs.push('-webkit-' + name, value);
      }

      if (vendorSettings.isMoz) {
        rulePairs.push('-moz-' + name, value);
      }

      if (vendorSettings.isMs) {
        rulePairs.push('-ms-' + name, value);
      }

      if (vendorSettings.isOpera) {
        rulePairs.push('-o-' + name, value);
      }
    }
  }
}

var NON_PIXEL_NUMBER_PROPS = ['column-count', 'font-weight', 'flex', 'flex-grow', 'flex-shrink', 'fill-opacity', 'opacity', 'order', 'z-index', 'zoom'];
function provideUnits(rulePairs, index) {
  var name = rulePairs[index];
  var value = rulePairs[index + 1];

  if (typeof value === 'number') {
    var unit = NON_PIXEL_NUMBER_PROPS.indexOf(name) === -1 ? 'px' : '';
    rulePairs[index + 1] = "" + value + unit;
  }
}

var _a;

var LEFT = 'left';
var RIGHT = 'right';
var NO_FLIP = '@noflip';
var NAME_REPLACEMENTS = (_a = {}, _a[LEFT] = RIGHT, _a[RIGHT] = LEFT, _a);
var VALUE_REPLACEMENTS = {
  'w-resize': 'e-resize',
  'sw-resize': 'se-resize',
  'nw-resize': 'ne-resize'
};
/**
 * RTLifies the rulePair in the array at the current index. This mutates the array for performance
 * reasons.
 */

function rtlifyRules(options, rulePairs, index) {
  if (options.rtl) {
    var name_1 = rulePairs[index];

    if (!name_1) {
      return;
    }

    var value = rulePairs[index + 1];

    if (typeof value === 'string' && value.indexOf(NO_FLIP) >= 0) {
      rulePairs[index + 1] = value.replace(/\s*(?:\/\*\s*)?\@noflip\b(?:\s*\*\/)?\s*?/g, '');
    } else if (name_1.indexOf(LEFT) >= 0) {
      rulePairs[index] = name_1.replace(LEFT, RIGHT);
    } else if (name_1.indexOf(RIGHT) >= 0) {
      rulePairs[index] = name_1.replace(RIGHT, LEFT);
    } else if (String(value).indexOf(LEFT) >= 0) {
      rulePairs[index + 1] = value.replace(LEFT, RIGHT);
    } else if (String(value).indexOf(RIGHT) >= 0) {
      rulePairs[index + 1] = value.replace(RIGHT, LEFT);
    } else if (NAME_REPLACEMENTS[name_1]) {
      rulePairs[index] = NAME_REPLACEMENTS[name_1];
    } else if (VALUE_REPLACEMENTS[value]) {
      rulePairs[index + 1] = VALUE_REPLACEMENTS[value];
    } else {
      switch (name_1) {
        case 'margin':
        case 'padding':
          rulePairs[index + 1] = flipQuad(value);
          break;

        case 'box-shadow':
          rulePairs[index + 1] = negateNum(value, 0);
          break;
      }
    }
  }
}
/**
 * Given a string value in a space delimited format (e.g. "1 2 3 4"), negates a particular value.
 */

function negateNum(value, partIndex) {
  var parts = value.split(' ');
  var numberVal = parseInt(parts[partIndex], 10);
  parts[0] = parts[0].replace(String(numberVal), String(numberVal * -1));
  return parts.join(' ');
}
/**
 * Given a string quad, flips the left and right values.
 */


function flipQuad(value) {
  if (typeof value === 'string') {
    var parts = value.split(' ');

    if (parts.length === 4) {
      return parts[0] + " " + parts[3] + " " + parts[2] + " " + parts[1];
    }
  }

  return value;
}

var DISPLAY_NAME = 'displayName';

function getDisplayName(rules) {
  var rootStyle = rules && rules['&'];
  return rootStyle ? rootStyle.displayName : undefined;
}

var globalSelectorRegExp = /\:global\((.+?)\)/g;
/**
 * Finds comma separated selectors in a :global() e.g. ":global(.class1, .class2, .class3)"
 * and wraps them each in their own global ":global(.class1), :global(.class2), :global(.class3)"
 *
 * @param selectorWithGlobals The selector to process
 * @returns The updated selector
 */

function expandCommaSeparatedGlobals(selectorWithGlobals) {
  // We the selector does not have a :global() we can shortcut
  if (!globalSelectorRegExp.test(selectorWithGlobals)) {
    return selectorWithGlobals;
  }

  var replacementInfo = [];
  var findGlobal = /\:global\((.+?)\)/g;
  var match = null; // Create a result list for global selectors so we can replace them.

  while (match = findGlobal.exec(selectorWithGlobals)) {
    // Only if the found selector is a comma separated list we'll process it.
    if (match[1].indexOf(',') > -1) {
      replacementInfo.push([match.index, match.index + match[0].length, // Wrap each of the found selectors in :global()
      match[1].split(',').map(function (v) {
        return ":global(" + v.trim() + ")";
      }).join(', ')]);
    }
  } // Replace the found selectors with their wrapped variants in reverse order


  return replacementInfo.reverse().reduce(function (selector, _a) {
    var matchIndex = _a[0],
        matchEndIndex = _a[1],
        replacement = _a[2];
    var prefix = selector.slice(0, matchIndex);
    var suffix = selector.slice(matchEndIndex);
    return prefix + replacement + suffix;
  }, selectorWithGlobals);
}

function expandSelector(newSelector, currentSelector) {
  if (newSelector.indexOf(':global(') >= 0) {
    return newSelector.replace(globalSelectorRegExp, '$1');
  } else if (newSelector.indexOf(':') === 0) {
    return currentSelector + newSelector;
  } else if (newSelector.indexOf('&') < 0) {
    return currentSelector + ' ' + newSelector;
  }

  return newSelector;
}

function extractRules(args, rules, currentSelector) {
  if (rules === void 0) {
    rules = {
      __order: []
    };
  }

  if (currentSelector === void 0) {
    currentSelector = '&';
  }

  var stylesheet = Stylesheet.getInstance();
  var currentRules = rules[currentSelector];

  if (!currentRules) {
    currentRules = {};
    rules[currentSelector] = currentRules;

    rules.__order.push(currentSelector);
  }

  for (var _i = 0, args_1 = args; _i < args_1.length; _i++) {
    var arg = args_1[_i]; // If the arg is a string, we need to look up the class map and merge.

    if (typeof arg === 'string') {
      var expandedRules = stylesheet.argsFromClassName(arg);

      if (expandedRules) {
        extractRules(expandedRules, rules, currentSelector);
      } // Else if the arg is an array, we need to recurse in.

    } else if (Array.isArray(arg)) {
      extractRules(arg, rules, currentSelector);
    } else {
      // tslint:disable-next-line:no-any
      for (var prop in arg) {
        if (prop === 'selectors') {
          // tslint:disable-next-line:no-any
          var selectors = arg.selectors;

          var _loop_1 = function (newSelector) {
            if (selectors.hasOwnProperty(newSelector)) {
              var selectorValue_1 = selectors[newSelector];

              if (newSelector.indexOf('@') === 0) {
                newSelector = newSelector + '{' + currentSelector;
                extractRules([selectorValue_1], rules, newSelector);
              } else if (newSelector.indexOf(',') > -1) {
                expandCommaSeparatedGlobals(newSelector).split(',').map(function (s) {
                  return s.trim();
                }).forEach(function (separatedSelector) {
                  return extractRules([selectorValue_1], rules, expandSelector(separatedSelector, currentSelector));
                });
              } else {
                extractRules([selectorValue_1], rules, expandSelector(newSelector, currentSelector));
              }
            }
          };

          for (var newSelector in selectors) {
            _loop_1(newSelector);
          }
        } else {
          if (arg[prop] !== undefined) {
            // Else, add the rule to the currentSelector.
            if (prop === 'margin' || prop === 'padding') {
              // tslint:disable-next-line:no-any
              expandQuads(currentRules, prop, arg[prop]);
            } else {
              // tslint:disable-next-line:no-any
              currentRules[prop] = arg[prop];
            }
          }
        }
      }
    }
  }

  return rules;
}

function expandQuads(currentRules, name, value) {
  var parts = typeof value === 'string' ? value.split(' ') : [value];
  currentRules[name + 'Top'] = parts[0];
  currentRules[name + 'Right'] = parts[1] || parts[0];
  currentRules[name + 'Bottom'] = parts[2] || parts[0];
  currentRules[name + 'Left'] = parts[3] || parts[1] || parts[0];
}

function getKeyForRules(options, rules) {
  var serialized = [options.rtl ? 'rtl' : 'ltr'];
  var hasProps = false;

  for (var _i = 0, _a = rules.__order; _i < _a.length; _i++) {
    var selector = _a[_i];
    serialized.push(selector);
    var rulesForSelector = rules[selector];

    for (var propName in rulesForSelector) {
      if (rulesForSelector.hasOwnProperty(propName) && rulesForSelector[propName] !== undefined) {
        hasProps = true;
        serialized.push(propName, rulesForSelector[propName]);
      }
    }
  }

  return hasProps ? serialized.join('') : undefined;
}

function serializeRuleEntries(options, ruleEntries) {
  if (!ruleEntries) {
    return '';
  }

  var allEntries = [];

  for (var entry in ruleEntries) {
    if (ruleEntries.hasOwnProperty(entry) && entry !== DISPLAY_NAME && ruleEntries[entry] !== undefined) {
      allEntries.push(entry, ruleEntries[entry]);
    }
  } // Apply transforms.


  for (var i = 0; i < allEntries.length; i += 2) {
    kebabRules(allEntries, i);
    provideUnits(allEntries, i);
    rtlifyRules(options, allEntries, i);
    prefixRules(allEntries, i);
  } // Apply punctuation.


  for (var i = 1; i < allEntries.length; i += 4) {
    allEntries.splice(i, 1, ':', allEntries[i], ';');
  }

  return allEntries.join('');
}
function styleToRegistration(options) {
  var args = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }

  var rules = extractRules(args);
  var key = getKeyForRules(options, rules);

  if (key) {
    var stylesheet = Stylesheet.getInstance();
    var registration = {
      className: stylesheet.classNameFromKey(key),
      key: key,
      args: args
    };

    if (!registration.className) {
      registration.className = stylesheet.getClassName(getDisplayName(rules));
      var rulesToInsert = [];

      for (var _a = 0, _b = rules.__order; _a < _b.length; _a++) {
        var selector = _b[_a];
        rulesToInsert.push(selector, serializeRuleEntries(options, rules[selector]));
      }

      registration.rulesToInsert = rulesToInsert;
    }

    return registration;
  }

  return undefined;
}
function applyRegistration(registration) {
  var stylesheet = Stylesheet.getInstance();
  var className = registration.className,
      key = registration.key,
      args = registration.args,
      rulesToInsert = registration.rulesToInsert;

  if (rulesToInsert) {
    // rulesToInsert is an ordered array of selector/rule pairs.
    for (var i = 0; i < rulesToInsert.length; i += 2) {
      var rules = rulesToInsert[i + 1];

      if (rules) {
        var selector = rulesToInsert[i];
        selector = selector.replace(/&/g, '.' + registration.className); // Insert. Note if a media query, we must close the query with a final bracket.

        var processedRule = selector + "{" + rules + "}" + (selector.indexOf('@') === 0 ? '}' : '');
        stylesheet.insertRule(processedRule);
      }
    }

    stylesheet.cacheClassName(className, key, args, rulesToInsert);
  }
}
function styleToClassName(options) {
  var args = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }

  var registration = styleToRegistration.apply(void 0, __spreadArrays([options], args));

  if (registration) {
    applyRegistration(registration);
    return registration.className;
  }

  return '';
}

/**
 * Concatenation helper, which can merge class names together. Skips over falsey values.
 *
 * @public
 */

function mergeStyles() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  return mergeCss(args, getStyleOptions());
}
/**
 * Concatenation helper, which can merge class names together. Skips over falsey values.
 * Accepts a set of options that will be used when calculating styles.
 *
 * @public
 */

function mergeCss(args, options) {
  var styleArgs = args instanceof Array ? args : [args];

  var _a = extractStyleParts(styleArgs),
      classes = _a.classes,
      objects = _a.objects;

  if (objects.length) {
    classes.push(styleToClassName(options || {}, objects));
  }

  return classes.join(' ');
}

/**
 * Combine a set of styles together (but does not register css classes).
 * @param styleSets - One or more stylesets to be merged (each param can also be falsy).
 */

function concatStyleSets() {
  var styleSets = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    styleSets[_i] = arguments[_i];
  }

  if (styleSets && styleSets.length === 1 && styleSets[0] && !styleSets[0].subComponentStyles) {
    return styleSets[0];
  }

  var mergedSet = {}; // We process sub component styles in two phases. First we collect them, then we combine them into 1 style function.

  var workingSubcomponentStyles = {};

  for (var _a = 0, styleSets_1 = styleSets; _a < styleSets_1.length; _a++) {
    var currentSet = styleSets_1[_a];

    if (currentSet) {
      for (var prop in currentSet) {
        if (currentSet.hasOwnProperty(prop)) {
          if (prop === 'subComponentStyles' && currentSet.subComponentStyles !== undefined) {
            // subcomponent styles - style functions or objects
            var currentComponentStyles = currentSet.subComponentStyles;

            for (var subCompProp in currentComponentStyles) {
              if (currentComponentStyles.hasOwnProperty(subCompProp)) {
                if (workingSubcomponentStyles.hasOwnProperty(subCompProp)) {
                  workingSubcomponentStyles[subCompProp].push(currentComponentStyles[subCompProp]);
                } else {
                  workingSubcomponentStyles[subCompProp] = [currentComponentStyles[subCompProp]];
                }
              }
            }

            continue;
          } // the as any casts below is a workaround for ts 2.8.
          // todo: remove cast to any in ts 2.9.


          var mergedValue = mergedSet[prop];
          var currentValue = currentSet[prop];

          if (mergedValue === undefined) {
            mergedSet[prop] = currentValue;
          } else {
            mergedSet[prop] = __spreadArrays(Array.isArray(mergedValue) ? mergedValue : [mergedValue], Array.isArray(currentValue) ? currentValue : [currentValue]);
          }
        }
      }
    }
  }

  if (Object.keys(workingSubcomponentStyles).length > 0) {
    mergedSet.subComponentStyles = {};
    var mergedSubStyles = mergedSet.subComponentStyles;

    var _loop_1 = function (subCompProp) {
      if (workingSubcomponentStyles.hasOwnProperty(subCompProp)) {
        var workingSet_1 = workingSubcomponentStyles[subCompProp];

        mergedSubStyles[subCompProp] = function (styleProps) {
          return concatStyleSets.apply(void 0, workingSet_1.map(function (styleFunctionOrObject) {
            return typeof styleFunctionOrObject === 'function' ? styleFunctionOrObject(styleProps) : styleFunctionOrObject;
          }));
        };
      }
    }; // now we process the subcomponent styles if there are any


    for (var subCompProp in workingSubcomponentStyles) {
      _loop_1(subCompProp);
    }
  }

  return mergedSet;
}

/**
 * Takes in one or more style set objects, each consisting of a set of areas,
 * each which will produce a class name. Using this is analogous to calling
 * `mergeStyles` for each property in the object, but ensures we maintain the
 * set ordering when multiple style sets are merged.
 *
 * @param styleSets - One or more style sets to be merged.
 */

function mergeStyleSets() {
  var styleSets = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    styleSets[_i] = arguments[_i];
  }

  return mergeCssSets(styleSets, getStyleOptions());
}
/**
 * Takes in one or more style set objects, each1consisting of a set of areas,
 * each which will produce a class name. Using this is analogous to calling
 * `mergeCss` for each property in the object, but ensures the
 * set ordering when multiple style sets are merged.
 *
 * @param styleSets - One or more style sets to be merged.
 * @param options - (optional) Options to use when creating rules.
 */

function mergeCssSets(styleSets, options) {
  // tslint:disable-next-line:no-any
  var classNameSet = {
    subComponentStyles: {}
  };
  var styleSet = styleSets[0];

  if (!styleSet && styleSets.length <= 1) {
    return {
      subComponentStyles: {}
    };
  }

  var concatenatedStyleSet = concatStyleSets.apply(void 0, styleSets);
  var registrations = [];

  for (var styleSetArea in concatenatedStyleSet) {
    if (concatenatedStyleSet.hasOwnProperty(styleSetArea)) {
      if (styleSetArea === 'subComponentStyles') {
        classNameSet.subComponentStyles = concatenatedStyleSet.subComponentStyles || {};
        continue;
      }

      var styles = concatenatedStyleSet[styleSetArea];

      var _a = extractStyleParts(styles),
          classes = _a.classes,
          objects = _a.objects;

      var registration = styleToRegistration(options || {}, {
        displayName: styleSetArea
      }, objects);
      registrations.push(registration);

      if (registration) {
        classNameSet[styleSetArea] = classes.concat([registration.className]).join(' ');
      }
    }
  }

  for (var _i = 0, registrations_1 = registrations; _i < registrations_1.length; _i++) {
    var registration = registrations_1[_i];

    if (registration) {
      applyRegistration(registration);
    }
  }

  return classNameSet;
}

/**
 * Concatenates style sets into one, but resolves functional sets using the given props.
 * @param styleProps - Props used to resolve functional sets.
 * @param allStyles - Style sets, which can be functions or objects.
 */

function concatStyleSetsWithProps(styleProps) {
  var allStyles = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    allStyles[_i - 1] = arguments[_i];
  }

  var result = [];

  for (var _a = 0, allStyles_1 = allStyles; _a < allStyles_1.length; _a++) {
    var styles = allStyles_1[_a];

    if (styles) {
      result.push(typeof styles === 'function' ? styles(styleProps) : styles);
    }
  }

  if (result.length === 1) {
    return result[0];
  } else if (result.length) {
    // cliffkoh: I cannot figure out how to avoid the cast to any here.
    // It is something to do with the use of Omit in IStyleSet.
    // It might not be necessary once  Omit becomes part of lib.d.ts (when we remove our own Omit and rely on
    // the official version).
    // tslint:disable-next-line:no-any
    return concatStyleSets.apply(void 0, result);
  }

  return {};
}

/**
 * Registers a font face.
 * @public
 */

function fontFace(font) {
  Stylesheet.getInstance().insertRule("@font-face{" + serializeRuleEntries(getStyleOptions(), font) + "}", true);
}

/**
 * Registers keyframe definitions.
 *
 * @public
 */

function keyframes(timeline) {
  var stylesheet = Stylesheet.getInstance();
  var name = stylesheet.getClassName();
  var rulesArray = [];

  for (var prop in timeline) {
    if (timeline.hasOwnProperty(prop)) {
      rulesArray.push(prop, '{', serializeRuleEntries(getStyleOptions(), timeline[prop]), '}');
    }
  }

  var rules = rulesArray.join('');
  stylesheet.insertRule("@keyframes " + name + "{" + rules + "}", true);
  stylesheet.cacheClassName(name, rules, [], ['keyframes', rules]);
  return name;
}

var CURRENT_ID_PROPERTY = '__currentId__';
var DEFAULT_ID_STRING = 'id__'; // tslint:disable-next-line:no-any

var _global$1 = getWindow() || {};

if (_global$1[CURRENT_ID_PROPERTY] === undefined) {
  _global$1[CURRENT_ID_PROPERTY] = 0;
}
/**
 * Generates a unique id in the global scope (this spans across duplicate copies of the same library.)
 *
 * @public
 */


function getId(prefix) {
  var index = _global$1[CURRENT_ID_PROPERTY]++;
  return (prefix || DEFAULT_ID_STRING) + index;
}
/**
 * Resets id counter to an (optional) number.
 *
 * @public
 */

function resetIds(counter) {
  if (counter === void 0) {
    counter = 0;
  }

  _global$1[CURRENT_ID_PROPERTY] = counter;
}

/**
 * Compares a to b and b to a.
 *
 * @public
 */
// tslint:disable-next-line:no-any

function shallowCompare(a, b) {
  for (var propName in a) {
    if (a.hasOwnProperty(propName)) {
      if (!b.hasOwnProperty(propName) || b[propName] !== a[propName]) {
        return false;
      }
    }
  }

  for (var propName in b) {
    if (b.hasOwnProperty(propName)) {
      if (!a.hasOwnProperty(propName)) {
        return false;
      }
    }
  }

  return true;
}
/**
 * Makes a resulting merge of a bunch of objects. Pass in the target object followed by 1 or more
 * objects as arguments and they will be merged sequentially into the target. Note that this will
 * shallow merge; it will not create new cloned values for target members.
 *
 * @public
 * @param target - Target object to merge following object arguments into.
 * @param args - One or more objects that will be mixed into the target in the order they are provided.
 * @returns Resulting merged target.
 */
// tslint:disable-next-line:no-any

function assign(target) {
  var args = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }

  return filteredAssign.apply(this, [null, target].concat(args));
}
/**
 * Makes a resulting merge of a bunch of objects, but allows a filter function to be passed in to filter
 * the resulting merges. This allows for scenarios where you want to merge "everything except that one thing"
 * or "properties that start with data-". Note that this will shallow merge; it will not create new cloned
 * values for target members.
 *
 * @public
 * @param isAllowed - Callback to determine if the given propName is allowed in the result.
 * @param target - Target object to merge following object arguments into.
 * @param args - One or more objects that will be mixed into the target in the order they are provided.
 * @returns Resulting merged target.
 */
// tslint:disable-next-line:no-any

function filteredAssign(isAllowed, target) {
  var args = [];

  for (var _i = 2; _i < arguments.length; _i++) {
    args[_i - 2] = arguments[_i];
  }

  target = target || {};

  for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
    var sourceObject = args_1[_a];

    if (sourceObject) {
      for (var propName in sourceObject) {
        if (sourceObject.hasOwnProperty(propName) && (!isAllowed || isAllowed(propName))) {
          target[propName] = sourceObject[propName];
        }
      }
    }
  }

  return target;
} // Configure ids to reset on stylesheet resets.

var stylesheet = Stylesheet.getInstance();

if (stylesheet && stylesheet.onReset) {
  stylesheet.onReset(resetIds);
}

/* tslint:disable:no-string-literal */
/** An instance of EventGroup allows anything with a handle to it to trigger events on it.
 *  If the target is an HTMLElement, the event will be attached to the element and can be
 *  triggered as usual (like clicking for onClick).
 *  The event can be triggered by calling EventGroup.raise() here. If the target is an
 *  HTMLElement, the event gets raised and is handled by the browser. Otherwise, it gets
 *  handled here in EventGroup, and the handler is called in the context of the parent
 *  (which is passed in in the constructor).
 *
 * @public
 * {@docCategory EventGroup}
 */

var EventGroup =
/** @class */
function () {
  /** parent: the context in which events attached to non-HTMLElements are called */
  // tslint:disable-next-line:no-any
  function EventGroup(parent) {
    this._id = EventGroup._uniqueId++;
    this._parent = parent;
    this._eventRecords = [];
  }
  /** For IE8, bubbleEvent is ignored here and must be dealt with by the handler.
   *  Events raised here by default have bubbling set to false and cancelable set to true.
   *  This applies also to built-in events being raised manually here on HTMLElements,
   *  which may lead to unexpected behavior if it differs from the defaults.
   *
   */


  EventGroup.raise = function ( // tslint:disable-next-line:no-any
  target, eventName, // tslint:disable-next-line:no-any
  eventArgs, bubbleEvent) {
    var retVal;

    if (EventGroup._isElement(target)) {
      if (typeof document !== 'undefined' && document.createEvent) {
        var ev = document.createEvent('HTMLEvents');
        ev.initEvent(eventName, bubbleEvent || false, true);
        assign(ev, eventArgs);
        retVal = target.dispatchEvent(ev); // tslint:disable-next-line:no-any
      } else if (typeof document !== 'undefined' && document['createEventObject']) {
        // IE8
        // tslint:disable-next-line:no-any
        var evObj = document['createEventObject'](eventArgs); // cannot set cancelBubble on evObj, fireEvent will overwrite it

        target.fireEvent('on' + eventName, evObj);
      }
    } else {
      while (target && retVal !== false) {
        var events = target.__events__;
        var eventRecords = events ? events[eventName] : null;

        if (eventRecords) {
          for (var id in eventRecords) {
            if (eventRecords.hasOwnProperty(id)) {
              var eventRecordList = eventRecords[id];

              for (var listIndex = 0; retVal !== false && listIndex < eventRecordList.length; listIndex++) {
                var record = eventRecordList[listIndex];

                if (record.objectCallback) {
                  retVal = record.objectCallback.call(record.parent, eventArgs);
                }
              }
            }
          }
        } // If the target has a parent, bubble the event up.


        target = bubbleEvent ? target.parent : null;
      }
    }

    return retVal;
  }; // tslint:disable-next-line:no-any


  EventGroup.isObserved = function (target, eventName) {
    var events = target && target.__events__;
    return !!events && !!events[eventName];
  };
  /** Check to see if the target has declared support of the given event. */
  // tslint:disable-next-line:no-any


  EventGroup.isDeclared = function (target, eventName) {
    var declaredEvents = target && target.__declaredEvents;
    return !!declaredEvents && !!declaredEvents[eventName];
  }; // tslint:disable-next-line:no-any


  EventGroup.stopPropagation = function (event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      // IE8
      event.cancelBubble = true;
    }
  };

  EventGroup._isElement = function (target) {
    return !!target && (!!target.addEventListener || typeof HTMLElement !== 'undefined' && target instanceof HTMLElement);
  };

  EventGroup.prototype.dispose = function () {
    if (!this._isDisposed) {
      this._isDisposed = true;
      this.off();
      this._parent = null;
    }
  };
  /** On the target, attach a set of events, where the events object is a name to function mapping. */
  // tslint:disable-next-line:no-any


  EventGroup.prototype.onAll = function (target, events, useCapture) {
    for (var eventName in events) {
      if (events.hasOwnProperty(eventName)) {
        this.on(target, eventName, events[eventName], useCapture);
      }
    }
  };
  /**
   * On the target, attach an event whose handler will be called in the context of the parent
   * of this instance of EventGroup.
   */


  EventGroup.prototype.on = function (target, // tslint:disable-line:no-any
  eventName, callback, // tslint:disable-line:no-any
  options) {
    var _this = this;

    if (eventName.indexOf(',') > -1) {
      var events = eventName.split(/[ ,]+/);

      for (var i = 0; i < events.length; i++) {
        this.on(target, events[i], callback, options);
      }
    } else {
      var parent_1 = this._parent;
      var eventRecord = {
        target: target,
        eventName: eventName,
        parent: parent_1,
        callback: callback,
        options: options
      }; // Initialize and wire up the record on the target, so that it can call the callback if the event fires.

      var events = target.__events__ = target.__events__ || {};
      events[eventName] = events[eventName] || {
        count: 0
      };
      events[eventName][this._id] = events[eventName][this._id] || [];

      events[eventName][this._id].push(eventRecord);

      events[eventName].count++;

      if (EventGroup._isElement(target)) {
        // tslint:disable-next-line:no-any
        var processElementEvent = function () {
          var args = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }

          if (_this._isDisposed) {
            return;
          }

          var result;

          try {
            result = callback.apply(parent_1, args);

            if (result === false && args[0]) {
              var e = args[0];

              if (e.preventDefault) {
                e.preventDefault();
              }

              if (e.stopPropagation) {
                e.stopPropagation();
              }

              e.cancelBubble = true;
            }
          } catch (e) {
            /* ErrorHelper.log(e); */
          }

          return result;
        };

        eventRecord.elementCallback = processElementEvent;

        if (target.addEventListener) {
          /* tslint:disable:ban-native-functions */
          target.addEventListener(eventName, processElementEvent, options);
          /* tslint:enable:ban-native-functions */
        } else if (target.attachEvent) {
          // IE8
          target.attachEvent('on' + eventName, processElementEvent);
        }
      } else {
        // tslint:disable-next-line:no-any
        var processObjectEvent = function () {
          var args = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }

          if (_this._isDisposed) {
            return;
          }

          return callback.apply(parent_1, args);
        };

        eventRecord.objectCallback = processObjectEvent;
      } // Remember the record locally, so that it can be removed.


      this._eventRecords.push(eventRecord);
    }
  };

  EventGroup.prototype.off = function (target, // tslint:disable-line:no-any
  eventName, callback, // tslint:disable-line:no-any
  options) {
    for (var i = 0; i < this._eventRecords.length; i++) {
      var eventRecord = this._eventRecords[i];

      if ((!target || target === eventRecord.target) && (!eventName || eventName === eventRecord.eventName) && (!callback || callback === eventRecord.callback) && (typeof options !== 'boolean' || options === eventRecord.options)) {
        var events = eventRecord.target.__events__;
        var targetArrayLookup = events[eventRecord.eventName];
        var targetArray = targetArrayLookup ? targetArrayLookup[this._id] : null; // We may have already target's entries, so check for null.

        if (targetArray) {
          if (targetArray.length === 1 || !callback) {
            targetArrayLookup.count -= targetArray.length;
            delete events[eventRecord.eventName][this._id];
          } else {
            targetArrayLookup.count--;
            targetArray.splice(targetArray.indexOf(eventRecord), 1);
          }

          if (!targetArrayLookup.count) {
            delete events[eventRecord.eventName];
          }
        }

        if (eventRecord.elementCallback) {
          if (eventRecord.target.removeEventListener) {
            eventRecord.target.removeEventListener(eventRecord.eventName, eventRecord.elementCallback, eventRecord.options);
          } else if (eventRecord.target.detachEvent) {
            // IE8
            eventRecord.target.detachEvent('on' + eventRecord.eventName, eventRecord.elementCallback);
          }
        }

        this._eventRecords.splice(i--, 1);
      }
    }
  };
  /** Trigger the given event in the context of this instance of EventGroup. */
  // tslint:disable-next-line:no-any


  EventGroup.prototype.raise = function (eventName, eventArgs, bubbleEvent) {
    return EventGroup.raise(this._parent, eventName, eventArgs, bubbleEvent);
  };
  /** Declare an event as being supported by this instance of EventGroup. */


  EventGroup.prototype.declare = function (event) {
    var declaredEvents = this._parent.__declaredEvents = this._parent.__declaredEvents || {};

    if (typeof event === 'string') {
      declaredEvents[event] = true;
    } else {
      for (var i = 0; i < event.length; i++) {
        declaredEvents[event[i]] = true;
      }
    }
  };

  EventGroup._uniqueId = 0;
  return EventGroup;
}();

/**
 * Helper to get the document object. Note that in popup window cases, document
 * might be the wrong document, which is why we look at ownerDocument for the
 * truth. Also note that the SSR flag is used to test ssr scenarios even if
 * document is defined (from JSDOM for example.)
 *
 * @public
 */

function getDocument(rootElement) {
  if ( typeof document === 'undefined') {
    return undefined;
  } else {
    var el = rootElement;
    return el && el.ownerDocument ? el.ownerDocument : document;
  }
}

var _scrollbarWidth;
var DisabledScrollClassName = mergeStyles({
  overflow: 'hidden !important'
});
/**
 * Placing this attribute on scrollable divs optimizes detection to know
 * if the div is scrollable or not (given we can avoid expensive operations
 * like getComputedStyle.)
 *
 * @public
 */

var DATA_IS_SCROLLABLE_ATTRIBUTE = 'data-is-scrollable';
/**
 * Calculates the width of a scrollbar for the browser/os.
 *
 * @public
 */

function getScrollbarWidth() {
  if (_scrollbarWidth === undefined) {
    var scrollDiv = document.createElement('div');
    scrollDiv.style.setProperty('width', '100px');
    scrollDiv.style.setProperty('height', '100px');
    scrollDiv.style.setProperty('overflow', 'scroll');
    scrollDiv.style.setProperty('position', 'absolute');
    scrollDiv.style.setProperty('top', '-9999px');
    document.body.appendChild(scrollDiv); // Get the scrollbar width

    _scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth; // Delete the DIV

    document.body.removeChild(scrollDiv);
  }

  return _scrollbarWidth;
}
/**
 * Traverses up the DOM for the element with the data-is-scrollable=true attribute, or returns
 * document.body.
 *
 * @public
 */

function findScrollableParent(startingElement) {
  var el = startingElement;
  var doc = getDocument(startingElement); // First do a quick scan for the scrollable attribute.

  while (el && el !== doc.body) {
    if (el.getAttribute(DATA_IS_SCROLLABLE_ATTRIBUTE) === 'true') {
      return el;
    }

    el = el.parentElement;
  } // If we haven't found it, the use the slower method: compute styles to evaluate if overflow is set.


  el = startingElement;

  while (el && el !== doc.body) {
    if (el.getAttribute(DATA_IS_SCROLLABLE_ATTRIBUTE) !== 'false') {
      var computedStyles = getComputedStyle(el);
      var overflowY = computedStyles ? computedStyles.getPropertyValue('overflow-y') : '';

      if (overflowY && (overflowY === 'scroll' || overflowY === 'auto')) {
        return el;
      }
    }

    el = el.parentElement;
  } // Fall back to window scroll.


  if (!el || el === doc.body) {
    // tslint:disable-next-line:no-any
    el = getWindow(startingElement);
  }

  return el;
}

/**
 * Sends a warning to console, if the api is present.
 *
 * @public
 * @param message - Warning message.
 */

function warn(message) {
  if (console && console.warn) {
    console.warn(message);
  }
}

/**
 * Warns when props are required if a condition is met.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param requiredProps - The name of the props that are required when the condition is met.
 * @param conditionalPropName - The name of the prop that the condition is based on.
 * @param condition - Whether the condition is met.
 */

function warnConditionallyRequiredProps(componentName, props, requiredProps, conditionalPropName, condition) {
  if (condition === true && undefined !== 'production') {
    for (var _i = 0, requiredProps_1 = requiredProps; _i < requiredProps_1.length; _i++) {
      var requiredPropName = requiredProps_1[_i];

      if (!(requiredPropName in props)) {
        warn(componentName + " property '" + requiredPropName + "' is required when '" + conditionalPropName + "' is used.'");
      }
    }
  }
}

/**
 * Warns when two props which are mutually exclusive are both being used.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param exclusiveMap - A map where the key is a parameter, and the value is the other parameter.
 */

function warnMutuallyExclusive(componentName, props, exclusiveMap) {
  {
    for (var propName in exclusiveMap) {
      if (props && props[propName] !== undefined) {
        var propInExclusiveMapValue = exclusiveMap[propName];

        if (propInExclusiveMapValue && props[propInExclusiveMapValue] !== undefined) {
          warn(componentName + " property '" + propName + "' is mutually exclusive with '" + exclusiveMap[propName] + "'. " + "Use one or the other.");
        }
      }
    }
  }
}

/**
 * Warns when a deprecated props are being used.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param deprecationMap - The map of deprecations, where key is the prop name and the value is
 * either null or a replacement prop name.
 */

function warnDeprecations(componentName, props, deprecationMap) {
  {
    for (var propName in deprecationMap) {
      if (props && propName in props) {
        var deprecationMessage = componentName + " property '" + propName + "' was used but has been deprecated.";
        var replacementPropName = deprecationMap[propName];

        if (replacementPropName) {
          deprecationMessage += " Use '" + replacementPropName + "' instead.";
        }

        warn(deprecationMessage);
      }
    }
  }
}

/**
 * BaseComponent class, which provides basic helpers for all components.
 *
 * @public
 * {@docCategory BaseComponent}
 *
 * @deprecated Do not use. We are moving away from class component.
 */

var BaseComponent =
/** @class */
function (_super) {
  __extends(BaseComponent, _super); // tslint:enable:variable-name

  /**
   * BaseComponent constructor
   * @param props - The props for the component.
   * @param context - The context for the component.
   */
  // tslint:disable-next-line:no-any


  function BaseComponent(props, context) {
    var _this = _super.call(this, props, context) || this; // tslint:disable-next-line:deprecation


    _makeAllSafe(_this, BaseComponent.prototype, ['componentDidMount', 'shouldComponentUpdate', 'getSnapshotBeforeUpdate', 'render', 'componentDidUpdate', 'componentWillUnmount']);

    return _this;
  }
  /**
   * When the component receives props, make sure the componentRef is updated.
   */


  BaseComponent.prototype.componentDidUpdate = function (prevProps, prevState) {
    this._updateComponentRef(prevProps, this.props);
  };
  /**
   * When the component has mounted, update the componentRef.
   */


  BaseComponent.prototype.componentDidMount = function () {
    this._setComponentRef(this.props.componentRef, this);
  };
  /**
   * If we have disposables, dispose them automatically on unmount.
   */


  BaseComponent.prototype.componentWillUnmount = function () {
    this._setComponentRef(this.props.componentRef, null);

    if (this.__disposables) {
      for (var i = 0, len = this._disposables.length; i < len; i++) {
        var disposable = this.__disposables[i];

        if (disposable.dispose) {
          disposable.dispose();
        }
      }

      this.__disposables = null;
    }
  };

  Object.defineProperty(BaseComponent.prototype, "className", {
    /**
     * Gets the object's class name.
     */
    get: function () {
      if (!this.__className) {
        var funcNameRegex = /function (.{1,})\(/;
        var results = funcNameRegex.exec(this.constructor.toString());
        this.__className = results && results.length > 1 ? results[1] : '';
      }

      return this.__className;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BaseComponent.prototype, "_disposables", {
    /**
     * Allows subclasses to push things to this._disposables to be auto disposed.
     */
    get: function () {
      if (!this.__disposables) {
        this.__disposables = [];
      }

      return this.__disposables;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BaseComponent.prototype, "_async", {
    /**
     * Gets the async instance associated with the component, created on demand. The async instance gives
     * subclasses a way to execute setTimeout/setInterval async calls safely, where the callbacks
     * will be cleared/ignored automatically after unmounting. The helpers within the async object also
     * preserve the this pointer so that you don't need to "bind" the callbacks.
     */
    get: function () {
      if (!this.__async) {
        this.__async = new Async(this);

        this._disposables.push(this.__async);
      }

      return this.__async;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BaseComponent.prototype, "_events", {
    /**
     * Gets the event group instance assocaited with the component, created on demand. The event instance
     * provides on/off methods for listening to DOM (or regular javascript object) events. The event callbacks
     * will be automatically disconnected after unmounting. The helpers within the events object also
     * preserve the this reference so that you don't need to "bind" the callbacks.
     */
    get: function () {
      if (!this.__events) {
        this.__events = new EventGroup(this);

        this._disposables.push(this.__events);
      }

      return this.__events;
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Helper to return a memoized ref resolver function.
   * @param refName - Name of the member to assign the ref to.
   * @returns A function instance keyed from the given refname.
   * @deprecated Use `createRef` from React.createRef.
   */

  BaseComponent.prototype._resolveRef = function (refName) {
    var _this = this;

    if (!this.__resolves) {
      this.__resolves = {};
    }

    if (!this.__resolves[refName]) {
      // tslint:disable-next-line:no-any
      this.__resolves[refName] = function (ref) {
        // tslint:disable-next-line:no-any
        return _this[refName] = ref;
      };
    }

    return this.__resolves[refName];
  };
  /**
   * Updates the componentRef (by calling it with "this" when necessary.)
   */


  BaseComponent.prototype._updateComponentRef = function (currentProps, newProps) {
    if (newProps === void 0) {
      newProps = {};
    } // currentProps *should* always be defined, but verify that just in case a subclass is manually
    // calling a lifecycle method with no parameters (which has happened) or other odd usage.


    if (currentProps && newProps && currentProps.componentRef !== newProps.componentRef) {
      this._setComponentRef(currentProps.componentRef, null);

      this._setComponentRef(newProps.componentRef, this);
    }
  };
  /**
   * Warns when a deprecated props are being used.
   *
   * @param deprecationMap - The map of deprecations, where key is the prop name and the value is
   * either null or a replacement prop name.
   */


  BaseComponent.prototype._warnDeprecations = function (deprecationMap) {
    warnDeprecations(this.className, this.props, deprecationMap);
  };
  /**
   * Warns when props which are mutually exclusive with each other are both used.
   *
   * @param mutuallyExclusiveMap - The map of mutually exclusive props.
   */


  BaseComponent.prototype._warnMutuallyExclusive = function (mutuallyExclusiveMap) {
    warnMutuallyExclusive(this.className, this.props, mutuallyExclusiveMap);
  };
  /**
   * Warns when props are required if a condition is met.
   *
   * @param requiredProps - The name of the props that are required when the condition is met.
   * @param conditionalPropName - The name of the prop that the condition is based on.
   * @param condition - Whether the condition is met.
   */


  BaseComponent.prototype._warnConditionallyRequiredProps = function (requiredProps, conditionalPropName, condition) {
    warnConditionallyRequiredProps(this.className, this.props, requiredProps, conditionalPropName, condition);
  };

  BaseComponent.prototype._setComponentRef = function (ref, value) {
    if (!this._skipComponentRefResolution && ref) {
      if (typeof ref === 'function') {
        ref(value);
      }

      if (typeof ref === 'object') {
        // tslint:disable:no-any
        ref.current = value;
      }
    }
  };

  return BaseComponent;
}(React.Component);
/**
 * Helper to override a given method with a wrapper method that can try/catch the original, but also
 * ensures that the BaseComponent's methods are called before the subclass's. This ensures that
 * componentWillUnmount in the base is called and that things in the _disposables array are disposed.
 */
// tslint:disable-next-line:deprecation

function _makeAllSafe(obj, prototype, methodNames) {
  for (var i = 0, len = methodNames.length; i < len; i++) {
    _makeSafe(obj, prototype, methodNames[i]);
  }
} // tslint:disable-next-line:deprecation


function _makeSafe(obj, prototype, methodName) {
  // tslint:disable:no-any
  var classMethod = obj[methodName];
  var prototypeMethod = prototype[methodName]; // tslint:enable:no-any

  if (classMethod || prototypeMethod) {
    // tslint:disable-next-line:no-any
    obj[methodName] = function () {
      var retVal;

      if (prototypeMethod) {
        retVal = prototypeMethod.apply(this, arguments);
      }

      if (classMethod !== prototypeMethod) {
        retVal = classMethod.apply(this, arguments);
      }

      return retVal;
    };
  }
}
/**
 * Simple constant function for returning null, used to render empty templates in JSX.
 *
 * @public
 */


function nullRender() {
  return null;
}

/**
 * Storing global state in local module variables has issues when more than one copy
 * if the module gets loaded on the page (due to a bundling error or simply by consuming
 * a prebundled script.)
 *
 * This file contains helpers to deal with the getting and setting local state, and allows
 * callers to get called back when it mutates.
 */
// tslint:disable:no-any

var GLOBAL_SETTINGS_PROP_NAME = '__globalSettings__';
var CALLBACK_STATE_PROP_NAME = '__callbacks__';
var _counter = 0;
/**
 * Global settings helper, which stores settings in the global (window) namespace.
 * If window is not provided, it will store settings in module scope. Provides a
 * way to observe changes as well when their values change.
 *
 * @public
 * {@docCategory GlobalSettings}
 */

var GlobalSettings =
/** @class */
function () {
  function GlobalSettings() {}

  GlobalSettings.getValue = function (key, defaultValue) {
    var globalSettings = _getGlobalSettings();

    if (globalSettings[key] === undefined) {
      globalSettings[key] = typeof defaultValue === 'function' ? defaultValue() : defaultValue;
    }

    return globalSettings[key];
  };

  GlobalSettings.setValue = function (key, value) {
    var globalSettings = _getGlobalSettings();

    var callbacks = globalSettings[CALLBACK_STATE_PROP_NAME];
    var oldValue = globalSettings[key];

    if (value !== oldValue) {
      globalSettings[key] = value;
      var changeDescription = {
        oldValue: oldValue,
        value: value,
        key: key
      };

      for (var id in callbacks) {
        if (callbacks.hasOwnProperty(id)) {
          callbacks[id](changeDescription);
        }
      }
    }

    return value;
  };

  GlobalSettings.addChangeListener = function (cb) {
    // Note: we use generated ids on the callbacks to create a map of the callbacks, which optimizes removal.
    // (It's faster to delete a key than it is to look up the index of an object and splice an array.)
    var id = cb.__id__;

    var callbacks = _getCallbacks();

    if (!id) {
      id = cb.__id__ = String(_counter++);
    }

    callbacks[id] = cb;
  };

  GlobalSettings.removeChangeListener = function (cb) {
    var callbacks = _getCallbacks();

    delete callbacks[cb.__id__];
  };

  return GlobalSettings;
}();

function _getGlobalSettings() {
  var _a;

  var win = getWindow();
  var globalObj = win || {};

  if (!globalObj[GLOBAL_SETTINGS_PROP_NAME]) {
    globalObj[GLOBAL_SETTINGS_PROP_NAME] = (_a = {}, _a[CALLBACK_STATE_PROP_NAME] = {}, _a);
  }

  return globalObj[GLOBAL_SETTINGS_PROP_NAME];
}

function _getCallbacks() {
  var globalSettings = _getGlobalSettings();

  return globalSettings[CALLBACK_STATE_PROP_NAME];
}

/**
 * Simulated enum for keycodes. These will get inlined by uglify when used much like an enum
 *
 * @public
 * {@docCategory KeyCodes}
 */
var KeyCodes = {
  backspace: 8,
  tab: 9,
  enter: 13,
  shift: 16,
  ctrl: 17,
  alt: 18,
  pauseBreak: 19,
  capslock: 20,
  escape: 27,
  space: 32,
  pageUp: 33,
  pageDown: 34,
  end: 35,
  home: 36,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  insert: 45,
  del: 46,
  zero: 48,
  one: 49,
  two: 50,
  three: 51,
  four: 52,
  five: 53,
  six: 54,
  seven: 55,
  eight: 56,
  nine: 57,
  a: 65,
  b: 66,
  c: 67,
  d: 68,
  e: 69,
  f: 70,
  g: 71,
  h: 72,
  i: 73,
  j: 74,
  k: 75,
  l: 76,
  m: 77,
  n: 78,
  o: 79,
  p: 80,
  q: 81,
  r: 82,
  s: 83,
  t: 84,
  u: 85,
  v: 86,
  w: 87,
  x: 88,
  y: 89,
  z: 90,
  leftWindow: 91,
  rightWindow: 92,
  select: 93,
  zero_numpad: 96,
  one_numpad: 97,
  two_numpad: 98,
  three_numpad: 99,
  four_numpad: 100,
  five_numpad: 101,
  six_numpad: 102,
  seven_numpad: 103,
  eight_numpad: 104,
  nine_numpad: 105,
  multiply: 106,
  add: 107,
  subtract: 109,
  decimalPoint: 110,
  divide: 111,
  f1: 112,
  f2: 113,
  f3: 114,
  f4: 115,
  f5: 116,
  f6: 117,
  f7: 118,
  f8: 119,
  f9: 120,
  f10: 121,
  f11: 122,
  f12: 123,
  numlock: 144,
  scrollLock: 145,
  semicolon: 186,
  equalSign: 187,
  comma: 188,
  dash: 189,
  period: 190,
  forwardSlash: 191,
  graveAccent: 192,
  openBracket: 219,
  backSlash: 220,
  closeBracket: 221,
  singleQuote: 222
};

/**
 * Rectangle helper class.
 *
 * @public
 * {@docCategory Rectangle}
 */
var Rectangle =
/** @class */
function () {
  function Rectangle(left, right, top, bottom) {
    if (left === void 0) {
      left = 0;
    }

    if (right === void 0) {
      right = 0;
    }

    if (top === void 0) {
      top = 0;
    }

    if (bottom === void 0) {
      bottom = 0;
    }

    this.top = top;
    this.bottom = bottom;
    this.left = left;
    this.right = right;
  }

  Object.defineProperty(Rectangle.prototype, "width", {
    /**
     * Calculated automatically by subtracting the right from left
     */
    get: function () {
      return this.right - this.left;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Rectangle.prototype, "height", {
    /**
     * Calculated automatically by subtracting the bottom from top.
     */
    get: function () {
      return this.bottom - this.top;
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Tests if another rect is approximately equal to this rect (within 4 decimal places.)
   */

  Rectangle.prototype.equals = function (rect) {
    // Fixing to 4 decimal places because it allows enough precision and will handle cases when something
    // should be rounded, like .999999 should round to 1.
    return parseFloat(this.top.toFixed(4)) === parseFloat(rect.top.toFixed(4)) && parseFloat(this.bottom.toFixed(4)) === parseFloat(rect.bottom.toFixed(4)) && parseFloat(this.left.toFixed(4)) === parseFloat(rect.left.toFixed(4)) && parseFloat(this.right.toFixed(4)) === parseFloat(rect.right.toFixed(4));
  };

  return Rectangle;
}();

// tslint:disable:no-any

/**
 * Returns a single function which will call each of the given functions in the context of the
 * parent.
 */
function appendFunction(parent) {
  var functions = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    functions[_i - 1] = arguments[_i];
  }

  if (functions.length < 2) {
    return functions[0];
  }

  return function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    functions.forEach(function (f) {
      return f && f.apply(parent, args);
    });
  };
}

/**
 * ARIA helper to concatenate attributes, returning undefined if all attributes
 * are undefined. (Empty strings are not a valid ARIA attribute value.)
 *
 * @param ariaAttributes - ARIA attributes to merge
 */
function mergeAriaAttributeValues() {
  var ariaAttributes = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    ariaAttributes[_i] = arguments[_i];
  }

  var mergedAttribute = ariaAttributes.filter(function (arg) {
    return arg;
  }).join(' ').trim();
  return mergedAttribute === '' ? undefined : mergedAttribute;
}

/**
 * Helper to find the index of an item within an array, using a callback to
 * determine the match.
 *
 * @public
 * @param array - Array to search.
 * @param cb - Callback which returns true on matches.
 */
/**
 * Given an array, this function returns a new array where an element has been inserted at the given index.
 * @param array - The array to operate on
 * @param index - The index where an element should be inserted
 * @param itemToAdd - The element to insert
 */

function addElementAtIndex(array, index, itemToAdd) {
  var copy = array.slice();
  copy.splice(index, 0, itemToAdd);
  return copy;
}

/**
 * Fetches an item from session storage without throwing an exception
 * @param key The key of the item to fetch from session storage
 */
function getItem(key) {
  var result = null;

  try {
    result = window.sessionStorage.getItem(key);
  } catch (e) {
    /* Eat the exception */
  }

  return result;
}
/**
 * Inserts an item into session storage without throwing an exception
 * @param key The key of the item to add to session storage
 * @param data The data to put into session storage
 */

function setItem(key, data) {
  try {
    window.sessionStorage.setItem(key, data);
  } catch (e) {
    /* Eat the exception */
  }
}

var RTL_LOCAL_STORAGE_KEY = 'isRTL'; // Default to undefined so that we initialize on first read.

var _isRTL;
/**
 * Gets the rtl state of the page (returns true if in rtl.)
 */


function getRTL$1(theme) {
  if (theme === void 0) {
    theme = {};
  }

  if (theme.rtl !== undefined) {
    return theme.rtl;
  }

  if (_isRTL === undefined) {
    // Fabric supports persisting the RTL setting between page refreshes via session storage
    var savedRTL = getItem(RTL_LOCAL_STORAGE_KEY);

    if (savedRTL !== null) {
      _isRTL = savedRTL === '1';
      setRTL$1(_isRTL);
    }

    var doc = getDocument();

    if (_isRTL === undefined && doc) {
      _isRTL = (doc.body && doc.body.getAttribute('dir') || doc.documentElement.getAttribute('dir')) === 'rtl';
      setRTL(_isRTL);
    }
  }

  return !!_isRTL;
}
/**
 * Sets the rtl state of the page (by adjusting the dir attribute of the html element.)
 */

function setRTL$1(isRTL, persistSetting) {
  if (persistSetting === void 0) {
    persistSetting = false;
  }

  var doc = getDocument();

  if (doc) {
    doc.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
  }

  if (persistSetting) {
    setItem(RTL_LOCAL_STORAGE_KEY, isRTL ? '1' : '0');
  }

  _isRTL = isRTL;
  setRTL(_isRTL);
}

/**
 * Determines whether or not an element has the virtual hierarchy extension.
 *
 * @public
 */
function isVirtualElement(element) {
  return element && !!element._virtual;
}

/**
 * Gets the virtual parent given the child element, if it exists.
 *
 * @public
 */

function getVirtualParent(child) {
  var parent;

  if (child && isVirtualElement(child)) {
    parent = child._virtual.parent;
  }

  return parent;
}

/**
 * Gets the element which is the parent of a given element.
 * If `allowVirtuaParents` is `true`, this method prefers the virtual parent over
 * real DOM parent when present.
 *
 * @public
 */

function getParent(child, allowVirtualParents) {
  if (allowVirtualParents === void 0) {
    allowVirtualParents = true;
  }

  return child && (allowVirtualParents && getVirtualParent(child) || child.parentNode && child.parentNode);
}

/**
 * Determines whether or not a parent element contains a given child element.
 * If `allowVirtualParents` is true, this method may return `true` if the child
 * has the parent in its virtual element hierarchy.
 *
 * @public
 */

function elementContains(parent, child, allowVirtualParents) {
  if (allowVirtualParents === void 0) {
    allowVirtualParents = true;
  }

  var isContained = false;

  if (parent && child) {
    if (allowVirtualParents) {
      isContained = false;

      while (child) {
        var nextParent = getParent(child);

        if (nextParent === parent) {
          isContained = true;
          break;
        }

        child = nextParent;
      }
    } else if (parent.contains) {
      isContained = parent.contains(child);
    }
  }

  return isContained;
}

/**
 * Finds the first parent element where the matchFunction returns true
 * @param element - element to start searching at
 * @param matchFunction - the function that determines if the element is a match
 * @returns the matched element or null no match was found
 */

function findElementRecursive(element, matchFunction) {
  if (!element || element === document.body) {
    return null;
  }

  return matchFunction(element) ? element : findElementRecursive(getParent(element), matchFunction);
}

/**
 * Determines if an element, or any of its ancestors, contain the given attribute
 * @param element - element to start searching at
 * @param attribute - the attribute to search for
 * @returns the value of the first instance found
 */

function elementContainsAttribute(element, attribute) {
  var elementMatch = findElementRecursive(element, function (testElement) {
    return testElement.hasAttribute(attribute);
  });
  return elementMatch && elementMatch.getAttribute(attribute);
}

function on(element, eventName, callback, options) {
  element.addEventListener(eventName, callback, options);
  return function () {
    return element.removeEventListener(eventName, callback, options);
  };
}

var DATA_PORTAL_ATTRIBUTE = 'data-portal-element';
/**
 * Identify element as a portal by setting an attribute.
 * @param element - Element to mark as a portal.
 */

function setPortalAttribute(element) {
  element.setAttribute(DATA_PORTAL_ATTRIBUTE, 'true');
}

/**
 * Determine whether a target is within a portal from perspective of root or optional parent.
 * This function only works against portal components that use the setPortalAttribute function.
 * If both parent and child are within the same portal this function will return false.
 * @param target - Element to query portal containment status of.
 * @param parent - Optional parent perspective. Search for containing portal stops at parent
 * (or root if parent is undefined or invalid.)
 */

function portalContainsElement(target, parent) {
  var elementMatch = findElementRecursive(target, function (testElement) {
    return parent === testElement || testElement.hasAttribute(DATA_PORTAL_ATTRIBUTE);
  });
  return elementMatch !== null && elementMatch.hasAttribute(DATA_PORTAL_ATTRIBUTE);
}

/** Raises a click event. */
function raiseClick(target) {
  var event = createNewEvent('MouseEvents');
  event.initEvent('click', true, true);
  target.dispatchEvent(event);
}

function createNewEvent(eventName) {
  var event;

  if (typeof Event === 'function') {
    // Chrome, Opera, Firefox
    event = new Event(eventName);
  } else {
    // IE
    event = document.createEvent('Event');
    event.initEvent(eventName, true, true);
  }

  return event;
}

/**
 * Sets the virtual parent of an element.
 * Pass `undefined` as the `parent` to clear the virtual parent.
 *
 * @public
 */
function setVirtualParent(child, parent) {
  var virtualChild = child;
  var virtualParent = parent;

  if (!virtualChild._virtual) {
    virtualChild._virtual = {
      children: []
    };
  }

  var oldParent = virtualChild._virtual.parent;

  if (oldParent && oldParent !== parent) {
    // Remove the child from its old parent.
    var index = oldParent._virtual.children.indexOf(virtualChild);

    if (index > -1) {
      oldParent._virtual.children.splice(index, 1);
    }
  }

  virtualChild._virtual.parent = virtualParent || undefined;

  if (virtualParent) {
    if (!virtualParent._virtual) {
      virtualParent._virtual = {
        children: []
      };
    }

    virtualParent._virtual.children.push(virtualChild);
  }
}

var MAX_CACHE_COUNT = 50;
var _memoizedClassNames = 0;
var stylesheet$1 = Stylesheet.getInstance();

if (stylesheet$1 && stylesheet$1.onReset) {
  stylesheet$1.onReset(function () {
    return _memoizedClassNames++;
  });
} // Note that because of the caching nature within the classNames memoization,
// I've disabled this rule to simply be able to work with any types.
// tslint:disable:no-any
// This represents a prop we attach to each Map to indicate the cached return value
// associated with the graph node.


var RetVal = '__retval__';
/**
 * Creates a getClassNames function which calls getStyles given the props, and injects them
 * into mergeStyleSets.
 *
 * Note that the props you pass in on every render should be in the same order and
 * immutable (numbers, strings, and booleans). This will allow the results to be memoized. Violating
 * these will cause extra recalcs to occur.
 */

function classNamesFunction(options) {
  // We build a trie where each node is a Map. The map entry key represents an argument
  // value, and the entry value is another node (Map). Each node has a `__retval__`
  // property which is used to hold the cached response.
  if (options === void 0) {
    options = {};
  } // To derive the response, we can simply ensure the arguments are added or already
  // exist in the trie. At the last node, if there is a `__retval__` we return that. Otherwise
  // we call the `getStyles` api to evaluate, cache on the property, and return that.


  var map = new Map();
  var styleCalcCount = 0;
  var getClassNamesCount = 0;
  var currentMemoizedClassNames = _memoizedClassNames;

  var getClassNames = function (styleFunctionOrObject, styleProps) {
    if (styleProps === void 0) {
      styleProps = {};
    }

    var _a, _b;

    getClassNamesCount++;
    var current = map;
    var theme = styleProps.theme;
    var rtl = theme && theme.rtl !== undefined ? theme.rtl : getRTL$1();
    var disableCaching = options.disableCaching; // On reset of our stylesheet, reset memoized cache.

    if (currentMemoizedClassNames !== _memoizedClassNames) {
      currentMemoizedClassNames = _memoizedClassNames;
      map = new Map();
      styleCalcCount = 0;
    }

    if (!options.disableCaching) {
      current = _traverseMap(map, styleFunctionOrObject);
      current = _traverseMap(current, styleProps);
    }

    if (disableCaching || !current[RetVal]) {
      if (styleFunctionOrObject === undefined) {
        current[RetVal] = {};
      } else {
        current[RetVal] = mergeCssSets([typeof styleFunctionOrObject === 'function' ? styleFunctionOrObject(styleProps) : styleFunctionOrObject], {
          rtl: !!rtl
        });
      }

      if (!disableCaching) {
        styleCalcCount++;
      }
    }

    if (styleCalcCount > (options.cacheSize || MAX_CACHE_COUNT)) {
      var win = getWindow();

      if ((_b = (_a = win) === null || _a === void 0 ? void 0 : _a.FabricConfig) === null || _b === void 0 ? void 0 : _b.enableClassNameCacheFullWarning) {
        console.warn("Styles are being recalculated too frequently. Cache miss rate is " + styleCalcCount + "/" + getClassNamesCount + "."); // tslint:disable-next-line:no-console

        console.trace();
      }

      map.clear();
      styleCalcCount = 0; // Mutate the options passed in, that's all we can do.

      options.disableCaching = true;
    } // Note: the RetVal is an attached property on the Map; not a key in the Map. We use this attached property to
    // cache the return value for this branch of the graph.


    return current[RetVal];
  };

  return getClassNames;
}

function _traverseEdge(current, value) {
  value = _normalizeValue(value);

  if (!current.has(value)) {
    current.set(value, new Map());
  }

  return current.get(value);
}

function _traverseMap(current, inputs) {
  if (typeof inputs === 'function') {
    var cachedInputsFromStyled = inputs.__cachedInputs__;

    if (cachedInputsFromStyled) {
      // The styled helper will generate the styles function and will attach the cached
      // inputs (consisting of the default styles, customzied styles, and user provided styles.)
      // These should be used as cache keys for deriving the memoized value.
      for (var _i = 0, _a = inputs.__cachedInputs__; _i < _a.length; _i++) {
        var input = _a[_i];
        current = _traverseEdge(current, input);
      }
    } else {
      current = _traverseEdge(current, inputs);
    }
  } else if (typeof inputs === 'object') {
    for (var propName in inputs) {
      if (inputs.hasOwnProperty(propName)) {
        current = _traverseEdge(current, inputs[propName]);
      }
    }
  }

  return current;
}

function _normalizeValue(value) {
  switch (value) {
    case undefined:
      return '__undefined__';

    case null:
      return '__null__';

    default:
      return value;
  }
}

var stylesheet$2 = Stylesheet.getInstance();

if (stylesheet$2 && stylesheet$2.onReset) {
  Stylesheet.getInstance().onReset(resetMemoizations);
}

var _resetCounter = 0;
var _emptyObject = {
  empty: true
};
var _dictionary = {};

var _weakMap = typeof WeakMap === 'undefined' ? null : WeakMap;
/**
 * Reset memoizations.
 */

function resetMemoizations() {
  _resetCounter++;
}
/**
 * Memoizes a function; when you pass in the same parameters multiple times, it returns a cached result.
 * Be careful when passing in objects, you need to pass in the same INSTANCE for caching to work. Otherwise
 * it will grow the cache unnecessarily. Also avoid using default values that evaluate functions; passing in
 * undefined for a value and relying on a default function will execute it the first time, but will not
 * re-evaluate subsequent times which may have been unexpected.
 *
 * By default, the cache will reset after 100 permutations, to avoid abuse cases where the function is
 * unintendedly called with unique objects. Without a reset, the cache could grow infinitely, so we safeguard
 * by resetting. To override this behavior, pass a value of 0 to the maxCacheSize parameter.
 *
 * @public
 * @param cb - The function to memoize.
 * @param maxCacheSize - Max results to cache. If the cache exceeds this value, it will reset on the next call.
 * @param ignoreNullOrUndefinedResult - Flag to decide whether to cache callback result if it is undefined/null.
 * If the flag is set to true, the callback result is recomputed every time till the callback result is
 * not undefined/null for the first time, and then the non-undefined/null version gets cached.
 * @returns A memoized version of the function.
 */

function memoizeFunction(cb, maxCacheSize, ignoreNullOrUndefinedResult) {
  if (maxCacheSize === void 0) {
    maxCacheSize = 100;
  }

  if (ignoreNullOrUndefinedResult === void 0) {
    ignoreNullOrUndefinedResult = false;
  } // Avoid breaking scenarios which don't have weak map.


  if (!_weakMap) {
    return cb;
  }

  var rootNode;
  var cacheSize = 0;
  var localResetCounter = _resetCounter; // tslint:disable-next-line:no-function-expression

  return function memoizedFunction() {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var currentNode = rootNode;

    if (rootNode === undefined || localResetCounter !== _resetCounter || maxCacheSize > 0 && cacheSize > maxCacheSize) {
      rootNode = _createNode();
      cacheSize = 0;
      localResetCounter = _resetCounter;
    }

    currentNode = rootNode; // Traverse the tree until we find the match.

    for (var i = 0; i < args.length; i++) {
      var arg = _normalizeArg(args[i]);

      if (!currentNode.map.has(arg)) {
        currentNode.map.set(arg, _createNode());
      }

      currentNode = currentNode.map.get(arg);
    }

    if (!currentNode.hasOwnProperty('value')) {
      currentNode.value = cb.apply(void 0, args);
      cacheSize++;
    }

    if (ignoreNullOrUndefinedResult && (currentNode.value === null || currentNode.value === undefined)) {
      currentNode.value = cb.apply(void 0, args);
    }

    return currentNode.value;
  };
}
/**
 * Creates a memoizer for a single-value function, backed by a WeakMap.
 * With a WeakMap, the memoized values are only kept as long as the source objects,
 * ensuring that there is no memory leak.
 *
 * This function assumes that the input values passed to the wrapped function will be
 * `function` or `object` types. To memoize functions which accept other inputs, use
 * `memoizeFunction`, which memoizes against arbitrary inputs using a lookup cache.
 *
 * @public
 */

function createMemoizer(getValue) {
  if (!_weakMap) {
    // Without a `WeakMap` implementation, memoization is not possible.
    return getValue;
  }

  var cache = new _weakMap();

  function memoizedGetValue(input) {
    if (!input || typeof input !== 'function' && typeof input !== 'object') {
      // A WeakMap can only be used to test against reference values, i.e. 'function' and 'object'.
      // All other inputs cannot be memoized against in this manner.
      return getValue(input);
    }

    if (cache.has(input)) {
      // tslint:disable-next-line:no-non-null-assertion
      return cache.get(input);
    }

    var value = getValue(input);
    cache.set(input, value);
    return value;
  }

  return memoizedGetValue;
}

function _normalizeArg(val) {
  if (!val) {
    return _emptyObject;
  } else if (typeof val === 'object' || typeof val === 'function') {
    return val;
  } else if (!_dictionary[val]) {
    _dictionary[val] = {
      val: val
    };
  }

  return _dictionary[val];
}

function _createNode() {
  return {
    map: _weakMap ? new _weakMap() : null
  };
}

function createComposedComponent(outer) {
  var Outer = outer;
  var outerMemoizer = createMemoizer(function (inner) {
    if (outer === inner) {
      throw new Error('Attempted to compose a component with itself.');
    }

    var Inner = inner;
    var innerMemoizer = createMemoizer(function (defaultRender) {
      var InnerWithDefaultRender = function (innerProps) {
        return React.createElement(Inner, __assign({}, innerProps, {
          defaultRender: defaultRender
        }));
      };

      return InnerWithDefaultRender;
    });

    var OuterWithDefaultRender = function (outerProps) {
      var defaultRender = outerProps.defaultRender;
      return React.createElement(Outer, __assign({}, outerProps, {
        defaultRender: defaultRender ? innerMemoizer(defaultRender) : Inner
      }));
    };

    return OuterWithDefaultRender;
  });
  return outerMemoizer;
}

var componentAsMemoizer = createMemoizer(createComposedComponent);
/**
 * Composes two components which conform to the `IComponentAs` specification; that is, two
 * components which accept a `defaultRender` prop, which is a 'default' implementation of
 * a component which accepts the same overall props.
 *
 * @public
 */

function composeComponentAs(outer, inner) {
  return componentAsMemoizer(outer)(inner);
}

/**
 * Concatination helper, which can merge class names together. Skips over falsey values.
 *
 * @public
 */
function css() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var classes = [];

  for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
    var arg = args_1[_a];

    if (arg) {
      if (typeof arg === 'string') {
        classes.push(arg);
      } else if (arg.hasOwnProperty('toString') && typeof arg.toString === 'function') {
        classes.push(arg.toString());
      } else {
        // tslint:disable-next-line:no-any
        for (var key in arg) {
          // tslint:disable-next-line:no-any
          if (arg[key]) {
            classes.push(key);
          }
        }
      }
    }
  }

  return classes.join(' ');
}

var CustomizationsGlobalKey = 'customizations';
var NO_CUSTOMIZATIONS = {
  settings: {},
  scopedSettings: {},
  inCustomizerContext: false
};

var _allSettings = GlobalSettings.getValue(CustomizationsGlobalKey, {
  settings: {},
  scopedSettings: {},
  inCustomizerContext: false
});

var _events = [];

var Customizations =
/** @class */
function () {
  function Customizations() {}

  Customizations.reset = function () {
    _allSettings.settings = {};
    _allSettings.scopedSettings = {};
  };
  /** Apply global Customization settings.
   * @example Customizations.applySettings(\{ theme: \{...\} \});
   */


  Customizations.applySettings = function (settings) {
    _allSettings.settings = __assign(__assign({}, _allSettings.settings), settings);

    Customizations._raiseChange();
  };
  /** Apply Customizations to a particular named scope, like a component.
   * @example Customizations.applyScopedSettings('Nav', \{ styles: () =\> \{\} \});
   */


  Customizations.applyScopedSettings = function (scopeName, settings) {
    _allSettings.scopedSettings[scopeName] = __assign(__assign({}, _allSettings.scopedSettings[scopeName]), settings);

    Customizations._raiseChange();
  };

  Customizations.getSettings = function (properties, scopeName, localSettings) {
    if (localSettings === void 0) {
      localSettings = NO_CUSTOMIZATIONS;
    }

    var settings = {};
    var localScopedSettings = scopeName && localSettings.scopedSettings[scopeName] || {};
    var globalScopedSettings = scopeName && _allSettings.scopedSettings[scopeName] || {};

    for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
      var property = properties_1[_i];
      settings[property] = localScopedSettings[property] || localSettings.settings[property] || globalScopedSettings[property] || _allSettings.settings[property];
    }

    return settings;
  };
  /** Used to run some code that sets Customizations without triggering an update until the end.
   * Useful for applying Customizations that don't affect anything currently rendered, or for
   * applying many customizations at once.
   * @param suppressUpdate - Do not raise the change event at the end, preventing all updates
   */


  Customizations.applyBatchedUpdates = function (code, suppressUpdate) {
    Customizations._suppressUpdates = true;

    try {
      code();
    } catch (_a) {
      /* do nothing */
    }

    Customizations._suppressUpdates = false;

    if (!suppressUpdate) {
      Customizations._raiseChange();
    }
  };

  Customizations.observe = function (onChange) {
    _events.push(onChange);
  };

  Customizations.unobserve = function (onChange) {
    _events = _events.filter(function (cb) {
      return cb !== onChange;
    });
  };

  Customizations._raiseChange = function () {
    if (!Customizations._suppressUpdates) {
      _events.forEach(function (cb) {
        return cb();
      });
    }
  };

  return Customizations;
}();

var CustomizerContext = React.createContext({
  customizations: {
    inCustomizerContext: false,
    settings: {},
    scopedSettings: {}
  }
});

/**
 * Merge new and old settings, giving priority to new settings.
 * New settings is optional in which case oldSettings is returned as-is.
 * @param oldSettings - Old settings to fall back to.
 * @param newSettings - New settings that will be merged over oldSettings.
 * @returns Merged settings.
 */

function mergeSettings(oldSettings, newSettings) {
  if (oldSettings === void 0) {
    oldSettings = {};
  }

  var mergeSettingsWith = _isSettingsFunction(newSettings) ? newSettings : _settingsMergeWith(newSettings);
  return mergeSettingsWith(oldSettings);
}
function mergeScopedSettings(oldSettings, newSettings) {
  if (oldSettings === void 0) {
    oldSettings = {};
  }

  var mergeSettingsWith = _isSettingsFunction(newSettings) ? newSettings : _scopedSettingsMergeWith(newSettings);
  return mergeSettingsWith(oldSettings);
}

function _isSettingsFunction(settings) {
  return typeof settings === 'function';
}

function _settingsMergeWith(newSettings) {
  return function (settings) {
    return newSettings ? __assign(__assign({}, settings), newSettings) : settings;
  };
}

function _scopedSettingsMergeWith(scopedSettingsFromProps) {
  if (scopedSettingsFromProps === void 0) {
    scopedSettingsFromProps = {};
  }

  return function (oldScopedSettings) {
    var newScopedSettings = __assign({}, oldScopedSettings);

    for (var scopeName in scopedSettingsFromProps) {
      if (scopedSettingsFromProps.hasOwnProperty(scopeName)) {
        newScopedSettings[scopeName] = __assign(__assign({}, oldScopedSettings[scopeName]), scopedSettingsFromProps[scopeName]);
      }
    }

    return newScopedSettings;
  };
}

/**
 * Merge props and customizations giving priority to props over context.
 * NOTE: This function will always perform multiple merge operations. Use with caution.
 * @param props - New settings to merge in.
 * @param parentContext - Context containing current settings.
 * @returns Merged customizations.
 */

function mergeCustomizations(props, parentContext) {
  var _a = (parentContext || {}).customizations,
      customizations = _a === void 0 ? {
    settings: {},
    scopedSettings: {}
  } : _a;
  return {
    customizations: {
      settings: mergeSettings(customizations.settings, props.settings),
      scopedSettings: mergeScopedSettings(customizations.scopedSettings, props.scopedSettings),
      inCustomizerContext: true
    }
  };
}

/**
 * The Customizer component allows for default props to be mixed into components which
 * are decorated with the customizable() decorator, or use the styled HOC. This enables
 * injection scenarios like:
 *
 * 1. render svg icons instead of the icon font within all buttons
 * 2. inject a custom theme object into a component
 *
 * Props are provided via the settings prop which should be one of the following:
 * - A json map which contains 1 or more name/value pairs representing injectable props.
 * - A function that receives the current settings and returns the new ones that apply to the scope
 *
 * @public
 */

var Customizer =
/** @class */
function (_super) {
  __extends(Customizer, _super);

  function Customizer() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this._onCustomizationChange = function () {
      return _this.forceUpdate();
    };

    return _this;
  }

  Customizer.prototype.componentDidMount = function () {
    Customizations.observe(this._onCustomizationChange);
  };

  Customizer.prototype.componentWillUnmount = function () {
    Customizations.unobserve(this._onCustomizationChange);
  };

  Customizer.prototype.render = function () {
    var _this = this;

    var contextTransform = this.props.contextTransform;
    return React.createElement(CustomizerContext.Consumer, null, function (parentContext) {
      var newContext = mergeCustomizations(_this.props, parentContext);

      if (contextTransform) {
        newContext = contextTransform(newContext);
      }

      return React.createElement(CustomizerContext.Provider, {
        value: newContext
      }, _this.props.children);
    });
  };

  return Customizer;
}(React.Component);

/**
 * Allows you to hoist static functions in components.
 * Created for the purpose of fixing broken static functions in classes
 * that utilize decorators.
 *
 * @public
 * @param source - The object where the methods are hoisted from.
 * @param dest - The object to hoist the methods onto.
 * @returns The dest object with methods added
 */
function hoistStatics(source, dest) {
  for (var name_1 in source) {
    if (source.hasOwnProperty(name_1)) {
      // tslint:disable-next-line:no-any
      dest[name_1] = source[name_1];
    }
  }

  return dest;
}

function customizable(scope, fields, concatStyles) {
  // tslint:disable-next-line:no-shadowed-variable
  return function customizableFactory( // tslint:disable-next-line:no-any
  ComposedComponent) {
    var _a;

    var resultClass = (_a =
    /** @class */
    function (_super) {
      __extends(ComponentWithInjectedProps, _super);

      function ComponentWithInjectedProps(props) {
        var _this = _super.call(this, props) || this; // tslint:disable-next-line:no-any


        _this._styleCache = {};
        _this._onSettingChanged = _this._onSettingChanged.bind(_this);
        return _this;
      }

      ComponentWithInjectedProps.prototype.componentDidMount = function () {
        Customizations.observe(this._onSettingChanged);
      };

      ComponentWithInjectedProps.prototype.componentWillUnmount = function () {
        Customizations.unobserve(this._onSettingChanged);
      };

      ComponentWithInjectedProps.prototype.render = function () {
        var _this = this;

        return React.createElement(CustomizerContext.Consumer, null, function (context) {
          var defaultProps = Customizations.getSettings(fields, scope, context.customizations); // tslint:disable-next-line:no-any

          var componentProps = _this.props; // If defaultProps.styles is a function, evaluate it before calling concatStyleSets

          if (defaultProps.styles && typeof defaultProps.styles === 'function') {
            defaultProps.styles = defaultProps.styles(__assign(__assign({}, defaultProps), componentProps));
          } // If concatStyles is true and custom styles have been defined compute those styles


          if (concatStyles && defaultProps.styles) {
            if (_this._styleCache.default !== defaultProps.styles || _this._styleCache.component !== componentProps.styles) {
              var mergedStyles = concatStyleSets(defaultProps.styles, componentProps.styles);
              _this._styleCache.default = defaultProps.styles;
              _this._styleCache.component = componentProps.styles;
              _this._styleCache.merged = mergedStyles;
            }

            return React.createElement(ComposedComponent, __assign({}, defaultProps, componentProps, {
              styles: _this._styleCache.merged
            }));
          }

          return React.createElement(ComposedComponent, __assign({}, defaultProps, componentProps));
        });
      };

      ComponentWithInjectedProps.prototype._onSettingChanged = function () {
        this.forceUpdate();
      };

      return ComponentWithInjectedProps;
    }(React.Component), _a.displayName = 'Customized' + scope, _a);
    return hoistStatics(ComposedComponent, resultClass);
  };
}

/**
 * Extends a component's lifetime methods by appending new functions to the existing lifetime functions.
 */

function extendComponent(parent, methods) {
  for (var name_1 in methods) {
    if (methods.hasOwnProperty(name_1)) {
      // tslint:disable-next-line:no-any
      parent[name_1] = appendFunction(parent, parent[name_1], methods[name_1]);
    }
  }
}

var IS_FOCUSABLE_ATTRIBUTE = 'data-is-focusable';
var IS_VISIBLE_ATTRIBUTE = 'data-is-visible';
var FOCUSZONE_ID_ATTRIBUTE = 'data-focuszone-id';
var FOCUSZONE_SUB_ATTRIBUTE = 'data-is-sub-focuszone';
/**
 * Gets the first focusable element.
 *
 * @public
 */

function getFirstFocusable(rootElement, currentElement, includeElementsInFocusZones) {
  return getNextElement(rootElement, currentElement, true
  /*checkNode*/
  , false
  /*suppressParentTraversal*/
  , false
  /*suppressChildTraversal*/
  , includeElementsInFocusZones);
}
/**
 * Gets the last focusable element.
 *
 * @public
 */

function getLastFocusable(rootElement, currentElement, includeElementsInFocusZones) {
  return getPreviousElement(rootElement, currentElement, true
  /*checkNode*/
  , false
  /*suppressParentTraversal*/
  , true
  /*traverseChildren*/
  , includeElementsInFocusZones);
}
/**
 * Attempts to focus the first focusable element that is a child or child's child of the rootElement.
 *
 * @public
 * @param rootElement - Element to start the search for a focusable child.
 * @returns True if focus was set, false if it was not.
 */

function focusFirstChild(rootElement) {
  var element = getNextElement(rootElement, rootElement, true, false, false, true);

  if (element) {
    focusAsync(element);
    return true;
  }

  return false;
}
/**
 * Traverse to find the previous element.
 * If tabbable is true, the element must have tabIndex != -1.
 *
 * @public
 */

function getPreviousElement(rootElement, currentElement, checkNode, suppressParentTraversal, traverseChildren, includeElementsInFocusZones, allowFocusRoot, tabbable) {
  if (!currentElement || !allowFocusRoot && currentElement === rootElement) {
    return null;
  }

  var isCurrentElementVisible = isElementVisible(currentElement); // Check its children.

  if (traverseChildren && isCurrentElementVisible && (includeElementsInFocusZones || !(isElementFocusZone(currentElement) || isElementFocusSubZone(currentElement)))) {
    var childMatch = getPreviousElement(rootElement, currentElement.lastElementChild, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);

    if (childMatch) {
      if (tabbable && isElementTabbable(childMatch, true) || !tabbable) {
        return childMatch;
      }

      var childMatchSiblingMatch = getPreviousElement(rootElement, childMatch.previousElementSibling, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);

      if (childMatchSiblingMatch) {
        return childMatchSiblingMatch;
      }

      var childMatchParent = childMatch.parentElement; // At this point if we have not found any potential matches
      // start looking at the rest of the subtree under the currentParent.
      // NOTE: We do not want to recurse here because doing so could
      // cause elements to get skipped.

      while (childMatchParent && childMatchParent !== currentElement) {
        var childMatchParentMatch = getPreviousElement(rootElement, childMatchParent.previousElementSibling, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);

        if (childMatchParentMatch) {
          return childMatchParentMatch;
        }

        childMatchParent = childMatchParent.parentElement;
      }
    }
  } // Check the current node, if it's not the first traversal.


  if (checkNode && isCurrentElementVisible && isElementTabbable(currentElement, tabbable)) {
    return currentElement;
  } // Check its previous sibling.


  var siblingMatch = getPreviousElement(rootElement, currentElement.previousElementSibling, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);

  if (siblingMatch) {
    return siblingMatch;
  } // Check its parent.


  if (!suppressParentTraversal) {
    return getPreviousElement(rootElement, currentElement.parentElement, true, false, false, includeElementsInFocusZones, allowFocusRoot, tabbable);
  }

  return null;
}
/**
 * Traverse to find the next focusable element.
 * If tabbable is true, the element must have tabIndex != -1.
 *
 * @public
 * @param checkNode - Include currentElement in search when true.
 */

function getNextElement(rootElement, currentElement, checkNode, suppressParentTraversal, suppressChildTraversal, includeElementsInFocusZones, allowFocusRoot, tabbable) {
  if (!currentElement || currentElement === rootElement && suppressChildTraversal && !allowFocusRoot) {
    return null;
  }

  var isCurrentElementVisible = isElementVisible(currentElement); // Check the current node, if it's not the first traversal.

  if (checkNode && isCurrentElementVisible && isElementTabbable(currentElement, tabbable)) {
    return currentElement;
  } // Check its children.


  if (!suppressChildTraversal && isCurrentElementVisible && (includeElementsInFocusZones || !(isElementFocusZone(currentElement) || isElementFocusSubZone(currentElement)))) {
    var childMatch = getNextElement(rootElement, currentElement.firstElementChild, true, true, false, includeElementsInFocusZones, allowFocusRoot, tabbable);

    if (childMatch) {
      return childMatch;
    }
  }

  if (currentElement === rootElement) {
    return null;
  } // Check its sibling.


  var siblingMatch = getNextElement(rootElement, currentElement.nextElementSibling, true, true, false, includeElementsInFocusZones, allowFocusRoot, tabbable);

  if (siblingMatch) {
    return siblingMatch;
  }

  if (!suppressParentTraversal) {
    return getNextElement(rootElement, currentElement.parentElement, false, false, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
  }

  return null;
}
/**
 * Determines if an element is visible.
 *
 * @public
 */

function isElementVisible(element) {
  // If the element is not valid, return false.
  if (!element || !element.getAttribute) {
    return false;
  }

  var visibilityAttribute = element.getAttribute(IS_VISIBLE_ATTRIBUTE); // If the element is explicitly marked with the visibility attribute, return that value as boolean.

  if (visibilityAttribute !== null && visibilityAttribute !== undefined) {
    return visibilityAttribute === 'true';
  } // Fallback to other methods of determining actual visibility.


  return element.offsetHeight !== 0 || element.offsetParent !== null || // tslint:disable-next-line:no-any
  element.isVisible === true; // used as a workaround for testing.
}
/**
 * Determines if an element can receive focus programmatically or via a mouse click.
 * If checkTabIndex is true, additionally checks to ensure the element can be focused with the tab key,
 * meaning tabIndex != -1.
 *
 * @public
 */

function isElementTabbable(element, checkTabIndex) {
  // If this element is null or is disabled, it is not considered tabbable.
  if (!element || element.disabled) {
    return false;
  }

  var tabIndex = 0;
  var tabIndexAttributeValue = null;

  if (element && element.getAttribute) {
    tabIndexAttributeValue = element.getAttribute('tabIndex');

    if (tabIndexAttributeValue) {
      tabIndex = parseInt(tabIndexAttributeValue, 10);
    }
  }

  var isFocusableAttribute = element.getAttribute ? element.getAttribute(IS_FOCUSABLE_ATTRIBUTE) : null;
  var isTabIndexSet = tabIndexAttributeValue !== null && tabIndex >= 0;
  var result = !!element && isFocusableAttribute !== 'false' && (element.tagName === 'A' || element.tagName === 'BUTTON' || element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' || element.tagName === 'SELECT' || isFocusableAttribute === 'true' || isTabIndexSet);
  return checkTabIndex ? tabIndex !== -1 && result : result;
}
/**
 * Determines if a given element is a focus zone.
 *
 * @public
 */

function isElementFocusZone(element) {
  return !!(element && element.getAttribute && !!element.getAttribute(FOCUSZONE_ID_ATTRIBUTE));
}
/**
 * Determines if a given element is a focus sub zone.
 *
 * @public
 */

function isElementFocusSubZone(element) {
  return !!(element && element.getAttribute && element.getAttribute(FOCUSZONE_SUB_ATTRIBUTE) === 'true');
}
/**
 * Determines if an element, or any of its children, contain focus.
 *
 * @public
 */

function doesElementContainFocus(element) {
  var document = getDocument(element);
  var currentActiveElement = document && document.activeElement;

  if (currentActiveElement && elementContains(element, currentActiveElement)) {
    return true;
  }

  return false;
}
/**
 * Determines if an, or any of its ancestors, sepcificies that it doesn't want focus to wrap
 * @param element - element to start searching from
 * @param noWrapDataAttribute - the no wrap data attribute to match (either)
 * @returns true if focus should wrap, false otherwise
 */

function shouldWrapFocus(element, noWrapDataAttribute) {
  return elementContainsAttribute(element, noWrapDataAttribute) === 'true' ? false : true;
}
var targetToFocusOnNextRepaint = undefined;
/**
 * Sets focus to an element asynchronously. The focus will be set at the next browser repaint,
 * meaning it won't cause any extra recalculations. If more than one focusAsync is called during one frame,
 * only the latest called focusAsync element will actually be focused
 * @param element - The element to focus
 */

function focusAsync(element) {
  if (element) {
    // An element was already queued to be focused, so replace that one with the new element
    if (targetToFocusOnNextRepaint) {
      targetToFocusOnNextRepaint = element;
      return;
    }

    targetToFocusOnNextRepaint = element;
    var win = getWindow(element);

    if (win) {
      // element.focus() is a no-op if the element is no longer in the DOM, meaning this is always safe
      win.requestAnimationFrame(function () {
        targetToFocusOnNextRepaint && targetToFocusOnNextRepaint.focus(); // We are done focusing for this frame, so reset the queued focus element

        targetToFocusOnNextRepaint = undefined;
      });
    }
  }
}
/**
 * Finds the closest focusable element via an index path from a parent. See
 * `getElementIndexPath` for getting an index path from an element to a child.
 */

function getFocusableByIndexPath(parent, path) {
  var element = parent;

  for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
    var index = path_1[_i];
    var nextChild = element.children[Math.min(index, element.children.length - 1)];

    if (!nextChild) {
      break;
    }

    element = nextChild;
  }

  element = isElementTabbable(element) && isElementVisible(element) ? element : getNextElement(parent, element, true) || getPreviousElement(parent, element);
  return element;
}
/**
 * Finds the element index path from a parent element to a child element.
 *
 * If you had this node structure: "A has children [B, C] and C has child D",
 * the index path from A to D would be [1, 0], or `parent.chidren[1].children[0]`.
 */

function getElementIndexPath(fromElement, toElement) {
  var path = [];

  while (toElement && fromElement && toElement !== fromElement) {
    var parent_1 = getParent(toElement, true);

    if (parent_1 === null) {
      return [];
    }

    path.unshift(Array.prototype.indexOf.call(parent_1.children, toElement));
    toElement = parent_1;
  }

  return path;
}

var REACT_LIFECYCLE_EXCLUSIONS = ['setState', 'render', 'componentWillMount', 'UNSAFE_componentWillMount', 'componentDidMount', 'componentWillReceiveProps', 'UNSAFE_componentWillReceiveProps', 'shouldComponentUpdate', 'componentWillUpdate', 'getSnapshotBeforeUpdate', 'UNSAFE_componentWillUpdate', 'componentDidUpdate', 'componentWillUnmount'];
/**
 * Allows you to hoist methods, except those in an exclusion set from a source object into a destination object.
 *
 * @public
 * @param destination - The instance of the object to hoist the methods onto.
 * @param source - The instance of the object where the methods are hoisted from.
 * @param exclusions - (Optional) What methods to exclude from being hoisted.
 * @returns An array of names of methods that were hoisted.
 */

function hoistMethods( // tslint:disable-next-line:no-any
destination, // tslint:disable-next-line:no-any
source, exclusions) {
  if (exclusions === void 0) {
    exclusions = REACT_LIFECYCLE_EXCLUSIONS;
  }

  var hoisted = [];

  var _loop_1 = function (methodName) {
    if (typeof source[methodName] === 'function' && destination[methodName] === undefined && (!exclusions || exclusions.indexOf(methodName) === -1)) {
      hoisted.push(methodName);
      /* tslint:disable:no-function-expression */

      destination[methodName] = function () {
        source[methodName].apply(source, arguments);
      };
      /* tslint:enable */

    }
  };

  for (var methodName in source) {
    _loop_1(methodName);
  }

  return hoisted;
}
/**
 * Provides a method for convenience to unhoist hoisted methods.
 *
 * @public
 * @param source - The source object upon which methods were hoisted.
 * @param methodNames - An array of method names to unhoist.
 */
// tslint:disable-next-line:no-any

function unhoistMethods(source, methodNames) {
  methodNames.forEach(function (methodName) {
    return delete source[methodName];
  });
}

/**
 * Helper to manage componentRef resolution. Internally appends logic to
 * lifetime methods to resolve componentRef to the passed in object.
 *
 * Usage: call initializeComponentRef(this) in the constructor,
 */

function initializeComponentRef(obj) {
  extendComponent(obj, {
    componentDidMount: _onMount,
    componentDidUpdate: _onUpdate,
    componentWillUnmount: _onUnmount
  });
}

function _onMount() {
  _setComponentRef(this.props.componentRef, this);
}

function _onUpdate(prevProps) {
  if (prevProps.componentRef !== this.props.componentRef) {
    // tslint:disable-next-line:no-any
    _setComponentRef(prevProps.componentRef, null);

    _setComponentRef(this.props.componentRef, this);
  }
}

function _onUnmount() {
  _setComponentRef(this.props.componentRef, null);
}

function _setComponentRef(componentRef, value) {
  if (componentRef) {
    if (typeof componentRef === 'object') {
      componentRef.current = value;
    } else if (typeof componentRef === 'function') {
      componentRef(value);
    }
  }
}

var _a$1;
var DirectionalKeyCodes = (_a$1 = {}, _a$1[KeyCodes.up] = 1, _a$1[KeyCodes.down] = 1, _a$1[KeyCodes.left] = 1, _a$1[KeyCodes.right] = 1, _a$1[KeyCodes.home] = 1, _a$1[KeyCodes.end] = 1, _a$1[KeyCodes.tab] = 1, _a$1[KeyCodes.pageUp] = 1, _a$1[KeyCodes.pageDown] = 1, _a$1);
/**
 * Returns true if the keycode is a directional keyboard key.
 */

function isDirectionalKeyCode(which) {
  return !!DirectionalKeyCodes[which];
}

var IsFocusVisibleClassName = 'ms-Fabric--isFocusVisible';
var IsFocusHiddenClassName = 'ms-Fabric--isFocusHidden';
/**
 * Sets the visibility of focus styling.
 *
 * By default, focus styles (the box surrounding a focused Button, for example) only show up when navigational
 * keypresses occur (through Tab, arrows, PgUp/PgDn, Home and End), and are hidden when mouse interactions occur.
 * This API provides an imperative way to turn them on/off.
 *
 * A use case might be when you have a keypress like ctrl-f6 navigate to a particular region on the page,
 * and want focus to show up.
 *
 * @param enabled - whether to remove or add focus
 * @param target - optional target
 */

function setFocusVisibility(enabled, target) {
  var win = target ? getWindow(target) : getWindow();

  if (win) {
    var classList = win.document.body.classList;
    classList.add(enabled ? IsFocusVisibleClassName : IsFocusHiddenClassName);
    classList.remove(enabled ? IsFocusHiddenClassName : IsFocusVisibleClassName);
  }
}

/**
 * Counter for mounted component that uses focus rectangle.
 * We want to cleanup the listners before last component that uses focus rectangle unmounts.
 */

var mountCounters = new WeakMap();

function setMountCounters(key, delta) {
  var newValue;
  var currValue = mountCounters.get(key);

  if (currValue) {
    newValue = currValue + delta;
  } else {
    newValue = 1;
  }

  mountCounters.set(key, newValue);
  return newValue;
}
/**
 * Initializes the logic which:
 *
 * 1. Subscribes keydown and mousedown events. (It will only do it once per window,
 *    so it's safe to call this method multiple times.)
 * 2. When the user presses directional keyboard keys, adds the 'ms-Fabric--isFocusVisible' classname
 *    to the document body, removes the 'ms-Fabric-isFocusHidden' classname.
 * 3. When the user clicks a mouse button, adds the 'ms-Fabric-isFocusHidden' classname to the
 *    document body, removes the 'ms-Fabric--isFocusVisible' classname.
 *
 * This logic allows components on the page to conditionally render focus treatments based on
 * the existence of global classnames, which simplifies logic overall.
 *
 * @param rootRef - A Ref object. Focus rectangle can be applied on itself and all its children.
 */


function useFocusRects(rootRef) {
  var _a;

  var win = getWindow((_a = rootRef) === null || _a === void 0 ? void 0 : _a.current);
  React.useEffect(function () {
    var _a;

    if (!win || ((_a = win.FabricConfig) === null || _a === void 0 ? void 0 : _a.disableFocusRects) === true) {
      return undefined;
    }

    var count = setMountCounters(win, 1);

    if (count <= 1) {
      win.addEventListener('mousedown', _onMouseDown, true);
      win.addEventListener('pointerdown', _onPointerDown, true);
      win.addEventListener('keydown', _onKeyDown, true);
    }

    return function () {
      var _a;

      if (!win || ((_a = win.FabricConfig) === null || _a === void 0 ? void 0 : _a.disableFocusRects) === true) {
        return;
      }

      count = setMountCounters(win, -1);

      if (count === 0) {
        win.removeEventListener('mousedown', _onMouseDown, true);
        win.removeEventListener('pointerdown', _onPointerDown, true);
        win.removeEventListener('keydown', _onKeyDown, true);
      }
    };
  }, [win]);
}
/**
 * Function Component wrapper which enables calling `useFocusRects` hook.
 * Renders nothing.
 */

var FocusRects = function (props) {
  useFocusRects(props.rootRef);
  return null;
};

function _onMouseDown(ev) {
  setFocusVisibility(false, ev.target);
}

function _onPointerDown(ev) {
  if (ev.pointerType !== 'mouse') {
    setFocusVisibility(false, ev.target);
  }
}

function _onKeyDown(ev) {
  // tslint:disable-next-line:deprecation
  if (isDirectionalKeyCode(ev.which)) {
    setFocusVisibility(true, ev.target);
  }
}

/**
 * Fetches an item from local storage without throwing an exception
 * @param key The key of the item to fetch from local storage
 */

function getItem$1(key) {
  var result = null;

  try {
    var win = getWindow();
    result = win ? win.localStorage.getItem(key) : null;
  } catch (e) {
    /* Eat the exception */
  }

  return result;
}

var _language;
/**
 * Gets the rtl state of the page (returns true if in rtl.)
 *
 * @public
 */


function getLanguage() {
  if (_language === undefined) {
    var doc = getDocument();
    var savedLanguage = getItem$1('language');

    if (savedLanguage !== null) {
      _language = savedLanguage;
    }

    if (_language === undefined && doc) {
      _language = doc.documentElement.getAttribute('lang');
    }

    if (_language === undefined) {
      _language = 'en';
    }
  }

  return _language;
}

/**
 * Simple deep merge function. Takes all arguments and returns a deep copy of the objects merged
 * together in the order provided. If an object creates a circular reference, it will assign the
 * original reference.
 */
function merge(target) {
  var args = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }

  for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
    var arg = args_1[_a];

    _merge(target || {}, arg);
  }

  return target;
}
/**
 * The _merge helper iterates through all props on source and assigns them to target.
 * When the value is an object, we will create a deep clone of the object. However if
 * there is a circular reference, the value will not be deep cloned and will persist
 * the reference.
 */
// tslint:disable-next-line:no-any

function _merge(target, source, circularReferences) {
  if (circularReferences === void 0) {
    circularReferences = [];
  }

  circularReferences.push(source);

  for (var name_1 in source) {
    if (source.hasOwnProperty(name_1)) {
      var value = source[name_1];

      if (typeof value === 'object' && value !== null) {
        var isCircularReference = circularReferences.indexOf(value) > -1;
        target[name_1] = isCircularReference ? value : _merge(target[name_1] || {}, value, circularReferences);
      } else {
        target[name_1] = value;
      }
    }
  }

  circularReferences.pop();
  return target;
}

/**
 * Returns true if and only if the user is on a iOS device.
 * Used to determine whether iOS-specific behavior should be applied.
 */
var isIOS = function () {
  if (!window || !window.navigator || !window.navigator.userAgent) {
    return false;
  }

  return /iPad|iPhone|iPod/i.test(window.navigator.userAgent);
};

var isMacResult;
/**
 * Returns true if the user is on a Mac. Caches the result value.
 * @param reset - Reset the cached result value (mainly for testing).
 */

function isMac(reset) {
  if (typeof isMacResult === 'undefined' || reset) {
    var win = getWindow();
    var userAgent = win && win.navigator.userAgent;
    isMacResult = !!userAgent && userAgent.indexOf('Macintosh') !== -1;
  }

  return !!isMacResult;
}

/**
 * An array of events that are allowed on every html element type.
 *
 * @public
 */

var baseElementEvents = ['onCopy', 'onCut', 'onPaste', 'onCompositionEnd', 'onCompositionStart', 'onCompositionUpdate', 'onFocus', 'onFocusCapture', 'onBlur', 'onBlurCapture', 'onChange', 'onInput', 'onSubmit', 'onLoad', 'onError', 'onKeyDown', 'onKeyDownCapture', 'onKeyPress', 'onKeyUp', 'onAbort', 'onCanPlay', 'onCanPlayThrough', 'onDurationChange', 'onEmptied', 'onEncrypted', 'onEnded', 'onLoadedData', 'onLoadedMetadata', 'onLoadStart', 'onPause', 'onPlay', 'onPlaying', 'onProgress', 'onRateChange', 'onSeeked', 'onSeeking', 'onStalled', 'onSuspend', 'onTimeUpdate', 'onVolumeChange', 'onWaiting', 'onClick', 'onClickCapture', 'onContextMenu', 'onDoubleClick', 'onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop', 'onMouseDown', 'onMouseDownCapture', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp', 'onMouseUpCapture', 'onSelect', 'onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart', 'onScroll', 'onWheel', 'onPointerCancel', 'onPointerDown', 'onPointerEnter', 'onPointerLeave', 'onPointerMove', 'onPointerOut', 'onPointerOver', 'onPointerUp', 'onGotPointerCapture', 'onLostPointerCapture'];
/**
 * An array of element attributes which are allowed on every html element type.
 *
 * @public
 */

var baseElementProperties = ['accessKey', 'children', 'className', 'contentEditable', 'dir', 'draggable', 'hidden', 'htmlFor', 'id', 'lang', 'role', 'style', 'tabIndex', 'title', 'translate', 'spellCheck', 'name'];
/**
 * An array of HTML element properties and events.
 *
 * @public
 */

var htmlElementProperties = baseElementProperties.concat(baseElementEvents);
/**
 * An array of A tag properties and events.
 *
 * @public
 */

var anchorProperties = htmlElementProperties.concat(['download', 'href', 'hrefLang', 'media', 'rel', 'target', 'type']);
/**
 * An array of BUTTON tag properties and events.
 *
 * @public
 */

var buttonProperties = htmlElementProperties.concat(['autoFocus', 'disabled', 'form', 'formAction', 'formEncType', 'formMethod', 'formNoValidate', 'formTarget', 'type', 'value']);
/**
 * An array of IMAGE tag properties and events.
 *
 * @public
 */

var imgProperties = htmlElementProperties.concat(['alt', 'crossOrigin', 'height', 'src', 'srcSet', 'useMap', 'width']);
/**
 * An array of DIV tag properties and events.
 *
 * @public
 */

var divProperties = htmlElementProperties;
/**
 * Gets native supported props for an html element provided the allowance set. Use one of the property
 * sets defined (divProperties, buttonPropertes, etc) to filter out supported properties from a given
 * props set. Note that all data- and aria- prefixed attributes will be allowed.
 * NOTE: getNativeProps should always be applied first when adding props to a react component. The
 * non-native props should be applied second. This will prevent getNativeProps from overriding your custom props.
 * For example, if props passed to getNativeProps has an onClick function and getNativeProps is added to
 * the component after an onClick function is added, then the getNativeProps onClick will override it.
 *
 * @public
 * @param props - The unfiltered input props
 * @param allowedPropsNames-  The array of allowed propnames.
 * @returns The filtered props
 */

function getNativeProps(props, allowedPropNames, excludedPropNames) {
  // It'd be great to properly type this while allowing 'aria-` and 'data-' attributes like TypeScript does for
  // JSX attributes, but that ability is hardcoded into the TS compiler with no analog in TypeScript typings.
  // Then we'd be able to enforce props extends native props (including aria- and data- attributes), and then
  // return native props.
  // We should be able to do this once this PR is merged: https://github.com/microsoft/TypeScript/pull/26797
  return filteredAssign(function (propName) {
    return (!excludedPropNames || excludedPropNames.indexOf(propName) < 0) && (propName.indexOf('data-') === 0 || propName.indexOf('aria-') === 0 || allowedPropNames.indexOf(propName) >= 0);
  }, {}, props);
}

function createComposedRenderFunction(outer) {
  var outerMemoizer = createMemoizer(function (inner) {
    var innerMemoizer = createMemoizer(function (defaultRender) {
      return function (innerProps) {
        return inner(innerProps, defaultRender);
      };
    });
    return function (outerProps, defaultRender) {
      return outer(outerProps, defaultRender ? innerMemoizer(defaultRender) : inner);
    };
  });
  return outerMemoizer;
}

var memoizer = createMemoizer(createComposedRenderFunction);
/**
 * Composes two 'render functions' to produce a final render function that renders
 * the outer function, passing the inner function as 'default render'. The inner function
 * is then passed the original 'default render' prop.
 * @public
 */

function composeRenderFunction(outer, inner) {
  return memoizer(outer)(inner);
}

var DefaultFields = ['theme', 'styles'];
/**
 * The styled HOC wrapper allows you to create a functional wrapper around a given component which will resolve
 * getStyles functional props, and mix customized props passed in using concatStyleSets.
 *
 * @example
 * ```tsx
 * export const Toggle = styled(
 *   ToggleBase,
 *   props => ({ root: { background: 'red' }})
 * );
 * ```
 * @param Component - The unstyled base component to render, which receives styles.
 * @param baseStyles - The styles which should be curried with the component.
 * @param getProps - A helper which provides default props.
 * @param customizable - An object which defines which props can be customized using the Customizer.
 * @param pure - A boolean indicating if the component should avoid re-rendering when props haven't changed.
 * Note that pure should not be used on components which allow children, or take in complex objects or
 * arrays as props which could mutate on every render.
 */

function styled(Component, baseStyles, getProps, customizable, pure) {
  customizable = customizable || {
    scope: '',
    fields: undefined
  };
  var scope = customizable.scope,
      _a = customizable.fields,
      fields = _a === void 0 ? DefaultFields : _a;
  var ParentComponent = pure ? React.PureComponent : React.Component;

  var Wrapped =
  /** @class */
  function (_super) {
    __extends(Wrapped, _super);

    function Wrapped() {
      var _this = _super !== null && _super.apply(this, arguments) || this;

      _this._inCustomizerContext = false;

      _this._renderContent = function (context) {
        _this._inCustomizerContext = !!context.customizations.inCustomizerContext;
        var settings = Customizations.getSettings(fields, scope, context.customizations);

        var customizedStyles = settings.styles,
            dir = settings.dir,
            rest = __rest(settings, ["styles", "dir"]);

        var additionalProps = getProps ? getProps(_this.props) : undefined;

        _this._updateStyles(customizedStyles);

        return React.createElement(Component, __assign({}, rest, additionalProps, _this.props, {
          styles: _this._styles
        }));
      };

      _this._onSettingsChanged = function () {
        return _this.forceUpdate();
      };

      return _this;
    }

    Wrapped.prototype.render = function () {
      return React.createElement(CustomizerContext.Consumer, null, this._renderContent);
    };

    Wrapped.prototype.componentDidMount = function () {
      if (!this._inCustomizerContext) {
        Customizations.observe(this._onSettingsChanged);
      }
    };

    Wrapped.prototype.componentWillUnmount = function () {
      if (!this._inCustomizerContext) {
        Customizations.unobserve(this._onSettingsChanged);
      }
    };

    Wrapped.prototype._updateStyles = function (customizedStyles) {
      var _this = this; // tslint:disable-next-line:no-any


      var cache = this._styles && this._styles.__cachedInputs__ || [];

      if (!this._styles || customizedStyles !== cache[1] || this.props.styles !== cache[2]) {
        // Cache the customized styles.
        // this._customizedStyles = customizedStyles;
        // Using styled components as the Component arg will result in nested styling arrays.
        this._styles = function (styleProps) {
          return concatStyleSetsWithProps(styleProps, baseStyles, customizedStyles, _this.props.styles);
        }; // The __cachedInputs__ array is attached to the function and consumed by the
        // classNamesFunction as a list of keys to include for memoizing classnames.
        // tslint:disable-next-line:no-any


        this._styles.__cachedInputs__ = [baseStyles, customizedStyles, this.props.styles];
      }
    }; // Function.prototype.name is an ES6 feature, so the cast to any is required until we're
    // able to drop IE 11 support and compile with ES6 libs
    // tslint:disable-next-line:no-any


    Wrapped.displayName = "Styled" + (Component.displayName || Component.name);
    return Wrapped;
  }(ParentComponent); // This preserves backwards compatibility.
  // tslint:disable-next-line:no-any


  return Wrapped;
}

/**
 * @deprecated Icon type is inferred based on presence of `IIconProps.imageProps`
 * {@docCategory Icon}
 */
var IconType;

(function (IconType) {
  /**
   * Render using the fabric icon font.
   * @deprecated Icon type is inferred based on presence of `IIconProps.imageProps`
   */
  IconType[IconType["default"] = 0] = "default";
  /**
   * Render using an image, where imageProps would be used.
   * @deprecated Icon type is inferred based on presence of `IIconProps.imageProps`
   */

  IconType[IconType["image"] = 1] = "image";
  /**
   * Deprecated, use `default`.
   * @deprecated Use `default`.
   */

  IconType[IconType["Default"] = 100000] = "Default";
  /**
   * Deprecated, use `image`.
   * @deprecated Use `image`.
   */

  IconType[IconType["Image"] = 100001] = "Image";
})(IconType || (IconType = {}));

/**
 * The possible methods that can be used to fit the image.
 * {@docCategory Image}
 */
var ImageFit;

(function (ImageFit) {
  /**
   * The image is not scaled. The image is centered and cropped within the content box.
   */
  ImageFit[ImageFit["center"] = 0] = "center";
  /**
   * The image is scaled to maintain its aspect ratio while being fully contained within the frame. The image will
   * be centered horizontally and vertically within the frame. The space in the top and bottom or in the sides of
   * the frame will be empty depending on the difference in aspect ratio between the image and the frame.
   */

  ImageFit[ImageFit["contain"] = 1] = "contain";
  /**
   * The image is scaled to maintain its aspect ratio while filling the frame. Portions of the image will be cropped
   * from the top and bottom, or the sides, depending on the difference in aspect ratio between the image and the frame.
   */

  ImageFit[ImageFit["cover"] = 2] = "cover";
  /**
   * Neither the image nor the frame are scaled. If their sizes do not match, the image will either be cropped or the
   * frame will have empty space.
   */

  ImageFit[ImageFit["none"] = 3] = "none";
  /**
   * The image will be centered horizontally and vertically within the frame and maintains its aspect ratio. It will
   * behave as ImageFit.center if the image's natural height or width is less than the Image frame's height or width,
   * but if both natural height and width are larger than the frame it will behave as ImageFit.cover.
   */

  ImageFit[ImageFit["centerCover"] = 4] = "centerCover";
  /**
   * The image will be centered horizontally and vertically within the frame and maintains its aspect ratio. It will
   * behave as ImageFit.center if the image's natural height and width is less than the Image frame's height and width,
   * but if either natural height or width are larger than the frame it will behave as ImageFit.contain.
   */

  ImageFit[ImageFit["centerContain"] = 5] = "centerContain";
})(ImageFit || (ImageFit = {}));
/**
 * The cover style to be used on the image
 * {@docCategory Image}
 */


var ImageCoverStyle;

(function (ImageCoverStyle) {
  /**
   * The image will be shown at 100% height of container and the width will be scaled accordingly
   */
  ImageCoverStyle[ImageCoverStyle["landscape"] = 0] = "landscape";
  /**
   * The image will be shown at 100% width of container and the height will be scaled accordingly
   */

  ImageCoverStyle[ImageCoverStyle["portrait"] = 1] = "portrait";
})(ImageCoverStyle || (ImageCoverStyle = {}));
/**
 * {@docCategory Image}
 */


var ImageLoadState;

(function (ImageLoadState) {
  /**
   * The image has not yet been loaded, and there is no error yet.
   */
  ImageLoadState[ImageLoadState["notLoaded"] = 0] = "notLoaded";
  /**
   * The image has been loaded successfully.
   */

  ImageLoadState[ImageLoadState["loaded"] = 1] = "loaded";
  /**
   * An error has been encountered while loading the image.
   */

  ImageLoadState[ImageLoadState["error"] = 2] = "error";
  /**
   * Deprecated at v1.3.6, to replace the src in case of errors, use `onLoadingStateChange` instead
   * and rerender the Image with a difference src.
   * @deprecated Use `onLoadingStateChange` instead
   * and rerender the Image with a difference src.
   */

  ImageLoadState[ImageLoadState["errorLoaded"] = 3] = "errorLoaded";
})(ImageLoadState || (ImageLoadState = {}));

var getClassNames = classNamesFunction();
var KEY_PREFIX = 'fabricImage';

var ImageBase =
/** @class */
function (_super) {
  __extends(ImageBase, _super);

  function ImageBase(props) {
    var _this = _super.call(this, props) || this; // Make an initial assumption about the image layout until we can
    // check the rendered element. The value here only takes effect when
    // shouldStartVisible is true.


    _this._coverStyle = ImageCoverStyle.portrait;
    _this._imageElement = React.createRef();
    _this._frameElement = React.createRef();

    _this._onImageLoaded = function (ev) {
      var _a = _this.props,
          src = _a.src,
          onLoad = _a.onLoad;

      if (onLoad) {
        onLoad(ev);
      }

      _this._computeCoverStyle(_this.props);

      if (src) {
        _this.setState({
          loadState: ImageLoadState.loaded
        });
      }
    };

    _this._onImageError = function (ev) {
      if (_this.props.onError) {
        _this.props.onError(ev);
      }

      _this.setState({
        loadState: ImageLoadState.error
      });
    };

    _this.state = {
      loadState: ImageLoadState.notLoaded
    };
    return _this;
  } // tslint:disable-next-line function-name


  ImageBase.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
    if (nextProps.src !== this.props.src) {
      this.setState({
        loadState: ImageLoadState.notLoaded
      });
    } else if (this.state.loadState === ImageLoadState.loaded) {
      this._computeCoverStyle(nextProps);
    }
  };

  ImageBase.prototype.componentDidUpdate = function (prevProps, prevState) {
    this._checkImageLoaded();

    if (this.props.onLoadingStateChange && prevState.loadState !== this.state.loadState) {
      this.props.onLoadingStateChange(this.state.loadState);
    }
  };

  ImageBase.prototype.render = function () {
    var imageProps = getNativeProps(this.props, imgProperties, ['width', 'height']);
    var _a = this.props,
        src = _a.src,
        alt = _a.alt,
        width = _a.width,
        height = _a.height,
        shouldFadeIn = _a.shouldFadeIn,
        shouldStartVisible = _a.shouldStartVisible,
        className = _a.className,
        imageFit = _a.imageFit,
        role = _a.role,
        maximizeFrame = _a.maximizeFrame,
        styles = _a.styles,
        theme = _a.theme;
    var loadState = this.state.loadState;
    var coverStyle = this.props.coverStyle !== undefined ? this.props.coverStyle : this._coverStyle;
    var classNames = getClassNames(styles, {
      theme: theme,
      className: className,
      width: width,
      height: height,
      maximizeFrame: maximizeFrame,
      shouldFadeIn: shouldFadeIn,
      shouldStartVisible: shouldStartVisible,
      isLoaded: loadState === ImageLoadState.loaded || loadState === ImageLoadState.notLoaded && this.props.shouldStartVisible,
      isLandscape: coverStyle === ImageCoverStyle.landscape,
      isCenter: imageFit === ImageFit.center,
      isCenterContain: imageFit === ImageFit.centerContain,
      isCenterCover: imageFit === ImageFit.centerCover,
      isContain: imageFit === ImageFit.contain,
      isCover: imageFit === ImageFit.cover,
      isNone: imageFit === ImageFit.none,
      isError: loadState === ImageLoadState.error,
      isNotImageFit: imageFit === undefined
    }); // If image dimensions aren't specified, the natural size of the image is used.

    return React.createElement("div", {
      className: classNames.root,
      style: {
        width: width,
        height: height
      },
      ref: this._frameElement
    }, React.createElement("img", __assign({}, imageProps, {
      onLoad: this._onImageLoaded,
      onError: this._onImageError,
      key: KEY_PREFIX + this.props.src || '',
      className: classNames.image,
      ref: this._imageElement,
      src: src,
      alt: alt,
      role: role
    })));
  };

  ImageBase.prototype._checkImageLoaded = function () {
    var src = this.props.src;
    var loadState = this.state.loadState;

    if (loadState === ImageLoadState.notLoaded) {
      // testing if naturalWidth and naturalHeight are greater than zero is better than checking
      // .complete, because .complete will also be set to true if the image breaks. However,
      // for some browsers, SVG images do not have a naturalWidth or naturalHeight, so fall back
      // to checking .complete for these images.
      var isLoaded = this._imageElement.current ? src && this._imageElement.current.naturalWidth > 0 && this._imageElement.current.naturalHeight > 0 || this._imageElement.current.complete && ImageBase._svgRegex.test(src) : false;

      if (isLoaded) {
        this._computeCoverStyle(this.props);

        this.setState({
          loadState: ImageLoadState.loaded
        });
      }
    }
  };

  ImageBase.prototype._computeCoverStyle = function (props) {
    var imageFit = props.imageFit,
        width = props.width,
        height = props.height; // Do not compute cover style if it was already specified in props

    if ((imageFit === ImageFit.cover || imageFit === ImageFit.contain || imageFit === ImageFit.centerContain || imageFit === ImageFit.centerCover) && this.props.coverStyle === undefined && this._imageElement.current && this._frameElement.current) {
      // Determine the desired ratio using the width and height props.
      // If those props aren't available, measure measure the frame.
      var desiredRatio = void 0;

      if (!!width && !!height && imageFit !== ImageFit.centerContain && imageFit !== ImageFit.centerCover) {
        desiredRatio = width / height;
      } else {
        desiredRatio = this._frameElement.current.clientWidth / this._frameElement.current.clientHeight;
      } // Examine the source image to determine its original ratio.


      var naturalRatio = this._imageElement.current.naturalWidth / this._imageElement.current.naturalHeight; // Should we crop from the top or the sides?

      if (naturalRatio > desiredRatio) {
        this._coverStyle = ImageCoverStyle.landscape;
      } else {
        this._coverStyle = ImageCoverStyle.portrait;
      }
    }
  };

  ImageBase.defaultProps = {
    shouldFadeIn: true
  };
  ImageBase._svgRegex = /\.svg$/i;
  return ImageBase;
}(React.Component);

/**
 * Builds a class names object from a given map.
 *
 * @param styles - Map of unprocessed styles.
 * @returns Map of property name to class name.
 */

function buildClassMap(styles) {
  var classes = {};

  var _loop_1 = function (styleName) {
    if (styles.hasOwnProperty(styleName)) {
      var className_1;
      Object.defineProperty(classes, styleName, {
        get: function () {
          if (className_1 === undefined) {
            // tslint:disable-next-line:no-any
            className_1 = mergeStyles(styles[styleName]).toString();
          }

          return className_1;
        },
        enumerable: true,
        configurable: true
      });
    }
  };

  for (var styleName in styles) {
    _loop_1(styleName);
  }

  return classes;
}

var ICON_SETTING_NAME = 'icons';

var _iconSettings = GlobalSettings.getValue(ICON_SETTING_NAME, {
  __options: {
    disableWarnings: false,
    warnOnMissingIcons: true
  },
  __remapped: {}
}); // Reset icon registration on stylesheet resets.


var stylesheet$3 = Stylesheet.getInstance();

if (stylesheet$3 && stylesheet$3.onReset) {
  stylesheet$3.onReset(function () {
    for (var name_1 in _iconSettings) {
      if (_iconSettings.hasOwnProperty(name_1) && !!_iconSettings[name_1].subset) {
        _iconSettings[name_1].subset.className = undefined;
      }
    }
  });
}
/**
 * Normalizes an icon name for consistent mapping.
 * Current implementation is to convert the icon name to lower case.
 *
 * @param name - Icon name to normalize.
 * @returns {string} Normalized icon name to use for indexing and mapping.
 */


var normalizeIconName = function (name) {
  return name.toLowerCase();
};
/**
 * Registers a given subset of icons.
 *
 * @param iconSubset - the icon subset definition.
 */


function registerIcons(iconSubset, options) {
  var subset = __assign(__assign({}, iconSubset), {
    isRegistered: false,
    className: undefined
  });

  var icons = iconSubset.icons; // Grab options, optionally mix user provided ones on top.

  options = options ? __assign(__assign({}, _iconSettings.__options), options) : _iconSettings.__options;

  for (var iconName in icons) {
    if (icons.hasOwnProperty(iconName)) {
      var code = icons[iconName];
      var normalizedIconName = normalizeIconName(iconName);

      if (_iconSettings[normalizedIconName]) {
        _warnDuplicateIcon(iconName);
      } else {
        _iconSettings[normalizedIconName] = {
          code: code,
          subset: subset
        };
      }
    }
  }
}
/**
 * Remaps one icon name to another.
 */

function registerIconAlias(iconName, mappedToName) {
  _iconSettings.__remapped[normalizeIconName(iconName)] = normalizeIconName(mappedToName);
}
/**
 * Gets an icon definition. If an icon is requested but the subset has yet to be registered,
 * it will get registered immediately.
 *
 * @public
 * @param name - Name of icon.
 */

function getIcon(name) {
  var icon = undefined;
  var options = _iconSettings.__options;
  name = name ? normalizeIconName(name) : '';
  name = _iconSettings.__remapped[name] || name;

  if (name) {
    icon = _iconSettings[name];

    if (icon) {
      var subset = icon.subset;

      if (subset && subset.fontFace) {
        if (!subset.isRegistered) {
          fontFace(subset.fontFace);
          subset.isRegistered = true;
        }

        if (!subset.className) {
          subset.className = mergeStyles(subset.style, {
            fontFamily: subset.fontFace.fontFamily,
            fontWeight: subset.fontFace.fontWeight || 'normal',
            fontStyle: subset.fontFace.fontStyle || 'normal'
          });
        }
      }
    } else {
      // tslint:disable-next-line:deprecation
      if (!options.disableWarnings && options.warnOnMissingIcons) {
        warn("The icon \"" + name + "\" was used but not registered. See https://github.com/microsoft/fluentui/wiki/Using-icons for more information.");
      }
    }
  }

  return icon;
}
var _missingIcons = [];
var _missingIconsTimer = undefined;

function _warnDuplicateIcon(iconName) {
  var options = _iconSettings.__options;
  var warningDelay = 2000;
  var maxIconsInMessage = 10;

  if (!options.disableWarnings) {
    _missingIcons.push(iconName);

    if (_missingIconsTimer === undefined) {
      _missingIconsTimer = setTimeout(function () {
        warn("Some icons were re-registered. Applications should only call registerIcons for any given " + "icon once. Redefining what an icon is may have unintended consequences. Duplicates " + "include: \n" + _missingIcons.slice(0, maxIconsInMessage).join(', ') + (_missingIcons.length > maxIconsInMessage ? " (+ " + (_missingIcons.length - maxIconsInMessage) + " more)" : ''));
        _missingIconsTimer = undefined;
        _missingIcons = [];
      }, warningDelay);
    }
  }
}

/* Register the keyframes */

var EASING_FUNCTION_1 = 'cubic-bezier(.1,.9,.2,1)';
var EASING_FUNCTION_2 = 'cubic-bezier(.1,.25,.75,.9)';
var DURATION_1 = '0.167s';
var DURATION_2 = '0.267s';
var DURATION_3 = '0.367s';
var DURATION_4 = '0.467s';
var FADE_IN = keyframes({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
});
var FADE_OUT = keyframes({
  from: {
    opacity: 1
  },
  to: {
    opacity: 0,
    visibility: 'hidden'
  }
});

var SLIDE_RIGHT_IN10 = _createSlideInX(-10);

var SLIDE_RIGHT_IN20 = _createSlideInX(-20);

var SLIDE_RIGHT_IN40 = _createSlideInX(-40);

var SLIDE_RIGHT_IN400 = _createSlideInX(-400);

var SLIDE_LEFT_IN10 = _createSlideInX(10);

var SLIDE_LEFT_IN20 = _createSlideInX(20);

var SLIDE_LEFT_IN40 = _createSlideInX(40);

var SLIDE_LEFT_IN400 = _createSlideInX(400);

var SLIDE_UP_IN10 = _createSlideInY(10);

var SLIDE_UP_IN20 = _createSlideInY(20);

var SLIDE_DOWN_IN10 = _createSlideInY(-10);

var SLIDE_DOWN_IN20 = _createSlideInY(-20);

var SLIDE_RIGHT_OUT10 = _createSlideOutX(10);

var SLIDE_RIGHT_OUT20 = _createSlideOutX(20);

var SLIDE_RIGHT_OUT40 = _createSlideOutX(40);

var SLIDE_RIGHT_OUT400 = _createSlideOutX(400);

var SLIDE_LEFT_OUT10 = _createSlideOutX(-10);

var SLIDE_LEFT_OUT20 = _createSlideOutX(-20);

var SLIDE_LEFT_OUT40 = _createSlideOutX(-40);

var SLIDE_LEFT_OUT400 = _createSlideOutX(-400);

var SLIDE_UP_OUT10 = _createSlideOutY(-10);

var SLIDE_UP_OUT20 = _createSlideOutY(-20);

var SLIDE_DOWN_OUT10 = _createSlideOutY(10);

var SLIDE_DOWN_OUT20 = _createSlideOutY(20);

var SCALE_UP100 = keyframes({
  from: {
    transform: 'scale3d(.98,.98,1)'
  },
  to: {
    transform: 'scale3d(1,1,1)'
  }
});
var SCALE_DOWN98 = keyframes({
  from: {
    transform: 'scale3d(1,1,1)'
  },
  to: {
    transform: 'scale3d(.98,.98,1)'
  }
});
var SCALE_DOWN100 = keyframes({
  from: {
    transform: 'scale3d(1.03,1.03,1)'
  },
  to: {
    transform: 'scale3d(1,1,1)'
  }
});
var SCALE_UP103 = keyframes({
  from: {
    transform: 'scale3d(1,1,1)'
  },
  to: {
    transform: 'scale3d(1.03,1.03,1)'
  }
});
var ROTATE90 = keyframes({
  from: {
    transform: 'rotateZ(0deg)'
  },
  to: {
    transform: 'rotateZ(90deg)'
  }
});
var ROTATE_N90 = keyframes({
  from: {
    transform: 'rotateZ(0deg)'
  },
  to: {
    transform: 'rotateZ(-90deg)'
  }
});
/**
 * All Fabric standard animations, exposed as json objects referencing predefined
 * keyframes. These objects can be mixed in with other class definitions.
 */

var AnimationStyles = {
  slideRightIn10: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN10, DURATION_3, EASING_FUNCTION_1),
  slideRightIn20: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN20, DURATION_3, EASING_FUNCTION_1),
  slideRightIn40: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN40, DURATION_3, EASING_FUNCTION_1),
  slideRightIn400: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN400, DURATION_3, EASING_FUNCTION_1),
  slideLeftIn10: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN10, DURATION_3, EASING_FUNCTION_1),
  slideLeftIn20: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN20, DURATION_3, EASING_FUNCTION_1),
  slideLeftIn40: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN40, DURATION_3, EASING_FUNCTION_1),
  slideLeftIn400: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN400, DURATION_3, EASING_FUNCTION_1),
  slideUpIn10: _createAnimation(FADE_IN + "," + SLIDE_UP_IN10, DURATION_3, EASING_FUNCTION_1),
  slideUpIn20: _createAnimation(FADE_IN + "," + SLIDE_UP_IN20, DURATION_3, EASING_FUNCTION_1),
  slideDownIn10: _createAnimation(FADE_IN + "," + SLIDE_DOWN_IN10, DURATION_3, EASING_FUNCTION_1),
  slideDownIn20: _createAnimation(FADE_IN + "," + SLIDE_DOWN_IN20, DURATION_3, EASING_FUNCTION_1),
  slideRightOut10: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT10, DURATION_3, EASING_FUNCTION_1),
  slideRightOut20: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT20, DURATION_3, EASING_FUNCTION_1),
  slideRightOut40: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT40, DURATION_3, EASING_FUNCTION_1),
  slideRightOut400: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT400, DURATION_3, EASING_FUNCTION_1),
  slideLeftOut10: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT10, DURATION_3, EASING_FUNCTION_1),
  slideLeftOut20: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT20, DURATION_3, EASING_FUNCTION_1),
  slideLeftOut40: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT40, DURATION_3, EASING_FUNCTION_1),
  slideLeftOut400: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT400, DURATION_3, EASING_FUNCTION_1),
  slideUpOut10: _createAnimation(FADE_OUT + "," + SLIDE_UP_OUT10, DURATION_3, EASING_FUNCTION_1),
  slideUpOut20: _createAnimation(FADE_OUT + "," + SLIDE_UP_OUT20, DURATION_3, EASING_FUNCTION_1),
  slideDownOut10: _createAnimation(FADE_OUT + "," + SLIDE_DOWN_OUT10, DURATION_3, EASING_FUNCTION_1),
  slideDownOut20: _createAnimation(FADE_OUT + "," + SLIDE_DOWN_OUT20, DURATION_3, EASING_FUNCTION_1),
  scaleUpIn100: _createAnimation(FADE_IN + "," + SCALE_UP100, DURATION_3, EASING_FUNCTION_1),
  scaleDownIn100: _createAnimation(FADE_IN + "," + SCALE_DOWN100, DURATION_3, EASING_FUNCTION_1),
  scaleUpOut103: _createAnimation(FADE_OUT + "," + SCALE_UP103, DURATION_1, EASING_FUNCTION_2),
  scaleDownOut98: _createAnimation(FADE_OUT + "," + SCALE_DOWN98, DURATION_1, EASING_FUNCTION_2),
  fadeIn100: _createAnimation(FADE_IN, DURATION_1, EASING_FUNCTION_2),
  fadeIn200: _createAnimation(FADE_IN, DURATION_2, EASING_FUNCTION_2),
  fadeIn400: _createAnimation(FADE_IN, DURATION_3, EASING_FUNCTION_2),
  fadeIn500: _createAnimation(FADE_IN, DURATION_4, EASING_FUNCTION_2),
  fadeOut100: _createAnimation(FADE_OUT, DURATION_1, EASING_FUNCTION_2),
  fadeOut200: _createAnimation(FADE_OUT, DURATION_2, EASING_FUNCTION_2),
  fadeOut400: _createAnimation(FADE_OUT, DURATION_3, EASING_FUNCTION_2),
  fadeOut500: _createAnimation(FADE_OUT, DURATION_4, EASING_FUNCTION_2),
  rotate90deg: _createAnimation(ROTATE90, '0.1s', EASING_FUNCTION_2),
  rotateN90deg: _createAnimation(ROTATE_N90, '0.1s', EASING_FUNCTION_2)
};

function _createAnimation(animationName, animationDuration, animationTimingFunction) {
  return {
    animationName: animationName,
    animationDuration: animationDuration,
    animationTimingFunction: animationTimingFunction,
    animationFillMode: 'both'
  };
}

function _createSlideInX(fromX) {
  return keyframes({
    from: {
      transform: "translate3d(" + fromX + "px,0,0)"
    },
    to: {
      transform: "translate3d(0,0,0)"
    }
  });
}

function _createSlideInY(fromY) {
  return keyframes({
    from: {
      transform: "translate3d(0," + fromY + "px,0)"
    },
    to: {
      transform: "translate3d(0,0,0)"
    }
  });
}

function _createSlideOutX(toX) {
  return keyframes({
    from: {
      transform: "translate3d(0,0,0)"
    },
    to: {
      transform: "translate3d(" + toX + "px,0,0)"
    }
  });
}

function _createSlideOutY(toY) {
  return keyframes({
    from: {
      transform: "translate3d(0,0,0)"
    },
    to: {
      transform: "translate3d(0," + toY + "px,0)"
    }
  });
}

// When adding or removing a color, make sure you keep this consistent with IColorClassNames
// by adding the color variants.
var DefaultPalette = {
  themeDarker: '#004578',
  themeDark: '#005a9e',
  themeDarkAlt: '#106ebe',
  themePrimary: '#0078d4',
  themeSecondary: '#2b88d8',
  themeTertiary: '#71afe5',
  themeLight: '#c7e0f4',
  themeLighter: '#deecf9',
  themeLighterAlt: '#eff6fc',
  black: '#000000',
  blackTranslucent40: 'rgba(0,0,0,.4)',
  neutralDark: '#201f1e',
  neutralPrimary: '#323130',
  neutralPrimaryAlt: '#3b3a39',
  neutralSecondary: '#605e5c',
  neutralSecondaryAlt: '#8a8886',
  neutralTertiary: '#a19f9d',
  neutralTertiaryAlt: '#c8c6c4',
  neutralQuaternary: '#d2d0ce',
  neutralQuaternaryAlt: '#e1dfdd',
  neutralLight: '#edebe9',
  neutralLighter: '#f3f2f1',
  neutralLighterAlt: '#faf9f8',
  accent: '#0078d4',
  white: '#ffffff',
  whiteTranslucent40: 'rgba(255,255,255,.4)',
  yellowDark: '#d29200',
  yellow: '#ffb900',
  yellowLight: '#fff100',
  orange: '#d83b01',
  orangeLight: '#ea4300',
  orangeLighter: '#ff8c00',
  redDark: '#a4262c',
  red: '#e81123',
  magentaDark: '#5c005c',
  magenta: '#b4009e',
  magentaLight: '#e3008c',
  purpleDark: '#32145a',
  purple: '#5c2d91',
  purpleLight: '#b4a0ff',
  blueDark: '#002050',
  blueMid: '#00188f',
  blue: '#0078d4',
  blueLight: '#00bcf2',
  tealDark: '#004b50',
  teal: '#008272',
  tealLight: '#00b294',
  greenDark: '#004b1c',
  green: '#107c10',
  greenLight: '#bad80a'
};

var DefaultEffects = {
  elevation4: '0 1.6px 3.6px 0 rgba(0, 0, 0, 0.132), 0 0.3px 0.9px 0 rgba(0, 0, 0, 0.108)',
  elevation8: '0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132), 0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108)',
  elevation16: '0 6.4px 14.4px 0 rgba(0, 0, 0, 0.132), 0 1.2px 3.6px 0 rgba(0, 0, 0, 0.108)',
  elevation64: '0 25.6px 57.6px 0 rgba(0, 0, 0, 0.22), 0 4.8px 14.4px 0 rgba(0, 0, 0, 0.18)',
  roundedCorner2: '2px'
};

// Fallback fonts, if specified system or web fonts are unavailable.
var FontFamilyFallbacks = "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif"; // Font face names to be registered.

var LocalizedFontNames;

(function (LocalizedFontNames) {
  LocalizedFontNames.Arabic = 'Segoe UI Web (Arabic)';
  LocalizedFontNames.Cyrillic = 'Segoe UI Web (Cyrillic)';
  LocalizedFontNames.EastEuropean = 'Segoe UI Web (East European)';
  LocalizedFontNames.Greek = 'Segoe UI Web (Greek)';
  LocalizedFontNames.Hebrew = 'Segoe UI Web (Hebrew)';
  LocalizedFontNames.Thai = 'Leelawadee UI Web';
  LocalizedFontNames.Vietnamese = 'Segoe UI Web (Vietnamese)';
  LocalizedFontNames.WestEuropean = 'Segoe UI Web (West European)';
  LocalizedFontNames.Selawik = 'Selawik Web';
  LocalizedFontNames.Armenian = 'Segoe UI Web (Armenian)';
  LocalizedFontNames.Georgian = 'Segoe UI Web (Georgian)';
})(LocalizedFontNames || (LocalizedFontNames = {})); // Font families with fallbacks, for the general regions.


var LocalizedFontFamilies;

(function (LocalizedFontFamilies) {
  LocalizedFontFamilies.Arabic = "'" + LocalizedFontNames.Arabic + "'";
  LocalizedFontFamilies.ChineseSimplified = "'Microsoft Yahei UI', Verdana, Simsun";
  LocalizedFontFamilies.ChineseTraditional = "'Microsoft Jhenghei UI', Pmingliu";
  LocalizedFontFamilies.Cyrillic = "'" + LocalizedFontNames.Cyrillic + "'";
  LocalizedFontFamilies.EastEuropean = "'" + LocalizedFontNames.EastEuropean + "'";
  LocalizedFontFamilies.Greek = "'" + LocalizedFontNames.Greek + "'";
  LocalizedFontFamilies.Hebrew = "'" + LocalizedFontNames.Hebrew + "'";
  LocalizedFontFamilies.Hindi = "'Nirmala UI'";
  LocalizedFontFamilies.Japanese = "'Yu Gothic UI', 'Meiryo UI', Meiryo, 'MS Pgothic', Osaka";
  LocalizedFontFamilies.Korean = "'Malgun Gothic', Gulim";
  LocalizedFontFamilies.Selawik = "'" + LocalizedFontNames.Selawik + "'";
  LocalizedFontFamilies.Thai = "'Leelawadee UI Web', 'Kmer UI'";
  LocalizedFontFamilies.Vietnamese = "'" + LocalizedFontNames.Vietnamese + "'";
  LocalizedFontFamilies.WestEuropean = "'" + LocalizedFontNames.WestEuropean + "'";
  LocalizedFontFamilies.Armenian = "'" + LocalizedFontNames.Armenian + "'";
  LocalizedFontFamilies.Georgian = "'" + LocalizedFontNames.Georgian + "'";
})(LocalizedFontFamilies || (LocalizedFontFamilies = {})); // By default, we favor system fonts for the default.
// All localized fonts use a web font and never use the system font.


var defaultFontFamily = "'Segoe UI', '" + LocalizedFontNames.WestEuropean + "'"; // Mapping of language prefix to to font family.

var LanguageToFontMap = {
  ar: LocalizedFontFamilies.Arabic,
  bg: LocalizedFontFamilies.Cyrillic,
  cs: LocalizedFontFamilies.EastEuropean,
  el: LocalizedFontFamilies.Greek,
  et: LocalizedFontFamilies.EastEuropean,
  he: LocalizedFontFamilies.Hebrew,
  hi: LocalizedFontFamilies.Hindi,
  hr: LocalizedFontFamilies.EastEuropean,
  hu: LocalizedFontFamilies.EastEuropean,
  ja: LocalizedFontFamilies.Japanese,
  kk: LocalizedFontFamilies.EastEuropean,
  ko: LocalizedFontFamilies.Korean,
  lt: LocalizedFontFamilies.EastEuropean,
  lv: LocalizedFontFamilies.EastEuropean,
  pl: LocalizedFontFamilies.EastEuropean,
  ru: LocalizedFontFamilies.Cyrillic,
  sk: LocalizedFontFamilies.EastEuropean,
  'sr-latn': LocalizedFontFamilies.EastEuropean,
  th: LocalizedFontFamilies.Thai,
  tr: LocalizedFontFamilies.EastEuropean,
  uk: LocalizedFontFamilies.Cyrillic,
  vi: LocalizedFontFamilies.Vietnamese,
  'zh-hans': LocalizedFontFamilies.ChineseSimplified,
  'zh-hant': LocalizedFontFamilies.ChineseTraditional,
  hy: LocalizedFontFamilies.Armenian,
  ka: LocalizedFontFamilies.Georgian
}; // Standard font sizes.

var FontSizes;

(function (FontSizes) {
  FontSizes.mini = '10px';
  FontSizes.xSmall = '10px';
  FontSizes.small = '12px';
  FontSizes.smallPlus = '12px';
  FontSizes.medium = '14px';
  FontSizes.mediumPlus = '16px';
  FontSizes.icon = '16px';
  FontSizes.large = '18px';
  FontSizes.xLarge = '20px';
  FontSizes.xLargePlus = '24px';
  FontSizes.xxLarge = '28px';
  FontSizes.xxLargePlus = '32px';
  FontSizes.superLarge = '42px';
  FontSizes.mega = '68px';
})(FontSizes || (FontSizes = {})); // Standard font weights.


var FontWeights;

(function (FontWeights) {
  FontWeights.light = 100;
  FontWeights.semilight = 300;
  FontWeights.regular = 400;
  FontWeights.semibold = 600;
  FontWeights.bold = 700;
})(FontWeights || (FontWeights = {})); // Standard Icon Sizes.


var IconFontSizes;

(function (IconFontSizes) {
  IconFontSizes.xSmall = '10px';
  IconFontSizes.small = '12px';
  IconFontSizes.medium = '16px';
  IconFontSizes.large = '20px';
})(IconFontSizes || (IconFontSizes = {}));

function _fontFamilyWithFallbacks(fontFamily) {
  return fontFamily + ", " + FontFamilyFallbacks;
}

function createFontStyles(localeCode) {
  var localizedFont = _getLocalizedFontFamily(localeCode);

  var fontFamilyWithFallback = _fontFamilyWithFallbacks(localizedFont);

  var fontStyles = {
    tiny: _createFont(FontSizes.mini, FontWeights.regular, fontFamilyWithFallback),
    xSmall: _createFont(FontSizes.xSmall, FontWeights.regular, fontFamilyWithFallback),
    small: _createFont(FontSizes.small, FontWeights.regular, fontFamilyWithFallback),
    smallPlus: _createFont(FontSizes.smallPlus, FontWeights.regular, fontFamilyWithFallback),
    medium: _createFont(FontSizes.medium, FontWeights.regular, fontFamilyWithFallback),
    mediumPlus: _createFont(FontSizes.mediumPlus, FontWeights.regular, fontFamilyWithFallback),
    large: _createFont(FontSizes.large, FontWeights.regular, fontFamilyWithFallback),
    xLarge: _createFont(FontSizes.xLarge, FontWeights.semibold, fontFamilyWithFallback),
    xLargePlus: _createFont(FontSizes.xLargePlus, FontWeights.semibold, fontFamilyWithFallback),
    xxLarge: _createFont(FontSizes.xxLarge, FontWeights.semibold, fontFamilyWithFallback),
    xxLargePlus: _createFont(FontSizes.xxLargePlus, FontWeights.semibold, fontFamilyWithFallback),
    superLarge: _createFont(FontSizes.superLarge, FontWeights.semibold, fontFamilyWithFallback),
    mega: _createFont(FontSizes.mega, FontWeights.semibold, fontFamilyWithFallback)
  };
  return fontStyles;
}
/**
 * If there is a localized font for this language, return that.
 * Returns undefined if there is no localized font for that language.
 */

function _getLocalizedFontFamily(language) {
  for (var lang in LanguageToFontMap) {
    if (LanguageToFontMap.hasOwnProperty(lang) && language && lang.indexOf(language) === 0) {
      // tslint:disable-next-line:no-any
      return LanguageToFontMap[lang];
    }
  }

  return defaultFontFamily;
}

function _createFont(size, weight, fontFamily) {
  return {
    fontFamily: fontFamily,
    MozOsxFontSmoothing: 'grayscale',
    WebkitFontSmoothing: 'antialiased',
    fontSize: size,
    fontWeight: weight
  };
}

var DefaultBaseUrl = 'https://static2.sharepointonline.com/files/fabric/assets'; // Standard font styling.

var DefaultFontStyles = createFontStyles(getLanguage());

function _registerFontFace(fontFamily, url, fontWeight, localFontName) {
  fontFamily = "'" + fontFamily + "'";
  var localFontSrc = localFontName !== undefined ? "local('" + localFontName + "')," : '';
  fontFace({
    fontFamily: fontFamily,
    src: localFontSrc + ("url('" + url + ".woff2') format('woff2'),") + ("url('" + url + ".woff') format('woff')"),
    fontWeight: fontWeight,
    fontStyle: 'normal',
    fontDisplay: 'swap'
  });
}

function _registerFontFaceSet(baseUrl, fontFamily, cdnFolder, cdnFontName, localFontName) {
  if (cdnFontName === void 0) {
    cdnFontName = 'segoeui';
  }

  var urlBase = baseUrl + "/" + cdnFolder + "/" + cdnFontName;

  _registerFontFace(fontFamily, urlBase + '-light', FontWeights.light, localFontName && localFontName + ' Light');

  _registerFontFace(fontFamily, urlBase + '-semilight', FontWeights.semilight, localFontName && localFontName + ' SemiLight');

  _registerFontFace(fontFamily, urlBase + '-regular', FontWeights.regular, localFontName);

  _registerFontFace(fontFamily, urlBase + '-semibold', FontWeights.semibold, localFontName && localFontName + ' SemiBold');

  _registerFontFace(fontFamily, urlBase + '-bold', FontWeights.bold, localFontName && localFontName + ' Bold');
}

function registerDefaultFontFaces(baseUrl) {
  if (baseUrl) {
    var fontUrl = baseUrl + "/fonts"; // Produce @font-face definitions for all supported web fonts.

    _registerFontFaceSet(fontUrl, LocalizedFontNames.Thai, 'leelawadeeui-thai', 'leelawadeeui');

    _registerFontFaceSet(fontUrl, LocalizedFontNames.Arabic, 'segoeui-arabic');

    _registerFontFaceSet(fontUrl, LocalizedFontNames.Cyrillic, 'segoeui-cyrillic');

    _registerFontFaceSet(fontUrl, LocalizedFontNames.EastEuropean, 'segoeui-easteuropean');

    _registerFontFaceSet(fontUrl, LocalizedFontNames.Greek, 'segoeui-greek');

    _registerFontFaceSet(fontUrl, LocalizedFontNames.Hebrew, 'segoeui-hebrew');

    _registerFontFaceSet(fontUrl, LocalizedFontNames.Vietnamese, 'segoeui-vietnamese');

    _registerFontFaceSet(fontUrl, LocalizedFontNames.WestEuropean, 'segoeui-westeuropean', 'segoeui', 'Segoe UI');

    _registerFontFaceSet(fontUrl, LocalizedFontFamilies.Selawik, 'selawik', 'selawik');

    _registerFontFaceSet(fontUrl, LocalizedFontNames.Armenian, 'segoeui-armenian');

    _registerFontFaceSet(fontUrl, LocalizedFontNames.Georgian, 'segoeui-georgian'); // Leelawadee UI (Thai) does not have a 'light' weight, so we override
    // the font-face generated above to use the 'semilight' weight instead.


    _registerFontFace('Leelawadee UI Web', fontUrl + "/leelawadeeui-thai/leelawadeeui-semilight", FontWeights.light); // Leelawadee UI (Thai) does not have a 'semibold' weight, so we override
    // the font-face generated above to use the 'bold' weight instead.


    _registerFontFace('Leelawadee UI Web', fontUrl + "/leelawadeeui-thai/leelawadeeui-bold", FontWeights.semibold);
  }
}
/**
 * Reads the fontBaseUrl from window.FabricConfig.fontBaseUrl or falls back to a default.
 */

function _getFontBaseUrl() {
  var _a, _b, _c; // tslint:disable-next-line:no-any


  var fabricConfig = (_a = getWindow()) === null || _a === void 0 ? void 0 : _a.FabricConfig;
  return _c = (_b = fabricConfig) === null || _b === void 0 ? void 0 : _b.fontBaseUrl, _c !== null && _c !== void 0 ? _c : DefaultBaseUrl;
}
/**
 * Register the font faces.
 */


registerDefaultFontFaces(_getFontBaseUrl());

var HighContrastSelector = '@media screen and (-ms-high-contrast: active)';
var ScreenWidthMinLarge = 640;
var ScreenWidthMaxMedium = ScreenWidthMinLarge - 1;
function getScreenSelector(min, max) {
  return "@media only screen and (min-width: " + min + "px) and (max-width: " + max + "px)";
}

var ZIndexes;

(function (ZIndexes) {
  ZIndexes.Nav = 1;
  /**
   * @deprecated ScrollablePane
   */

  ZIndexes.ScrollablePane = 1;
  ZIndexes.FocusStyle = 1;
  ZIndexes.Coachmark = 1000;
  ZIndexes.Layer = 1000000;
  ZIndexes.KeytipLayer = 1000001;
})(ZIndexes || (ZIndexes = {}));

function getFocusStyle(theme, insetOrOptions, position, highContrastStyle, borderColor, outlineColor, isFocusedOnly) {
  if (typeof insetOrOptions === 'number' || !insetOrOptions) {
    return _getFocusStyleInternal(theme, {
      inset: insetOrOptions,
      position: position,
      highContrastStyle: highContrastStyle,
      borderColor: borderColor,
      outlineColor: outlineColor,
      isFocusedOnly: isFocusedOnly
    });
  } else {
    return _getFocusStyleInternal(theme, insetOrOptions);
  }
}

function _getFocusStyleInternal(theme, options) {
  var _a, _b;

  if (options === void 0) {
    options = {};
  }

  var _c = options.inset,
      inset = _c === void 0 ? 0 : _c,
      _d = options.width,
      width = _d === void 0 ? 1 : _d,
      _e = options.position,
      position = _e === void 0 ? 'relative' : _e,
      highContrastStyle = options.highContrastStyle,
      _f = options.borderColor,
      borderColor = _f === void 0 ? theme.palette.white : _f,
      _g = options.outlineColor,
      outlineColor = _g === void 0 ? theme.palette.neutralSecondary : _g,
      _h = options.isFocusedOnly,
      isFocusedOnly = _h === void 0 ? true : _h;
  return {
    // Clear browser-specific focus styles and use 'transparent' as placeholder for focus style.
    outline: 'transparent',
    // Requirement because pseudo-element is absolutely positioned.
    position: position,
    selectors: (_a = {
      // Clear the focus border in Firefox.
      // Reference: http://stackoverflow.com/a/199319/1436671
      '::-moz-focus-inner': {
        border: '0'
      }
    }, // When the element that uses this mixin is in a :focus state, add a pseudo-element to
    // create a border.
    _a["." + IsFocusVisibleClassName + " &" + (isFocusedOnly ? ':focus' : '') + ":after"] = {
      content: '""',
      position: 'absolute',
      left: inset + 1,
      top: inset + 1,
      bottom: inset + 1,
      right: inset + 1,
      border: width + "px solid " + borderColor,
      outline: width + "px solid " + outlineColor,
      zIndex: ZIndexes.FocusStyle,
      selectors: (_b = {}, _b[HighContrastSelector] = highContrastStyle, _b)
    }, _a)
  };
}
/**
 * Generates style to clear browser specific focus styles.
 */


function focusClear() {
  return {
    selectors: {
      '&::-moz-focus-inner': {
        // Clear the focus border in Firefox. Reference: http://stackoverflow.com/a/199319/1436671
        border: 0
      },
      '&': {
        // Clear browser specific focus styles and use transparent as placeholder for focus style
        outline: 'transparent'
      }
    }
  };
}

var hiddenContentStyle = {
  position: 'absolute',
  width: 1,
  height: 1,
  margin: -1,
  padding: 0,
  border: 0,
  overflow: 'hidden'
};

/**
 * Internal memoized function which simply takes in the class map and the
 * disable boolean. These immutable values can be memoized.
 */

var _getGlobalClassNames = memoizeFunction(function (classNames, disableGlobalClassNames) {
  var styleSheet = Stylesheet.getInstance();

  if (disableGlobalClassNames) {
    // disable global classnames
    return Object.keys(classNames).reduce(function (acc, className) {
      acc[className] = styleSheet.getClassName(classNames[className]);
      return acc;
    }, {});
  } // use global classnames


  return classNames;
});
/**
 * Checks for the `disableGlobalClassNames` property on the `theme` to determine if it should return `classNames`
 * Note that calls to this function are memoized.
 *
 * @param classNames - The collection of global class names that apply when the flag is false. Make sure to pass in
 * the same instance on each call to benefit from memoization.
 * @param theme - The theme to check the flag on
 * @param disableGlobalClassNames - Optional. Explicitly opt in/out of disabling global classnames. Defaults to false.
 */


function getGlobalClassNames(classNames, theme, disableGlobalClassNames) {
  return _getGlobalClassNames(classNames, disableGlobalClassNames !== undefined ? disableGlobalClassNames : theme.disableGlobalClassNames);
}

var DefaultSpacing = {
  s2: '4px',
  s1: '8px',
  m: '16px',
  l1: '20px',
  l2: '32px'
};

/**
 * An IThemingInstruction can specify a rawString to be preserved or a theme slot and a default value
 * to use if that slot is not specified by the theme.
 */
var __assign$1 = undefined && undefined.__assign || function () {
  __assign$1 = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign$1.apply(this, arguments);
}; // Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.


var _root = typeof window === 'undefined' ? global : window; // eslint-disable-line @typescript-eslint/no-explicit-any
// Nonce string to inject into script tag if one provided. This is used in CSP (Content Security Policy).


var _styleNonce = _root && _root.CSPSettings && _root.CSPSettings.nonce;

var _themeState = initializeThemeState();
/**
 * initialize global state object
 */


function initializeThemeState() {
  var state = _root.__themeState__ || {
    theme: undefined,
    lastStyleElement: undefined,
    registeredStyles: []
  };

  if (!state.runState) {
    state = __assign$1({}, state, {
      perf: {
        count: 0,
        duration: 0
      },
      runState: {
        flushTimer: 0,
        mode: 0
        /* sync */
        ,
        buffer: []
      }
    });
  }

  if (!state.registeredThemableStyles) {
    state = __assign$1({}, state, {
      registeredThemableStyles: []
    });
  }

  _root.__themeState__ = state;
  return state;
}

var _a$2;

var _b, _c;

var _theme = createTheme({
  palette: DefaultPalette,
  semanticColors: _makeSemanticColorsFromPalette(DefaultPalette, false, false),
  fonts: DefaultFontStyles,
  isInverted: false,
  disableGlobalClassNames: false
});
var ThemeSettingName = 'theme';

if (!Customizations.getSettings([ThemeSettingName]).theme) {
  var win = getWindow(); // tslint:disable-line:no-any

  if ((_c = (_b = win) === null || _b === void 0 ? void 0 : _b.FabricConfig) === null || _c === void 0 ? void 0 : _c.theme) {
    _theme = createTheme(win.FabricConfig.theme);
  } // Set the default theme.


  Customizations.applySettings((_a$2 = {}, _a$2[ThemeSettingName] = _theme, _a$2));
}
/**
 * Gets the theme object
 * @param depComments - Whether to include deprecated tags as comments for deprecated slots.
 */


function getTheme(depComments) {
  if (depComments === void 0) {
    depComments = false;
  }

  if (depComments === true) {
    _theme = createTheme({}, depComments);
  }

  return _theme;
}
/**
 * Creates a custom theme definition which can be used with the Customizer.
 * @param theme - Partial theme object.
 * @param depComments - Whether to include deprecated tags as comments for deprecated slots.
 */


function createTheme(theme, depComments) {
  if (depComments === void 0) {
    depComments = false;
  }

  var newPalette = __assign(__assign({}, DefaultPalette), theme.palette);

  if (!theme.palette || !theme.palette.accent) {
    newPalette.accent = newPalette.themePrimary;
  } // mix in custom overrides with good slots first, since custom overrides might be used in fixing deprecated slots


  var newSemanticColors = __assign(__assign({}, _makeSemanticColorsFromPalette(newPalette, !!theme.isInverted, depComments)), theme.semanticColors);

  var defaultFontStyles = __assign({}, DefaultFontStyles);

  if (theme.defaultFontStyle) {
    for (var _i = 0, _a = Object.keys(defaultFontStyles); _i < _a.length; _i++) {
      var fontStyle = _a[_i];
      defaultFontStyles[fontStyle] = merge({}, defaultFontStyles[fontStyle], theme.defaultFontStyle);
    }
  }

  if (theme.fonts) {
    for (var _b = 0, _c = Object.keys(theme.fonts); _b < _c.length; _b++) {
      var fontStyle = _c[_b];
      defaultFontStyles[fontStyle] = merge({}, defaultFontStyles[fontStyle], theme.fonts[fontStyle]);
    }
  }

  return {
    palette: newPalette,
    fonts: __assign({}, defaultFontStyles),
    rtl: theme.rtl,
    semanticColors: newSemanticColors,
    isInverted: !!theme.isInverted,
    disableGlobalClassNames: !!theme.disableGlobalClassNames,
    spacing: __assign(__assign({}, DefaultSpacing), theme.spacing),
    effects: __assign(__assign({}, DefaultEffects), theme.effects)
  };
} // Generates all the semantic slot colors based on the Fabric palette.
// We'll use these as fallbacks for semantic slots that the passed in theme did not define.

function _makeSemanticColorsFromPalette(p, isInverted, depComments) {
  var toReturn = {
    // DEFAULTS
    bodyBackground: p.white,
    bodyBackgroundHovered: p.neutralLighter,
    bodyBackgroundChecked: p.neutralLight,
    bodyStandoutBackground: p.neutralLighterAlt,
    bodyFrameBackground: p.white,
    bodyFrameDivider: p.neutralLight,
    bodyText: p.neutralPrimary,
    bodyTextChecked: p.black,
    bodySubtext: p.neutralSecondary,
    bodyDivider: p.neutralLight,
    disabledBodyText: p.neutralTertiary,
    disabledBodySubtext: p.neutralTertiaryAlt,
    disabledBorder: p.neutralTertiaryAlt,
    focusBorder: p.neutralSecondary,
    variantBorder: p.neutralLight,
    variantBorderHovered: p.neutralTertiary,
    defaultStateBackground: p.neutralLighterAlt,
    // LINKS
    actionLink: p.neutralPrimary,
    actionLinkHovered: p.neutralDark,
    link: p.themePrimary,
    linkHovered: p.themeDarker,
    // BUTTONS
    buttonBackground: p.white,
    buttonBackgroundChecked: p.neutralTertiaryAlt,
    buttonBackgroundHovered: p.neutralLighter,
    buttonBackgroundCheckedHovered: p.neutralLight,
    buttonBackgroundPressed: p.neutralLight,
    buttonBackgroundDisabled: p.neutralLighter,
    buttonBorder: p.neutralSecondaryAlt,
    buttonText: p.neutralPrimary,
    buttonTextHovered: p.neutralDark,
    buttonTextChecked: p.neutralDark,
    buttonTextCheckedHovered: p.black,
    buttonTextPressed: p.neutralDark,
    buttonTextDisabled: p.neutralTertiary,
    buttonBorderDisabled: p.neutralLighter,
    primaryButtonBackground: p.themePrimary,
    primaryButtonBackgroundHovered: p.themeDarkAlt,
    primaryButtonBackgroundPressed: p.themeDark,
    primaryButtonBackgroundDisabled: p.neutralLighter,
    primaryButtonBorder: 'transparent',
    primaryButtonText: p.white,
    primaryButtonTextHovered: p.white,
    primaryButtonTextPressed: p.white,
    primaryButtonTextDisabled: p.neutralQuaternary,
    accentButtonBackground: p.accent,
    accentButtonText: p.white,
    // INPUTS
    inputBorder: p.neutralSecondary,
    inputBorderHovered: p.neutralPrimary,
    inputBackground: p.white,
    inputBackgroundChecked: p.themePrimary,
    inputBackgroundCheckedHovered: p.themeDark,
    inputPlaceholderBackgroundChecked: p.themeLighter,
    inputForegroundChecked: p.white,
    inputIcon: p.themePrimary,
    inputIconHovered: p.themeDark,
    inputIconDisabled: p.neutralTertiary,
    inputFocusBorderAlt: p.themePrimary,
    smallInputBorder: p.neutralSecondary,
    inputText: p.neutralPrimary,
    inputTextHovered: p.neutralDark,
    inputPlaceholderText: p.neutralSecondary,
    disabledBackground: p.neutralLighter,
    disabledText: p.neutralTertiary,
    disabledSubtext: p.neutralQuaternary,
    // LISTS
    listBackground: p.white,
    listText: p.neutralPrimary,
    listItemBackgroundHovered: p.neutralLighter,
    listItemBackgroundChecked: p.neutralLight,
    listItemBackgroundCheckedHovered: p.neutralQuaternaryAlt,
    listHeaderBackgroundHovered: p.neutralLighter,
    listHeaderBackgroundPressed: p.neutralLight,
    // MENUS
    menuBackground: p.white,
    menuDivider: p.neutralTertiaryAlt,
    menuIcon: p.themePrimary,
    menuHeader: p.themePrimary,
    menuItemBackgroundHovered: p.neutralLighter,
    menuItemBackgroundPressed: p.neutralLight,
    menuItemText: p.neutralPrimary,
    menuItemTextHovered: p.neutralDark,
    errorText: !isInverted ? '#a4262c' : '#F1707B',
    messageText: !isInverted ? '#323130' : '#F3F2F1',
    messageLink: !isInverted ? '#005A9E' : '#6CB8F6',
    messageLinkHovered: !isInverted ? '#004578' : '#82C7FF',
    infoIcon: !isInverted ? '#605e5c' : '#C8C6C4',
    errorIcon: !isInverted ? '#A80000' : '#F1707B',
    blockingIcon: !isInverted ? '#FDE7E9' : '#442726',
    warningIcon: !isInverted ? '#797775' : '#C8C6C4',
    severeWarningIcon: !isInverted ? '#D83B01' : '#FCE100',
    successIcon: !isInverted ? '#107C10' : '#92C353',
    infoBackground: !isInverted ? '#f3f2f1' : '#323130',
    errorBackground: !isInverted ? '#FDE7E9' : '#442726',
    blockingBackground: !isInverted ? '#FDE7E9' : '#442726',
    warningBackground: !isInverted ? '#FFF4CE' : '#433519',
    severeWarningBackground: !isInverted ? '#FED9CC' : '#4F2A0F',
    successBackground: !isInverted ? '#DFF6DD' : '#393D1B',
    // Deprecated slots, second pass by _fixDeprecatedSlots() later for self-referential slots
    warningHighlight: !isInverted ? '#ffb900' : '#fff100',
    warningText: '',
    successText: !isInverted ? '#107C10' : '#92c353',
    listTextColor: '',
    menuItemBackgroundChecked: p.neutralLight
  };
  return _fixDeprecatedSlots(toReturn, depComments);
}

function _fixDeprecatedSlots(s, depComments) {
  // Add @deprecated tag as comment if enabled
  var dep = '';

  if (depComments === true) {
    dep = ' /* @deprecated */';
  } // tslint:disable-next-line:deprecation


  s.listTextColor = s.listText + dep; // tslint:disable-next-line:deprecation

  s.menuItemBackgroundChecked += dep; // tslint:disable-next-line:deprecation

  s.warningHighlight += dep; // tslint:disable-next-line:deprecation

  s.warningText = s.messageText + dep; // tslint:disable-next-line:deprecation

  s.successText += dep;
  return s;
}

/**
 * {@docCategory AnimationClassNames}
 */

var AnimationClassNames = buildClassMap(AnimationStyles);

/**
 * {@docCategory FontClassNames}
 */

var FontClassNames = buildClassMap(DefaultFontStyles);

var ColorClassNames = {};

for (var colorName in DefaultPalette) {
  if (DefaultPalette.hasOwnProperty(colorName)) {
    // Foreground color
    _defineGetter(ColorClassNames, colorName, '', false, 'color'); // Hover color


    _defineGetter(ColorClassNames, colorName, 'Hover', true, 'color'); // Background color


    _defineGetter(ColorClassNames, colorName, 'Background', false, 'background'); // Background hover


    _defineGetter(ColorClassNames, colorName, 'BackgroundHover', true, 'background'); // Border color


    _defineGetter(ColorClassNames, colorName, 'Border', false, 'borderColor'); // Border hover color


    _defineGetter(ColorClassNames, colorName, 'BorderHover', true, 'borderColor');
  }
}
/**
 * Defines a getter for the given class configuration.
 */


function _defineGetter(obj, colorName, suffix, isHover, cssProperty) {
  Object.defineProperty(obj, colorName + suffix, {
    get: function () {
      var _a; // tslint:disable-next-line:no-any


      var style = (_a = {}, _a[cssProperty] = getTheme().palette[colorName], _a);
      return mergeStyles(isHover ? {
        selectors: {
          ':hover': style
        }
      } : style).toString();
    },
    enumerable: true,
    configurable: true
  });
}

// @uifabric/styling@7.12.3
setVersion('@uifabric/styling', '7.12.3');

var GlobalClassNames = {
  root: 'ms-Image',
  rootMaximizeFrame: 'ms-Image--maximizeFrame',
  image: 'ms-Image-image',
  imageCenter: 'ms-Image-image--center',
  imageContain: 'ms-Image-image--contain',
  imageCover: 'ms-Image-image--cover',
  imageCenterContain: 'ms-Image-image--centerContain',
  imageCenterCover: 'ms-Image-image--centerCover',
  imageNone: 'ms-Image-image--none',
  imageLandscape: 'ms-Image-image--landscape',
  imagePortrait: 'ms-Image-image--portrait'
};
var getStyles = function (props) {
  var className = props.className,
      width = props.width,
      height = props.height,
      maximizeFrame = props.maximizeFrame,
      isLoaded = props.isLoaded,
      shouldFadeIn = props.shouldFadeIn,
      shouldStartVisible = props.shouldStartVisible,
      isLandscape = props.isLandscape,
      isCenter = props.isCenter,
      isContain = props.isContain,
      isCover = props.isCover,
      isCenterContain = props.isCenterContain,
      isCenterCover = props.isCenterCover,
      isNone = props.isNone,
      isError = props.isError,
      isNotImageFit = props.isNotImageFit,
      theme = props.theme;
  var classNames = getGlobalClassNames(GlobalClassNames, theme);
  var ImageFitStyles = {
    position: 'absolute',
    left: '50% /* @noflip */',
    top: '50%',
    transform: 'translate(-50%,-50%)'
  }; // Cut the mustard using msMaxTouchPoints to detect IE11 which does not support CSS object-fit

  var window = getWindow();
  var supportsObjectFit = window !== undefined && window.navigator.msMaxTouchPoints === undefined;
  var fallbackObjectFitStyles = isContain && isLandscape || isCover && !isLandscape ? {
    width: '100%',
    height: 'auto'
  } : {
    width: 'auto',
    height: '100%'
  };
  return {
    root: [classNames.root, theme.fonts.medium, {
      overflow: 'hidden'
    }, maximizeFrame && [classNames.rootMaximizeFrame, {
      height: '100%',
      width: '100%'
    }], isLoaded && shouldFadeIn && !shouldStartVisible && AnimationClassNames.fadeIn400, (isCenter || isContain || isCover || isCenterContain || isCenterCover) && {
      position: 'relative'
    }, className],
    image: [classNames.image, {
      display: 'block',
      opacity: 0
    }, isLoaded && ['is-loaded', {
      opacity: 1
    }], isCenter && [classNames.imageCenter, ImageFitStyles], isContain && [classNames.imageContain, supportsObjectFit && {
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    }, !supportsObjectFit && fallbackObjectFitStyles, ImageFitStyles], isCover && [classNames.imageCover, supportsObjectFit && {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }, !supportsObjectFit && fallbackObjectFitStyles, ImageFitStyles], isCenterContain && [classNames.imageCenterContain, isLandscape && {
      maxWidth: '100%'
    }, !isLandscape && {
      maxHeight: '100%'
    }, ImageFitStyles], isCenterCover && [classNames.imageCenterCover, isLandscape && {
      maxHeight: '100%'
    }, !isLandscape && {
      maxWidth: '100%'
    }, ImageFitStyles], isNone && [classNames.imageNone, {
      width: 'auto',
      height: 'auto'
    }], isNotImageFit && [!!width && !height && {
      height: 'auto',
      width: '100%'
    }, !width && !!height && {
      height: '100%',
      width: 'auto'
    }, !!width && !!height && {
      height: '100%',
      width: '100%'
    }], isLandscape && classNames.imageLandscape, !isLandscape && classNames.imagePortrait, !isLoaded && 'is-notLoaded', shouldFadeIn && 'is-fadeIn', isError && 'is-error']
  };
};

var Image = styled(ImageBase, getStyles, undefined, {
  scope: 'Image'
}, true);

/** Class names used in themeable and non-themeable Icon components */

var classNames = mergeStyleSets({
  root: {
    display: 'inline-block'
  },
  placeholder: ['ms-Icon-placeHolder', {
    width: '1em'
  }],
  image: ['ms-Icon-imageContainer', {
    overflow: 'hidden'
  }]
});
/** Class name used only in non-themeable Icon components */

var MS_ICON = 'ms-Icon';
var getStyles$1 = function (props) {
  var className = props.className,
      iconClassName = props.iconClassName,
      isPlaceholder = props.isPlaceholder,
      isImage = props.isImage,
      styles = props.styles;
  return {
    root: [isPlaceholder && classNames.placeholder, classNames.root, isImage && classNames.image, iconClassName, className, styles && styles.root, // tslint:disable-next-line:deprecation
    styles && styles.imageContainer]
  };
};

var getIconContent = memoizeFunction(function (iconName) {
  var _a = getIcon(iconName) || {
    subset: {},
    code: undefined
  },
      code = _a.code,
      subset = _a.subset;

  if (!code) {
    return null;
  }

  return {
    children: code,
    iconClassName: subset.className,
    fontFamily: subset.fontFace && subset.fontFace.fontFamily
  };
}, undefined, true
/*ignoreNullOrUndefinedResult */
);
/**
 * Fast icon component which only supports font glyphs (not images) and can't be targeted by customizations.
 * To style the icon, use `className` or reference `ms-Icon` in CSS.
 * {@docCategory Icon}
 */

var FontIcon = function (props) {
  var iconName = props.iconName,
      className = props.className,
      _a = props.style,
      style = _a === void 0 ? {} : _a;
  var iconContent = getIconContent(iconName) || {};
  var iconClassName = iconContent.iconClassName,
      children = iconContent.children,
      fontFamily = iconContent.fontFamily;
  var nativeProps = getNativeProps(props, htmlElementProperties);
  var containerProps = props['aria-label'] ? {} : {
    role: 'presentation',
    'aria-hidden': true
  };
  return React.createElement("i", __assign({
    "data-icon-name": iconName
  }, containerProps, nativeProps, {
    className: css(MS_ICON, classNames.root, iconClassName, !iconName && classNames.placeholder, className),
    // Apply the font family this way to ensure it doesn't get overridden by Fabric Core ms-Icon styles
    // https://github.com/microsoft/fluentui/issues/10449
    style: __assign({
      fontFamily: fontFamily
    }, style)
  }), children);
};
/**
 * Memoized helper for rendering a FontIcon.
 * @param iconName - The name of the icon to use from the icon font.
 * @param className - Class name for styling the icon.
 * @param ariaLabel - Label for the icon for the benefit of screen readers.
 * {@docCategory Icon}
 */

var getFontIcon = memoizeFunction(function (iconName, className, ariaLabel) {
  return FontIcon({
    iconName: iconName,
    className: className,
    'aria-label': ariaLabel
  });
});

var getClassNames$1 = classNamesFunction({
  // Icon is used a lot by other components.
  // It's likely to see expected cases which pass different className to the Icon.
  // Therefore setting a larger cache size.
  cacheSize: 100
});

var IconBase =
/** @class */
function (_super) {
  __extends(IconBase, _super);

  function IconBase(props) {
    var _this = _super.call(this, props) || this;

    _this.onImageLoadingStateChange = function (state) {
      if (_this.props.imageProps && _this.props.imageProps.onLoadingStateChange) {
        _this.props.imageProps.onLoadingStateChange(state);
      }

      if (state === ImageLoadState.error) {
        _this.setState({
          imageLoadError: true
        });
      }
    };

    _this.state = {
      imageLoadError: false
    };
    return _this;
  }

  IconBase.prototype.render = function () {
    var _a = this.props,
        className = _a.className,
        styles = _a.styles,
        iconName = _a.iconName,
        imageErrorAs = _a.imageErrorAs,
        theme = _a.theme;
    var isPlaceholder = typeof iconName === 'string' && iconName.length === 0;
    var isImage = // tslint:disable-next-line:deprecation
    !!this.props.imageProps || this.props.iconType === IconType.image || this.props.iconType === IconType.Image;
    var iconContent = getIconContent(iconName) || {};
    var iconClassName = iconContent.iconClassName,
        children = iconContent.children;
    var classNames = getClassNames$1(styles, {
      theme: theme,
      className: className,
      iconClassName: iconClassName,
      isImage: isImage,
      isPlaceholder: isPlaceholder
    });
    var RootType = isImage ? 'span' : 'i';
    var nativeProps = getNativeProps(this.props, htmlElementProperties, ['aria-label']);
    var imageLoadError = this.state.imageLoadError;

    var imageProps = __assign(__assign({}, this.props.imageProps), {
      onLoadingStateChange: this.onImageLoadingStateChange
    });

    var ImageType = imageLoadError && imageErrorAs || Image; // tslint:disable-next-line:deprecation

    var ariaLabel = this.props['aria-label'] || this.props.ariaLabel;
    var containerProps = ariaLabel ? {
      'aria-label': ariaLabel
    } : {
      'aria-hidden': this.props['aria-labelledby'] || imageProps['aria-labelledby'] ? false : true
    };
    return React.createElement(RootType, __assign({
      "data-icon-name": iconName
    }, containerProps, nativeProps, {
      className: classNames.root
    }), isImage ? React.createElement(ImageType, __assign({}, imageProps)) : children);
  };

  return IconBase;
}(React.Component);

/**
 * Legacy Icon component which can be targeted by customization. It's recommended to use `FontIcon`
 * or `ImageIcon` instead, especially in scenarios where rendering performance is important.
 * {@docCategory Icon}
 */

var Icon = styled(IconBase, getStyles$1, undefined, {
  scope: 'Icon'
}, true);

/**
 * Fast icon component which only supports images (not font glyphs) and can't be targeted by customizations.
 * To style the icon, use `className` or reference `ms-Icon` in CSS.
 * {@docCategory Icon}
 */

var ImageIcon = function (props) {
  var className = props.className,
      imageProps = props.imageProps;
  var nativeProps = getNativeProps(props, htmlElementProperties);
  var containerProps = props['aria-label'] ? {} : {
    role: 'presentation',
    'aria-hidden': imageProps.alt || imageProps['aria-labelledby'] ? false : true
  };
  return React.createElement("div", __assign({}, containerProps, nativeProps, {
    className: css(MS_ICON, classNames.root, classNames.image, className)
  }), React.createElement(Image, __assign({}, imageProps)));
};

var DirectionalHint = {
  /**
   * Appear above the target element, with the left edges of the callout and target aligning.
   */
  topLeftEdge: 0,

  /**
   * Appear above the target element, with the centers of the callout and target aligning.
   */
  topCenter: 1,

  /**
   * Appear above the target element, with the right edges of the callout and target aligning.
   */
  topRightEdge: 2,

  /**
   * Appear above the target element, aligning with the target element such that the callout tends toward
   * the center of the screen.
   */
  topAutoEdge: 3,

  /**
   * Appear below the target element, with the left edges of the callout and target aligning.
   */
  bottomLeftEdge: 4,

  /**
   * Appear below the target element, with the centers of the callout and target aligning.
   */
  bottomCenter: 5,

  /**
   * Appear below the target element, with the right edges of the callout and target aligning.
   */
  bottomRightEdge: 6,

  /**
   * Appear below the target element, aligning with the target element such that the callout tends toward
   * the center of the screen.
   */
  bottomAutoEdge: 7,

  /**
   * Appear to the left of the target element, with the top edges of the callout and target aligning.
   */
  leftTopEdge: 8,

  /**
   * Appear to the left of the target element, with the centers of the callout and target aligning.
   */
  leftCenter: 9,

  /**
   * Appear to the left of the target element, with the bottom edges of the callout and target aligning.
   */
  leftBottomEdge: 10,

  /**
   * Appear to the right of the target element, with the top edges of the callout and target aligning.
   */
  rightTopEdge: 11,

  /**
   * Appear to the right of the target element, with the centers of the callout and target aligning.
   */
  rightCenter: 12,

  /**
   * Appear to the right of the target element, with the bottom edges of the callout and target aligning.
   */
  rightBottomEdge: 13
};

/**
 * {@docCategory ContextualMenu}
 */

var ContextualMenuItemType;

(function (ContextualMenuItemType) {
  ContextualMenuItemType[ContextualMenuItemType["Normal"] = 0] = "Normal";
  ContextualMenuItemType[ContextualMenuItemType["Divider"] = 1] = "Divider";
  ContextualMenuItemType[ContextualMenuItemType["Header"] = 2] = "Header";
  ContextualMenuItemType[ContextualMenuItemType["Section"] = 3] = "Section";
})(ContextualMenuItemType || (ContextualMenuItemType = {}));

/**
 * {@docCategory FocusZone}
 */
var FocusZoneTabbableElements = {
  /** Tabbing is not allowed */
  none: 0,

  /** All tabbing action is allowed */
  all: 1,

  /** Tabbing is allowed only on input elements */
  inputOnly: 2
};
/**
 * {@docCategory FocusZone}
 */

var FocusZoneDirection;

(function (FocusZoneDirection) {
  /** Only react to up/down arrows. */
  FocusZoneDirection[FocusZoneDirection["vertical"] = 0] = "vertical";
  /** Only react to left/right arrows. */

  FocusZoneDirection[FocusZoneDirection["horizontal"] = 1] = "horizontal";
  /** React to all arrows. */

  FocusZoneDirection[FocusZoneDirection["bidirectional"] = 2] = "bidirectional";
  /**
   * React to all arrows. Navigate next item in DOM on right/down arrow keys and previous - left/up arrow keys.
   * Right and Left arrow keys are swapped in RTL mode.
   */

  FocusZoneDirection[FocusZoneDirection["domOrder"] = 3] = "domOrder";
})(FocusZoneDirection || (FocusZoneDirection = {}));

var IS_FOCUSABLE_ATTRIBUTE$1 = 'data-is-focusable';
var IS_ENTER_DISABLED_ATTRIBUTE = 'data-disable-click-on-enter';
var FOCUSZONE_ID_ATTRIBUTE$1 = 'data-focuszone-id';
var TABINDEX = 'tabindex';
var NO_VERTICAL_WRAP = 'data-no-vertical-wrap';
var NO_HORIZONTAL_WRAP = 'data-no-horizontal-wrap';
var LARGE_DISTANCE_FROM_CENTER = 999999999;
var LARGE_NEGATIVE_DISTANCE_FROM_CENTER = -999999999;
var focusZoneStyles;
var focusZoneClass = 'ms-FocusZone'; // Helper function that will return a class for when the root is focused

function getRootClass() {
  if (!focusZoneStyles) {
    focusZoneStyles = mergeStyles({
      selectors: {
        ':focus': {
          outline: 'none'
        }
      }
    }, focusZoneClass);
  }

  return focusZoneStyles;
}

var _allInstances = {};

var _outerZones = new Set();

var ALLOWED_INPUT_TYPES = ['text', 'number', 'password', 'email', 'tel', 'url', 'search'];
var ALLOW_VIRTUAL_ELEMENTS = false;

var FocusZone =
/** @class */
function (_super) {
  __extends(FocusZone, _super);

  function FocusZone(props) {
    var _this = _super.call(this, props) || this;

    _this._root = React.createRef();

    _this._onFocus = function (ev) {
      if (_this._portalContainsElement(ev.target)) {
        // If the event target is inside a portal do not process the event.
        return;
      }

      var _a = _this.props,
          onActiveElementChanged = _a.onActiveElementChanged,
          // tslint:disable-next-line:deprecation
      doNotAllowFocusEventToPropagate = _a.doNotAllowFocusEventToPropagate,
          stopFocusPropagation = _a.stopFocusPropagation,
          // tslint:disable-next-line:deprecation
      onFocusNotification = _a.onFocusNotification,
          onFocus = _a.onFocus;

      var isImmediateDescendant = _this._isImmediateDescendantOfZone(ev.target);

      var newActiveElement;

      if (onFocus) {
        onFocus(ev);
      } else if (onFocusNotification) {
        onFocusNotification();
      }

      if (isImmediateDescendant) {
        newActiveElement = ev.target;
      } else {
        var parentElement = ev.target;

        while (parentElement && parentElement !== _this._root.current) {
          if (isElementTabbable(parentElement) && _this._isImmediateDescendantOfZone(parentElement)) {
            newActiveElement = parentElement;
            break;
          }

          parentElement = getParent(parentElement, ALLOW_VIRTUAL_ELEMENTS);
        }
      }

      var initialElementFocused = !_this._activeElement; // If the new active element is a child of this zone and received focus,
      // update alignment an immediate descendant

      if (newActiveElement && newActiveElement !== _this._activeElement) {
        if (isImmediateDescendant || initialElementFocused) {
          _this._setFocusAlignment(newActiveElement, true, true);
        }

        _this._activeElement = newActiveElement;

        if (initialElementFocused) {
          _this._updateTabIndexes();
        }
      }

      if (onActiveElementChanged) {
        onActiveElementChanged(_this._activeElement, ev);
      }

      if (stopFocusPropagation || doNotAllowFocusEventToPropagate) {
        ev.stopPropagation();
      }
    };

    _this._onBlur = function () {
      _this._setParkedFocus(false);
    };
    /**
     * Handle global tab presses so that we can patch tabindexes on the fly.
     */


    _this._onKeyDownCapture = function (ev) {
      // tslint:disable-next-line:deprecation
      if (ev.which === KeyCodes.tab) {
        _outerZones.forEach(function (zone) {
          return zone._updateTabIndexes();
        });
      }
    };

    _this._onMouseDown = function (ev) {
      if (_this._portalContainsElement(ev.target)) {
        // If the event target is inside a portal do not process the event.
        return;
      }

      var disabled = _this.props.disabled;

      if (disabled) {
        return;
      }

      var target = ev.target;
      var path = [];

      while (target && target !== _this._root.current) {
        path.push(target);
        target = getParent(target, ALLOW_VIRTUAL_ELEMENTS);
      }

      while (path.length) {
        target = path.pop();

        if (target && isElementTabbable(target)) {
          _this._setActiveElement(target, true);
        }

        if (isElementFocusZone(target)) {
          // Stop here since the focus zone will take care of its own children.
          break;
        }
      }
    };
    /**
     * Handle the keystrokes.
     */


    _this._onKeyDown = function (ev) {
      if (_this._portalContainsElement(ev.target)) {
        // If the event target is inside a portal do not process the event.
        return;
      } // tslint:disable-next-line:deprecation


      var _a = _this.props,
          direction = _a.direction,
          disabled = _a.disabled,
          isInnerZoneKeystroke = _a.isInnerZoneKeystroke,
          pagingSupportDisabled = _a.pagingSupportDisabled,
          shouldEnterInnerZone = _a.shouldEnterInnerZone;

      if (disabled) {
        return;
      }

      if (_this.props.onKeyDown) {
        _this.props.onKeyDown(ev);
      } // If the default has been prevented, do not process keyboard events.


      if (ev.isDefaultPrevented()) {
        return;
      }

      if (_this._getDocument().activeElement === _this._root.current && _this._isInnerZone) {
        // If this element has focus, it is being controlled by a parent.
        // Ignore the keystroke.
        return;
      }

      if ((shouldEnterInnerZone && shouldEnterInnerZone(ev) || isInnerZoneKeystroke && isInnerZoneKeystroke(ev)) && _this._isImmediateDescendantOfZone(ev.target)) {
        // Try to focus
        var innerZone = _this._getFirstInnerZone();

        if (innerZone) {
          if (!innerZone.focus(true)) {
            return;
          }
        } else if (isElementFocusSubZone(ev.target)) {
          if (!_this.focusElement(getNextElement(ev.target, ev.target.firstChild, true))) {
            return;
          }
        } else {
          return;
        }
      } else if (ev.altKey) {
        return;
      } else {
        switch (ev.which) {
          case KeyCodes.space:
            if (_this._tryInvokeClickForFocusable(ev.target)) {
              break;
            }

            return;

          case KeyCodes.left:
            if (direction !== FocusZoneDirection.vertical) {
              _this._preventDefaultWhenHandled(ev);

              if (_this._moveFocusLeft()) {
                break;
              }
            }

            return;

          case KeyCodes.right:
            if (direction !== FocusZoneDirection.vertical) {
              _this._preventDefaultWhenHandled(ev);

              if (_this._moveFocusRight()) {
                break;
              }
            }

            return;

          case KeyCodes.up:
            if (direction !== FocusZoneDirection.horizontal) {
              _this._preventDefaultWhenHandled(ev);

              if (_this._moveFocusUp()) {
                break;
              }
            }

            return;

          case KeyCodes.down:
            if (direction !== FocusZoneDirection.horizontal) {
              _this._preventDefaultWhenHandled(ev);

              if (_this._moveFocusDown()) {
                break;
              }
            }

            return;

          case KeyCodes.pageDown:
            if (!pagingSupportDisabled && _this._moveFocusPaging(true)) {
              break;
            }

            return;

          case KeyCodes.pageUp:
            if (!pagingSupportDisabled && _this._moveFocusPaging(false)) {
              break;
            }

            return;

          case KeyCodes.tab:
            if ( // tslint:disable-next-line:deprecation
            _this.props.allowTabKey || _this.props.handleTabKey === FocusZoneTabbableElements.all || _this.props.handleTabKey === FocusZoneTabbableElements.inputOnly && _this._isElementInput(ev.target)) {
              var focusChanged = false;
              _this._processingTabKey = true;

              if (direction === FocusZoneDirection.vertical || !_this._shouldWrapFocus(_this._activeElement, NO_HORIZONTAL_WRAP)) {
                focusChanged = ev.shiftKey ? _this._moveFocusUp() : _this._moveFocusDown();
              } else {
                var tabWithDirection = getRTL$1() ? !ev.shiftKey : ev.shiftKey;
                focusChanged = tabWithDirection ? _this._moveFocusLeft() : _this._moveFocusRight();
              }

              _this._processingTabKey = false;

              if (focusChanged) {
                break;
              } else if (_this.props.shouldResetActiveElementWhenTabFromZone) {
                _this._activeElement = null;
              }
            }

            return;

          case KeyCodes.home:
            if (_this._isContentEditableElement(ev.target) || _this._isElementInput(ev.target) && !_this._shouldInputLoseFocus(ev.target, false)) {
              return false;
            }

            var firstChild = _this._root.current && _this._root.current.firstChild;

            if (_this._root.current && firstChild && _this.focusElement(getNextElement(_this._root.current, firstChild, true))) {
              break;
            }

            return;

          case KeyCodes.end:
            if (_this._isContentEditableElement(ev.target) || _this._isElementInput(ev.target) && !_this._shouldInputLoseFocus(ev.target, true)) {
              return false;
            }

            var lastChild = _this._root.current && _this._root.current.lastChild;

            if (_this._root.current && _this.focusElement(getPreviousElement(_this._root.current, lastChild, true, true, true))) {
              break;
            }

            return;

          case KeyCodes.enter:
            if (_this._tryInvokeClickForFocusable(ev.target)) {
              break;
            }

            return;

          default:
            return;
        }
      }

      ev.preventDefault();
      ev.stopPropagation();
    };

    _this._getHorizontalDistanceFromCenter = function (isForward, activeRect, targetRect) {
      // tslint:disable-next-line:deprecation
      var leftAlignment = _this._focusAlignment.left || _this._focusAlignment.x || 0; // ClientRect values can be floats that differ by very small fractions of a decimal.
      // If the difference between top and bottom are within a pixel then we should treat
      // them as equivalent by using Math.floor. For instance 5.2222 and 5.222221 should be equivalent,
      // but without Math.Floor they will be handled incorrectly.

      var targetRectTop = Math.floor(targetRect.top);
      var activeRectBottom = Math.floor(activeRect.bottom);
      var targetRectBottom = Math.floor(targetRect.bottom);
      var activeRectTop = Math.floor(activeRect.top);
      var isValidCandidateOnpagingDown = isForward && targetRectTop > activeRectBottom;
      var isValidCandidateOnpagingUp = !isForward && targetRectBottom < activeRectTop;

      if (isValidCandidateOnpagingDown || isValidCandidateOnpagingUp) {
        if (leftAlignment >= targetRect.left && leftAlignment <= targetRect.left + targetRect.width) {
          return 0;
        }

        return Math.abs(targetRect.left + targetRect.width / 2 - leftAlignment);
      }

      if (!_this._shouldWrapFocus(_this._activeElement, NO_VERTICAL_WRAP)) {
        return LARGE_NEGATIVE_DISTANCE_FROM_CENTER;
      }

      return LARGE_DISTANCE_FROM_CENTER;
    }; // Manage componentRef resolution.


    initializeComponentRef(_this);

    {
      warnDeprecations('FocusZone', props, {
        rootProps: undefined,
        allowTabKey: 'handleTabKey',
        elementType: 'as',
        ariaDescribedBy: 'aria-describedby',
        ariaLabelledBy: 'aria-labelledby'
      });
    }

    _this._id = getId('FocusZone');
    _this._focusAlignment = {
      left: 0,
      top: 0
    };
    _this._processingTabKey = false;
    return _this;
  }
  /** Used for testing purposes only. */


  FocusZone.getOuterZones = function () {
    return _outerZones.size;
  };

  FocusZone.prototype.componentDidMount = function () {
    var root = this._root.current;
    _allInstances[this._id] = this;

    if (root) {
      this._windowElement = getWindow(root);
      var parentElement = getParent(root, ALLOW_VIRTUAL_ELEMENTS);

      while (parentElement && parentElement !== this._getDocument().body && parentElement.nodeType === 1) {
        if (isElementFocusZone(parentElement)) {
          this._isInnerZone = true;
          break;
        }

        parentElement = getParent(parentElement, ALLOW_VIRTUAL_ELEMENTS);
      }

      if (!this._isInnerZone) {
        _outerZones.add(this);

        if (this._windowElement && _outerZones.size === 1) {
          this._windowElement.addEventListener('keydown', this._onKeyDownCapture, true);
        }
      }

      this._root.current && this._root.current.addEventListener('blur', this._onBlur, true); // Assign initial tab indexes so that we can set initial focus as appropriate.

      this._updateTabIndexes();

      if (this.props.defaultActiveElement) {
        this._activeElement = this._getDocument().querySelector(this.props.defaultActiveElement);

        if (this.props.shouldFocusOnMount) {
          this.focus();
        }
      }
    }
  };

  FocusZone.prototype.componentDidUpdate = function () {
    var root = this._root.current;

    var doc = this._getDocument();

    if (doc && this._lastIndexPath && (doc.activeElement === doc.body || doc.activeElement === null || !this.props.preventFocusRestoration && doc.activeElement === root)) {
      // The element has been removed after the render, attempt to restore focus.
      var elementToFocus = getFocusableByIndexPath(root, this._lastIndexPath);

      if (elementToFocus) {
        this._setActiveElement(elementToFocus, true);

        elementToFocus.focus();

        this._setParkedFocus(false);
      } else {
        // We had a focus path to restore, but now that path is unresolvable. Park focus
        // on the container until we can try again.
        this._setParkedFocus(true);
      }
    }
  };

  FocusZone.prototype.componentWillUnmount = function () {
    delete _allInstances[this._id];

    if (!this._isInnerZone) {
      _outerZones.delete(this); // If this is the last outer zone, remove the keydown listener.


      if (this._windowElement && _outerZones.size === 0) {
        this._windowElement.removeEventListener('keydown', this._onKeyDownCapture, true);
      }
    }

    if (this._root.current) {
      this._root.current.removeEventListener('blur', this._onBlur, true);
    }

    this._activeElement = null;
    this._defaultFocusElement = null;
  };

  FocusZone.prototype.render = function () {
    // tslint:disable-next-line:deprecation
    var _a = this.props,
        tag = _a.as,
        elementType = _a.elementType,
        rootProps = _a.rootProps,
        ariaDescribedBy = _a.ariaDescribedBy,
        ariaLabelledBy = _a.ariaLabelledBy,
        className = _a.className;
    var divProps = getNativeProps(this.props, htmlElementProperties);
    var Tag = tag || elementType || 'div'; // Note, right before rendering/reconciling proceeds, we need to record if focus
    // was in the zone before the update. This helper will track this and, if focus
    // was actually in the zone, what the index path to the element is at this time.
    // Then, later in componentDidUpdate, we can evaluate if we need to restore it in
    // the case the element was removed.

    this._evaluateFocusBeforeRender();

    return React.createElement(Tag, __assign({
      "aria-labelledby": ariaLabelledBy,
      "aria-describedby": ariaDescribedBy
    }, divProps, rootProps, {
      // Once the getClassName correctly memoizes inputs this should
      // be replaced so that className is passed to getRootClass and is included there so
      // the class names will always be in the same order.
      className: css(getRootClass(), className),
      ref: this._root,
      "data-focuszone-id": this._id,
      onKeyDown: this._onKeyDown,
      onFocus: this._onFocus,
      onMouseDownCapture: this._onMouseDown
    }), this.props.children);
  };
  /**
   * Sets focus to the first tabbable item in the zone.
   * @param forceIntoFirstElement - If true, focus will be forced into the first element, even
   * if focus is already in the focus zone.
   * @returns True if focus could be set to an active element, false if no operation was taken.
   */


  FocusZone.prototype.focus = function (forceIntoFirstElement) {
    if (forceIntoFirstElement === void 0) {
      forceIntoFirstElement = false;
    }

    if (this._root.current) {
      if (!forceIntoFirstElement && this._root.current.getAttribute(IS_FOCUSABLE_ATTRIBUTE$1) === 'true' && this._isInnerZone) {
        var ownerZoneElement = this._getOwnerZone(this._root.current);

        if (ownerZoneElement !== this._root.current) {
          var ownerZone = _allInstances[ownerZoneElement.getAttribute(FOCUSZONE_ID_ATTRIBUTE$1)];

          return !!ownerZone && ownerZone.focusElement(this._root.current);
        }

        return false;
      } else if (!forceIntoFirstElement && this._activeElement && elementContains(this._root.current, this._activeElement) && isElementTabbable(this._activeElement)) {
        this._activeElement.focus();

        return true;
      } else {
        var firstChild = this._root.current.firstChild;
        return this.focusElement(getNextElement(this._root.current, firstChild, true));
      }
    }

    return false;
  };
  /**
   * Sets focus to the last tabbable item in the zone.
   * @returns True if focus could be set to an active element, false if no operation was taken.
   */


  FocusZone.prototype.focusLast = function () {
    if (this._root.current) {
      var lastChild = this._root.current && this._root.current.lastChild;
      return this.focusElement(getPreviousElement(this._root.current, lastChild, true, true, true));
    }

    return false;
  };
  /**
   * Sets focus to a specific child element within the zone. This can be used in conjunction with
   * shouldReceiveFocus to create delayed focus scenarios (like animate the scroll position to the correct
   * location and then focus.)
   * @param element - The child element within the zone to focus.
   * @returns True if focus could be set to an active element, false if no operation was taken.
   */


  FocusZone.prototype.focusElement = function (element) {
    // tslint:disable-next-line:deprecation
    var _a = this.props,
        onBeforeFocus = _a.onBeforeFocus,
        shouldReceiveFocus = _a.shouldReceiveFocus;

    if (shouldReceiveFocus && !shouldReceiveFocus(element) || onBeforeFocus && !onBeforeFocus(element)) {
      return false;
    }

    if (element) {
      // when we Set focus to a specific child, we should recalculate the alignment depend on its position
      this._setActiveElement(element);

      if (this._activeElement) {
        this._activeElement.focus();
      }

      return true;
    }

    return false;
  };
  /**
   * Forces horizontal alignment in the context of vertical arrowing to use specific point as the reference,
   * rather than a center based on the last horizontal motion.
   * @param point - the new reference point.
   */


  FocusZone.prototype.setFocusAlignment = function (point) {
    this._focusAlignment = point;
  };

  FocusZone.prototype._evaluateFocusBeforeRender = function () {
    var root = this._root.current;

    var doc = this._getDocument();

    if (doc) {
      var focusedElement = doc.activeElement; // Only update the index path if we are not parked on the root.

      if (focusedElement !== root) {
        var shouldRestoreFocus = elementContains(root, focusedElement, false);
        this._lastIndexPath = shouldRestoreFocus ? getElementIndexPath(root, focusedElement) : undefined;
      }
    }
  };
  /**
   * When focus is in the zone at render time but then all focusable elements are removed,
   * we "park" focus temporarily on the root. Once we update with focusable children, we restore
   * focus to the closest path from previous. If the user tabs away from the parked container,
   * we restore focusability to the pre-parked state.
   */


  FocusZone.prototype._setParkedFocus = function (isParked) {
    var root = this._root.current;

    if (root && this._isParked !== isParked) {
      this._isParked = isParked;

      if (isParked) {
        if (!this.props.allowFocusRoot) {
          this._parkedTabIndex = root.getAttribute('tabindex');
          root.setAttribute('tabindex', '-1');
        }

        root.focus();
      } else if (!this.props.allowFocusRoot) {
        if (this._parkedTabIndex) {
          root.setAttribute('tabindex', this._parkedTabIndex);
          this._parkedTabIndex = undefined;
        } else {
          root.removeAttribute('tabindex');
        }
      }
    }
  };

  FocusZone.prototype._setActiveElement = function (element, forceAlignment) {
    var previousActiveElement = this._activeElement;
    this._activeElement = element;

    if (previousActiveElement) {
      if (isElementFocusZone(previousActiveElement)) {
        this._updateTabIndexes(previousActiveElement);
      }

      previousActiveElement.tabIndex = -1;
    }

    if (this._activeElement) {
      if (!this._focusAlignment || forceAlignment) {
        this._setFocusAlignment(element, true, true);
      }

      this._activeElement.tabIndex = 0;
    }
  };

  FocusZone.prototype._preventDefaultWhenHandled = function (ev) {
    this.props.preventDefaultWhenHandled && ev.preventDefault();
  };
  /**
   * Walk up the dom try to find a focusable element.
   */


  FocusZone.prototype._tryInvokeClickForFocusable = function (target) {
    if (target === this._root.current) {
      return false;
    }

    do {
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        return false;
      }

      if (this._isImmediateDescendantOfZone(target) && target.getAttribute(IS_FOCUSABLE_ATTRIBUTE$1) === 'true' && target.getAttribute(IS_ENTER_DISABLED_ATTRIBUTE) !== 'true') {
        raiseClick(target);
        return true;
      }

      target = getParent(target, ALLOW_VIRTUAL_ELEMENTS);
    } while (target !== this._root.current);

    return false;
  };
  /**
   * Traverse to find first child zone.
   */


  FocusZone.prototype._getFirstInnerZone = function (rootElement) {
    rootElement = rootElement || this._activeElement || this._root.current;

    if (!rootElement) {
      return null;
    }

    if (isElementFocusZone(rootElement)) {
      return _allInstances[rootElement.getAttribute(FOCUSZONE_ID_ATTRIBUTE$1)];
    }

    var child = rootElement.firstElementChild;

    while (child) {
      if (isElementFocusZone(child)) {
        return _allInstances[child.getAttribute(FOCUSZONE_ID_ATTRIBUTE$1)];
      }

      var match = this._getFirstInnerZone(child);

      if (match) {
        return match;
      }

      child = child.nextElementSibling;
    }

    return null;
  };

  FocusZone.prototype._moveFocus = function (isForward, getDistanceFromCenter, ev, useDefaultWrap) {
    if (useDefaultWrap === void 0) {
      useDefaultWrap = true;
    }

    var element = this._activeElement;
    var candidateDistance = -1;
    var candidateElement = undefined;
    var changedFocus = false;
    var isBidirectional = this.props.direction === FocusZoneDirection.bidirectional;

    if (!element || !this._root.current) {
      return false;
    }

    if (this._isElementInput(element)) {
      if (!this._shouldInputLoseFocus(element, isForward)) {
        return false;
      }
    }

    var activeRect = isBidirectional ? element.getBoundingClientRect() : null;

    do {
      element = isForward ? getNextElement(this._root.current, element) : getPreviousElement(this._root.current, element);

      if (isBidirectional) {
        if (element) {
          var targetRect = element.getBoundingClientRect();
          var elementDistance = getDistanceFromCenter(activeRect, targetRect);

          if (elementDistance === -1 && candidateDistance === -1) {
            candidateElement = element;
            break;
          }

          if (elementDistance > -1 && (candidateDistance === -1 || elementDistance < candidateDistance)) {
            candidateDistance = elementDistance;
            candidateElement = element;
          }

          if (candidateDistance >= 0 && elementDistance < 0) {
            break;
          }
        }
      } else {
        candidateElement = element;
        break;
      }
    } while (element); // Focus the closest candidate


    if (candidateElement && candidateElement !== this._activeElement) {
      changedFocus = true;
      this.focusElement(candidateElement);
    } else if (this.props.isCircularNavigation && useDefaultWrap) {
      if (isForward) {
        return this.focusElement(getNextElement(this._root.current, this._root.current.firstElementChild, true));
      } else {
        return this.focusElement(getPreviousElement(this._root.current, this._root.current.lastElementChild, true, true, true));
      }
    }

    return changedFocus;
  };

  FocusZone.prototype._moveFocusDown = function () {
    var _this = this;

    var targetTop = -1; // tslint:disable-next-line:deprecation

    var leftAlignment = this._focusAlignment.left || this._focusAlignment.x || 0;

    if (this._moveFocus(true, function (activeRect, targetRect) {
      var distance = -1; // ClientRect values can be floats that differ by very small fractions of a decimal.
      // If the difference between top and bottom are within a pixel then we should treat
      // them as equivalent by using Math.floor. For instance 5.2222 and 5.222221 should be equivalent,
      // but without Math.Floor they will be handled incorrectly.

      var targetRectTop = Math.floor(targetRect.top);
      var activeRectBottom = Math.floor(activeRect.bottom);

      if (targetRectTop < activeRectBottom) {
        if (!_this._shouldWrapFocus(_this._activeElement, NO_VERTICAL_WRAP)) {
          return LARGE_NEGATIVE_DISTANCE_FROM_CENTER;
        }

        return LARGE_DISTANCE_FROM_CENTER;
      }

      if (targetTop === -1 && targetRectTop >= activeRectBottom || targetRectTop === targetTop) {
        targetTop = targetRectTop;

        if (leftAlignment >= targetRect.left && leftAlignment <= targetRect.left + targetRect.width) {
          distance = 0;
        } else {
          distance = Math.abs(targetRect.left + targetRect.width / 2 - leftAlignment);
        }
      }

      return distance;
    })) {
      this._setFocusAlignment(this._activeElement, false, true);

      return true;
    }

    return false;
  };

  FocusZone.prototype._moveFocusUp = function () {
    var _this = this;

    var targetTop = -1; // tslint:disable-next-line:deprecation

    var leftAlignment = this._focusAlignment.left || this._focusAlignment.x || 0;

    if (this._moveFocus(false, function (activeRect, targetRect) {
      var distance = -1; // ClientRect values can be floats that differ by very small fractions of a decimal.
      // If the difference between top and bottom are within a pixel then we should treat
      // them as equivalent by using Math.floor. For instance 5.2222 and 5.222221 should be equivalent,
      // but without Math.Floor they will be handled incorrectly.

      var targetRectBottom = Math.floor(targetRect.bottom);
      var targetRectTop = Math.floor(targetRect.top);
      var activeRectTop = Math.floor(activeRect.top);

      if (targetRectBottom > activeRectTop) {
        if (!_this._shouldWrapFocus(_this._activeElement, NO_VERTICAL_WRAP)) {
          return LARGE_NEGATIVE_DISTANCE_FROM_CENTER;
        }

        return LARGE_DISTANCE_FROM_CENTER;
      }

      if (targetTop === -1 && targetRectBottom <= activeRectTop || targetRectTop === targetTop) {
        targetTop = targetRectTop;

        if (leftAlignment >= targetRect.left && leftAlignment <= targetRect.left + targetRect.width) {
          distance = 0;
        } else {
          distance = Math.abs(targetRect.left + targetRect.width / 2 - leftAlignment);
        }
      }

      return distance;
    })) {
      this._setFocusAlignment(this._activeElement, false, true);

      return true;
    }

    return false;
  };

  FocusZone.prototype._moveFocusLeft = function () {
    var _this = this;

    var shouldWrap = this._shouldWrapFocus(this._activeElement, NO_HORIZONTAL_WRAP);

    if (this._moveFocus(getRTL$1(), function (activeRect, targetRect) {
      var distance = -1;
      var topBottomComparison;

      if (getRTL$1()) {
        // When in RTL, this comparison should be the same as the one in _moveFocusRight for LTR.
        // Going left at a leftmost rectangle will go down a line instead of up a line like in LTR.
        // This is important, because we want to be comparing the top of the target rect
        // with the bottom of the active rect.
        topBottomComparison = parseFloat(targetRect.top.toFixed(3)) < parseFloat(activeRect.bottom.toFixed(3));
      } else {
        topBottomComparison = parseFloat(targetRect.bottom.toFixed(3)) > parseFloat(activeRect.top.toFixed(3));
      }

      if (topBottomComparison && targetRect.right <= activeRect.right && _this.props.direction !== FocusZoneDirection.vertical) {
        distance = activeRect.right - targetRect.right;
      } else if (!shouldWrap) {
        distance = LARGE_NEGATIVE_DISTANCE_FROM_CENTER;
      }

      return distance;
    }, undefined
    /*ev*/
    , shouldWrap)) {
      this._setFocusAlignment(this._activeElement, true, false);

      return true;
    }

    return false;
  };

  FocusZone.prototype._moveFocusRight = function () {
    var _this = this;

    var shouldWrap = this._shouldWrapFocus(this._activeElement, NO_HORIZONTAL_WRAP);

    if (this._moveFocus(!getRTL$1(), function (activeRect, targetRect) {
      var distance = -1;
      var topBottomComparison;

      if (getRTL$1()) {
        // When in RTL, this comparison should be the same as the one in _moveFocusLeft for LTR.
        // Going right at a rightmost rectangle will go up a line instead of down a line like in LTR.
        // This is important, because we want to be comparing the bottom of the target rect
        // with the top of the active rect.
        topBottomComparison = parseFloat(targetRect.bottom.toFixed(3)) > parseFloat(activeRect.top.toFixed(3));
      } else {
        topBottomComparison = parseFloat(targetRect.top.toFixed(3)) < parseFloat(activeRect.bottom.toFixed(3));
      }

      if (topBottomComparison && targetRect.left >= activeRect.left && _this.props.direction !== FocusZoneDirection.vertical) {
        distance = targetRect.left - activeRect.left;
      } else if (!shouldWrap) {
        distance = LARGE_NEGATIVE_DISTANCE_FROM_CENTER;
      }

      return distance;
    }, undefined
    /*ev*/
    , shouldWrap)) {
      this._setFocusAlignment(this._activeElement, true, false);

      return true;
    }

    return false;
  };

  FocusZone.prototype._moveFocusPaging = function (isForward, useDefaultWrap) {
    if (useDefaultWrap === void 0) {
      useDefaultWrap = true;
    }

    var element = this._activeElement;

    if (!element || !this._root.current) {
      return false;
    }

    if (this._isElementInput(element)) {
      if (!this._shouldInputLoseFocus(element, isForward)) {
        return false;
      }
    }

    var scrollableParent = findScrollableParent(element);

    if (!scrollableParent) {
      return false;
    }

    var candidateDistance = -1;
    var candidateElement = undefined;
    var targetTop = -1;
    var targetBottom = -1;
    var pagesize = scrollableParent.clientHeight;
    var activeRect = element.getBoundingClientRect();

    do {
      element = isForward ? getNextElement(this._root.current, element) : getPreviousElement(this._root.current, element);

      if (element) {
        var targetRect = element.getBoundingClientRect();
        var targetRectTop = Math.floor(targetRect.top);
        var activeRectBottom = Math.floor(activeRect.bottom);
        var targetRectBottom = Math.floor(targetRect.bottom);
        var activeRectTop = Math.floor(activeRect.top);

        var elementDistance = this._getHorizontalDistanceFromCenter(isForward, activeRect, targetRect);

        var isElementPassedPageSizeOnPagingDown = isForward && targetRectTop > activeRectBottom + pagesize;
        var isElementPassedPageSizeOnPagingUp = !isForward && targetRectBottom < activeRectTop - pagesize;

        if (isElementPassedPageSizeOnPagingDown || isElementPassedPageSizeOnPagingUp) {
          break;
        }

        if (elementDistance > -1) {
          // for paging down
          if (isForward && targetRectTop > targetTop) {
            targetTop = targetRectTop;
            candidateDistance = elementDistance;
            candidateElement = element;
          } else if (!isForward && targetRectBottom < targetBottom) {
            // for paging up
            targetBottom = targetRectBottom;
            candidateDistance = elementDistance;
            candidateElement = element;
          } else if (candidateDistance === -1 || elementDistance <= candidateDistance) {
            candidateDistance = elementDistance;
            candidateElement = element;
          }
        }
      }
    } while (element);

    var changedFocus = false; // Focus the closest candidate

    if (candidateElement && candidateElement !== this._activeElement) {
      changedFocus = true;
      this.focusElement(candidateElement);

      this._setFocusAlignment(candidateElement, false, true);
    } else if (this.props.isCircularNavigation && useDefaultWrap) {
      if (isForward) {
        return this.focusElement(getNextElement(this._root.current, this._root.current.firstElementChild, true));
      }

      return this.focusElement(getPreviousElement(this._root.current, this._root.current.lastElementChild, true, true, true));
    }

    return changedFocus;
  };

  FocusZone.prototype._setFocusAlignment = function (element, isHorizontal, isVertical) {
    if (this.props.direction === FocusZoneDirection.bidirectional && (!this._focusAlignment || isHorizontal || isVertical)) {
      var rect = element.getBoundingClientRect();
      var left = rect.left + rect.width / 2;
      var top_1 = rect.top + rect.height / 2;

      if (!this._focusAlignment) {
        this._focusAlignment = {
          left: left,
          top: top_1
        };
      }

      if (isHorizontal) {
        this._focusAlignment.left = left;
      }

      if (isVertical) {
        this._focusAlignment.top = top_1;
      }
    }
  };

  FocusZone.prototype._isImmediateDescendantOfZone = function (element) {
    return this._getOwnerZone(element) === this._root.current;
  };

  FocusZone.prototype._getOwnerZone = function (element) {
    var parentElement = getParent(element, ALLOW_VIRTUAL_ELEMENTS);

    while (parentElement && parentElement !== this._root.current && parentElement !== this._getDocument().body) {
      if (isElementFocusZone(parentElement)) {
        return parentElement;
      }

      parentElement = getParent(parentElement, ALLOW_VIRTUAL_ELEMENTS);
    }

    return parentElement;
  };

  FocusZone.prototype._updateTabIndexes = function (element) {
    if (!element && this._root.current) {
      this._defaultFocusElement = null;
      element = this._root.current;

      if (this._activeElement && !elementContains(element, this._activeElement)) {
        this._activeElement = null;
      }
    } // If active element changes state to disabled, set it to null.
    // Otherwise, we lose keyboard accessibility to other elements in focus zone.


    if (this._activeElement && !isElementTabbable(this._activeElement)) {
      this._activeElement = null;
    }

    var childNodes = element && element.children;

    for (var childIndex = 0; childNodes && childIndex < childNodes.length; childIndex++) {
      var child = childNodes[childIndex];

      if (!isElementFocusZone(child)) {
        // If the item is explicitly set to not be focusable then TABINDEX needs to be set to -1.
        if (child.getAttribute && child.getAttribute(IS_FOCUSABLE_ATTRIBUTE$1) === 'false') {
          child.setAttribute(TABINDEX, '-1');
        }

        if (isElementTabbable(child)) {
          if (this.props.disabled) {
            child.setAttribute(TABINDEX, '-1');
          } else if (!this._isInnerZone && (!this._activeElement && !this._defaultFocusElement || this._activeElement === child)) {
            this._defaultFocusElement = child;

            if (child.getAttribute(TABINDEX) !== '0') {
              child.setAttribute(TABINDEX, '0');
            }
          } else if (child.getAttribute(TABINDEX) !== '-1') {
            child.setAttribute(TABINDEX, '-1');
          }
        } else if (child.tagName === 'svg' && child.getAttribute('focusable') !== 'false') {
          // Disgusting IE hack. Sad face.
          child.setAttribute('focusable', 'false');
        }
      } else if (child.getAttribute(IS_FOCUSABLE_ATTRIBUTE$1) === 'true') {
        if (!this._isInnerZone && (!this._activeElement && !this._defaultFocusElement || this._activeElement === child)) {
          this._defaultFocusElement = child;

          if (child.getAttribute(TABINDEX) !== '0') {
            child.setAttribute(TABINDEX, '0');
          }
        } else if (child.getAttribute(TABINDEX) !== '-1') {
          child.setAttribute(TABINDEX, '-1');
        }
      }

      this._updateTabIndexes(child);
    }
  };

  FocusZone.prototype._isContentEditableElement = function (element) {
    return element && element.getAttribute('contenteditable') === 'true';
  };

  FocusZone.prototype._isElementInput = function (element) {
    if (element && element.tagName && (element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'textarea')) {
      return true;
    }

    return false;
  };

  FocusZone.prototype._shouldInputLoseFocus = function (element, isForward) {
    // If a tab was used, we want to focus on the next element.
    if (!this._processingTabKey && element && element.type && ALLOWED_INPUT_TYPES.indexOf(element.type.toLowerCase()) > -1) {
      var selectionStart = element.selectionStart;
      var selectionEnd = element.selectionEnd;
      var isRangeSelected = selectionStart !== selectionEnd;
      var inputValue = element.value;
      var isReadonly = element.readOnly; // We shouldn't lose focus in the following cases:
      // 1. There is range selected.
      // 2. When selection start is larger than 0 and it is backward and not readOnly.
      // 3. when selection start is not the end of length, it is forward and not readOnly.
      // 4. We press any of the arrow keys when our handleTabKey isn't none or undefined (only losing focus if we hit
      // tab) and if shouldInputLoseFocusOnArrowKey is defined, if scenario prefers to not loose the focus which is
      // determined by calling the callback shouldInputLoseFocusOnArrowKey

      if (isRangeSelected || selectionStart > 0 && !isForward && !isReadonly || selectionStart !== inputValue.length && isForward && !isReadonly || !!this.props.handleTabKey && !(this.props.shouldInputLoseFocusOnArrowKey && this.props.shouldInputLoseFocusOnArrowKey(element))) {
        return false;
      }
    }

    return true;
  };

  FocusZone.prototype._shouldWrapFocus = function (element, noWrapDataAttribute) {
    return !!this.props.checkForNoWrap ? shouldWrapFocus(element, noWrapDataAttribute) : true;
  };
  /**
   * Returns true if the element is a descendant of the FocusZone through a React portal.
   */


  FocusZone.prototype._portalContainsElement = function (element) {
    return element && !!this._root.current && portalContainsElement(element, this._root.current);
  };

  FocusZone.prototype._getDocument = function () {
    return getDocument(this._root.current);
  };

  FocusZone.defaultProps = {
    isCircularNavigation: false,
    direction: FocusZoneDirection.bidirectional,
    preventDefaultWhenHandled: true
  };
  return FocusZone;
}(React.Component);

/**
 * Determines the effective checked state of a menu item.
 *
 * @param item {IContextualMenuItem} to get the check state of.
 * @returns {true} if the item is checked.
 * @returns {false} if the item is unchecked.
 * @returns {null} if the item is not checkable.
 */
function getIsChecked(item) {
  if (item.canCheck) {
    return !!(item.isChecked || item.checked);
  }

  if (typeof item.isChecked === 'boolean') {
    return item.isChecked;
  }

  if (typeof item.checked === 'boolean') {
    return item.checked;
  } // Item is not checkable.


  return null;
}
function hasSubmenu(item) {
  return !!(item.subMenuProps || item.items);
}
function isItemDisabled(item) {
  return !!(item.isDisabled || item.disabled);
}
function getMenuItemAriaRole(item) {
  var isChecked = getIsChecked(item);
  var canCheck = isChecked !== null;
  return canCheck ? 'menuitemcheckbox' : 'menuitem';
}

var BaseDecorator =
/** @class */
function (_super) {
  __extends(BaseDecorator, _super);

  function BaseDecorator(props) {
    var _this = _super.call(this, props) || this;

    _this._updateComposedComponentRef = _this._updateComposedComponentRef.bind(_this);
    return _this;
  }
  /**
   * Updates the ref to the component composed by the decorator, which will also take care of hoisting
   * (and unhoisting as appropriate) methods from said component.
   *
   * Pass this method as the argument to the 'ref' property of the composed component.
   */


  BaseDecorator.prototype._updateComposedComponentRef = function (composedComponentInstance) {
    this._composedComponentInstance = composedComponentInstance;

    if (composedComponentInstance) {
      this._hoisted = hoistMethods(this, composedComponentInstance);
    } else if (this._hoisted) {
      unhoistMethods(this, this._hoisted);
    }
  };

  return BaseDecorator;
}(React.Component);

var ResponsiveMode;

(function (ResponsiveMode) {
  ResponsiveMode[ResponsiveMode["small"] = 0] = "small";
  ResponsiveMode[ResponsiveMode["medium"] = 1] = "medium";
  ResponsiveMode[ResponsiveMode["large"] = 2] = "large";
  ResponsiveMode[ResponsiveMode["xLarge"] = 3] = "xLarge";
  ResponsiveMode[ResponsiveMode["xxLarge"] = 4] = "xxLarge";
  ResponsiveMode[ResponsiveMode["xxxLarge"] = 5] = "xxxLarge";
  ResponsiveMode[ResponsiveMode["unknown"] = 999] = "unknown";
})(ResponsiveMode || (ResponsiveMode = {}));

var RESPONSIVE_MAX_CONSTRAINT = [479, 639, 1023, 1365, 1919, 99999999];
/**
 * Tracking the last mode we successfully rendered, which allows us to
 * paint initial renders with the correct size.
 */


var _lastMode;
function withResponsiveMode(ComposedComponent) {
  var resultClass =
  /** @class */
  function (_super) {
    __extends(WithResponsiveMode, _super);

    function WithResponsiveMode(props) {
      var _this = _super.call(this, props) || this;

      _this._onResize = function () {
        var element = ReactDOM.findDOMNode(_this);
        var currentWindow = element && getWindow(element) || window;
        var responsiveMode = getResponsiveMode(currentWindow);

        if (responsiveMode !== _this.state.responsiveMode) {
          _this.setState({
            responsiveMode: responsiveMode
          });
        }
      };

      _this._events = new EventGroup(_this);
      _this._updateComposedComponentRef = _this._updateComposedComponentRef.bind(_this);
      _this.state = {
        responsiveMode:  _lastMode || ResponsiveMode.large
      };
      return _this;
    }

    WithResponsiveMode.prototype.componentDidMount = function () {
      this._events.on(window, 'resize', this._onResize);

      this._onResize();
    };

    WithResponsiveMode.prototype.componentWillUnmount = function () {
      this._events.dispose();
    };

    WithResponsiveMode.prototype.render = function () {
      var responsiveMode = this.state.responsiveMode;
      return responsiveMode === ResponsiveMode.unknown ? null : React.createElement(ComposedComponent, __assign({
        ref: this._updateComposedComponentRef,
        responsiveMode: responsiveMode
      }, this.props));
    };

    return WithResponsiveMode;
  }(BaseDecorator);

  return hoistStatics(ComposedComponent, resultClass);
}

function getResponsiveMode(currentWindow) {
  var responsiveMode = ResponsiveMode.small;

  if (currentWindow) {
    try {
      while (currentWindow.innerWidth > RESPONSIVE_MAX_CONSTRAINT[responsiveMode]) {
        responsiveMode++;
      }
    } catch (e) {
      // Return a best effort result in cases where we're in the browser but it throws on getting innerWidth.
      responsiveMode =  _lastMode || ResponsiveMode.large;
    } // Tracking last mode just gives us a better default in future renders,
    // which avoids starting with the wrong value if we've measured once.


    _lastMode = responsiveMode;
  } else {
    {
      throw new Error('Content was rendered in a server environment without providing a default responsive mode. ' + 'Call setResponsiveMode to define what the responsive mode is.');
    }
  }

  return responsiveMode;
}

var RectangleEdge;

(function (RectangleEdge) {
  RectangleEdge[RectangleEdge["top"] = 1] = "top";
  RectangleEdge[RectangleEdge["bottom"] = -1] = "bottom";
  RectangleEdge[RectangleEdge["left"] = 2] = "left";
  RectangleEdge[RectangleEdge["right"] = -2] = "right";
})(RectangleEdge || (RectangleEdge = {}));

var Position;

(function (Position) {
  Position[Position["top"] = 0] = "top";
  Position[Position["bottom"] = 1] = "bottom";
  Position[Position["start"] = 2] = "start";
  Position[Position["end"] = 3] = "end";
})(Position || (Position = {}));

var _a$3;

var Rectangle$1 =
/** @class */
function (_super) {
  __extends(Rectangle, _super);

  function Rectangle() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return Rectangle;
}(Rectangle);

function _createPositionData(targetEdge, alignmentEdge, isAuto) {
  return {
    targetEdge: targetEdge,
    alignmentEdge: alignmentEdge,
    isAuto: isAuto
  };
} // Currently the beakPercent is set to 50 for all positions meaning that it should tend to the center of the target


var DirectionalDictionary = (_a$3 = {}, _a$3[DirectionalHint.topLeftEdge] = _createPositionData(RectangleEdge.top, RectangleEdge.left), _a$3[DirectionalHint.topCenter] = _createPositionData(RectangleEdge.top), _a$3[DirectionalHint.topRightEdge] = _createPositionData(RectangleEdge.top, RectangleEdge.right), _a$3[DirectionalHint.topAutoEdge] = _createPositionData(RectangleEdge.top, undefined, true), _a$3[DirectionalHint.bottomLeftEdge] = _createPositionData(RectangleEdge.bottom, RectangleEdge.left), _a$3[DirectionalHint.bottomCenter] = _createPositionData(RectangleEdge.bottom), _a$3[DirectionalHint.bottomRightEdge] = _createPositionData(RectangleEdge.bottom, RectangleEdge.right), _a$3[DirectionalHint.bottomAutoEdge] = _createPositionData(RectangleEdge.bottom, undefined, true), _a$3[DirectionalHint.leftTopEdge] = _createPositionData(RectangleEdge.left, RectangleEdge.top), _a$3[DirectionalHint.leftCenter] = _createPositionData(RectangleEdge.left), _a$3[DirectionalHint.leftBottomEdge] = _createPositionData(RectangleEdge.left, RectangleEdge.bottom), _a$3[DirectionalHint.rightTopEdge] = _createPositionData(RectangleEdge.right, RectangleEdge.top), _a$3[DirectionalHint.rightCenter] = _createPositionData(RectangleEdge.right), _a$3[DirectionalHint.rightBottomEdge] = _createPositionData(RectangleEdge.right, RectangleEdge.bottom), _a$3);

function _isRectangleWithinBounds(rect, boundingRect) {
  if (rect.top < boundingRect.top) {
    return false;
  }

  if (rect.bottom > boundingRect.bottom) {
    return false;
  }

  if (rect.left < boundingRect.left) {
    return false;
  }

  if (rect.right > boundingRect.right) {
    return false;
  }

  return true;
}
/**
 * Gets all of the edges of a rectangle that are outside of the given bounds.
 * If there are no out of bounds edges it returns an empty array.
 */


function _getOutOfBoundsEdges(rect, boundingRect) {
  var outOfBounds = new Array();

  if (rect.top < boundingRect.top) {
    outOfBounds.push(RectangleEdge.top);
  }

  if (rect.bottom > boundingRect.bottom) {
    outOfBounds.push(RectangleEdge.bottom);
  }

  if (rect.left < boundingRect.left) {
    outOfBounds.push(RectangleEdge.left);
  }

  if (rect.right > boundingRect.right) {
    outOfBounds.push(RectangleEdge.right);
  }

  return outOfBounds;
}

function _getEdgeValue(rect, edge) {
  return rect[RectangleEdge[edge]];
}

function _setEdgeValue(rect, edge, value) {
  rect[RectangleEdge[edge]] = value;
  return rect;
}
/**
 * Returns the middle value of an edge. Only returns 1 value rather than xy coordinates as
 * the itself already contains the other coordinate.
 * For instance, a bottom edge's current value is it's y coordinate, so the number returned is the x.
 */


function _getCenterValue(rect, edge) {
  var edges = _getFlankingEdges(edge);

  return (_getEdgeValue(rect, edges.positiveEdge) + _getEdgeValue(rect, edges.negativeEdge)) / 2;
}
/**
 * Flips the value depending on the edge.
 * If the edge is a "positive" edge, Top or Left, then the value should stay as it is.
 * If the edge is a "negative" edge, Bottom or Right, then the value should be flipped.
 * This is to account for the fact that the coordinates are effectively reveserved in certain cases for the
 * "negative" edges.
 *
 * For example, when testing to see if a bottom edge 1 is within the bounds of another bottom edge 2:
 * If edge 1 is greater than edge 2 then it is out of bounds. This is reversed for top edge 1 and top edge 2.
 * If top edge 1 is less than edge 2 then it is out of bounds.
 */


function _getRelativeEdgeValue(edge, value) {
  if (edge > 0) {
    return value;
  } else {
    return value * -1;
  }
}

function _getRelativeRectEdgeValue(edge, rect) {
  return _getRelativeEdgeValue(edge, _getEdgeValue(rect, edge));
}

function _getRelativeEdgeDifference(rect, hostRect, edge) {
  var edgeDifference = _getEdgeValue(rect, edge) - _getEdgeValue(hostRect, edge);

  return _getRelativeEdgeValue(edge, edgeDifference);
}
/**
 * Moves the edge of a rectangle to the value given. It only moves the edge in a linear direction based on that edge.
 * For example, if it's a bottom edge it will only change y coordinates.
 */


function _moveEdge(rect, edge, newValue) {
  var difference = _getEdgeValue(rect, edge) - newValue;
  rect = _setEdgeValue(rect, edge, newValue);
  rect = _setEdgeValue(rect, edge * -1, _getEdgeValue(rect, edge * -1) - difference);
  return rect;
}
/**
 * Aligns the edge on the passed in rect to the target. If there is a gap then it will have that space between the two.
 */


function _alignEdges(rect, target, edge, gap) {
  if (gap === void 0) {
    gap = 0;
  }

  return _moveEdge(rect, edge, _getEdgeValue(target, edge) + _getRelativeEdgeValue(edge, gap));
}
/**
 * Aligns the targetEdge on the passed in target to the rects corresponding opposite edge.
 * For instance if targetEdge is bottom, then the rects top will be moved to match it.
 */


function _alignOppositeEdges(rect, target, targetEdge, gap) {
  if (gap === void 0) {
    gap = 0;
  }

  var oppositeEdge = targetEdge * -1;

  var adjustedGap = _getRelativeEdgeValue(oppositeEdge, gap);

  return _moveEdge(rect, targetEdge * -1, _getEdgeValue(target, targetEdge) + adjustedGap);
}
/**
 * Tests to see if the given edge is within the bounds of the given rectangle.
 */


function _isEdgeInBounds(rect, bounds, edge) {
  var adjustedRectValue = _getRelativeRectEdgeValue(edge, rect);

  return adjustedRectValue > _getRelativeRectEdgeValue(edge, bounds);
}
/**
 * Attempts to move the rectangle through various sides of the target to find a place to fit.
 * If no fit is found, the original position should be returned.
 */


function _flipToFit(rect, target, bounding, positionData, gap) {
  if (gap === void 0) {
    gap = 0;
  }

  var directions = [RectangleEdge.left, RectangleEdge.right, RectangleEdge.bottom, RectangleEdge.top]; // In RTL page, RectangleEdge.right has a higher priority than RectangleEdge.left, so the order should be updated.

  if (getRTL$1()) {
    directions[0] *= -1;
    directions[1] *= -1;
  }

  var currentEstimate = rect;
  var currentEdge = positionData.targetEdge;
  var currentAlignment = positionData.alignmentEdge; // Keep switching sides until one is found with enough space.
  // If all sides don't fit then return the unmodified element.

  for (var i = 0; i < 4; i++) {
    if (!_isEdgeInBounds(currentEstimate, bounding, currentEdge)) {
      directions.splice(directions.indexOf(currentEdge), 1);

      if (directions.length > 0) {
        if (directions.indexOf(currentEdge * -1) > -1) {
          currentEdge = currentEdge * -1;
        } else {
          currentAlignment = currentEdge;
          currentEdge = directions.slice(-1)[0];
        }

        currentEstimate = _estimatePosition(rect, target, {
          targetEdge: currentEdge,
          alignmentEdge: currentAlignment
        }, gap);
      }
    } else {
      return {
        elementRectangle: currentEstimate,
        targetEdge: currentEdge,
        alignmentEdge: currentAlignment
      };
    }
  }

  return {
    elementRectangle: rect,
    targetEdge: positionData.targetEdge,
    alignmentEdge: currentAlignment
  };
}
/**
 * Flips only the alignment edge of an element rectangle. This is used instead of nudging the alignment edges
 * into position, when alignTargetEdge is specified.
 */


function _flipAlignmentEdge(elementEstimate, target, gap, coverTarget) {
  var alignmentEdge = elementEstimate.alignmentEdge,
      targetEdge = elementEstimate.targetEdge,
      elementRectangle = elementEstimate.elementRectangle;
  var oppositeEdge = alignmentEdge * -1;

  var newEstimate = _estimatePosition(elementRectangle, target, {
    targetEdge: targetEdge,
    alignmentEdge: oppositeEdge
  }, gap, coverTarget);

  return {
    elementRectangle: newEstimate,
    targetEdge: targetEdge,
    alignmentEdge: oppositeEdge
  };
}
/**
 * Adjusts a element rectangle to fit within the bounds given. If directionalHintFixed or covertarget is passed in
 * then the element will not flip sides on the target. They will, however, be nudged to fit within the bounds given.
 */


function _adjustFitWithinBounds(element, target, bounding, positionData, gap, directionalHintFixed, coverTarget) {
  if (gap === void 0) {
    gap = 0;
  }

  var alignmentEdge = positionData.alignmentEdge,
      alignTargetEdge = positionData.alignTargetEdge;
  var elementEstimate = {
    elementRectangle: element,
    targetEdge: positionData.targetEdge,
    alignmentEdge: alignmentEdge
  };

  if (!directionalHintFixed && !coverTarget) {
    elementEstimate = _flipToFit(element, target, bounding, positionData, gap);
  }

  var outOfBounds = _getOutOfBoundsEdges(element, bounding);

  if (alignTargetEdge) {
    // The edge opposite to the alignment edge might be out of bounds.
    // Flip alignment to see if we can get it within bounds.
    if (elementEstimate.alignmentEdge && outOfBounds.indexOf(elementEstimate.alignmentEdge * -1) > -1) {
      var flippedElementEstimate = _flipAlignmentEdge(elementEstimate, target, gap, coverTarget);

      if (_isRectangleWithinBounds(flippedElementEstimate.elementRectangle, bounding)) {
        return flippedElementEstimate;
      } else {
        // If the flipped elements edges are still out of bounds, try nudging it.
        elementEstimate = _alignOutOfBoundsEdges(_getOutOfBoundsEdges(flippedElementEstimate.elementRectangle, bounding), elementEstimate, bounding);
      }
    }
  } else {
    elementEstimate = _alignOutOfBoundsEdges(outOfBounds, elementEstimate, bounding);
  }

  return elementEstimate;
}
/**
 * Iterates through a list of out of bounds edges and tries to nudge and align them.
 * @param outOfBoundsEdges - Array of edges that are out of bounds
 * @param elementEstimate - The current element positioning estimate
 * @param bounding - The current bounds
 */


function _alignOutOfBoundsEdges(outOfBoundsEdges, elementEstimate, bounding) {
  for (var _i = 0, outOfBoundsEdges_1 = outOfBoundsEdges; _i < outOfBoundsEdges_1.length; _i++) {
    var direction = outOfBoundsEdges_1[_i];
    elementEstimate.elementRectangle = _alignEdges(elementEstimate.elementRectangle, bounding, direction);
  }

  return elementEstimate;
}
/**
 * Moves the middle point on an edge to the point given.
 * Only moves in one direction. For instance if a bottom edge is passed in, then
 * the bottom edge will be moved in the x axis to match the point.
 */


function _centerEdgeToPoint(rect, edge, point) {
  var positiveEdge = _getFlankingEdges(edge).positiveEdge;

  var elementMiddle = _getCenterValue(rect, edge);

  var distanceToMiddle = elementMiddle - _getEdgeValue(rect, positiveEdge);

  return _moveEdge(rect, positiveEdge, point - distanceToMiddle);
}
/**
 * Moves the element rectangle to be appropriately positioned relative to a given target.
 * Does not flip or adjust the element.
 */


function _estimatePosition(elementToPosition, target, positionData, gap, coverTarget) {
  if (gap === void 0) {
    gap = 0;
  }

  var estimatedElementPosition;
  var alignmentEdge = positionData.alignmentEdge,
      targetEdge = positionData.targetEdge;
  var elementEdge = coverTarget ? targetEdge : targetEdge * -1;
  estimatedElementPosition = coverTarget ? _alignEdges(elementToPosition, target, targetEdge, gap) : _alignOppositeEdges(elementToPosition, target, targetEdge, gap); // if no alignment edge is provided it's supposed to be centered.

  if (!alignmentEdge) {
    var targetMiddlePoint = _getCenterValue(target, targetEdge);

    estimatedElementPosition = _centerEdgeToPoint(estimatedElementPosition, elementEdge, targetMiddlePoint);
  } else {
    estimatedElementPosition = _alignEdges(estimatedElementPosition, target, alignmentEdge);
  }

  return estimatedElementPosition;
}
/**
 * Returns the non-opposite edges of the target edge.
 * For instance if bottom is passed in then left and right will be returned.
 */


function _getFlankingEdges(edge) {
  if (edge === RectangleEdge.top || edge === RectangleEdge.bottom) {
    return {
      positiveEdge: RectangleEdge.left,
      negativeEdge: RectangleEdge.right
    };
  } else {
    return {
      positiveEdge: RectangleEdge.top,
      negativeEdge: RectangleEdge.bottom
    };
  }
}
/**
 * Retrieve the final value for the return edge of elementRectangle. If the elementRectangle is closer to one side
 * of the bounds versus the other, the return edge is flipped to grow inward.
 */


function _finalizeReturnEdge(elementRectangle, returnEdge, bounds) {
  if (bounds && Math.abs(_getRelativeEdgeDifference(elementRectangle, bounds, returnEdge)) > Math.abs(_getRelativeEdgeDifference(elementRectangle, bounds, returnEdge * -1))) {
    return returnEdge * -1;
  }

  return returnEdge;
}
/**
 * Finalizes the element positon based on the hostElement. Only returns the
 * rectangle values to position such that they are anchored to the target.
 * This helps prevent resizing from looking very strange.
 * For instance, if the target edge is top and aligned with the left side then
 * the bottom and left values are returned so as the callou shrinks it shrinks towards that corner.
 */


function _finalizeElementPosition(elementRectangle, hostElement, targetEdge, bounds, alignmentEdge, coverTarget, doNotFinalizeReturnEdge) {
  var returnValue = {};

  var hostRect = _getRectangleFromElement(hostElement);

  var elementEdge = coverTarget ? targetEdge : targetEdge * -1;
  var elementEdgeString = RectangleEdge[elementEdge];
  var returnEdge = alignmentEdge ? alignmentEdge : _getFlankingEdges(targetEdge).positiveEdge;

  if (!doNotFinalizeReturnEdge) {
    returnEdge = _finalizeReturnEdge(elementRectangle, returnEdge, bounds);
  }

  returnValue[elementEdgeString] = _getRelativeEdgeDifference(elementRectangle, hostRect, elementEdge);
  returnValue[RectangleEdge[returnEdge]] = _getRelativeEdgeDifference(elementRectangle, hostRect, returnEdge);
  return returnValue;
} // Since the beak is rotated 45 degrees the actual height/width is the length of the diagonal.
// We still want to position the beak based on it's midpoint which does not change. It will
// be at (beakwidth / 2, beakwidth / 2)


function _calculateActualBeakWidthInPixels(beakWidth) {
  return Math.sqrt(beakWidth * beakWidth * 2);
}
/**
 * Returns the appropriate IPositionData based on the props altered for RTL.
 * If directionalHintForRTL is passed in that is used if the page is RTL.
 * If directionalHint is specified, no directionalHintForRTL is available, and the page is RTL, the hint will be
 * flipped (e.g. bottomLeftEdge would become bottomRightEdge).
 *
 * If there is no directionalHint passed in, bottomAutoEdge is chosen automatically.
 */


function _getPositionData(directionalHint, directionalHintForRTL, previousPositions) {
  if (directionalHint === void 0) {
    directionalHint = DirectionalHint.bottomAutoEdge;
  }

  if (previousPositions) {
    return {
      alignmentEdge: previousPositions.alignmentEdge,
      isAuto: previousPositions.isAuto,
      targetEdge: previousPositions.targetEdge
    };
  }

  var positionInformation = __assign({}, DirectionalDictionary[directionalHint]);

  if (getRTL$1()) {
    // If alignment edge exists and that alignment edge is -2 or 2, right or left, then flip it.
    if (positionInformation.alignmentEdge && positionInformation.alignmentEdge % 2 === 0) {
      positionInformation.alignmentEdge = positionInformation.alignmentEdge * -1;
    }

    return directionalHintForRTL !== undefined ? DirectionalDictionary[directionalHintForRTL] : positionInformation;
  }

  return positionInformation;
}
/**
 * Get's the alignment data for the given information. This only really matters if the positioning is Auto.
 * If it is auto then the alignmentEdge should be chosen based on the target edge's position relative to
 * the center of the page.
 */


function _getAlignmentData(positionData, target, boundingRect, coverTarget, alignTargetEdge) {
  if (positionData.isAuto) {
    positionData.alignmentEdge = getClosestEdge(positionData.targetEdge, target, boundingRect);
  }

  positionData.alignTargetEdge = alignTargetEdge;
  return positionData;
}

function getClosestEdge(targetEdge, target, boundingRect) {
  var targetCenter = _getCenterValue(target, targetEdge);

  var boundingCenter = _getCenterValue(boundingRect, targetEdge);

  var _a = _getFlankingEdges(targetEdge),
      positiveEdge = _a.positiveEdge,
      negativeEdge = _a.negativeEdge;

  if (targetCenter <= boundingCenter) {
    return positiveEdge;
  } else {
    return negativeEdge;
  }
}

function _positionElementWithinBounds(elementToPosition, target, bounding, positionData, gap, directionalHintFixed, coverTarget) {
  var estimatedElementPosition = _estimatePosition(elementToPosition, target, positionData, gap, coverTarget);

  if (_isRectangleWithinBounds(estimatedElementPosition, bounding)) {
    return {
      elementRectangle: estimatedElementPosition,
      targetEdge: positionData.targetEdge,
      alignmentEdge: positionData.alignmentEdge
    };
  } else {
    return _adjustFitWithinBounds(elementToPosition, target, bounding, positionData, gap, directionalHintFixed, coverTarget);
  }
}

function _finalizeBeakPosition(elementPosition, positionedBeak, bounds) {
  var targetEdge = elementPosition.targetEdge * -1; // The "host" element that we will use to help position the beak.

  var actualElement = new Rectangle$1(0, elementPosition.elementRectangle.width, 0, elementPosition.elementRectangle.height);
  var returnValue = {};

  var returnEdge = _finalizeReturnEdge(elementPosition.elementRectangle, elementPosition.alignmentEdge ? elementPosition.alignmentEdge : _getFlankingEdges(targetEdge).positiveEdge, bounds);

  returnValue[RectangleEdge[targetEdge]] = _getEdgeValue(positionedBeak, targetEdge);
  returnValue[RectangleEdge[returnEdge]] = _getRelativeEdgeDifference(positionedBeak, actualElement, returnEdge);
  return {
    elementPosition: __assign({}, returnValue),
    closestEdge: getClosestEdge(elementPosition.targetEdge, positionedBeak, actualElement),
    targetEdge: targetEdge
  };
}

function _positionBeak(beakWidth, elementPosition) {
  var target = elementPosition.targetRectangle;
  /**
   * Note about beak positioning: The actual beak width only matters for getting the gap between the callout and
   * target, it does not impact the beak placement within the callout. For example example, if the beakWidth is 8,
   * then the actual beakWidth is sqrroot(8^2 + 8^2) = 11.31x11.31. So the callout will need to be an extra 3 pixels
   * away from its target. While the beak is being positioned in the callout it still acts as though it were 8x8.
   */

  var _a = _getFlankingEdges(elementPosition.targetEdge),
      positiveEdge = _a.positiveEdge,
      negativeEdge = _a.negativeEdge;

  var beakTargetPoint = _getCenterValue(target, elementPosition.targetEdge);

  var elementBounds = new Rectangle$1(beakWidth / 2, elementPosition.elementRectangle.width - beakWidth / 2, beakWidth / 2, elementPosition.elementRectangle.height - beakWidth / 2);
  var beakPosition = new Rectangle$1(0, beakWidth, 0, beakWidth);
  beakPosition = _moveEdge(beakPosition, elementPosition.targetEdge * -1, -beakWidth / 2);
  beakPosition = _centerEdgeToPoint(beakPosition, elementPosition.targetEdge * -1, beakTargetPoint - _getRelativeRectEdgeValue(positiveEdge, elementPosition.elementRectangle));

  if (!_isEdgeInBounds(beakPosition, elementBounds, positiveEdge)) {
    beakPosition = _alignEdges(beakPosition, elementBounds, positiveEdge);
  } else if (!_isEdgeInBounds(beakPosition, elementBounds, negativeEdge)) {
    beakPosition = _alignEdges(beakPosition, elementBounds, negativeEdge);
  }

  return beakPosition;
}

function _getRectangleFromElement(element) {
  var clientRect = element.getBoundingClientRect();
  return new Rectangle$1(clientRect.left, clientRect.right, clientRect.top, clientRect.bottom);
}

function _getRectangleFromIRect(rect) {
  return new Rectangle$1(rect.left, rect.right, rect.top, rect.bottom);
}

function _getTargetRect(bounds, target) {
  var targetRectangle;

  if (target) {
    if (!!target.preventDefault) {
      var ev = target;
      targetRectangle = new Rectangle$1(ev.clientX, ev.clientX, ev.clientY, ev.clientY);
    } else if (!!target.getBoundingClientRect) {
      targetRectangle = _getRectangleFromElement(target); // HTMLImgElements can have x and y values. The check for it being a point must go last.
    } else {
      var point = target; // tslint:disable-next-line:deprecation

      var left = point.left || point.x; // tslint:disable-next-line:deprecation

      var top_1 = point.top || point.y;
      targetRectangle = new Rectangle$1(left, left, top_1, top_1);
    }

    if (!_isRectangleWithinBounds(targetRectangle, bounds)) {
      var outOfBounds = _getOutOfBoundsEdges(targetRectangle, bounds);

      for (var _i = 0, outOfBounds_1 = outOfBounds; _i < outOfBounds_1.length; _i++) {
        var direction = outOfBounds_1[_i];
        targetRectangle[RectangleEdge[direction]] = bounds[RectangleEdge[direction]];
      }
    }
  } else {
    targetRectangle = new Rectangle$1(0, 0, 0, 0);
  }

  return targetRectangle;
}
/**
 * If max height is less than zero it returns the bounds height instead.
 */


function _getMaxHeightFromTargetRectangle(targetRectangle, targetEdge, gapSpace, bounds, coverTarget) {
  var maxHeight = 0;
  var directionalHint = DirectionalDictionary[targetEdge]; // If cover target is set, then the max height should be calculated using the opposite of the target edge since
  // that's the direction that the callout will expand in.
  // For instance, if the directionalhint is bottomLeftEdge then the callout will position so it's bottom edge
  // is aligned with the bottom of the target and expand up towards the top of the screen and the calculated max height
  // is (bottom of target) - (top of screen) - gapSpace.

  var target = coverTarget ? directionalHint.targetEdge * -1 : directionalHint.targetEdge;

  if (target === RectangleEdge.top) {
    maxHeight = _getEdgeValue(targetRectangle, directionalHint.targetEdge) - bounds.top - gapSpace;
  } else if (target === RectangleEdge.bottom) {
    maxHeight = bounds.bottom - _getEdgeValue(targetRectangle, directionalHint.targetEdge) - gapSpace;
  } else {
    maxHeight = bounds.bottom - targetRectangle.top - gapSpace;
  }

  return maxHeight > 0 ? maxHeight : bounds.height;
}

function _positionElementRelative(props, elementToPosition, boundingRect, previousPositions) {
  var gap = props.gapSpace ? props.gapSpace : 0;

  var targetRect = _getTargetRect(boundingRect, props.target);

  var positionData = _getAlignmentData(_getPositionData(props.directionalHint, props.directionalHintForRTL, previousPositions), targetRect, boundingRect, props.coverTarget, props.alignTargetEdge);

  var positionedElement = _positionElementWithinBounds(_getRectangleFromElement(elementToPosition), targetRect, boundingRect, positionData, gap, props.directionalHintFixed, props.coverTarget);

  return __assign(__assign({}, positionedElement), {
    targetRectangle: targetRect
  });
}

function _finalizePositionData(positionedElement, hostElement, bounds, coverTarget, doNotFinalizeReturnEdge) {
  var finalizedElement = _finalizeElementPosition(positionedElement.elementRectangle, hostElement, positionedElement.targetEdge, bounds, positionedElement.alignmentEdge, coverTarget, doNotFinalizeReturnEdge);

  return {
    elementPosition: finalizedElement,
    targetEdge: positionedElement.targetEdge,
    alignmentEdge: positionedElement.alignmentEdge
  };
}

function _positionCallout(props, hostElement, callout, previousPositions, doNotFinalizeReturnEdge) {
  var beakWidth = props.isBeakVisible ? props.beakWidth || 0 : 0;
  var gap = _calculateActualBeakWidthInPixels(beakWidth) / 2 + (props.gapSpace ? props.gapSpace : 0);
  var positionProps = props;
  positionProps.gapSpace = gap;
  var boundingRect = props.bounds ? _getRectangleFromIRect(props.bounds) : new Rectangle$1(0, window.innerWidth - getScrollbarWidth(), 0, window.innerHeight);

  var positionedElement = _positionElementRelative(positionProps, callout, boundingRect, previousPositions);

  var beakPositioned = _positionBeak(beakWidth, positionedElement);

  var finalizedBeakPosition = _finalizeBeakPosition(positionedElement, beakPositioned, boundingRect);

  return __assign(__assign({}, _finalizePositionData(positionedElement, hostElement, boundingRect, props.coverTarget, doNotFinalizeReturnEdge)), {
    beakPosition: finalizedBeakPosition
  });
}

function _positionCard(props, hostElement, callout, previousPositions) {
  return _positionCallout(props, hostElement, callout, previousPositions, true);
} // END PRIVATE FUNCTIONS
function positionCallout(props, hostElement, elementToPosition, previousPositions) {
  return _positionCallout(props, hostElement, elementToPosition, previousPositions);
}
function positionCard(props, hostElement, elementToPosition, previousPositions) {
  return _positionCard(props, hostElement, elementToPosition, previousPositions);
}
/**
 * Get's the maximum height that a rectangle can have in order to fit below or above a target.
 * If the directional hint specifies a left or right edge (i.e. leftCenter) it will limit the height to the topBorder
 * of the target given.
 * If no bounds are provided then the window is treated as the bounds.
 */

function getMaxHeight(target, targetEdge, gapSpace, bounds, coverTarget) {
  if (gapSpace === void 0) {
    gapSpace = 0;
  }

  var mouseTarget = target;
  var elementTarget = target;
  var pointTarget = target;
  var targetRect;
  var boundingRectangle = bounds ? _getRectangleFromIRect(bounds) : new Rectangle$1(0, window.innerWidth - getScrollbarWidth(), 0, window.innerHeight); // tslint:disable-next-line:deprecation

  var left = pointTarget.left || pointTarget.x; // tslint:disable-next-line:deprecation

  var top = pointTarget.top || pointTarget.y;

  if (!!mouseTarget.stopPropagation) {
    targetRect = new Rectangle$1(mouseTarget.clientX, mouseTarget.clientX, mouseTarget.clientY, mouseTarget.clientY);
  } else if (left !== undefined && top !== undefined) {
    targetRect = new Rectangle$1(left, left, top, top);
  } else {
    targetRect = _getRectangleFromElement(elementTarget);
  }

  return _getMaxHeightFromTargetRectangle(targetRect, targetEdge, gapSpace, boundingRectangle, coverTarget);
}

function _getBoundsFromTargetWindow(target, targetWindow) {
  var segments = undefined;

  if (targetWindow.getWindowSegments) {
    segments = targetWindow.getWindowSegments();
  } // Identify if we're dealing with single screen scenarios.


  if (segments === undefined || segments.length <= 1) {
    return {
      top: 0,
      left: 0,
      right: targetWindow.innerWidth,
      bottom: targetWindow.innerHeight,
      width: targetWindow.innerWidth,
      height: targetWindow.innerHeight
    };
  } // Logic for determining dual screen scenarios.


  var x = 0;
  var y = 0; // If the target is an Element get coordinates for its center.

  if (target !== null && !!target.getBoundingClientRect) {
    var clientRect = target.getBoundingClientRect();
    x = (clientRect.left + clientRect.right) / 2;
    y = (clientRect.top + clientRect.bottom) / 2;
  } // If the target is not null get x-axis and y-axis coordinates directly.
  else if (target !== null) {
      // tslint:disable-next-line:deprecation
      x = target.left || target.x; // tslint:disable-next-line:deprecation

      y = target.top || target.y;
    }

  var bounds = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: 0,
    height: 0
  }; // Define which window segment are the coordinates in and calculate bounds based on that.

  for (var _i = 0, segments_1 = segments; _i < segments_1.length; _i++) {
    var segment = segments_1[_i];

    if (x && segment.left <= x && segment.right >= x && y && segment.top <= y && segment.bottom >= y) {
      bounds = {
        top: segment.top,
        left: segment.left,
        right: segment.right,
        bottom: segment.bottom,
        width: segment.width,
        height: segment.height
      };
    }
  }

  return bounds;
}

function getBoundsFromTargetWindow(target, targetWindow) {
  return _getBoundsFromTargetWindow(target, targetWindow);
}

/**
 * This adds accessibility to Dialog and Panel controls
 */

var Popup =
/** @class */
function (_super) {
  __extends(Popup, _super);

  function Popup(props) {
    var _this = _super.call(this, props) || this;

    _this._root = React.createRef();
    _this._disposables = [];

    _this._onKeyDown = function (ev) {
      switch (ev.which) {
        case KeyCodes.escape:
          if (_this.props.onDismiss) {
            _this.props.onDismiss(ev);

            ev.preventDefault();
            ev.stopPropagation();
          }

          break;
      }
    };

    _this._onFocus = function () {
      _this._containsFocus = true;
    };

    _this._onBlur = function (ev) {
      /** The popup should update this._containsFocus when:
       * relatedTarget exists AND
       * the relatedTarget is not contained within the popup.
       * If the relatedTarget is within the popup, that means the popup still has focus
       * and focused moved from one element to another within the popup.
       * If relatedTarget is undefined or null that usually means that a
       * keyboard event occured and focus didn't change
       */
      if (_this._root.current && ev.relatedTarget && !elementContains(_this._root.current, ev.relatedTarget)) {
        _this._containsFocus = false;
      }
    };

    _this._async = new Async(_this);
    _this.state = {
      needsVerticalScrollBar: false
    };
    return _this;
  } // tslint:disable-next-line function-name


  Popup.prototype.UNSAFE_componentWillMount = function () {
    this._originalFocusedElement = getDocument().activeElement;
  };

  Popup.prototype.componentDidMount = function () {
    if (this._root.current) {
      this._disposables.push(on(this._root.current, 'focus', this._onFocus, true), on(this._root.current, 'blur', this._onBlur, true));

      var currentWindow = getWindow(this._root.current);

      if (currentWindow) {
        this._disposables.push(on(currentWindow, 'keydown', this._onKeyDown));
      }

      if (doesElementContainFocus(this._root.current)) {
        this._containsFocus = true;
      }
    }

    this._updateScrollBarAsync();
  };

  Popup.prototype.componentDidUpdate = function () {
    this._updateScrollBarAsync();

    this._async.dispose();
  };

  Popup.prototype.componentWillUnmount = function () {
    this._disposables.forEach(function (dispose) {
      return dispose();
    }); // tslint:disable-next-line:deprecation


    if (this.props.shouldRestoreFocus) {
      var _a = this.props.onRestoreFocus,
          onRestoreFocus = _a === void 0 ? defaultFocusRestorer : _a;
      onRestoreFocus({
        originalElement: this._originalFocusedElement,
        containsFocus: this._containsFocus
      });
    } // De-reference DOM Node to avoid retainment via transpiled closure of _onKeyDown


    delete this._originalFocusedElement;
  };

  Popup.prototype.render = function () {
    var _a = this.props,
        role = _a.role,
        className = _a.className,
        ariaLabel = _a.ariaLabel,
        ariaLabelledBy = _a.ariaLabelledBy,
        ariaDescribedBy = _a.ariaDescribedBy,
        style = _a.style;
    return React.createElement("div", __assign({
      ref: this._root
    }, getNativeProps(this.props, divProperties), {
      className: className,
      role: role,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      "aria-describedby": ariaDescribedBy,
      onKeyDown: this._onKeyDown,
      style: __assign({
        overflowY: this.state.needsVerticalScrollBar ? 'scroll' : undefined,
        outline: 'none'
      }, style)
    }), this.props.children);
  };

  Popup.prototype._updateScrollBarAsync = function () {
    var _this = this;

    this._async.requestAnimationFrame(function () {
      _this._getScrollBar();
    });
  };

  Popup.prototype._getScrollBar = function () {
    // If overflowY is overriden, don't waste time calculating whether the scrollbar is necessary.
    if (this.props.style && this.props.style.overflowY) {
      return;
    }

    var needsVerticalScrollBar = false;

    if (this._root && this._root.current && this._root.current.firstElementChild) {
      // ClientHeight returns the client height of an element rounded to an
      // integer. On some browsers at different zoom levels this rounding
      // can generate different results for the root container and child even
      // though they are the same height. This causes us to show a scroll bar
      // when not needed. Ideally we would use BoundingClientRect().height
      // instead however seems that the API is 90% slower than using ClientHeight.
      // Therefore instead we will calculate the difference between heights and
      // allow for a 1px difference to still be considered ok and not show the
      // scroll bar.
      var rootHeight = this._root.current.clientHeight;
      var firstChildHeight = this._root.current.firstElementChild.clientHeight;

      if (rootHeight > 0 && firstChildHeight > rootHeight) {
        needsVerticalScrollBar = firstChildHeight - rootHeight > 1;
      }
    }

    if (this.state.needsVerticalScrollBar !== needsVerticalScrollBar) {
      this.setState({
        needsVerticalScrollBar: needsVerticalScrollBar
      });
    }
  };

  Popup.defaultProps = {
    shouldRestoreFocus: true
  };
  return Popup;
}(React.Component);

function defaultFocusRestorer(options) {
  var originalElement = options.originalElement,
      containsFocus = options.containsFocus;

  if (originalElement && containsFocus && originalElement !== window) {
    originalElement.focus();
  }
}

var _a$4;
var ANIMATIONS = (_a$4 = {}, _a$4[RectangleEdge.top] = AnimationClassNames.slideUpIn10, _a$4[RectangleEdge.bottom] = AnimationClassNames.slideDownIn10, _a$4[RectangleEdge.left] = AnimationClassNames.slideLeftIn10, _a$4[RectangleEdge.right] = AnimationClassNames.slideRightIn10, _a$4);
var getClassNames$2 = classNamesFunction({
  disableCaching: true
});
var BEAK_ORIGIN_POSITION = {
  top: 0,
  left: 0
}; // Microsoft Edge will overwrite inline styles if there is an animation pertaining to that style.
// To help ensure that edge will respect the offscreen style opacity
// filter needs to be added as an additional way to set opacity.

var OFF_SCREEN_STYLE = {
  opacity: 0,
  filter: 'opacity(0)'
}; // role and role description go hand-in-hand. Both would be included by spreading getNativeProps for a basic element
// This constant array can be used to filter these out of native props spread on callout root and apply them together on
// calloutMain (the Popup component within the callout)

var ARIA_ROLE_ATTRIBUTES = ['role', 'aria-roledescription'];

var CalloutContentBase =
/** @class */
function (_super) {
  __extends(CalloutContentBase, _super);

  function CalloutContentBase(props) {
    var _this = _super.call(this, props) || this;

    _this._hostElement = React.createRef();
    _this._calloutElement = React.createRef();
    _this._hasListeners = false;
    _this._disposables = [];

    _this.dismiss = function (ev) {
      var onDismiss = _this.props.onDismiss;

      if (onDismiss) {
        onDismiss(ev);
      }
    };

    _this._dismissOnScroll = function (ev) {
      var preventDismissOnScroll = _this.props.preventDismissOnScroll;

      if (_this.state.positions && !preventDismissOnScroll) {
        _this._dismissOnClickOrScroll(ev);
      }
    };

    _this._dismissOnResize = function (ev) {
      var preventDismissOnResize = _this.props.preventDismissOnResize;

      if (!preventDismissOnResize) {
        _this.dismiss(ev);
      }
    };

    _this._dismissOnLostFocus = function (ev) {
      var preventDismissOnLostFocus = _this.props.preventDismissOnLostFocus;

      if (!preventDismissOnLostFocus) {
        _this._dismissOnClickOrScroll(ev);
      }
    };

    _this._setInitialFocus = function () {
      if (_this.props.setInitialFocus && !_this._didSetInitialFocus && _this.state.positions && _this._calloutElement.current) {
        _this._didSetInitialFocus = true;

        _this._async.requestAnimationFrame(function () {
          return focusFirstChild(_this._calloutElement.current);
        }, _this._calloutElement.current);
      }
    };

    _this._onComponentDidMount = function () {
      _this._addListeners();

      if (_this.props.onLayerMounted) {
        _this.props.onLayerMounted();
      }

      _this._updateAsyncPosition();

      _this._setHeightOffsetEveryFrame();
    };

    _this._mouseDownOnPopup = function () {
      _this._isMouseDownOnPopup = true;
    };

    _this._mouseUpOnPopup = function () {
      _this._isMouseDownOnPopup = false;
    };

    _this._async = new Async(_this);
    _this._didSetInitialFocus = false;
    _this.state = {
      positions: undefined,
      slideDirectionalClassName: undefined,
      // @TODO it looks like this is not even being used anymore.
      calloutElementRect: undefined,
      heightOffset: 0
    };
    _this._positionAttempts = 0;
    return _this;
  }

  CalloutContentBase.prototype.componentDidUpdate = function () {
    if (!this.props.hidden) {
      this._setInitialFocus();

      if (!this._hasListeners) {
        this._addListeners();
      }

      this._updateAsyncPosition();
    } else {
      if (this._hasListeners) {
        this._removeListeners();
      }
    }
  };

  CalloutContentBase.prototype.shouldComponentUpdate = function (newProps, newState) {
    if (!newProps.shouldUpdateWhenHidden && this.props.hidden && newProps.hidden) {
      // Do not update when hidden.
      return false;
    }

    return !shallowCompare(this.props, newProps) || !shallowCompare(this.state, newState);
  }; // tslint:disable-next-line function-name


  CalloutContentBase.prototype.UNSAFE_componentWillMount = function () {
    this._setTargetWindowAndElement(this._getTarget());
  };

  CalloutContentBase.prototype.componentWillUnmount = function () {
    this._async.dispose();

    this._disposables.forEach(function (dispose) {
      return dispose();
    });
  }; // tslint:disable-next-line function-name


  CalloutContentBase.prototype.UNSAFE_componentWillUpdate = function (newProps) {
    // If the target element changed, find the new one. If we are tracking target with class name, always find element
    // because we do not know if fabric has rendered a new element and disposed the old element.
    var newTarget = this._getTarget(newProps);

    var oldTarget = this._getTarget();

    if ((newTarget !== oldTarget || typeof newTarget === 'string' || newTarget instanceof String) && !this._blockResetHeight) {
      this._maxHeight = undefined;

      this._setTargetWindowAndElement(newTarget);
    }

    if (newProps.gapSpace !== this.props.gapSpace || this.props.beakWidth !== newProps.beakWidth) {
      this._maxHeight = undefined;
    }

    if (newProps.finalHeight !== this.props.finalHeight) {
      this._setHeightOffsetEveryFrame();
    } // Ensure positioning is recalculated when we are about to show a persisted menu.


    if (this._didPositionPropsChange(newProps, this.props)) {
      this._maxHeight = undefined; // Target might have been updated while hidden.

      this._setTargetWindowAndElement(newTarget);

      this.setState({
        positions: undefined
      });
      this._didSetInitialFocus = false;
      this._bounds = undefined;
    }

    this._blockResetHeight = false;
  };

  CalloutContentBase.prototype.componentDidMount = function () {
    if (!this.props.hidden) {
      this._onComponentDidMount();
    }
  };

  CalloutContentBase.prototype.render = function () {
    // If there is no target window then we are likely in server side rendering and we should not render anything.
    if (!this._targetWindow) {
      return null;
    }

    var target = this.props.target;
    var _a = this.props,
        styles = _a.styles,
        style = _a.style,
        ariaLabel = _a.ariaLabel,
        ariaDescribedBy = _a.ariaDescribedBy,
        ariaLabelledBy = _a.ariaLabelledBy,
        className = _a.className,
        isBeakVisible = _a.isBeakVisible,
        children = _a.children,
        beakWidth = _a.beakWidth,
        calloutWidth = _a.calloutWidth,
        calloutMaxWidth = _a.calloutMaxWidth,
        finalHeight = _a.finalHeight,
        _b = _a.hideOverflow,
        hideOverflow = _b === void 0 ? !!finalHeight : _b,
        backgroundColor = _a.backgroundColor,
        calloutMaxHeight = _a.calloutMaxHeight,
        onScroll = _a.onScroll,
        // tslint:disable-next-line: deprecation
    _c = _a.shouldRestoreFocus,
        // tslint:disable-next-line: deprecation
    shouldRestoreFocus = _c === void 0 ? true : _c;
    target = this._getTarget();
    var positions = this.state.positions;
    var getContentMaxHeight = this._getMaxHeight() ? this._getMaxHeight() + this.state.heightOffset : undefined;
    var contentMaxHeight = calloutMaxHeight && getContentMaxHeight && calloutMaxHeight < getContentMaxHeight ? calloutMaxHeight : getContentMaxHeight;
    var overflowYHidden = hideOverflow;
    var beakVisible = isBeakVisible && !!target;
    this._classNames = getClassNames$2(styles, {
      theme: this.props.theme,
      className: className,
      overflowYHidden: overflowYHidden,
      calloutWidth: calloutWidth,
      positions: positions,
      beakWidth: beakWidth,
      backgroundColor: backgroundColor,
      calloutMaxWidth: calloutMaxWidth
    });

    var overflowStyle = __assign(__assign(__assign({}, style), {
      maxHeight: contentMaxHeight
    }), overflowYHidden && {
      overflowY: 'hidden'
    });

    var visibilityStyle = this.props.hidden ? {
      visibility: 'hidden'
    } : undefined; // React.CSSProperties does not understand IRawStyle, so the inline animations will need to be cast as any for now.

    var content = React.createElement("div", {
      ref: this._hostElement,
      className: this._classNames.container,
      style: visibilityStyle
    }, React.createElement("div", __assign({}, getNativeProps(this.props, divProperties, ARIA_ROLE_ATTRIBUTES), {
      className: css(this._classNames.root, positions && positions.targetEdge && ANIMATIONS[positions.targetEdge]),
      style: positions ? positions.elementPosition : OFF_SCREEN_STYLE,
      // Safari and Firefox on Mac OS requires this to back-stop click events so focus remains in the Callout.
      // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Clicking_and_focus
      tabIndex: -1,
      ref: this._calloutElement
    }), beakVisible && React.createElement("div", {
      className: this._classNames.beak,
      style: this._getBeakPosition()
    }), beakVisible && React.createElement("div", {
      className: this._classNames.beakCurtain
    }), React.createElement(Popup, __assign({}, getNativeProps(this.props, ARIA_ROLE_ATTRIBUTES), {
      ariaLabel: ariaLabel,
      onRestoreFocus: this.props.onRestoreFocus,
      ariaDescribedBy: ariaDescribedBy,
      ariaLabelledBy: ariaLabelledBy,
      className: this._classNames.calloutMain,
      onDismiss: this.dismiss,
      onScroll: onScroll,
      shouldRestoreFocus: shouldRestoreFocus,
      style: overflowStyle,
      onMouseDown: this._mouseDownOnPopup,
      onMouseUp: this._mouseUpOnPopup
    }), children)));
    return content;
  };

  CalloutContentBase.prototype._dismissOnClickOrScroll = function (ev) {
    var target = ev.target;
    var isEventTargetOutsideCallout = this._hostElement.current && !elementContains(this._hostElement.current, target); // If mouse is pressed down on callout but moved outside then released, don't dismiss the callout.

    if (isEventTargetOutsideCallout && this._isMouseDownOnPopup) {
      this._isMouseDownOnPopup = false;
      return;
    }

    if (!this._target && isEventTargetOutsideCallout || ev.target !== this._targetWindow && isEventTargetOutsideCallout && (this._target.stopPropagation || !this._target || target !== this._target && !elementContains(this._target, target))) {
      this.dismiss(ev);
    }
  };

  CalloutContentBase.prototype._addListeners = function () {
    var _this = this; // This is added so the callout will dismiss when the window is scrolled
    // but not when something inside the callout is scrolled. The delay seems
    // to be required to avoid React firing an async focus event in IE from
    // the target changing focus quickly prior to rendering the callout.


    this._async.setTimeout(function () {
      _this._disposables.push(on(_this._targetWindow, 'scroll', _this._dismissOnScroll, true), on(_this._targetWindow, 'resize', _this._dismissOnResize, true), on(_this._targetWindow.document.documentElement, 'focus', _this._dismissOnLostFocus, true), on(_this._targetWindow.document.documentElement, 'click', _this._dismissOnLostFocus, true));

      _this._hasListeners = true;
    }, 0);
  };

  CalloutContentBase.prototype._removeListeners = function () {
    this._disposables.forEach(function (dispose) {
      return dispose();
    });

    this._disposables = [];
    this._hasListeners = false;
  };

  CalloutContentBase.prototype._updateAsyncPosition = function () {
    var _this = this;

    this._async.requestAnimationFrame(function () {
      return _this._updatePosition();
    }, this._calloutElement.current);
  };

  CalloutContentBase.prototype._getBeakPosition = function () {
    var positions = this.state.positions;

    var beakPostionStyle = __assign({}, positions && positions.beakPosition ? positions.beakPosition.elementPosition : null);

    if (!beakPostionStyle.top && !beakPostionStyle.bottom && !beakPostionStyle.left && !beakPostionStyle.right) {
      beakPostionStyle.left = BEAK_ORIGIN_POSITION.left;
      beakPostionStyle.top = BEAK_ORIGIN_POSITION.top;
    }

    return beakPostionStyle;
  };

  CalloutContentBase.prototype._updatePosition = function () {
    // Try to update the target, page might have changed
    this._setTargetWindowAndElement(this._getTarget());

    var positions = this.state.positions;
    var hostElement = this._hostElement.current;
    var calloutElement = this._calloutElement.current; // If we expect a target element to position against, we need to wait until `this._target` is resolved. Otherwise
    // we can try to position.

    var expectsTarget = !!this.props.target;

    if (hostElement && calloutElement && (!expectsTarget || this._target)) {
      var currentProps = void 0;
      currentProps = assign(currentProps, this.props);
      currentProps.bounds = this._getBounds();
      currentProps.target = this._target; // If there is a finalHeight given then we assume that the user knows and will handle
      // additional positioning adjustments so we should call positionCard

      var newPositions = this.props.finalHeight ? positionCard(currentProps, hostElement, calloutElement, positions) : positionCallout(currentProps, hostElement, calloutElement, positions); // Set the new position only when the positions are not exists or one of the new callout positions are different.
      // The position should not change if the position is within 2 decimal places.

      if (!positions && newPositions || positions && newPositions && !this._arePositionsEqual(positions, newPositions) && this._positionAttempts < 5) {
        // We should not reposition the callout more than a few times, if it is then the content is likely resizing
        // and we should stop trying to reposition to prevent a stack overflow.
        this._positionAttempts++;
        this.setState({
          positions: newPositions
        });
      } else if (this._positionAttempts > 0) {
        // Only call the onPositioned callback if the callout has been re-positioned at least once.
        this._positionAttempts = 0;

        if (this.props.onPositioned) {
          this.props.onPositioned(this.state.positions);
        }
      }
    }
  };

  CalloutContentBase.prototype._getBounds = function () {
    if (!this._bounds) {
      var bounds = this.props.bounds;
      var currentBounds = typeof bounds === 'function' ? bounds(this.props.target, this._targetWindow) : bounds;

      if (!currentBounds) {
        currentBounds = getBoundsFromTargetWindow(this._target, this._targetWindow);
        currentBounds = {
          top: currentBounds.top + this.props.minPagePadding,
          left: currentBounds.left + this.props.minPagePadding,
          right: currentBounds.right - this.props.minPagePadding,
          bottom: currentBounds.bottom - this.props.minPagePadding,
          width: currentBounds.width - this.props.minPagePadding * 2,
          height: currentBounds.height - this.props.minPagePadding * 2
        };
      }

      this._bounds = currentBounds;
    }

    return this._bounds;
  }; // Max height should remain as synchronous as possible, which is why it is not done using set state.
  // It needs to be synchronous since it will impact the ultimate position of the callout.


  CalloutContentBase.prototype._getMaxHeight = function () {
    var _this = this;

    if (!this._maxHeight) {
      if (this.props.directionalHintFixed && this._target) {
        var beakWidth = this.props.isBeakVisible ? this.props.beakWidth : 0;
        var gapSpace = this.props.gapSpace ? this.props.gapSpace : 0; // Since the callout cannot measure it's border size it must be taken into account here. Otherwise it will
        // overlap with the target.

        var totalGap_1 = gapSpace + beakWidth;

        this._async.requestAnimationFrame(function () {
          if (_this._target) {
            _this._maxHeight = getMaxHeight(_this._target, _this.props.directionalHint, totalGap_1, _this._getBounds(), _this.props.coverTarget);
            _this._blockResetHeight = true;

            _this.forceUpdate();
          }
        }, this._target);
      } else {
        this._maxHeight = this._getBounds().height;
      }
    }

    return this._maxHeight;
  };

  CalloutContentBase.prototype._arePositionsEqual = function (positions, newPosition) {
    return this._comparePositions(positions.elementPosition, newPosition.elementPosition) && this._comparePositions(positions.beakPosition.elementPosition, newPosition.beakPosition.elementPosition);
  };

  CalloutContentBase.prototype._comparePositions = function (oldPositions, newPositions) {
    for (var key in newPositions) {
      if (newPositions.hasOwnProperty(key)) {
        var oldPositionEdge = oldPositions[key];
        var newPositionEdge = newPositions[key];

        if (oldPositionEdge !== undefined && newPositionEdge !== undefined) {
          if (oldPositionEdge.toFixed(2) !== newPositionEdge.toFixed(2)) {
            return false;
          }
        } else {
          return false;
        }
      }
    }

    return true;
  };

  CalloutContentBase.prototype._setTargetWindowAndElement = function (target) {
    var currentElement = this._calloutElement.current;

    if (target) {
      if (typeof target === 'string') {
        var currentDoc = getDocument(currentElement);
        this._target = currentDoc ? currentDoc.querySelector(target) : null;
        this._targetWindow = getWindow(currentElement);
      } else if (!!target.stopPropagation) {
        this._targetWindow = getWindow(target.target);
        this._target = target;
      } else if (!!target.getBoundingClientRect) {
        var targetElement = target;
        this._targetWindow = getWindow(targetElement);
        this._target = target;
      } else if (target.current !== undefined) {
        this._target = target.current;
        this._targetWindow = getWindow(this._target); // HTMLImgElements can have x and y values. The check for it being a point must go last.
      } else {
        this._targetWindow = getWindow(currentElement);
        this._target = target;
      }
    } else {
      this._targetWindow = getWindow(currentElement);
    }
  };

  CalloutContentBase.prototype._setHeightOffsetEveryFrame = function () {
    var _this = this;

    if (this._calloutElement.current && this.props.finalHeight) {
      this._setHeightOffsetTimer = this._async.requestAnimationFrame(function () {
        var calloutMainElem = _this._calloutElement.current && _this._calloutElement.current.lastChild;

        if (!calloutMainElem) {
          return;
        }

        var cardScrollHeight = calloutMainElem.scrollHeight;
        var cardCurrHeight = calloutMainElem.offsetHeight;
        var scrollDiff = cardScrollHeight - cardCurrHeight;

        _this.setState({
          heightOffset: _this.state.heightOffset + scrollDiff
        });

        if (calloutMainElem.offsetHeight < _this.props.finalHeight) {
          _this._setHeightOffsetEveryFrame();
        } else {
          _this._async.cancelAnimationFrame(_this._setHeightOffsetTimer, _this._calloutElement.current);
        }
      }, this._calloutElement.current);
    }
  }; // Whether or not the current positions should be reset


  CalloutContentBase.prototype._didPositionPropsChange = function (newProps, oldProps) {
    return !newProps.hidden && newProps.hidden !== oldProps.hidden || newProps.directionalHint !== oldProps.directionalHint;
  };

  CalloutContentBase.prototype._getTarget = function (props) {
    if (props === void 0) {
      props = this.props;
    }

    var target = props.target;
    return target;
  };

  CalloutContentBase.defaultProps = {
    preventDismissOnLostFocus: false,
    preventDismissOnScroll: false,
    preventDismissOnResize: false,
    isBeakVisible: true,
    beakWidth: 16,
    gapSpace: 0,
    minPagePadding: 8,
    directionalHint: DirectionalHint.bottomAutoEdge
  };
  return CalloutContentBase;
}(React.Component);

function getBeakStyle(beakWidth) {
  return {
    height: beakWidth,
    width: beakWidth
  };
}

var GlobalClassNames$1 = {
  container: 'ms-Callout-container',
  root: 'ms-Callout',
  beak: 'ms-Callout-beak',
  beakCurtain: 'ms-Callout-beakCurtain',
  calloutMain: 'ms-Callout-main'
};
var getStyles$2 = function (props) {
  var _a;

  var theme = props.theme,
      className = props.className,
      overflowYHidden = props.overflowYHidden,
      calloutWidth = props.calloutWidth,
      beakWidth = props.beakWidth,
      backgroundColor = props.backgroundColor,
      calloutMaxWidth = props.calloutMaxWidth;
  var classNames = getGlobalClassNames(GlobalClassNames$1, theme);
  var semanticColors = theme.semanticColors,
      effects = theme.effects;
  return {
    container: [classNames.container, {
      position: 'relative'
    }],
    root: [classNames.root, theme.fonts.medium, {
      position: 'absolute',
      boxSizing: 'border-box',
      borderRadius: effects.roundedCorner2,
      boxShadow: effects.elevation16,
      selectors: (_a = {}, _a[HighContrastSelector] = {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'WindowText'
      }, _a)
    }, focusClear(), className, !!calloutWidth && {
      width: calloutWidth
    }, !!calloutMaxWidth && {
      maxWidth: calloutMaxWidth
    }],
    beak: [classNames.beak, {
      position: 'absolute',
      backgroundColor: semanticColors.menuBackground,
      boxShadow: 'inherit',
      border: 'inherit',
      boxSizing: 'border-box',
      transform: 'rotate(45deg)'
    }, getBeakStyle(beakWidth), backgroundColor && {
      backgroundColor: backgroundColor
    }],
    beakCurtain: [classNames.beakCurtain, {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: semanticColors.menuBackground,
      borderRadius: effects.roundedCorner2
    }],
    calloutMain: [classNames.calloutMain, {
      backgroundColor: semanticColors.menuBackground,
      overflowX: 'hidden',
      overflowY: 'auto',
      position: 'relative',
      borderRadius: effects.roundedCorner2
    }, overflowYHidden && {
      overflowY: 'hidden'
    }, backgroundColor && {
      backgroundColor: backgroundColor
    }]
  };
};

var CalloutContent = styled(CalloutContentBase, getStyles$2, undefined, {
  scope: 'CalloutContent'
});

var inheritFont = {
  fontFamily: 'inherit'
};
var GlobalClassNames$2 = {
  root: 'ms-Fabric',
  bodyThemed: 'ms-Fabric-bodyThemed'
};
var getStyles$3 = function (props) {
  var theme = props.theme,
      className = props.className,
      applyTheme = props.applyTheme;
  var classNames = getGlobalClassNames(GlobalClassNames$2, theme);
  return {
    root: [classNames.root, theme.fonts.medium, {
      color: theme.palette.neutralPrimary,
      selectors: {
        '& button': inheritFont,
        '& input': inheritFont,
        '& textarea': inheritFont
      }
    }, // apply theme to only if applyTheme is true
    applyTheme && {
      color: theme.semanticColors.bodyText,
      backgroundColor: theme.semanticColors.bodyBackground
    }, className],
    bodyThemed: [{
      backgroundColor: theme.semanticColors.bodyBackground
    }]
  };
};

var getClassNames$3 = classNamesFunction();
var getFabricTheme = memoizeFunction(function (theme, isRTL) {
  return createTheme(__assign(__assign({}, theme), {
    rtl: isRTL
  }));
});

var getDir = function (theme, dir) {
  var contextDir = getRTL$1(theme) ? 'rtl' : 'ltr';
  var pageDir = getRTL$1() ? 'rtl' : 'ltr';
  var componentDir = dir ? dir : contextDir;
  return {
    // If Fabric dir !== contextDir
    // Or If contextDir !== pageDir
    // Then we need to set dir of the Fabric root
    rootDir: componentDir !== contextDir || componentDir !== pageDir ? componentDir : dir,
    // If dir !== contextDir || pageDir
    // then set contextual theme around content
    needsTheme: componentDir !== contextDir
  };
};

var FabricBase =
/** @class */
function (_super) {
  __extends(FabricBase, _super);

  function FabricBase() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this._rootElement = React.createRef();
    _this._removeClassNameFromBody = undefined;
    return _this;
  }

  FabricBase.prototype.render = function () {
    var _a = this.props,
        _b = _a.as,
        Root = _b === void 0 ? 'div' : _b,
        theme = _a.theme,
        dir = _a.dir;

    var classNames = this._getClassNames();

    var divProps = getNativeProps(this.props, divProperties, ['dir']);

    var _c = getDir(theme, dir),
        rootDir = _c.rootDir,
        needsTheme = _c.needsTheme;

    var renderedContent = React.createElement(Root, __assign({
      dir: rootDir
    }, divProps, {
      className: classNames.root,
      ref: this._rootElement
    }));

    if (needsTheme) {
      renderedContent = React.createElement(Customizer, {
        settings: {
          theme: getFabricTheme(theme, dir === 'rtl')
        }
      }, renderedContent);
    }

    return React.createElement(React.Fragment, null, renderedContent, React.createElement(FocusRects, {
      rootRef: this._rootElement
    }));
  };

  FabricBase.prototype.componentDidMount = function () {
    this._addClassNameToBody();
  };

  FabricBase.prototype.componentWillUnmount = function () {
    if (this._removeClassNameFromBody) {
      this._removeClassNameFromBody();
    }
  };

  FabricBase.prototype._getClassNames = function () {
    var _a = this.props,
        className = _a.className,
        theme = _a.theme,
        applyTheme = _a.applyTheme;
    var classNames = getClassNames$3(getStyles$3, {
      theme: theme,
      applyTheme: applyTheme,
      className: className
    });
    return classNames;
  };

  FabricBase.prototype._addClassNameToBody = function () {
    if (this.props.applyThemeToBody) {
      var classNames_1 = this._getClassNames();

      var currentDoc_1 = getDocument(this._rootElement.current);

      if (currentDoc_1) {
        currentDoc_1.body.classList.add(classNames_1.bodyThemed);

        this._removeClassNameFromBody = function () {
          currentDoc_1.body.classList.remove(classNames_1.bodyThemed);
        };
      }
    }
  };

  return FabricBase;
}(React.Component);

var Fabric = styled(FabricBase, getStyles$3, undefined, {
  scope: 'Fabric'
});

var _layersByHostId = {};

var _defaultHostSelector;
/**
 * Register a layer for a given host id
 * @param hostId Id of the layer host
 * @param layer Layer instance
 */


function registerLayer(hostId, callback) {
  if (!_layersByHostId[hostId]) {
    _layersByHostId[hostId] = [];
  }

  _layersByHostId[hostId].push(callback);
}
/**
 * Unregister a layer for a given host id
 * @param hostId Id of the layer host
 * @param layer Layer instance
 */

function unregisterLayer(hostId, callback) {
  if (_layersByHostId[hostId]) {
    var idx = _layersByHostId[hostId].indexOf(callback);

    if (idx >= 0) {
      _layersByHostId[hostId].splice(idx, 1);

      if (_layersByHostId[hostId].length === 0) {
        delete _layersByHostId[hostId];
      }
    }
  }
}
/**
 * Get the default target selector when determining a host
 */

function getDefaultTarget() {
  return _defaultHostSelector;
}

var getClassNames$4 = classNamesFunction();

var LayerBase =
/** @class */
function (_super) {
  __extends(LayerBase, _super);

  function LayerBase(props) {
    var _this = _super.call(this, props) || this;

    _this._rootRef = React.createRef();

    _this._createLayerElement = function () {
      var hostId = _this.props.hostId;
      var doc = getDocument(_this._rootRef.current);

      var host = _this._getHost();

      if (!doc || !host) {
        return;
      } // If one was already existing, remove.


      _this._removeLayerElement();

      var layerElement = doc.createElement('div');

      var classNames = _this._getClassNames();

      layerElement.className = classNames.root;
      setPortalAttribute(layerElement);
      setVirtualParent(layerElement, _this._rootRef.current);
      _this.props.insertFirst ? host.insertBefore(layerElement, host.firstChild) : host.appendChild(layerElement);

      _this.setState({
        hostId: hostId,
        layerElement: layerElement
      }, function () {
        // tslint:disable-next-line:deprecation
        var _a = _this.props,
            onLayerDidMount = _a.onLayerDidMount,
            onLayerMounted = _a.onLayerMounted;

        if (onLayerMounted) {
          onLayerMounted();
        }

        if (onLayerDidMount) {
          onLayerDidMount();
        }
      });
    };

    _this.state = {};

    {
      warnDeprecations('Layer', props, {
        onLayerMounted: 'onLayerDidMount'
      });
    }

    return _this;
  }

  LayerBase.prototype.componentDidMount = function () {
    var hostId = this.props.hostId;

    this._createLayerElement();

    if (hostId) {
      registerLayer(hostId, this._createLayerElement);
    }
  };

  LayerBase.prototype.render = function () {
    var layerElement = this.state.layerElement;

    var classNames = this._getClassNames();

    var eventBubblingEnabled = this.props.eventBubblingEnabled;
    return React.createElement("span", {
      className: "ms-layer",
      ref: this._rootRef
    }, layerElement && ReactDOM.createPortal(React.createElement(Fabric, __assign({}, !eventBubblingEnabled && _getFilteredEvents(), {
      className: classNames.content
    }), this.props.children), layerElement));
  };

  LayerBase.prototype.componentDidUpdate = function () {
    if (this.props.hostId !== this.state.hostId) {
      this._createLayerElement();
    }
  };

  LayerBase.prototype.componentWillUnmount = function () {
    var hostId = this.props.hostId;

    this._removeLayerElement();

    if (hostId) {
      unregisterLayer(hostId, this._createLayerElement);
    }
  };

  LayerBase.prototype._removeLayerElement = function () {
    var onLayerWillUnmount = this.props.onLayerWillUnmount;
    var layerElement = this.state.layerElement;

    if (onLayerWillUnmount) {
      onLayerWillUnmount();
    }

    if (layerElement && layerElement.parentNode) {
      var parentNode = layerElement.parentNode;

      if (parentNode) {
        parentNode.removeChild(layerElement);
      }
    }
  };

  LayerBase.prototype._getClassNames = function () {
    var _a = this.props,
        className = _a.className,
        styles = _a.styles,
        theme = _a.theme;
    var classNames = getClassNames$4(styles, {
      theme: theme,
      className: className,
      isNotHost: !this.props.hostId
    });
    return classNames;
  };

  LayerBase.prototype._getHost = function () {
    var hostId = this.props.hostId;
    var doc = getDocument(this._rootRef.current);

    if (!doc) {
      return undefined;
    }

    if (hostId) {
      return doc.getElementById(hostId);
    } else {
      var defaultHostSelector = getDefaultTarget();
      return defaultHostSelector ? doc.querySelector(defaultHostSelector) : doc.body;
    }
  };

  LayerBase.defaultProps = {
    onLayerDidMount: function () {
      return undefined;
    },
    onLayerWillUnmount: function () {
      return undefined;
    }
  };
  LayerBase = __decorate([customizable('Layer', ['theme', 'hostId'])], LayerBase);
  return LayerBase;
}(React.Component);

var _onFilterEvent = function (ev) {
  // We should just be able to check ev.bubble here and only stop events that are bubbling up. However, even though
  // mouseenter and mouseleave do NOT bubble up, they are showing up as bubbling. Therefore we stop events based on
  // event name rather than ev.bubble.
  if (ev.eventPhase === Event.BUBBLING_PHASE && ev.type !== 'mouseenter' && ev.type !== 'mouseleave' && ev.type !== 'touchstart' && ev.type !== 'touchend') {
    ev.stopPropagation();
  }
};

var _filteredEventProps;

function _getFilteredEvents() {
  if (!_filteredEventProps) {
    _filteredEventProps = {};
    ['onClick', 'onContextMenu', 'onDoubleClick', 'onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOver', 'onMouseOut', 'onMouseUp', 'onTouchMove', 'onTouchStart', 'onTouchCancel', 'onTouchEnd', 'onKeyDown', 'onKeyPress', 'onKeyUp', 'onFocus', 'onBlur', 'onChange', 'onInput', 'onInvalid', 'onSubmit'].forEach(function (name) {
      return _filteredEventProps[name] = _onFilterEvent;
    });
  }

  return _filteredEventProps;
}

var GlobalClassNames$3 = {
  root: 'ms-Layer',
  rootNoHost: 'ms-Layer--fixed',
  content: 'ms-Layer-content'
};
var getStyles$4 = function (props) {
  var className = props.className,
      isNotHost = props.isNotHost,
      theme = props.theme;
  var classNames = getGlobalClassNames(GlobalClassNames$3, theme);
  return {
    root: [classNames.root, theme.fonts.medium, isNotHost && [classNames.rootNoHost, {
      position: 'fixed',
      zIndex: ZIndexes.Layer,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      visibility: 'hidden'
    }], className],
    content: [classNames.content, {
      visibility: 'visible'
    }]
  };
};

var Layer = styled(LayerBase, getStyles$4, undefined, {
  scope: 'Layer',
  fields: ['hostId', 'theme', 'styles']
});

var Callout =
/** @class */
function (_super) {
  __extends(Callout, _super);

  function Callout() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Callout.prototype.render = function () {
    var _a = this.props,
        layerProps = _a.layerProps,
        rest = __rest(_a, ["layerProps"]);

    var content = React.createElement(CalloutContent, __assign({}, rest));
    return this.props.doNotLayer ? content : React.createElement(Layer, __assign({}, layerProps), content);
  };

  return Callout;
}(React.Component);

var renderItemIcon = function (props) {
  var item = props.item,
      hasIcons = props.hasIcons,
      classNames = props.classNames;
  var iconProps = item.iconProps;

  if (!hasIcons) {
    return null;
  }

  if (item.onRenderIcon) {
    return item.onRenderIcon(props);
  }

  return React.createElement(Icon, __assign({}, iconProps, {
    className: classNames.icon
  }));
};

var renderCheckMarkIcon = function (_a) {
  var onCheckmarkClick = _a.onCheckmarkClick,
      item = _a.item,
      classNames = _a.classNames;
  var isItemChecked = getIsChecked(item);

  if (onCheckmarkClick) {
    // Ensures that the item is passed as the first argument to the checkmark click callback.
    var onClick = function (e) {
      return onCheckmarkClick(item, e);
    };

    return React.createElement(Icon, {
      iconName: item.canCheck !== false && isItemChecked ? 'CheckMark' : '',
      className: classNames.checkmarkIcon,
      onClick: onClick
    });
  }

  return null;
};

var renderItemName = function (_a) {
  var item = _a.item,
      classNames = _a.classNames; // tslint:disable:deprecation

  if (item.text || item.name) {
    return React.createElement("span", {
      className: classNames.label
    }, item.text || item.name);
  } // tslint:enable:deprecation


  return null;
};

var renderSecondaryText = function (_a) {
  var item = _a.item,
      classNames = _a.classNames;

  if (item.secondaryText) {
    return React.createElement("span", {
      className: classNames.secondaryText
    }, item.secondaryText);
  }

  return null;
};

var renderSubMenuIcon = function (_a) {
  var item = _a.item,
      classNames = _a.classNames,
      theme = _a.theme;

  if (hasSubmenu(item)) {
    return React.createElement(Icon, __assign({
      iconName: getRTL$1(theme) ? 'ChevronLeft' : 'ChevronRight'
    }, item.submenuIconProps, {
      className: classNames.subMenuIcon
    }));
  }

  return null;
};

var ContextualMenuItemBase =
/** @class */
function (_super) {
  __extends(ContextualMenuItemBase, _super);

  function ContextualMenuItemBase(props) {
    var _this = _super.call(this, props) || this;

    _this.openSubMenu = function () {
      var _a = _this.props,
          item = _a.item,
          openSubMenu = _a.openSubMenu,
          getSubmenuTarget = _a.getSubmenuTarget;

      if (getSubmenuTarget) {
        var submenuTarget = getSubmenuTarget();

        if (hasSubmenu(item) && openSubMenu && submenuTarget) {
          openSubMenu(item, submenuTarget);
        }
      }
    };

    _this.dismissSubMenu = function () {
      var _a = _this.props,
          item = _a.item,
          dismissSubMenu = _a.dismissSubMenu;

      if (hasSubmenu(item) && dismissSubMenu) {
        dismissSubMenu();
      }
    };

    _this.dismissMenu = function (dismissAll) {
      var dismissMenu = _this.props.dismissMenu;

      if (dismissMenu) {
        dismissMenu(undefined
        /* ev */
        , dismissAll);
      }
    };

    initializeComponentRef(_this);
    return _this;
  }

  ContextualMenuItemBase.prototype.render = function () {
    var _a = this.props,
        item = _a.item,
        classNames = _a.classNames;
    return React.createElement("div", {
      className: item.split ? classNames.linkContentMenu : classNames.linkContent
    }, renderCheckMarkIcon(this.props), renderItemIcon(this.props), renderItemName(this.props), renderSecondaryText(this.props), renderSubMenuIcon(this.props));
  };

  return ContextualMenuItemBase;
}(React.Component);

/**
 * @deprecated use getStyles exported from VerticalDivider.styles.ts
 */

var getDividerClassNames = memoizeFunction( // tslint:disable-next-line:deprecation
function (theme) {
  return mergeStyleSets({
    wrapper: {
      display: 'inline-flex',
      height: '100%',
      alignItems: 'center'
    },
    divider: {
      width: 1,
      height: '100%',
      backgroundColor: theme.palette.neutralTertiaryAlt
    }
  });
});

var CONTEXTUAL_MENU_ITEM_HEIGHT = 36;
var MediumScreenSelector = getScreenSelector(0, ScreenWidthMaxMedium);
var getItemHighContrastStyles = memoizeFunction(function () {
  var _a;

  return {
    selectors: (_a = {}, _a[HighContrastSelector] = {
      backgroundColor: 'Highlight',
      borderColor: 'Highlight',
      color: 'HighlightText',
      MsHighContrastAdjust: 'none'
    }, _a)
  };
});
var getMenuItemStyles = memoizeFunction(function (theme) {
  var _a, _b, _c, _d, _e, _f, _g;

  var semanticColors = theme.semanticColors,
      fonts = theme.fonts,
      palette = theme.palette;
  var ContextualMenuItemBackgroundHoverColor = semanticColors.menuItemBackgroundHovered;
  var ContextualMenuItemTextHoverColor = semanticColors.menuItemTextHovered;
  var ContextualMenuItemBackgroundSelectedColor = semanticColors.menuItemBackgroundPressed;
  var ContextualMenuItemDividerColor = semanticColors.bodyDivider;
  var menuItemStyles = {
    item: [fonts.medium, {
      color: semanticColors.bodyText,
      position: 'relative',
      boxSizing: 'border-box'
    }],
    divider: {
      display: 'block',
      height: '1px',
      backgroundColor: ContextualMenuItemDividerColor,
      position: 'relative'
    },
    root: [getFocusStyle(theme), fonts.medium, {
      color: semanticColors.bodyText,
      backgroundColor: 'transparent',
      border: 'none',
      width: '100%',
      height: CONTEXTUAL_MENU_ITEM_HEIGHT,
      lineHeight: CONTEXTUAL_MENU_ITEM_HEIGHT,
      display: 'block',
      cursor: 'pointer',
      padding: '0px 8px 0 4px',
      textAlign: 'left'
    }],
    rootDisabled: {
      color: semanticColors.disabledBodyText,
      cursor: 'default',
      pointerEvents: 'none',
      selectors: (_a = {}, _a[HighContrastSelector] = {
        color: 'GrayText',
        opacity: 1
      }, _a)
    },
    rootHovered: __assign({
      backgroundColor: ContextualMenuItemBackgroundHoverColor,
      color: ContextualMenuItemTextHoverColor,
      selectors: {
        '.ms-ContextualMenu-icon': {
          color: palette.themeDarkAlt
        },
        '.ms-ContextualMenu-submenuIcon': {
          color: palette.neutralPrimary
        }
      }
    }, getItemHighContrastStyles()),
    rootFocused: __assign({
      backgroundColor: palette.white
    }, getItemHighContrastStyles()),
    rootChecked: __assign({
      selectors: {
        '.ms-ContextualMenu-checkmarkIcon': {
          color: palette.neutralPrimary
        }
      }
    }, getItemHighContrastStyles()),
    rootPressed: __assign({
      backgroundColor: ContextualMenuItemBackgroundSelectedColor,
      selectors: {
        '.ms-ContextualMenu-icon': {
          color: palette.themeDark
        },
        '.ms-ContextualMenu-submenuIcon': {
          color: palette.neutralPrimary
        }
      }
    }, getItemHighContrastStyles()),
    rootExpanded: __assign({
      backgroundColor: ContextualMenuItemBackgroundSelectedColor,
      color: semanticColors.bodyTextChecked
    }, getItemHighContrastStyles()),
    linkContent: {
      whiteSpace: 'nowrap',
      height: 'inherit',
      display: 'flex',
      alignItems: 'center',
      maxWidth: '100%'
    },
    anchorLink: {
      padding: '0px 8px 0 4px',
      textRendering: 'auto',
      color: 'inherit',
      letterSpacing: 'normal',
      wordSpacing: 'normal',
      textTransform: 'none',
      textIndent: '0px',
      textShadow: 'none',
      textDecoration: 'none',
      boxSizing: 'border-box'
    },
    label: {
      margin: '0 4px',
      verticalAlign: 'middle',
      display: 'inline-block',
      flexGrow: '1',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    },
    secondaryText: {
      color: theme.palette.neutralSecondary,
      paddingLeft: '20px',
      textAlign: 'right'
    },
    icon: {
      display: 'inline-block',
      minHeight: '1px',
      maxHeight: CONTEXTUAL_MENU_ITEM_HEIGHT,
      fontSize: IconFontSizes.medium,
      width: IconFontSizes.medium,
      margin: '0 4px',
      verticalAlign: 'middle',
      flexShrink: '0',
      selectors: (_b = {}, _b[MediumScreenSelector] = {
        fontSize: IconFontSizes.large,
        width: IconFontSizes.large
      }, _b)
    },
    iconColor: {
      color: semanticColors.menuIcon,
      selectors: (_c = {}, _c[HighContrastSelector] = {
        color: 'inherit'
      }, _c['$root:hover &'] = {
        selectors: (_d = {}, _d[HighContrastSelector] = {
          color: 'HighlightText'
        }, _d)
      }, _c['$root:focus &'] = {
        selectors: (_e = {}, _e[HighContrastSelector] = {
          color: 'HighlightText'
        }, _e)
      }, _c)
    },
    iconDisabled: {
      color: semanticColors.disabledBodyText
    },
    checkmarkIcon: {
      color: semanticColors.bodySubtext,
      selectors: (_f = {}, _f[HighContrastSelector] = {
        color: 'HighlightText'
      }, _f)
    },
    subMenuIcon: {
      height: CONTEXTUAL_MENU_ITEM_HEIGHT,
      lineHeight: CONTEXTUAL_MENU_ITEM_HEIGHT,
      color: palette.neutralSecondary,
      textAlign: 'center',
      display: 'inline-block',
      verticalAlign: 'middle',
      flexShrink: '0',
      fontSize: IconFontSizes.small,
      selectors: (_g = {
        ':hover': {
          color: palette.neutralPrimary
        },
        ':active': {
          color: palette.neutralPrimary
        }
      }, _g[MediumScreenSelector] = {
        fontSize: IconFontSizes.medium
      }, _g)
    },
    splitButtonFlexContainer: [getFocusStyle(theme), {
      display: 'flex',
      height: CONTEXTUAL_MENU_ITEM_HEIGHT,
      flexWrap: 'nowrap',
      justifyContent: 'center',
      alignItems: 'flex-start'
    }]
  };
  return concatStyleSets(menuItemStyles);
});

var CONTEXTUAL_SPLIT_MENU_MINWIDTH = '28px';
var MediumScreenSelector$1 = getScreenSelector(0, ScreenWidthMaxMedium);
var getSplitButtonVerticalDividerClassNames = memoizeFunction( // tslint:disable:deprecation
function (theme) {
  var _a;

  return mergeStyleSets(getDividerClassNames(theme), {
    // tslint:enable:deprecation
    wrapper: {
      position: 'absolute',
      right: 28,
      selectors: (_a = {}, _a[MediumScreenSelector$1] = {
        right: 32
      }, _a)
    },
    divider: {
      height: 16,
      width: 1
    }
  });
});
var GlobalClassNames$4 = {
  item: 'ms-ContextualMenu-item',
  divider: 'ms-ContextualMenu-divider',
  root: 'ms-ContextualMenu-link',
  isChecked: 'is-checked',
  isExpanded: 'is-expanded',
  isDisabled: 'is-disabled',
  linkContent: 'ms-ContextualMenu-linkContent',
  linkContentMenu: 'ms-ContextualMenu-linkContent',
  icon: 'ms-ContextualMenu-icon',
  iconColor: 'ms-ContextualMenu-iconColor',
  checkmarkIcon: 'ms-ContextualMenu-checkmarkIcon',
  subMenuIcon: 'ms-ContextualMenu-submenuIcon',
  label: 'ms-ContextualMenu-itemText',
  secondaryText: 'ms-ContextualMenu-secondaryText',
  splitMenu: 'ms-ContextualMenu-splitMenu'
};
/**
 * @deprecated To be removed in 7.0.
 * @internal
 * This is a package-internal method that has been depended on.
 * It is being kept in this form for backwards compatibility.
 * It should be cleaned up in 7.0.
 *
 * TODO: Audit perf. impact of and potentially remove memoizeFunction.
 * https://github.com/microsoft/fluentui/issues/5534
 */

var getItemClassNames = memoizeFunction(function (theme, disabled, expanded, checked, isAnchorLink, knownIcon, itemClassName, dividerClassName, iconClassName, subMenuClassName, primaryDisabled, className) {
  var _a, _b, _c, _d;

  var styles = getMenuItemStyles(theme);
  var classNames = getGlobalClassNames(GlobalClassNames$4, theme);
  return mergeStyleSets({
    item: [classNames.item, styles.item, itemClassName],
    divider: [classNames.divider, styles.divider, dividerClassName],
    root: [classNames.root, styles.root, checked && [classNames.isChecked, styles.rootChecked], isAnchorLink && styles.anchorLink, expanded && [classNames.isExpanded, styles.rootExpanded], disabled && [classNames.isDisabled, styles.rootDisabled], !disabled && !expanded && [{
      selectors: (_a = {
        ':hover': styles.rootHovered,
        ':active': styles.rootPressed
      }, _a["." + IsFocusVisibleClassName + " &:focus, ." + IsFocusVisibleClassName + " &:focus:hover"] = styles.rootFocused, _a["." + IsFocusVisibleClassName + " &:hover"] = {
        background: 'inherit;'
      }, _a)
    }], className],
    splitPrimary: [styles.root, {
      width: "calc(100% - " + CONTEXTUAL_SPLIT_MENU_MINWIDTH + ")"
    }, checked && ['is-checked', styles.rootChecked], (disabled || primaryDisabled) && ['is-disabled', styles.rootDisabled], !(disabled || primaryDisabled) && !checked && [{
      selectors: (_b = {
        ':hover': styles.rootHovered
      }, // when hovering over the splitPrimary also affect the splitMenu
      _b[":hover ~ ." + classNames.splitMenu] = styles.rootHovered, _b[':active'] = styles.rootPressed, _b["." + IsFocusVisibleClassName + " &:focus, ." + IsFocusVisibleClassName + " &:focus:hover"] = styles.rootFocused, _b["." + IsFocusVisibleClassName + " &:hover"] = {
        background: 'inherit;'
      }, _b)
    }]],
    splitMenu: [classNames.splitMenu, styles.root, {
      flexBasis: '0',
      padding: '0 8px',
      minWidth: CONTEXTUAL_SPLIT_MENU_MINWIDTH
    }, expanded && ['is-expanded', styles.rootExpanded], disabled && ['is-disabled', styles.rootDisabled], !disabled && !expanded && [{
      selectors: (_c = {
        ':hover': styles.rootHovered,
        ':active': styles.rootPressed
      }, _c["." + IsFocusVisibleClassName + " &:focus, ." + IsFocusVisibleClassName + " &:focus:hover"] = styles.rootFocused, _c["." + IsFocusVisibleClassName + " &:hover"] = {
        background: 'inherit;'
      }, _c)
    }]],
    anchorLink: styles.anchorLink,
    linkContent: [classNames.linkContent, styles.linkContent],
    linkContentMenu: [classNames.linkContentMenu, styles.linkContent, {
      justifyContent: 'center'
    }],
    icon: [classNames.icon, knownIcon && styles.iconColor, styles.icon, iconClassName, disabled && [classNames.isDisabled, styles.iconDisabled]],
    iconColor: styles.iconColor,
    checkmarkIcon: [classNames.checkmarkIcon, knownIcon && styles.checkmarkIcon, styles.icon, iconClassName],
    subMenuIcon: [classNames.subMenuIcon, styles.subMenuIcon, subMenuClassName, expanded && {
      color: theme.palette.neutralPrimary
    }, disabled && [styles.iconDisabled]],
    label: [classNames.label, styles.label],
    secondaryText: [classNames.secondaryText, styles.secondaryText],
    splitContainer: [styles.splitButtonFlexContainer, !disabled && !checked && [{
      selectors: (_d = {}, _d["." + IsFocusVisibleClassName + " &:focus, ." + IsFocusVisibleClassName + " &:focus:hover"] = styles.rootFocused, _d)
    }]]
  });
});
/**
 * Wrapper function for generating ContextualMenuItem classNames which adheres to
 * the getStyles API, but invokes memoized className generator function with
 * primitive values.
 *
 * @param props the ContextualMenuItem style props used to generate its styles.
 */

var getItemStyles = function (props) {
  var theme = props.theme,
      disabled = props.disabled,
      expanded = props.expanded,
      checked = props.checked,
      isAnchorLink = props.isAnchorLink,
      knownIcon = props.knownIcon,
      itemClassName = props.itemClassName,
      dividerClassName = props.dividerClassName,
      iconClassName = props.iconClassName,
      subMenuClassName = props.subMenuClassName,
      primaryDisabled = props.primaryDisabled,
      className = props.className; // tslint:disable-next-line:deprecation

  return getItemClassNames(theme, disabled, expanded, checked, isAnchorLink, knownIcon, itemClassName, dividerClassName, iconClassName, subMenuClassName, primaryDisabled, className);
};

/**
 * ContextualMenuItem description
 */

var ContextualMenuItem = styled(ContextualMenuItemBase, getItemStyles, undefined, {
  scope: 'ContextualMenuItem'
});

var ContextualMenuItemWrapper =
/** @class */
function (_super) {
  __extends(ContextualMenuItemWrapper, _super);

  function ContextualMenuItemWrapper(props) {
    var _this = _super.call(this, props) || this;

    _this._onItemMouseEnter = function (ev) {
      var _a = _this.props,
          item = _a.item,
          onItemMouseEnter = _a.onItemMouseEnter;

      if (onItemMouseEnter) {
        onItemMouseEnter(item, ev, ev.currentTarget);
      }
    };

    _this._onItemClick = function (ev) {
      var _a = _this.props,
          item = _a.item,
          onItemClickBase = _a.onItemClickBase;

      if (onItemClickBase) {
        onItemClickBase(item, ev, ev.currentTarget);
      }
    };

    _this._onItemMouseLeave = function (ev) {
      var _a = _this.props,
          item = _a.item,
          onItemMouseLeave = _a.onItemMouseLeave;

      if (onItemMouseLeave) {
        onItemMouseLeave(item, ev);
      }
    };

    _this._onItemKeyDown = function (ev) {
      var _a = _this.props,
          item = _a.item,
          onItemKeyDown = _a.onItemKeyDown;

      if (onItemKeyDown) {
        onItemKeyDown(item, ev);
      }
    };

    _this._onItemMouseMove = function (ev) {
      var _a = _this.props,
          item = _a.item,
          onItemMouseMove = _a.onItemMouseMove;

      if (onItemMouseMove) {
        onItemMouseMove(item, ev, ev.currentTarget);
      }
    };

    _this._getSubMenuId = function (item) {
      var getSubMenuId = _this.props.getSubMenuId;

      if (getSubMenuId) {
        return getSubMenuId(item);
      }
    };

    _this._getSubmenuTarget = function () {
      return undefined;
    };

    initializeComponentRef(_this);
    return _this;
  }

  ContextualMenuItemWrapper.prototype.shouldComponentUpdate = function (newProps) {
    return !shallowCompare(newProps, this.props);
  };

  return ContextualMenuItemWrapper;
}(React.Component);

var KTP_PREFIX = 'ktp';
var KTP_SEPARATOR = '-';
var KTP_LAYER_ID = 'ktp-layer-id';

var KeytipEvents;

(function (KeytipEvents) {
  KeytipEvents.KEYTIP_ADDED = 'keytipAdded';
  KeytipEvents.KEYTIP_REMOVED = 'keytipRemoved';
  KeytipEvents.KEYTIP_UPDATED = 'keytipUpdated';
  KeytipEvents.PERSISTED_KEYTIP_ADDED = 'persistedKeytipAdded';
  KeytipEvents.PERSISTED_KEYTIP_REMOVED = 'persistedKeytipRemoved';
  KeytipEvents.PERSISTED_KEYTIP_EXECUTE = 'persistedKeytipExecute';
  KeytipEvents.ENTER_KEYTIP_MODE = 'enterKeytipMode';
  KeytipEvents.EXIT_KEYTIP_MODE = 'exitKeytipMode';
})(KeytipEvents || (KeytipEvents = {}));

/**
 * This class is responsible for handling registering, updating, and unregistering of keytips
 */

var KeytipManager =
/** @class */
function () {
  function KeytipManager() {
    this.keytips = {};
    this.persistedKeytips = {};
    this.sequenceMapping = {}; // This is (and should be) updated and kept in sync
    // with the inKeytipMode in KeytipLayer.

    this.inKeytipMode = false; // Boolean that gets checked before entering keytip mode by the KeytipLayer
    // Used for an override in special cases (e.g. Disable entering keytip mode when a modal is shown)

    this.shouldEnterKeytipMode = true; // Boolean to indicate whether to delay firing an event to update subscribers of
    // keytip data changed.

    this.delayUpdatingKeytipChange = false;
  }
  /**
   * Static function to get singleton KeytipManager instance
   *
   * @returns {KeytipManager} Singleton KeytipManager instance
   */


  KeytipManager.getInstance = function () {
    return this._instance;
  };
  /**
   * Initialization code to set set parameters to define
   * how the KeytipManager handles keytip data.
   *
   * @param delayUpdatingKeytipChange - T/F if we should delay notifiying keytip subscribers
   * of keytip changes
   */


  KeytipManager.prototype.init = function (delayUpdatingKeytipChange) {
    this.delayUpdatingKeytipChange = delayUpdatingKeytipChange;
  };
  /**
   * Registers a keytip
   *
   * @param keytipProps - Keytip to register
   * @param persisted - T/F if this keytip should be persisted, default is false
   * @returns {string} Unique ID for this keytip
   */


  KeytipManager.prototype.register = function (keytipProps, persisted) {
    if (persisted === void 0) {
      persisted = false;
    }

    var props = keytipProps;

    if (!persisted) {
      // Add the overflowSetSequence if necessary
      props = this.addParentOverflow(keytipProps);
      this.sequenceMapping[props.keySequences.toString()] = props;
    } // Create a unique keytip


    var uniqueKeytip = this._getUniqueKtp(props); // Add to dictionary


    persisted ? this.persistedKeytips[uniqueKeytip.uniqueID] = uniqueKeytip : this.keytips[uniqueKeytip.uniqueID] = uniqueKeytip; // We only want to add something new if we are currently showing keytip mode

    if (this.inKeytipMode || !this.delayUpdatingKeytipChange) {
      var event_1 = persisted ? KeytipEvents.PERSISTED_KEYTIP_ADDED : KeytipEvents.KEYTIP_ADDED;
      EventGroup.raise(this, event_1, {
        keytip: props,
        uniqueID: uniqueKeytip.uniqueID
      });
    }

    return uniqueKeytip.uniqueID;
  };
  /**
   * Update a keytip
   *
   * @param keytipProps - Keytip to update
   * @param uniqueID - Unique ID of this keytip
   */


  KeytipManager.prototype.update = function (keytipProps, uniqueID) {
    var newKeytipProps = this.addParentOverflow(keytipProps);

    var uniqueKeytip = this._getUniqueKtp(newKeytipProps, uniqueID);

    var oldKeyTip = this.keytips[uniqueID];

    if (oldKeyTip) {
      // Update everything except 'visible'
      uniqueKeytip.keytip.visible = oldKeyTip.keytip.visible; // Update keytip in this.keytips

      this.keytips[uniqueID] = uniqueKeytip; // Update the sequence to be up to date

      delete this.sequenceMapping[oldKeyTip.keytip.keySequences.toString()];
      this.sequenceMapping[uniqueKeytip.keytip.keySequences.toString()] = uniqueKeytip.keytip; // Raise event only if we are currently in keytip mode

      if (this.inKeytipMode || !this.delayUpdatingKeytipChange) {
        EventGroup.raise(this, KeytipEvents.KEYTIP_UPDATED, {
          keytip: uniqueKeytip.keytip,
          uniqueID: uniqueKeytip.uniqueID
        });
      }
    }
  };
  /**
   * Unregisters a keytip
   *
   * @param keytipToRemove - IKeytipProps of the keytip to remove
   * @param uniqueID - Unique ID of this keytip
   * @param persisted - T/F if this keytip should be persisted, default is false
   */


  KeytipManager.prototype.unregister = function (keytipToRemove, uniqueID, persisted) {
    if (persisted === void 0) {
      persisted = false;
    }

    persisted ? delete this.persistedKeytips[uniqueID] : delete this.keytips[uniqueID];
    !persisted && delete this.sequenceMapping[keytipToRemove.keySequences.toString()];
    var event = persisted ? KeytipEvents.PERSISTED_KEYTIP_REMOVED : KeytipEvents.KEYTIP_REMOVED; // Update keytips only if we're in keytip mode

    if (this.inKeytipMode || !this.delayUpdatingKeytipChange) {
      EventGroup.raise(this, event, {
        keytip: keytipToRemove,
        uniqueID: uniqueID
      });
    }
  };
  /**
   * Manual call to enter keytip mode
   */


  KeytipManager.prototype.enterKeytipMode = function () {
    EventGroup.raise(this, KeytipEvents.ENTER_KEYTIP_MODE);
  };
  /**
   * Manual call to exit keytip mode
   */


  KeytipManager.prototype.exitKeytipMode = function () {
    EventGroup.raise(this, KeytipEvents.EXIT_KEYTIP_MODE);
  };
  /**
   * Gets all IKeytipProps from this.keytips
   *
   * @returns {IKeytipProps[]} All keytips stored in the manager
   */


  KeytipManager.prototype.getKeytips = function () {
    var _this = this;

    return Object.keys(this.keytips).map(function (key) {
      return _this.keytips[key].keytip;
    });
  };
  /**
   * Adds the overflowSetSequence to the keytipProps if its parent keytip also has it
   *
   * @param keytipProps - Keytip props to add overflowSetSequence to if necessary
   * @returns {IKeytipProps} - Modified keytip props, if needed to be modified
   */


  KeytipManager.prototype.addParentOverflow = function (keytipProps) {
    var fullSequence = __spreadArrays(keytipProps.keySequences);

    fullSequence.pop();

    if (fullSequence.length !== 0) {
      var parentKeytip = this.sequenceMapping[fullSequence.toString()];

      if (parentKeytip && parentKeytip.overflowSetSequence) {
        return __assign(__assign({}, keytipProps), {
          overflowSetSequence: parentKeytip.overflowSetSequence
        });
      }
    }

    return keytipProps;
  };
  /**
   * Public function to bind for overflow items that have a submenu
   *
   * @param overflowButtonSequences
   * @param keytipSequences
   */


  KeytipManager.prototype.menuExecute = function (overflowButtonSequences, keytipSequences) {
    EventGroup.raise(this, KeytipEvents.PERSISTED_KEYTIP_EXECUTE, {
      overflowButtonSequences: overflowButtonSequences,
      keytipSequences: keytipSequences
    });
  };
  /**
   * Creates an IUniqueKeytip object
   *
   * @param keytipProps - IKeytipProps
   * @param uniqueID - Unique ID, will default to the next unique ID if not passed
   * @returns {IUniqueKeytip} IUniqueKeytip object
   */


  KeytipManager.prototype._getUniqueKtp = function (keytipProps, uniqueID) {
    if (uniqueID === void 0) {
      uniqueID = getId();
    }

    return {
      keytip: __assign({}, keytipProps),
      uniqueID: uniqueID
    };
  };

  KeytipManager._instance = new KeytipManager();
  return KeytipManager;
}();

/**
 * Converts a whole set of KeySequences into one keytip ID, which will be the ID for the last keytip sequence specified
 * keySequences should not include the initial keytip 'start' sequence.
 *
 * @param keySequences - Full path of IKeySequences for one keytip.
 * @returns {string} String to use for the keytip ID.
 */

function sequencesToID(keySequences) {
  return keySequences.reduce(function (prevValue, keySequence) {
    return prevValue + KTP_SEPARATOR + keySequence.split('').join(KTP_SEPARATOR);
  }, KTP_PREFIX);
}
/**
 * Merges an overflow sequence with a key sequence.
 *
 * @param keySequences - Full sequence for one keytip.
 * @param overflowKeySequences - Full overflow keytip sequence.
 * @returns {string[]} Sequence that will be used by the keytip when in the overflow.
 */

function mergeOverflows(keySequences, overflowKeySequences) {
  var overflowSequenceLen = overflowKeySequences.length;

  var overflowSequence = __spreadArrays(overflowKeySequences).pop();

  var newKeySequences = __spreadArrays(keySequences);

  return addElementAtIndex(newKeySequences, overflowSequenceLen - 1, overflowSequence);
}
/**
 * Gets the aria-describedby value to put on the component with this keytip.
 *
 * @param keySequences - KeySequences of the keytip.
 * @returns {string} The aria-describedby value to set on the component with this keytip.
 */

function getAriaDescribedBy(keySequences) {
  var describedby = ' ' + KTP_LAYER_ID;

  if (!keySequences.length) {
    // Return just the layer ID
    return describedby;
  }

  return describedby + ' ' + sequencesToID(keySequences);
}

/**
 * A small element to help the target component correctly read out its aria-describedby for its Keytip
 * {@docCategory Keytips}
 */

var KeytipData =
/** @class */
function (_super) {
  __extends(KeytipData, _super);

  function KeytipData() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this._keytipManager = KeytipManager.getInstance();
    return _this;
  }

  KeytipData.prototype.componentDidMount = function () {
    // Register Keytip in KeytipManager
    if (this.props.keytipProps) {
      this._uniqueId = this._keytipManager.register(this._getKtpProps());
    }
  };

  KeytipData.prototype.componentWillUnmount = function () {
    // Unregister Keytip in KeytipManager
    this.props.keytipProps && this._keytipManager.unregister(this._getKtpProps(), this._uniqueId);
  };

  KeytipData.prototype.componentDidUpdate = function (prevProps) {
    if (prevProps.keytipProps !== this.props.keytipProps || prevProps.disabled !== this.props.disabled) {
      // If keytipProps or disabled has changed update Keytip in KeytipManager
      this.props.keytipProps && this._keytipManager.update(this._getKtpProps(), this._uniqueId);
    }
  };

  KeytipData.prototype.render = function () {
    var _a = this.props,
        children = _a.children,
        keytipProps = _a.keytipProps,
        ariaDescribedBy = _a.ariaDescribedBy;
    var nativeKeytipProps = {};

    if (keytipProps) {
      nativeKeytipProps = this._getKtpAttrs(keytipProps, ariaDescribedBy);
    }

    return children(nativeKeytipProps);
  };

  KeytipData.prototype._getKtpProps = function () {
    return __assign({
      disabled: this.props.disabled
    }, this.props.keytipProps);
  };
  /**
   * Gets the aria- and data- attributes to attach to the component
   * @param keytipProps - props for Keytip
   * @param describedByPrepend - ariaDescribedBy value to prepend
   */


  KeytipData.prototype._getKtpAttrs = function (keytipProps, describedByPrepend) {
    if (keytipProps) {
      // Add the parent overflow sequence if necessary
      var newKeytipProps = this._keytipManager.addParentOverflow(keytipProps); // Construct aria-describedby and data-ktp-id attributes and return


      var ariaDescribedBy = getAriaDescribedBy(newKeytipProps.keySequences);

      var keySequences = __spreadArrays(newKeytipProps.keySequences);

      if (newKeytipProps.overflowSetSequence) {
        keySequences = mergeOverflows(keySequences, newKeytipProps.overflowSetSequence);
      }

      var ktpId = sequencesToID(keySequences);
      return {
        'aria-describedby': mergeAriaAttributeValues(describedByPrepend, ariaDescribedBy),
        'data-ktp-target': ktpId,
        'data-ktp-execute-target': ktpId
      };
    }

    return undefined;
  };

  return KeytipData;
}(React.Component);

var ContextualMenuAnchor =
/** @class */
function (_super) {
  __extends(ContextualMenuAnchor, _super);

  function ContextualMenuAnchor() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this._anchor = React.createRef();
    _this._getMemoizedMenuButtonKeytipProps = memoizeFunction(function (keytipProps) {
      return __assign(__assign({}, keytipProps), {
        hasMenu: true
      });
    });

    _this._getSubmenuTarget = function () {
      return _this._anchor.current ? _this._anchor.current : undefined;
    };

    _this._onItemClick = function (ev) {
      var _a = _this.props,
          item = _a.item,
          onItemClick = _a.onItemClick;

      if (onItemClick) {
        onItemClick(item, ev);
      }
    };

    return _this;
  }

  ContextualMenuAnchor.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        item = _a.item,
        classNames = _a.classNames,
        index = _a.index,
        focusableElementIndex = _a.focusableElementIndex,
        totalItemCount = _a.totalItemCount,
        hasCheckmarks = _a.hasCheckmarks,
        hasIcons = _a.hasIcons,
        _b = _a.contextualMenuItemAs,
        ChildrenRenderer = _b === void 0 ? ContextualMenuItem : _b,
        expandedMenuItemKey = _a.expandedMenuItemKey,
        onItemClick = _a.onItemClick,
        openSubMenu = _a.openSubMenu,
        dismissSubMenu = _a.dismissSubMenu,
        dismissMenu = _a.dismissMenu;
    var anchorRel = item.rel;

    if (item.target && item.target.toLowerCase() === '_blank') {
      anchorRel = anchorRel ? anchorRel : 'nofollow noopener noreferrer'; // Safe default to prevent tabjacking
    }

    var subMenuId = this._getSubMenuId(item);

    var itemHasSubmenu = hasSubmenu(item);
    var nativeProps = getNativeProps(item, anchorProperties);
    var disabled = isItemDisabled(item);
    var itemProps = item.itemProps;
    var keytipProps = item.keytipProps;

    if (keytipProps && itemHasSubmenu) {
      keytipProps = this._getMemoizedMenuButtonKeytipProps(keytipProps);
    }

    return React.createElement("div", null, React.createElement(KeytipData, {
      keytipProps: item.keytipProps,
      ariaDescribedBy: nativeProps['aria-describedby'],
      disabled: disabled
    }, function (keytipAttributes) {
      return React.createElement("a", __assign({}, nativeProps, keytipAttributes, {
        ref: _this._anchor,
        href: item.href,
        target: item.target,
        rel: anchorRel,
        className: classNames.root,
        role: "menuitem",
        "aria-owns": item.key === expandedMenuItemKey ? subMenuId : undefined,
        "aria-haspopup": itemHasSubmenu || undefined,
        "aria-expanded": itemHasSubmenu ? item.key === expandedMenuItemKey : undefined,
        "aria-posinset": focusableElementIndex + 1,
        "aria-setsize": totalItemCount,
        "aria-disabled": isItemDisabled(item),
        // tslint:disable-next-line:deprecation
        style: item.style,
        onClick: _this._onItemClick,
        onMouseEnter: _this._onItemMouseEnter,
        onMouseLeave: _this._onItemMouseLeave,
        onMouseMove: _this._onItemMouseMove,
        onKeyDown: itemHasSubmenu ? _this._onItemKeyDown : undefined
      }), React.createElement(ChildrenRenderer, __assign({
        componentRef: item.componentRef,
        item: item,
        classNames: classNames,
        index: index,
        onCheckmarkClick: hasCheckmarks && onItemClick ? onItemClick : undefined,
        hasIcons: hasIcons,
        openSubMenu: openSubMenu,
        dismissSubMenu: dismissSubMenu,
        dismissMenu: dismissMenu,
        getSubmenuTarget: _this._getSubmenuTarget
      }, itemProps)));
    }));
  };

  return ContextualMenuAnchor;
}(ContextualMenuItemWrapper);

var ContextualMenuButton =
/** @class */
function (_super) {
  __extends(ContextualMenuButton, _super);

  function ContextualMenuButton() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this._btn = React.createRef();
    _this._getMemoizedMenuButtonKeytipProps = memoizeFunction(function (keytipProps) {
      return __assign(__assign({}, keytipProps), {
        hasMenu: true
      });
    });

    _this._getSubmenuTarget = function () {
      return _this._btn.current ? _this._btn.current : undefined;
    };

    return _this;
  }

  ContextualMenuButton.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        item = _a.item,
        classNames = _a.classNames,
        index = _a.index,
        focusableElementIndex = _a.focusableElementIndex,
        totalItemCount = _a.totalItemCount,
        hasCheckmarks = _a.hasCheckmarks,
        hasIcons = _a.hasIcons,
        _b = _a.contextualMenuItemAs,
        ChildrenRenderer = _b === void 0 ? ContextualMenuItem : _b,
        expandedMenuItemKey = _a.expandedMenuItemKey,
        onItemMouseDown = _a.onItemMouseDown,
        onItemClick = _a.onItemClick,
        openSubMenu = _a.openSubMenu,
        dismissSubMenu = _a.dismissSubMenu,
        dismissMenu = _a.dismissMenu;

    var subMenuId = this._getSubMenuId(item);

    var isChecked = getIsChecked(item);
    var canCheck = isChecked !== null;
    var defaultRole = getMenuItemAriaRole(item);
    var itemHasSubmenu = hasSubmenu(item);
    var itemProps = item.itemProps,
        ariaLabel = item.ariaLabel;
    var buttonNativeProperties = getNativeProps(item, buttonProperties); // Do not add the disabled attribute to the button so that it is focusable

    delete buttonNativeProperties.disabled;
    var itemButtonProperties = {
      className: classNames.root,
      onClick: this._onItemClick,
      onKeyDown: itemHasSubmenu ? this._onItemKeyDown : undefined,
      onMouseEnter: this._onItemMouseEnter,
      onMouseLeave: this._onItemMouseLeave,
      onMouseDown: function (ev) {
        return onItemMouseDown ? onItemMouseDown(item, ev) : undefined;
      },
      onMouseMove: this._onItemMouseMove,
      href: item.href,
      title: item.title,
      'aria-label': ariaLabel,
      'aria-haspopup': itemHasSubmenu || undefined,
      'aria-owns': item.key === expandedMenuItemKey ? subMenuId : undefined,
      'aria-expanded': itemHasSubmenu ? item.key === expandedMenuItemKey : undefined,
      'aria-checked': canCheck ? !!isChecked : undefined,
      'aria-posinset': focusableElementIndex + 1,
      'aria-setsize': totalItemCount,
      'aria-disabled': isItemDisabled(item),
      role: item.role || defaultRole,
      // tslint:disable-next-line:deprecation
      style: item.style
    };
    var keytipProps = item.keytipProps;

    if (keytipProps && itemHasSubmenu) {
      keytipProps = this._getMemoizedMenuButtonKeytipProps(keytipProps);
    }

    return React.createElement(KeytipData, {
      keytipProps: keytipProps,
      ariaDescribedBy: buttonNativeProperties['aria-describedby'],
      disabled: isItemDisabled(item)
    }, function (keytipAttributes) {
      return React.createElement("button", __assign({
        ref: _this._btn
      }, buttonNativeProperties, itemButtonProperties, keytipAttributes), React.createElement(ChildrenRenderer, __assign({
        componentRef: item.componentRef,
        item: item,
        classNames: classNames,
        index: index,
        onCheckmarkClick: hasCheckmarks && onItemClick ? onItemClick : undefined,
        hasIcons: hasIcons,
        openSubMenu: openSubMenu,
        dismissSubMenu: dismissSubMenu,
        dismissMenu: dismissMenu,
        getSubmenuTarget: _this._getSubmenuTarget
      }, itemProps)));
    });
  };

  return ContextualMenuButton;
}(ContextualMenuItemWrapper);

var getStyles$5 = function (props) {
  // tslint:disable-next-line:deprecation
  var theme = props.theme,
      getClassNames = props.getClassNames,
      className = props.className;

  if (!theme) {
    throw new Error('Theme is undefined or null.');
  }

  if (getClassNames) {
    var names = getClassNames(theme);
    return {
      wrapper: [names.wrapper],
      divider: [names.divider]
    };
  }

  return {
    wrapper: [{
      display: 'inline-flex',
      height: '100%',
      alignItems: 'center'
    }, className],
    divider: [{
      width: 1,
      height: '100%',
      backgroundColor: theme.palette.neutralTertiaryAlt
    }]
  };
};

var getClassNames$5 = classNamesFunction();
var VerticalDividerBase = function (props) {
  // tslint:disable-next-line:deprecation
  var styles = props.styles,
      theme = props.theme,
      deprecatedGetClassNames = props.getClassNames,
      className = props.className;
  var classNames = getClassNames$5(styles, {
    theme: theme,
    getClassNames: deprecatedGetClassNames,
    className: className
  });
  return React.createElement("span", {
    className: classNames.wrapper
  }, React.createElement("span", {
    className: classNames.divider
  }));
};

var VerticalDivider = styled(VerticalDividerBase, getStyles$5, undefined, {
  scope: 'VerticalDivider'
});

var TouchIdleDelay = 500;
/* ms */

var ContextualMenuSplitButton =
/** @class */
function (_super) {
  __extends(ContextualMenuSplitButton, _super);

  function ContextualMenuSplitButton(props) {
    var _this = _super.call(this, props) || this;

    _this._getMemoizedMenuButtonKeytipProps = memoizeFunction(function (keytipProps) {
      return __assign(__assign({}, keytipProps), {
        hasMenu: true
      });
    });

    _this._onItemKeyDown = function (ev) {
      var _a = _this.props,
          item = _a.item,
          onItemKeyDown = _a.onItemKeyDown;

      if (ev.which === KeyCodes.enter) {
        _this._executeItemClick(ev);

        ev.preventDefault();
        ev.stopPropagation();
      } else if (onItemKeyDown) {
        onItemKeyDown(item, ev);
      }
    };

    _this._getSubmenuTarget = function () {
      return _this._splitButton;
    };

    _this._onItemMouseEnterPrimary = function (ev) {
      var _a = _this.props,
          item = _a.item,
          onItemMouseEnter = _a.onItemMouseEnter;

      if (onItemMouseEnter) {
        onItemMouseEnter(__assign(__assign({}, item), {
          subMenuProps: undefined,
          items: undefined
        }), ev, _this._splitButton);
      }
    };

    _this._onItemMouseEnterIcon = function (ev) {
      var _a = _this.props,
          item = _a.item,
          onItemMouseEnter = _a.onItemMouseEnter;

      if (onItemMouseEnter) {
        onItemMouseEnter(item, ev, _this._splitButton);
      }
    };

    _this._onItemMouseMovePrimary = function (ev) {
      var _a = _this.props,
          item = _a.item,
          onItemMouseMove = _a.onItemMouseMove;

      if (onItemMouseMove) {
        onItemMouseMove(__assign(__assign({}, item), {
          subMenuProps: undefined,
          items: undefined
        }), ev, _this._splitButton);
      }
    };

    _this._onItemMouseMoveIcon = function (ev) {
      var _a = _this.props,
          item = _a.item,
          onItemMouseMove = _a.onItemMouseMove;

      if (onItemMouseMove) {
        onItemMouseMove(item, ev, _this._splitButton);
      }
    };

    _this._onIconItemClick = function (ev) {
      var _a = _this.props,
          item = _a.item,
          onItemClickBase = _a.onItemClickBase;

      if (onItemClickBase) {
        onItemClickBase(item, ev, _this._splitButton ? _this._splitButton : ev.currentTarget);
      }
    };

    _this._executeItemClick = function (ev) {
      var _a = _this.props,
          item = _a.item,
          executeItemClick = _a.executeItemClick,
          onItemClick = _a.onItemClick;

      if (item.disabled || item.isDisabled) {
        return;
      }

      if (_this._processingTouch && onItemClick) {
        return onItemClick(item, ev);
      }

      if (executeItemClick) {
        executeItemClick(item, ev);
      }
    };

    _this._onTouchStart = function (ev) {
      if (_this._splitButton && !('onpointerdown' in _this._splitButton)) {
        _this._handleTouchAndPointerEvent(ev);
      }
    };

    _this._onPointerDown = function (ev) {
      if (ev.pointerType === 'touch') {
        _this._handleTouchAndPointerEvent(ev);

        ev.preventDefault();
        ev.stopImmediatePropagation();
      }
    };

    _this._async = new Async(_this);
    _this._events = new EventGroup(_this);
    return _this;
  }

  ContextualMenuSplitButton.prototype.componentDidMount = function () {
    if (this._splitButton && 'onpointerdown' in this._splitButton) {
      this._events.on(this._splitButton, 'pointerdown', this._onPointerDown, true);
    }
  };

  ContextualMenuSplitButton.prototype.componentWillUnmount = function () {
    this._async.dispose();

    this._events.dispose();
  };

  ContextualMenuSplitButton.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        item = _a.item,
        classNames = _a.classNames,
        index = _a.index,
        focusableElementIndex = _a.focusableElementIndex,
        totalItemCount = _a.totalItemCount,
        hasCheckmarks = _a.hasCheckmarks,
        hasIcons = _a.hasIcons,
        onItemMouseLeave = _a.onItemMouseLeave,
        expandedMenuItemKey = _a.expandedMenuItemKey;
    var itemHasSubmenu = hasSubmenu(item);
    var keytipProps = item.keytipProps;

    if (keytipProps) {
      keytipProps = this._getMemoizedMenuButtonKeytipProps(keytipProps);
    }

    return React.createElement(KeytipData, {
      keytipProps: keytipProps,
      disabled: isItemDisabled(item)
    }, function (keytipAttributes) {
      return React.createElement("div", {
        "data-ktp-target": keytipAttributes['data-ktp-target'],
        ref: function (splitButton) {
          return _this._splitButton = splitButton;
        },
        role: getMenuItemAriaRole(item),
        "aria-label": item.ariaLabel,
        className: classNames.splitContainer,
        "aria-disabled": isItemDisabled(item),
        "aria-expanded": itemHasSubmenu ? item.key === expandedMenuItemKey : undefined,
        "aria-haspopup": true,
        "aria-describedby": mergeAriaAttributeValues(item.ariaDescription, keytipAttributes['aria-describedby']),
        "aria-checked": item.isChecked || item.checked,
        "aria-posinset": focusableElementIndex + 1,
        "aria-setsize": totalItemCount,
        onMouseEnter: _this._onItemMouseEnterPrimary,
        onMouseLeave: onItemMouseLeave ? onItemMouseLeave.bind(_this, __assign(__assign({}, item), {
          subMenuProps: null,
          items: null
        })) : undefined,
        onMouseMove: _this._onItemMouseMovePrimary,
        onKeyDown: _this._onItemKeyDown,
        onClick: _this._executeItemClick,
        onTouchStart: _this._onTouchStart,
        tabIndex: 0,
        "data-is-focusable": true,
        "aria-roledescription": item['aria-roledescription']
      }, _this._renderSplitPrimaryButton(item, classNames, index, hasCheckmarks, hasIcons), _this._renderSplitDivider(item), _this._renderSplitIconButton(item, classNames, index, keytipAttributes));
    });
  };

  ContextualMenuSplitButton.prototype._renderSplitPrimaryButton = function (item, // tslint:disable-next-line:deprecation
  classNames, index, hasCheckmarks, hasIcons) {
    var _a = this.props,
        _b = _a.contextualMenuItemAs,
        ChildrenRenderer = _b === void 0 ? ContextualMenuItem : _b,
        onItemClick = _a.onItemClick;
    var itemProps = {
      key: item.key,
      disabled: isItemDisabled(item) || item.primaryDisabled,
      // tslint:disable:deprecation
      name: item.name,
      text: item.text || item.name,
      secondaryText: item.secondaryText,
      // tslint:enable:deprecation
      className: classNames.splitPrimary,
      canCheck: item.canCheck,
      isChecked: item.isChecked,
      checked: item.checked,
      iconProps: item.iconProps,
      onRenderIcon: item.onRenderIcon,
      data: item.data,
      'data-is-focusable': false
    };
    var itemComponentProps = item.itemProps;
    return React.createElement("button", __assign({}, getNativeProps(itemProps, buttonProperties)), React.createElement(ChildrenRenderer, __assign({
      "data-is-focusable": false,
      item: itemProps,
      classNames: classNames,
      index: index,
      onCheckmarkClick: hasCheckmarks && onItemClick ? onItemClick : undefined,
      hasIcons: hasIcons
    }, itemComponentProps)));
  };

  ContextualMenuSplitButton.prototype._renderSplitDivider = function (item) {
    var getDividerClassNames = item.getSplitButtonVerticalDividerClassNames || getSplitButtonVerticalDividerClassNames;
    return React.createElement(VerticalDivider, {
      getClassNames: getDividerClassNames
    });
  };

  ContextualMenuSplitButton.prototype._renderSplitIconButton = function (item, classNames, // tslint:disable-line:deprecation
  index, keytipAttributes) {
    var _a = this.props,
        _b = _a.contextualMenuItemAs,
        ChildrenRenderer = _b === void 0 ? ContextualMenuItem : _b,
        onItemMouseLeave = _a.onItemMouseLeave,
        onItemMouseDown = _a.onItemMouseDown,
        openSubMenu = _a.openSubMenu,
        dismissSubMenu = _a.dismissSubMenu,
        dismissMenu = _a.dismissMenu;
    var itemProps = {
      onClick: this._onIconItemClick,
      disabled: isItemDisabled(item),
      className: classNames.splitMenu,
      subMenuProps: item.subMenuProps,
      submenuIconProps: item.submenuIconProps,
      split: true,
      key: item.key
    };

    var buttonProps = __assign(__assign({}, getNativeProps(itemProps, buttonProperties)), {
      onMouseEnter: this._onItemMouseEnterIcon,
      onMouseLeave: onItemMouseLeave ? onItemMouseLeave.bind(this, item) : undefined,
      onMouseDown: function (ev) {
        return onItemMouseDown ? onItemMouseDown(item, ev) : undefined;
      },
      onMouseMove: this._onItemMouseMoveIcon,
      'data-is-focusable': false,
      'data-ktp-execute-target': keytipAttributes['data-ktp-execute-target'],
      'aria-hidden': true
    });

    var itemComponentProps = item.itemProps;
    return React.createElement("button", __assign({}, buttonProps), React.createElement(ChildrenRenderer, __assign({
      componentRef: item.componentRef,
      item: itemProps,
      classNames: classNames,
      index: index,
      hasIcons: false,
      openSubMenu: openSubMenu,
      dismissSubMenu: dismissSubMenu,
      dismissMenu: dismissMenu,
      getSubmenuTarget: this._getSubmenuTarget
    }, itemComponentProps)));
  };

  ContextualMenuSplitButton.prototype._handleTouchAndPointerEvent = function (ev) {
    var _this = this;

    var onTap = this.props.onTap;

    if (onTap) {
      onTap(ev);
    } // If we already have an existing timeout from a previous touch/pointer event
    // cancel that timeout so we can set a new one.


    if (this._lastTouchTimeoutId) {
      this._async.clearTimeout(this._lastTouchTimeoutId);

      this._lastTouchTimeoutId = undefined;
    }

    this._processingTouch = true;
    this._lastTouchTimeoutId = this._async.setTimeout(function () {
      _this._processingTouch = false;
      _this._lastTouchTimeoutId = undefined;
    }, TouchIdleDelay);
  };

  return ContextualMenuSplitButton;
}(ContextualMenuItemWrapper);

var getClassNames$6 = classNamesFunction();
var getContextualMenuItemClassNames = classNamesFunction();
function getSubmenuItems(item) {
  return item.subMenuProps ? item.subMenuProps.items : item.items;
}
/**
 * Returns true if a list of menu items can contain a checkbox
 */

function canAnyMenuItemsCheck(items) {
  return items.some(function (item) {
    if (item.canCheck) {
      return true;
    } // If the item is a section, check if any of the items in the section can check.


    if (item.sectionProps && item.sectionProps.items.some(function (submenuItem) {
      return submenuItem.canCheck === true;
    })) {
      return true;
    }

    return false;
  });
}
var NavigationIdleDelay = 250
/* ms */
;
var COMPONENT_NAME = 'ContextualMenu';

var _getMenuItemStylesFunction = memoizeFunction(function () {
  var styles = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    styles[_i] = arguments[_i];
  }

  return function (styleProps) {
    return concatStyleSetsWithProps.apply(void 0, __spreadArrays([styleProps, getItemStyles], styles));
  };
});

var ContextualMenuBase =
/** @class */
function (_super) {
  __extends(ContextualMenuBase, _super);

  function ContextualMenuBase(props) {
    var _this = _super.call(this, props) || this;

    _this._mounted = false;

    _this.dismiss = function (ev, dismissAll) {
      var onDismiss = _this.props.onDismiss;

      if (onDismiss) {
        onDismiss(ev, dismissAll);
      }
    };

    _this._tryFocusPreviousActiveElement = function (options) {
      if (options && options.containsFocus && _this._previousActiveElement) {
        _this._previousActiveElement && _this._previousActiveElement.focus();
      }
    };

    _this._onRenderMenuList = function (menuListProps, defaultRender) {
      var indexCorrection = 0;
      return React.createElement("ul", {
        className: _this._classNames.list,
        onKeyDown: _this._onKeyDown,
        onKeyUp: _this._onKeyUp,
        role: "menu"
      }, menuListProps.items.map(function (item, index) {
        var menuItem = _this._renderMenuItem(item, index, indexCorrection, menuListProps.totalItemCount, menuListProps.hasCheckmarks, menuListProps.hasIcons);

        if (item.itemType !== ContextualMenuItemType.Divider && item.itemType !== ContextualMenuItemType.Header) {
          var indexIncrease = item.customOnRenderListLength ? item.customOnRenderListLength : 1;
          indexCorrection += indexIncrease;
        }

        return menuItem;
      }));
    };
    /**
     * !!!IMPORTANT!!! Avoid mutating `item: IContextualMenuItem` argument. It will
     * cause the menu items to always re-render because the component update is based on shallow comparison.
     */


    _this._renderMenuItem = function (item, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons) {
      var _a;

      var renderedItems = [];
      var iconProps = item.iconProps || {
        iconName: 'None'
      };
      var getItemClassNames = item.getItemClassNames,
          // tslint:disable-line:deprecation
      itemProps = item.itemProps;
      var styles = itemProps ? itemProps.styles : undefined; // We only send a dividerClassName when the item to be rendered is a divider.
      // For all other cases, the default divider style is used.

      var dividerClassName = item.itemType === ContextualMenuItemType.Divider ? item.className : undefined;
      var subMenuIconClassName = item.submenuIconProps ? item.submenuIconProps.className : ''; // tslint:disable-next-line:deprecation

      var itemClassNames; // IContextualMenuItem#getItemClassNames for backwards compatibility
      // otherwise uses mergeStyles for class names.

      if (getItemClassNames) {
        itemClassNames = getItemClassNames(_this.props.theme, isItemDisabled(item), _this.state.expandedMenuItemKey === item.key, !!getIsChecked(item), !!item.href, iconProps.iconName !== 'None', item.className, dividerClassName, iconProps.className, subMenuIconClassName, item.primaryDisabled);
      } else {
        var itemStyleProps = {
          theme: _this.props.theme,
          disabled: isItemDisabled(item),
          expanded: _this.state.expandedMenuItemKey === item.key,
          checked: !!getIsChecked(item),
          isAnchorLink: !!item.href,
          knownIcon: iconProps.iconName !== 'None',
          itemClassName: item.className,
          dividerClassName: dividerClassName,
          iconClassName: iconProps.className,
          subMenuClassName: subMenuIconClassName,
          primaryDisabled: item.primaryDisabled
        }; // We need to generate default styles then override if styles are provided
        // since the ContextualMenu currently handles item classNames.

        itemClassNames = getContextualMenuItemClassNames(_getMenuItemStylesFunction((_a = _this._classNames.subComponentStyles) === null || _a === void 0 ? void 0 : _a.menuItem, styles), itemStyleProps);
      } // tslint:disable-next-line:deprecation


      if (item.text === '-' || item.name === '-') {
        item.itemType = ContextualMenuItemType.Divider;
      }

      switch (item.itemType) {
        case ContextualMenuItemType.Divider:
          renderedItems.push(_this._renderSeparator(index, itemClassNames));
          break;

        case ContextualMenuItemType.Header:
          renderedItems.push(_this._renderSeparator(index, itemClassNames));

          var headerItem = _this._renderHeaderMenuItem(item, itemClassNames, index, hasCheckmarks, hasIcons);

          renderedItems.push(_this._renderListItem(headerItem, item.key || index, itemClassNames, item.title));
          break;

        case ContextualMenuItemType.Section:
          renderedItems.push(_this._renderSectionItem(item, itemClassNames, index, hasCheckmarks, hasIcons));
          break;

        default:
          var menuItem = _this._renderNormalItem(item, itemClassNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons);

          renderedItems.push(_this._renderListItem(menuItem, item.key || index, itemClassNames, item.title));
          break;
      }

      return renderedItems;
    };

    _this._defaultMenuItemRenderer = function (item) {
      var index = item.index,
          focusableElementIndex = item.focusableElementIndex,
          totalItemCount = item.totalItemCount,
          hasCheckmarks = item.hasCheckmarks,
          hasIcons = item.hasIcons;
      return _this._renderMenuItem(item, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons);
    };

    _this._onKeyDown = function (ev) {
      // Take note if we are processing an alt (option) or meta (command) keydown.
      // See comment in _shouldHandleKeyUp for reasoning.
      _this._lastKeyDownWasAltOrMeta = _this._isAltOrMeta(ev); // On Mac, pressing escape dismisses all levels of native context menus

      var dismissAllMenus = ev.which === KeyCodes.escape && (isMac() || isIOS());
      return _this._keyHandler(ev, _this._shouldHandleKeyDown, dismissAllMenus);
    };

    _this._shouldHandleKeyDown = function (ev) {
      return ev.which === KeyCodes.escape || _this._shouldCloseSubMenu(ev) || ev.which === KeyCodes.up && (ev.altKey || ev.metaKey);
    };

    _this._onMenuFocusCapture = function (ev) {
      if (_this.props.delayUpdateFocusOnHover) {
        _this._shouldUpdateFocusOnMouseEvent = true;
      }
    };

    _this._onKeyUp = function (ev) {
      return _this._keyHandler(ev, _this._shouldHandleKeyUp, true
      /* dismissAllMenus */
      );
    };
    /**
     * We close the menu on key up only if ALL of the following are true:
     * - Most recent key down was alt or meta (command)
     * - The alt/meta key down was NOT followed by some other key (such as down/up arrow to
     *   expand/collapse the menu)
     * - We're not on a Mac (or iOS)
     *
     * This is because on Windows, pressing alt moves focus to the application menu bar or similar,
     * closing any open context menus. There is not a similar behavior on Macs.
     */


    _this._shouldHandleKeyUp = function (ev) {
      var keyPressIsAltOrMetaAlone = _this._lastKeyDownWasAltOrMeta && _this._isAltOrMeta(ev);

      _this._lastKeyDownWasAltOrMeta = false;
      return !!keyPressIsAltOrMetaAlone && !(isIOS() || isMac());
    };
    /**
     * Calls `shouldHandleKey` to determine whether the keyboard event should be handled;
     * if so, stops event propagation and dismisses menu(s).
     * @param ev - The keyboard event.
     * @param shouldHandleKey - Returns whether we should handle this keyboard event.
     * @param dismissAllMenus - If true, dismiss all menus. Otherwise, dismiss only the current menu.
     * Only does anything if `shouldHandleKey` returns true.
     * @returns Whether the event was handled.
     */


    _this._keyHandler = function (ev, shouldHandleKey, dismissAllMenus) {
      var handled = false;

      if (shouldHandleKey(ev)) {
        _this._focusingPreviousElement = false;

        _this.dismiss(ev, dismissAllMenus);

        ev.preventDefault();
        ev.stopPropagation();
        handled = true;
      }

      return handled;
    };
    /**
     * Checks if the submenu should be closed
     */


    _this._shouldCloseSubMenu = function (ev) {
      var submenuCloseKey = getRTL$1(_this.props.theme) ? KeyCodes.right : KeyCodes.left;

      if (ev.which !== submenuCloseKey || !_this.props.isSubMenu) {
        return false;
      }

      return _this._adjustedFocusZoneProps.direction === FocusZoneDirection.vertical || !!_this._adjustedFocusZoneProps.checkForNoWrap && !shouldWrapFocus(ev.target, 'data-no-horizontal-wrap');
    };

    _this._onMenuKeyDown = function (ev) {
      // Mark as handled if onKeyDown returns true (for handling collapse cases)
      // or if we are attempting to expand a submenu
      var handled = _this._onKeyDown(ev);

      if (handled || !_this._host) {
        return;
      } // If we have a modifier key being pressed, we do not want to move focus.
      // Otherwise, handle up and down keys.


      var hasModifier = !!(ev.altKey || ev.metaKey);
      var isUp = ev.which === KeyCodes.up;
      var isDown = ev.which === KeyCodes.down;

      if (!hasModifier && (isUp || isDown)) {
        var elementToFocus = isUp ? getLastFocusable(_this._host, _this._host.lastChild, true) : getFirstFocusable(_this._host, _this._host.firstChild, true);

        if (elementToFocus) {
          elementToFocus.focus();
          ev.preventDefault();
          ev.stopPropagation();
        }
      }
    };
    /**
     * Scroll handler for the callout to make sure the mouse events
     * for updating focus are not interacting during scroll
     */


    _this._onScroll = function () {
      if (!_this._isScrollIdle && _this._scrollIdleTimeoutId !== undefined) {
        _this._async.clearTimeout(_this._scrollIdleTimeoutId);

        _this._scrollIdleTimeoutId = undefined;
      } else {
        _this._isScrollIdle = false;
      }

      _this._scrollIdleTimeoutId = _this._async.setTimeout(function () {
        _this._isScrollIdle = true;
      }, NavigationIdleDelay);
    };

    _this._onItemMouseEnterBase = function (item, ev, target) {
      if (_this._shouldIgnoreMouseEvent()) {
        return;
      }

      _this._updateFocusOnMouseEvent(item, ev, target);
    };

    _this._onItemMouseMoveBase = function (item, ev, target) {
      var targetElement = ev.currentTarget; // Always do this check to make sure we record a mouseMove if needed (even if we are timed out)

      if (_this._shouldUpdateFocusOnMouseEvent) {
        _this._gotMouseMove = true;
      } else {
        return;
      }

      if (!_this._isScrollIdle || _this._enterTimerId !== undefined || targetElement === _this._targetWindow.document.activeElement) {
        return;
      }

      _this._updateFocusOnMouseEvent(item, ev, target);
    };

    _this._onMouseItemLeave = function (item, ev) {
      if (_this._shouldIgnoreMouseEvent()) {
        return;
      }

      if (_this._enterTimerId !== undefined) {
        _this._async.clearTimeout(_this._enterTimerId);

        _this._enterTimerId = undefined;
      }

      if (_this.state.expandedMenuItemKey !== undefined) {
        return;
      }
      /**
       * IE11 focus() method forces parents to scroll to top of element.
       * Edge and IE expose a setActive() function for focusable divs that
       * sets the page focus but does not scroll the parent element.
       */


      if (_this._host.setActive) {
        try {
          _this._host.setActive();
        } catch (e) {
          /* no-op */
        }
      } else {
        _this._host.focus();
      }
    };

    _this._onItemMouseDown = function (item, ev) {
      if (item.onMouseDown) {
        item.onMouseDown(item, ev);
      }
    };

    _this._onItemClick = function (item, ev) {
      _this._onItemClickBase(item, ev, ev.currentTarget);
    };

    _this._onItemClickBase = function (item, ev, target) {
      var items = getSubmenuItems(item); // Cancel a async menu item hover timeout action from being taken and instead
      // just trigger the click event instead.

      _this._cancelSubMenuTimer();

      if (!hasSubmenu(item) && (!items || !items.length)) {
        // This is an item without a menu. Click it.
        _this._executeItemClick(item, ev);
      } else {
        if (item.key !== _this.state.expandedMenuItemKey) {
          // This has a collapsed sub menu. Expand it.
          _this.setState({
            // When Edge + Narrator are used together (regardless of if the button is in a form or not), pressing
            // "Enter" fires this method and not _onMenuKeyDown. Checking ev.nativeEvent.detail differentiates
            // between a real click event and a keypress event (detail should be the number of mouse clicks).
            // ...Plot twist! For a real click event in IE 11, detail is always 0 (Edge sets it properly to 1).
            // So we also check the pointerType property, which both Edge and IE set to "mouse" for real clicks
            // and "" for pressing "Enter" with Narrator on.
            expandedByMouseClick: ev.nativeEvent.detail !== 0 || ev.nativeEvent.pointerType === 'mouse'
          });

          _this._onItemSubMenuExpand(item, target);
        }
      }

      ev.stopPropagation();
      ev.preventDefault();
    };

    _this._onAnchorClick = function (item, ev) {
      _this._executeItemClick(item, ev);

      ev.stopPropagation();
    };

    _this._executeItemClick = function (item, ev) {
      if (item.disabled || item.isDisabled) {
        return;
      }

      var dismiss = false;

      if (item.onClick) {
        dismiss = !!item.onClick(ev, item);
      } else if (_this.props.onItemClick) {
        dismiss = !!_this.props.onItemClick(ev, item);
      }

      (dismiss || !ev.defaultPrevented) && _this.dismiss(ev, true);
    };

    _this._onItemKeyDown = function (item, ev) {
      var openKey = getRTL$1(_this.props.theme) ? KeyCodes.left : KeyCodes.right;

      if (!item.disabled && (ev.which === openKey || ev.which === KeyCodes.enter || ev.which === KeyCodes.down && (ev.altKey || ev.metaKey))) {
        _this.setState({
          expandedByMouseClick: false
        });

        _this._onItemSubMenuExpand(item, ev.currentTarget);

        ev.preventDefault();
      }
    }; // Cancel a async menu item hover timeout action from being taken and instead
    // do new upcoming behavior


    _this._cancelSubMenuTimer = function () {
      if (_this._enterTimerId !== undefined) {
        _this._async.clearTimeout(_this._enterTimerId);

        _this._enterTimerId = undefined;
      }
    };

    _this._onItemSubMenuExpand = function (item, target) {
      if (_this.state.expandedMenuItemKey !== item.key) {
        if (_this.state.expandedMenuItemKey) {
          _this._onSubMenuDismiss();
        } // Focus the target to ensure when we close it, we're focusing on the correct element.


        target.focus();

        _this.setState({
          expandedMenuItemKey: item.key,
          submenuTarget: target
        });
      }
    };
    /**
     * This function is called ASYNCHRONOUSLY, and so there is a chance it is called
     * after the component is unmounted. The _mounted property is added to prevent
     * from calling setState() after unmount. Do NOT copy this pattern in synchronous
     * code.
     */


    _this._onSubMenuDismiss = function (ev, dismissAll) {
      if (dismissAll) {
        _this.dismiss(ev, dismissAll);
      } else if (_this._mounted) {
        _this.setState({
          dismissedMenuItemKey: _this.state.expandedMenuItemKey,
          expandedMenuItemKey: undefined,
          submenuTarget: undefined
        });
      }
    };

    _this._getSubMenuId = function (item) {
      var subMenuId = _this.state.subMenuId;

      if (item.subMenuProps && item.subMenuProps.id) {
        subMenuId = item.subMenuProps.id;
      }

      return subMenuId;
    };

    _this._onPointerAndTouchEvent = function (ev) {
      _this._cancelSubMenuTimer();
    };

    _this._async = new Async(_this);
    _this._events = new EventGroup(_this);
    initializeComponentRef(_this);
    warnDeprecations(COMPONENT_NAME, props, {
      getMenuClassNames: 'styles'
    });
    _this.state = {
      contextualMenuItems: undefined,
      subMenuId: getId('ContextualMenu')
    };
    _this._id = props.id || getId('ContextualMenu');
    _this._focusingPreviousElement = false;
    _this._isScrollIdle = true;
    _this._shouldUpdateFocusOnMouseEvent = !_this.props.delayUpdateFocusOnHover;
    _this._gotMouseMove = false;
    return _this;
  }

  ContextualMenuBase.prototype.shouldComponentUpdate = function (newProps, newState) {
    if (!newProps.shouldUpdateWhenHidden && this.props.hidden && newProps.hidden) {
      // Do not update when hidden.
      return false;
    }

    return !shallowCompare(this.props, newProps) || !shallowCompare(this.state, newState);
  }; // tslint:disable-next-line function-name


  ContextualMenuBase.prototype.UNSAFE_componentWillUpdate = function (newProps) {
    if (newProps.target !== this.props.target) {
      var newTarget = newProps.target;

      this._setTargetWindowAndElement(newTarget);
    }

    if (this._isHidden(newProps) !== this._isHidden(this.props)) {
      if (this._isHidden(newProps)) {
        this._onMenuClosed();
      } else {
        this._onMenuOpened();

        this._previousActiveElement = this._targetWindow ? this._targetWindow.document.activeElement : undefined;
      }
    }

    if (newProps.delayUpdateFocusOnHover !== this.props.delayUpdateFocusOnHover) {
      // update shouldUpdateFocusOnMouseEvent to follow what was passed in
      this._shouldUpdateFocusOnMouseEvent = !newProps.delayUpdateFocusOnHover; // If shouldUpdateFocusOnMouseEvent is false, we need to reset gotMouseMove to false

      this._gotMouseMove = this._shouldUpdateFocusOnMouseEvent && this._gotMouseMove;
    }
  }; // Invoked once, both on the client and server, immediately before the initial rendering occurs.
  // tslint:disable-next-line function-name


  ContextualMenuBase.prototype.UNSAFE_componentWillMount = function () {
    var target = this.props.target;

    this._setTargetWindowAndElement(target);

    if (!this.props.hidden) {
      this._previousActiveElement = this._targetWindow ? this._targetWindow.document.activeElement : undefined;
    }
  }; // Invoked once, only on the client (not on the server), immediately after the initial rendering occurs.


  ContextualMenuBase.prototype.componentDidMount = function () {
    if (!this.props.hidden) {
      this._onMenuOpened();
    }

    this._mounted = true;
  }; // Invoked immediately before a component is unmounted from the DOM.


  ContextualMenuBase.prototype.componentWillUnmount = function () {
    if (this.props.onMenuDismissed) {
      this.props.onMenuDismissed(this.props);
    }

    this._events.dispose();

    this._async.dispose();

    this._mounted = false;
  };

  ContextualMenuBase.prototype.render = function () {
    var _this = this;

    var isBeakVisible = this.props.isBeakVisible;
    var _a = this.props,
        items = _a.items,
        labelElementId = _a.labelElementId,
        id = _a.id,
        className = _a.className,
        beakWidth = _a.beakWidth,
        directionalHint = _a.directionalHint,
        directionalHintForRTL = _a.directionalHintForRTL,
        alignTargetEdge = _a.alignTargetEdge,
        gapSpace = _a.gapSpace,
        coverTarget = _a.coverTarget,
        ariaLabel = _a.ariaLabel,
        doNotLayer = _a.doNotLayer,
        target = _a.target,
        bounds = _a.bounds,
        useTargetWidth = _a.useTargetWidth,
        useTargetAsMinWidth = _a.useTargetAsMinWidth,
        directionalHintFixed = _a.directionalHintFixed,
        shouldFocusOnMount = _a.shouldFocusOnMount,
        shouldFocusOnContainer = _a.shouldFocusOnContainer,
        title = _a.title,
        styles = _a.styles,
        theme = _a.theme,
        calloutProps = _a.calloutProps,
        _b = _a.onRenderSubMenu,
        onRenderSubMenu = _b === void 0 ? this._onRenderSubMenu : _b,
        _c = _a.onRenderMenuList,
        onRenderMenuList = _c === void 0 ? this._onRenderMenuList : _c,
        focusZoneProps = _a.focusZoneProps,
        // tslint:disable-next-line:deprecation
    getMenuClassNames = _a.getMenuClassNames;
    this._classNames = getMenuClassNames ? getMenuClassNames(theme, className) : getClassNames$6(styles, {
      theme: theme,
      className: className
    });
    var hasIcons = itemsHaveIcons(items);

    function itemsHaveIcons(contextualMenuItems) {
      for (var _i = 0, contextualMenuItems_1 = contextualMenuItems; _i < contextualMenuItems_1.length; _i++) {
        var item = contextualMenuItems_1[_i];

        if (!!item.iconProps) {
          return true;
        }

        if (item.itemType === ContextualMenuItemType.Section && item.sectionProps && itemsHaveIcons(item.sectionProps.items)) {
          return true;
        }
      }

      return false;
    }

    this._adjustedFocusZoneProps = __assign(__assign({}, focusZoneProps), {
      direction: this._getFocusZoneDirection()
    });
    var hasCheckmarks = canAnyMenuItemsCheck(items);
    var submenuProps = this.state.expandedMenuItemKey && this.props.hidden !== true ? this._getSubmenuProps() : null;
    isBeakVisible = isBeakVisible === undefined ? this.props.responsiveMode <= ResponsiveMode.medium : isBeakVisible;
    /**
     * When useTargetWidth is true, get the width of the target element and apply it for the context menu container
     */

    var contextMenuStyle;
    var targetAsHtmlElement = this._target;

    if ((useTargetWidth || useTargetAsMinWidth) && targetAsHtmlElement && targetAsHtmlElement.offsetWidth) {
      var targetBoundingRect = targetAsHtmlElement.getBoundingClientRect();
      var targetWidth = targetBoundingRect.width - 2
      /* Accounts for 1px border */
      ;

      if (useTargetWidth) {
        contextMenuStyle = {
          width: targetWidth
        };
      } else if (useTargetAsMinWidth) {
        contextMenuStyle = {
          minWidth: targetWidth
        };
      }
    } // The menu should only return if items were provided, if no items were provided then it should not appear.


    if (items && items.length > 0) {
      var totalItemCount = 0;

      for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];

        if (item.itemType !== ContextualMenuItemType.Divider && item.itemType !== ContextualMenuItemType.Header) {
          var itemCount = item.customOnRenderListLength ? item.customOnRenderListLength : 1;
          totalItemCount += itemCount;
        }
      }

      var calloutStyles = this._classNames.subComponentStyles ? this._classNames.subComponentStyles.callout : undefined;
      return React.createElement(Callout, __assign({
        styles: calloutStyles,
        onRestoreFocus: this._tryFocusPreviousActiveElement
      }, calloutProps, {
        target: target,
        isBeakVisible: isBeakVisible,
        beakWidth: beakWidth,
        directionalHint: directionalHint,
        directionalHintForRTL: directionalHintForRTL,
        gapSpace: gapSpace,
        coverTarget: coverTarget,
        doNotLayer: doNotLayer,
        className: css('ms-ContextualMenu-Callout', calloutProps && calloutProps.className),
        setInitialFocus: shouldFocusOnMount,
        onDismiss: this.props.onDismiss,
        onScroll: this._onScroll,
        bounds: bounds,
        directionalHintFixed: directionalHintFixed,
        alignTargetEdge: alignTargetEdge,
        hidden: this.props.hidden
      }), React.createElement("div", {
        "aria-label": ariaLabel,
        "aria-labelledby": labelElementId,
        style: contextMenuStyle,
        ref: function (host) {
          return _this._host = host;
        },
        id: id,
        className: this._classNames.container,
        tabIndex: shouldFocusOnContainer ? 0 : -1,
        onKeyDown: this._onMenuKeyDown,
        onKeyUp: this._onKeyUp,
        onFocusCapture: this._onMenuFocusCapture
      }, title && React.createElement("div", {
        className: this._classNames.title
      }, " ", title, " "), items && items.length ? React.createElement(FocusZone, __assign({}, this._adjustedFocusZoneProps, {
        className: this._classNames.root,
        isCircularNavigation: true,
        handleTabKey: FocusZoneTabbableElements.all
      }), onRenderMenuList({
        items: items,
        totalItemCount: totalItemCount,
        hasCheckmarks: hasCheckmarks,
        hasIcons: hasIcons,
        defaultMenuItemRenderer: this._defaultMenuItemRenderer
      }, this._onRenderMenuList)) : null, submenuProps && onRenderSubMenu(submenuProps, this._onRenderSubMenu)));
    } else {
      return null;
    }
  };
  /**
   * Return whether the contextual menu is hidden.
   * Undefined value for hidden is equivalent to hidden being false.
   * @param props - Props for the component
   */


  ContextualMenuBase.prototype._isHidden = function (props) {
    return !!props.hidden;
  };

  ContextualMenuBase.prototype._onMenuOpened = function () {
    this._events.on(this._targetWindow, 'resize', this.dismiss);

    this._shouldUpdateFocusOnMouseEvent = !this.props.delayUpdateFocusOnHover;
    this._gotMouseMove = false;
    this.props.onMenuOpened && this.props.onMenuOpened(this.props);
  };

  ContextualMenuBase.prototype._onMenuClosed = function () {
    this._events.off(this._targetWindow, 'resize', this.dismiss); // This is kept for backwards compatability with hidden for right now.
    // This preserves the way that this behaved in the past
    // TODO find a better way to handle this by using the same conventions that
    // Popup uses to determine if focus is contained when dismissal occurs


    this._tryFocusPreviousActiveElement({
      containsFocus: this._focusingPreviousElement,
      originalElement: this._previousActiveElement
    });

    if (this.props.onMenuDismissed) {
      this.props.onMenuDismissed(this.props);
    }

    this._shouldUpdateFocusOnMouseEvent = !this.props.delayUpdateFocusOnHover; // We need to dismiss any submenu related state properties,
    // so that when the menu is shown again, the submenu is collapsed

    this.setState({
      expandedByMouseClick: undefined,
      dismissedMenuItemKey: undefined,
      expandedMenuItemKey: undefined,
      submenuTarget: undefined
    });
  };
  /**
   * Gets the focusZoneDirection by using the arrowDirection if specified,
   * the direction specificed in the focusZoneProps, or defaults to FocusZoneDirection.vertical
   */


  ContextualMenuBase.prototype._getFocusZoneDirection = function () {
    var focusZoneProps = this.props.focusZoneProps;
    return focusZoneProps && focusZoneProps.direction !== undefined ? focusZoneProps.direction : FocusZoneDirection.vertical;
  };

  ContextualMenuBase.prototype._onRenderSubMenu = function (subMenuProps, defaultRender) {
    throw Error('ContextualMenuBase: onRenderSubMenu callback is null or undefined. ' + 'Please ensure to set `onRenderSubMenu` property either manually or with `styled` helper.');
  };

  ContextualMenuBase.prototype._renderSectionItem = function (sectionItem, // tslint:disable-next-line:deprecation
  menuClassNames, index, hasCheckmarks, hasIcons) {
    var _this = this;

    var sectionProps = sectionItem.sectionProps;

    if (!sectionProps) {
      return;
    }

    var headerItem;
    var groupProps;

    if (sectionProps.title) {
      // Since title is a user-facing string, it needs to be stripped of whitespace in order to build a valid element ID
      var id = this._id + sectionProps.title.replace(/\s/g, '');
      var headerContextualMenuItem = {
        key: "section-" + sectionProps.title + "-title",
        itemType: ContextualMenuItemType.Header,
        text: sectionProps.title,
        id: id
      };
      groupProps = {
        role: 'group',
        'aria-labelledby': id
      };
      headerItem = this._renderHeaderMenuItem(headerContextualMenuItem, menuClassNames, index, hasCheckmarks, hasIcons);
    }

    if (sectionProps.items && sectionProps.items.length > 0) {
      return React.createElement("li", {
        role: "presentation",
        key: sectionProps.key || sectionItem.key || "section-" + index
      }, React.createElement("div", __assign({}, groupProps), React.createElement("ul", {
        className: this._classNames.list
      }, sectionProps.topDivider && this._renderSeparator(index, menuClassNames, true, true), headerItem && this._renderListItem(headerItem, sectionItem.key || index, menuClassNames, sectionItem.title), sectionProps.items.map(function (contextualMenuItem, itemsIndex) {
        return _this._renderMenuItem(contextualMenuItem, itemsIndex, itemsIndex, sectionProps.items.length, hasCheckmarks, hasIcons);
      }), sectionProps.bottomDivider && this._renderSeparator(index, menuClassNames, false, true))));
    }
  };

  ContextualMenuBase.prototype._renderListItem = function (content, key, classNames, // tslint:disable-line:deprecation
  title) {
    return React.createElement("li", {
      role: "presentation",
      title: title,
      key: key,
      className: classNames.item
    }, content);
  };

  ContextualMenuBase.prototype._renderSeparator = function (index, classNames, // tslint:disable-line:deprecation
  top, fromSection) {
    if (fromSection || index > 0) {
      return React.createElement("li", {
        role: "separator",
        key: 'separator-' + index + (top === undefined ? '' : top ? '-top' : '-bottom'),
        className: classNames.divider,
        "aria-hidden": "true"
      });
    }

    return null;
  };

  ContextualMenuBase.prototype._renderNormalItem = function (item, classNames, // tslint:disable-line:deprecation
  index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons) {
    if (item.onRender) {
      return item.onRender(__assign({
        'aria-posinset': focusableElementIndex + 1,
        'aria-setsize': totalItemCount
      }, item), this.dismiss);
    }

    if (item.href) {
      return this._renderAnchorMenuItem(item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons);
    }

    if (item.split && hasSubmenu(item)) {
      return this._renderSplitButton(item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons);
    }

    return this._renderButtonItem(item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons);
  };

  ContextualMenuBase.prototype._renderHeaderMenuItem = function (item, // tslint:disable-next-line:deprecation
  classNames, index, hasCheckmarks, hasIcons) {
    var _a = this.props.contextualMenuItemAs,
        ChildrenRenderer = _a === void 0 ? ContextualMenuItem : _a;
    var itemProps = item.itemProps,
        id = item.id;
    var divHtmlProperties = itemProps && getNativeProps(itemProps, divProperties);
    return (// tslint:disable-next-line:deprecation
      React.createElement("div", __assign({
        id: id,
        className: this._classNames.header
      }, divHtmlProperties, {
        style: item.style
      }), React.createElement(ChildrenRenderer, __assign({
        item: item,
        classNames: classNames,
        index: index,
        onCheckmarkClick: hasCheckmarks ? this._onItemClick : undefined,
        hasIcons: hasIcons
      }, itemProps)))
    );
  };

  ContextualMenuBase.prototype._renderAnchorMenuItem = function (item, // tslint:disable-next-line:deprecation
  classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons) {
    var contextualMenuItemAs = this.props.contextualMenuItemAs;
    var expandedMenuItemKey = this.state.expandedMenuItemKey;
    return React.createElement(ContextualMenuAnchor, {
      item: item,
      classNames: classNames,
      index: index,
      focusableElementIndex: focusableElementIndex,
      totalItemCount: totalItemCount,
      hasCheckmarks: hasCheckmarks,
      hasIcons: hasIcons,
      contextualMenuItemAs: contextualMenuItemAs,
      onItemMouseEnter: this._onItemMouseEnterBase,
      onItemMouseLeave: this._onMouseItemLeave,
      onItemMouseMove: this._onItemMouseMoveBase,
      onItemMouseDown: this._onItemMouseDown,
      executeItemClick: this._executeItemClick,
      onItemClick: this._onAnchorClick,
      onItemKeyDown: this._onItemKeyDown,
      getSubMenuId: this._getSubMenuId,
      expandedMenuItemKey: expandedMenuItemKey,
      openSubMenu: this._onItemSubMenuExpand,
      dismissSubMenu: this._onSubMenuDismiss,
      dismissMenu: this.dismiss
    });
  };

  ContextualMenuBase.prototype._renderButtonItem = function (item, // tslint:disable-next-line:deprecation
  classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons) {
    var contextualMenuItemAs = this.props.contextualMenuItemAs;
    var expandedMenuItemKey = this.state.expandedMenuItemKey;
    return React.createElement(ContextualMenuButton, {
      item: item,
      classNames: classNames,
      index: index,
      focusableElementIndex: focusableElementIndex,
      totalItemCount: totalItemCount,
      hasCheckmarks: hasCheckmarks,
      hasIcons: hasIcons,
      contextualMenuItemAs: contextualMenuItemAs,
      onItemMouseEnter: this._onItemMouseEnterBase,
      onItemMouseLeave: this._onMouseItemLeave,
      onItemMouseMove: this._onItemMouseMoveBase,
      onItemMouseDown: this._onItemMouseDown,
      executeItemClick: this._executeItemClick,
      onItemClick: this._onItemClick,
      onItemClickBase: this._onItemClickBase,
      onItemKeyDown: this._onItemKeyDown,
      getSubMenuId: this._getSubMenuId,
      expandedMenuItemKey: expandedMenuItemKey,
      openSubMenu: this._onItemSubMenuExpand,
      dismissSubMenu: this._onSubMenuDismiss,
      dismissMenu: this.dismiss
    });
  };

  ContextualMenuBase.prototype._renderSplitButton = function (item, // tslint:disable-next-line:deprecation
  classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons) {
    var contextualMenuItemAs = this.props.contextualMenuItemAs;
    var expandedMenuItemKey = this.state.expandedMenuItemKey;
    return React.createElement(ContextualMenuSplitButton, {
      item: item,
      classNames: classNames,
      index: index,
      focusableElementIndex: focusableElementIndex,
      totalItemCount: totalItemCount,
      hasCheckmarks: hasCheckmarks,
      hasIcons: hasIcons,
      contextualMenuItemAs: contextualMenuItemAs,
      onItemMouseEnter: this._onItemMouseEnterBase,
      onItemMouseLeave: this._onMouseItemLeave,
      onItemMouseMove: this._onItemMouseMoveBase,
      onItemMouseDown: this._onItemMouseDown,
      executeItemClick: this._executeItemClick,
      onItemClick: this._onItemClick,
      onItemClickBase: this._onItemClickBase,
      onItemKeyDown: this._onItemKeyDown,
      openSubMenu: this._onItemSubMenuExpand,
      dismissSubMenu: this._onSubMenuDismiss,
      dismissMenu: this.dismiss,
      expandedMenuItemKey: expandedMenuItemKey,
      onTap: this._onPointerAndTouchEvent
    });
  };
  /**
   * Returns true if the key for the event is alt (Mac option) or meta (Mac command).
   */


  ContextualMenuBase.prototype._isAltOrMeta = function (ev) {
    return ev.which === KeyCodes.alt || ev.key === 'Meta';
  };

  ContextualMenuBase.prototype._shouldIgnoreMouseEvent = function () {
    return !this._isScrollIdle || !this._gotMouseMove;
  };
  /**
   * Handles updating focus when mouseEnter or mouseMove fire.
   * As part of updating focus, This function will also update
   * the expand/collapse state accordingly.
   */


  ContextualMenuBase.prototype._updateFocusOnMouseEvent = function (item, ev, target) {
    var _this = this;

    var targetElement = target ? target : ev.currentTarget;
    var _a = this.props.subMenuHoverDelay,
        timeoutDuration = _a === void 0 ? NavigationIdleDelay : _a;

    if (item.key === this.state.expandedMenuItemKey) {
      return;
    }

    if (this._enterTimerId !== undefined) {
      this._async.clearTimeout(this._enterTimerId);

      this._enterTimerId = undefined;
    } // If the menu is not expanded we can update focus without any delay


    if (this.state.expandedMenuItemKey === undefined) {
      targetElement.focus();
    } // Delay updating expanding/dismissing the submenu
    // and only set focus if we have not already done so


    if (hasSubmenu(item)) {
      ev.stopPropagation();
      this._enterTimerId = this._async.setTimeout(function () {
        targetElement.focus();

        _this.setState({
          expandedByMouseClick: true
        });

        _this._onItemSubMenuExpand(item, targetElement);

        _this._enterTimerId = undefined;
      }, timeoutDuration);
    } else {
      this._enterTimerId = this._async.setTimeout(function () {
        _this._onSubMenuDismiss(ev);

        targetElement.focus();
        _this._enterTimerId = undefined;
      }, timeoutDuration);
    }
  };

  ContextualMenuBase.prototype._getSubmenuProps = function () {
    var _a = this.state,
        submenuTarget = _a.submenuTarget,
        expandedMenuItemKey = _a.expandedMenuItemKey;

    var item = this._findItemByKey(expandedMenuItemKey);

    var submenuProps = null;

    if (item) {
      submenuProps = {
        items: getSubmenuItems(item),
        target: submenuTarget,
        onDismiss: this._onSubMenuDismiss,
        isSubMenu: true,
        id: this.state.subMenuId,
        shouldFocusOnMount: true,
        shouldFocusOnContainer: this.state.expandedByMouseClick,
        directionalHint: getRTL$1(this.props.theme) ? DirectionalHint.leftTopEdge : DirectionalHint.rightTopEdge,
        className: this.props.className,
        gapSpace: 0,
        isBeakVisible: false
      };

      if (item.subMenuProps) {
        assign(submenuProps, item.subMenuProps);
      }
    }

    return submenuProps;
  };

  ContextualMenuBase.prototype._findItemByKey = function (key) {
    var items = this.props.items;
    return this._findItemByKeyFromItems(key, items);
  };
  /**
   * Returns the item that mathes a given key if any.
   * @param key - The key of the item to match
   * @param items - The items to look for the key
   */


  ContextualMenuBase.prototype._findItemByKeyFromItems = function (key, items) {
    for (var _i = 0, items_2 = items; _i < items_2.length; _i++) {
      var item = items_2[_i];

      if (item.itemType === ContextualMenuItemType.Section && item.sectionProps) {
        var match = this._findItemByKeyFromItems(key, item.sectionProps.items);

        if (match) {
          return match;
        }
      } else if (item.key && item.key === key) {
        return item;
      }
    }
  };

  ContextualMenuBase.prototype._setTargetWindowAndElement = function (target) {
    var currentElement = this._host;

    if (target) {
      if (typeof target === 'string') {
        var currentDoc = getDocument(currentElement);
        this._target = currentDoc ? currentDoc.querySelector(target) : null;
        this._targetWindow = getWindow(currentElement);
      } else if (!!target.stopPropagation) {
        this._targetWindow = getWindow(target.target);
        this._target = target;
      } else if ( // tslint:disable-next-line:deprecation
      (target.left !== undefined || target.x !== undefined) && ( // tslint:disable-next-line:deprecation
      target.top !== undefined || target.y !== undefined)) {
        this._targetWindow = getWindow(currentElement);
        this._target = target;
      } else if (target.current !== undefined) {
        this._target = target.current;
        this._targetWindow = getWindow(this._target);
      } else {
        var targetElement = target;
        this._targetWindow = getWindow(targetElement);
        this._target = target;
      }
    } else {
      this._targetWindow = getWindow(currentElement);
    }
  }; // The default ContextualMenu properties have no items and beak, the default submenu direction is right and top.


  ContextualMenuBase.defaultProps = {
    items: [],
    shouldFocusOnMount: true,
    gapSpace: 0,
    directionalHint: DirectionalHint.bottomAutoEdge,
    beakWidth: 16
  };
  ContextualMenuBase = __decorate([withResponsiveMode], ContextualMenuBase);
  return ContextualMenuBase;
}(React.Component);

var GlobalClassNames$5 = {
  root: 'ms-ContextualMenu',
  container: 'ms-ContextualMenu-container',
  list: 'ms-ContextualMenu-list',
  header: 'ms-ContextualMenu-header',
  title: 'ms-ContextualMenu-title',
  isopen: 'is-open'
};
var getStyles$6 = function (props) {
  var className = props.className,
      theme = props.theme;
  var classNames = getGlobalClassNames(GlobalClassNames$5, theme);
  var fonts = theme.fonts,
      semanticColors = theme.semanticColors,
      effects = theme.effects;
  return {
    root: [theme.fonts.medium, classNames.root, classNames.isopen, {
      backgroundColor: semanticColors.menuBackground,
      minWidth: '180px'
    }, className],
    container: [classNames.container, {
      selectors: {
        ':focus': {
          outline: 0
        }
      }
    }],
    list: [classNames.list, classNames.isopen, {
      listStyleType: 'none',
      margin: '0',
      padding: '0'
    }],
    header: [classNames.header, fonts.small, {
      fontWeight: FontWeights.semibold,
      color: semanticColors.menuHeader,
      background: 'none',
      backgroundColor: 'transparent',
      border: 'none',
      height: CONTEXTUAL_MENU_ITEM_HEIGHT,
      lineHeight: CONTEXTUAL_MENU_ITEM_HEIGHT,
      cursor: 'default',
      padding: '0px 6px',
      userSelect: 'none',
      textAlign: 'left'
    }],
    title: [classNames.title, {
      fontSize: fonts.mediumPlus.fontSize,
      paddingRight: '14px',
      paddingLeft: '14px',
      paddingBottom: '5px',
      paddingTop: '5px',
      backgroundColor: semanticColors.menuItemBackgroundPressed
    }],
    subComponentStyles: {
      callout: {
        root: {
          boxShadow: effects.elevation8
        }
      },
      menuItem: {}
    }
  };
};

var LocalContextualMenu;

function onRenderSubMenu(subMenuProps) {
  return React.createElement(LocalContextualMenu, __assign({}, subMenuProps));
}

LocalContextualMenu = styled(ContextualMenuBase, getStyles$6, function () {
  return {
    onRenderSubMenu: onRenderSubMenu
  };
}, {
  scope: 'ContextualMenu'
});
/**
 * ContextualMenu description
 */

var ContextualMenu = LocalContextualMenu;

var ButtonGlobalClassNames = {
  msButton: 'ms-Button',
  msButtonHasMenu: 'ms-Button--hasMenu',
  msButtonIcon: 'ms-Button-icon',
  msButtonMenuIcon: 'ms-Button-menuIcon',
  msButtonLabel: 'ms-Button-label',
  msButtonDescription: 'ms-Button-description',
  msButtonScreenReaderText: 'ms-Button-screenReaderText',
  msButtonFlexContainer: 'ms-Button-flexContainer',
  msButtonTextContainer: 'ms-Button-textContainer'
};
var getBaseButtonClassNames = memoizeFunction(function (theme, styles, className, variantClassName, iconClassName, menuIconClassName, disabled, hasMenu, checked, expanded, isSplit) {
  var _a, _b;

  var classNames = getGlobalClassNames(ButtonGlobalClassNames, theme || {});
  var isExpanded = expanded && !isSplit;
  return mergeStyleSets({
    root: [classNames.msButton, styles.root, variantClassName, checked && ['is-checked', styles.rootChecked], isExpanded && ['is-expanded', styles.rootExpanded, {
      selectors: (_a = {}, _a[":hover ." + classNames.msButtonIcon] = styles.iconExpandedHovered, // menuIcon falls back to rootExpandedHovered to support original behavior
      _a[":hover ." + classNames.msButtonMenuIcon] = styles.menuIconExpandedHovered || styles.rootExpandedHovered, _a[':hover'] = styles.rootExpandedHovered, _a)
    }], hasMenu && [ButtonGlobalClassNames.msButtonHasMenu, styles.rootHasMenu], disabled && ['is-disabled', styles.rootDisabled], !disabled && !isExpanded && !checked && {
      selectors: (_b = {
        ':hover': styles.rootHovered
      }, _b[":hover ." + classNames.msButtonLabel] = styles.labelHovered, _b[":hover ." + classNames.msButtonIcon] = styles.iconHovered, _b[":hover ." + classNames.msButtonDescription] = styles.descriptionHovered, _b[":hover ." + classNames.msButtonMenuIcon] = styles.menuIconHovered, _b[':focus'] = styles.rootFocused, _b[':active'] = styles.rootPressed, _b[":active ." + classNames.msButtonIcon] = styles.iconPressed, _b[":active ." + classNames.msButtonDescription] = styles.descriptionPressed, _b[":active ." + classNames.msButtonMenuIcon] = styles.menuIconPressed, _b)
    }, disabled && checked && [styles.rootCheckedDisabled], !disabled && checked && {
      selectors: {
        ':hover': styles.rootCheckedHovered,
        ':active': styles.rootCheckedPressed
      }
    }, className],
    flexContainer: [classNames.msButtonFlexContainer, styles.flexContainer],
    textContainer: [classNames.msButtonTextContainer, styles.textContainer],
    icon: [classNames.msButtonIcon, iconClassName, styles.icon, isExpanded && styles.iconExpanded, checked && styles.iconChecked, disabled && styles.iconDisabled],
    label: [classNames.msButtonLabel, styles.label, checked && styles.labelChecked, disabled && styles.labelDisabled],
    menuIcon: [classNames.msButtonMenuIcon, menuIconClassName, styles.menuIcon, checked && styles.menuIconChecked, disabled && !isSplit && styles.menuIconDisabled, !disabled && !isExpanded && !checked && {
      selectors: {
        ':hover': styles.menuIconHovered,
        ':active': styles.menuIconPressed
      }
    }, isExpanded && ['is-expanded', styles.menuIconExpanded]],
    description: [classNames.msButtonDescription, styles.description, checked && styles.descriptionChecked, disabled && styles.descriptionDisabled],
    screenReaderText: [classNames.msButtonScreenReaderText, styles.screenReaderText]
  });
});

var getClassNames$7 = memoizeFunction(function (styles, disabled, expanded, checked, primaryDisabled) {
  return {
    root: mergeStyles(styles.splitButtonMenuButton, expanded && [styles.splitButtonMenuButtonExpanded], disabled && [styles.splitButtonMenuButtonDisabled], checked && !disabled && [styles.splitButtonMenuButtonChecked]),
    splitButtonContainer: mergeStyles(styles.splitButtonContainer, !disabled && checked && [styles.splitButtonContainerChecked, {
      selectors: {
        ':hover': styles.splitButtonContainerCheckedHovered
      }
    }], !disabled && !checked && [{
      selectors: {
        ':hover': styles.splitButtonContainerHovered,
        ':focus': styles.splitButtonContainerFocused
      }
    }], disabled && styles.splitButtonContainerDisabled),
    icon: mergeStyles(styles.splitButtonMenuIcon, disabled && styles.splitButtonMenuIconDisabled, !disabled && primaryDisabled && styles.splitButtonMenuIcon),
    flexContainer: mergeStyles(styles.splitButtonFlexContainer),
    divider: mergeStyles(styles.splitButtonDivider, (primaryDisabled || disabled) && styles.splitButtonDividerDisabled)
  };
});

var TouchIdleDelay$1 = 500;
/* ms */

var COMPONENT_NAME$1 = 'BaseButton';
/**
 * {@docCategory Button}
 */

var BaseButton =
/** @class */
function (_super) {
  __extends(BaseButton, _super);

  function BaseButton(props) {
    var _this = _super.call(this, props) || this;

    _this._buttonElement = React.createRef();
    _this._splitButtonContainer = React.createRef();
    _this._renderedVisibleMenu = false;
    _this._getMemoizedMenuButtonKeytipProps = memoizeFunction(function (keytipProps) {
      return __assign(__assign({}, keytipProps), {
        hasMenu: true
      });
    });

    _this._onRenderIcon = function (buttonProps, defaultRender) {
      var iconProps = _this.props.iconProps;

      if (iconProps && (iconProps.iconName !== undefined || iconProps.imageProps)) {
        var className = iconProps.className,
            imageProps = iconProps.imageProps,
            rest = __rest(iconProps, ["className", "imageProps"]); // If the styles prop is specified as part of iconProps, fall back to regular Icon as FontIcon and ImageIcon
        // do not have this prop.


        if (iconProps.styles) {
          return React.createElement(Icon, __assign({
            className: css(_this._classNames.icon, className),
            imageProps: imageProps
          }, rest));
        }

        if (iconProps.iconName) {
          return React.createElement(FontIcon, __assign({
            className: css(_this._classNames.icon, className)
          }, rest));
        }

        if (imageProps) {
          return React.createElement(ImageIcon, __assign({
            className: css(_this._classNames.icon, className),
            imageProps: imageProps
          }, rest));
        }
      }

      return null;
    };

    _this._onRenderTextContents = function () {
      var _a = _this.props,
          text = _a.text,
          children = _a.children,
          // tslint:disable-next-line:deprecation
      _b = _a.secondaryText,
          // tslint:disable-next-line:deprecation
      secondaryText = _b === void 0 ? _this.props.description : _b,
          _c = _a.onRenderText,
          onRenderText = _c === void 0 ? _this._onRenderText : _c,
          _d = _a.onRenderDescription,
          onRenderDescription = _d === void 0 ? _this._onRenderDescription : _d;

      if (text || typeof children === 'string' || secondaryText) {
        return React.createElement("span", {
          className: _this._classNames.textContainer
        }, onRenderText(_this.props, _this._onRenderText), onRenderDescription(_this.props, _this._onRenderDescription));
      }

      return [onRenderText(_this.props, _this._onRenderText), onRenderDescription(_this.props, _this._onRenderDescription)];
    };

    _this._onRenderText = function () {
      var text = _this.props.text;
      var children = _this.props.children; // For backwards compat, we should continue to take in the text content from children.

      if (text === undefined && typeof children === 'string') {
        text = children;
      }

      if (_this._hasText()) {
        return React.createElement("span", {
          key: _this._labelId,
          className: _this._classNames.label,
          id: _this._labelId
        }, text);
      }

      return null;
    };

    _this._onRenderChildren = function () {
      var children = _this.props.children; // If children is just a string, either it or the text will be rendered via onRenderLabel
      // If children is another component, it will be rendered after text

      if (typeof children === 'string') {
        return null;
      }

      return children;
    };

    _this._onRenderDescription = function (props) {
      // tslint:disable-next-line:deprecation
      var _a = props.secondaryText,
          secondaryText = _a === void 0 ? _this.props.description : _a; // ms-Button-description is only shown when the button type is compound.
      // In other cases it will not be displayed.

      return secondaryText ? React.createElement("span", {
        key: _this._descriptionId,
        className: _this._classNames.description,
        id: _this._descriptionId
      }, secondaryText) : null;
    };

    _this._onRenderAriaDescription = function () {
      var ariaDescription = _this.props.ariaDescription; // If ariaDescription is given, descriptionId will be assigned to ariaDescriptionSpan,
      // otherwise it will be assigned to descriptionSpan.

      return ariaDescription ? React.createElement("span", {
        className: _this._classNames.screenReaderText,
        id: _this._ariaDescriptionId
      }, ariaDescription) : null;
    };

    _this._onRenderMenuIcon = function (props) {
      var menuIconProps = _this.props.menuIconProps;
      return React.createElement(FontIcon, __assign({
        iconName: "ChevronDown"
      }, menuIconProps, {
        className: _this._classNames.menuIcon
      }));
    };

    _this._onRenderMenu = function (menuProps) {
      var persistMenu = _this.props.persistMenu;
      var menuHidden = _this.state.menuHidden;
      var MenuType = _this.props.menuAs || ContextualMenu; // the accessible menu label (accessible name) has a relationship to the button.
      // If the menu props do not specify an explicit value for aria-label or aria-labelledBy,
      // AND the button has text, we'll set the menu aria-labelledBy to the text element id.

      if (!menuProps.ariaLabel && !menuProps.labelElementId && _this._hasText()) {
        menuProps = __assign(__assign({}, menuProps), {
          labelElementId: _this._labelId
        });
      }

      return React.createElement(MenuType, __assign({
        id: _this._labelId + '-menu',
        directionalHint: DirectionalHint.bottomLeftEdge
      }, menuProps, {
        shouldFocusOnContainer: _this._menuShouldFocusOnContainer,
        shouldFocusOnMount: _this._menuShouldFocusOnMount,
        hidden: persistMenu ? menuHidden : undefined,
        className: css('ms-BaseButton-menuhost', menuProps.className),
        target: _this._isSplitButton ? _this._splitButtonContainer.current : _this._buttonElement.current,
        onDismiss: _this._onDismissMenu
      }));
    };

    _this._onDismissMenu = function (ev) {
      var menuProps = _this.props.menuProps;

      if (menuProps && menuProps.onDismiss) {
        menuProps.onDismiss(ev);
      }

      if (!ev || !ev.defaultPrevented) {
        _this._dismissMenu();
      }
    };

    _this._dismissMenu = function () {
      _this._menuShouldFocusOnMount = undefined;
      _this._menuShouldFocusOnContainer = undefined;

      _this.setState({
        menuHidden: true
      });
    };

    _this._openMenu = function (shouldFocusOnContainer, shouldFocusOnMount) {
      if (shouldFocusOnMount === void 0) {
        shouldFocusOnMount = true;
      }

      if (_this.props.menuProps) {
        _this._menuShouldFocusOnContainer = shouldFocusOnContainer;
        _this._menuShouldFocusOnMount = shouldFocusOnMount;
        _this._renderedVisibleMenu = true;

        _this.setState({
          menuHidden: false
        });
      }
    };

    _this._onToggleMenu = function (shouldFocusOnContainer) {
      var shouldFocusOnMount = true;

      if (_this.props.menuProps && _this.props.menuProps.shouldFocusOnMount === false) {
        shouldFocusOnMount = false;
      }

      _this.state.menuHidden ? _this._openMenu(shouldFocusOnContainer, shouldFocusOnMount) : _this._dismissMenu();
    };

    _this._onSplitContainerFocusCapture = function (ev) {
      var container = _this._splitButtonContainer.current; // If the target is coming from the portal we do not need to set focus on the container.

      if (!container || ev.target && portalContainsElement(ev.target, container)) {
        return;
      } // We should never be able to focus the individual buttons in a split button. Focus
      // should always remain on the container.


      container.focus();
    };

    _this._onSplitButtonPrimaryClick = function (ev) {
      if (!_this.state.menuHidden) {
        _this._dismissMenu();
      }

      if (!_this._processingTouch && _this.props.onClick) {
        _this.props.onClick(ev);
      } else if (_this._processingTouch) {
        _this._onMenuClick(ev);
      }
    };

    _this._onKeyDown = function (ev) {
      // explicity cancelling event so click won't fire after this
      if (_this.props.disabled && (ev.which === KeyCodes.enter || ev.which === KeyCodes.space)) {
        ev.preventDefault();
        ev.stopPropagation();
      } else if (!_this.props.disabled) {
        if (_this.props.menuProps) {
          _this._onMenuKeyDown(ev);
        } else if (_this.props.onKeyDown !== undefined) {
          _this.props.onKeyDown(ev); // not cancelling event because it's not disabled

        }
      }
    };

    _this._onKeyUp = function (ev) {
      if (!_this.props.disabled && _this.props.onKeyUp !== undefined) {
        _this.props.onKeyUp(ev); // not cancelling event because it's not disabled

      }
    };

    _this._onKeyPress = function (ev) {
      if (!_this.props.disabled && _this.props.onKeyPress !== undefined) {
        _this.props.onKeyPress(ev); // not cancelling event because it's not disabled

      }
    };

    _this._onMouseUp = function (ev) {
      if (!_this.props.disabled && _this.props.onMouseUp !== undefined) {
        _this.props.onMouseUp(ev); // not cancelling event because it's not disabled

      }
    };

    _this._onMouseDown = function (ev) {
      if (!_this.props.disabled && _this.props.onMouseDown !== undefined) {
        _this.props.onMouseDown(ev); // not cancelling event because it's not disabled

      }
    };

    _this._onClick = function (ev) {
      if (!_this.props.disabled) {
        if (_this.props.menuProps) {
          _this._onMenuClick(ev);
        } else if (_this.props.onClick !== undefined) {
          _this.props.onClick(ev); // not cancelling event because it's not disabled

        }
      }
    };

    _this._onSplitButtonContainerKeyDown = function (ev) {
      if (ev.which === KeyCodes.enter || ev.which === KeyCodes.space) {
        if (_this._buttonElement.current) {
          _this._buttonElement.current.click();

          ev.preventDefault();
          ev.stopPropagation();
        }
      } else {
        _this._onMenuKeyDown(ev);
      }
    };

    _this._onMenuKeyDown = function (ev) {
      if (_this.props.disabled) {
        return;
      }

      if (_this.props.onKeyDown) {
        _this.props.onKeyDown(ev);
      }

      var isUp = ev.which === KeyCodes.up;
      var isDown = ev.which === KeyCodes.down;

      if (!ev.defaultPrevented && _this._isValidMenuOpenKey(ev)) {
        var onMenuClick = _this.props.onMenuClick;

        if (onMenuClick) {
          onMenuClick(ev, _this.props);
        }

        _this._onToggleMenu(false);

        ev.preventDefault();
        ev.stopPropagation();
      }

      if (!(ev.altKey || ev.metaKey) && (isUp || isDown)) {
        // Suppose a menu, with shouldFocusOnMount: false, is open, and user wants to keyboard to the menu items
        // We need to re-render the menu with shouldFocusOnMount as true.
        if (!_this.state.menuHidden && _this.props.menuProps) {
          var currentShouldFocusOnMount = _this._menuShouldFocusOnMount !== undefined ? _this._menuShouldFocusOnMount : _this.props.menuProps.shouldFocusOnMount;

          if (!currentShouldFocusOnMount) {
            ev.preventDefault();
            ev.stopPropagation();
            _this._menuShouldFocusOnMount = true;

            _this.forceUpdate();
          }
        }
      }
    };

    _this._onTouchStart = function () {
      if (_this._isSplitButton && _this._splitButtonContainer.current && !('onpointerdown' in _this._splitButtonContainer.current)) {
        _this._handleTouchAndPointerEvent();
      }
    };

    _this._onMenuClick = function (ev) {
      var onMenuClick = _this.props.onMenuClick;

      if (onMenuClick) {
        onMenuClick(ev, _this.props);
      }

      if (!ev.defaultPrevented) {
        // When Edge + Narrator are used together (regardless of if the button is in a form or not), pressing
        // "Enter" fires this method and not _onMenuKeyDown. Checking ev.nativeEvent.detail differentiates
        // between a real click event and a keypress event (detail should be the number of mouse clicks).
        // ...Plot twist! For a real click event in IE 11, detail is always 0 (Edge sets it properly to 1).
        // So we also check the pointerType property, which both Edge and IE set to "mouse" for real clicks
        // and "" for pressing "Enter" with Narrator on.
        var shouldFocusOnContainer = ev.nativeEvent.detail !== 0 || ev.nativeEvent.pointerType === 'mouse';

        _this._onToggleMenu(shouldFocusOnContainer);

        ev.preventDefault();
        ev.stopPropagation();
      }
    };

    initializeComponentRef(_this);
    _this._async = new Async(_this);
    _this._events = new EventGroup(_this);
    warnConditionallyRequiredProps(COMPONENT_NAME$1, props, ['menuProps', 'onClick'], 'split', _this.props.split);
    warnDeprecations(COMPONENT_NAME$1, props, {
      rootProps: undefined,
      description: 'secondaryText',
      toggled: 'checked'
    });
    _this._labelId = getId();
    _this._descriptionId = getId();
    _this._ariaDescriptionId = getId();
    _this.state = {
      menuHidden: true
    };
    return _this;
  }

  Object.defineProperty(BaseButton.prototype, "_isSplitButton", {
    get: function () {
      return !!this.props.menuProps && !!this.props.onClick && this.props.split === true;
    },
    enumerable: true,
    configurable: true
  });

  BaseButton.prototype.render = function () {
    var _a;

    var _b = this.props,
        ariaDescription = _b.ariaDescription,
        ariaLabel = _b.ariaLabel,
        ariaHidden = _b.ariaHidden,
        className = _b.className,
        disabled = _b.disabled,
        allowDisabledFocus = _b.allowDisabledFocus,
        primaryDisabled = _b.primaryDisabled,
        // tslint:disable-next-line:deprecation
    _c = _b.secondaryText,
        // tslint:disable-next-line:deprecation
    secondaryText = _c === void 0 ? this.props.description : _c,
        href = _b.href,
        iconProps = _b.iconProps,
        menuIconProps = _b.menuIconProps,
        styles = _b.styles,
        checked = _b.checked,
        variantClassName = _b.variantClassName,
        theme = _b.theme,
        toggle = _b.toggle,
        getClassNames = _b.getClassNames,
        role = _b.role;
    var menuHidden = this.state.menuHidden; // Button is disabled if the whole button (in case of splitbutton is disabled) or if the primary action is disabled

    var isPrimaryButtonDisabled = disabled || primaryDisabled;
    this._classNames = getClassNames ? getClassNames(theme, className, variantClassName, iconProps && iconProps.className, menuIconProps && menuIconProps.className, isPrimaryButtonDisabled, checked, !menuHidden, !!this.props.menuProps, this.props.split, !!allowDisabledFocus) : getBaseButtonClassNames(theme, styles, className, variantClassName, iconProps && iconProps.className, menuIconProps && menuIconProps.className, isPrimaryButtonDisabled, !!this.props.menuProps, checked, !menuHidden, this.props.split);

    var _d = this,
        _ariaDescriptionId = _d._ariaDescriptionId,
        _labelId = _d._labelId,
        _descriptionId = _d._descriptionId; // Anchor tag cannot be disabled hence in disabled state rendering
    // anchor button as normal button


    var renderAsAnchor = !isPrimaryButtonDisabled && !!href;
    var tag = renderAsAnchor ? 'a' : 'button';
    var nativeProps = getNativeProps( // tslint:disable-next-line:deprecation
    assign(renderAsAnchor ? {} : {
      type: 'button'
    }, this.props.rootProps, this.props), renderAsAnchor ? anchorProperties : buttonProperties, ['disabled']); // Check for ariaLabel passed in via Button props, and fall back to aria-label passed in via native props

    var resolvedAriaLabel = ariaLabel || nativeProps['aria-label']; // Check for ariaDescription, secondaryText or aria-describedby in the native props to determine source of
    // aria-describedby. Otherwise default to undefined so property does not appear in output.

    var ariaDescribedBy = undefined;

    if (ariaDescription) {
      ariaDescribedBy = _ariaDescriptionId;
    } else if (secondaryText && this.props.onRenderDescription !== nullRender) {
      // for buttons like CompoundButton with a valid onRenderDescription, we need to set an ariaDescribedBy
      // for buttons that do not render anything (via nullRender), we should not set an ariaDescribedBy
      ariaDescribedBy = _descriptionId;
    } else if (nativeProps['aria-describedby']) {
      ariaDescribedBy = nativeProps['aria-describedby'];
    } // If an explicit ariaLabel is given, use that as the label and we're done.
    // If an explicit aria-labelledby is given, use that and we're done.
    // If any kind of description is given (which will end up as an aria-describedby attribute),
    // set the labelledby element. Otherwise, the button is labeled implicitly by the descendent
    // text on the button (if it exists). Never set both aria-label and aria-labelledby.


    var ariaLabelledBy = undefined;

    if (!resolvedAriaLabel) {
      if (nativeProps['aria-labelledby']) {
        ariaLabelledBy = nativeProps['aria-labelledby'];
      } else if (ariaDescribedBy) {
        ariaLabelledBy = this._hasText() ? _labelId : undefined;
      }
    }

    var dataIsFocusable = this.props['data-is-focusable'] === false || disabled && !allowDisabledFocus || this._isSplitButton ? false : true;
    var isCheckboxTypeRole = role === 'menuitemcheckbox' || role === 'checkbox'; // if isCheckboxTypeRole, always return a checked value.
    // Otherwise only return checked value if toggle is set to true.
    // This is because role="checkbox" always needs to have an aria-checked value
    // but our checked prop only sets aria-pressed if we mark the button as a toggle="true"

    var checkedOrPressedValue = isCheckboxTypeRole ? !!checked : toggle === true ? !!checked : undefined;
    var buttonProps = assign(nativeProps, (_a = {
      className: this._classNames.root,
      ref: this._buttonElement,
      disabled: isPrimaryButtonDisabled && !allowDisabledFocus,
      onKeyDown: this._onKeyDown,
      onKeyPress: this._onKeyPress,
      onKeyUp: this._onKeyUp,
      onMouseDown: this._onMouseDown,
      onMouseUp: this._onMouseUp,
      onClick: this._onClick,
      'aria-label': resolvedAriaLabel,
      'aria-labelledby': ariaLabelledBy,
      'aria-describedby': ariaDescribedBy,
      'aria-disabled': isPrimaryButtonDisabled,
      'data-is-focusable': dataIsFocusable
    }, // aria-pressed attribute should only be present for toggle buttons
    // aria-checked attribute should only be present for toggle buttons with checkbox type role
    _a[isCheckboxTypeRole ? 'aria-checked' : 'aria-pressed'] = checkedOrPressedValue, _a));

    if (ariaHidden) {
      buttonProps['aria-hidden'] = true;
    }

    if (this._isSplitButton) {
      return this._onRenderSplitButtonContent(tag, buttonProps);
    } else if (this.props.menuProps) {
      assign(buttonProps, {
        'aria-expanded': !menuHidden,
        'aria-owns': !menuHidden ? this._labelId + '-menu' : null,
        'aria-haspopup': true
      });
    }

    return this._onRenderContent(tag, buttonProps);
  };

  BaseButton.prototype.componentDidMount = function () {
    // For split buttons, touching anywhere in the button should drop the dropdown, which should contain the
    // primary action. This gives more hit target space for touch environments. We're setting the onpointerdown here,
    // because React does not support Pointer events yet.
    if (this._isSplitButton && this._splitButtonContainer.current) {
      if ('onpointerdown' in this._splitButtonContainer.current) {
        this._events.on(this._splitButtonContainer.current, 'pointerdown', this._onPointerDown, true);
      }

      if ('onpointerup' in this._splitButtonContainer.current && this.props.onPointerUp) {
        this._events.on(this._splitButtonContainer.current, 'pointerup', this.props.onPointerUp, true);
      }
    }
  };

  BaseButton.prototype.componentDidUpdate = function (prevProps, prevState) {
    // If Button's menu was closed, run onAfterMenuDismiss.
    if (this.props.onAfterMenuDismiss && !prevState.menuHidden && this.state.menuHidden) {
      this.props.onAfterMenuDismiss();
    }
  };

  BaseButton.prototype.componentWillUnmount = function () {
    this._async.dispose();

    this._events.dispose();
  };

  BaseButton.prototype.focus = function () {
    if (this._isSplitButton && this._splitButtonContainer.current) {
      this._splitButtonContainer.current.focus();
    } else if (this._buttonElement.current) {
      this._buttonElement.current.focus();
    }
  };

  BaseButton.prototype.dismissMenu = function () {
    this._dismissMenu();
  };

  BaseButton.prototype.openMenu = function (shouldFocusOnContainer, shouldFocusOnMount) {
    this._openMenu(shouldFocusOnContainer, shouldFocusOnMount);
  };

  BaseButton.prototype._onRenderContent = function (tag, buttonProps) {
    var _this = this;

    var props = this.props;
    var Tag = tag;
    var menuIconProps = props.menuIconProps,
        menuProps = props.menuProps,
        _a = props.onRenderIcon,
        onRenderIcon = _a === void 0 ? this._onRenderIcon : _a,
        _b = props.onRenderAriaDescription,
        onRenderAriaDescription = _b === void 0 ? this._onRenderAriaDescription : _b,
        _c = props.onRenderChildren,
        onRenderChildren = _c === void 0 ? this._onRenderChildren : _c,
        // tslint:disable-next-line:deprecation
    _d = props.onRenderMenu,
        // tslint:disable-next-line:deprecation
    onRenderMenu = _d === void 0 ? this._onRenderMenu : _d,
        _e = props.onRenderMenuIcon,
        onRenderMenuIcon = _e === void 0 ? this._onRenderMenuIcon : _e,
        disabled = props.disabled;
    var keytipProps = props.keytipProps;

    if (keytipProps && menuProps) {
      keytipProps = this._getMemoizedMenuButtonKeytipProps(keytipProps);
    }

    var Button = function (keytipAttributes) {
      return React.createElement(Tag, __assign({}, buttonProps, keytipAttributes), React.createElement("span", {
        className: _this._classNames.flexContainer,
        "data-automationid": "splitbuttonprimary"
      }, onRenderIcon(props, _this._onRenderIcon), _this._onRenderTextContents(), onRenderAriaDescription(props, _this._onRenderAriaDescription), onRenderChildren(props, _this._onRenderChildren), !_this._isSplitButton && (menuProps || menuIconProps || _this.props.onRenderMenuIcon) && onRenderMenuIcon(_this.props, _this._onRenderMenuIcon), menuProps && !menuProps.doNotLayer && _this._shouldRenderMenu() && onRenderMenu(menuProps, _this._onRenderMenu)));
    };

    var Content = keytipProps ? // If we're making a split button, we won't put the keytip here
    React.createElement(KeytipData, {
      keytipProps: !this._isSplitButton ? keytipProps : undefined,
      ariaDescribedBy: buttonProps['aria-describedby'],
      disabled: disabled
    }, function (keytipAttributes) {
      return Button(keytipAttributes);
    }) : Button();

    if (menuProps && menuProps.doNotLayer) {
      return React.createElement("span", {
        style: {
          display: 'inline-block'
        }
      }, Content, this._shouldRenderMenu() && onRenderMenu(menuProps, this._onRenderMenu));
    }

    return React.createElement(React.Fragment, null, Content, React.createElement(FocusRects, null));
  };
  /**
   * Method to help determine if the menu's component tree should
   * be rendered. It takes into account whether the menu is expanded,
   * whether it is a persisted menu and whether it has been shown to the user.
   */


  BaseButton.prototype._shouldRenderMenu = function () {
    var menuHidden = this.state.menuHidden; // tslint:disable-next-line:deprecation

    var _a = this.props,
        persistMenu = _a.persistMenu,
        renderPersistedMenuHiddenOnMount = _a.renderPersistedMenuHiddenOnMount;

    if (!menuHidden) {
      // Always should render a menu when it is expanded
      return true;
    } else if (persistMenu && (this._renderedVisibleMenu || renderPersistedMenuHiddenOnMount)) {
      // _renderedVisibleMenu ensures that the first rendering of
      // the menu happens on-screen, as edge's scrollbar calculations are off if done while hidden.
      return true;
    }

    return false;
  };

  BaseButton.prototype._hasText = function () {
    // _onRenderTextContents and _onRenderText do not perform the same checks. Below is parity with what _onRenderText
    // used to have before the refactor that introduced this function. _onRenderTextContents does not require props.
    // text to be undefined in order for props.children to be used as a fallback.
    // Purely a code maintainability/reuse issue, but logged as Issue #4979.
    return this.props.text !== null && (this.props.text !== undefined || typeof this.props.children === 'string');
  };

  BaseButton.prototype._onRenderSplitButtonContent = function (tag, buttonProps) {
    var _this = this;

    var _a = this.props,
        _b = _a.styles,
        styles = _b === void 0 ? {} : _b,
        disabled = _a.disabled,
        allowDisabledFocus = _a.allowDisabledFocus,
        checked = _a.checked,
        getSplitButtonClassNames = _a.getSplitButtonClassNames,
        primaryDisabled = _a.primaryDisabled,
        menuProps = _a.menuProps,
        toggle = _a.toggle,
        role = _a.role,
        primaryActionButtonProps = _a.primaryActionButtonProps;
    var keytipProps = this.props.keytipProps;
    var menuHidden = this.state.menuHidden;
    var classNames = getSplitButtonClassNames ? getSplitButtonClassNames(!!disabled, !menuHidden, !!checked, !!allowDisabledFocus) : styles && getClassNames$7(styles, !!disabled, !menuHidden, !!checked, !!primaryDisabled);
    assign(buttonProps, {
      onClick: undefined,
      onPointerDown: undefined,
      onPointerUp: undefined,
      tabIndex: -1,
      'data-is-focusable': false
    });
    var ariaDescribedBy = buttonProps.ariaDescription;

    if (keytipProps && menuProps) {
      keytipProps = this._getMemoizedMenuButtonKeytipProps(keytipProps);
    }

    var containerProps = getNativeProps(buttonProps, [], ['disabled']); // Add additional props to apply on primary action button

    if (primaryActionButtonProps) {
      assign(buttonProps, primaryActionButtonProps);
    }

    var SplitButton = function (keytipAttributes) {
      return React.createElement("div", __assign({}, containerProps, {
        "data-ktp-target": keytipAttributes ? keytipAttributes['data-ktp-target'] : undefined,
        role: role ? role : 'button',
        "aria-disabled": disabled,
        "aria-haspopup": true,
        "aria-expanded": !menuHidden,
        "aria-pressed": toggle ? !!checked : undefined,
        "aria-describedby": mergeAriaAttributeValues(ariaDescribedBy, keytipAttributes ? keytipAttributes['aria-describedby'] : undefined),
        className: classNames && classNames.splitButtonContainer,
        onKeyDown: _this._onSplitButtonContainerKeyDown,
        onTouchStart: _this._onTouchStart,
        ref: _this._splitButtonContainer,
        "data-is-focusable": true,
        onClick: !disabled && !primaryDisabled ? _this._onSplitButtonPrimaryClick : undefined,
        tabIndex: !disabled || allowDisabledFocus ? 0 : undefined,
        "aria-roledescription": buttonProps['aria-roledescription'],
        onFocusCapture: _this._onSplitContainerFocusCapture
      }), React.createElement("span", {
        style: {
          display: 'flex'
        }
      }, _this._onRenderContent(tag, buttonProps), _this._onRenderSplitButtonMenuButton(classNames, keytipAttributes), _this._onRenderSplitButtonDivider(classNames)));
    };

    return keytipProps ? React.createElement(KeytipData, {
      keytipProps: keytipProps,
      disabled: disabled
    }, function (keytipAttributes) {
      return SplitButton(keytipAttributes);
    }) : SplitButton();
  };

  BaseButton.prototype._onRenderSplitButtonDivider = function (classNames) {
    if (classNames && classNames.divider) {
      var onClick = function (ev) {
        ev.stopPropagation();
      };

      return React.createElement("span", {
        className: classNames.divider,
        "aria-hidden": true,
        onClick: onClick
      });
    }

    return null;
  };

  BaseButton.prototype._onRenderSplitButtonMenuButton = function (classNames, keytipAttributes) {
    var _a = this.props,
        allowDisabledFocus = _a.allowDisabledFocus,
        checked = _a.checked,
        disabled = _a.disabled,
        splitButtonMenuProps = _a.splitButtonMenuProps,
        splitButtonAriaLabel = _a.splitButtonAriaLabel;
    var menuHidden = this.state.menuHidden;
    var menuIconProps = this.props.menuIconProps;

    if (menuIconProps === undefined) {
      menuIconProps = {
        iconName: 'ChevronDown'
      };
    }

    var splitButtonProps = __assign(__assign({}, splitButtonMenuProps), {
      styles: classNames,
      checked: checked,
      disabled: disabled,
      allowDisabledFocus: allowDisabledFocus,
      onClick: this._onMenuClick,
      menuProps: undefined,
      iconProps: __assign(__assign({}, menuIconProps), {
        className: this._classNames.menuIcon
      }),
      ariaLabel: splitButtonAriaLabel,
      'aria-haspopup': true,
      'aria-expanded': !menuHidden,
      'data-is-focusable': false
    }); // Add data-ktp-execute-target to the split button if the keytip is defined


    return React.createElement(BaseButton, __assign({}, splitButtonProps, {
      "data-ktp-execute-target": keytipAttributes ? keytipAttributes['data-ktp-execute-target'] : keytipAttributes,
      onMouseDown: this._onMouseDown,
      tabIndex: -1
    }));
  };

  BaseButton.prototype._onPointerDown = function (ev) {
    var onPointerDown = this.props.onPointerDown;

    if (onPointerDown) {
      onPointerDown(ev);
    }

    if (ev.pointerType === 'touch') {
      this._handleTouchAndPointerEvent();

      ev.preventDefault();
      ev.stopImmediatePropagation();
    }
  };

  BaseButton.prototype._handleTouchAndPointerEvent = function () {
    var _this = this; // If we already have an existing timeeout from a previous touch and pointer event
    // cancel that timeout so we can set a nwe one.


    if (this._lastTouchTimeoutId !== undefined) {
      this._async.clearTimeout(this._lastTouchTimeoutId);

      this._lastTouchTimeoutId = undefined;
    }

    this._processingTouch = true;
    this._lastTouchTimeoutId = this._async.setTimeout(function () {
      _this._processingTouch = false;
      _this._lastTouchTimeoutId = undefined;
    }, TouchIdleDelay$1);
  };
  /**
   * Returns if the user hits a valid keyboard key to open the menu
   * @param ev - the keyboard event
   * @returns True if user clicks on custom trigger key if enabled or alt + down arrow if not. False otherwise.
   */


  BaseButton.prototype._isValidMenuOpenKey = function (ev) {
    if (this.props.menuTriggerKeyCode) {
      return ev.which === this.props.menuTriggerKeyCode;
    } else if (this.props.menuProps) {
      return ev.which === KeyCodes.down && (ev.altKey || ev.metaKey);
    } // Note: When enter is pressed, we will let the event continue to propagate
    // to trigger the onClick event on the button


    return false;
  };

  BaseButton.defaultProps = {
    baseClassName: 'ms-Button',
    styles: {},
    split: false
  };
  return BaseButton;
}(React.Component);

var noOutline = {
  outline: 0
};

var iconStyle = function (fontSize) {
  return {
    fontSize: fontSize,
    margin: '0 4px',
    height: '16px',
    lineHeight: '16px',
    textAlign: 'center',
    flexShrink: 0
  };
};
/**
 * Gets the base button styles. Note: because it is a base class to be used with the `mergeRules`
 * helper, it should have values for all class names in the interface. This let `mergeRules` optimize
 * mixing class names together.
 */


var getStyles$7 = memoizeFunction(function (theme) {
  var _a;

  var semanticColors = theme.semanticColors,
      effects = theme.effects,
      fonts = theme.fonts;
  var border = semanticColors.buttonBorder;
  var disabledBackground = semanticColors.disabledBackground;
  var disabledText = semanticColors.disabledText;
  var buttonHighContrastFocus = {
    left: -2,
    top: -2,
    bottom: -2,
    right: -2,
    border: 'none',
    outlineColor: 'ButtonText'
  };
  return {
    root: [getFocusStyle(theme, {
      inset: 1,
      highContrastStyle: buttonHighContrastFocus,
      borderColor: 'transparent'
    }), theme.fonts.medium, {
      boxSizing: 'border-box',
      border: '1px solid ' + border,
      userSelect: 'none',
      display: 'inline-block',
      textDecoration: 'none',
      textAlign: 'center',
      cursor: 'pointer',
      padding: '0 16px',
      borderRadius: effects.roundedCorner2,
      selectors: {
        // IE11 workaround for preventing shift of child elements of a button when active.
        ':active > *': {
          position: 'relative',
          left: 0,
          top: 0
        }
      }
    }],
    rootDisabled: [getFocusStyle(theme, {
      inset: 1,
      highContrastStyle: buttonHighContrastFocus,
      borderColor: 'transparent'
    }), {
      backgroundColor: disabledBackground,
      borderColor: disabledBackground,
      color: disabledText,
      cursor: 'default',
      pointerEvents: 'none',
      selectors: (_a = {
        ':hover': noOutline,
        ':focus': noOutline
      }, _a[HighContrastSelector] = {
        color: 'grayText',
        borderColor: 'grayText'
      }, _a)
    }],
    iconDisabled: {
      color: disabledText
    },
    menuIconDisabled: {
      color: disabledText
    },
    flexContainer: {
      display: 'flex',
      height: '100%',
      flexWrap: 'nowrap',
      justifyContent: 'center',
      alignItems: 'center'
    },
    description: {
      display: 'block'
    },
    textContainer: {
      flexGrow: 1,
      display: 'block'
    },
    icon: iconStyle(fonts.mediumPlus.fontSize),
    menuIcon: iconStyle(fonts.small.fontSize),
    label: {
      margin: '0 4px',
      lineHeight: '100%',
      display: 'block'
    },
    screenReaderText: hiddenContentStyle
  };
});

var DEFAULT_BUTTON_HEIGHT = '40px';
var DEFAULT_PADDING = '0 4px';
var getStyles$8 = memoizeFunction(function (theme, customStyles) {
  var _a;

  var baseButtonStyles = getStyles$7(theme);
  var actionButtonStyles = {
    root: {
      padding: DEFAULT_PADDING,
      height: DEFAULT_BUTTON_HEIGHT,
      color: theme.palette.neutralPrimary,
      backgroundColor: 'transparent',
      border: '1px solid transparent'
    },
    rootHovered: {
      color: theme.palette.themePrimary,
      selectors: (_a = {}, _a[HighContrastSelector] = {
        borderColor: 'Highlight',
        color: 'Highlight'
      }, _a)
    },
    iconHovered: {
      color: theme.palette.themePrimary
    },
    rootPressed: {
      color: theme.palette.black
    },
    rootExpanded: {
      color: theme.palette.themePrimary
    },
    iconPressed: {
      color: theme.palette.themeDarker
    },
    rootDisabled: {
      color: theme.palette.neutralTertiary,
      backgroundColor: 'transparent',
      borderColor: 'transparent'
    },
    rootChecked: {
      color: theme.palette.black
    },
    iconChecked: {
      color: theme.palette.themeDarker
    },
    flexContainer: {
      justifyContent: 'flex-start'
    },
    icon: {
      color: theme.palette.themeDarkAlt
    },
    iconDisabled: {
      color: 'inherit'
    },
    menuIcon: {
      color: theme.palette.neutralSecondary
    },
    textContainer: {
      flexGrow: 0
    }
  };
  return concatStyleSets(baseButtonStyles, actionButtonStyles, customStyles);
});

/**
 * {@docCategory Button}
 */

var ActionButton =
/** @class */
function (_super) {
  __extends(ActionButton, _super);

  function ActionButton() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  ActionButton.prototype.render = function () {
    var _a = this.props,
        styles = _a.styles,
        theme = _a.theme;
    return React.createElement(BaseButton, __assign({}, this.props, {
      variantClassName: "ms-Button--action ms-Button--command",
      styles: getStyles$8(theme, styles),
      onRenderDescription: nullRender
    }));
  };

  ActionButton = __decorate([customizable('ActionButton', ['theme', 'styles'], true)], ActionButton);
  return ActionButton;
}(React.Component);

var GlobalClassNames$6 = {
  root: 'ms-Nav',
  linkText: 'ms-Nav-linkText',
  compositeLink: 'ms-Nav-compositeLink',
  link: 'ms-Nav-link',
  chevronButton: 'ms-Nav-chevronButton',
  chevronIcon: 'ms-Nav-chevron',
  navItem: 'ms-Nav-navItem',
  navItems: 'ms-Nav-navItems',
  group: 'ms-Nav-group',
  groupContent: 'ms-Nav-groupContent'
};
var buttonStyles = {
  textContainer: {
    overflow: 'hidden'
  },
  label: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  }
};
var getStyles$9 = function (props) {
  var _a;

  var className = props.className,
      theme = props.theme,
      isOnTop = props.isOnTop,
      isExpanded = props.isExpanded,
      isGroup = props.isGroup,
      isLink = props.isLink,
      isSelected = props.isSelected,
      isDisabled = props.isDisabled,
      isButtonEntry = props.isButtonEntry,
      _b = props.navHeight,
      navHeight = _b === void 0 ? 44 : _b,
      position = props.position,
      _c = props.leftPadding,
      leftPadding = _c === void 0 ? 20 : _c,
      _d = props.leftPaddingExpanded,
      leftPaddingExpanded = _d === void 0 ? 28 : _d,
      _e = props.rightPadding,
      rightPadding = _e === void 0 ? 20 : _e;
  var palette = theme.palette,
      semanticColors = theme.semanticColors,
      fonts = theme.fonts;
  var classNames = getGlobalClassNames(GlobalClassNames$6, theme);
  return {
    root: [classNames.root, className, fonts.medium, {
      overflowY: 'auto',
      userSelect: 'none',
      WebkitOverflowScrolling: 'touch'
    }, isOnTop && [{
      position: 'absolute'
    }, AnimationClassNames.slideRightIn40]],
    linkText: [classNames.linkText, {
      margin: '0 4px',
      overflow: 'hidden',
      verticalAlign: 'middle',
      textAlign: 'left',
      textOverflow: 'ellipsis'
    }],
    compositeLink: [classNames.compositeLink, {
      display: 'block',
      position: 'relative',
      color: semanticColors.bodyText
    }, isExpanded && 'is-expanded', isSelected && 'is-selected', isDisabled && 'is-disabled', isDisabled && {
      color: semanticColors.disabledText
    }],
    link: [classNames.link, getFocusStyle(theme), {
      display: 'block',
      position: 'relative',
      height: navHeight,
      width: '100%',
      lineHeight: navHeight + "px",
      textDecoration: 'none',
      cursor: 'pointer',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      paddingLeft: leftPadding,
      paddingRight: rightPadding,
      color: semanticColors.bodyText,
      selectors: (_a = {}, _a[HighContrastSelector] = {
        borderColor: 'transparent',
        selectors: {
          ':focus': {
            borderColor: 'WindowText'
          }
        }
      }, _a)
    }, !isDisabled && {
      selectors: {
        '.ms-Nav-compositeLink:hover &': {
          backgroundColor: semanticColors.bodyBackgroundHovered
        }
      }
    }, isSelected && {
      color: semanticColors.bodyTextChecked,
      fontWeight: FontWeights.semibold,
      backgroundColor: semanticColors.bodyBackgroundChecked,
      selectors: {
        '&:after': {
          borderLeft: "2px solid " + palette.themePrimary,
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          pointerEvents: 'none'
        }
      }
    }, isDisabled && {
      color: semanticColors.disabledText
    }, isButtonEntry && {
      color: palette.themePrimary
    }],
    chevronButton: [classNames.chevronButton, getFocusStyle(theme), fonts.small, {
      display: 'block',
      textAlign: 'left',
      lineHeight: navHeight + "px",
      margin: '5px 0',
      padding: "0px, " + rightPadding + "px, 0px, " + leftPaddingExpanded + "px",
      border: 'none',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      cursor: 'pointer',
      color: semanticColors.bodyText,
      backgroundColor: 'transparent',
      selectors: {
        '&:visited': {
          color: semanticColors.bodyText
        }
      }
    }, isGroup && {
      fontSize: fonts.large.fontSize,
      width: '100%',
      height: navHeight,
      borderBottom: "1px solid " + semanticColors.bodyDivider
    }, isLink && {
      display: 'block',
      width: leftPaddingExpanded - 2,
      height: navHeight - 2,
      position: 'absolute',
      top: '1px',
      left: position + "px",
      zIndex: ZIndexes.Nav,
      padding: 0,
      margin: 0
    }, isSelected && {
      color: palette.themePrimary,
      backgroundColor: palette.neutralLighterAlt,
      selectors: {
        '&:after': {
          borderLeft: "2px solid " + palette.themePrimary,
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          pointerEvents: 'none'
        }
      }
    }],
    chevronIcon: [classNames.chevronIcon, {
      position: 'absolute',
      left: '8px',
      height: navHeight,
      lineHeight: navHeight + "px",
      fontSize: fonts.small.fontSize,
      transition: 'transform .1s linear'
    }, isExpanded && {
      transform: 'rotate(-180deg)'
    }, isLink && {
      top: 0
    }],
    navItem: [classNames.navItem, {
      padding: 0
    }],
    navItems: [classNames.navItems, {
      listStyleType: 'none',
      padding: 0,
      margin: 0
    }],
    group: [classNames.group, isExpanded && 'is-expanded'],
    groupContent: [classNames.groupContent, {
      display: 'none',
      marginBottom: '40px'
    }, AnimationClassNames.slideDownIn20, isExpanded && {
      display: 'block'
    }]
  };
};

var _indentationSize = 14; // The number of pixels of left margin

var _baseIndent = 3; // global var used in _isLinkSelectedKey

var _urlResolver;

function isRelativeUrl(url) {
  // A URL is relative if it has no protocol.
  return !!url && !/^[a-z0-9+-.]+:\/\//i.test(url);
}
var getClassNames$8 = classNamesFunction();

var NavBase =
/** @class */
function (_super) {
  __extends(NavBase, _super);

  function NavBase(props) {
    var _this = _super.call(this, props) || this;

    _this._focusZone = React.createRef();

    _this._onRenderLink = function (link) {
      var _a = _this.props,
          styles = _a.styles,
          groups = _a.groups,
          theme = _a.theme;
      var classNames = getClassNames$8(styles, {
        theme: theme,
        groups: groups
      });
      return React.createElement("div", {
        className: classNames.linkText
      }, link.name);
    };

    _this._renderGroup = function (group, groupIndex) {
      var _a = _this.props,
          styles = _a.styles,
          groups = _a.groups,
          theme = _a.theme,
          _b = _a.onRenderGroupHeader,
          onRenderGroupHeader = _b === void 0 ? _this._renderGroupHeader : _b;
      var classNames = getClassNames$8(styles, {
        theme: theme,
        isGroup: true,
        isExpanded: _this._isGroupExpanded(group),
        groups: groups
      });
      return React.createElement("div", {
        key: groupIndex,
        className: classNames.group
      }, group.name ? onRenderGroupHeader(group, _this._renderGroupHeader) : null, React.createElement("div", {
        className: classNames.groupContent
      }, _this._renderLinks(group.links, 0
      /* nestingLevel */
      )));
    };

    _this._renderGroupHeader = function (group) {
      // tslint:disable-next-line:deprecation
      var _a = _this.props,
          styles = _a.styles,
          groups = _a.groups,
          theme = _a.theme,
          expandButtonAriaLabel = _a.expandButtonAriaLabel;
      var classNames = getClassNames$8(styles, {
        theme: theme,
        isGroup: true,
        isExpanded: _this._isGroupExpanded(group),
        groups: groups
      });

      var isExpanded = _this._isGroupExpanded(group);

      var label = (isExpanded ? group.collapseAriaLabel : group.expandAriaLabel) || expandButtonAriaLabel;
      return React.createElement("button", {
        className: classNames.chevronButton,
        onClick: _this._onGroupHeaderClicked.bind(_this, group),
        "aria-label": label,
        "aria-expanded": isExpanded
      }, React.createElement(Icon, {
        className: classNames.chevronIcon,
        iconName: "ChevronDown"
      }), group.name);
    };

    initializeComponentRef(_this);
    _this.state = {
      isGroupCollapsed: {},
      isLinkExpandStateChanged: false,
      selectedKey: props.initialSelectedKey || props.selectedKey
    };
    return _this;
  }

  NavBase.prototype.render = function () {
    var _a = this.props,
        styles = _a.styles,
        groups = _a.groups,
        className = _a.className,
        isOnTop = _a.isOnTop,
        theme = _a.theme;

    if (!groups) {
      return null;
    }

    var groupElements = groups.map(this._renderGroup);
    var classNames = getClassNames$8(styles, {
      theme: theme,
      className: className,
      isOnTop: isOnTop,
      groups: groups
    });
    return React.createElement(FocusZone, {
      direction: FocusZoneDirection.vertical,
      componentRef: this._focusZone
    }, React.createElement("nav", {
      role: "navigation",
      className: classNames.root,
      "aria-label": this.props.ariaLabel
    }, groupElements));
  };

  Object.defineProperty(NavBase.prototype, "selectedKey", {
    get: function () {
      return this.state.selectedKey;
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Sets focus to the first tabbable item in the zone.
   * @param forceIntoFirstElement - If true, focus will be forced into the first element, even
   * if focus is already in the focus zone.
   * @returns True if focus could be set to an active element, false if no operation was taken.
   */

  NavBase.prototype.focus = function (forceIntoFirstElement) {
    if (forceIntoFirstElement === void 0) {
      forceIntoFirstElement = false;
    }

    if (this._focusZone && this._focusZone.current) {
      return this._focusZone.current.focus(forceIntoFirstElement);
    }

    return false;
  };

  NavBase.prototype._renderNavLink = function (link, linkIndex, nestingLevel) {
    var _a = this.props,
        styles = _a.styles,
        groups = _a.groups,
        theme = _a.theme;
    var isLinkWithIcon = link.icon || link.iconProps;

    var isSelectedLink = this._isLinkSelected(link);

    var _b = link.ariaCurrent,
        ariaCurrent = _b === void 0 ? 'page' : _b;
    var classNames = getClassNames$8(styles, {
      theme: theme,
      isSelected: isSelectedLink,
      isDisabled: link.disabled,
      isButtonEntry: link.onClick && !link.forceAnchor,
      leftPadding: _indentationSize * nestingLevel + _baseIndent + (isLinkWithIcon ? 0 : 24),
      groups: groups
    }); // Prevent hijacking of the parent window if link.target is defined

    var rel = link.url && link.target && !isRelativeUrl(link.url) ? 'noopener noreferrer' : undefined;
    var LinkAs = this.props.linkAs ? composeComponentAs(this.props.linkAs, ActionButton) : ActionButton;
    var onRenderLink = this.props.onRenderLink ? composeRenderFunction(this.props.onRenderLink, this._onRenderLink) : this._onRenderLink;
    return React.createElement(LinkAs, {
      className: classNames.link,
      styles: buttonStyles,
      href: link.url || (link.forceAnchor ? '#' : undefined),
      iconProps: link.iconProps || {
        iconName: link.icon
      },
      onClick: link.onClick ? this._onNavButtonLinkClicked.bind(this, link) : this._onNavAnchorLinkClicked.bind(this, link),
      title: link.title !== undefined ? link.title : link.name,
      target: link.target,
      rel: rel,
      disabled: link.disabled,
      "aria-current": isSelectedLink ? ariaCurrent : undefined,
      "aria-label": link.ariaLabel ? link.ariaLabel : undefined,
      link: link
    }, onRenderLink(link));
  };

  NavBase.prototype._renderCompositeLink = function (link, linkIndex, nestingLevel) {
    var divProps = __assign({}, getNativeProps(link, divProperties, ['onClick'])); // tslint:disable-next-line:deprecation


    var _a = this.props,
        expandButtonAriaLabel = _a.expandButtonAriaLabel,
        styles = _a.styles,
        groups = _a.groups,
        theme = _a.theme;
    var classNames = getClassNames$8(styles, {
      theme: theme,
      isExpanded: !!link.isExpanded,
      isSelected: this._isLinkSelected(link),
      isLink: true,
      isDisabled: link.disabled,
      position: _indentationSize * nestingLevel + 1,
      groups: groups
    });
    var finalExpandBtnAriaLabel = '';

    if (link.links && link.links.length > 0) {
      if (link.collapseAriaLabel || link.expandAriaLabel) {
        finalExpandBtnAriaLabel = link.isExpanded ? link.collapseAriaLabel : link.expandAriaLabel;
      } else {
        // TODO remove when `expandButtonAriaLabel` is removed. This is not an ideal concatenation for localization.
        finalExpandBtnAriaLabel = expandButtonAriaLabel ? link.name + " " + expandButtonAriaLabel : link.name;
      }
    }

    return React.createElement("div", __assign({}, divProps, {
      key: link.key || linkIndex,
      className: classNames.compositeLink
    }), link.links && link.links.length > 0 ? React.createElement("button", {
      className: classNames.chevronButton,
      onClick: this._onLinkExpandClicked.bind(this, link),
      "aria-label": finalExpandBtnAriaLabel,
      "aria-expanded": link.isExpanded ? 'true' : 'false'
    }, React.createElement(Icon, {
      className: classNames.chevronIcon,
      iconName: "ChevronDown"
    })) : null, this._renderNavLink(link, linkIndex, nestingLevel));
  };

  NavBase.prototype._renderLink = function (link, linkIndex, nestingLevel) {
    var _a = this.props,
        styles = _a.styles,
        groups = _a.groups,
        theme = _a.theme;
    var classNames = getClassNames$8(styles, {
      theme: theme,
      groups: groups
    });
    return React.createElement("li", {
      key: link.key || linkIndex,
      role: "listitem",
      className: classNames.navItem
    }, this._renderCompositeLink(link, linkIndex, nestingLevel), link.isExpanded ? this._renderLinks(link.links, ++nestingLevel) : null);
  };

  NavBase.prototype._renderLinks = function (links, nestingLevel) {
    var _this = this;

    if (!links || !links.length) {
      return null;
    }

    var linkElements = links.map(function (link, linkIndex) {
      return _this._renderLink(link, linkIndex, nestingLevel);
    });
    var _a = this.props,
        styles = _a.styles,
        groups = _a.groups,
        theme = _a.theme;
    var classNames = getClassNames$8(styles, {
      theme: theme,
      groups: groups
    });
    return React.createElement("ul", {
      role: "list",
      className: classNames.navItems
    }, linkElements);
  };

  NavBase.prototype._onGroupHeaderClicked = function (group, ev) {
    if (group.onHeaderClick) {
      group.onHeaderClick(ev, this._isGroupExpanded(group));
    }

    this._toggleCollapsed(group);

    ev.preventDefault();
    ev.stopPropagation();
  };

  NavBase.prototype._onLinkExpandClicked = function (link, ev) {
    var onLinkExpandClick = this.props.onLinkExpandClick;

    if (onLinkExpandClick) {
      onLinkExpandClick(ev, link);
    }

    if (!ev.defaultPrevented) {
      link.isExpanded = !link.isExpanded;
      this.setState({
        isLinkExpandStateChanged: true
      });
    }

    ev.preventDefault();
    ev.stopPropagation();
  };

  NavBase.prototype._preventBounce = function (link, ev) {
    if (!link.url && link.forceAnchor) {
      ev.preventDefault();
    }
  };

  NavBase.prototype._onNavAnchorLinkClicked = function (link, ev) {
    // If the href is "#" we should call preventDefault to prevent scrolling to the top of the page
    this._preventBounce(link, ev);

    if (this.props.onLinkClick) {
      this.props.onLinkClick(ev, link);
    }

    if (!link.url && link.links && link.links.length > 0) {
      this._onLinkExpandClicked(link, ev);
    }

    this.setState({
      selectedKey: link.key
    });
  };

  NavBase.prototype._onNavButtonLinkClicked = function (link, ev) {
    // If the href is "#" we should call preventDefault to prevent scrolling to the top of the page
    this._preventBounce(link, ev);

    if (link.onClick) {
      link.onClick(ev, link);
    }

    if (!link.url && link.links && link.links.length > 0) {
      this._onLinkExpandClicked(link, ev);
    }

    this.setState({
      selectedKey: link.key
    });
  };

  NavBase.prototype._isLinkSelected = function (link) {
    // if caller passes in selectedKey, use it as first choice or
    // if current state.selectedKey (from addressbar) is match to the link or
    // check if URL is matching location.href (if link.url exists)
    if (this.props.selectedKey !== undefined) {
      return link.key === this.props.selectedKey;
    } else if (this.state.selectedKey !== undefined) {
      return link.key === this.state.selectedKey;
    } else if (typeof getWindow() === 'undefined' || !link.url) {
      // resolve is not supported for ssr
      return false;
    } else {
      // If selectedKey is undefined in props and state, then check URL
      _urlResolver = _urlResolver || document.createElement('a');
      _urlResolver.href = link.url || '';
      var target = _urlResolver.href;

      if (location.href === target) {
        return true;
      } // If selectedKey is not defined in state, then check URL to determine link selected status


      if (location.protocol + '//' + location.host + location.pathname === target) {
        return true;
      }

      if (location.hash) {
        // Match the hash to the url.
        if (location.hash === link.url) {
          return true;
        } // Match a rebased url. (e.g. #foo becomes http://hostname/foo)


        _urlResolver.href = location.hash.substring(1);
        return _urlResolver.href === target;
      }
    }

    return false;
  };

  NavBase.prototype._isGroupExpanded = function (group) {
    if (group.name && this.state.isGroupCollapsed.hasOwnProperty(group.name)) {
      return !this.state.isGroupCollapsed[group.name];
    }

    if (group.collapseByDefault !== undefined) {
      return !group.collapseByDefault;
    }

    return true;
  };

  NavBase.prototype._toggleCollapsed = function (group) {
    var _a;

    if (group.name) {
      var newGroupCollapsed = __assign(__assign({}, this.state.isGroupCollapsed), (_a = {}, _a[group.name] = this._isGroupExpanded(group), _a));

      this.setState({
        isGroupCollapsed: newGroupCollapsed
      });
    }
  };

  NavBase.defaultProps = {
    groups: null
  };
  return NavBase;
}(React.Component);

var Nav = styled(NavBase, getStyles$9, undefined, {
  scope: 'Nav'
});

// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fluentui-assets-license
function initializeIcons(baseUrl, options) {
  if (baseUrl === void 0) {
    baseUrl = '';
  }

  var subset = {
    style: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'normal',
      fontWeight: 'normal',
      speak: 'none'
    },
    fontFace: {
      fontFamily: "\"FabricMDL2Icons\"",
      src: "url('" + baseUrl + "fabric-icons-a13498cf.woff') format('woff')"
    },
    icons: {
      GlobalNavButton: '\uE700',
      ChevronDown: '\uE70D',
      ChevronUp: '\uE70E',
      Edit: '\uE70F',
      Add: '\uE710',
      Cancel: '\uE711',
      More: '\uE712',
      Settings: '\uE713',
      Mail: '\uE715',
      Filter: '\uE71C',
      Search: '\uE721',
      Share: '\uE72D',
      BlockedSite: '\uE72F',
      FavoriteStar: '\uE734',
      FavoriteStarFill: '\uE735',
      CheckMark: '\uE73E',
      Delete: '\uE74D',
      ChevronLeft: '\uE76B',
      ChevronRight: '\uE76C',
      Calendar: '\uE787',
      Megaphone: '\uE789',
      Undo: '\uE7A7',
      Flag: '\uE7C1',
      Page: '\uE7C3',
      Pinned: '\uE840',
      View: '\uE890',
      Clear: '\uE894',
      Download: '\uE896',
      Upload: '\uE898',
      Folder: '\uE8B7',
      Sort: '\uE8CB',
      AlignRight: '\uE8E2',
      AlignLeft: '\uE8E4',
      Tag: '\uE8EC',
      AddFriend: '\uE8FA',
      Info: '\uE946',
      SortLines: '\uE9D0',
      List: '\uEA37',
      CircleRing: '\uEA3A',
      Heart: '\uEB51',
      HeartFill: '\uEB52',
      Tiles: '\uECA5',
      Embed: '\uECCE',
      Glimmer: '\uECF4',
      Ascending: '\uEDC0',
      Descending: '\uEDC1',
      SortUp: '\uEE68',
      SortDown: '\uEE69',
      SyncToPC: '\uEE6E',
      LargeGrid: '\uEECB',
      SkypeCheck: '\uEF80',
      SkypeClock: '\uEF81',
      SkypeMinus: '\uEF82',
      ClearFilter: '\uEF8F',
      Flow: '\uEF90',
      StatusCircleCheckmark: '\uF13E',
      MoreVertical: '\uF2BC'
    }
  };
  registerIcons(subset, options);
}

// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fluentui-assets-license
function initializeIcons$1(baseUrl, options) {
  if (baseUrl === void 0) {
    baseUrl = '';
  }

  var subset = {
    style: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'normal',
      fontWeight: 'normal',
      speak: 'none'
    },
    fontFace: {
      fontFamily: "\"FabricMDL2Icons-0\"",
      src: "url('" + baseUrl + "fabric-icons-0-467ee27f.woff') format('woff')"
    },
    icons: {
      'PageLink': '\uE302',
      'CommentSolid': '\uE30E',
      'ChangeEntitlements': '\uE310',
      'Installation': '\uE311',
      'WebAppBuilderModule': '\uE313',
      'WebAppBuilderFragment': '\uE314',
      'WebAppBuilderSlot': '\uE315',
      'BullseyeTargetEdit': '\uE319',
      'WebAppBuilderFragmentCreate': '\uE31B',
      'PageData': '\uE31C',
      'PageHeaderEdit': '\uE31D',
      'ProductList': '\uE31E',
      'UnpublishContent': '\uE31F',
      'DependencyAdd': '\uE344',
      'DependencyRemove': '\uE345',
      'EntitlementPolicy': '\uE346',
      'EntitlementRedemption': '\uE347',
      'SchoolDataSyncLogo': '\uE34C',
      'PinSolid12': '\uE352',
      'PinSolidOff12': '\uE353',
      'AddLink': '\uE35E',
      'SharepointAppIcon16': '\uE365',
      'DataflowsLink': '\uE366',
      'TimePicker': '\uE367',
      'UserWarning': '\uE368',
      'ComplianceAudit': '\uE369',
      'InternetSharing': '\uE704',
      'Brightness': '\uE706',
      'MapPin': '\uE707',
      'Airplane': '\uE709',
      'Tablet': '\uE70A',
      'QuickNote': '\uE70B',
      'Video': '\uE714',
      'People': '\uE716',
      'Phone': '\uE717',
      'Pin': '\uE718',
      'Shop': '\uE719',
      'Stop': '\uE71A',
      'Link': '\uE71B',
      'AllApps': '\uE71D',
      'Zoom': '\uE71E',
      'ZoomOut': '\uE71F',
      'Microphone': '\uE720',
      'Camera': '\uE722',
      'Attach': '\uE723',
      'Send': '\uE724',
      'FavoriteList': '\uE728',
      'PageSolid': '\uE729',
      'Forward': '\uE72A',
      'Back': '\uE72B',
      'Refresh': '\uE72C',
      'Lock': '\uE72E',
      'ReportHacked': '\uE730',
      'EMI': '\uE731',
      'MiniLink': '\uE732',
      'Blocked': '\uE733',
      'ReadingMode': '\uE736',
      'Favicon': '\uE737',
      'Remove': '\uE738',
      'Checkbox': '\uE739',
      'CheckboxComposite': '\uE73A',
      'CheckboxFill': '\uE73B',
      'CheckboxIndeterminate': '\uE73C',
      'CheckboxCompositeReversed': '\uE73D',
      'BackToWindow': '\uE73F',
      'FullScreen': '\uE740',
      'Print': '\uE749',
      'Up': '\uE74A',
      'Down': '\uE74B',
      'OEM': '\uE74C',
      'Save': '\uE74E',
      'ReturnKey': '\uE751',
      'Cloud': '\uE753',
      'Flashlight': '\uE754',
      'CommandPrompt': '\uE756',
      'Sad': '\uE757',
      'RealEstate': '\uE758',
      'SIPMove': '\uE759',
      'EraseTool': '\uE75C',
      'GripperTool': '\uE75E',
      'Dialpad': '\uE75F',
      'PageLeft': '\uE760',
      'PageRight': '\uE761',
      'MultiSelect': '\uE762',
      'KeyboardClassic': '\uE765',
      'Play': '\uE768',
      'Pause': '\uE769',
      'InkingTool': '\uE76D',
      'Emoji2': '\uE76E',
      'GripperBarHorizontal': '\uE76F',
      'System': '\uE770',
      'Personalize': '\uE771',
      'SearchAndApps': '\uE773',
      'Globe': '\uE774',
      'EaseOfAccess': '\uE776',
      'ContactInfo': '\uE779',
      'Unpin': '\uE77A',
      'Contact': '\uE77B',
      'Memo': '\uE77C',
      'IncomingCall': '\uE77E'
    }
  };
  registerIcons(subset, options);
}

// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fluentui-assets-license
function initializeIcons$2(baseUrl, options) {
  if (baseUrl === void 0) {
    baseUrl = '';
  }

  var subset = {
    style: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'normal',
      fontWeight: 'normal',
      speak: 'none'
    },
    fontFace: {
      fontFamily: "\"FabricMDL2Icons-1\"",
      src: "url('" + baseUrl + "fabric-icons-1-4d521695.woff') format('woff')"
    },
    icons: {
      'Paste': '\uE77F',
      'WindowsLogo': '\uE782',
      'Error': '\uE783',
      'GripperBarVertical': '\uE784',
      'Unlock': '\uE785',
      'Slideshow': '\uE786',
      'Trim': '\uE78A',
      'AutoEnhanceOn': '\uE78D',
      'AutoEnhanceOff': '\uE78E',
      'Color': '\uE790',
      'SaveAs': '\uE792',
      'Light': '\uE793',
      'Filters': '\uE795',
      'AspectRatio': '\uE799',
      'Contrast': '\uE7A1',
      'Redo': '\uE7A6',
      'Crop': '\uE7A8',
      'PhotoCollection': '\uE7AA',
      'Album': '\uE7AB',
      'Rotate': '\uE7AD',
      'PanoIndicator': '\uE7B0',
      'Translate': '\uE7B2',
      'RedEye': '\uE7B3',
      'ViewOriginal': '\uE7B4',
      'ThumbnailView': '\uE7B6',
      'Package': '\uE7B8',
      'Telemarketer': '\uE7B9',
      'Warning': '\uE7BA',
      'Financial': '\uE7BB',
      'Education': '\uE7BE',
      'ShoppingCart': '\uE7BF',
      'Train': '\uE7C0',
      'Move': '\uE7C2',
      'TouchPointer': '\uE7C9',
      'Merge': '\uE7D5',
      'TurnRight': '\uE7DB',
      'Ferry': '\uE7E3',
      'Highlight': '\uE7E6',
      'PowerButton': '\uE7E8',
      'Tab': '\uE7E9',
      'Admin': '\uE7EF',
      'TVMonitor': '\uE7F4',
      'Speakers': '\uE7F5',
      'Game': '\uE7FC',
      'HorizontalTabKey': '\uE7FD',
      'UnstackSelected': '\uE7FE',
      'StackIndicator': '\uE7FF',
      'Nav2DMapView': '\uE800',
      'StreetsideSplitMinimize': '\uE802',
      'Car': '\uE804',
      'Bus': '\uE806',
      'EatDrink': '\uE807',
      'SeeDo': '\uE808',
      'LocationCircle': '\uE80E',
      'Home': '\uE80F',
      'SwitcherStartEnd': '\uE810',
      'ParkingLocation': '\uE811',
      'IncidentTriangle': '\uE814',
      'Touch': '\uE815',
      'MapDirections': '\uE816',
      'CaretHollow': '\uE817',
      'CaretSolid': '\uE818',
      'History': '\uE81C',
      'Location': '\uE81D',
      'MapLayers': '\uE81E',
      'SearchNearby': '\uE820',
      'Work': '\uE821',
      'Recent': '\uE823',
      'Hotel': '\uE824',
      'Bank': '\uE825',
      'LocationDot': '\uE827',
      'Dictionary': '\uE82D',
      'ChromeBack': '\uE830',
      'FolderOpen': '\uE838',
      'PinnedFill': '\uE842',
      'RevToggleKey': '\uE845',
      'USB': '\uE88E',
      'Previous': '\uE892',
      'Next': '\uE893',
      'Sync': '\uE895',
      'Help': '\uE897',
      'Emoji': '\uE899',
      'MailForward': '\uE89C',
      'ClosePane': '\uE89F',
      'OpenPane': '\uE8A0',
      'PreviewLink': '\uE8A1',
      'ZoomIn': '\uE8A3',
      'Bookmarks': '\uE8A4',
      'Document': '\uE8A5',
      'ProtectedDocument': '\uE8A6',
      'OpenInNewWindow': '\uE8A7',
      'MailFill': '\uE8A8',
      'ViewAll': '\uE8A9',
      'Switch': '\uE8AB',
      'Rename': '\uE8AC',
      'Go': '\uE8AD',
      'Remote': '\uE8AF',
      'SelectAll': '\uE8B3',
      'Orientation': '\uE8B4',
      'Import': '\uE8B5'
    }
  };
  registerIcons(subset, options);
}

// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fluentui-assets-license
function initializeIcons$3(baseUrl, options) {
  if (baseUrl === void 0) {
    baseUrl = '';
  }

  var subset = {
    style: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'normal',
      fontWeight: 'normal',
      speak: 'none'
    },
    fontFace: {
      fontFamily: "\"FabricMDL2Icons-2\"",
      src: "url('" + baseUrl + "fabric-icons-2-63c99abf.woff') format('woff')"
    },
    icons: {
      'Picture': '\uE8B9',
      'ChromeClose': '\uE8BB',
      'ShowResults': '\uE8BC',
      'Message': '\uE8BD',
      'CalendarDay': '\uE8BF',
      'CalendarWeek': '\uE8C0',
      'MailReplyAll': '\uE8C2',
      'Read': '\uE8C3',
      'Cut': '\uE8C6',
      'PaymentCard': '\uE8C7',
      'Copy': '\uE8C8',
      'Important': '\uE8C9',
      'MailReply': '\uE8CA',
      'GotoToday': '\uE8D1',
      'Font': '\uE8D2',
      'FontColor': '\uE8D3',
      'FolderFill': '\uE8D5',
      'Permissions': '\uE8D7',
      'DisableUpdates': '\uE8D8',
      'Unfavorite': '\uE8D9',
      'Italic': '\uE8DB',
      'Underline': '\uE8DC',
      'Bold': '\uE8DD',
      'MoveToFolder': '\uE8DE',
      'Dislike': '\uE8E0',
      'Like': '\uE8E1',
      'AlignCenter': '\uE8E3',
      'OpenFile': '\uE8E5',
      'ClearSelection': '\uE8E6',
      'FontDecrease': '\uE8E7',
      'FontIncrease': '\uE8E8',
      'FontSize': '\uE8E9',
      'CellPhone': '\uE8EA',
      'RepeatOne': '\uE8ED',
      'RepeatAll': '\uE8EE',
      'Calculator': '\uE8EF',
      'Library': '\uE8F1',
      'PostUpdate': '\uE8F3',
      'NewFolder': '\uE8F4',
      'CalendarReply': '\uE8F5',
      'UnsyncFolder': '\uE8F6',
      'SyncFolder': '\uE8F7',
      'BlockContact': '\uE8F8',
      'Accept': '\uE8FB',
      'BulletedList': '\uE8FD',
      'Preview': '\uE8FF',
      'News': '\uE900',
      'Chat': '\uE901',
      'Group': '\uE902',
      'World': '\uE909',
      'Comment': '\uE90A',
      'DockLeft': '\uE90C',
      'DockRight': '\uE90D',
      'Repair': '\uE90F',
      'Accounts': '\uE910',
      'Street': '\uE913',
      'RadioBullet': '\uE915',
      'Stopwatch': '\uE916',
      'Clock': '\uE917',
      'WorldClock': '\uE918',
      'AlarmClock': '\uE919',
      'Photo': '\uE91B',
      'ActionCenter': '\uE91C',
      'Hospital': '\uE91D',
      'Timer': '\uE91E',
      'FullCircleMask': '\uE91F',
      'LocationFill': '\uE920',
      'ChromeMinimize': '\uE921',
      'ChromeRestore': '\uE923',
      'Annotation': '\uE924',
      'Fingerprint': '\uE928',
      'Handwriting': '\uE929',
      'ChromeFullScreen': '\uE92D',
      'Completed': '\uE930',
      'Label': '\uE932',
      'FlickDown': '\uE935',
      'FlickUp': '\uE936',
      'FlickLeft': '\uE937',
      'FlickRight': '\uE938',
      'MiniExpand': '\uE93A',
      'MiniContract': '\uE93B',
      'Streaming': '\uE93E',
      'MusicInCollection': '\uE940',
      'OneDriveLogo': '\uE941',
      'CompassNW': '\uE942',
      'Code': '\uE943',
      'LightningBolt': '\uE945',
      'CalculatorMultiply': '\uE947',
      'CalculatorAddition': '\uE948',
      'CalculatorSubtract': '\uE949',
      'CalculatorPercentage': '\uE94C',
      'CalculatorEqualTo': '\uE94E',
      'PrintfaxPrinterFile': '\uE956',
      'StorageOptical': '\uE958',
      'Communications': '\uE95A',
      'Headset': '\uE95B',
      'Health': '\uE95E',
      'Webcam2': '\uE960',
      'FrontCamera': '\uE96B',
      'ChevronUpSmall': '\uE96D'
    }
  };
  registerIcons(subset, options);
}

// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fluentui-assets-license
function initializeIcons$4(baseUrl, options) {
  if (baseUrl === void 0) {
    baseUrl = '';
  }

  var subset = {
    style: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'normal',
      fontWeight: 'normal',
      speak: 'none'
    },
    fontFace: {
      fontFamily: "\"FabricMDL2Icons-3\"",
      src: "url('" + baseUrl + "fabric-icons-3-089e217a.woff') format('woff')"
    },
    icons: {
      'ChevronDownSmall': '\uE96E',
      'ChevronLeftSmall': '\uE96F',
      'ChevronRightSmall': '\uE970',
      'ChevronUpMed': '\uE971',
      'ChevronDownMed': '\uE972',
      'ChevronLeftMed': '\uE973',
      'ChevronRightMed': '\uE974',
      'Devices2': '\uE975',
      'PC1': '\uE977',
      'PresenceChickletVideo': '\uE979',
      'Reply': '\uE97A',
      'HalfAlpha': '\uE97E',
      'ConstructionCone': '\uE98F',
      'DoubleChevronLeftMed': '\uE991',
      'Volume0': '\uE992',
      'Volume1': '\uE993',
      'Volume2': '\uE994',
      'Volume3': '\uE995',
      'Chart': '\uE999',
      'Robot': '\uE99A',
      'Manufacturing': '\uE99C',
      'LockSolid': '\uE9A2',
      'FitPage': '\uE9A6',
      'FitWidth': '\uE9A7',
      'BidiLtr': '\uE9AA',
      'BidiRtl': '\uE9AB',
      'RightDoubleQuote': '\uE9B1',
      'Sunny': '\uE9BD',
      'CloudWeather': '\uE9BE',
      'Cloudy': '\uE9BF',
      'PartlyCloudyDay': '\uE9C0',
      'PartlyCloudyNight': '\uE9C1',
      'ClearNight': '\uE9C2',
      'RainShowersDay': '\uE9C3',
      'Rain': '\uE9C4',
      'Thunderstorms': '\uE9C6',
      'RainSnow': '\uE9C7',
      'Snow': '\uE9C8',
      'BlowingSnow': '\uE9C9',
      'Frigid': '\uE9CA',
      'Fog': '\uE9CB',
      'Squalls': '\uE9CC',
      'Duststorm': '\uE9CD',
      'Unknown': '\uE9CE',
      'Precipitation': '\uE9CF',
      'Ribbon': '\uE9D1',
      'AreaChart': '\uE9D2',
      'Assign': '\uE9D3',
      'FlowChart': '\uE9D4',
      'CheckList': '\uE9D5',
      'Diagnostic': '\uE9D9',
      'Generate': '\uE9DA',
      'LineChart': '\uE9E6',
      'Equalizer': '\uE9E9',
      'BarChartHorizontal': '\uE9EB',
      'BarChartVertical': '\uE9EC',
      'Freezing': '\uE9EF',
      'FunnelChart': '\uE9F1',
      'Processing': '\uE9F5',
      'Quantity': '\uE9F8',
      'ReportDocument': '\uE9F9',
      'StackColumnChart': '\uE9FC',
      'SnowShowerDay': '\uE9FD',
      'HailDay': '\uEA00',
      'WorkFlow': '\uEA01',
      'HourGlass': '\uEA03',
      'StoreLogoMed20': '\uEA04',
      'TimeSheet': '\uEA05',
      'TriangleSolid': '\uEA08',
      'UpgradeAnalysis': '\uEA0B',
      'VideoSolid': '\uEA0C',
      'RainShowersNight': '\uEA0F',
      'SnowShowerNight': '\uEA11',
      'Teamwork': '\uEA12',
      'HailNight': '\uEA13',
      'PeopleAdd': '\uEA15',
      'Glasses': '\uEA16',
      'DateTime2': '\uEA17',
      'Shield': '\uEA18',
      'Header1': '\uEA19',
      'PageAdd': '\uEA1A',
      'NumberedList': '\uEA1C',
      'PowerBILogo': '\uEA1E',
      'Info2': '\uEA1F',
      'MusicInCollectionFill': '\uEA36',
      'Asterisk': '\uEA38',
      'ErrorBadge': '\uEA39',
      'CircleFill': '\uEA3B',
      'Record2': '\uEA3F',
      'AllAppsMirrored': '\uEA40',
      'BookmarksMirrored': '\uEA41',
      'BulletedListMirrored': '\uEA42',
      'CaretHollowMirrored': '\uEA45',
      'CaretSolidMirrored': '\uEA46',
      'ChromeBackMirrored': '\uEA47',
      'ClearSelectionMirrored': '\uEA48',
      'ClosePaneMirrored': '\uEA49',
      'DockLeftMirrored': '\uEA4C',
      'DoubleChevronLeftMedMirrored': '\uEA4D',
      'GoMirrored': '\uEA4F'
    }
  };
  registerIcons(subset, options);
}

// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fluentui-assets-license
function initializeIcons$5(baseUrl, options) {
  if (baseUrl === void 0) {
    baseUrl = '';
  }

  var subset = {
    style: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'normal',
      fontWeight: 'normal',
      speak: 'none'
    },
    fontFace: {
      fontFamily: "\"FabricMDL2Icons-4\"",
      src: "url('" + baseUrl + "fabric-icons-4-a656cc0a.woff') format('woff')"
    },
    icons: {
      'HelpMirrored': '\uEA51',
      'ImportMirrored': '\uEA52',
      'ImportAllMirrored': '\uEA53',
      'ListMirrored': '\uEA55',
      'MailForwardMirrored': '\uEA56',
      'MailReplyMirrored': '\uEA57',
      'MailReplyAllMirrored': '\uEA58',
      'MiniContractMirrored': '\uEA59',
      'MiniExpandMirrored': '\uEA5A',
      'OpenPaneMirrored': '\uEA5B',
      'ParkingLocationMirrored': '\uEA5E',
      'SendMirrored': '\uEA63',
      'ShowResultsMirrored': '\uEA65',
      'ThumbnailViewMirrored': '\uEA67',
      'Media': '\uEA69',
      'Devices3': '\uEA6C',
      'Focus': '\uEA6F',
      'VideoLightOff': '\uEA74',
      'Lightbulb': '\uEA80',
      'StatusTriangle': '\uEA82',
      'VolumeDisabled': '\uEA85',
      'Puzzle': '\uEA86',
      'EmojiNeutral': '\uEA87',
      'EmojiDisappointed': '\uEA88',
      'HomeSolid': '\uEA8A',
      'Ringer': '\uEA8F',
      'PDF': '\uEA90',
      'HeartBroken': '\uEA92',
      'StoreLogo16': '\uEA96',
      'MultiSelectMirrored': '\uEA98',
      'Broom': '\uEA99',
      'AddToShoppingList': '\uEA9A',
      'Cocktails': '\uEA9D',
      'Wines': '\uEABF',
      'Articles': '\uEAC1',
      'Cycling': '\uEAC7',
      'DietPlanNotebook': '\uEAC8',
      'Pill': '\uEACB',
      'ExerciseTracker': '\uEACC',
      'HandsFree': '\uEAD0',
      'Medical': '\uEAD4',
      'Running': '\uEADA',
      'Weights': '\uEADB',
      'Trackers': '\uEADF',
      'AddNotes': '\uEAE3',
      'AllCurrency': '\uEAE4',
      'BarChart4': '\uEAE7',
      'CirclePlus': '\uEAEE',
      'Coffee': '\uEAEF',
      'Cotton': '\uEAF3',
      'Market': '\uEAFC',
      'Money': '\uEAFD',
      'PieDouble': '\uEB04',
      'PieSingle': '\uEB05',
      'RemoveFilter': '\uEB08',
      'Savings': '\uEB0B',
      'Sell': '\uEB0C',
      'StockDown': '\uEB0F',
      'StockUp': '\uEB11',
      'Lamp': '\uEB19',
      'Source': '\uEB1B',
      'MSNVideos': '\uEB1C',
      'Cricket': '\uEB1E',
      'Golf': '\uEB1F',
      'Baseball': '\uEB20',
      'Soccer': '\uEB21',
      'MoreSports': '\uEB22',
      'AutoRacing': '\uEB24',
      'CollegeHoops': '\uEB25',
      'CollegeFootball': '\uEB26',
      'ProFootball': '\uEB27',
      'ProHockey': '\uEB28',
      'Rugby': '\uEB2D',
      'SubstitutionsIn': '\uEB31',
      'Tennis': '\uEB33',
      'Arrivals': '\uEB34',
      'Design': '\uEB3C',
      'Website': '\uEB41',
      'Drop': '\uEB42',
      'HistoricalWeather': '\uEB43',
      'SkiResorts': '\uEB45',
      'Snowflake': '\uEB46',
      'BusSolid': '\uEB47',
      'FerrySolid': '\uEB48',
      'AirplaneSolid': '\uEB4C',
      'TrainSolid': '\uEB4D',
      'Ticket': '\uEB54',
      'WifiWarning4': '\uEB63',
      'Devices4': '\uEB66',
      'AzureLogo': '\uEB6A',
      'BingLogo': '\uEB6B',
      'MSNLogo': '\uEB6C',
      'OutlookLogoInverse': '\uEB6D',
      'OfficeLogo': '\uEB6E',
      'SkypeLogo': '\uEB6F',
      'Door': '\uEB75',
      'EditMirrored': '\uEB7E',
      'GiftCard': '\uEB8E',
      'DoubleBookmark': '\uEB8F',
      'StatusErrorFull': '\uEB90'
    }
  };
  registerIcons(subset, options);
}

// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fluentui-assets-license
function initializeIcons$6(baseUrl, options) {
  if (baseUrl === void 0) {
    baseUrl = '';
  }

  var subset = {
    style: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'normal',
      fontWeight: 'normal',
      speak: 'none'
    },
    fontFace: {
      fontFamily: "\"FabricMDL2Icons-5\"",
      src: "url('" + baseUrl + "fabric-icons-5-f95ba260.woff') format('woff')"
    },
    icons: {
      'Certificate': '\uEB95',
      'FastForward': '\uEB9D',
      'Rewind': '\uEB9E',
      'Photo2': '\uEB9F',
      'OpenSource': '\uEBC2',
      'Movers': '\uEBCD',
      'CloudDownload': '\uEBD3',
      'Family': '\uEBDA',
      'WindDirection': '\uEBE6',
      'Bug': '\uEBE8',
      'SiteScan': '\uEBEC',
      'BrowserScreenShot': '\uEBED',
      'F12DevTools': '\uEBEE',
      'CSS': '\uEBEF',
      'JS': '\uEBF0',
      'DeliveryTruck': '\uEBF4',
      'ReminderPerson': '\uEBF7',
      'ReminderGroup': '\uEBF8',
      'ReminderTime': '\uEBF9',
      'TabletMode': '\uEBFC',
      'Umbrella': '\uEC04',
      'NetworkTower': '\uEC05',
      'CityNext': '\uEC06',
      'CityNext2': '\uEC07',
      'Section': '\uEC0C',
      'OneNoteLogoInverse': '\uEC0D',
      'ToggleFilled': '\uEC11',
      'ToggleBorder': '\uEC12',
      'SliderThumb': '\uEC13',
      'ToggleThumb': '\uEC14',
      'Documentation': '\uEC17',
      'Badge': '\uEC1B',
      'Giftbox': '\uEC1F',
      'VisualStudioLogo': '\uEC22',
      'HomeGroup': '\uEC26',
      'ExcelLogoInverse': '\uEC28',
      'WordLogoInverse': '\uEC29',
      'PowerPointLogoInverse': '\uEC2A',
      'Cafe': '\uEC32',
      'SpeedHigh': '\uEC4A',
      'Commitments': '\uEC4D',
      'ThisPC': '\uEC4E',
      'MusicNote': '\uEC4F',
      'MicOff': '\uEC54',
      'PlaybackRate1x': '\uEC57',
      'EdgeLogo': '\uEC60',
      'CompletedSolid': '\uEC61',
      'AlbumRemove': '\uEC62',
      'MessageFill': '\uEC70',
      'TabletSelected': '\uEC74',
      'MobileSelected': '\uEC75',
      'LaptopSelected': '\uEC76',
      'TVMonitorSelected': '\uEC77',
      'DeveloperTools': '\uEC7A',
      'Shapes': '\uEC7C',
      'InsertTextBox': '\uEC7D',
      'LowerBrightness': '\uEC8A',
      'WebComponents': '\uEC8B',
      'OfflineStorage': '\uEC8C',
      'DOM': '\uEC8D',
      'CloudUpload': '\uEC8E',
      'ScrollUpDown': '\uEC8F',
      'DateTime': '\uEC92',
      'Event': '\uECA3',
      'Cake': '\uECA4',
      'Org': '\uECA6',
      'PartyLeader': '\uECA7',
      'DRM': '\uECA8',
      'CloudAdd': '\uECA9',
      'AppIconDefault': '\uECAA',
      'Photo2Add': '\uECAB',
      'Photo2Remove': '\uECAC',
      'Calories': '\uECAD',
      'POI': '\uECAF',
      'AddTo': '\uECC8',
      'RadioBtnOff': '\uECCA',
      'RadioBtnOn': '\uECCB',
      'ExploreContent': '\uECCD',
      'Product': '\uECDC',
      'ProgressLoopInner': '\uECDE',
      'ProgressLoopOuter': '\uECDF',
      'Blocked2': '\uECE4',
      'FangBody': '\uECEB',
      'Toolbox': '\uECED',
      'PageHeader': '\uECEE',
      'ChatInviteFriend': '\uECFE',
      'Brush': '\uECFF',
      'Shirt': '\uED00',
      'Crown': '\uED01',
      'Diamond': '\uED02',
      'ScaleUp': '\uED09',
      'QRCode': '\uED14',
      'Feedback': '\uED15',
      'SharepointLogoInverse': '\uED18',
      'YammerLogo': '\uED19',
      'Hide': '\uED1A',
      'Uneditable': '\uED1D',
      'ReturnToSession': '\uED24',
      'OpenFolderHorizontal': '\uED25',
      'CalendarMirrored': '\uED28'
    }
  };
  registerIcons(subset, options);
}

// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fluentui-assets-license
function initializeIcons$7(baseUrl, options) {
  if (baseUrl === void 0) {
    baseUrl = '';
  }

  var subset = {
    style: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'normal',
      fontWeight: 'normal',
      speak: 'none'
    },
    fontFace: {
      fontFamily: "\"FabricMDL2Icons-6\"",
      src: "url('" + baseUrl + "fabric-icons-6-ef6fd590.woff') format('woff')"
    },
    icons: {
      'SwayLogoInverse': '\uED29',
      'OutOfOffice': '\uED34',
      'Trophy': '\uED3F',
      'ReopenPages': '\uED50',
      'EmojiTabSymbols': '\uED58',
      'AADLogo': '\uED68',
      'AccessLogo': '\uED69',
      'AdminALogoInverse32': '\uED6A',
      'AdminCLogoInverse32': '\uED6B',
      'AdminDLogoInverse32': '\uED6C',
      'AdminELogoInverse32': '\uED6D',
      'AdminLLogoInverse32': '\uED6E',
      'AdminMLogoInverse32': '\uED6F',
      'AdminOLogoInverse32': '\uED70',
      'AdminPLogoInverse32': '\uED71',
      'AdminSLogoInverse32': '\uED72',
      'AdminYLogoInverse32': '\uED73',
      'DelveLogoInverse': '\uED76',
      'ExchangeLogoInverse': '\uED78',
      'LyncLogo': '\uED79',
      'OfficeVideoLogoInverse': '\uED7A',
      'SocialListeningLogo': '\uED7C',
      'VisioLogoInverse': '\uED7D',
      'Balloons': '\uED7E',
      'Cat': '\uED7F',
      'MailAlert': '\uED80',
      'MailCheck': '\uED81',
      'MailLowImportance': '\uED82',
      'MailPause': '\uED83',
      'MailRepeat': '\uED84',
      'SecurityGroup': '\uED85',
      'Table': '\uED86',
      'VoicemailForward': '\uED87',
      'VoicemailReply': '\uED88',
      'Waffle': '\uED89',
      'RemoveEvent': '\uED8A',
      'EventInfo': '\uED8B',
      'ForwardEvent': '\uED8C',
      'WipePhone': '\uED8D',
      'AddOnlineMeeting': '\uED8E',
      'JoinOnlineMeeting': '\uED8F',
      'RemoveLink': '\uED90',
      'PeopleBlock': '\uED91',
      'PeopleRepeat': '\uED92',
      'PeopleAlert': '\uED93',
      'PeoplePause': '\uED94',
      'TransferCall': '\uED95',
      'AddPhone': '\uED96',
      'UnknownCall': '\uED97',
      'NoteReply': '\uED98',
      'NoteForward': '\uED99',
      'NotePinned': '\uED9A',
      'RemoveOccurrence': '\uED9B',
      'Timeline': '\uED9C',
      'EditNote': '\uED9D',
      'CircleHalfFull': '\uED9E',
      'Room': '\uED9F',
      'Unsubscribe': '\uEDA0',
      'Subscribe': '\uEDA1',
      'HardDrive': '\uEDA2',
      'RecurringTask': '\uEDB2',
      'TaskManager': '\uEDB7',
      'TaskManagerMirrored': '\uEDB8',
      'Combine': '\uEDBB',
      'Split': '\uEDBC',
      'DoubleChevronUp': '\uEDBD',
      'DoubleChevronLeft': '\uEDBE',
      'DoubleChevronRight': '\uEDBF',
      'TextBox': '\uEDC2',
      'TextField': '\uEDC3',
      'NumberField': '\uEDC4',
      'Dropdown': '\uEDC5',
      'PenWorkspace': '\uEDC6',
      'BookingsLogo': '\uEDC7',
      'ClassNotebookLogoInverse': '\uEDC8',
      'DelveAnalyticsLogo': '\uEDCA',
      'DocsLogoInverse': '\uEDCB',
      'Dynamics365Logo': '\uEDCC',
      'DynamicSMBLogo': '\uEDCD',
      'OfficeAssistantLogo': '\uEDCE',
      'OfficeStoreLogo': '\uEDCF',
      'OneNoteEduLogoInverse': '\uEDD0',
      'PlannerLogo': '\uEDD1',
      'PowerApps': '\uEDD2',
      'Suitcase': '\uEDD3',
      'ProjectLogoInverse': '\uEDD4',
      'CaretLeft8': '\uEDD5',
      'CaretRight8': '\uEDD6',
      'CaretUp8': '\uEDD7',
      'CaretDown8': '\uEDD8',
      'CaretLeftSolid8': '\uEDD9',
      'CaretRightSolid8': '\uEDDA',
      'CaretUpSolid8': '\uEDDB',
      'CaretDownSolid8': '\uEDDC',
      'ClearFormatting': '\uEDDD',
      'Superscript': '\uEDDE',
      'Subscript': '\uEDDF',
      'Strikethrough': '\uEDE0',
      'Export': '\uEDE1',
      'ExportMirrored': '\uEDE2'
    }
  };
  registerIcons(subset, options);
}

// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fluentui-assets-license
function initializeIcons$8(baseUrl, options) {
  if (baseUrl === void 0) {
    baseUrl = '';
  }

  var subset = {
    style: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'normal',
      fontWeight: 'normal',
      speak: 'none'
    },
    fontFace: {
      fontFamily: "\"FabricMDL2Icons-7\"",
      src: "url('" + baseUrl + "fabric-icons-7-2b97bb99.woff') format('woff')"
    },
    icons: {
      'SingleBookmark': '\uEDFF',
      'SingleBookmarkSolid': '\uEE00',
      'DoubleChevronDown': '\uEE04',
      'FollowUser': '\uEE05',
      'ReplyAll': '\uEE0A',
      'WorkforceManagement': '\uEE0F',
      'RecruitmentManagement': '\uEE12',
      'Questionnaire': '\uEE19',
      'ManagerSelfService': '\uEE23',
      'ProductionFloorManagement': '\uEE29',
      'ProductRelease': '\uEE2E',
      'ProductVariant': '\uEE30',
      'ReplyMirrored': '\uEE35',
      'ReplyAllMirrored': '\uEE36',
      'Medal': '\uEE38',
      'AddGroup': '\uEE3D',
      'QuestionnaireMirrored': '\uEE4B',
      'CloudImportExport': '\uEE55',
      'TemporaryUser': '\uEE58',
      'CaretSolid16': '\uEE62',
      'GroupedDescending': '\uEE66',
      'GroupedAscending': '\uEE67',
      'AwayStatus': '\uEE6A',
      'MyMoviesTV': '\uEE6C',
      'GenericScan': '\uEE6F',
      'AustralianRules': '\uEE70',
      'WifiEthernet': '\uEE77',
      'TrackersMirrored': '\uEE92',
      'DateTimeMirrored': '\uEE93',
      'StopSolid': '\uEE95',
      'DoubleChevronUp12': '\uEE96',
      'DoubleChevronDown12': '\uEE97',
      'DoubleChevronLeft12': '\uEE98',
      'DoubleChevronRight12': '\uEE99',
      'CalendarAgenda': '\uEE9A',
      'ConnectVirtualMachine': '\uEE9D',
      'AddEvent': '\uEEB5',
      'AssetLibrary': '\uEEB6',
      'DataConnectionLibrary': '\uEEB7',
      'DocLibrary': '\uEEB8',
      'FormLibrary': '\uEEB9',
      'FormLibraryMirrored': '\uEEBA',
      'ReportLibrary': '\uEEBB',
      'ReportLibraryMirrored': '\uEEBC',
      'ContactCard': '\uEEBD',
      'CustomList': '\uEEBE',
      'CustomListMirrored': '\uEEBF',
      'IssueTracking': '\uEEC0',
      'IssueTrackingMirrored': '\uEEC1',
      'PictureLibrary': '\uEEC2',
      'OfficeAddinsLogo': '\uEEC7',
      'OfflineOneDriveParachute': '\uEEC8',
      'OfflineOneDriveParachuteDisabled': '\uEEC9',
      'TriangleSolidUp12': '\uEECC',
      'TriangleSolidDown12': '\uEECD',
      'TriangleSolidLeft12': '\uEECE',
      'TriangleSolidRight12': '\uEECF',
      'TriangleUp12': '\uEED0',
      'TriangleDown12': '\uEED1',
      'TriangleLeft12': '\uEED2',
      'TriangleRight12': '\uEED3',
      'ArrowUpRight8': '\uEED4',
      'ArrowDownRight8': '\uEED5',
      'DocumentSet': '\uEED6',
      'GoToDashboard': '\uEEED',
      'DelveAnalytics': '\uEEEE',
      'ArrowUpRightMirrored8': '\uEEEF',
      'ArrowDownRightMirrored8': '\uEEF0',
      'CompanyDirectory': '\uEF0D',
      'OpenEnrollment': '\uEF1C',
      'CompanyDirectoryMirrored': '\uEF2B',
      'OneDriveAdd': '\uEF32',
      'ProfileSearch': '\uEF35',
      'Header2': '\uEF36',
      'Header3': '\uEF37',
      'Header4': '\uEF38',
      'RingerSolid': '\uEF3A',
      'Eyedropper': '\uEF3C',
      'MarketDown': '\uEF42',
      'CalendarWorkWeek': '\uEF51',
      'SidePanel': '\uEF52',
      'GlobeFavorite': '\uEF53',
      'CaretTopLeftSolid8': '\uEF54',
      'CaretTopRightSolid8': '\uEF55',
      'ViewAll2': '\uEF56',
      'DocumentReply': '\uEF57',
      'PlayerSettings': '\uEF58',
      'ReceiptForward': '\uEF59',
      'ReceiptReply': '\uEF5A',
      'ReceiptCheck': '\uEF5B',
      'Fax': '\uEF5C',
      'RecurringEvent': '\uEF5D',
      'ReplyAlt': '\uEF5E',
      'ReplyAllAlt': '\uEF5F',
      'EditStyle': '\uEF60',
      'EditMail': '\uEF61',
      'Lifesaver': '\uEF62',
      'LifesaverLock': '\uEF63',
      'InboxCheck': '\uEF64',
      'FolderSearch': '\uEF65'
    }
  };
  registerIcons(subset, options);
}

// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fluentui-assets-license
function initializeIcons$9(baseUrl, options) {
  if (baseUrl === void 0) {
    baseUrl = '';
  }

  var subset = {
    style: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'normal',
      fontWeight: 'normal',
      speak: 'none'
    },
    fontFace: {
      fontFamily: "\"FabricMDL2Icons-8\"",
      src: "url('" + baseUrl + "fabric-icons-8-6fdf1528.woff') format('woff')"
    },
    icons: {
      'CollapseMenu': '\uEF66',
      'ExpandMenu': '\uEF67',
      'Boards': '\uEF68',
      'SunAdd': '\uEF69',
      'SunQuestionMark': '\uEF6A',
      'LandscapeOrientation': '\uEF6B',
      'DocumentSearch': '\uEF6C',
      'PublicCalendar': '\uEF6D',
      'PublicContactCard': '\uEF6E',
      'PublicEmail': '\uEF6F',
      'PublicFolder': '\uEF70',
      'WordDocument': '\uEF71',
      'PowerPointDocument': '\uEF72',
      'ExcelDocument': '\uEF73',
      'GroupedList': '\uEF74',
      'ClassroomLogo': '\uEF75',
      'Sections': '\uEF76',
      'EditPhoto': '\uEF77',
      'Starburst': '\uEF78',
      'ShareiOS': '\uEF79',
      'AirTickets': '\uEF7A',
      'PencilReply': '\uEF7B',
      'Tiles2': '\uEF7C',
      'SkypeCircleCheck': '\uEF7D',
      'SkypeCircleClock': '\uEF7E',
      'SkypeCircleMinus': '\uEF7F',
      'SkypeMessage': '\uEF83',
      'ClosedCaption': '\uEF84',
      'ATPLogo': '\uEF85',
      'OfficeFormsLogoInverse': '\uEF86',
      'RecycleBin': '\uEF87',
      'EmptyRecycleBin': '\uEF88',
      'Hide2': '\uEF89',
      'Breadcrumb': '\uEF8C',
      'BirthdayCake': '\uEF8D',
      'TimeEntry': '\uEF95',
      'CRMProcesses': '\uEFB1',
      'PageEdit': '\uEFB6',
      'PageArrowRight': '\uEFB8',
      'PageRemove': '\uEFBA',
      'Database': '\uEFC7',
      'DataManagementSettings': '\uEFC8',
      'CRMServices': '\uEFD2',
      'EditContact': '\uEFD3',
      'ConnectContacts': '\uEFD4',
      'AppIconDefaultAdd': '\uEFDA',
      'AppIconDefaultList': '\uEFDE',
      'ActivateOrders': '\uEFE0',
      'DeactivateOrders': '\uEFE1',
      'ProductCatalog': '\uEFE8',
      'ScatterChart': '\uEFEB',
      'AccountActivity': '\uEFF4',
      'DocumentManagement': '\uEFFC',
      'CRMReport': '\uEFFE',
      'KnowledgeArticle': '\uF000',
      'Relationship': '\uF003',
      'HomeVerify': '\uF00E',
      'ZipFolder': '\uF012',
      'SurveyQuestions': '\uF01B',
      'TextDocument': '\uF029',
      'TextDocumentShared': '\uF02B',
      'PageCheckedOut': '\uF02C',
      'PageShared': '\uF02D',
      'SaveAndClose': '\uF038',
      'Script': '\uF03A',
      'Archive': '\uF03F',
      'ActivityFeed': '\uF056',
      'Compare': '\uF057',
      'EventDate': '\uF059',
      'ArrowUpRight': '\uF069',
      'CaretRight': '\uF06B',
      'SetAction': '\uF071',
      'ChatBot': '\uF08B',
      'CaretSolidLeft': '\uF08D',
      'CaretSolidDown': '\uF08E',
      'CaretSolidRight': '\uF08F',
      'CaretSolidUp': '\uF090',
      'PowerAppsLogo': '\uF091',
      'PowerApps2Logo': '\uF092',
      'SearchIssue': '\uF09A',
      'SearchIssueMirrored': '\uF09B',
      'FabricAssetLibrary': '\uF09C',
      'FabricDataConnectionLibrary': '\uF09D',
      'FabricDocLibrary': '\uF09E',
      'FabricFormLibrary': '\uF09F',
      'FabricFormLibraryMirrored': '\uF0A0',
      'FabricReportLibrary': '\uF0A1',
      'FabricReportLibraryMirrored': '\uF0A2',
      'FabricPublicFolder': '\uF0A3',
      'FabricFolderSearch': '\uF0A4',
      'FabricMovetoFolder': '\uF0A5',
      'FabricUnsyncFolder': '\uF0A6',
      'FabricSyncFolder': '\uF0A7',
      'FabricOpenFolderHorizontal': '\uF0A8',
      'FabricFolder': '\uF0A9',
      'FabricFolderFill': '\uF0AA',
      'FabricNewFolder': '\uF0AB',
      'FabricPictureLibrary': '\uF0AC',
      'PhotoVideoMedia': '\uF0B1',
      'AddFavorite': '\uF0C8'
    }
  };
  registerIcons(subset, options);
}

// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fluentui-assets-license
function initializeIcons$a(baseUrl, options) {
  if (baseUrl === void 0) {
    baseUrl = '';
  }

  var subset = {
    style: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'normal',
      fontWeight: 'normal',
      speak: 'none'
    },
    fontFace: {
      fontFamily: "\"FabricMDL2Icons-9\"",
      src: "url('" + baseUrl + "fabric-icons-9-c6162b42.woff') format('woff')"
    },
    icons: {
      'AddFavoriteFill': '\uF0C9',
      'BufferTimeBefore': '\uF0CF',
      'BufferTimeAfter': '\uF0D0',
      'BufferTimeBoth': '\uF0D1',
      'PublishContent': '\uF0D4',
      'ClipboardList': '\uF0E3',
      'ClipboardListMirrored': '\uF0E4',
      'CannedChat': '\uF0F2',
      'SkypeForBusinessLogo': '\uF0FC',
      'TabCenter': '\uF100',
      'PageCheckedin': '\uF104',
      'PageList': '\uF106',
      'ReadOutLoud': '\uF112',
      'CaretBottomLeftSolid8': '\uF121',
      'CaretBottomRightSolid8': '\uF122',
      'FolderHorizontal': '\uF12B',
      'MicrosoftStaffhubLogo': '\uF130',
      'GiftboxOpen': '\uF133',
      'StatusCircleOuter': '\uF136',
      'StatusCircleInner': '\uF137',
      'StatusCircleRing': '\uF138',
      'StatusTriangleOuter': '\uF139',
      'StatusTriangleInner': '\uF13A',
      'StatusTriangleExclamation': '\uF13B',
      'StatusCircleExclamation': '\uF13C',
      'StatusCircleErrorX': '\uF13D',
      'StatusCircleInfo': '\uF13F',
      'StatusCircleBlock': '\uF140',
      'StatusCircleBlock2': '\uF141',
      'StatusCircleQuestionMark': '\uF142',
      'StatusCircleSync': '\uF143',
      'Toll': '\uF160',
      'ExploreContentSingle': '\uF164',
      'CollapseContent': '\uF165',
      'CollapseContentSingle': '\uF166',
      'InfoSolid': '\uF167',
      'GroupList': '\uF168',
      'ProgressRingDots': '\uF16A',
      'CaloriesAdd': '\uF172',
      'BranchFork': '\uF173',
      'MuteChat': '\uF17A',
      'AddHome': '\uF17B',
      'AddWork': '\uF17C',
      'MobileReport': '\uF18A',
      'ScaleVolume': '\uF18C',
      'HardDriveGroup': '\uF18F',
      'FastMode': '\uF19A',
      'ToggleLeft': '\uF19E',
      'ToggleRight': '\uF19F',
      'TriangleShape': '\uF1A7',
      'RectangleShape': '\uF1A9',
      'CubeShape': '\uF1AA',
      'Trophy2': '\uF1AE',
      'BucketColor': '\uF1B6',
      'BucketColorFill': '\uF1B7',
      'Taskboard': '\uF1C2',
      'SingleColumn': '\uF1D3',
      'DoubleColumn': '\uF1D4',
      'TripleColumn': '\uF1D5',
      'ColumnLeftTwoThirds': '\uF1D6',
      'ColumnRightTwoThirds': '\uF1D7',
      'AccessLogoFill': '\uF1DB',
      'AnalyticsLogo': '\uF1DE',
      'AnalyticsQuery': '\uF1DF',
      'NewAnalyticsQuery': '\uF1E0',
      'AnalyticsReport': '\uF1E1',
      'WordLogo': '\uF1E3',
      'WordLogoFill': '\uF1E4',
      'ExcelLogo': '\uF1E5',
      'ExcelLogoFill': '\uF1E6',
      'OneNoteLogo': '\uF1E7',
      'OneNoteLogoFill': '\uF1E8',
      'OutlookLogo': '\uF1E9',
      'OutlookLogoFill': '\uF1EA',
      'PowerPointLogo': '\uF1EB',
      'PowerPointLogoFill': '\uF1EC',
      'PublisherLogo': '\uF1ED',
      'PublisherLogoFill': '\uF1EE',
      'ScheduleEventAction': '\uF1EF',
      'FlameSolid': '\uF1F3',
      'ServerProcesses': '\uF1FE',
      'Server': '\uF201',
      'SaveAll': '\uF203',
      'LinkedInLogo': '\uF20A',
      'Decimals': '\uF218',
      'SidePanelMirrored': '\uF221',
      'ProtectRestrict': '\uF22A',
      'Blog': '\uF22B',
      'UnknownMirrored': '\uF22E',
      'PublicContactCardMirrored': '\uF230',
      'GridViewSmall': '\uF232',
      'GridViewMedium': '\uF233',
      'GridViewLarge': '\uF234',
      'Step': '\uF241',
      'StepInsert': '\uF242',
      'StepShared': '\uF243',
      'StepSharedAdd': '\uF244',
      'StepSharedInsert': '\uF245',
      'ViewDashboard': '\uF246',
      'ViewList': '\uF247'
    }
  };
  registerIcons(subset, options);
}

// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fluentui-assets-license
function initializeIcons$b(baseUrl, options) {
  if (baseUrl === void 0) {
    baseUrl = '';
  }

  var subset = {
    style: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'normal',
      fontWeight: 'normal',
      speak: 'none'
    },
    fontFace: {
      fontFamily: "\"FabricMDL2Icons-10\"",
      src: "url('" + baseUrl + "fabric-icons-10-c4ded8e4.woff') format('woff')"
    },
    icons: {
      'ViewListGroup': '\uF248',
      'ViewListTree': '\uF249',
      'TriggerAuto': '\uF24A',
      'TriggerUser': '\uF24B',
      'PivotChart': '\uF24C',
      'StackedBarChart': '\uF24D',
      'StackedLineChart': '\uF24E',
      'BuildQueue': '\uF24F',
      'BuildQueueNew': '\uF250',
      'UserFollowed': '\uF25C',
      'ContactLink': '\uF25F',
      'Stack': '\uF26F',
      'Bullseye': '\uF272',
      'VennDiagram': '\uF273',
      'FiveTileGrid': '\uF274',
      'FocalPoint': '\uF277',
      'Insert': '\uF278',
      'RingerRemove': '\uF279',
      'TeamsLogoInverse': '\uF27A',
      'TeamsLogo': '\uF27B',
      'TeamsLogoFill': '\uF27C',
      'SkypeForBusinessLogoFill': '\uF27D',
      'SharepointLogo': '\uF27E',
      'SharepointLogoFill': '\uF27F',
      'DelveLogo': '\uF280',
      'DelveLogoFill': '\uF281',
      'OfficeVideoLogo': '\uF282',
      'OfficeVideoLogoFill': '\uF283',
      'ExchangeLogo': '\uF284',
      'ExchangeLogoFill': '\uF285',
      'Signin': '\uF286',
      'DocumentApproval': '\uF28B',
      'CloneToDesktop': '\uF28C',
      'InstallToDrive': '\uF28D',
      'Blur': '\uF28E',
      'Build': '\uF28F',
      'ProcessMetaTask': '\uF290',
      'BranchFork2': '\uF291',
      'BranchLocked': '\uF292',
      'BranchCommit': '\uF293',
      'BranchCompare': '\uF294',
      'BranchMerge': '\uF295',
      'BranchPullRequest': '\uF296',
      'BranchSearch': '\uF297',
      'BranchShelveset': '\uF298',
      'RawSource': '\uF299',
      'MergeDuplicate': '\uF29A',
      'RowsGroup': '\uF29B',
      'RowsChild': '\uF29C',
      'Deploy': '\uF29D',
      'Redeploy': '\uF29E',
      'ServerEnviroment': '\uF29F',
      'VisioDiagram': '\uF2A0',
      'HighlightMappedShapes': '\uF2A1',
      'TextCallout': '\uF2A2',
      'IconSetsFlag': '\uF2A4',
      'VisioLogo': '\uF2A7',
      'VisioLogoFill': '\uF2A8',
      'VisioDocument': '\uF2A9',
      'TimelineProgress': '\uF2AA',
      'TimelineDelivery': '\uF2AB',
      'Backlog': '\uF2AC',
      'TeamFavorite': '\uF2AD',
      'TaskGroup': '\uF2AE',
      'TaskGroupMirrored': '\uF2AF',
      'ScopeTemplate': '\uF2B0',
      'AssessmentGroupTemplate': '\uF2B1',
      'NewTeamProject': '\uF2B2',
      'CommentAdd': '\uF2B3',
      'CommentNext': '\uF2B4',
      'CommentPrevious': '\uF2B5',
      'ShopServer': '\uF2B6',
      'LocaleLanguage': '\uF2B7',
      'QueryList': '\uF2B8',
      'UserSync': '\uF2B9',
      'UserPause': '\uF2BA',
      'StreamingOff': '\uF2BB',
      'ArrowTallUpLeft': '\uF2BD',
      'ArrowTallUpRight': '\uF2BE',
      'ArrowTallDownLeft': '\uF2BF',
      'ArrowTallDownRight': '\uF2C0',
      'FieldEmpty': '\uF2C1',
      'FieldFilled': '\uF2C2',
      'FieldChanged': '\uF2C3',
      'FieldNotChanged': '\uF2C4',
      'RingerOff': '\uF2C5',
      'PlayResume': '\uF2C6',
      'BulletedList2': '\uF2C7',
      'BulletedList2Mirrored': '\uF2C8',
      'ImageCrosshair': '\uF2C9',
      'GitGraph': '\uF2CA',
      'Repo': '\uF2CB',
      'RepoSolid': '\uF2CC',
      'FolderQuery': '\uF2CD',
      'FolderList': '\uF2CE',
      'FolderListMirrored': '\uF2CF',
      'LocationOutline': '\uF2D0',
      'POISolid': '\uF2D1',
      'CalculatorNotEqualTo': '\uF2D2',
      'BoxSubtractSolid': '\uF2D3'
    }
  };
  registerIcons(subset, options);
}

// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fluentui-assets-license
function initializeIcons$c(baseUrl, options) {
  if (baseUrl === void 0) {
    baseUrl = '';
  }

  var subset = {
    style: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'normal',
      fontWeight: 'normal',
      speak: 'none'
    },
    fontFace: {
      fontFamily: "\"FabricMDL2Icons-11\"",
      src: "url('" + baseUrl + "fabric-icons-11-2a8393d6.woff') format('woff')"
    },
    icons: {
      'BoxAdditionSolid': '\uF2D4',
      'BoxMultiplySolid': '\uF2D5',
      'BoxPlaySolid': '\uF2D6',
      'BoxCheckmarkSolid': '\uF2D7',
      'CirclePauseSolid': '\uF2D8',
      'CirclePause': '\uF2D9',
      'MSNVideosSolid': '\uF2DA',
      'CircleStopSolid': '\uF2DB',
      'CircleStop': '\uF2DC',
      'NavigateBack': '\uF2DD',
      'NavigateBackMirrored': '\uF2DE',
      'NavigateForward': '\uF2DF',
      'NavigateForwardMirrored': '\uF2E0',
      'UnknownSolid': '\uF2E1',
      'UnknownMirroredSolid': '\uF2E2',
      'CircleAddition': '\uF2E3',
      'CircleAdditionSolid': '\uF2E4',
      'FilePDB': '\uF2E5',
      'FileTemplate': '\uF2E6',
      'FileSQL': '\uF2E7',
      'FileJAVA': '\uF2E8',
      'FileASPX': '\uF2E9',
      'FileCSS': '\uF2EA',
      'FileSass': '\uF2EB',
      'FileLess': '\uF2EC',
      'FileHTML': '\uF2ED',
      'JavaScriptLanguage': '\uF2EE',
      'CSharpLanguage': '\uF2EF',
      'CSharp': '\uF2F0',
      'VisualBasicLanguage': '\uF2F1',
      'VB': '\uF2F2',
      'CPlusPlusLanguage': '\uF2F3',
      'CPlusPlus': '\uF2F4',
      'FSharpLanguage': '\uF2F5',
      'FSharp': '\uF2F6',
      'TypeScriptLanguage': '\uF2F7',
      'PythonLanguage': '\uF2F8',
      'PY': '\uF2F9',
      'CoffeeScript': '\uF2FA',
      'MarkDownLanguage': '\uF2FB',
      'FullWidth': '\uF2FE',
      'FullWidthEdit': '\uF2FF',
      'Plug': '\uF300',
      'PlugSolid': '\uF301',
      'PlugConnected': '\uF302',
      'PlugDisconnected': '\uF303',
      'UnlockSolid': '\uF304',
      'Variable': '\uF305',
      'Parameter': '\uF306',
      'CommentUrgent': '\uF307',
      'Storyboard': '\uF308',
      'DiffInline': '\uF309',
      'DiffSideBySide': '\uF30A',
      'ImageDiff': '\uF30B',
      'ImagePixel': '\uF30C',
      'FileBug': '\uF30D',
      'FileCode': '\uF30E',
      'FileComment': '\uF30F',
      'BusinessHoursSign': '\uF310',
      'FileImage': '\uF311',
      'FileSymlink': '\uF312',
      'AutoFillTemplate': '\uF313',
      'WorkItem': '\uF314',
      'WorkItemBug': '\uF315',
      'LogRemove': '\uF316',
      'ColumnOptions': '\uF317',
      'Packages': '\uF318',
      'BuildIssue': '\uF319',
      'AssessmentGroup': '\uF31A',
      'VariableGroup': '\uF31B',
      'FullHistory': '\uF31C',
      'Wheelchair': '\uF31F',
      'SingleColumnEdit': '\uF321',
      'DoubleColumnEdit': '\uF322',
      'TripleColumnEdit': '\uF323',
      'ColumnLeftTwoThirdsEdit': '\uF324',
      'ColumnRightTwoThirdsEdit': '\uF325',
      'StreamLogo': '\uF329',
      'PassiveAuthentication': '\uF32A',
      'AlertSolid': '\uF331',
      'MegaphoneSolid': '\uF332',
      'TaskSolid': '\uF333',
      'ConfigurationSolid': '\uF334',
      'BugSolid': '\uF335',
      'CrownSolid': '\uF336',
      'Trophy2Solid': '\uF337',
      'QuickNoteSolid': '\uF338',
      'ConstructionConeSolid': '\uF339',
      'PageListSolid': '\uF33A',
      'PageListMirroredSolid': '\uF33B',
      'StarburstSolid': '\uF33C',
      'ReadingModeSolid': '\uF33D',
      'SadSolid': '\uF33E',
      'HealthSolid': '\uF33F',
      'ShieldSolid': '\uF340',
      'GiftBoxSolid': '\uF341',
      'ShoppingCartSolid': '\uF342',
      'MailSolid': '\uF343',
      'ChatSolid': '\uF344',
      'RibbonSolid': '\uF345'
    }
  };
  registerIcons(subset, options);
}

// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fluentui-assets-license
function initializeIcons$d(baseUrl, options) {
  if (baseUrl === void 0) {
    baseUrl = '';
  }

  var subset = {
    style: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'normal',
      fontWeight: 'normal',
      speak: 'none'
    },
    fontFace: {
      fontFamily: "\"FabricMDL2Icons-12\"",
      src: "url('" + baseUrl + "fabric-icons-12-7e945a1e.woff') format('woff')"
    },
    icons: {
      'FinancialSolid': '\uF346',
      'FinancialMirroredSolid': '\uF347',
      'HeadsetSolid': '\uF348',
      'PermissionsSolid': '\uF349',
      'ParkingSolid': '\uF34A',
      'ParkingMirroredSolid': '\uF34B',
      'DiamondSolid': '\uF34C',
      'AsteriskSolid': '\uF34D',
      'OfflineStorageSolid': '\uF34E',
      'BankSolid': '\uF34F',
      'DecisionSolid': '\uF350',
      'Parachute': '\uF351',
      'ParachuteSolid': '\uF352',
      'FiltersSolid': '\uF353',
      'ColorSolid': '\uF354',
      'ReviewSolid': '\uF355',
      'ReviewRequestSolid': '\uF356',
      'ReviewRequestMirroredSolid': '\uF357',
      'ReviewResponseSolid': '\uF358',
      'FeedbackRequestSolid': '\uF359',
      'FeedbackRequestMirroredSolid': '\uF35A',
      'FeedbackResponseSolid': '\uF35B',
      'WorkItemBar': '\uF35C',
      'WorkItemBarSolid': '\uF35D',
      'Separator': '\uF35E',
      'NavigateExternalInline': '\uF35F',
      'PlanView': '\uF360',
      'TimelineMatrixView': '\uF361',
      'EngineeringGroup': '\uF362',
      'ProjectCollection': '\uF363',
      'CaretBottomRightCenter8': '\uF364',
      'CaretBottomLeftCenter8': '\uF365',
      'CaretTopRightCenter8': '\uF366',
      'CaretTopLeftCenter8': '\uF367',
      'DonutChart': '\uF368',
      'ChevronUnfold10': '\uF369',
      'ChevronFold10': '\uF36A',
      'DoubleChevronDown8': '\uF36B',
      'DoubleChevronUp8': '\uF36C',
      'DoubleChevronLeft8': '\uF36D',
      'DoubleChevronRight8': '\uF36E',
      'ChevronDownEnd6': '\uF36F',
      'ChevronUpEnd6': '\uF370',
      'ChevronLeftEnd6': '\uF371',
      'ChevronRightEnd6': '\uF372',
      'ContextMenu': '\uF37C',
      'AzureAPIManagement': '\uF37F',
      'AzureServiceEndpoint': '\uF380',
      'VSTSLogo': '\uF381',
      'VSTSAltLogo1': '\uF382',
      'VSTSAltLogo2': '\uF383',
      'FileTypeSolution': '\uF387',
      'WordLogoInverse16': '\uF390',
      'WordLogo16': '\uF391',
      'WordLogoFill16': '\uF392',
      'PowerPointLogoInverse16': '\uF393',
      'PowerPointLogo16': '\uF394',
      'PowerPointLogoFill16': '\uF395',
      'ExcelLogoInverse16': '\uF396',
      'ExcelLogo16': '\uF397',
      'ExcelLogoFill16': '\uF398',
      'OneNoteLogoInverse16': '\uF399',
      'OneNoteLogo16': '\uF39A',
      'OneNoteLogoFill16': '\uF39B',
      'OutlookLogoInverse16': '\uF39C',
      'OutlookLogo16': '\uF39D',
      'OutlookLogoFill16': '\uF39E',
      'PublisherLogoInverse16': '\uF39F',
      'PublisherLogo16': '\uF3A0',
      'PublisherLogoFill16': '\uF3A1',
      'VisioLogoInverse16': '\uF3A2',
      'VisioLogo16': '\uF3A3',
      'VisioLogoFill16': '\uF3A4',
      'TestBeaker': '\uF3A5',
      'TestBeakerSolid': '\uF3A6',
      'TestExploreSolid': '\uF3A7',
      'TestAutoSolid': '\uF3A8',
      'TestUserSolid': '\uF3A9',
      'TestImpactSolid': '\uF3AA',
      'TestPlan': '\uF3AB',
      'TestStep': '\uF3AC',
      'TestParameter': '\uF3AD',
      'TestSuite': '\uF3AE',
      'TestCase': '\uF3AF',
      'Sprint': '\uF3B0',
      'SignOut': '\uF3B1',
      'TriggerApproval': '\uF3B2',
      'Rocket': '\uF3B3',
      'AzureKeyVault': '\uF3B4',
      'Onboarding': '\uF3BA',
      'Transition': '\uF3BC',
      'LikeSolid': '\uF3BF',
      'DislikeSolid': '\uF3C0',
      'CRMCustomerInsightsApp': '\uF3C8',
      'EditCreate': '\uF3C9',
      'PlayReverseResume': '\uF3E4',
      'PlayReverse': '\uF3E5',
      'SearchData': '\uF3F1',
      'UnSetColor': '\uF3F9',
      'DeclineCall': '\uF405'
    }
  };
  registerIcons(subset, options);
}

// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fluentui-assets-license
function initializeIcons$e(baseUrl, options) {
  if (baseUrl === void 0) {
    baseUrl = '';
  }

  var subset = {
    style: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'normal',
      fontWeight: 'normal',
      speak: 'none'
    },
    fontFace: {
      fontFamily: "\"FabricMDL2Icons-13\"",
      src: "url('" + baseUrl + "fabric-icons-13-c3989a02.woff') format('woff')"
    },
    icons: {
      'RectangularClipping': '\uF407',
      'TeamsLogo16': '\uF40A',
      'TeamsLogoFill16': '\uF40B',
      'Spacer': '\uF40D',
      'SkypeLogo16': '\uF40E',
      'SkypeForBusinessLogo16': '\uF40F',
      'SkypeForBusinessLogoFill16': '\uF410',
      'FilterSolid': '\uF412',
      'MailUndelivered': '\uF415',
      'MailTentative': '\uF416',
      'MailTentativeMirrored': '\uF417',
      'MailReminder': '\uF418',
      'ReceiptUndelivered': '\uF419',
      'ReceiptTentative': '\uF41A',
      'ReceiptTentativeMirrored': '\uF41B',
      'Inbox': '\uF41C',
      'IRMReply': '\uF41D',
      'IRMReplyMirrored': '\uF41E',
      'IRMForward': '\uF41F',
      'IRMForwardMirrored': '\uF420',
      'VoicemailIRM': '\uF421',
      'EventAccepted': '\uF422',
      'EventTentative': '\uF423',
      'EventTentativeMirrored': '\uF424',
      'EventDeclined': '\uF425',
      'IDBadge': '\uF427',
      'BackgroundColor': '\uF42B',
      'OfficeFormsLogoInverse16': '\uF433',
      'OfficeFormsLogo': '\uF434',
      'OfficeFormsLogoFill': '\uF435',
      'OfficeFormsLogo16': '\uF436',
      'OfficeFormsLogoFill16': '\uF437',
      'OfficeFormsLogoInverse24': '\uF43A',
      'OfficeFormsLogo24': '\uF43B',
      'OfficeFormsLogoFill24': '\uF43C',
      'PageLock': '\uF43F',
      'NotExecuted': '\uF440',
      'NotImpactedSolid': '\uF441',
      'FieldReadOnly': '\uF442',
      'FieldRequired': '\uF443',
      'BacklogBoard': '\uF444',
      'ExternalBuild': '\uF445',
      'ExternalTFVC': '\uF446',
      'ExternalXAML': '\uF447',
      'IssueSolid': '\uF448',
      'DefectSolid': '\uF449',
      'LadybugSolid': '\uF44A',
      'NugetLogo': '\uF44C',
      'TFVCLogo': '\uF44D',
      'ProjectLogo32': '\uF47E',
      'ProjectLogoFill32': '\uF47F',
      'ProjectLogo16': '\uF480',
      'ProjectLogoFill16': '\uF481',
      'SwayLogo32': '\uF482',
      'SwayLogoFill32': '\uF483',
      'SwayLogo16': '\uF484',
      'SwayLogoFill16': '\uF485',
      'ClassNotebookLogo32': '\uF486',
      'ClassNotebookLogoFill32': '\uF487',
      'ClassNotebookLogo16': '\uF488',
      'ClassNotebookLogoFill16': '\uF489',
      'ClassNotebookLogoInverse32': '\uF48A',
      'ClassNotebookLogoInverse16': '\uF48B',
      'StaffNotebookLogo32': '\uF48C',
      'StaffNotebookLogoFill32': '\uF48D',
      'StaffNotebookLogo16': '\uF48E',
      'StaffNotebookLogoFill16': '\uF48F',
      'StaffNotebookLogoInverted32': '\uF490',
      'StaffNotebookLogoInverted16': '\uF491',
      'KaizalaLogo': '\uF492',
      'TaskLogo': '\uF493',
      'ProtectionCenterLogo32': '\uF494',
      'GallatinLogo': '\uF496',
      'Globe2': '\uF49A',
      'Guitar': '\uF49B',
      'Breakfast': '\uF49C',
      'Brunch': '\uF49D',
      'BeerMug': '\uF49E',
      'Vacation': '\uF49F',
      'Teeth': '\uF4A0',
      'Taxi': '\uF4A1',
      'Chopsticks': '\uF4A2',
      'SyncOccurence': '\uF4A3',
      'UnsyncOccurence': '\uF4A4',
      'GIF': '\uF4A9',
      'PrimaryCalendar': '\uF4AE',
      'SearchCalendar': '\uF4AF',
      'VideoOff': '\uF4B0',
      'MicrosoftFlowLogo': '\uF4B1',
      'BusinessCenterLogo': '\uF4B2',
      'ToDoLogoBottom': '\uF4B3',
      'ToDoLogoTop': '\uF4B4',
      'EditSolid12': '\uF4B5',
      'EditSolidMirrored12': '\uF4B6',
      'UneditableSolid12': '\uF4B7',
      'UneditableSolidMirrored12': '\uF4B8',
      'UneditableMirrored': '\uF4B9',
      'AdminALogo32': '\uF4BA',
      'AdminALogoFill32': '\uF4BB',
      'ToDoLogoInverse': '\uF4BC'
    }
  };
  registerIcons(subset, options);
}

// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fluentui-assets-license
function initializeIcons$f(baseUrl, options) {
  if (baseUrl === void 0) {
    baseUrl = '';
  }

  var subset = {
    style: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'normal',
      fontWeight: 'normal',
      speak: 'none'
    },
    fontFace: {
      fontFamily: "\"FabricMDL2Icons-14\"",
      src: "url('" + baseUrl + "fabric-icons-14-5cf58db8.woff') format('woff')"
    },
    icons: {
      'Snooze': '\uF4BD',
      'WaffleOffice365': '\uF4E0',
      'ImageSearch': '\uF4E8',
      'NewsSearch': '\uF4E9',
      'VideoSearch': '\uF4EA',
      'R': '\uF4EB',
      'FontColorA': '\uF4EC',
      'FontColorSwatch': '\uF4ED',
      'LightWeight': '\uF4EE',
      'NormalWeight': '\uF4EF',
      'SemiboldWeight': '\uF4F0',
      'GroupObject': '\uF4F1',
      'UngroupObject': '\uF4F2',
      'AlignHorizontalLeft': '\uF4F3',
      'AlignHorizontalCenter': '\uF4F4',
      'AlignHorizontalRight': '\uF4F5',
      'AlignVerticalTop': '\uF4F6',
      'AlignVerticalCenter': '\uF4F7',
      'AlignVerticalBottom': '\uF4F8',
      'HorizontalDistributeCenter': '\uF4F9',
      'VerticalDistributeCenter': '\uF4FA',
      'Ellipse': '\uF4FB',
      'Line': '\uF4FC',
      'Octagon': '\uF4FD',
      'Hexagon': '\uF4FE',
      'Pentagon': '\uF4FF',
      'RightTriangle': '\uF500',
      'HalfCircle': '\uF501',
      'QuarterCircle': '\uF502',
      'ThreeQuarterCircle': '\uF503',
      '6PointStar': '\uF504',
      '12PointStar': '\uF505',
      'ArrangeBringToFront': '\uF506',
      'ArrangeSendToBack': '\uF507',
      'ArrangeSendBackward': '\uF508',
      'ArrangeBringForward': '\uF509',
      'BorderDash': '\uF50A',
      'BorderDot': '\uF50B',
      'LineStyle': '\uF50C',
      'LineThickness': '\uF50D',
      'WindowEdit': '\uF50E',
      'HintText': '\uF50F',
      'MediaAdd': '\uF510',
      'AnchorLock': '\uF511',
      'AutoHeight': '\uF512',
      'ChartSeries': '\uF513',
      'ChartXAngle': '\uF514',
      'ChartYAngle': '\uF515',
      'Combobox': '\uF516',
      'LineSpacing': '\uF517',
      'Padding': '\uF518',
      'PaddingTop': '\uF519',
      'PaddingBottom': '\uF51A',
      'PaddingLeft': '\uF51B',
      'PaddingRight': '\uF51C',
      'NavigationFlipper': '\uF51D',
      'AlignJustify': '\uF51E',
      'TextOverflow': '\uF51F',
      'VisualsFolder': '\uF520',
      'VisualsStore': '\uF521',
      'PictureCenter': '\uF522',
      'PictureFill': '\uF523',
      'PicturePosition': '\uF524',
      'PictureStretch': '\uF525',
      'PictureTile': '\uF526',
      'Slider': '\uF527',
      'SliderHandleSize': '\uF528',
      'DefaultRatio': '\uF529',
      'NumberSequence': '\uF52A',
      'GUID': '\uF52B',
      'ReportAdd': '\uF52C',
      'DashboardAdd': '\uF52D',
      'MapPinSolid': '\uF52E',
      'WebPublish': '\uF52F',
      'PieSingleSolid': '\uF530',
      'BlockedSolid': '\uF531',
      'DrillDown': '\uF532',
      'DrillDownSolid': '\uF533',
      'DrillExpand': '\uF534',
      'DrillShow': '\uF535',
      'SpecialEvent': '\uF536',
      'OneDriveFolder16': '\uF53B',
      'FunctionalManagerDashboard': '\uF542',
      'BIDashboard': '\uF543',
      'CodeEdit': '\uF544',
      'RenewalCurrent': '\uF545',
      'RenewalFuture': '\uF546',
      'SplitObject': '\uF547',
      'BulkUpload': '\uF548',
      'DownloadDocument': '\uF549',
      'GreetingCard': '\uF54B',
      'Flower': '\uF54E',
      'WaitlistConfirm': '\uF550',
      'WaitlistConfirmMirrored': '\uF551',
      'LaptopSecure': '\uF552',
      'DragObject': '\uF553',
      'EntryView': '\uF554',
      'EntryDecline': '\uF555',
      'ContactCardSettings': '\uF556',
      'ContactCardSettingsMirrored': '\uF557'
    }
  };
  registerIcons(subset, options);
}

// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fluentui-assets-license
function initializeIcons$g(baseUrl, options) {
  if (baseUrl === void 0) {
    baseUrl = '';
  }

  var subset = {
    style: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'normal',
      fontWeight: 'normal',
      speak: 'none'
    },
    fontFace: {
      fontFamily: "\"FabricMDL2Icons-15\"",
      src: "url('" + baseUrl + "fabric-icons-15-3807251b.woff') format('woff')"
    },
    icons: {
      'CalendarSettings': '\uF558',
      'CalendarSettingsMirrored': '\uF559',
      'HardDriveLock': '\uF55A',
      'HardDriveUnlock': '\uF55B',
      'AccountManagement': '\uF55C',
      'ReportWarning': '\uF569',
      'TransitionPop': '\uF5B2',
      'TransitionPush': '\uF5B3',
      'TransitionEffect': '\uF5B4',
      'LookupEntities': '\uF5B5',
      'ExploreData': '\uF5B6',
      'AddBookmark': '\uF5B7',
      'SearchBookmark': '\uF5B8',
      'DrillThrough': '\uF5B9',
      'MasterDatabase': '\uF5BA',
      'CertifiedDatabase': '\uF5BB',
      'MaximumValue': '\uF5BC',
      'MinimumValue': '\uF5BD',
      'VisualStudioIDELogo32': '\uF5D0',
      'PasteAsText': '\uF5D5',
      'PasteAsCode': '\uF5D6',
      'BrowserTab': '\uF5D7',
      'BrowserTabScreenshot': '\uF5D8',
      'DesktopScreenshot': '\uF5D9',
      'FileYML': '\uF5DA',
      'ClipboardSolid': '\uF5DC',
      'FabricUserFolder': '\uF5E5',
      'FabricNetworkFolder': '\uF5E6',
      'BullseyeTarget': '\uF5F0',
      'AnalyticsView': '\uF5F1',
      'Video360Generic': '\uF609',
      'Untag': '\uF60B',
      'Leave': '\uF627',
      'Trending12': '\uF62D',
      'Blocked12': '\uF62E',
      'Warning12': '\uF62F',
      'CheckedOutByOther12': '\uF630',
      'CheckedOutByYou12': '\uF631',
      'CircleShapeSolid': '\uF63C',
      'SquareShapeSolid': '\uF63D',
      'TriangleShapeSolid': '\uF63E',
      'DropShapeSolid': '\uF63F',
      'RectangleShapeSolid': '\uF640',
      'ZoomToFit': '\uF649',
      'InsertColumnsLeft': '\uF64A',
      'InsertColumnsRight': '\uF64B',
      'InsertRowsAbove': '\uF64C',
      'InsertRowsBelow': '\uF64D',
      'DeleteColumns': '\uF64E',
      'DeleteRows': '\uF64F',
      'DeleteRowsMirrored': '\uF650',
      'DeleteTable': '\uF651',
      'AccountBrowser': '\uF652',
      'VersionControlPush': '\uF664',
      'StackedColumnChart2': '\uF666',
      'TripleColumnWide': '\uF66E',
      'QuadColumn': '\uF66F',
      'WhiteBoardApp16': '\uF673',
      'WhiteBoardApp32': '\uF674',
      'PinnedSolid': '\uF676',
      'InsertSignatureLine': '\uF677',
      'ArrangeByFrom': '\uF678',
      'Phishing': '\uF679',
      'CreateMailRule': '\uF67A',
      'PublishCourse': '\uF699',
      'DictionaryRemove': '\uF69A',
      'UserRemove': '\uF69B',
      'UserEvent': '\uF69C',
      'Encryption': '\uF69D',
      'PasswordField': '\uF6AA',
      'OpenInNewTab': '\uF6AB',
      'Hide3': '\uF6AC',
      'VerifiedBrandSolid': '\uF6AD',
      'MarkAsProtected': '\uF6AE',
      'AuthenticatorApp': '\uF6B1',
      'WebTemplate': '\uF6B2',
      'DefenderTVM': '\uF6B3',
      'MedalSolid': '\uF6B9',
      'D365TalentLearn': '\uF6BB',
      'D365TalentInsight': '\uF6BC',
      'D365TalentHRCore': '\uF6BD',
      'BacklogList': '\uF6BF',
      'ButtonControl': '\uF6C0',
      'TableGroup': '\uF6D9',
      'MountainClimbing': '\uF6DB',
      'TagUnknown': '\uF6DF',
      'TagUnknownMirror': '\uF6E0',
      'TagUnknown12': '\uF6E1',
      'TagUnknown12Mirror': '\uF6E2',
      'Link12': '\uF6E3',
      'Presentation': '\uF6E4',
      'Presentation12': '\uF6E5',
      'Lock12': '\uF6E6',
      'BuildDefinition': '\uF6E9',
      'ReleaseDefinition': '\uF6EA',
      'SaveTemplate': '\uF6EC',
      'UserGauge': '\uF6ED',
      'BlockedSiteSolid12': '\uF70A',
      'TagSolid': '\uF70E',
      'OfficeChat': '\uF70F'
    }
  };
  registerIcons(subset, options);
}

// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fluentui-assets-license
function initializeIcons$h(baseUrl, options) {
  if (baseUrl === void 0) {
    baseUrl = '';
  }

  var subset = {
    style: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'normal',
      fontWeight: 'normal',
      speak: 'none'
    },
    fontFace: {
      fontFamily: "\"FabricMDL2Icons-16\"",
      src: "url('" + baseUrl + "fabric-icons-16-9cf93f3b.woff') format('woff')"
    },
    icons: {
      'OfficeChatSolid': '\uF710',
      'MailSchedule': '\uF72E',
      'WarningSolid': '\uF736',
      'Blocked2Solid': '\uF737',
      'SkypeCircleArrow': '\uF747',
      'SkypeArrow': '\uF748',
      'SyncStatus': '\uF751',
      'SyncStatusSolid': '\uF752',
      'ProjectDocument': '\uF759',
      'ToDoLogoOutline': '\uF75B',
      'VisioOnlineLogoFill32': '\uF75F',
      'VisioOnlineLogo32': '\uF760',
      'VisioOnlineLogoCloud32': '\uF761',
      'VisioDiagramSync': '\uF762',
      'Event12': '\uF763',
      'EventDateMissed12': '\uF764',
      'UserOptional': '\uF767',
      'ResponsesMenu': '\uF768',
      'DoubleDownArrow': '\uF769',
      'DistributeDown': '\uF76A',
      'BookmarkReport': '\uF76B',
      'FilterSettings': '\uF76C',
      'GripperDotsVertical': '\uF772',
      'MailAttached': '\uF774',
      'AddIn': '\uF775',
      'LinkedDatabase': '\uF779',
      'TableLink': '\uF77A',
      'PromotedDatabase': '\uF77D',
      'BarChartVerticalFilter': '\uF77E',
      'BarChartVerticalFilterSolid': '\uF77F',
      'MicOff2': '\uF781',
      'MicrosoftTranslatorLogo': '\uF782',
      'ShowTimeAs': '\uF787',
      'FileRequest': '\uF789',
      'WorkItemAlert': '\uF78F',
      'PowerBILogo16': '\uF790',
      'PowerBILogoBackplate16': '\uF791',
      'BulletedListText': '\uF792',
      'BulletedListBullet': '\uF793',
      'BulletedListTextMirrored': '\uF794',
      'BulletedListBulletMirrored': '\uF795',
      'NumberedListText': '\uF796',
      'NumberedListNumber': '\uF797',
      'NumberedListTextMirrored': '\uF798',
      'NumberedListNumberMirrored': '\uF799',
      'RemoveLinkChain': '\uF79A',
      'RemoveLinkX': '\uF79B',
      'FabricTextHighlight': '\uF79C',
      'ClearFormattingA': '\uF79D',
      'ClearFormattingEraser': '\uF79E',
      'Photo2Fill': '\uF79F',
      'IncreaseIndentText': '\uF7A0',
      'IncreaseIndentArrow': '\uF7A1',
      'DecreaseIndentText': '\uF7A2',
      'DecreaseIndentArrow': '\uF7A3',
      'IncreaseIndentTextMirrored': '\uF7A4',
      'IncreaseIndentArrowMirrored': '\uF7A5',
      'DecreaseIndentTextMirrored': '\uF7A6',
      'DecreaseIndentArrowMirrored': '\uF7A7',
      'CheckListText': '\uF7A8',
      'CheckListCheck': '\uF7A9',
      'CheckListTextMirrored': '\uF7AA',
      'CheckListCheckMirrored': '\uF7AB',
      'NumberSymbol': '\uF7AC',
      'Coupon': '\uF7BC',
      'VerifiedBrand': '\uF7BD',
      'ReleaseGate': '\uF7BE',
      'ReleaseGateCheck': '\uF7BF',
      'ReleaseGateError': '\uF7C0',
      'M365InvoicingLogo': '\uF7C1',
      'RemoveFromShoppingList': '\uF7D5',
      'ShieldAlert': '\uF7D7',
      'FabricTextHighlightComposite': '\uF7DA',
      'Dataflows': '\uF7DD',
      'GenericScanFilled': '\uF7DE',
      'DiagnosticDataBarTooltip': '\uF7DF',
      'SaveToMobile': '\uF7E0',
      'Orientation2': '\uF7E1',
      'ScreenCast': '\uF7E2',
      'ShowGrid': '\uF7E3',
      'SnapToGrid': '\uF7E4',
      'ContactList': '\uF7E5',
      'NewMail': '\uF7EA',
      'EyeShadow': '\uF7EB',
      'FabricFolderConfirm': '\uF7FF',
      'InformationBarriers': '\uF803',
      'CommentActive': '\uF804',
      'ColumnVerticalSectionEdit': '\uF806',
      'WavingHand': '\uF807',
      'ShakeDevice': '\uF80A',
      'SmartGlassRemote': '\uF80B',
      'Rotate90Clockwise': '\uF80D',
      'Rotate90CounterClockwise': '\uF80E',
      'CampaignTemplate': '\uF811',
      'ChartTemplate': '\uF812',
      'PageListFilter': '\uF813',
      'SecondaryNav': '\uF814',
      'ColumnVerticalSection': '\uF81E',
      'SkypeCircleSlash': '\uF825',
      'SkypeSlash': '\uF826'
    }
  };
  registerIcons(subset, options);
}

// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fluentui-assets-license
function initializeIcons$i(baseUrl, options) {
  if (baseUrl === void 0) {
    baseUrl = '';
  }

  var subset = {
    style: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'normal',
      fontWeight: 'normal',
      speak: 'none'
    },
    fontFace: {
      fontFamily: "\"FabricMDL2Icons-17\"",
      src: "url('" + baseUrl + "fabric-icons-17-0c4ed701.woff') format('woff')"
    },
    icons: {
      'CustomizeToolbar': '\uF828',
      'DuplicateRow': '\uF82A',
      'RemoveFromTrash': '\uF82B',
      'MailOptions': '\uF82C',
      'Childof': '\uF82D',
      'Footer': '\uF82E',
      'Header': '\uF82F',
      'BarChartVerticalFill': '\uF830',
      'StackedColumnChart2Fill': '\uF831',
      'PlainText': '\uF834',
      'AccessibiltyChecker': '\uF835',
      'DatabaseSync': '\uF842',
      'ReservationOrders': '\uF845',
      'TabOneColumn': '\uF849',
      'TabTwoColumn': '\uF84A',
      'TabThreeColumn': '\uF84B',
      'BulletedTreeList': '\uF84C',
      'MicrosoftTranslatorLogoGreen': '\uF852',
      'MicrosoftTranslatorLogoBlue': '\uF853',
      'InternalInvestigation': '\uF854',
      'AddReaction': '\uF85D',
      'ContactHeart': '\uF862',
      'VisuallyImpaired': '\uF866',
      'EventToDoLogo': '\uF869',
      'Variable2': '\uF86D',
      'ModelingView': '\uF871',
      'DisconnectVirtualMachine': '\uF873',
      'ReportLock': '\uF875',
      'Uneditable2': '\uF876',
      'Uneditable2Mirrored': '\uF877',
      'BarChartVerticalEdit': '\uF89D',
      'GlobalNavButtonActive': '\uF89F',
      'PollResults': '\uF8A0',
      'Rerun': '\uF8A1',
      'QandA': '\uF8A2',
      'QandAMirror': '\uF8A3',
      'BookAnswers': '\uF8A4',
      'AlertSettings': '\uF8B6',
      'TrimStart': '\uF8BB',
      'TrimEnd': '\uF8BC',
      'TableComputed': '\uF8F5',
      'DecreaseIndentLegacy': '\uE290',
      'IncreaseIndentLegacy': '\uE291',
      'SizeLegacy': '\uE2B2'
    }
  };
  registerIcons(subset, options);
}

var registerIconAliases = function () {
  registerIconAlias('trash', 'delete');
  registerIconAlias('onedrive', 'onedrivelogo');
  registerIconAlias('alertsolid12', 'eventdatemissed12');
  registerIconAlias('sixpointstar', '6pointstar');
  registerIconAlias('twelvepointstar', '12pointstar');
  registerIconAlias('toggleon', 'toggleleft');
  registerIconAlias('toggleoff', 'toggleright');
};

// @uifabric/icons@7.3.36
setVersion('@uifabric/icons', '7.3.36');

var DEFAULT_BASE_URL = 'https://spoprod-a.akamaihd.net/files/fabric/assets/icons/';
function initializeIcons$j(baseUrl, options) {
  if (baseUrl === void 0) {
    baseUrl = DEFAULT_BASE_URL;
  }

  [initializeIcons, initializeIcons$1, initializeIcons$2, initializeIcons$3, initializeIcons$4, initializeIcons$5, initializeIcons$6, initializeIcons$7, initializeIcons$8, initializeIcons$9, initializeIcons$a, initializeIcons$b, initializeIcons$c, initializeIcons$d, initializeIcons$e, initializeIcons$f, initializeIcons$g, initializeIcons$h, initializeIcons$i].forEach(function (initialize) {
    return initialize(baseUrl, options);
  });
  registerIconAliases();
}

initializeIcons$j();
function NavFlt() {
  var navLinkGroups = [{
    links: [{
      name: 'Parent link 1',
      url: 'http://example.com',
      target: '_blank',
      expandAriaLabel: 'Expand Parent link 1',
      collapseAriaLabel: 'Collapse Parent link 1',
      links: [{
        name: 'Child link 1',
        url: 'http://example.com',
        target: '_blank'
      }, {
        name: 'Child link 2',
        url: 'http://example.com',
        target: '_blank',
        expandAriaLabel: 'Expand Child link 2',
        collapseAriaLabel: 'Collapse Child link 2',
        links: [{
          name: '3rd level link 1',
          url: 'http://example.com',
          target: '_blank'
        }, {
          name: '3rd level link 2',
          url: 'http://example.com',
          target: '_blank'
        }]
      }, {
        name: 'Child link 3',
        url: 'http://example.com',
        target: '_blank'
      }]
    }, {
      name: 'Parent link 2',
      url: 'http://example.com',
      target: '_blank',
      expandAriaLabel: 'Expand Parent link 2',
      collapseAriaLabel: 'Collapse Parent link 2',
      links: [{
        name: 'Child link 4',
        url: 'http://example.com',
        target: '_blank'
      }]
    }]
  }];
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Nav, {
    ariaLabel: "Nav example with nested links",
    groups: navLinkGroups
  }));
}

exports.default = NavFlt;
//# sourceMappingURL=index.js.map
