'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var ReactDOM = require('react-dom');
var styled$1 = _interopDefault(require('styled-components'));

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

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
var _extendStatics = function extendStatics(d, b) {
  _extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return _extendStatics(d, b);
};

function __extends(d, b) {
  _extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var _assign = function __assign() {
  _assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return _assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

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
    this._config = _assign({
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
    this._config = _assign(_assign({}, this._config), config);
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
        } else if (_typeof(arg) === 'object') {
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

          var _loop_1 = function _loop_1(newSelector) {
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

    var _loop_1 = function _loop_1(subCompProp) {
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

/**
 * Builds a class names object from a given map.
 *
 * @param styles - Map of unprocessed styles.
 * @returns Map of property name to class name.
 */

function buildClassMap(styles) {
  var classes = {};

  var _loop_1 = function _loop_1(styleName) {
    if (styles.hasOwnProperty(styleName)) {
      var className_1;
      Object.defineProperty(classes, styleName, {
        get: function get() {
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


      var setImmediateCallback = function setImmediateCallback() {
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

    var callback = function callback(userCall) {
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


    var resultFunction = function resultFunction() {
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
      var noOpFunction = function noOpFunction() {
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

    var markExecuted = function markExecuted(time) {
      if (timeoutId) {
        _this.clearTimeout(timeoutId);

        timeoutId = null;
      }

      lastExecuteTime = time;
    };

    var invokeFunction = function invokeFunction(time) {
      markExecuted(time);
      lastResult = func.apply(_this._parent, lastArgs);
    };

    var callback = function callback(userCall) {
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

    var pending = function pending() {
      return !!timeoutId;
    };

    var cancel = function cancel() {
      if (pending()) {
        // Mark the debounced function as having executed
        markExecuted(new Date().getTime());
      }
    };

    var flush = function flush() {
      if (pending()) {
        invokeFunction(new Date().getTime());
      }

      return lastResult;
    }; // tslint:disable-next-line:no-any


    var resultFunction = function resultFunction() {
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


      var animationFrameCallback = function animationFrameCallback() {
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
        var processElementEvent = function processElementEvent() {
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
        var processObjectEvent = function processObjectEvent() {
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
 * Helper to get bounding client rect. Passing in window will get the window size.
 *
 * @public
 */
function getRect(element) {
  var rect;

  if (element) {
    if (element === window) {
      rect = {
        left: 0,
        top: 0,
        width: window.innerWidth,
        height: window.innerHeight,
        right: window.innerWidth,
        bottom: window.innerHeight
      };
    } else if (element.getBoundingClientRect) {
      rect = element.getBoundingClientRect();
    }
  }

  return rect;
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
 * Utility component for delaying the render of a child component after a given delay. This component
 * requires a single child component; don't pass in many components. Wrap multiple components in a DIV
 * if necessary.
 *
 * @public
 * {@docCategory DelayedRender}
 */

var DelayedRender =
/** @class */
function (_super) {
  __extends(DelayedRender, _super);

  function DelayedRender(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      isRendered: false
    };
    return _this;
  }

  DelayedRender.prototype.componentDidMount = function () {
    var _this = this;

    var delay = this.props.delay;
    this._timeoutId = window.setTimeout(function () {
      _this.setState({
        isRendered: true
      });
    }, delay);
  };

  DelayedRender.prototype.componentWillUnmount = function () {
    if (this._timeoutId) {
      clearTimeout(this._timeoutId);
    }
  };

  DelayedRender.prototype.render = function () {
    return this.state.isRendered ? React.Children.only(this.props.children) : null;
  };

  DelayedRender.defaultProps = {
    delay: 0
  };
  return DelayedRender;
}(React.Component);

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
function findIndex(array, cb) {
  var index = -1;

  for (var i = 0; array && i < array.length; i++) {
    if (cb(array[i], i)) {
      index = i;
      break;
    }
  }

  return index;
}
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
 * Returns the given key, but flips right/left arrows if necessary.
 */

function getRTLSafeKeyCode(key, theme) {
  if (theme === void 0) {
    theme = {};
  }

  if (getRTL$1(theme)) {
    if (key === KeyCodes.left) {
      key = KeyCodes.right;
    } else if (key === KeyCodes.right) {
      key = KeyCodes.left;
    }
  }

  return key;
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

  var getClassNames = function getClassNames(styleFunctionOrObject, styleProps) {
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
  } else if (_typeof(inputs) === 'object') {
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
    if (!input || typeof input !== 'function' && _typeof(input) !== 'object') {
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
  } else if (_typeof(val) === 'object' || typeof val === 'function') {
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
    _allSettings.settings = _assign(_assign({}, _allSettings.settings), settings);

    Customizations._raiseChange();
  };
  /** Apply Customizations to a particular named scope, like a component.
   * @example Customizations.applyScopedSettings('Nav', \{ styles: () =\> \{\} \});
   */


  Customizations.applyScopedSettings = function (scopeName, settings) {
    _allSettings.scopedSettings[scopeName] = _assign(_assign({}, _allSettings.scopedSettings[scopeName]), settings);

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
    return newSettings ? _assign(_assign({}, settings), newSettings) : settings;
  };
}

function _scopedSettingsMergeWith(scopedSettingsFromProps) {
  if (scopedSettingsFromProps === void 0) {
    scopedSettingsFromProps = {};
  }

  return function (oldScopedSettings) {
    var newScopedSettings = _assign({}, oldScopedSettings);

    for (var scopeName in scopedSettingsFromProps) {
      if (scopedSettingsFromProps.hasOwnProperty(scopeName)) {
        newScopedSettings[scopeName] = _assign(_assign({}, oldScopedSettings[scopeName]), scopedSettingsFromProps[scopeName]);
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
            defaultProps.styles = defaultProps.styles(_assign(_assign({}, defaultProps), componentProps));
          } // If concatStyles is true and custom styles have been defined compute those styles


          if (concatStyles && defaultProps.styles) {
            if (_this._styleCache["default"] !== defaultProps.styles || _this._styleCache.component !== componentProps.styles) {
              var mergedStyles = concatStyleSets(defaultProps.styles, componentProps.styles);
              _this._styleCache["default"] = defaultProps.styles;
              _this._styleCache.component = componentProps.styles;
              _this._styleCache.merged = mergedStyles;
            }

            return React.createElement(ComposedComponent, _assign({}, defaultProps, componentProps, {
              styles: _this._styleCache.merged
            }));
          }

          return React.createElement(ComposedComponent, _assign({}, defaultProps, componentProps));
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
 * Determines if an, or any of its ancestors, sepcificies that it doesn't want focus to wrap
 * @param element - element to start searching from
 * @param noWrapDataAttribute - the no wrap data attribute to match (either)
 * @returns true if focus should wrap, false otherwise
 */

function shouldWrapFocus(element, noWrapDataAttribute) {
  return elementContainsAttribute(element, noWrapDataAttribute) === 'true' ? false : true;
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

  var _loop_1 = function _loop_1(methodName) {
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
    if (_typeof(componentRef) === 'object') {
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

var FocusRects = function FocusRects(props) {
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

      if (_typeof(value) === 'object' && value !== null) {
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

var SELECTION_CHANGE = 'change';
/**
 * {@docCategory Selection}
 */

var SelectionMode;

(function (SelectionMode) {
  SelectionMode[SelectionMode["none"] = 0] = "none";
  SelectionMode[SelectionMode["single"] = 1] = "single";
  SelectionMode[SelectionMode["multiple"] = 2] = "multiple";
})(SelectionMode || (SelectionMode = {}));
/**
 * {@docCategory Selection}
 */


var SelectionDirection;

(function (SelectionDirection) {
  SelectionDirection[SelectionDirection["horizontal"] = 0] = "horizontal";
  SelectionDirection[SelectionDirection["vertical"] = 1] = "vertical";
})(SelectionDirection || (SelectionDirection = {}));

/**
 * {@docCategory Selection}
 */

var Selection =
/** @class */
function () {
  /**
   * Create a new Selection. If `TItem` does not have a `key` property, you must provide an options
   * object with a `getKey` implementation. Providing options is optional otherwise.
   * (At most one `options` object is accepted.)
   */
  function Selection() {
    var options = []; // Otherwise, arguments require options with `getKey`.

    for (var _i = 0 // Otherwise, arguments require options with `getKey`.
    ; _i < arguments.length // Otherwise, arguments require options with `getKey`.
    ; _i++ // Otherwise, arguments require options with `getKey`.
    ) {
      options[_i] = arguments[_i]; // Otherwise, arguments require options with `getKey`.
    }

    var _a = options[0] || {},
        onSelectionChanged = _a.onSelectionChanged,
        getKey = _a.getKey,
        _b = _a.canSelectItem,
        canSelectItem = _b === void 0 ? function () {
      return true;
    } : _b,
        _c = _a.selectionMode,
        selectionMode = _c === void 0 ? SelectionMode.multiple : _c;

    this.mode = selectionMode;
    this._getKey = getKey || defaultGetKey;
    this._changeEventSuppressionCount = 0;
    this._exemptedCount = 0;
    this._anchoredIndex = 0;
    this._unselectableCount = 0;
    this._onSelectionChanged = onSelectionChanged;
    this._canSelectItem = canSelectItem;
    this._isModal = false;
    this.setItems([], true);
    this.count = this.getSelectedCount();
  }

  Selection.prototype.canSelectItem = function (item, index) {
    if (typeof index === 'number' && index < 0) {
      return false;
    }

    return this._canSelectItem(item, index);
  };

  Selection.prototype.getKey = function (item, index) {
    var key = this._getKey(item, index);

    return typeof key === 'number' || key ? "" + key : '';
  };

  Selection.prototype.setChangeEvents = function (isEnabled, suppressChange) {
    this._changeEventSuppressionCount += isEnabled ? -1 : 1;

    if (this._changeEventSuppressionCount === 0 && this._hasChanged) {
      this._hasChanged = false;

      if (!suppressChange) {
        this._change();
      }
    }
  };

  Selection.prototype.isModal = function () {
    return this._isModal;
  };

  Selection.prototype.setModal = function (isModal) {
    if (this._isModal !== isModal) {
      this.setChangeEvents(false);
      this._isModal = isModal;

      if (!isModal) {
        this.setAllSelected(false);
      }

      this._change();

      this.setChangeEvents(true);
    }
  };
  /**
   * Selection needs the items, call this method to set them. If the set
   * of items is the same, this will re-evaluate selection and index maps.
   * Otherwise, shouldClear should be set to true, so that selection is
   * cleared.
   */


  Selection.prototype.setItems = function (items, shouldClear) {
    if (shouldClear === void 0) {
      shouldClear = true;
    }

    var newKeyToIndexMap = {};
    var newUnselectableIndices = {};
    var hasSelectionChanged = false;
    this.setChangeEvents(false); // Reset the unselectable count.

    this._unselectableCount = 0; // Build lookup table for quick selection evaluation.

    for (var i = 0; i < items.length; i++) {
      var item = items[i];

      if (item) {
        var key = this.getKey(item, i);

        if (key) {
          newKeyToIndexMap[key] = i;
        }
      }

      newUnselectableIndices[i] = item && !this.canSelectItem(item);

      if (newUnselectableIndices[i]) {
        this._unselectableCount++;
      }
    }

    if (shouldClear || items.length === 0) {
      this._setAllSelected(false, true);
    } // Check the exemption list for discrepencies.


    var newExemptedIndicies = {};
    var newExemptedCount = 0;

    for (var indexProperty in this._exemptedIndices) {
      if (this._exemptedIndices.hasOwnProperty(indexProperty)) {
        var index = Number(indexProperty);
        var item = this._items[index];
        var exemptKey = item ? this.getKey(item, Number(index)) : undefined;
        var newIndex = exemptKey ? newKeyToIndexMap[exemptKey] : index;

        if (newIndex === undefined) {
          // The item has likely been replaced or removed.
          hasSelectionChanged = true;
        } else {
          // We know the new index of the item. update the existing exemption table.
          newExemptedIndicies[newIndex] = true;
          newExemptedCount++;
          hasSelectionChanged = hasSelectionChanged || newIndex !== index;
        }
      }
    }

    if (this._items && this._exemptedCount === 0 && items.length !== this._items.length && this._isAllSelected) {
      // If everything was selected but the number of items has changed, selection has changed.
      hasSelectionChanged = true;
    }

    this._exemptedIndices = newExemptedIndicies;
    this._exemptedCount = newExemptedCount;
    this._keyToIndexMap = newKeyToIndexMap;
    this._unselectableIndices = newUnselectableIndices;
    this._items = items;
    this._selectedItems = null;

    if (hasSelectionChanged) {
      this._updateCount();

      this._change();
    }

    this.setChangeEvents(true);
  };

  Selection.prototype.getItems = function () {
    return this._items;
  };

  Selection.prototype.getSelection = function () {
    if (!this._selectedItems) {
      this._selectedItems = [];
      var items = this._items;

      if (items) {
        for (var i = 0; i < items.length; i++) {
          if (this.isIndexSelected(i)) {
            this._selectedItems.push(items[i]);
          }
        }
      }
    }

    return this._selectedItems;
  };

  Selection.prototype.getSelectedCount = function () {
    return this._isAllSelected ? this._items.length - this._exemptedCount - this._unselectableCount : this._exemptedCount;
  };

  Selection.prototype.getSelectedIndices = function () {
    if (!this._selectedIndices) {
      this._selectedIndices = [];
      var items = this._items;

      if (items) {
        for (var i = 0; i < items.length; i++) {
          if (this.isIndexSelected(i)) {
            this._selectedIndices.push(i);
          }
        }
      }
    }

    return this._selectedIndices;
  };

  Selection.prototype.isRangeSelected = function (fromIndex, count) {
    if (count === 0) {
      return false;
    }

    var endIndex = fromIndex + count;

    for (var i = fromIndex; i < endIndex; i++) {
      if (!this.isIndexSelected(i)) {
        return false;
      }
    }

    return true;
  };

  Selection.prototype.isAllSelected = function () {
    var selectableCount = this._items.length - this._unselectableCount; // In single mode, we can only have a max of 1 item.

    if (this.mode === SelectionMode.single) {
      selectableCount = Math.min(selectableCount, 1);
    }

    return this.count > 0 && this._isAllSelected && this._exemptedCount === 0 || !this._isAllSelected && this._exemptedCount === selectableCount && selectableCount > 0;
  };

  Selection.prototype.isKeySelected = function (key) {
    var index = this._keyToIndexMap[key];
    return this.isIndexSelected(index);
  };

  Selection.prototype.isIndexSelected = function (index) {
    return !!(this.count > 0 && this._isAllSelected && !this._exemptedIndices[index] && !this._unselectableIndices[index] || !this._isAllSelected && this._exemptedIndices[index]);
  };

  Selection.prototype.setAllSelected = function (isAllSelected) {
    if (isAllSelected && this.mode !== SelectionMode.multiple) {
      return;
    }

    var selectableCount = this._items ? this._items.length - this._unselectableCount : 0;
    this.setChangeEvents(false);

    if (selectableCount > 0 && (this._exemptedCount > 0 || isAllSelected !== this._isAllSelected)) {
      this._exemptedIndices = {};

      if (isAllSelected !== this._isAllSelected || this._exemptedCount > 0) {
        this._exemptedCount = 0;
        this._isAllSelected = isAllSelected;

        this._change();
      }

      this._updateCount();
    }

    this.setChangeEvents(true);
  };

  Selection.prototype.setKeySelected = function (key, isSelected, shouldAnchor) {
    var index = this._keyToIndexMap[key];

    if (index >= 0) {
      this.setIndexSelected(index, isSelected, shouldAnchor);
    }
  };

  Selection.prototype.setIndexSelected = function (index, isSelected, shouldAnchor) {
    if (this.mode === SelectionMode.none) {
      return;
    } // Clamp the index.


    index = Math.min(Math.max(0, index), this._items.length - 1); // No-op on out of bounds selections.

    if (index < 0 || index >= this._items.length) {
      return;
    }

    this.setChangeEvents(false);
    var isExempt = this._exemptedIndices[index];
    var canSelect = !this._unselectableIndices[index];

    if (canSelect) {
      if (isSelected && this.mode === SelectionMode.single) {
        // If this is single-select, the previous selection should be removed.
        this._setAllSelected(false, true);
      } // Determine if we need to remove the exemption.


      if (isExempt && (isSelected && this._isAllSelected || !isSelected && !this._isAllSelected)) {
        delete this._exemptedIndices[index];
        this._exemptedCount--;
      } // Determine if we need to add the exemption.


      if (!isExempt && (isSelected && !this._isAllSelected || !isSelected && this._isAllSelected)) {
        this._exemptedIndices[index] = true;
        this._exemptedCount++;
      }

      if (shouldAnchor) {
        this._anchoredIndex = index;
      }
    }

    this._updateCount();

    this.setChangeEvents(true);
  };

  Selection.prototype.selectToKey = function (key, clearSelection) {
    this.selectToIndex(this._keyToIndexMap[key], clearSelection);
  };

  Selection.prototype.selectToIndex = function (index, clearSelection) {
    if (this.mode === SelectionMode.none) {
      return;
    }

    if (this.mode === SelectionMode.single) {
      this.setIndexSelected(index, true, true);
      return;
    }

    var anchorIndex = this._anchoredIndex || 0;
    var startIndex = Math.min(index, anchorIndex);
    var endIndex = Math.max(index, anchorIndex);
    this.setChangeEvents(false);

    if (clearSelection) {
      this._setAllSelected(false, true);
    }

    for (; startIndex <= endIndex; startIndex++) {
      this.setIndexSelected(startIndex, true, false);
    }

    this.setChangeEvents(true);
  };

  Selection.prototype.toggleAllSelected = function () {
    this.setAllSelected(!this.isAllSelected());
  };

  Selection.prototype.toggleKeySelected = function (key) {
    this.setKeySelected(key, !this.isKeySelected(key), true);
  };

  Selection.prototype.toggleIndexSelected = function (index) {
    this.setIndexSelected(index, !this.isIndexSelected(index), true);
  };

  Selection.prototype.toggleRangeSelected = function (fromIndex, count) {
    if (this.mode === SelectionMode.none) {
      return;
    }

    var isRangeSelected = this.isRangeSelected(fromIndex, count);
    var endIndex = fromIndex + count;

    if (this.mode === SelectionMode.single && count > 1) {
      return;
    }

    this.setChangeEvents(false);

    for (var i = fromIndex; i < endIndex; i++) {
      this.setIndexSelected(i, !isRangeSelected, false);
    }

    this.setChangeEvents(true);
  };

  Selection.prototype._updateCount = function (preserveModalState) {
    if (preserveModalState === void 0) {
      preserveModalState = false;
    }

    var count = this.getSelectedCount();

    if (count !== this.count) {
      this.count = count;

      this._change();
    }

    if (!this.count && !preserveModalState) {
      this.setModal(false);
    }
  };

  Selection.prototype._setAllSelected = function (isAllSelected, preserveModalState) {
    if (preserveModalState === void 0) {
      preserveModalState = false;
    }

    if (isAllSelected && this.mode !== SelectionMode.multiple) {
      return;
    }

    var selectableCount = this._items ? this._items.length - this._unselectableCount : 0;
    this.setChangeEvents(false);

    if (selectableCount > 0 && (this._exemptedCount > 0 || isAllSelected !== this._isAllSelected)) {
      this._exemptedIndices = {};

      if (isAllSelected !== this._isAllSelected || this._exemptedCount > 0) {
        this._exemptedCount = 0;
        this._isAllSelected = isAllSelected;

        this._change();
      }

      this._updateCount(preserveModalState);
    }

    this.setChangeEvents(true);
  };

  Selection.prototype._change = function () {
    if (this._changeEventSuppressionCount === 0) {
      this._selectedItems = null;
      this._selectedIndices = undefined;
      EventGroup.raise(this, SELECTION_CHANGE);

      if (this._onSelectionChanged) {
        this._onSelectionChanged();
      }
    } else {
      this._hasChanged = true;
    }
  };

  return Selection;
}();

function defaultGetKey(item, index) {
  return item && item.key ? item.key : "" + index;
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

        return React.createElement(Component, _assign({}, rest, additionalProps, _this.props, {
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


var normalizeIconName = function normalizeIconName(name) {
  return name.toLowerCase();
};
/**
 * Registers a given subset of icons.
 *
 * @param iconSubset - the icon subset definition.
 */


function registerIcons(iconSubset, options) {
  var subset = _assign(_assign({}, iconSubset), {
    isRegistered: false,
    className: undefined
  });

  var icons = iconSubset.icons; // Grab options, optionally mix user provided ones on top.

  options = options ? _assign(_assign({}, _iconSettings.__options), options) : _iconSettings.__options;

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
 * Exporting raw duraction values and easing functions to be used in custom animations
 */

var AnimationVariables = {
  easeFunction1: EASING_FUNCTION_1,
  easeFunction2: EASING_FUNCTION_2,
  durationValue1: DURATION_1,
  durationValue2: DURATION_2,
  durationValue3: DURATION_3,
  durationValue4: DURATION_4
};
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
var HighContrastSelectorWhite = '@media screen and (-ms-high-contrast: black-on-white)';
var HighContrastSelectorBlack = '@media screen and (-ms-high-contrast: white-on-black)';

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
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
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
    state = __assign({}, state, {
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
    state = __assign({}, state, {
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

  var newPalette = _assign(_assign({}, DefaultPalette), theme.palette);

  if (!theme.palette || !theme.palette.accent) {
    newPalette.accent = newPalette.themePrimary;
  } // mix in custom overrides with good slots first, since custom overrides might be used in fixing deprecated slots


  var newSemanticColors = _assign(_assign({}, _makeSemanticColorsFromPalette(newPalette, !!theme.isInverted, depComments)), theme.semanticColors);

  var defaultFontStyles = _assign({}, DefaultFontStyles);

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
    fonts: _assign({}, defaultFontStyles),
    rtl: theme.rtl,
    semanticColors: newSemanticColors,
    isInverted: !!theme.isInverted,
    disableGlobalClassNames: !!theme.disableGlobalClassNames,
    spacing: _assign(_assign({}, DefaultSpacing), theme.spacing),
    effects: _assign(_assign({}, DefaultEffects), theme.effects)
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
    get: function get() {
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
      GlobalNavButton: "\uE700",
      ChevronDown: "\uE70D",
      ChevronUp: "\uE70E",
      Edit: "\uE70F",
      Add: "\uE710",
      Cancel: "\uE711",
      More: "\uE712",
      Settings: "\uE713",
      Mail: "\uE715",
      Filter: "\uE71C",
      Search: "\uE721",
      Share: "\uE72D",
      BlockedSite: "\uE72F",
      FavoriteStar: "\uE734",
      FavoriteStarFill: "\uE735",
      CheckMark: "\uE73E",
      Delete: "\uE74D",
      ChevronLeft: "\uE76B",
      ChevronRight: "\uE76C",
      Calendar: "\uE787",
      Megaphone: "\uE789",
      Undo: "\uE7A7",
      Flag: "\uE7C1",
      Page: "\uE7C3",
      Pinned: "\uE840",
      View: "\uE890",
      Clear: "\uE894",
      Download: "\uE896",
      Upload: "\uE898",
      Folder: "\uE8B7",
      Sort: "\uE8CB",
      AlignRight: "\uE8E2",
      AlignLeft: "\uE8E4",
      Tag: "\uE8EC",
      AddFriend: "\uE8FA",
      Info: "\uE946",
      SortLines: "\uE9D0",
      List: "\uEA37",
      CircleRing: "\uEA3A",
      Heart: "\uEB51",
      HeartFill: "\uEB52",
      Tiles: "\uECA5",
      Embed: "\uECCE",
      Glimmer: "\uECF4",
      Ascending: "\uEDC0",
      Descending: "\uEDC1",
      SortUp: "\uEE68",
      SortDown: "\uEE69",
      SyncToPC: "\uEE6E",
      LargeGrid: "\uEECB",
      SkypeCheck: "\uEF80",
      SkypeClock: "\uEF81",
      SkypeMinus: "\uEF82",
      ClearFilter: "\uEF8F",
      Flow: "\uEF90",
      StatusCircleCheckmark: "\uF13E",
      MoreVertical: "\uF2BC"
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
      'PageLink': "\uE302",
      'CommentSolid': "\uE30E",
      'ChangeEntitlements': "\uE310",
      'Installation': "\uE311",
      'WebAppBuilderModule': "\uE313",
      'WebAppBuilderFragment': "\uE314",
      'WebAppBuilderSlot': "\uE315",
      'BullseyeTargetEdit': "\uE319",
      'WebAppBuilderFragmentCreate': "\uE31B",
      'PageData': "\uE31C",
      'PageHeaderEdit': "\uE31D",
      'ProductList': "\uE31E",
      'UnpublishContent': "\uE31F",
      'DependencyAdd': "\uE344",
      'DependencyRemove': "\uE345",
      'EntitlementPolicy': "\uE346",
      'EntitlementRedemption': "\uE347",
      'SchoolDataSyncLogo': "\uE34C",
      'PinSolid12': "\uE352",
      'PinSolidOff12': "\uE353",
      'AddLink': "\uE35E",
      'SharepointAppIcon16': "\uE365",
      'DataflowsLink': "\uE366",
      'TimePicker': "\uE367",
      'UserWarning': "\uE368",
      'ComplianceAudit': "\uE369",
      'InternetSharing': "\uE704",
      'Brightness': "\uE706",
      'MapPin': "\uE707",
      'Airplane': "\uE709",
      'Tablet': "\uE70A",
      'QuickNote': "\uE70B",
      'Video': "\uE714",
      'People': "\uE716",
      'Phone': "\uE717",
      'Pin': "\uE718",
      'Shop': "\uE719",
      'Stop': "\uE71A",
      'Link': "\uE71B",
      'AllApps': "\uE71D",
      'Zoom': "\uE71E",
      'ZoomOut': "\uE71F",
      'Microphone': "\uE720",
      'Camera': "\uE722",
      'Attach': "\uE723",
      'Send': "\uE724",
      'FavoriteList': "\uE728",
      'PageSolid': "\uE729",
      'Forward': "\uE72A",
      'Back': "\uE72B",
      'Refresh': "\uE72C",
      'Lock': "\uE72E",
      'ReportHacked': "\uE730",
      'EMI': "\uE731",
      'MiniLink': "\uE732",
      'Blocked': "\uE733",
      'ReadingMode': "\uE736",
      'Favicon': "\uE737",
      'Remove': "\uE738",
      'Checkbox': "\uE739",
      'CheckboxComposite': "\uE73A",
      'CheckboxFill': "\uE73B",
      'CheckboxIndeterminate': "\uE73C",
      'CheckboxCompositeReversed': "\uE73D",
      'BackToWindow': "\uE73F",
      'FullScreen': "\uE740",
      'Print': "\uE749",
      'Up': "\uE74A",
      'Down': "\uE74B",
      'OEM': "\uE74C",
      'Save': "\uE74E",
      'ReturnKey': "\uE751",
      'Cloud': "\uE753",
      'Flashlight': "\uE754",
      'CommandPrompt': "\uE756",
      'Sad': "\uE757",
      'RealEstate': "\uE758",
      'SIPMove': "\uE759",
      'EraseTool': "\uE75C",
      'GripperTool': "\uE75E",
      'Dialpad': "\uE75F",
      'PageLeft': "\uE760",
      'PageRight': "\uE761",
      'MultiSelect': "\uE762",
      'KeyboardClassic': "\uE765",
      'Play': "\uE768",
      'Pause': "\uE769",
      'InkingTool': "\uE76D",
      'Emoji2': "\uE76E",
      'GripperBarHorizontal': "\uE76F",
      'System': "\uE770",
      'Personalize': "\uE771",
      'SearchAndApps': "\uE773",
      'Globe': "\uE774",
      'EaseOfAccess': "\uE776",
      'ContactInfo': "\uE779",
      'Unpin': "\uE77A",
      'Contact': "\uE77B",
      'Memo': "\uE77C",
      'IncomingCall': "\uE77E"
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
      'Paste': "\uE77F",
      'WindowsLogo': "\uE782",
      'Error': "\uE783",
      'GripperBarVertical': "\uE784",
      'Unlock': "\uE785",
      'Slideshow': "\uE786",
      'Trim': "\uE78A",
      'AutoEnhanceOn': "\uE78D",
      'AutoEnhanceOff': "\uE78E",
      'Color': "\uE790",
      'SaveAs': "\uE792",
      'Light': "\uE793",
      'Filters': "\uE795",
      'AspectRatio': "\uE799",
      'Contrast': "\uE7A1",
      'Redo': "\uE7A6",
      'Crop': "\uE7A8",
      'PhotoCollection': "\uE7AA",
      'Album': "\uE7AB",
      'Rotate': "\uE7AD",
      'PanoIndicator': "\uE7B0",
      'Translate': "\uE7B2",
      'RedEye': "\uE7B3",
      'ViewOriginal': "\uE7B4",
      'ThumbnailView': "\uE7B6",
      'Package': "\uE7B8",
      'Telemarketer': "\uE7B9",
      'Warning': "\uE7BA",
      'Financial': "\uE7BB",
      'Education': "\uE7BE",
      'ShoppingCart': "\uE7BF",
      'Train': "\uE7C0",
      'Move': "\uE7C2",
      'TouchPointer': "\uE7C9",
      'Merge': "\uE7D5",
      'TurnRight': "\uE7DB",
      'Ferry': "\uE7E3",
      'Highlight': "\uE7E6",
      'PowerButton': "\uE7E8",
      'Tab': "\uE7E9",
      'Admin': "\uE7EF",
      'TVMonitor': "\uE7F4",
      'Speakers': "\uE7F5",
      'Game': "\uE7FC",
      'HorizontalTabKey': "\uE7FD",
      'UnstackSelected': "\uE7FE",
      'StackIndicator': "\uE7FF",
      'Nav2DMapView': "\uE800",
      'StreetsideSplitMinimize': "\uE802",
      'Car': "\uE804",
      'Bus': "\uE806",
      'EatDrink': "\uE807",
      'SeeDo': "\uE808",
      'LocationCircle': "\uE80E",
      'Home': "\uE80F",
      'SwitcherStartEnd': "\uE810",
      'ParkingLocation': "\uE811",
      'IncidentTriangle': "\uE814",
      'Touch': "\uE815",
      'MapDirections': "\uE816",
      'CaretHollow': "\uE817",
      'CaretSolid': "\uE818",
      'History': "\uE81C",
      'Location': "\uE81D",
      'MapLayers': "\uE81E",
      'SearchNearby': "\uE820",
      'Work': "\uE821",
      'Recent': "\uE823",
      'Hotel': "\uE824",
      'Bank': "\uE825",
      'LocationDot': "\uE827",
      'Dictionary': "\uE82D",
      'ChromeBack': "\uE830",
      'FolderOpen': "\uE838",
      'PinnedFill': "\uE842",
      'RevToggleKey': "\uE845",
      'USB': "\uE88E",
      'Previous': "\uE892",
      'Next': "\uE893",
      'Sync': "\uE895",
      'Help': "\uE897",
      'Emoji': "\uE899",
      'MailForward': "\uE89C",
      'ClosePane': "\uE89F",
      'OpenPane': "\uE8A0",
      'PreviewLink': "\uE8A1",
      'ZoomIn': "\uE8A3",
      'Bookmarks': "\uE8A4",
      'Document': "\uE8A5",
      'ProtectedDocument': "\uE8A6",
      'OpenInNewWindow': "\uE8A7",
      'MailFill': "\uE8A8",
      'ViewAll': "\uE8A9",
      'Switch': "\uE8AB",
      'Rename': "\uE8AC",
      'Go': "\uE8AD",
      'Remote': "\uE8AF",
      'SelectAll': "\uE8B3",
      'Orientation': "\uE8B4",
      'Import': "\uE8B5"
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
      'Picture': "\uE8B9",
      'ChromeClose': "\uE8BB",
      'ShowResults': "\uE8BC",
      'Message': "\uE8BD",
      'CalendarDay': "\uE8BF",
      'CalendarWeek': "\uE8C0",
      'MailReplyAll': "\uE8C2",
      'Read': "\uE8C3",
      'Cut': "\uE8C6",
      'PaymentCard': "\uE8C7",
      'Copy': "\uE8C8",
      'Important': "\uE8C9",
      'MailReply': "\uE8CA",
      'GotoToday': "\uE8D1",
      'Font': "\uE8D2",
      'FontColor': "\uE8D3",
      'FolderFill': "\uE8D5",
      'Permissions': "\uE8D7",
      'DisableUpdates': "\uE8D8",
      'Unfavorite': "\uE8D9",
      'Italic': "\uE8DB",
      'Underline': "\uE8DC",
      'Bold': "\uE8DD",
      'MoveToFolder': "\uE8DE",
      'Dislike': "\uE8E0",
      'Like': "\uE8E1",
      'AlignCenter': "\uE8E3",
      'OpenFile': "\uE8E5",
      'ClearSelection': "\uE8E6",
      'FontDecrease': "\uE8E7",
      'FontIncrease': "\uE8E8",
      'FontSize': "\uE8E9",
      'CellPhone': "\uE8EA",
      'RepeatOne': "\uE8ED",
      'RepeatAll': "\uE8EE",
      'Calculator': "\uE8EF",
      'Library': "\uE8F1",
      'PostUpdate': "\uE8F3",
      'NewFolder': "\uE8F4",
      'CalendarReply': "\uE8F5",
      'UnsyncFolder': "\uE8F6",
      'SyncFolder': "\uE8F7",
      'BlockContact': "\uE8F8",
      'Accept': "\uE8FB",
      'BulletedList': "\uE8FD",
      'Preview': "\uE8FF",
      'News': "\uE900",
      'Chat': "\uE901",
      'Group': "\uE902",
      'World': "\uE909",
      'Comment': "\uE90A",
      'DockLeft': "\uE90C",
      'DockRight': "\uE90D",
      'Repair': "\uE90F",
      'Accounts': "\uE910",
      'Street': "\uE913",
      'RadioBullet': "\uE915",
      'Stopwatch': "\uE916",
      'Clock': "\uE917",
      'WorldClock': "\uE918",
      'AlarmClock': "\uE919",
      'Photo': "\uE91B",
      'ActionCenter': "\uE91C",
      'Hospital': "\uE91D",
      'Timer': "\uE91E",
      'FullCircleMask': "\uE91F",
      'LocationFill': "\uE920",
      'ChromeMinimize': "\uE921",
      'ChromeRestore': "\uE923",
      'Annotation': "\uE924",
      'Fingerprint': "\uE928",
      'Handwriting': "\uE929",
      'ChromeFullScreen': "\uE92D",
      'Completed': "\uE930",
      'Label': "\uE932",
      'FlickDown': "\uE935",
      'FlickUp': "\uE936",
      'FlickLeft': "\uE937",
      'FlickRight': "\uE938",
      'MiniExpand': "\uE93A",
      'MiniContract': "\uE93B",
      'Streaming': "\uE93E",
      'MusicInCollection': "\uE940",
      'OneDriveLogo': "\uE941",
      'CompassNW': "\uE942",
      'Code': "\uE943",
      'LightningBolt': "\uE945",
      'CalculatorMultiply': "\uE947",
      'CalculatorAddition': "\uE948",
      'CalculatorSubtract': "\uE949",
      'CalculatorPercentage': "\uE94C",
      'CalculatorEqualTo': "\uE94E",
      'PrintfaxPrinterFile': "\uE956",
      'StorageOptical': "\uE958",
      'Communications': "\uE95A",
      'Headset': "\uE95B",
      'Health': "\uE95E",
      'Webcam2': "\uE960",
      'FrontCamera': "\uE96B",
      'ChevronUpSmall': "\uE96D"
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
      'ChevronDownSmall': "\uE96E",
      'ChevronLeftSmall': "\uE96F",
      'ChevronRightSmall': "\uE970",
      'ChevronUpMed': "\uE971",
      'ChevronDownMed': "\uE972",
      'ChevronLeftMed': "\uE973",
      'ChevronRightMed': "\uE974",
      'Devices2': "\uE975",
      'PC1': "\uE977",
      'PresenceChickletVideo': "\uE979",
      'Reply': "\uE97A",
      'HalfAlpha': "\uE97E",
      'ConstructionCone': "\uE98F",
      'DoubleChevronLeftMed': "\uE991",
      'Volume0': "\uE992",
      'Volume1': "\uE993",
      'Volume2': "\uE994",
      'Volume3': "\uE995",
      'Chart': "\uE999",
      'Robot': "\uE99A",
      'Manufacturing': "\uE99C",
      'LockSolid': "\uE9A2",
      'FitPage': "\uE9A6",
      'FitWidth': "\uE9A7",
      'BidiLtr': "\uE9AA",
      'BidiRtl': "\uE9AB",
      'RightDoubleQuote': "\uE9B1",
      'Sunny': "\uE9BD",
      'CloudWeather': "\uE9BE",
      'Cloudy': "\uE9BF",
      'PartlyCloudyDay': "\uE9C0",
      'PartlyCloudyNight': "\uE9C1",
      'ClearNight': "\uE9C2",
      'RainShowersDay': "\uE9C3",
      'Rain': "\uE9C4",
      'Thunderstorms': "\uE9C6",
      'RainSnow': "\uE9C7",
      'Snow': "\uE9C8",
      'BlowingSnow': "\uE9C9",
      'Frigid': "\uE9CA",
      'Fog': "\uE9CB",
      'Squalls': "\uE9CC",
      'Duststorm': "\uE9CD",
      'Unknown': "\uE9CE",
      'Precipitation': "\uE9CF",
      'Ribbon': "\uE9D1",
      'AreaChart': "\uE9D2",
      'Assign': "\uE9D3",
      'FlowChart': "\uE9D4",
      'CheckList': "\uE9D5",
      'Diagnostic': "\uE9D9",
      'Generate': "\uE9DA",
      'LineChart': "\uE9E6",
      'Equalizer': "\uE9E9",
      'BarChartHorizontal': "\uE9EB",
      'BarChartVertical': "\uE9EC",
      'Freezing': "\uE9EF",
      'FunnelChart': "\uE9F1",
      'Processing': "\uE9F5",
      'Quantity': "\uE9F8",
      'ReportDocument': "\uE9F9",
      'StackColumnChart': "\uE9FC",
      'SnowShowerDay': "\uE9FD",
      'HailDay': "\uEA00",
      'WorkFlow': "\uEA01",
      'HourGlass': "\uEA03",
      'StoreLogoMed20': "\uEA04",
      'TimeSheet': "\uEA05",
      'TriangleSolid': "\uEA08",
      'UpgradeAnalysis': "\uEA0B",
      'VideoSolid': "\uEA0C",
      'RainShowersNight': "\uEA0F",
      'SnowShowerNight': "\uEA11",
      'Teamwork': "\uEA12",
      'HailNight': "\uEA13",
      'PeopleAdd': "\uEA15",
      'Glasses': "\uEA16",
      'DateTime2': "\uEA17",
      'Shield': "\uEA18",
      'Header1': "\uEA19",
      'PageAdd': "\uEA1A",
      'NumberedList': "\uEA1C",
      'PowerBILogo': "\uEA1E",
      'Info2': "\uEA1F",
      'MusicInCollectionFill': "\uEA36",
      'Asterisk': "\uEA38",
      'ErrorBadge': "\uEA39",
      'CircleFill': "\uEA3B",
      'Record2': "\uEA3F",
      'AllAppsMirrored': "\uEA40",
      'BookmarksMirrored': "\uEA41",
      'BulletedListMirrored': "\uEA42",
      'CaretHollowMirrored': "\uEA45",
      'CaretSolidMirrored': "\uEA46",
      'ChromeBackMirrored': "\uEA47",
      'ClearSelectionMirrored': "\uEA48",
      'ClosePaneMirrored': "\uEA49",
      'DockLeftMirrored': "\uEA4C",
      'DoubleChevronLeftMedMirrored': "\uEA4D",
      'GoMirrored': "\uEA4F"
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
      'HelpMirrored': "\uEA51",
      'ImportMirrored': "\uEA52",
      'ImportAllMirrored': "\uEA53",
      'ListMirrored': "\uEA55",
      'MailForwardMirrored': "\uEA56",
      'MailReplyMirrored': "\uEA57",
      'MailReplyAllMirrored': "\uEA58",
      'MiniContractMirrored': "\uEA59",
      'MiniExpandMirrored': "\uEA5A",
      'OpenPaneMirrored': "\uEA5B",
      'ParkingLocationMirrored': "\uEA5E",
      'SendMirrored': "\uEA63",
      'ShowResultsMirrored': "\uEA65",
      'ThumbnailViewMirrored': "\uEA67",
      'Media': "\uEA69",
      'Devices3': "\uEA6C",
      'Focus': "\uEA6F",
      'VideoLightOff': "\uEA74",
      'Lightbulb': "\uEA80",
      'StatusTriangle': "\uEA82",
      'VolumeDisabled': "\uEA85",
      'Puzzle': "\uEA86",
      'EmojiNeutral': "\uEA87",
      'EmojiDisappointed': "\uEA88",
      'HomeSolid': "\uEA8A",
      'Ringer': "\uEA8F",
      'PDF': "\uEA90",
      'HeartBroken': "\uEA92",
      'StoreLogo16': "\uEA96",
      'MultiSelectMirrored': "\uEA98",
      'Broom': "\uEA99",
      'AddToShoppingList': "\uEA9A",
      'Cocktails': "\uEA9D",
      'Wines': "\uEABF",
      'Articles': "\uEAC1",
      'Cycling': "\uEAC7",
      'DietPlanNotebook': "\uEAC8",
      'Pill': "\uEACB",
      'ExerciseTracker': "\uEACC",
      'HandsFree': "\uEAD0",
      'Medical': "\uEAD4",
      'Running': "\uEADA",
      'Weights': "\uEADB",
      'Trackers': "\uEADF",
      'AddNotes': "\uEAE3",
      'AllCurrency': "\uEAE4",
      'BarChart4': "\uEAE7",
      'CirclePlus': "\uEAEE",
      'Coffee': "\uEAEF",
      'Cotton': "\uEAF3",
      'Market': "\uEAFC",
      'Money': "\uEAFD",
      'PieDouble': "\uEB04",
      'PieSingle': "\uEB05",
      'RemoveFilter': "\uEB08",
      'Savings': "\uEB0B",
      'Sell': "\uEB0C",
      'StockDown': "\uEB0F",
      'StockUp': "\uEB11",
      'Lamp': "\uEB19",
      'Source': "\uEB1B",
      'MSNVideos': "\uEB1C",
      'Cricket': "\uEB1E",
      'Golf': "\uEB1F",
      'Baseball': "\uEB20",
      'Soccer': "\uEB21",
      'MoreSports': "\uEB22",
      'AutoRacing': "\uEB24",
      'CollegeHoops': "\uEB25",
      'CollegeFootball': "\uEB26",
      'ProFootball': "\uEB27",
      'ProHockey': "\uEB28",
      'Rugby': "\uEB2D",
      'SubstitutionsIn': "\uEB31",
      'Tennis': "\uEB33",
      'Arrivals': "\uEB34",
      'Design': "\uEB3C",
      'Website': "\uEB41",
      'Drop': "\uEB42",
      'HistoricalWeather': "\uEB43",
      'SkiResorts': "\uEB45",
      'Snowflake': "\uEB46",
      'BusSolid': "\uEB47",
      'FerrySolid': "\uEB48",
      'AirplaneSolid': "\uEB4C",
      'TrainSolid': "\uEB4D",
      'Ticket': "\uEB54",
      'WifiWarning4': "\uEB63",
      'Devices4': "\uEB66",
      'AzureLogo': "\uEB6A",
      'BingLogo': "\uEB6B",
      'MSNLogo': "\uEB6C",
      'OutlookLogoInverse': "\uEB6D",
      'OfficeLogo': "\uEB6E",
      'SkypeLogo': "\uEB6F",
      'Door': "\uEB75",
      'EditMirrored': "\uEB7E",
      'GiftCard': "\uEB8E",
      'DoubleBookmark': "\uEB8F",
      'StatusErrorFull': "\uEB90"
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
      'Certificate': "\uEB95",
      'FastForward': "\uEB9D",
      'Rewind': "\uEB9E",
      'Photo2': "\uEB9F",
      'OpenSource': "\uEBC2",
      'Movers': "\uEBCD",
      'CloudDownload': "\uEBD3",
      'Family': "\uEBDA",
      'WindDirection': "\uEBE6",
      'Bug': "\uEBE8",
      'SiteScan': "\uEBEC",
      'BrowserScreenShot': "\uEBED",
      'F12DevTools': "\uEBEE",
      'CSS': "\uEBEF",
      'JS': "\uEBF0",
      'DeliveryTruck': "\uEBF4",
      'ReminderPerson': "\uEBF7",
      'ReminderGroup': "\uEBF8",
      'ReminderTime': "\uEBF9",
      'TabletMode': "\uEBFC",
      'Umbrella': "\uEC04",
      'NetworkTower': "\uEC05",
      'CityNext': "\uEC06",
      'CityNext2': "\uEC07",
      'Section': "\uEC0C",
      'OneNoteLogoInverse': "\uEC0D",
      'ToggleFilled': "\uEC11",
      'ToggleBorder': "\uEC12",
      'SliderThumb': "\uEC13",
      'ToggleThumb': "\uEC14",
      'Documentation': "\uEC17",
      'Badge': "\uEC1B",
      'Giftbox': "\uEC1F",
      'VisualStudioLogo': "\uEC22",
      'HomeGroup': "\uEC26",
      'ExcelLogoInverse': "\uEC28",
      'WordLogoInverse': "\uEC29",
      'PowerPointLogoInverse': "\uEC2A",
      'Cafe': "\uEC32",
      'SpeedHigh': "\uEC4A",
      'Commitments': "\uEC4D",
      'ThisPC': "\uEC4E",
      'MusicNote': "\uEC4F",
      'MicOff': "\uEC54",
      'PlaybackRate1x': "\uEC57",
      'EdgeLogo': "\uEC60",
      'CompletedSolid': "\uEC61",
      'AlbumRemove': "\uEC62",
      'MessageFill': "\uEC70",
      'TabletSelected': "\uEC74",
      'MobileSelected': "\uEC75",
      'LaptopSelected': "\uEC76",
      'TVMonitorSelected': "\uEC77",
      'DeveloperTools': "\uEC7A",
      'Shapes': "\uEC7C",
      'InsertTextBox': "\uEC7D",
      'LowerBrightness': "\uEC8A",
      'WebComponents': "\uEC8B",
      'OfflineStorage': "\uEC8C",
      'DOM': "\uEC8D",
      'CloudUpload': "\uEC8E",
      'ScrollUpDown': "\uEC8F",
      'DateTime': "\uEC92",
      'Event': "\uECA3",
      'Cake': "\uECA4",
      'Org': "\uECA6",
      'PartyLeader': "\uECA7",
      'DRM': "\uECA8",
      'CloudAdd': "\uECA9",
      'AppIconDefault': "\uECAA",
      'Photo2Add': "\uECAB",
      'Photo2Remove': "\uECAC",
      'Calories': "\uECAD",
      'POI': "\uECAF",
      'AddTo': "\uECC8",
      'RadioBtnOff': "\uECCA",
      'RadioBtnOn': "\uECCB",
      'ExploreContent': "\uECCD",
      'Product': "\uECDC",
      'ProgressLoopInner': "\uECDE",
      'ProgressLoopOuter': "\uECDF",
      'Blocked2': "\uECE4",
      'FangBody': "\uECEB",
      'Toolbox': "\uECED",
      'PageHeader': "\uECEE",
      'ChatInviteFriend': "\uECFE",
      'Brush': "\uECFF",
      'Shirt': "\uED00",
      'Crown': "\uED01",
      'Diamond': "\uED02",
      'ScaleUp': "\uED09",
      'QRCode': "\uED14",
      'Feedback': "\uED15",
      'SharepointLogoInverse': "\uED18",
      'YammerLogo': "\uED19",
      'Hide': "\uED1A",
      'Uneditable': "\uED1D",
      'ReturnToSession': "\uED24",
      'OpenFolderHorizontal': "\uED25",
      'CalendarMirrored': "\uED28"
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
      'SwayLogoInverse': "\uED29",
      'OutOfOffice': "\uED34",
      'Trophy': "\uED3F",
      'ReopenPages': "\uED50",
      'EmojiTabSymbols': "\uED58",
      'AADLogo': "\uED68",
      'AccessLogo': "\uED69",
      'AdminALogoInverse32': "\uED6A",
      'AdminCLogoInverse32': "\uED6B",
      'AdminDLogoInverse32': "\uED6C",
      'AdminELogoInverse32': "\uED6D",
      'AdminLLogoInverse32': "\uED6E",
      'AdminMLogoInverse32': "\uED6F",
      'AdminOLogoInverse32': "\uED70",
      'AdminPLogoInverse32': "\uED71",
      'AdminSLogoInverse32': "\uED72",
      'AdminYLogoInverse32': "\uED73",
      'DelveLogoInverse': "\uED76",
      'ExchangeLogoInverse': "\uED78",
      'LyncLogo': "\uED79",
      'OfficeVideoLogoInverse': "\uED7A",
      'SocialListeningLogo': "\uED7C",
      'VisioLogoInverse': "\uED7D",
      'Balloons': "\uED7E",
      'Cat': "\uED7F",
      'MailAlert': "\uED80",
      'MailCheck': "\uED81",
      'MailLowImportance': "\uED82",
      'MailPause': "\uED83",
      'MailRepeat': "\uED84",
      'SecurityGroup': "\uED85",
      'Table': "\uED86",
      'VoicemailForward': "\uED87",
      'VoicemailReply': "\uED88",
      'Waffle': "\uED89",
      'RemoveEvent': "\uED8A",
      'EventInfo': "\uED8B",
      'ForwardEvent': "\uED8C",
      'WipePhone': "\uED8D",
      'AddOnlineMeeting': "\uED8E",
      'JoinOnlineMeeting': "\uED8F",
      'RemoveLink': "\uED90",
      'PeopleBlock': "\uED91",
      'PeopleRepeat': "\uED92",
      'PeopleAlert': "\uED93",
      'PeoplePause': "\uED94",
      'TransferCall': "\uED95",
      'AddPhone': "\uED96",
      'UnknownCall': "\uED97",
      'NoteReply': "\uED98",
      'NoteForward': "\uED99",
      'NotePinned': "\uED9A",
      'RemoveOccurrence': "\uED9B",
      'Timeline': "\uED9C",
      'EditNote': "\uED9D",
      'CircleHalfFull': "\uED9E",
      'Room': "\uED9F",
      'Unsubscribe': "\uEDA0",
      'Subscribe': "\uEDA1",
      'HardDrive': "\uEDA2",
      'RecurringTask': "\uEDB2",
      'TaskManager': "\uEDB7",
      'TaskManagerMirrored': "\uEDB8",
      'Combine': "\uEDBB",
      'Split': "\uEDBC",
      'DoubleChevronUp': "\uEDBD",
      'DoubleChevronLeft': "\uEDBE",
      'DoubleChevronRight': "\uEDBF",
      'TextBox': "\uEDC2",
      'TextField': "\uEDC3",
      'NumberField': "\uEDC4",
      'Dropdown': "\uEDC5",
      'PenWorkspace': "\uEDC6",
      'BookingsLogo': "\uEDC7",
      'ClassNotebookLogoInverse': "\uEDC8",
      'DelveAnalyticsLogo': "\uEDCA",
      'DocsLogoInverse': "\uEDCB",
      'Dynamics365Logo': "\uEDCC",
      'DynamicSMBLogo': "\uEDCD",
      'OfficeAssistantLogo': "\uEDCE",
      'OfficeStoreLogo': "\uEDCF",
      'OneNoteEduLogoInverse': "\uEDD0",
      'PlannerLogo': "\uEDD1",
      'PowerApps': "\uEDD2",
      'Suitcase': "\uEDD3",
      'ProjectLogoInverse': "\uEDD4",
      'CaretLeft8': "\uEDD5",
      'CaretRight8': "\uEDD6",
      'CaretUp8': "\uEDD7",
      'CaretDown8': "\uEDD8",
      'CaretLeftSolid8': "\uEDD9",
      'CaretRightSolid8': "\uEDDA",
      'CaretUpSolid8': "\uEDDB",
      'CaretDownSolid8': "\uEDDC",
      'ClearFormatting': "\uEDDD",
      'Superscript': "\uEDDE",
      'Subscript': "\uEDDF",
      'Strikethrough': "\uEDE0",
      'Export': "\uEDE1",
      'ExportMirrored': "\uEDE2"
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
      'SingleBookmark': "\uEDFF",
      'SingleBookmarkSolid': "\uEE00",
      'DoubleChevronDown': "\uEE04",
      'FollowUser': "\uEE05",
      'ReplyAll': "\uEE0A",
      'WorkforceManagement': "\uEE0F",
      'RecruitmentManagement': "\uEE12",
      'Questionnaire': "\uEE19",
      'ManagerSelfService': "\uEE23",
      'ProductionFloorManagement': "\uEE29",
      'ProductRelease': "\uEE2E",
      'ProductVariant': "\uEE30",
      'ReplyMirrored': "\uEE35",
      'ReplyAllMirrored': "\uEE36",
      'Medal': "\uEE38",
      'AddGroup': "\uEE3D",
      'QuestionnaireMirrored': "\uEE4B",
      'CloudImportExport': "\uEE55",
      'TemporaryUser': "\uEE58",
      'CaretSolid16': "\uEE62",
      'GroupedDescending': "\uEE66",
      'GroupedAscending': "\uEE67",
      'AwayStatus': "\uEE6A",
      'MyMoviesTV': "\uEE6C",
      'GenericScan': "\uEE6F",
      'AustralianRules': "\uEE70",
      'WifiEthernet': "\uEE77",
      'TrackersMirrored': "\uEE92",
      'DateTimeMirrored': "\uEE93",
      'StopSolid': "\uEE95",
      'DoubleChevronUp12': "\uEE96",
      'DoubleChevronDown12': "\uEE97",
      'DoubleChevronLeft12': "\uEE98",
      'DoubleChevronRight12': "\uEE99",
      'CalendarAgenda': "\uEE9A",
      'ConnectVirtualMachine': "\uEE9D",
      'AddEvent': "\uEEB5",
      'AssetLibrary': "\uEEB6",
      'DataConnectionLibrary': "\uEEB7",
      'DocLibrary': "\uEEB8",
      'FormLibrary': "\uEEB9",
      'FormLibraryMirrored': "\uEEBA",
      'ReportLibrary': "\uEEBB",
      'ReportLibraryMirrored': "\uEEBC",
      'ContactCard': "\uEEBD",
      'CustomList': "\uEEBE",
      'CustomListMirrored': "\uEEBF",
      'IssueTracking': "\uEEC0",
      'IssueTrackingMirrored': "\uEEC1",
      'PictureLibrary': "\uEEC2",
      'OfficeAddinsLogo': "\uEEC7",
      'OfflineOneDriveParachute': "\uEEC8",
      'OfflineOneDriveParachuteDisabled': "\uEEC9",
      'TriangleSolidUp12': "\uEECC",
      'TriangleSolidDown12': "\uEECD",
      'TriangleSolidLeft12': "\uEECE",
      'TriangleSolidRight12': "\uEECF",
      'TriangleUp12': "\uEED0",
      'TriangleDown12': "\uEED1",
      'TriangleLeft12': "\uEED2",
      'TriangleRight12': "\uEED3",
      'ArrowUpRight8': "\uEED4",
      'ArrowDownRight8': "\uEED5",
      'DocumentSet': "\uEED6",
      'GoToDashboard': "\uEEED",
      'DelveAnalytics': "\uEEEE",
      'ArrowUpRightMirrored8': "\uEEEF",
      'ArrowDownRightMirrored8': "\uEEF0",
      'CompanyDirectory': "\uEF0D",
      'OpenEnrollment': "\uEF1C",
      'CompanyDirectoryMirrored': "\uEF2B",
      'OneDriveAdd': "\uEF32",
      'ProfileSearch': "\uEF35",
      'Header2': "\uEF36",
      'Header3': "\uEF37",
      'Header4': "\uEF38",
      'RingerSolid': "\uEF3A",
      'Eyedropper': "\uEF3C",
      'MarketDown': "\uEF42",
      'CalendarWorkWeek': "\uEF51",
      'SidePanel': "\uEF52",
      'GlobeFavorite': "\uEF53",
      'CaretTopLeftSolid8': "\uEF54",
      'CaretTopRightSolid8': "\uEF55",
      'ViewAll2': "\uEF56",
      'DocumentReply': "\uEF57",
      'PlayerSettings': "\uEF58",
      'ReceiptForward': "\uEF59",
      'ReceiptReply': "\uEF5A",
      'ReceiptCheck': "\uEF5B",
      'Fax': "\uEF5C",
      'RecurringEvent': "\uEF5D",
      'ReplyAlt': "\uEF5E",
      'ReplyAllAlt': "\uEF5F",
      'EditStyle': "\uEF60",
      'EditMail': "\uEF61",
      'Lifesaver': "\uEF62",
      'LifesaverLock': "\uEF63",
      'InboxCheck': "\uEF64",
      'FolderSearch': "\uEF65"
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
      'CollapseMenu': "\uEF66",
      'ExpandMenu': "\uEF67",
      'Boards': "\uEF68",
      'SunAdd': "\uEF69",
      'SunQuestionMark': "\uEF6A",
      'LandscapeOrientation': "\uEF6B",
      'DocumentSearch': "\uEF6C",
      'PublicCalendar': "\uEF6D",
      'PublicContactCard': "\uEF6E",
      'PublicEmail': "\uEF6F",
      'PublicFolder': "\uEF70",
      'WordDocument': "\uEF71",
      'PowerPointDocument': "\uEF72",
      'ExcelDocument': "\uEF73",
      'GroupedList': "\uEF74",
      'ClassroomLogo': "\uEF75",
      'Sections': "\uEF76",
      'EditPhoto': "\uEF77",
      'Starburst': "\uEF78",
      'ShareiOS': "\uEF79",
      'AirTickets': "\uEF7A",
      'PencilReply': "\uEF7B",
      'Tiles2': "\uEF7C",
      'SkypeCircleCheck': "\uEF7D",
      'SkypeCircleClock': "\uEF7E",
      'SkypeCircleMinus': "\uEF7F",
      'SkypeMessage': "\uEF83",
      'ClosedCaption': "\uEF84",
      'ATPLogo': "\uEF85",
      'OfficeFormsLogoInverse': "\uEF86",
      'RecycleBin': "\uEF87",
      'EmptyRecycleBin': "\uEF88",
      'Hide2': "\uEF89",
      'Breadcrumb': "\uEF8C",
      'BirthdayCake': "\uEF8D",
      'TimeEntry': "\uEF95",
      'CRMProcesses': "\uEFB1",
      'PageEdit': "\uEFB6",
      'PageArrowRight': "\uEFB8",
      'PageRemove': "\uEFBA",
      'Database': "\uEFC7",
      'DataManagementSettings': "\uEFC8",
      'CRMServices': "\uEFD2",
      'EditContact': "\uEFD3",
      'ConnectContacts': "\uEFD4",
      'AppIconDefaultAdd': "\uEFDA",
      'AppIconDefaultList': "\uEFDE",
      'ActivateOrders': "\uEFE0",
      'DeactivateOrders': "\uEFE1",
      'ProductCatalog': "\uEFE8",
      'ScatterChart': "\uEFEB",
      'AccountActivity': "\uEFF4",
      'DocumentManagement': "\uEFFC",
      'CRMReport': "\uEFFE",
      'KnowledgeArticle': "\uF000",
      'Relationship': "\uF003",
      'HomeVerify': "\uF00E",
      'ZipFolder': "\uF012",
      'SurveyQuestions': "\uF01B",
      'TextDocument': "\uF029",
      'TextDocumentShared': "\uF02B",
      'PageCheckedOut': "\uF02C",
      'PageShared': "\uF02D",
      'SaveAndClose': "\uF038",
      'Script': "\uF03A",
      'Archive': "\uF03F",
      'ActivityFeed': "\uF056",
      'Compare': "\uF057",
      'EventDate': "\uF059",
      'ArrowUpRight': "\uF069",
      'CaretRight': "\uF06B",
      'SetAction': "\uF071",
      'ChatBot': "\uF08B",
      'CaretSolidLeft': "\uF08D",
      'CaretSolidDown': "\uF08E",
      'CaretSolidRight': "\uF08F",
      'CaretSolidUp': "\uF090",
      'PowerAppsLogo': "\uF091",
      'PowerApps2Logo': "\uF092",
      'SearchIssue': "\uF09A",
      'SearchIssueMirrored': "\uF09B",
      'FabricAssetLibrary': "\uF09C",
      'FabricDataConnectionLibrary': "\uF09D",
      'FabricDocLibrary': "\uF09E",
      'FabricFormLibrary': "\uF09F",
      'FabricFormLibraryMirrored': "\uF0A0",
      'FabricReportLibrary': "\uF0A1",
      'FabricReportLibraryMirrored': "\uF0A2",
      'FabricPublicFolder': "\uF0A3",
      'FabricFolderSearch': "\uF0A4",
      'FabricMovetoFolder': "\uF0A5",
      'FabricUnsyncFolder': "\uF0A6",
      'FabricSyncFolder': "\uF0A7",
      'FabricOpenFolderHorizontal': "\uF0A8",
      'FabricFolder': "\uF0A9",
      'FabricFolderFill': "\uF0AA",
      'FabricNewFolder': "\uF0AB",
      'FabricPictureLibrary': "\uF0AC",
      'PhotoVideoMedia': "\uF0B1",
      'AddFavorite': "\uF0C8"
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
      'AddFavoriteFill': "\uF0C9",
      'BufferTimeBefore': "\uF0CF",
      'BufferTimeAfter': "\uF0D0",
      'BufferTimeBoth': "\uF0D1",
      'PublishContent': "\uF0D4",
      'ClipboardList': "\uF0E3",
      'ClipboardListMirrored': "\uF0E4",
      'CannedChat': "\uF0F2",
      'SkypeForBusinessLogo': "\uF0FC",
      'TabCenter': "\uF100",
      'PageCheckedin': "\uF104",
      'PageList': "\uF106",
      'ReadOutLoud': "\uF112",
      'CaretBottomLeftSolid8': "\uF121",
      'CaretBottomRightSolid8': "\uF122",
      'FolderHorizontal': "\uF12B",
      'MicrosoftStaffhubLogo': "\uF130",
      'GiftboxOpen': "\uF133",
      'StatusCircleOuter': "\uF136",
      'StatusCircleInner': "\uF137",
      'StatusCircleRing': "\uF138",
      'StatusTriangleOuter': "\uF139",
      'StatusTriangleInner': "\uF13A",
      'StatusTriangleExclamation': "\uF13B",
      'StatusCircleExclamation': "\uF13C",
      'StatusCircleErrorX': "\uF13D",
      'StatusCircleInfo': "\uF13F",
      'StatusCircleBlock': "\uF140",
      'StatusCircleBlock2': "\uF141",
      'StatusCircleQuestionMark': "\uF142",
      'StatusCircleSync': "\uF143",
      'Toll': "\uF160",
      'ExploreContentSingle': "\uF164",
      'CollapseContent': "\uF165",
      'CollapseContentSingle': "\uF166",
      'InfoSolid': "\uF167",
      'GroupList': "\uF168",
      'ProgressRingDots': "\uF16A",
      'CaloriesAdd': "\uF172",
      'BranchFork': "\uF173",
      'MuteChat': "\uF17A",
      'AddHome': "\uF17B",
      'AddWork': "\uF17C",
      'MobileReport': "\uF18A",
      'ScaleVolume': "\uF18C",
      'HardDriveGroup': "\uF18F",
      'FastMode': "\uF19A",
      'ToggleLeft': "\uF19E",
      'ToggleRight': "\uF19F",
      'TriangleShape': "\uF1A7",
      'RectangleShape': "\uF1A9",
      'CubeShape': "\uF1AA",
      'Trophy2': "\uF1AE",
      'BucketColor': "\uF1B6",
      'BucketColorFill': "\uF1B7",
      'Taskboard': "\uF1C2",
      'SingleColumn': "\uF1D3",
      'DoubleColumn': "\uF1D4",
      'TripleColumn': "\uF1D5",
      'ColumnLeftTwoThirds': "\uF1D6",
      'ColumnRightTwoThirds': "\uF1D7",
      'AccessLogoFill': "\uF1DB",
      'AnalyticsLogo': "\uF1DE",
      'AnalyticsQuery': "\uF1DF",
      'NewAnalyticsQuery': "\uF1E0",
      'AnalyticsReport': "\uF1E1",
      'WordLogo': "\uF1E3",
      'WordLogoFill': "\uF1E4",
      'ExcelLogo': "\uF1E5",
      'ExcelLogoFill': "\uF1E6",
      'OneNoteLogo': "\uF1E7",
      'OneNoteLogoFill': "\uF1E8",
      'OutlookLogo': "\uF1E9",
      'OutlookLogoFill': "\uF1EA",
      'PowerPointLogo': "\uF1EB",
      'PowerPointLogoFill': "\uF1EC",
      'PublisherLogo': "\uF1ED",
      'PublisherLogoFill': "\uF1EE",
      'ScheduleEventAction': "\uF1EF",
      'FlameSolid': "\uF1F3",
      'ServerProcesses': "\uF1FE",
      'Server': "\uF201",
      'SaveAll': "\uF203",
      'LinkedInLogo': "\uF20A",
      'Decimals': "\uF218",
      'SidePanelMirrored': "\uF221",
      'ProtectRestrict': "\uF22A",
      'Blog': "\uF22B",
      'UnknownMirrored': "\uF22E",
      'PublicContactCardMirrored': "\uF230",
      'GridViewSmall': "\uF232",
      'GridViewMedium': "\uF233",
      'GridViewLarge': "\uF234",
      'Step': "\uF241",
      'StepInsert': "\uF242",
      'StepShared': "\uF243",
      'StepSharedAdd': "\uF244",
      'StepSharedInsert': "\uF245",
      'ViewDashboard': "\uF246",
      'ViewList': "\uF247"
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
      'ViewListGroup': "\uF248",
      'ViewListTree': "\uF249",
      'TriggerAuto': "\uF24A",
      'TriggerUser': "\uF24B",
      'PivotChart': "\uF24C",
      'StackedBarChart': "\uF24D",
      'StackedLineChart': "\uF24E",
      'BuildQueue': "\uF24F",
      'BuildQueueNew': "\uF250",
      'UserFollowed': "\uF25C",
      'ContactLink': "\uF25F",
      'Stack': "\uF26F",
      'Bullseye': "\uF272",
      'VennDiagram': "\uF273",
      'FiveTileGrid': "\uF274",
      'FocalPoint': "\uF277",
      'Insert': "\uF278",
      'RingerRemove': "\uF279",
      'TeamsLogoInverse': "\uF27A",
      'TeamsLogo': "\uF27B",
      'TeamsLogoFill': "\uF27C",
      'SkypeForBusinessLogoFill': "\uF27D",
      'SharepointLogo': "\uF27E",
      'SharepointLogoFill': "\uF27F",
      'DelveLogo': "\uF280",
      'DelveLogoFill': "\uF281",
      'OfficeVideoLogo': "\uF282",
      'OfficeVideoLogoFill': "\uF283",
      'ExchangeLogo': "\uF284",
      'ExchangeLogoFill': "\uF285",
      'Signin': "\uF286",
      'DocumentApproval': "\uF28B",
      'CloneToDesktop': "\uF28C",
      'InstallToDrive': "\uF28D",
      'Blur': "\uF28E",
      'Build': "\uF28F",
      'ProcessMetaTask': "\uF290",
      'BranchFork2': "\uF291",
      'BranchLocked': "\uF292",
      'BranchCommit': "\uF293",
      'BranchCompare': "\uF294",
      'BranchMerge': "\uF295",
      'BranchPullRequest': "\uF296",
      'BranchSearch': "\uF297",
      'BranchShelveset': "\uF298",
      'RawSource': "\uF299",
      'MergeDuplicate': "\uF29A",
      'RowsGroup': "\uF29B",
      'RowsChild': "\uF29C",
      'Deploy': "\uF29D",
      'Redeploy': "\uF29E",
      'ServerEnviroment': "\uF29F",
      'VisioDiagram': "\uF2A0",
      'HighlightMappedShapes': "\uF2A1",
      'TextCallout': "\uF2A2",
      'IconSetsFlag': "\uF2A4",
      'VisioLogo': "\uF2A7",
      'VisioLogoFill': "\uF2A8",
      'VisioDocument': "\uF2A9",
      'TimelineProgress': "\uF2AA",
      'TimelineDelivery': "\uF2AB",
      'Backlog': "\uF2AC",
      'TeamFavorite': "\uF2AD",
      'TaskGroup': "\uF2AE",
      'TaskGroupMirrored': "\uF2AF",
      'ScopeTemplate': "\uF2B0",
      'AssessmentGroupTemplate': "\uF2B1",
      'NewTeamProject': "\uF2B2",
      'CommentAdd': "\uF2B3",
      'CommentNext': "\uF2B4",
      'CommentPrevious': "\uF2B5",
      'ShopServer': "\uF2B6",
      'LocaleLanguage': "\uF2B7",
      'QueryList': "\uF2B8",
      'UserSync': "\uF2B9",
      'UserPause': "\uF2BA",
      'StreamingOff': "\uF2BB",
      'ArrowTallUpLeft': "\uF2BD",
      'ArrowTallUpRight': "\uF2BE",
      'ArrowTallDownLeft': "\uF2BF",
      'ArrowTallDownRight': "\uF2C0",
      'FieldEmpty': "\uF2C1",
      'FieldFilled': "\uF2C2",
      'FieldChanged': "\uF2C3",
      'FieldNotChanged': "\uF2C4",
      'RingerOff': "\uF2C5",
      'PlayResume': "\uF2C6",
      'BulletedList2': "\uF2C7",
      'BulletedList2Mirrored': "\uF2C8",
      'ImageCrosshair': "\uF2C9",
      'GitGraph': "\uF2CA",
      'Repo': "\uF2CB",
      'RepoSolid': "\uF2CC",
      'FolderQuery': "\uF2CD",
      'FolderList': "\uF2CE",
      'FolderListMirrored': "\uF2CF",
      'LocationOutline': "\uF2D0",
      'POISolid': "\uF2D1",
      'CalculatorNotEqualTo': "\uF2D2",
      'BoxSubtractSolid': "\uF2D3"
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
      'BoxAdditionSolid': "\uF2D4",
      'BoxMultiplySolid': "\uF2D5",
      'BoxPlaySolid': "\uF2D6",
      'BoxCheckmarkSolid': "\uF2D7",
      'CirclePauseSolid': "\uF2D8",
      'CirclePause': "\uF2D9",
      'MSNVideosSolid': "\uF2DA",
      'CircleStopSolid': "\uF2DB",
      'CircleStop': "\uF2DC",
      'NavigateBack': "\uF2DD",
      'NavigateBackMirrored': "\uF2DE",
      'NavigateForward': "\uF2DF",
      'NavigateForwardMirrored': "\uF2E0",
      'UnknownSolid': "\uF2E1",
      'UnknownMirroredSolid': "\uF2E2",
      'CircleAddition': "\uF2E3",
      'CircleAdditionSolid': "\uF2E4",
      'FilePDB': "\uF2E5",
      'FileTemplate': "\uF2E6",
      'FileSQL': "\uF2E7",
      'FileJAVA': "\uF2E8",
      'FileASPX': "\uF2E9",
      'FileCSS': "\uF2EA",
      'FileSass': "\uF2EB",
      'FileLess': "\uF2EC",
      'FileHTML': "\uF2ED",
      'JavaScriptLanguage': "\uF2EE",
      'CSharpLanguage': "\uF2EF",
      'CSharp': "\uF2F0",
      'VisualBasicLanguage': "\uF2F1",
      'VB': "\uF2F2",
      'CPlusPlusLanguage': "\uF2F3",
      'CPlusPlus': "\uF2F4",
      'FSharpLanguage': "\uF2F5",
      'FSharp': "\uF2F6",
      'TypeScriptLanguage': "\uF2F7",
      'PythonLanguage': "\uF2F8",
      'PY': "\uF2F9",
      'CoffeeScript': "\uF2FA",
      'MarkDownLanguage': "\uF2FB",
      'FullWidth': "\uF2FE",
      'FullWidthEdit': "\uF2FF",
      'Plug': "\uF300",
      'PlugSolid': "\uF301",
      'PlugConnected': "\uF302",
      'PlugDisconnected': "\uF303",
      'UnlockSolid': "\uF304",
      'Variable': "\uF305",
      'Parameter': "\uF306",
      'CommentUrgent': "\uF307",
      'Storyboard': "\uF308",
      'DiffInline': "\uF309",
      'DiffSideBySide': "\uF30A",
      'ImageDiff': "\uF30B",
      'ImagePixel': "\uF30C",
      'FileBug': "\uF30D",
      'FileCode': "\uF30E",
      'FileComment': "\uF30F",
      'BusinessHoursSign': "\uF310",
      'FileImage': "\uF311",
      'FileSymlink': "\uF312",
      'AutoFillTemplate': "\uF313",
      'WorkItem': "\uF314",
      'WorkItemBug': "\uF315",
      'LogRemove': "\uF316",
      'ColumnOptions': "\uF317",
      'Packages': "\uF318",
      'BuildIssue': "\uF319",
      'AssessmentGroup': "\uF31A",
      'VariableGroup': "\uF31B",
      'FullHistory': "\uF31C",
      'Wheelchair': "\uF31F",
      'SingleColumnEdit': "\uF321",
      'DoubleColumnEdit': "\uF322",
      'TripleColumnEdit': "\uF323",
      'ColumnLeftTwoThirdsEdit': "\uF324",
      'ColumnRightTwoThirdsEdit': "\uF325",
      'StreamLogo': "\uF329",
      'PassiveAuthentication': "\uF32A",
      'AlertSolid': "\uF331",
      'MegaphoneSolid': "\uF332",
      'TaskSolid': "\uF333",
      'ConfigurationSolid': "\uF334",
      'BugSolid': "\uF335",
      'CrownSolid': "\uF336",
      'Trophy2Solid': "\uF337",
      'QuickNoteSolid': "\uF338",
      'ConstructionConeSolid': "\uF339",
      'PageListSolid': "\uF33A",
      'PageListMirroredSolid': "\uF33B",
      'StarburstSolid': "\uF33C",
      'ReadingModeSolid': "\uF33D",
      'SadSolid': "\uF33E",
      'HealthSolid': "\uF33F",
      'ShieldSolid': "\uF340",
      'GiftBoxSolid': "\uF341",
      'ShoppingCartSolid': "\uF342",
      'MailSolid': "\uF343",
      'ChatSolid': "\uF344",
      'RibbonSolid': "\uF345"
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
      'FinancialSolid': "\uF346",
      'FinancialMirroredSolid': "\uF347",
      'HeadsetSolid': "\uF348",
      'PermissionsSolid': "\uF349",
      'ParkingSolid': "\uF34A",
      'ParkingMirroredSolid': "\uF34B",
      'DiamondSolid': "\uF34C",
      'AsteriskSolid': "\uF34D",
      'OfflineStorageSolid': "\uF34E",
      'BankSolid': "\uF34F",
      'DecisionSolid': "\uF350",
      'Parachute': "\uF351",
      'ParachuteSolid': "\uF352",
      'FiltersSolid': "\uF353",
      'ColorSolid': "\uF354",
      'ReviewSolid': "\uF355",
      'ReviewRequestSolid': "\uF356",
      'ReviewRequestMirroredSolid': "\uF357",
      'ReviewResponseSolid': "\uF358",
      'FeedbackRequestSolid': "\uF359",
      'FeedbackRequestMirroredSolid': "\uF35A",
      'FeedbackResponseSolid': "\uF35B",
      'WorkItemBar': "\uF35C",
      'WorkItemBarSolid': "\uF35D",
      'Separator': "\uF35E",
      'NavigateExternalInline': "\uF35F",
      'PlanView': "\uF360",
      'TimelineMatrixView': "\uF361",
      'EngineeringGroup': "\uF362",
      'ProjectCollection': "\uF363",
      'CaretBottomRightCenter8': "\uF364",
      'CaretBottomLeftCenter8': "\uF365",
      'CaretTopRightCenter8': "\uF366",
      'CaretTopLeftCenter8': "\uF367",
      'DonutChart': "\uF368",
      'ChevronUnfold10': "\uF369",
      'ChevronFold10': "\uF36A",
      'DoubleChevronDown8': "\uF36B",
      'DoubleChevronUp8': "\uF36C",
      'DoubleChevronLeft8': "\uF36D",
      'DoubleChevronRight8': "\uF36E",
      'ChevronDownEnd6': "\uF36F",
      'ChevronUpEnd6': "\uF370",
      'ChevronLeftEnd6': "\uF371",
      'ChevronRightEnd6': "\uF372",
      'ContextMenu': "\uF37C",
      'AzureAPIManagement': "\uF37F",
      'AzureServiceEndpoint': "\uF380",
      'VSTSLogo': "\uF381",
      'VSTSAltLogo1': "\uF382",
      'VSTSAltLogo2': "\uF383",
      'FileTypeSolution': "\uF387",
      'WordLogoInverse16': "\uF390",
      'WordLogo16': "\uF391",
      'WordLogoFill16': "\uF392",
      'PowerPointLogoInverse16': "\uF393",
      'PowerPointLogo16': "\uF394",
      'PowerPointLogoFill16': "\uF395",
      'ExcelLogoInverse16': "\uF396",
      'ExcelLogo16': "\uF397",
      'ExcelLogoFill16': "\uF398",
      'OneNoteLogoInverse16': "\uF399",
      'OneNoteLogo16': "\uF39A",
      'OneNoteLogoFill16': "\uF39B",
      'OutlookLogoInverse16': "\uF39C",
      'OutlookLogo16': "\uF39D",
      'OutlookLogoFill16': "\uF39E",
      'PublisherLogoInverse16': "\uF39F",
      'PublisherLogo16': "\uF3A0",
      'PublisherLogoFill16': "\uF3A1",
      'VisioLogoInverse16': "\uF3A2",
      'VisioLogo16': "\uF3A3",
      'VisioLogoFill16': "\uF3A4",
      'TestBeaker': "\uF3A5",
      'TestBeakerSolid': "\uF3A6",
      'TestExploreSolid': "\uF3A7",
      'TestAutoSolid': "\uF3A8",
      'TestUserSolid': "\uF3A9",
      'TestImpactSolid': "\uF3AA",
      'TestPlan': "\uF3AB",
      'TestStep': "\uF3AC",
      'TestParameter': "\uF3AD",
      'TestSuite': "\uF3AE",
      'TestCase': "\uF3AF",
      'Sprint': "\uF3B0",
      'SignOut': "\uF3B1",
      'TriggerApproval': "\uF3B2",
      'Rocket': "\uF3B3",
      'AzureKeyVault': "\uF3B4",
      'Onboarding': "\uF3BA",
      'Transition': "\uF3BC",
      'LikeSolid': "\uF3BF",
      'DislikeSolid': "\uF3C0",
      'CRMCustomerInsightsApp': "\uF3C8",
      'EditCreate': "\uF3C9",
      'PlayReverseResume': "\uF3E4",
      'PlayReverse': "\uF3E5",
      'SearchData': "\uF3F1",
      'UnSetColor': "\uF3F9",
      'DeclineCall': "\uF405"
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
      'RectangularClipping': "\uF407",
      'TeamsLogo16': "\uF40A",
      'TeamsLogoFill16': "\uF40B",
      'Spacer': "\uF40D",
      'SkypeLogo16': "\uF40E",
      'SkypeForBusinessLogo16': "\uF40F",
      'SkypeForBusinessLogoFill16': "\uF410",
      'FilterSolid': "\uF412",
      'MailUndelivered': "\uF415",
      'MailTentative': "\uF416",
      'MailTentativeMirrored': "\uF417",
      'MailReminder': "\uF418",
      'ReceiptUndelivered': "\uF419",
      'ReceiptTentative': "\uF41A",
      'ReceiptTentativeMirrored': "\uF41B",
      'Inbox': "\uF41C",
      'IRMReply': "\uF41D",
      'IRMReplyMirrored': "\uF41E",
      'IRMForward': "\uF41F",
      'IRMForwardMirrored': "\uF420",
      'VoicemailIRM': "\uF421",
      'EventAccepted': "\uF422",
      'EventTentative': "\uF423",
      'EventTentativeMirrored': "\uF424",
      'EventDeclined': "\uF425",
      'IDBadge': "\uF427",
      'BackgroundColor': "\uF42B",
      'OfficeFormsLogoInverse16': "\uF433",
      'OfficeFormsLogo': "\uF434",
      'OfficeFormsLogoFill': "\uF435",
      'OfficeFormsLogo16': "\uF436",
      'OfficeFormsLogoFill16': "\uF437",
      'OfficeFormsLogoInverse24': "\uF43A",
      'OfficeFormsLogo24': "\uF43B",
      'OfficeFormsLogoFill24': "\uF43C",
      'PageLock': "\uF43F",
      'NotExecuted': "\uF440",
      'NotImpactedSolid': "\uF441",
      'FieldReadOnly': "\uF442",
      'FieldRequired': "\uF443",
      'BacklogBoard': "\uF444",
      'ExternalBuild': "\uF445",
      'ExternalTFVC': "\uF446",
      'ExternalXAML': "\uF447",
      'IssueSolid': "\uF448",
      'DefectSolid': "\uF449",
      'LadybugSolid': "\uF44A",
      'NugetLogo': "\uF44C",
      'TFVCLogo': "\uF44D",
      'ProjectLogo32': "\uF47E",
      'ProjectLogoFill32': "\uF47F",
      'ProjectLogo16': "\uF480",
      'ProjectLogoFill16': "\uF481",
      'SwayLogo32': "\uF482",
      'SwayLogoFill32': "\uF483",
      'SwayLogo16': "\uF484",
      'SwayLogoFill16': "\uF485",
      'ClassNotebookLogo32': "\uF486",
      'ClassNotebookLogoFill32': "\uF487",
      'ClassNotebookLogo16': "\uF488",
      'ClassNotebookLogoFill16': "\uF489",
      'ClassNotebookLogoInverse32': "\uF48A",
      'ClassNotebookLogoInverse16': "\uF48B",
      'StaffNotebookLogo32': "\uF48C",
      'StaffNotebookLogoFill32': "\uF48D",
      'StaffNotebookLogo16': "\uF48E",
      'StaffNotebookLogoFill16': "\uF48F",
      'StaffNotebookLogoInverted32': "\uF490",
      'StaffNotebookLogoInverted16': "\uF491",
      'KaizalaLogo': "\uF492",
      'TaskLogo': "\uF493",
      'ProtectionCenterLogo32': "\uF494",
      'GallatinLogo': "\uF496",
      'Globe2': "\uF49A",
      'Guitar': "\uF49B",
      'Breakfast': "\uF49C",
      'Brunch': "\uF49D",
      'BeerMug': "\uF49E",
      'Vacation': "\uF49F",
      'Teeth': "\uF4A0",
      'Taxi': "\uF4A1",
      'Chopsticks': "\uF4A2",
      'SyncOccurence': "\uF4A3",
      'UnsyncOccurence': "\uF4A4",
      'GIF': "\uF4A9",
      'PrimaryCalendar': "\uF4AE",
      'SearchCalendar': "\uF4AF",
      'VideoOff': "\uF4B0",
      'MicrosoftFlowLogo': "\uF4B1",
      'BusinessCenterLogo': "\uF4B2",
      'ToDoLogoBottom': "\uF4B3",
      'ToDoLogoTop': "\uF4B4",
      'EditSolid12': "\uF4B5",
      'EditSolidMirrored12': "\uF4B6",
      'UneditableSolid12': "\uF4B7",
      'UneditableSolidMirrored12': "\uF4B8",
      'UneditableMirrored': "\uF4B9",
      'AdminALogo32': "\uF4BA",
      'AdminALogoFill32': "\uF4BB",
      'ToDoLogoInverse': "\uF4BC"
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
      'Snooze': "\uF4BD",
      'WaffleOffice365': "\uF4E0",
      'ImageSearch': "\uF4E8",
      'NewsSearch': "\uF4E9",
      'VideoSearch': "\uF4EA",
      'R': "\uF4EB",
      'FontColorA': "\uF4EC",
      'FontColorSwatch': "\uF4ED",
      'LightWeight': "\uF4EE",
      'NormalWeight': "\uF4EF",
      'SemiboldWeight': "\uF4F0",
      'GroupObject': "\uF4F1",
      'UngroupObject': "\uF4F2",
      'AlignHorizontalLeft': "\uF4F3",
      'AlignHorizontalCenter': "\uF4F4",
      'AlignHorizontalRight': "\uF4F5",
      'AlignVerticalTop': "\uF4F6",
      'AlignVerticalCenter': "\uF4F7",
      'AlignVerticalBottom': "\uF4F8",
      'HorizontalDistributeCenter': "\uF4F9",
      'VerticalDistributeCenter': "\uF4FA",
      'Ellipse': "\uF4FB",
      'Line': "\uF4FC",
      'Octagon': "\uF4FD",
      'Hexagon': "\uF4FE",
      'Pentagon': "\uF4FF",
      'RightTriangle': "\uF500",
      'HalfCircle': "\uF501",
      'QuarterCircle': "\uF502",
      'ThreeQuarterCircle': "\uF503",
      '6PointStar': "\uF504",
      '12PointStar': "\uF505",
      'ArrangeBringToFront': "\uF506",
      'ArrangeSendToBack': "\uF507",
      'ArrangeSendBackward': "\uF508",
      'ArrangeBringForward': "\uF509",
      'BorderDash': "\uF50A",
      'BorderDot': "\uF50B",
      'LineStyle': "\uF50C",
      'LineThickness': "\uF50D",
      'WindowEdit': "\uF50E",
      'HintText': "\uF50F",
      'MediaAdd': "\uF510",
      'AnchorLock': "\uF511",
      'AutoHeight': "\uF512",
      'ChartSeries': "\uF513",
      'ChartXAngle': "\uF514",
      'ChartYAngle': "\uF515",
      'Combobox': "\uF516",
      'LineSpacing': "\uF517",
      'Padding': "\uF518",
      'PaddingTop': "\uF519",
      'PaddingBottom': "\uF51A",
      'PaddingLeft': "\uF51B",
      'PaddingRight': "\uF51C",
      'NavigationFlipper': "\uF51D",
      'AlignJustify': "\uF51E",
      'TextOverflow': "\uF51F",
      'VisualsFolder': "\uF520",
      'VisualsStore': "\uF521",
      'PictureCenter': "\uF522",
      'PictureFill': "\uF523",
      'PicturePosition': "\uF524",
      'PictureStretch': "\uF525",
      'PictureTile': "\uF526",
      'Slider': "\uF527",
      'SliderHandleSize': "\uF528",
      'DefaultRatio': "\uF529",
      'NumberSequence': "\uF52A",
      'GUID': "\uF52B",
      'ReportAdd': "\uF52C",
      'DashboardAdd': "\uF52D",
      'MapPinSolid': "\uF52E",
      'WebPublish': "\uF52F",
      'PieSingleSolid': "\uF530",
      'BlockedSolid': "\uF531",
      'DrillDown': "\uF532",
      'DrillDownSolid': "\uF533",
      'DrillExpand': "\uF534",
      'DrillShow': "\uF535",
      'SpecialEvent': "\uF536",
      'OneDriveFolder16': "\uF53B",
      'FunctionalManagerDashboard': "\uF542",
      'BIDashboard': "\uF543",
      'CodeEdit': "\uF544",
      'RenewalCurrent': "\uF545",
      'RenewalFuture': "\uF546",
      'SplitObject': "\uF547",
      'BulkUpload': "\uF548",
      'DownloadDocument': "\uF549",
      'GreetingCard': "\uF54B",
      'Flower': "\uF54E",
      'WaitlistConfirm': "\uF550",
      'WaitlistConfirmMirrored': "\uF551",
      'LaptopSecure': "\uF552",
      'DragObject': "\uF553",
      'EntryView': "\uF554",
      'EntryDecline': "\uF555",
      'ContactCardSettings': "\uF556",
      'ContactCardSettingsMirrored': "\uF557"
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
      'CalendarSettings': "\uF558",
      'CalendarSettingsMirrored': "\uF559",
      'HardDriveLock': "\uF55A",
      'HardDriveUnlock': "\uF55B",
      'AccountManagement': "\uF55C",
      'ReportWarning': "\uF569",
      'TransitionPop': "\uF5B2",
      'TransitionPush': "\uF5B3",
      'TransitionEffect': "\uF5B4",
      'LookupEntities': "\uF5B5",
      'ExploreData': "\uF5B6",
      'AddBookmark': "\uF5B7",
      'SearchBookmark': "\uF5B8",
      'DrillThrough': "\uF5B9",
      'MasterDatabase': "\uF5BA",
      'CertifiedDatabase': "\uF5BB",
      'MaximumValue': "\uF5BC",
      'MinimumValue': "\uF5BD",
      'VisualStudioIDELogo32': "\uF5D0",
      'PasteAsText': "\uF5D5",
      'PasteAsCode': "\uF5D6",
      'BrowserTab': "\uF5D7",
      'BrowserTabScreenshot': "\uF5D8",
      'DesktopScreenshot': "\uF5D9",
      'FileYML': "\uF5DA",
      'ClipboardSolid': "\uF5DC",
      'FabricUserFolder': "\uF5E5",
      'FabricNetworkFolder': "\uF5E6",
      'BullseyeTarget': "\uF5F0",
      'AnalyticsView': "\uF5F1",
      'Video360Generic': "\uF609",
      'Untag': "\uF60B",
      'Leave': "\uF627",
      'Trending12': "\uF62D",
      'Blocked12': "\uF62E",
      'Warning12': "\uF62F",
      'CheckedOutByOther12': "\uF630",
      'CheckedOutByYou12': "\uF631",
      'CircleShapeSolid': "\uF63C",
      'SquareShapeSolid': "\uF63D",
      'TriangleShapeSolid': "\uF63E",
      'DropShapeSolid': "\uF63F",
      'RectangleShapeSolid': "\uF640",
      'ZoomToFit': "\uF649",
      'InsertColumnsLeft': "\uF64A",
      'InsertColumnsRight': "\uF64B",
      'InsertRowsAbove': "\uF64C",
      'InsertRowsBelow': "\uF64D",
      'DeleteColumns': "\uF64E",
      'DeleteRows': "\uF64F",
      'DeleteRowsMirrored': "\uF650",
      'DeleteTable': "\uF651",
      'AccountBrowser': "\uF652",
      'VersionControlPush': "\uF664",
      'StackedColumnChart2': "\uF666",
      'TripleColumnWide': "\uF66E",
      'QuadColumn': "\uF66F",
      'WhiteBoardApp16': "\uF673",
      'WhiteBoardApp32': "\uF674",
      'PinnedSolid': "\uF676",
      'InsertSignatureLine': "\uF677",
      'ArrangeByFrom': "\uF678",
      'Phishing': "\uF679",
      'CreateMailRule': "\uF67A",
      'PublishCourse': "\uF699",
      'DictionaryRemove': "\uF69A",
      'UserRemove': "\uF69B",
      'UserEvent': "\uF69C",
      'Encryption': "\uF69D",
      'PasswordField': "\uF6AA",
      'OpenInNewTab': "\uF6AB",
      'Hide3': "\uF6AC",
      'VerifiedBrandSolid': "\uF6AD",
      'MarkAsProtected': "\uF6AE",
      'AuthenticatorApp': "\uF6B1",
      'WebTemplate': "\uF6B2",
      'DefenderTVM': "\uF6B3",
      'MedalSolid': "\uF6B9",
      'D365TalentLearn': "\uF6BB",
      'D365TalentInsight': "\uF6BC",
      'D365TalentHRCore': "\uF6BD",
      'BacklogList': "\uF6BF",
      'ButtonControl': "\uF6C0",
      'TableGroup': "\uF6D9",
      'MountainClimbing': "\uF6DB",
      'TagUnknown': "\uF6DF",
      'TagUnknownMirror': "\uF6E0",
      'TagUnknown12': "\uF6E1",
      'TagUnknown12Mirror': "\uF6E2",
      'Link12': "\uF6E3",
      'Presentation': "\uF6E4",
      'Presentation12': "\uF6E5",
      'Lock12': "\uF6E6",
      'BuildDefinition': "\uF6E9",
      'ReleaseDefinition': "\uF6EA",
      'SaveTemplate': "\uF6EC",
      'UserGauge': "\uF6ED",
      'BlockedSiteSolid12': "\uF70A",
      'TagSolid': "\uF70E",
      'OfficeChat': "\uF70F"
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
      'OfficeChatSolid': "\uF710",
      'MailSchedule': "\uF72E",
      'WarningSolid': "\uF736",
      'Blocked2Solid': "\uF737",
      'SkypeCircleArrow': "\uF747",
      'SkypeArrow': "\uF748",
      'SyncStatus': "\uF751",
      'SyncStatusSolid': "\uF752",
      'ProjectDocument': "\uF759",
      'ToDoLogoOutline': "\uF75B",
      'VisioOnlineLogoFill32': "\uF75F",
      'VisioOnlineLogo32': "\uF760",
      'VisioOnlineLogoCloud32': "\uF761",
      'VisioDiagramSync': "\uF762",
      'Event12': "\uF763",
      'EventDateMissed12': "\uF764",
      'UserOptional': "\uF767",
      'ResponsesMenu': "\uF768",
      'DoubleDownArrow': "\uF769",
      'DistributeDown': "\uF76A",
      'BookmarkReport': "\uF76B",
      'FilterSettings': "\uF76C",
      'GripperDotsVertical': "\uF772",
      'MailAttached': "\uF774",
      'AddIn': "\uF775",
      'LinkedDatabase': "\uF779",
      'TableLink': "\uF77A",
      'PromotedDatabase': "\uF77D",
      'BarChartVerticalFilter': "\uF77E",
      'BarChartVerticalFilterSolid': "\uF77F",
      'MicOff2': "\uF781",
      'MicrosoftTranslatorLogo': "\uF782",
      'ShowTimeAs': "\uF787",
      'FileRequest': "\uF789",
      'WorkItemAlert': "\uF78F",
      'PowerBILogo16': "\uF790",
      'PowerBILogoBackplate16': "\uF791",
      'BulletedListText': "\uF792",
      'BulletedListBullet': "\uF793",
      'BulletedListTextMirrored': "\uF794",
      'BulletedListBulletMirrored': "\uF795",
      'NumberedListText': "\uF796",
      'NumberedListNumber': "\uF797",
      'NumberedListTextMirrored': "\uF798",
      'NumberedListNumberMirrored': "\uF799",
      'RemoveLinkChain': "\uF79A",
      'RemoveLinkX': "\uF79B",
      'FabricTextHighlight': "\uF79C",
      'ClearFormattingA': "\uF79D",
      'ClearFormattingEraser': "\uF79E",
      'Photo2Fill': "\uF79F",
      'IncreaseIndentText': "\uF7A0",
      'IncreaseIndentArrow': "\uF7A1",
      'DecreaseIndentText': "\uF7A2",
      'DecreaseIndentArrow': "\uF7A3",
      'IncreaseIndentTextMirrored': "\uF7A4",
      'IncreaseIndentArrowMirrored': "\uF7A5",
      'DecreaseIndentTextMirrored': "\uF7A6",
      'DecreaseIndentArrowMirrored': "\uF7A7",
      'CheckListText': "\uF7A8",
      'CheckListCheck': "\uF7A9",
      'CheckListTextMirrored': "\uF7AA",
      'CheckListCheckMirrored': "\uF7AB",
      'NumberSymbol': "\uF7AC",
      'Coupon': "\uF7BC",
      'VerifiedBrand': "\uF7BD",
      'ReleaseGate': "\uF7BE",
      'ReleaseGateCheck': "\uF7BF",
      'ReleaseGateError': "\uF7C0",
      'M365InvoicingLogo': "\uF7C1",
      'RemoveFromShoppingList': "\uF7D5",
      'ShieldAlert': "\uF7D7",
      'FabricTextHighlightComposite': "\uF7DA",
      'Dataflows': "\uF7DD",
      'GenericScanFilled': "\uF7DE",
      'DiagnosticDataBarTooltip': "\uF7DF",
      'SaveToMobile': "\uF7E0",
      'Orientation2': "\uF7E1",
      'ScreenCast': "\uF7E2",
      'ShowGrid': "\uF7E3",
      'SnapToGrid': "\uF7E4",
      'ContactList': "\uF7E5",
      'NewMail': "\uF7EA",
      'EyeShadow': "\uF7EB",
      'FabricFolderConfirm': "\uF7FF",
      'InformationBarriers': "\uF803",
      'CommentActive': "\uF804",
      'ColumnVerticalSectionEdit': "\uF806",
      'WavingHand': "\uF807",
      'ShakeDevice': "\uF80A",
      'SmartGlassRemote': "\uF80B",
      'Rotate90Clockwise': "\uF80D",
      'Rotate90CounterClockwise': "\uF80E",
      'CampaignTemplate': "\uF811",
      'ChartTemplate': "\uF812",
      'PageListFilter': "\uF813",
      'SecondaryNav': "\uF814",
      'ColumnVerticalSection': "\uF81E",
      'SkypeCircleSlash': "\uF825",
      'SkypeSlash': "\uF826"
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
      'CustomizeToolbar': "\uF828",
      'DuplicateRow': "\uF82A",
      'RemoveFromTrash': "\uF82B",
      'MailOptions': "\uF82C",
      'Childof': "\uF82D",
      'Footer': "\uF82E",
      'Header': "\uF82F",
      'BarChartVerticalFill': "\uF830",
      'StackedColumnChart2Fill': "\uF831",
      'PlainText': "\uF834",
      'AccessibiltyChecker': "\uF835",
      'DatabaseSync': "\uF842",
      'ReservationOrders': "\uF845",
      'TabOneColumn': "\uF849",
      'TabTwoColumn': "\uF84A",
      'TabThreeColumn': "\uF84B",
      'BulletedTreeList': "\uF84C",
      'MicrosoftTranslatorLogoGreen': "\uF852",
      'MicrosoftTranslatorLogoBlue': "\uF853",
      'InternalInvestigation': "\uF854",
      'AddReaction': "\uF85D",
      'ContactHeart': "\uF862",
      'VisuallyImpaired': "\uF866",
      'EventToDoLogo': "\uF869",
      'Variable2': "\uF86D",
      'ModelingView': "\uF871",
      'DisconnectVirtualMachine': "\uF873",
      'ReportLock': "\uF875",
      'Uneditable2': "\uF876",
      'Uneditable2Mirrored': "\uF877",
      'BarChartVerticalEdit': "\uF89D",
      'GlobalNavButtonActive': "\uF89F",
      'PollResults': "\uF8A0",
      'Rerun': "\uF8A1",
      'QandA': "\uF8A2",
      'QandAMirror': "\uF8A3",
      'BookAnswers': "\uF8A4",
      'AlertSettings': "\uF8B6",
      'TrimStart': "\uF8BB",
      'TrimEnd': "\uF8BC",
      'TableComputed': "\uF8F5",
      'DecreaseIndentLegacy': "\uE290",
      'IncreaseIndentLegacy': "\uE291",
      'SizeLegacy': "\uE2B2"
    }
  };
  registerIcons(subset, options);
}

var registerIconAliases = function registerIconAliases() {
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

var baseProductionCdnUrl = 'https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/';
/** @internal */

var TestImages = {
  choiceGroupBarUnselected: baseProductionCdnUrl + 'choicegroup-bar-unselected.png',
  choiceGroupBarSelected: baseProductionCdnUrl + 'choicegroup-bar-selected.png',
  choiceGroupPieUnselected: baseProductionCdnUrl + 'choicegroup-pie-unselected.png',
  choiceGroupPieSelected: baseProductionCdnUrl + 'choicegroup-pie-selected.png',
  documentPreview: baseProductionCdnUrl + 'document-preview.png',
  documentPreviewTwo: baseProductionCdnUrl + 'document-preview2.png',
  documentPreviewThree: baseProductionCdnUrl + 'document-preview3.png',
  iconOne: baseProductionCdnUrl + 'icon-one.png',
  iconPpt: 'https://static2.sharepointonline.com/files/fabric/assets/item-types/32/pptx.png',
  personaFemale: baseProductionCdnUrl + 'persona-female.png',
  personaMale: baseProductionCdnUrl + 'persona-male.png'
};

/**
 * For use in this package only.
 * Mirror of PersonaInitialsColor avoid a circular dependency.
 * If the real enum changes and this one starts causing compiler errors, update it.
 * @internal
 */

var PersonaInitialsColor;

(function (PersonaInitialsColor) {
  PersonaInitialsColor[PersonaInitialsColor["lightBlue"] = 0] = "lightBlue";
  PersonaInitialsColor[PersonaInitialsColor["blue"] = 1] = "blue";
  PersonaInitialsColor[PersonaInitialsColor["darkBlue"] = 2] = "darkBlue";
  PersonaInitialsColor[PersonaInitialsColor["teal"] = 3] = "teal";
  PersonaInitialsColor[PersonaInitialsColor["lightGreen"] = 4] = "lightGreen";
  PersonaInitialsColor[PersonaInitialsColor["green"] = 5] = "green";
  PersonaInitialsColor[PersonaInitialsColor["darkGreen"] = 6] = "darkGreen";
  PersonaInitialsColor[PersonaInitialsColor["lightPink"] = 7] = "lightPink";
  PersonaInitialsColor[PersonaInitialsColor["pink"] = 8] = "pink";
  PersonaInitialsColor[PersonaInitialsColor["magenta"] = 9] = "magenta";
  PersonaInitialsColor[PersonaInitialsColor["purple"] = 10] = "purple";
  PersonaInitialsColor[PersonaInitialsColor["black"] = 11] = "black";
  PersonaInitialsColor[PersonaInitialsColor["orange"] = 12] = "orange";
  PersonaInitialsColor[PersonaInitialsColor["red"] = 13] = "red";
  PersonaInitialsColor[PersonaInitialsColor["darkRed"] = 14] = "darkRed";
  PersonaInitialsColor[PersonaInitialsColor["transparent"] = 15] = "transparent";
  PersonaInitialsColor[PersonaInitialsColor["violet"] = 16] = "violet";
  PersonaInitialsColor[PersonaInitialsColor["lightRed"] = 17] = "lightRed";
  PersonaInitialsColor[PersonaInitialsColor["gold"] = 18] = "gold";
  PersonaInitialsColor[PersonaInitialsColor["burgundy"] = 19] = "burgundy";
  PersonaInitialsColor[PersonaInitialsColor["warmGray"] = 20] = "warmGray";
  PersonaInitialsColor[PersonaInitialsColor["coolGray"] = 21] = "coolGray";
  PersonaInitialsColor[PersonaInitialsColor["gray"] = 22] = "gray";
  PersonaInitialsColor[PersonaInitialsColor["cyan"] = 23] = "cyan";
  PersonaInitialsColor[PersonaInitialsColor["rust"] = 24] = "rust";
})(PersonaInitialsColor || (PersonaInitialsColor = {}));
/** @internal */


var facepilePersonas = [{
  imageUrl: TestImages.personaFemale,
  personaName: 'Annie Lindqvist',
  data: '50%',
  onClick: function onClick(ev, persona) {
    return alert('You clicked on ' + persona.personaName + '. Extra data: ' + persona.data);
  }
}, {
  imageUrl: TestImages.personaFemale,
  personaName: 'Aaron Reid',
  data: '$1,000'
}, {
  personaName: 'Alex Lundberg',
  data: '75%',
  onClick: function onClick(ev, persona) {
    return alert('You clicked on ' + persona.personaName + '. Extra data: ' + persona.data);
  }
}, {
  personaName: 'Roko Kolar',
  data: '4 hrs'
}, {
  imageInitials: 'CB',
  personaName: 'Christian Bergqvist',
  initialsColor: PersonaInitialsColor.green,
  data: '25%'
}, {
  imageUrl: TestImages.personaFemale,
  imageInitials: 'VL',
  personaName: 'Valentina Lovric',
  initialsColor: PersonaInitialsColor.lightBlue,
  data: 'Emp1234',
  onClick: function onClick(ev, persona) {
    return alert('You clicked on ' + persona.personaName + '. Extra data: ' + persona.data);
  }
}, {
  imageUrl: TestImages.personaMale,
  imageInitials: 'MS',
  personaName: 'Maor Sharett',
  initialsColor: PersonaInitialsColor.lightGreen
}, {
  imageUrl: TestImages.personaFemale,
  imageInitials: 'PV',
  personaName: 'Annie Lindqvist2',
  initialsColor: PersonaInitialsColor.lightPink
}, {
  imageUrl: TestImages.personaMale,
  imageInitials: 'AR',
  personaName: 'Aaron Reid2',
  initialsColor: PersonaInitialsColor.magenta,
  data: 'Emp1234',
  onClick: function onClick(ev, persona) {
    return alert('You clicked on ' + persona.personaName + '. Extra data: ' + persona.data);
  }
}, {
  imageUrl: TestImages.personaMale,
  imageInitials: 'AL',
  personaName: 'Alex Lundberg2',
  initialsColor: PersonaInitialsColor.orange
}, {
  imageUrl: TestImages.personaMale,
  imageInitials: 'RK',
  personaName: 'Roko Kolar2',
  initialsColor: PersonaInitialsColor.pink
}, {
  imageUrl: TestImages.personaMale,
  imageInitials: 'CB',
  personaName: 'Christian Bergqvist2',
  initialsColor: PersonaInitialsColor.purple
}, {
  imageUrl: TestImages.personaFemale,
  imageInitials: 'VL',
  personaName: 'Valentina Lovric2',
  initialsColor: PersonaInitialsColor.red
}, {
  imageUrl: TestImages.personaMale,
  imageInitials: 'MS',
  personaName: 'Maor Sharett2',
  initialsColor: PersonaInitialsColor.teal
}, {
  imageUrl: TestImages.personaFemale,
  imageInitials: 'VL',
  personaName: 'Another A Name',
  initialsColor: PersonaInitialsColor.blue
}, {
  imageUrl: TestImages.personaMale,
  imageInitials: 'MS',
  personaName: 'Another A Name (So Many A names!)',
  initialsColor: PersonaInitialsColor.darkBlue
}, {
  imageUrl: TestImages.personaFemale,
  imageInitials: 'VL',
  personaName: 'Another Anecdotal A Name',
  initialsColor: PersonaInitialsColor.darkGreen
}, {
  imageUrl: TestImages.personaMale,
  imageInitials: 'MS',
  personaName: 'Anerobic A Name',
  initialsColor: PersonaInitialsColor.darkRed
}, {
  imageUrl: TestImages.personaFemale,
  imageInitials: 'VL',
  personaName: 'Aerobic A Name',
  initialsColor: PersonaInitialsColor.green
}, {
  imageUrl: TestImages.personaMale,
  imageInitials: 'MS',
  personaName: 'Maor Sharett2',
  initialsColor: PersonaInitialsColor.lightBlue
}, {
  imageUrl: TestImages.personaFemale,
  imageInitials: 'VL',
  personaName: 'Valentina Lovric2',
  initialsColor: PersonaInitialsColor.lightGreen
}, {
  imageUrl: TestImages.personaMale,
  imageInitials: 'MS',
  personaName: 'Maor Sharett2',
  initialsColor: PersonaInitialsColor.lightPink
}, {
  imageUrl: TestImages.personaFemale,
  imageInitials: 'VL',
  personaName: 'Valentina Lovric2',
  initialsColor: PersonaInitialsColor.magenta
}, {
  imageUrl: TestImages.personaMale,
  imageInitials: 'MS',
  personaName: 'Maor Sharett2',
  initialsColor: PersonaInitialsColor.orange
}];

var LOREM_IPSUM = ('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ' + 'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' + 'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ' + 'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt ' + 'mollit anim id est laborum').split(' ');
/** @internal */

function lorem(wordCount) {
  return Array.apply(null, Array(wordCount)).map(function (item, idx) {
    return LOREM_IPSUM[idx % LOREM_IPSUM.length];
  }).join(' ');
}

var DATA = {
  color: ['red', 'blue', 'green', 'yellow'],
  shape: ['circle', 'square', 'triangle'],
  location: ['Seattle', 'New York', 'Chicago', 'Los Angeles', 'Portland']
};
/** @internal */

function createListItems(count, startIndex) {
  if (startIndex === void 0) {
    startIndex = 0;
  }

  return Array.apply(null, Array(count)).map(function (item, index) {
    var size = 150 + Math.round(Math.random() * 100);
    return {
      thumbnail: "//placehold.it/" + size + "x" + size,
      key: 'item-' + (index + startIndex) + ' ' + lorem(4),
      name: lorem(5),
      description: lorem(10 + Math.round(Math.random() * 50)),
      color: _randWord(DATA.color),
      shape: _randWord(DATA.shape),
      location: _randWord(DATA.location),
      width: size,
      height: size
    };
  });
}

function _randWord(array) {
  var index = Math.floor(Math.random() * array.length);
  return array[index];
}

/**
 * For use in this package only.
 * Mirror of PersonaPresence avoid a circular dependency.
 * If the real enum changes and this one starts causing compiler errors, update it.
 * @internal
 */

var PersonaPresence;

(function (PersonaPresence) {
  PersonaPresence[PersonaPresence["none"] = 0] = "none";
  PersonaPresence[PersonaPresence["offline"] = 1] = "offline";
  PersonaPresence[PersonaPresence["online"] = 2] = "online";
  PersonaPresence[PersonaPresence["away"] = 3] = "away";
  PersonaPresence[PersonaPresence["dnd"] = 4] = "dnd";
  PersonaPresence[PersonaPresence["blocked"] = 5] = "blocked";
  PersonaPresence[PersonaPresence["busy"] = 6] = "busy";
})(PersonaPresence || (PersonaPresence = {}));
/** Sample people and groups @internal */


var people = [{
  key: 1,
  imageUrl: TestImages.personaFemale,
  imageInitials: 'PV',
  text: 'Annie Lindqvist',
  secondaryText: 'Designer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm',
  isValid: true,
  presence: PersonaPresence.online
}, {
  key: 2,
  imageUrl: TestImages.personaMale,
  imageInitials: 'AR',
  text: 'Aaron Reid',
  secondaryText: 'Designer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm',
  isValid: true,
  presence: PersonaPresence.busy
}, {
  key: 3,
  imageUrl: TestImages.personaMale,
  imageInitials: 'AL',
  text: 'Alex Lundberg',
  secondaryText: 'Software Developer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm',
  isValid: true,
  presence: PersonaPresence.dnd
}, {
  key: 4,
  imageUrl: TestImages.personaMale,
  imageInitials: 'RK',
  text: 'Roko Kolar',
  secondaryText: 'Financial Analyst',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm',
  isValid: true,
  presence: PersonaPresence.offline
}, {
  key: 5,
  imageUrl: TestImages.personaMale,
  imageInitials: 'CB',
  text: 'Christian Bergqvist',
  secondaryText: 'Sr. Designer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm',
  isValid: true,
  presence: PersonaPresence.online
}, {
  key: 6,
  imageUrl: TestImages.personaFemale,
  imageInitials: 'VL',
  text: 'Valentina Lovric',
  secondaryText: 'Design Developer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm',
  isValid: true,
  presence: PersonaPresence.online
}, {
  key: 7,
  imageUrl: TestImages.personaMale,
  imageInitials: 'MS',
  text: 'Maor Sharett',
  secondaryText: 'UX Designer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm',
  isValid: true,
  presence: PersonaPresence.away
}, {
  key: 8,
  imageUrl: TestImages.personaFemale,
  imageInitials: 'PV',
  text: 'Anny Lindqvist',
  secondaryText: 'Designer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm',
  isValid: true,
  presence: PersonaPresence.busy
}, {
  key: 9,
  imageUrl: TestImages.personaMale,
  imageInitials: 'AR',
  text: 'Aron Reid',
  secondaryText: 'Designer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm',
  isValid: true,
  presence: PersonaPresence.dnd
}, {
  key: 10,
  imageUrl: TestImages.personaMale,
  imageInitials: 'AL',
  text: 'Alix Lundberg',
  secondaryText: 'Software Developer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm',
  isValid: true,
  presence: PersonaPresence.offline
}, {
  key: 11,
  imageUrl: TestImages.personaMale,
  imageInitials: 'RK',
  text: 'Roko Kular',
  secondaryText: 'Financial Analyst',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm',
  isValid: true,
  presence: PersonaPresence.none
}, {
  key: 12,
  imageUrl: TestImages.personaMale,
  imageInitials: 'CB',
  text: 'Christian Bergqvest',
  secondaryText: 'Sr. Designer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm',
  isValid: true,
  presence: PersonaPresence.busy
}, {
  key: 13,
  imageUrl: TestImages.personaFemale,
  imageInitials: 'VL',
  text: 'Valintina Lovric',
  secondaryText: 'Design Developer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm',
  isValid: true,
  presence: PersonaPresence.busy
}, {
  key: 14,
  imageUrl: TestImages.personaMale,
  imageInitials: 'MS',
  text: 'Maor Sharet',
  secondaryText: 'UX Designer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm',
  isValid: true,
  presence: PersonaPresence.blocked
}, {
  key: 15,
  imageUrl: TestImages.personaFemale,
  imageInitials: 'VL',
  text: 'Anny Lindqvest',
  secondaryText: 'SDE',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm',
  isValid: true,
  presence: PersonaPresence.blocked
}, {
  key: 16,
  imageUrl: TestImages.personaMale,
  imageInitials: 'MS',
  text: 'Alix Lunberg',
  secondaryText: 'SE',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm',
  isValid: true,
  presence: PersonaPresence.away
}, {
  key: 17,
  imageUrl: TestImages.personaFemale,
  imageInitials: 'VL',
  text: 'Annie Lindqvest',
  secondaryText: 'SDET',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm',
  isValid: true,
  presence: PersonaPresence.online
}, {
  key: 18,
  imageUrl: TestImages.personaMale,
  imageInitials: 'MS',
  text: 'Alixander Lundberg',
  secondaryText: 'Senior Manager of SDET',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm',
  isValid: true,
  presence: PersonaPresence.offline
}, {
  key: 19,
  imageUrl: TestImages.personaFemale,
  imageInitials: 'VL',
  text: 'Anny Lundqvist',
  secondaryText: 'Junior Manager of Software',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm',
  isValid: true,
  presence: PersonaPresence.away
}, {
  key: 20,
  imageUrl: TestImages.personaMale,
  imageInitials: 'MS',
  text: 'Maor Shorett',
  secondaryText: 'UX Designer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm',
  isValid: true,
  presence: PersonaPresence.blocked
}, {
  key: 21,
  imageUrl: TestImages.personaFemale,
  imageInitials: 'VL',
  text: 'Valentina Lovrics',
  secondaryText: 'Design Developer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm',
  isValid: true,
  presence: PersonaPresence.online
}, {
  key: 22,
  imageUrl: TestImages.personaMale,
  imageInitials: 'MS',
  text: 'Maor Sharet',
  secondaryText: 'UX Designer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm',
  isValid: true,
  presence: PersonaPresence.online
}, {
  key: 23,
  imageUrl: TestImages.personaFemale,
  imageInitials: 'VL',
  text: 'Valentina Lovrecs',
  secondaryText: 'Design Developer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm',
  isValid: true,
  presence: PersonaPresence.blocked
}, {
  key: 24,
  imageUrl: TestImages.personaMale,
  imageInitials: 'MS',
  text: 'Maor Sharitt',
  secondaryText: 'UX Designer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm',
  isValid: true,
  presence: PersonaPresence.offline
}, {
  key: 25,
  imageUrl: './images/persona-male.png',
  imageInitials: 'MS',
  text: 'Maor Shariett',
  secondaryText: 'Design Developer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 3:00pm',
  isValid: true,
  presence: PersonaPresence.online
}, {
  key: 26,
  imageUrl: './images/persona-female.png',
  imageInitials: 'AL',
  text: 'Alix Lundburg',
  secondaryText: 'UX Designer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 3:00pm',
  isValid: true,
  presence: PersonaPresence.away
}, {
  key: 27,
  imageUrl: './images/persona-female.png',
  imageInitials: 'VL',
  text: 'Valantena Lovric',
  secondaryText: 'UX Designer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm',
  isValid: true,
  presence: PersonaPresence.busy
}, {
  key: 28,
  imageUrl: './images/persona-female.png',
  imageInitials: 'VL',
  text: 'Velatine Lourvric',
  secondaryText: 'UX Designer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm',
  isValid: true,
  presence: PersonaPresence.online
}, {
  key: 29,
  imageUrl: './images/persona-female.png',
  imageInitials: 'VL',
  text: 'Valentyna Lovrique',
  secondaryText: 'UX Designer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm',
  isValid: true,
  presence: PersonaPresence.busy
}, {
  key: 30,
  imageUrl: './images/persona-female.png',
  imageInitials: 'AL',
  text: 'Annie Lindquest',
  secondaryText: 'UX Designer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm',
  isValid: true,
  presence: PersonaPresence.dnd
}, {
  key: 31,
  imageUrl: './images/persona-female.png',
  imageInitials: 'AL',
  text: 'Anne Lindquist',
  secondaryText: 'UX Designer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm',
  isValid: true,
  presence: PersonaPresence.blocked
}, {
  key: 32,
  imageUrl: './images/persona-female.png',
  imageInitials: 'AL',
  text: 'Ann Lindqiest',
  secondaryText: 'UX Designer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm',
  isValid: true,
  presence: PersonaPresence.online
}, {
  key: 33,
  imageUrl: './images/persona-male.png',
  imageInitials: 'AR',
  text: 'Aron Reid',
  secondaryText: 'UX Designer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm',
  isValid: true,
  presence: PersonaPresence.away
}, {
  key: 34,
  imageUrl: './images/persona-male.png',
  imageInitials: 'AR',
  text: 'Aaron Reed',
  secondaryText: 'UX Designer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm',
  isValid: true,
  presence: PersonaPresence.offline
}, {
  key: 35,
  imageUrl: './images/persona-female.png',
  imageInitials: 'AL',
  text: 'Alix Lindberg',
  secondaryText: 'UX Designer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm',
  isValid: true,
  presence: PersonaPresence.busy
}, {
  key: 36,
  imageUrl: './images/persona-male.png',
  imageInitials: 'AL',
  text: 'Alan Lindberg',
  secondaryText: 'UX Designer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm',
  isValid: true,
  presence: PersonaPresence.busy
}, {
  key: 37,
  imageUrl: './images/persona-male.png',
  imageInitials: 'MS',
  text: 'Maor Sharit',
  secondaryText: 'UX Designer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm',
  isValid: true,
  presence: PersonaPresence.offline
}, {
  key: 38,
  imageUrl: './images/persona-male.png',
  imageInitials: 'MS',
  text: 'Maorr Sherit',
  secondaryText: 'UX Designer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm',
  isValid: true,
  presence: PersonaPresence.online
}, {
  key: 39,
  imageUrl: './images/persona-male.png',
  imageInitials: 'AL',
  text: 'Alex Lindbirg',
  secondaryText: 'Software Developer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm',
  isValid: true,
  presence: PersonaPresence.dnd
}, {
  key: 40,
  imageUrl: './images/persona-male.png',
  imageInitials: 'AL',
  text: 'Alex Lindbarg',
  secondaryText: 'Software Developer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm',
  isValid: true,
  presence: PersonaPresence.online
}, {
  key: 41,
  imageInitials: 'GO',
  text: 'Group One',
  canExpand: true,
  isValid: true
}, {
  key: 42,
  imageInitials: 'GT',
  text: 'Group Two',
  canExpand: true,
  isValid: true
}];

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
        return _assign(_assign({}, keytipProps), {
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
      keytip: _assign({}, keytipProps),
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
    return _assign({
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

var getClassNames = classNamesFunction();

var LinkBase =
/** @class */
function (_super) {
  __extends(LinkBase, _super);

  function LinkBase(props) {
    var _this = _super.call(this, props) || this;

    _this._link = React.createRef();

    _this._onClick = function (ev) {
      var _a = _this.props,
          onClick = _a.onClick,
          disabled = _a.disabled;

      if (disabled) {
        ev.preventDefault();
      } else if (onClick) {
        onClick(ev);
      }
    };

    initializeComponentRef(_this);
    return _this;
  }

  LinkBase.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        disabled = _a.disabled,
        children = _a.children,
        className = _a.className,
        href = _a.href,
        theme = _a.theme,
        styles = _a.styles,
        keytipProps = _a.keytipProps;
    var classNames = getClassNames(styles, {
      className: className,
      isButton: !href,
      isDisabled: disabled,
      theme: theme
    });

    var RootType = this._getRootType(this.props);

    return React.createElement(KeytipData, {
      keytipProps: keytipProps,
      ariaDescribedBy: this.props['aria-describedby'],
      disabled: disabled
    }, function (keytipAttributes) {
      return React.createElement(RootType, _assign({}, keytipAttributes, _this._adjustPropsForRootType(RootType, _this.props), {
        className: classNames.root,
        onClick: _this._onClick,
        ref: _this._link,
        "aria-disabled": disabled
      }), children);
    });
  };

  LinkBase.prototype.focus = function () {
    var current = this._link.current;

    if (current && current.focus) {
      current.focus();
    }
  };

  LinkBase.prototype._adjustPropsForRootType = function (RootType, props) {
    // Deconstruct the props so we remove props like `as`, `theme` and `styles`
    // as those will always be removed. We also take some props that are optional
    // based on the RootType.
    var children = props.children,
        as = props.as,
        disabled = props.disabled,
        target = props.target,
        href = props.href,
        theme = props.theme,
        getStyles = props.getStyles,
        styles = props.styles,
        componentRef = props.componentRef,
        restProps = __rest(props, ["children", "as", "disabled", "target", "href", "theme", "getStyles", "styles", "componentRef"]); // RootType will be a string if we're dealing with an html component


    if (typeof RootType === 'string') {
      // Remove the disabled prop for anchor elements
      if (RootType === 'a') {
        return _assign({
          target: target,
          href: disabled ? undefined : href
        }, restProps);
      } // Add the type='button' prop for button elements


      if (RootType === 'button') {
        return _assign({
          type: 'button',
          disabled: disabled
        }, restProps);
      } // Remove the target and href props for all other non anchor elements


      return _assign(_assign({}, restProps), {
        disabled: disabled
      });
    } // Retain all props except 'as' for ReactComponents


    return _assign({
      target: target,
      href: href,
      disabled: disabled
    }, restProps);
  };

  LinkBase.prototype._getRootType = function (props) {
    if (props.as) {
      return props.as;
    }

    if (props.href) {
      return 'a';
    }

    return 'button';
  };

  return LinkBase;
}(React.Component);

var GlobalClassNames = {
  root: 'ms-Link'
};
var getStyles = function getStyles(props) {
  var _a, _b, _c;

  var className = props.className,
      isButton = props.isButton,
      isDisabled = props.isDisabled,
      theme = props.theme;
  var semanticColors = theme.semanticColors; // Tokens

  var linkColor = semanticColors.link;
  var linkInteractedColor = semanticColors.linkHovered;
  var linkDisabledColor = semanticColors.disabledText;
  var focusBorderColor = semanticColors.focusBorder;
  var classNames = getGlobalClassNames(GlobalClassNames, theme);
  return {
    root: [classNames.root, theme.fonts.medium, {
      color: linkColor,
      outline: 'none',
      fontSize: 'inherit',
      fontWeight: 'inherit',
      textDecoration: 'none',
      selectors: (_a = {
        '.ms-Fabric--isFocusVisible &:focus': {
          // Can't use getFocusStyle because it doesn't support wrapping links
          // https://github.com/microsoft/fluentui/issues/4883#issuecomment-406743543
          // Using box-shadow and outline allows the focus rect to wrap links that span multiple lines
          // and helps the focus rect avoid getting clipped.
          boxShadow: "0 0 0 1px " + focusBorderColor + " inset",
          outline: "1px auto " + focusBorderColor,
          selectors: (_b = {}, _b[HighContrastSelector] = {
            outline: '1px solid WindowText'
          }, _b)
        }
      }, _a[HighContrastSelector] = {
        // For IE high contrast mode
        borderBottom: 'none'
      }, _a)
    }, isButton && {
      background: 'none',
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      display: 'inline',
      margin: 0,
      overflow: 'inherit',
      padding: 0,
      textAlign: 'left',
      textOverflow: 'inherit',
      userSelect: 'text',
      borderBottom: '1px solid transparent',
      selectors: (_c = {}, _c[HighContrastSelectorBlack] = {
        color: '#FFFF00'
      }, _c[HighContrastSelectorWhite] = {
        color: '#00009F'
      }, _c)
    }, isDisabled && ['is-disabled', {
      color: linkDisabledColor,
      cursor: 'default'
    }, {
      selectors: {
        '&:link, &:visited': {
          pointerEvents: 'none'
        }
      }
    }], !isDisabled && {
      selectors: {
        '&:active, &:hover, &:active:hover': {
          color: linkInteractedColor,
          textDecoration: 'underline'
        },
        '&:focus': {
          color: linkColor
        }
      }
    }, classNames.root, className]
  };
};

var Link = styled(LinkBase, getStyles, undefined, {
  scope: 'Link'
});

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

var getClassNames$1 = classNamesFunction();
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
    var classNames = getClassNames$1(styles, {
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
    }, React.createElement("img", _assign({}, imageProps, {
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

var GlobalClassNames$1 = {
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
var getStyles$1 = function getStyles(props) {
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
  var classNames = getGlobalClassNames(GlobalClassNames$1, theme);
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

var Image = styled(ImageBase, getStyles$1, undefined, {
  scope: 'Image'
}, true);

//
// Anchor index: the point from which a range selection starts.
// Focus index: the point from which layout movement originates from.
//
// These two can differ. Tests:
//
// If you start at index 5
// Shift click to index 10
//    The focus is 10, the anchor is 5.
// If you shift click at index 0
//    The anchor remains at 5, the items between 0 and 5 are selected and everything else is cleared.
// If you click index 8
//    The anchor and focus are set to 8.

var SELECTION_DISABLED_ATTRIBUTE_NAME = 'data-selection-disabled';
var SELECTION_INDEX_ATTRIBUTE_NAME = 'data-selection-index';
var SELECTION_TOGGLE_ATTRIBUTE_NAME = 'data-selection-toggle';
var SELECTION_INVOKE_ATTRIBUTE_NAME = 'data-selection-invoke';
var SELECTALL_TOGGLE_ALL_ATTRIBUTE_NAME = 'data-selection-all-toggle';
var SELECTION_SELECT_ATTRIBUTE_NAME = 'data-selection-select';
/**
 * {@docCategory Selection}
 */

var SelectionZone =
/** @class */
function (_super) {
  __extends(SelectionZone, _super);

  function SelectionZone(props) {
    var _this = _super.call(this, props) || this;

    _this._root = React.createRef();
    /**
     * In some cases, the consuming scenario requires to set focus on a row without having SelectionZone
     * react to the event. Note that focus events in IE \<= 11 will occur asynchronously after .focus() has
     * been called on an element, so we need a flag to store the idea that we will bypass the "next"
     * focus event that occurs. This method does that.
     */

    _this.ignoreNextFocus = function () {
      _this._handleNextFocus(false);
    };

    _this._onSelectionChange = function () {
      var selection = _this.props.selection;
      var isModal = selection.isModal && selection.isModal();

      _this.setState({
        isModal: isModal
      });
    };

    _this._onMouseDownCapture = function (ev) {
      var target = ev.target;

      if (document.activeElement !== target && !elementContains(document.activeElement, target)) {
        _this.ignoreNextFocus();

        return;
      }

      if (!elementContains(target, _this._root.current)) {
        return;
      }

      while (target !== _this._root.current) {
        if (_this._hasAttribute(target, SELECTION_INVOKE_ATTRIBUTE_NAME)) {
          _this.ignoreNextFocus();

          break;
        }

        target = getParent(target);
      }
    };
    /**
     * When we focus an item, for single/multi select scenarios, we should try to select it immediately
     * as long as the focus did not originate from a mouse down/touch event. For those cases, we handle them
     * specially.
     */


    _this._onFocus = function (ev) {
      var target = ev.target;
      var selection = _this.props.selection;
      var isToggleModifierPressed = _this._isCtrlPressed || _this._isMetaPressed;

      var selectionMode = _this._getSelectionMode();

      if (_this._shouldHandleFocus && selectionMode !== SelectionMode.none) {
        var isToggle = _this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME);

        var itemRoot = _this._findItemRoot(target);

        if (!isToggle && itemRoot) {
          var index = _this._getItemIndex(itemRoot);

          if (isToggleModifierPressed) {
            // set anchor only.
            selection.setIndexSelected(index, selection.isIndexSelected(index), true);

            if (_this.props.enterModalOnTouch && _this._isTouch && selection.setModal) {
              selection.setModal(true);

              _this._setIsTouch(false);
            }
          } else {
            if (_this.props.isSelectedOnFocus) {
              _this._onItemSurfaceClick(ev, index);
            }
          }
        }
      }

      _this._handleNextFocus(false);
    };

    _this._onMouseDown = function (ev) {
      _this._updateModifiers(ev);

      var target = ev.target;

      var itemRoot = _this._findItemRoot(target); // No-op if selection is disabled


      if (_this._isSelectionDisabled(target)) {
        return;
      }

      while (target !== _this._root.current) {
        if (_this._hasAttribute(target, SELECTALL_TOGGLE_ALL_ATTRIBUTE_NAME)) {
          break;
        } else if (itemRoot) {
          if (_this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME)) {
            break;
          } else if (_this._hasAttribute(target, SELECTION_INVOKE_ATTRIBUTE_NAME)) {
            break;
          } else if ((target === itemRoot || _this._shouldAutoSelect(target)) && !_this._isShiftPressed && !_this._isCtrlPressed && !_this._isMetaPressed) {
            _this._onInvokeMouseDown(ev, _this._getItemIndex(itemRoot));

            break;
          } else if (_this.props.disableAutoSelectOnInputElements && (target.tagName === 'A' || target.tagName === 'BUTTON' || target.tagName === 'INPUT')) {
            return;
          }
        }

        target = getParent(target);
      }
    };

    _this._onTouchStartCapture = function (ev) {
      _this._setIsTouch(true);
    };

    _this._onClick = function (ev) {
      _this._updateModifiers(ev);

      var target = ev.target;

      var itemRoot = _this._findItemRoot(target);

      var isSelectionDisabled = _this._isSelectionDisabled(target);

      while (target !== _this._root.current) {
        if (_this._hasAttribute(target, SELECTALL_TOGGLE_ALL_ATTRIBUTE_NAME)) {
          if (!isSelectionDisabled) {
            _this._onToggleAllClick(ev);
          }

          break;
        } else if (itemRoot) {
          var index = _this._getItemIndex(itemRoot);

          if (_this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME)) {
            if (!isSelectionDisabled) {
              if (_this._isShiftPressed) {
                _this._onItemSurfaceClick(ev, index);
              } else {
                _this._onToggleClick(ev, index);
              }
            }

            break;
          } else if (_this._hasAttribute(target, SELECTION_INVOKE_ATTRIBUTE_NAME)) {
            // Items should be invokable even if selection is disabled.
            _this._onInvokeClick(ev, index);

            break;
          } else if (target === itemRoot) {
            if (!isSelectionDisabled) {
              _this._onItemSurfaceClick(ev, index);
            }

            break;
          } else if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.tagName === 'INPUT') {
            return;
          }
        }

        target = getParent(target);
      }
    };

    _this._onContextMenu = function (ev) {
      var target = ev.target;
      var _a = _this.props,
          onItemContextMenu = _a.onItemContextMenu,
          selection = _a.selection;

      if (onItemContextMenu) {
        var itemRoot = _this._findItemRoot(target);

        if (itemRoot) {
          var index = _this._getItemIndex(itemRoot);

          _this._onInvokeMouseDown(ev, index);

          var skipPreventDefault = onItemContextMenu(selection.getItems()[index], index, ev.nativeEvent); // In order to keep back compat, if the value here is undefined, then we should still
          // call preventDefault(). Only in the case where true is explicitly returned should
          // the call be skipped.

          if (!skipPreventDefault) {
            ev.preventDefault();
          }
        }
      }
    };
    /**
     * In multi selection, if you double click within an item's root (but not within the invoke element or
     * input elements), we should execute the invoke handler.
     */


    _this._onDoubleClick = function (ev) {
      var target = ev.target;
      var onItemInvoked = _this.props.onItemInvoked;

      var itemRoot = _this._findItemRoot(target);

      if (itemRoot && onItemInvoked && !_this._isInputElement(target)) {
        var index = _this._getItemIndex(itemRoot);

        while (target !== _this._root.current) {
          if (_this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME) || _this._hasAttribute(target, SELECTION_INVOKE_ATTRIBUTE_NAME)) {
            break;
          } else if (target === itemRoot) {
            _this._onInvokeClick(ev, index);

            break;
          }

          target = getParent(target);
        }

        target = getParent(target);
      }
    };

    _this._onKeyDownCapture = function (ev) {
      _this._updateModifiers(ev);

      _this._handleNextFocus(true);
    };

    _this._onKeyDown = function (ev) {
      _this._updateModifiers(ev);

      var target = ev.target;

      var isSelectionDisabled = _this._isSelectionDisabled(target);

      var selection = _this.props.selection;
      var isSelectAllKey = ev.which === KeyCodes.a && (_this._isCtrlPressed || _this._isMetaPressed);
      var isClearSelectionKey = ev.which === KeyCodes.escape; // Ignore key downs from input elements.

      if (_this._isInputElement(target)) {
        // A key was pressed while an item in this zone was focused.
        return;
      }

      var selectionMode = _this._getSelectionMode(); // If ctrl-a is pressed, select all (if all are not already selected.)


      if (isSelectAllKey && selectionMode === SelectionMode.multiple && !selection.isAllSelected()) {
        if (!isSelectionDisabled) {
          selection.setAllSelected(true);
        }

        ev.stopPropagation();
        ev.preventDefault();
        return;
      } // If escape is pressed, clear selection (if any are selected.)


      if (isClearSelectionKey && selection.getSelectedCount() > 0) {
        if (!isSelectionDisabled) {
          selection.setAllSelected(false);
        }

        ev.stopPropagation();
        ev.preventDefault();
        return;
      }

      var itemRoot = _this._findItemRoot(target); // If a key was pressed within an item, we should treat "enters" as invokes and "space" as toggle


      if (itemRoot) {
        var index = _this._getItemIndex(itemRoot);

        while (target !== _this._root.current) {
          if (_this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME)) {
            // For toggle elements, assuming they are rendered as buttons, they will generate a click event,
            // so we can no-op for any keydowns in this case.
            break;
          } else if (_this._shouldAutoSelect(target)) {
            if (!isSelectionDisabled) {
              // If the event went to an element which should trigger auto-select, select it and then let
              // the default behavior kick in.
              _this._onInvokeMouseDown(ev, index);
            }

            break;
          } else if ((ev.which === KeyCodes.enter || ev.which === KeyCodes.space) && (target.tagName === 'BUTTON' || target.tagName === 'A' || target.tagName === 'INPUT')) {
            return false;
          } else if (target === itemRoot) {
            if (ev.which === KeyCodes.enter) {
              // Items should be invokable even if selection is disabled.
              _this._onInvokeClick(ev, index);

              ev.preventDefault();
              return;
            } else if (ev.which === KeyCodes.space) {
              if (!isSelectionDisabled) {
                _this._onToggleClick(ev, index);
              }

              ev.preventDefault();
              return;
            }

            break;
          }

          target = getParent(target);
        }
      }
    };

    _this._events = new EventGroup(_this);
    _this._async = new Async(_this);
    initializeComponentRef(_this);
    var selection = _this.props.selection; // Reflect the initial modal state of selection into the state.

    var isModal = selection.isModal && selection.isModal();
    _this.state = {
      isModal: isModal
    };
    return _this;
  }

  SelectionZone.getDerivedStateFromProps = function (nextProps, prevState) {
    var isModal = nextProps.selection.isModal && nextProps.selection.isModal();
    return _assign(_assign({}, prevState), {
      isModal: isModal
    });
  };

  SelectionZone.prototype.componentDidMount = function () {
    var win = getWindow(this._root.current); // Track the latest modifier keys globally.

    this._events.on(win, 'keydown, keyup', this._updateModifiers, true);

    this._events.on(document, 'click', this._findScrollParentAndTryClearOnEmptyClick);

    this._events.on(document.body, 'touchstart', this._onTouchStartCapture, true);

    this._events.on(document.body, 'touchend', this._onTouchStartCapture, true); // Subscribe to the selection to keep modal state updated.


    this._events.on(this.props.selection, 'change', this._onSelectionChange);
  };

  SelectionZone.prototype.render = function () {
    var isModal = this.state.isModal;
    return React.createElement("div", {
      className: css('ms-SelectionZone', {
        'ms-SelectionZone--modal': !!isModal
      }),
      ref: this._root,
      onKeyDown: this._onKeyDown,
      onMouseDown: this._onMouseDown,
      onKeyDownCapture: this._onKeyDownCapture,
      onClick: this._onClick,
      role: "presentation",
      onDoubleClick: this._onDoubleClick,
      onContextMenu: this._onContextMenu,
      onMouseDownCapture: this._onMouseDownCapture,
      onFocusCapture: this._onFocus,
      "data-selection-is-modal": isModal ? true : undefined
    }, this.props.children, React.createElement(FocusRects, null));
  };

  SelectionZone.prototype.componentDidUpdate = function (previousProps) {
    var selection = this.props.selection;

    if (selection !== previousProps.selection) {
      // Whenever selection changes, update the subscripton to keep modal state updated.
      this._events.off(previousProps.selection);

      this._events.on(selection, 'change', this._onSelectionChange);
    }
  };

  SelectionZone.prototype.componentWillUnmount = function () {
    this._events.dispose();

    this._async.dispose();
  };

  SelectionZone.prototype._isSelectionDisabled = function (target) {
    if (this._getSelectionMode() === SelectionMode.none) {
      return true;
    }

    while (target !== this._root.current) {
      if (this._hasAttribute(target, SELECTION_DISABLED_ATTRIBUTE_NAME)) {
        return true;
      }

      target = getParent(target);
    }

    return false;
  };

  SelectionZone.prototype._onToggleAllClick = function (ev) {
    var selection = this.props.selection;

    var selectionMode = this._getSelectionMode();

    if (selectionMode === SelectionMode.multiple) {
      selection.toggleAllSelected();
      ev.stopPropagation();
      ev.preventDefault();
    }
  };

  SelectionZone.prototype._onToggleClick = function (ev, index) {
    var selection = this.props.selection;

    var selectionMode = this._getSelectionMode();

    selection.setChangeEvents(false);

    if (this.props.enterModalOnTouch && this._isTouch && !selection.isIndexSelected(index) && selection.setModal) {
      selection.setModal(true);

      this._setIsTouch(false);
    }

    if (selectionMode === SelectionMode.multiple) {
      selection.toggleIndexSelected(index);
    } else if (selectionMode === SelectionMode.single) {
      var isSelected = selection.isIndexSelected(index);
      var isModal = selection.isModal && selection.isModal();
      selection.setAllSelected(false);
      selection.setIndexSelected(index, !isSelected, true);

      if (isModal && selection.setModal) {
        // Since the above call to setAllSelected(false) clears modal state,
        // restore it. This occurs because the SelectionMode of the Selection
        // may differ from the SelectionZone.
        selection.setModal(true);
      }
    } else {
      selection.setChangeEvents(true);
      return;
    }

    selection.setChangeEvents(true);
    ev.stopPropagation(); // NOTE: ev.preventDefault is not called for toggle clicks, because this will kill the browser behavior
    // for checkboxes if you use a checkbox for the toggle.
  };

  SelectionZone.prototype._onInvokeClick = function (ev, index) {
    var _a = this.props,
        selection = _a.selection,
        onItemInvoked = _a.onItemInvoked;

    if (onItemInvoked) {
      onItemInvoked(selection.getItems()[index], index, ev.nativeEvent);
      ev.preventDefault();
      ev.stopPropagation();
    }
  };

  SelectionZone.prototype._onItemSurfaceClick = function (ev, index) {
    var selection = this.props.selection;
    var isToggleModifierPressed = this._isCtrlPressed || this._isMetaPressed;

    var selectionMode = this._getSelectionMode();

    if (selectionMode === SelectionMode.multiple) {
      if (this._isShiftPressed && !this._isTabPressed) {
        selection.selectToIndex(index, !isToggleModifierPressed);
      } else if (isToggleModifierPressed) {
        selection.toggleIndexSelected(index);
      } else {
        this._clearAndSelectIndex(index);
      }
    } else if (selectionMode === SelectionMode.single) {
      this._clearAndSelectIndex(index);
    }
  };

  SelectionZone.prototype._onInvokeMouseDown = function (ev, index) {
    var selection = this.props.selection; // Only do work if item is not selected.

    if (selection.isIndexSelected(index)) {
      return;
    }

    this._clearAndSelectIndex(index);
  };
  /**
   * To avoid high startup cost of traversing the DOM on component mount,
   * defer finding the scrollable parent until a click interaction.
   *
   * The styles will probably already calculated since we're running in a click handler,
   * so this is less likely to cause layout thrashing then doing it in mount.
   */


  SelectionZone.prototype._findScrollParentAndTryClearOnEmptyClick = function (ev) {
    var scrollParent = findScrollableParent(this._root.current); // unbind this handler and replace binding with a binding on the actual scrollable parent

    this._events.off(document, 'click', this._findScrollParentAndTryClearOnEmptyClick);

    this._events.on(scrollParent, 'click', this._tryClearOnEmptyClick); // If we clicked inside the scrollable parent, call through to the handler on this click.


    if (scrollParent && ev.target instanceof Node && scrollParent.contains(ev.target) || scrollParent === ev.target) {
      this._tryClearOnEmptyClick(ev);
    }
  };

  SelectionZone.prototype._tryClearOnEmptyClick = function (ev) {
    if (!this.props.selectionPreservedOnEmptyClick && this._isNonHandledClick(ev.target)) {
      this.props.selection.setAllSelected(false);
    }
  };

  SelectionZone.prototype._clearAndSelectIndex = function (index) {
    var selection = this.props.selection;
    var isAlreadySingleSelected = selection.getSelectedCount() === 1 && selection.isIndexSelected(index);

    if (!isAlreadySingleSelected) {
      var isModal = selection.isModal && selection.isModal();
      selection.setChangeEvents(false);
      selection.setAllSelected(false);
      selection.setIndexSelected(index, true, true);

      if (isModal || this.props.enterModalOnTouch && this._isTouch) {
        if (selection.setModal) {
          selection.setModal(true);
        }

        if (this._isTouch) {
          this._setIsTouch(false);
        }
      }

      selection.setChangeEvents(true);
    }
  };
  /**
   * We need to track the modifier key states so that when focus events occur, which do not contain
   * modifier states in the Event object, we know how to behave.
   */


  SelectionZone.prototype._updateModifiers = function (ev) {
    this._isShiftPressed = ev.shiftKey;
    this._isCtrlPressed = ev.ctrlKey;
    this._isMetaPressed = ev.metaKey;
    var keyCode = ev.keyCode;
    this._isTabPressed = keyCode ? keyCode === KeyCodes.tab : false;
  };

  SelectionZone.prototype._findItemRoot = function (target) {
    var selection = this.props.selection;

    while (target !== this._root.current) {
      var indexValue = target.getAttribute(SELECTION_INDEX_ATTRIBUTE_NAME);
      var index = Number(indexValue);

      if (indexValue !== null && index >= 0 && index < selection.getItems().length) {
        break;
      }

      target = getParent(target);
    }

    if (target === this._root.current) {
      return undefined;
    }

    return target;
  };

  SelectionZone.prototype._getItemIndex = function (itemRoot) {
    return Number(itemRoot.getAttribute(SELECTION_INDEX_ATTRIBUTE_NAME));
  };

  SelectionZone.prototype._shouldAutoSelect = function (element) {
    return this._hasAttribute(element, SELECTION_SELECT_ATTRIBUTE_NAME);
  };

  SelectionZone.prototype._hasAttribute = function (element, attributeName) {
    var isToggle = false;

    while (!isToggle && element !== this._root.current) {
      isToggle = element.getAttribute(attributeName) === 'true';
      element = getParent(element);
    }

    return isToggle;
  };

  SelectionZone.prototype._isInputElement = function (element) {
    return element.tagName === 'INPUT' || element.tagName === 'TEXTAREA';
  };

  SelectionZone.prototype._isNonHandledClick = function (element) {
    var doc = getDocument();

    if (doc && element) {
      while (element && element !== doc.documentElement) {
        if (isElementTabbable(element)) {
          return false;
        }

        element = getParent(element);
      }
    }

    return true;
  };

  SelectionZone.prototype._handleNextFocus = function (handleFocus) {
    var _this = this;

    if (this._shouldHandleFocusTimeoutId) {
      this._async.clearTimeout(this._shouldHandleFocusTimeoutId);

      this._shouldHandleFocusTimeoutId = undefined;
    }

    this._shouldHandleFocus = handleFocus;

    if (handleFocus) {
      this._async.setTimeout(function () {
        _this._shouldHandleFocus = false;
      }, 100);
    }
  };

  SelectionZone.prototype._setIsTouch = function (isTouch) {
    var _this = this;

    if (this._isTouchTimeoutId) {
      this._async.clearTimeout(this._isTouchTimeoutId);

      this._isTouchTimeoutId = undefined;
    }

    this._isTouch = true;

    if (isTouch) {
      this._async.setTimeout(function () {
        _this._isTouch = false;
      }, 300);
    }
  };

  SelectionZone.prototype._getSelectionMode = function () {
    var selection = this.props.selection;
    var _a = this.props.selectionMode,
        selectionMode = _a === void 0 ? selection ? selection.mode : SelectionMode.none : _a;
    return selectionMode;
  };

  SelectionZone.defaultProps = {
    isSelectedOnFocus: true,
    selectionMode: SelectionMode.multiple
  };
  return SelectionZone;
}(React.Component);

/**
 * {@docCategory GroupedList}
 */
var CollapseAllVisibility;

(function (CollapseAllVisibility) {
  CollapseAllVisibility[CollapseAllVisibility["hidden"] = 0] = "hidden";
  CollapseAllVisibility[CollapseAllVisibility["visible"] = 1] = "visible";
})(CollapseAllVisibility || (CollapseAllVisibility = {}));

/**
 * Enum to describe how a particular column header behaves.... This enum is used to
 * to specify the property IColumn:columnActionsMode.
 * If IColumn:columnActionsMode is undefined, then it's equivalent to ColumnActionsMode.clickable
 * {@docCategory DetailsList}
 */
var ColumnActionsMode;

(function (ColumnActionsMode) {
  /**
   * Renders the column header as disabled.
   */
  ColumnActionsMode[ColumnActionsMode["disabled"] = 0] = "disabled";
  /**
   * Renders the column header is clickable.
   */

  ColumnActionsMode[ColumnActionsMode["clickable"] = 1] = "clickable";
  /**
   * Renders the column header ias clickable and displays the dropdown cheveron.
   */

  ColumnActionsMode[ColumnActionsMode["hasDropdown"] = 2] = "hasDropdown";
})(ColumnActionsMode || (ColumnActionsMode = {}));
/**
 * {@docCategory DetailsList}
 */


var ConstrainMode;

(function (ConstrainMode) {
  /** If specified, lets the content grow which allows the page to manage scrolling. */
  ConstrainMode[ConstrainMode["unconstrained"] = 0] = "unconstrained";
  /**
   * If specified, constrains the list to the given layout space.
   */

  ConstrainMode[ConstrainMode["horizontalConstrained"] = 1] = "horizontalConstrained";
})(ConstrainMode || (ConstrainMode = {}));
/**
 * Enum to describe where the column has been dropped, after starting the drag
 * {@docCategory DetailsList}
 */


var ColumnDragEndLocation;

(function (ColumnDragEndLocation) {
  /**
   * Drag ended outside of current list
   */
  ColumnDragEndLocation[ColumnDragEndLocation["outside"] = 0] = "outside";
  /**
   * Drag ended on current List
   */

  ColumnDragEndLocation[ColumnDragEndLocation["surface"] = 1] = "surface";
  /**
   * Drag ended on Header
   */

  ColumnDragEndLocation[ColumnDragEndLocation["header"] = 2] = "header";
})(ColumnDragEndLocation || (ColumnDragEndLocation = {}));
/**
 * {@docCategory DetailsList}
 */


var DetailsListLayoutMode;

(function (DetailsListLayoutMode) {
  /**
   * Lets the user resize columns and makes not attempt to fit them.
   */
  DetailsListLayoutMode[DetailsListLayoutMode["fixedColumns"] = 0] = "fixedColumns";
  /**
   * Manages which columns are visible, tries to size them according to their min/max rules and drops
   * off columns that can't fit and have isCollapsible set.
   */

  DetailsListLayoutMode[DetailsListLayoutMode["justified"] = 1] = "justified";
})(DetailsListLayoutMode || (DetailsListLayoutMode = {}));
/**
 * {@docCategory DetailsList}
 */


var CheckboxVisibility;

(function (CheckboxVisibility) {
  /**
   * Visible on hover.
   */
  CheckboxVisibility[CheckboxVisibility["onHover"] = 0] = "onHover";
  /**
   * Visible always.
   */

  CheckboxVisibility[CheckboxVisibility["always"] = 1] = "always";
  /**
   * Hide checkboxes.
   */

  CheckboxVisibility[CheckboxVisibility["hidden"] = 2] = "hidden";
})(CheckboxVisibility || (CheckboxVisibility = {}));

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
      _outerZones["delete"](this); // If this is the last outer zone, remove the keydown listener.


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

    return React.createElement(Tag, _assign({
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
var getStyles$2 = function getStyles(props) {
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

var FontIcon = function FontIcon(props) {
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
  return React.createElement("i", _assign({
    "data-icon-name": iconName
  }, containerProps, nativeProps, {
    className: css(MS_ICON, classNames.root, iconClassName, !iconName && classNames.placeholder, className),
    // Apply the font family this way to ensure it doesn't get overridden by Fabric Core ms-Icon styles
    // https://github.com/microsoft/fluentui/issues/10449
    style: _assign({
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

var getClassNames$2 = classNamesFunction({
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
    var classNames = getClassNames$2(styles, {
      theme: theme,
      className: className,
      iconClassName: iconClassName,
      isImage: isImage,
      isPlaceholder: isPlaceholder
    });
    var RootType = isImage ? 'span' : 'i';
    var nativeProps = getNativeProps(this.props, htmlElementProperties, ['aria-label']);
    var imageLoadError = this.state.imageLoadError;

    var imageProps = _assign(_assign({}, this.props.imageProps), {
      onLoadingStateChange: this.onImageLoadingStateChange
    });

    var ImageType = imageLoadError && imageErrorAs || Image; // tslint:disable-next-line:deprecation

    var ariaLabel = this.props['aria-label'] || this.props.ariaLabel;
    var containerProps = ariaLabel ? {
      'aria-label': ariaLabel
    } : {
      'aria-hidden': this.props['aria-labelledby'] || imageProps['aria-labelledby'] ? false : true
    };
    return React.createElement(RootType, _assign({
      "data-icon-name": iconName
    }, containerProps, nativeProps, {
      className: classNames.root
    }), isImage ? React.createElement(ImageType, _assign({}, imageProps)) : children);
  };

  return IconBase;
}(React.Component);

/**
 * Legacy Icon component which can be targeted by customization. It's recommended to use `FontIcon`
 * or `ImageIcon` instead, especially in scenarios where rendering performance is important.
 * {@docCategory Icon}
 */

var Icon = styled(IconBase, getStyles$2, undefined, {
  scope: 'Icon'
}, true);

var inheritFont = {
  fontFamily: 'inherit'
};
var GlobalClassNames$2 = {
  root: 'ms-Fabric',
  bodyThemed: 'ms-Fabric-bodyThemed'
};
var getStyles$3 = function getStyles(props) {
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
  return createTheme(_assign(_assign({}, theme), {
    rtl: isRTL
  }));
});

var getDir = function getDir(theme, dir) {
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

    var renderedContent = React.createElement(Root, _assign({
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
    }, layerElement && ReactDOM.createPortal(React.createElement(Fabric, _assign({}, !eventBubblingEnabled && _getFilteredEvents(), {
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
    onLayerDidMount: function onLayerDidMount() {
      return undefined;
    },
    onLayerWillUnmount: function onLayerWillUnmount() {
      return undefined;
    }
  };
  LayerBase = __decorate([customizable('Layer', ['theme', 'hostId'])], LayerBase);
  return LayerBase;
}(React.Component);

var _onFilterEvent = function _onFilterEvent(ev) {
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
var getStyles$4 = function getStyles(props) {
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

var SPACER_WIDTH = 36;
var GroupSpacer = function GroupSpacer(props) {
  var count = props.count,
      _a = props.indentWidth,
      indentWidth = _a === void 0 ? SPACER_WIDTH : _a;
  var width = count * indentWidth;
  return count > 0 ? React.createElement("span", {
    className: 'ms-GroupSpacer',
    style: {
      display: 'inline-block',
      width: width
    }
  }) : null;
};

var GlobalClassNames$4 = {
  root: 'ms-GroupedList',
  compact: 'ms-GroupedList--Compact',
  group: 'ms-GroupedList-group',
  link: 'ms-Link',
  listCell: 'ms-List-cell'
};
var beziers = {
  easeInOutSine: 'cubic-bezier(0.445, 0.050, 0.550, 0.950)'
};
var getStyles$5 = function getStyles(props) {
  var _a, _b;

  var theme = props.theme,
      className = props.className,
      compact = props.compact;
  var palette = theme.palette;
  var classNames = getGlobalClassNames(GlobalClassNames$4, theme);
  return {
    root: [classNames.root, theme.fonts.small, {
      position: 'relative',
      selectors: (_a = {}, _a["." + classNames.listCell] = {
        minHeight: 38
      }, _a)
    }, compact && [classNames.compact, {
      selectors: (_b = {}, _b["." + classNames.listCell] = {
        minHeight: 32
      }, _b)
    }], className],
    group: [classNames.group, {
      transition: "background-color " + AnimationVariables.durationValue2 + " " + beziers.easeInOutSine
    }],
    groupIsDropping: {
      backgroundColor: palette.neutralLight
    }
  };
};

var DetailsRowGlobalClassNames = {
  root: 'ms-DetailsRow',
  // TODO: in Fabric 7.0 lowercase the 'Compact' for consistency across other components.
  compact: 'ms-DetailsList--Compact',
  cell: 'ms-DetailsRow-cell',
  cellAnimation: 'ms-DetailsRow-cellAnimation',
  cellCheck: 'ms-DetailsRow-cellCheck',
  check: 'ms-DetailsRow-check',
  cellMeasurer: 'ms-DetailsRow-cellMeasurer',
  listCellFirstChild: 'ms-List-cell:first-child',
  isContentUnselectable: 'is-contentUnselectable',
  isSelected: 'is-selected',
  isCheckVisible: 'is-check-visible',
  isRowHeader: 'is-row-header',
  fields: 'ms-DetailsRow-fields'
};
var IsFocusableSelector = "[data-is-focusable='true']";
var DEFAULT_CELL_STYLE_PROPS = {
  cellLeftPadding: 12,
  cellRightPadding: 8,
  cellExtraRightPadding: 24
}; // Source of default row heights to share.

var DEFAULT_ROW_HEIGHTS = {
  rowHeight: 42,
  compactRowHeight: 32
}; // Constant values

var values = _assign(_assign({}, DEFAULT_ROW_HEIGHTS), {
  rowVerticalPadding: 11,
  compactRowVerticalPadding: 6
});

var getStyles$6 = function getStyles(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;

  var theme = props.theme,
      isSelected = props.isSelected,
      canSelect = props.canSelect,
      droppingClassName = props.droppingClassName,
      anySelected = props.anySelected,
      isCheckVisible = props.isCheckVisible,
      checkboxCellClassName = props.checkboxCellClassName,
      compact = props.compact,
      className = props.className,
      _o = props.cellStyleProps,
      cellStyleProps = _o === void 0 ? DEFAULT_CELL_STYLE_PROPS : _o,
      enableUpdateAnimations = props.enableUpdateAnimations;
  var palette = theme.palette,
      fonts = theme.fonts;
  var neutralPrimary = palette.neutralPrimary,
      white = palette.white,
      neutralSecondary = palette.neutralSecondary,
      neutralLighter = palette.neutralLighter,
      neutralLight = palette.neutralLight,
      neutralDark = palette.neutralDark,
      neutralQuaternaryAlt = palette.neutralQuaternaryAlt;
  var focusBorder = theme.semanticColors.focusBorder;
  var classNames = getGlobalClassNames(DetailsRowGlobalClassNames, theme);
  var colors = {
    // Default
    defaultHeaderText: neutralPrimary,
    defaultMetaText: neutralSecondary,
    defaultBackground: white,
    // Default Hover
    defaultHoverHeaderText: neutralDark,
    defaultHoverMetaText: neutralPrimary,
    defaultHoverBackground: neutralLighter,
    // Selected
    selectedHeaderText: neutralDark,
    selectedMetaText: neutralPrimary,
    selectedBackground: neutralLight,
    // Selected Hover
    selectedHoverHeaderText: neutralDark,
    selectedHoverMetaText: neutralPrimary,
    selectedHoverBackground: neutralQuaternaryAlt,
    // Focus
    focusHeaderText: neutralDark,
    focusMetaText: neutralPrimary,
    focusBackground: neutralLight,
    focusHoverBackground: neutralQuaternaryAlt
  }; // Selected row styles

  var selectedStyles = [getFocusStyle(theme, {
    inset: -1,
    borderColor: focusBorder,
    outlineColor: white
  }), classNames.isSelected, {
    color: colors.selectedMetaText,
    background: colors.selectedBackground,
    borderBottom: "1px solid " + white,
    selectors: (_a = {
      '&:before': {
        position: 'absolute',
        display: 'block',
        top: -1,
        height: 1,
        bottom: 0,
        left: 0,
        right: 0,
        content: '',
        borderTop: "1px solid " + white
      },
      // Selected State hover
      '&:hover': {
        background: colors.selectedHoverBackground,
        color: colors.selectedHoverMetaText,
        selectors: (_b = {}, // Selected State hover meta cell
        _b["." + classNames.cell + " " + HighContrastSelector] = {
          color: 'HighlightText',
          selectors: {
            '> a': {
              color: 'HighlightText'
            }
          }
        }, // Selected State hover Header cell
        _b["." + classNames.isRowHeader] = {
          color: colors.selectedHoverHeaderText,
          selectors: (_c = {}, _c[HighContrastSelector] = {
            color: 'HighlightText'
          }, _c)
        }, // Ensure high-contrast mode overrides default hover background
        _b[HighContrastSelector] = {
          background: 'Highlight'
        }, _b)
      },
      // Focus state
      '&:focus': {
        background: colors.focusBackground,
        selectors: (_d = {}, // Selected State hover meta cell
        _d["." + classNames.cell] = {
          color: colors.focusMetaText,
          selectors: (_e = {}, _e[HighContrastSelector] = {
            color: 'HighlightText',
            selectors: {
              '> a': {
                color: 'HighlightText'
              }
            }
          }, _e)
        }, // Row header cell
        _d["." + classNames.isRowHeader] = {
          color: colors.focusHeaderText,
          selectors: (_f = {}, _f[HighContrastSelector] = {
            color: 'HighlightText'
          }, _f)
        }, // Ensure high-contrast mode overrides default focus background
        _d[HighContrastSelector] = {
          background: 'Highlight'
        }, _d)
      }
    }, _a[HighContrastSelector] = {
      background: 'Highlight',
      color: 'HighlightText',
      MsHighContrastAdjust: 'none',
      selectors: {
        a: {
          color: 'HighlightText'
        }
      }
    }, // Focus and hover state
    _a['&:focus:hover'] = {
      background: colors.focusHoverBackground
    }, _a)
  }];
  var cannotSelectStyles = [classNames.isContentUnselectable, {
    userSelect: 'none',
    cursor: 'default'
  }];
  var rootCompactStyles = {
    minHeight: values.compactRowHeight,
    border: 0
  };
  var cellCompactStyles = {
    minHeight: values.compactRowHeight,
    paddingTop: values.compactRowVerticalPadding,
    paddingBottom: values.compactRowVerticalPadding,
    paddingLeft: cellStyleProps.cellLeftPadding + "px"
  };
  var defaultCellStyles = [getFocusStyle(theme, {
    inset: -1
  }), classNames.cell, {
    display: 'inline-block',
    position: 'relative',
    boxSizing: 'border-box',
    minHeight: values.rowHeight,
    verticalAlign: 'top',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    paddingTop: values.rowVerticalPadding,
    paddingBottom: values.rowVerticalPadding,
    paddingLeft: cellStyleProps.cellLeftPadding + "px",
    selectors: (_g = {
      '& > button': {
        maxWidth: '100%'
      }
    }, _g[IsFocusableSelector] = getFocusStyle(theme, {
      inset: -1,
      borderColor: neutralSecondary,
      outlineColor: white
    }), _g)
  }, isSelected && {
    selectors: (_h = {}, _h[HighContrastSelector] = {
      background: 'Highlight',
      color: 'HighlightText',
      MsHighContrastAdjust: 'none',
      selectors: {
        a: {
          color: 'HighlightText'
        }
      }
    }, _h)
  }, compact && cellCompactStyles];
  return {
    root: [classNames.root, AnimationClassNames.fadeIn400, droppingClassName, theme.fonts.small, isCheckVisible && classNames.isCheckVisible, getFocusStyle(theme, {
      borderColor: focusBorder,
      outlineColor: white
    }), {
      borderBottom: "1px solid " + neutralLighter,
      background: colors.defaultBackground,
      color: colors.defaultMetaText,
      // This ensures that the row always tries to consume is minimum width and does not compress.
      display: 'inline-flex',
      minWidth: '100%',
      minHeight: values.rowHeight,
      whiteSpace: 'nowrap',
      padding: 0,
      boxSizing: 'border-box',
      verticalAlign: 'top',
      textAlign: 'left',
      selectors: (_j = {}, _j["." + classNames.listCellFirstChild + " &:before"] = {
        display: 'none'
      }, _j['&:hover'] = {
        background: colors.defaultHoverBackground,
        color: colors.defaultHoverMetaText,
        selectors: (_k = {}, _k["." + classNames.isRowHeader] = {
          color: colors.defaultHoverHeaderText
        }, _k)
      }, _j["&:hover ." + classNames.check] = {
        opacity: 1
      }, _j["." + IsFocusVisibleClassName + " &:focus ." + classNames.check] = {
        opacity: 1
      }, _j)
    }, isSelected && selectedStyles, !canSelect && cannotSelectStyles, compact && rootCompactStyles, className],
    cellUnpadded: {
      paddingRight: cellStyleProps.cellRightPadding + "px"
    },
    cellPadded: {
      paddingRight: cellStyleProps.cellExtraRightPadding + cellStyleProps.cellRightPadding + "px",
      selectors: (_l = {}, _l["&." + classNames.cellCheck] = {
        paddingRight: 0
      }, _l)
    },
    cell: defaultCellStyles,
    cellAnimation: enableUpdateAnimations && AnimationStyles.slideLeftIn40,
    cellMeasurer: [classNames.cellMeasurer, {
      overflow: 'visible',
      whiteSpace: 'nowrap'
    }],
    checkCell: [defaultCellStyles, classNames.cellCheck, checkboxCellClassName, {
      padding: 0,
      // Ensure that the check cell covers the top border of the cell.
      // This ensures the click target does not leave a spot which would
      // cause other items to be deselected.
      paddingTop: 1,
      marginTop: -1,
      flexShrink: 0
    }],
    checkCover: {
      position: 'absolute',
      top: -1,
      left: 0,
      bottom: 0,
      right: 0,
      display: anySelected ? 'block' : 'none'
    },
    fields: [classNames.fields, {
      display: 'flex',
      alignItems: 'stretch'
    }],
    isRowHeader: [classNames.isRowHeader, {
      color: colors.defaultHeaderText,
      fontSize: fonts.medium.fontSize
    }, isSelected && {
      color: colors.selectedHeaderText,
      fontWeight: FontWeights.semibold,
      selectors: (_m = {}, _m[HighContrastSelector] = {
        color: 'HighlightText'
      }, _m)
    }],
    isMultiline: [defaultCellStyles, {
      whiteSpace: 'normal',
      wordBreak: 'break-word',
      textOverflow: 'clip'
    }],
    check: [classNames.check]
  };
};

var GlobalClassNames$5 = {
  tooltipHost: 'ms-TooltipHost',
  root: 'ms-DetailsHeader',
  cell: 'ms-DetailsHeader-cell',
  cellIsCheck: 'ms-DetailsHeader-cellIsCheck',
  collapseButton: 'ms-DetailsHeader-collapseButton',
  isCollapsed: 'is-collapsed',
  isAllSelected: 'is-allSelected',
  isSelectAllHidden: 'is-selectAllHidden',
  isResizingColumn: 'is-resizingColumn',
  cellSizer: 'ms-DetailsHeader-cellSizer',
  isResizing: 'is-resizing',
  dropHintCircleStyle: 'ms-DetailsHeader-dropHintCircleStyle',
  dropHintCaretStyle: 'ms-DetailsHeader-dropHintCaretStyle',
  dropHintLineStyle: 'ms-DetailsHeader-dropHintLineStyle',
  cellTitle: 'ms-DetailsHeader-cellTitle',
  cellName: 'ms-DetailsHeader-cellName',
  filterChevron: 'ms-DetailsHeader-filterChevron',
  gripperBarVertical: 'ms-DetailsColumn-gripperBarVertical',
  checkTooltip: 'ms-DetailsHeader-checkTooltip',
  check: 'ms-DetailsHeader-check'
};
var HEADER_HEIGHT = 42;
var getCellStyles = function getCellStyles(props) {
  var theme = props.theme,
      _a = props.cellStyleProps,
      cellStyleProps = _a === void 0 ? DEFAULT_CELL_STYLE_PROPS : _a;
  var semanticColors = theme.semanticColors;
  var classNames = getGlobalClassNames(GlobalClassNames$5, theme);
  return [classNames.cell, getFocusStyle(theme), {
    color: semanticColors.bodyText,
    position: 'relative',
    display: 'inline-block',
    boxSizing: 'border-box',
    padding: "0 " + cellStyleProps.cellRightPadding + "px 0 " + cellStyleProps.cellLeftPadding + "px",
    lineHeight: 'inherit',
    margin: '0',
    height: HEADER_HEIGHT,
    verticalAlign: 'top',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    textAlign: 'left'
  }];
};
var getStyles$7 = function getStyles(props) {
  var _a, _b, _c, _d;

  var theme = props.theme,
      className = props.className,
      isAllSelected = props.isAllSelected,
      isResizingColumn = props.isResizingColumn,
      isSizing = props.isSizing,
      isAllCollapsed = props.isAllCollapsed,
      _e = props.cellStyleProps,
      cellStyleProps = _e === void 0 ? DEFAULT_CELL_STYLE_PROPS : _e;
  var semanticColors = theme.semanticColors,
      palette = theme.palette,
      fonts = theme.fonts;
  var classNames = getGlobalClassNames(GlobalClassNames$5, theme);
  var colors = {
    iconForegroundColor: semanticColors.bodySubtext,
    headerForegroundColor: semanticColors.bodyText,
    headerBackgroundColor: semanticColors.bodyBackground,
    dropdownChevronForegroundColor: palette.neutralTertiary,
    resizerColor: palette.neutralTertiaryAlt
  };
  var cellSizerFadeInStyles = {
    opacity: 1,
    transition: 'opacity 0.3s linear'
  };
  var cellStyles = getCellStyles(props);
  return {
    root: [classNames.root, fonts.small, {
      display: 'inline-block',
      background: colors.headerBackgroundColor,
      position: 'relative',
      minWidth: '100%',
      verticalAlign: 'top',
      height: HEADER_HEIGHT,
      lineHeight: HEADER_HEIGHT,
      whiteSpace: 'nowrap',
      boxSizing: 'content-box',
      paddingBottom: '1px',
      paddingTop: '16px',
      borderBottom: "1px solid " + semanticColors.bodyDivider,
      cursor: 'default',
      userSelect: 'none',
      selectors: (_a = {}, _a["&:hover ." + classNames.check] = {
        opacity: 1
      }, _a["& ." + classNames.tooltipHost + " ." + classNames.checkTooltip] = {
        display: 'block'
      }, _a)
    }, isAllSelected && classNames.isAllSelected, isResizingColumn && classNames.isResizingColumn, className],
    check: [classNames.check, {
      height: HEADER_HEIGHT
    }, {
      selectors: (_b = {}, _b["." + IsFocusVisibleClassName + " &:focus"] = {
        opacity: 1
      }, _b)
    }],
    cellWrapperPadded: {
      paddingRight: cellStyleProps.cellExtraRightPadding + cellStyleProps.cellRightPadding
    },
    cellIsCheck: [cellStyles, classNames.cellIsCheck, {
      position: 'relative',
      padding: 0,
      margin: 0,
      display: 'inline-flex',
      alignItems: 'center',
      border: 'none'
    }, isAllSelected && {
      opacity: 1
    }],
    cellIsGroupExpander: [cellStyles, {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: fonts.small.fontSize,
      padding: 0,
      border: 'none',
      width: SPACER_WIDTH,
      color: palette.neutralSecondary,
      selectors: {
        ':hover': {
          backgroundColor: palette.neutralLighter
        },
        ':active': {
          backgroundColor: palette.neutralLight
        }
      }
    }],
    cellIsActionable: {
      selectors: {
        ':hover': {
          color: semanticColors.bodyText,
          background: semanticColors.listHeaderBackgroundHovered
        },
        ':active': {
          background: semanticColors.listHeaderBackgroundPressed
        }
      }
    },
    cellIsEmpty: {
      textOverflow: 'clip'
    },
    cellSizer: [classNames.cellSizer, focusClear(), {
      display: 'inline-block',
      position: 'relative',
      cursor: 'ew-resize',
      bottom: 0,
      top: 0,
      overflow: 'hidden',
      height: 'inherit',
      background: 'transparent',
      zIndex: 1,
      width: 16,
      selectors: (_c = {
        ':after': {
          content: '""',
          position: 'absolute',
          top: 0,
          bottom: 0,
          width: 1,
          background: colors.resizerColor,
          opacity: 0,
          left: '50%'
        },
        ':focus:after': cellSizerFadeInStyles,
        ':hover:after': cellSizerFadeInStyles
      }, _c["&." + classNames.isResizing + ":after"] = [cellSizerFadeInStyles, {
        boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.4)'
      }], _c)
    }],
    cellIsResizing: classNames.isResizing,
    cellSizerStart: {
      margin: '0 -8px'
    },
    cellSizerEnd: {
      margin: 0,
      marginLeft: -16
    },
    collapseButton: [classNames.collapseButton, {
      transformOrigin: '50% 50%',
      transition: 'transform .1s linear'
    }, isAllCollapsed ? [classNames.isCollapsed, {
      transform: 'rotate(0deg)'
    }] : {
      transform: 'rotate(90deg)'
    }],
    checkTooltip: classNames.checkTooltip,
    sizingOverlay: isSizing && {
      position: 'absolute',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      cursor: 'ew-resize',
      background: 'rgba(255, 255, 255, 0)',
      selectors: (_d = {}, _d[HighContrastSelector] = {
        background: 'transparent',
        MsHighContrastAdjust: 'none'
      }, _d)
    },
    accessibleLabel: hiddenContentStyle,
    dropHintCircleStyle: [classNames.dropHintCircleStyle, {
      display: 'inline-block',
      visibility: 'hidden',
      position: 'absolute',
      bottom: 0,
      height: 9,
      width: 9,
      borderRadius: '50%',
      marginLeft: -5,
      top: 34,
      overflow: 'visible',
      zIndex: 10,
      border: "1px solid " + palette.themePrimary,
      background: palette.white
    }],
    dropHintCaretStyle: [classNames.dropHintCaretStyle, {
      display: 'none',
      position: 'absolute',
      top: -28,
      left: -6.5,
      fontSize: fonts.medium.fontSize,
      color: palette.themePrimary,
      overflow: 'visible',
      zIndex: 10
    }],
    dropHintLineStyle: [classNames.dropHintLineStyle, {
      display: 'none',
      position: 'absolute',
      bottom: 0,
      top: 0,
      overflow: 'hidden',
      height: 42,
      width: 1,
      background: palette.themePrimary,
      zIndex: 10
    }],
    dropHintStyle: {
      display: 'inline-block',
      position: 'absolute'
    }
  };
};

var CheckGlobalClassNames = {
  root: 'ms-Check',
  circle: 'ms-Check-circle',
  check: 'ms-Check-check',

  /** Must be manually applied to the parent element of the check. */
  checkHost: 'ms-Check-checkHost'
};
var getStyles$8 = function getStyles(props) {
  var _a, _b, _c, _d, _e; // tslint:disable-next-line:deprecation


  var _f = props.height,
      height = _f === void 0 ? props.checkBoxHeight || '18px' : _f,
      checked = props.checked,
      className = props.className,
      theme = props.theme;
  var palette = theme.palette,
      semanticColors = theme.semanticColors,
      fonts = theme.fonts;
  var isRTL = getRTL$1(theme);
  var classNames = getGlobalClassNames(CheckGlobalClassNames, theme);
  var sharedCircleCheck = {
    fontSize: height,
    position: 'absolute',
    left: 0,
    top: 0,
    width: height,
    height: height,
    textAlign: 'center',
    verticalAlign: 'middle'
  };
  return {
    root: [classNames.root, fonts.medium, {
      // lineHeight currently needs to be a string to output without 'px'
      lineHeight: '1',
      width: height,
      height: height,
      verticalAlign: 'top',
      position: 'relative',
      userSelect: 'none',
      selectors: (_a = {
        ':before': {
          content: '""',
          position: 'absolute',
          top: '1px',
          right: '1px',
          bottom: '1px',
          left: '1px',
          borderRadius: '50%',
          opacity: 1,
          background: semanticColors.bodyBackground
        }
      }, _a["." + classNames.checkHost + ":hover &, ." + classNames.checkHost + ":focus &, &:hover, &:focus"] = {
        opacity: 1
      }, _a)
    }, checked && ['is-checked', {
      selectors: {
        ':before': {
          background: palette.themePrimary,
          opacity: 1,
          selectors: (_b = {}, _b[HighContrastSelector] = {
            background: 'Window'
          }, _b)
        }
      }
    }], className],
    circle: [classNames.circle, sharedCircleCheck, {
      color: palette.neutralSecondary,
      selectors: (_c = {}, _c[HighContrastSelector] = {
        color: 'WindowText'
      }, _c)
    }, checked && {
      color: palette.white
    }],
    check: [classNames.check, sharedCircleCheck, {
      opacity: 0,
      color: palette.neutralSecondary,
      fontSize: IconFontSizes.medium,
      left: isRTL ? '-0.5px' : '.5px',
      selectors: (_d = {
        ':hover': {
          opacity: 1
        }
      }, _d[HighContrastSelector] = {
        MsHighContrastAdjust: 'none'
      }, _d)
    }, checked && {
      opacity: 1,
      color: palette.white,
      fontWeight: 900,
      selectors: (_e = {}, _e[HighContrastSelector] = {
        border: 'none',
        color: 'WindowText'
      }, _e)
    }],
    checkHost: classNames.checkHost
  };
};

var GlobalClassNames$6 = {
  root: 'ms-DetailsRow-check',
  isDisabled: 'ms-DetailsRow-check--isDisabled',
  isHeader: 'ms-DetailsRow-check--isHeader'
};
var CHECK_CELL_WIDTH = 48;
var getStyles$9 = function getStyles(props) {
  var theme = props.theme,
      className = props.className,
      isHeader = props.isHeader,
      selected = props.selected,
      anySelected = props.anySelected,
      canSelect = props.canSelect,
      compact = props.compact,
      isVisible = props.isVisible;
  var classNames = getGlobalClassNames(GlobalClassNames$6, theme);
  var rowHeight = DEFAULT_ROW_HEIGHTS.rowHeight,
      compactRowHeight = DEFAULT_ROW_HEIGHTS.compactRowHeight;
  var height = isHeader ? HEADER_HEIGHT : compact ? compactRowHeight : rowHeight;
  var isCheckVisible = isVisible || selected || anySelected;
  return {
    root: [classNames.root, className],
    check: [!canSelect && classNames.isDisabled, isHeader && classNames.isHeader, getFocusStyle(theme), theme.fonts.small, CheckGlobalClassNames.checkHost, {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'default',
      boxSizing: 'border-box',
      verticalAlign: 'top',
      background: 'none',
      backgroundColor: 'transparent',
      border: 'none',
      opacity: isCheckVisible ? 1 : 0,
      height: height,
      width: CHECK_CELL_WIDTH,
      padding: 0,
      margin: 0
    }],
    isDisabled: []
  };
};

var GlobalClassNames$7 = {
  root: 'ms-GroupHeader',
  compact: 'ms-GroupHeader--compact',
  check: 'ms-GroupHeader-check',
  dropIcon: 'ms-GroupHeader-dropIcon',
  expand: 'ms-GroupHeader-expand',
  isCollapsed: 'is-collapsed',
  title: 'ms-GroupHeader-title',
  isSelected: 'is-selected',
  iconTag: 'ms-Icon--Tag',
  group: 'ms-GroupedList-group',
  isDropping: 'is-dropping'
};
var beziers$1 = {
  easeOutCirc: 'cubic-bezier(0.075, 0.820, 0.165, 1.000)',
  easeOutSine: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
  easeInBack: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)'
};
var DEFAULT_GROUP_HEADER_HEIGHT = 48;
var COMPACT_GROUP_HEADER_HEIGHT = 40;
var getStyles$a = function getStyles(props) {
  var _a, _b, _c, _d, _e;

  var theme = props.theme,
      className = props.className,
      selected = props.selected,
      isCollapsed = props.isCollapsed,
      compact = props.compact; // padding from the source to align GroupHeader title with DetailsRow's first cell.

  var cellLeftPadding = DEFAULT_CELL_STYLE_PROPS.cellLeftPadding;
  var finalRowHeight = compact ? COMPACT_GROUP_HEADER_HEIGHT : DEFAULT_GROUP_HEADER_HEIGHT;
  var semanticColors = theme.semanticColors,
      palette = theme.palette,
      fonts = theme.fonts;
  var classNames = getGlobalClassNames(GlobalClassNames$7, theme);
  var checkExpandResetStyles = [getFocusStyle(theme), {
    cursor: 'default',
    background: 'none',
    backgroundColor: 'transparent',
    border: 'none',
    padding: 0
  }];
  return {
    root: [classNames.root, getFocusStyle(theme), theme.fonts.medium, {
      // keep the border for height but color it so it's invisible.
      borderBottom: "1px solid " + semanticColors.listBackground,
      cursor: 'default',
      userSelect: 'none',
      selectors: (_a = {
        ':hover': {
          background: semanticColors.listItemBackgroundHovered,
          color: semanticColors.actionLinkHovered
        }
      }, _a["&:hover ." + classNames.check] = {
        opacity: 1
      }, _a["." + IsFocusVisibleClassName + " &:focus ." + classNames.check] = {
        opacity: 1
      }, _a[":global(." + classNames.group + "." + classNames.isDropping + ")"] = {
        selectors: (_b = {}, _b["& > ." + classNames.root + " ." + classNames.dropIcon] = {
          transition: "transform " + AnimationVariables.durationValue4 + " " + beziers$1.easeOutCirc + " " + ("opacity " + AnimationVariables.durationValue1 + " " + beziers$1.easeOutSine),
          transitionDelay: AnimationVariables.durationValue3,
          opacity: 1,
          transform: "rotate(0.2deg) scale(1);"
        }, _b["." + classNames.check] = {
          opacity: 0
        }, _b)
      }, _a)
    }, selected && [classNames.isSelected, {
      background: semanticColors.listItemBackgroundChecked,
      selectors: (_c = {
        ':hover': {
          background: semanticColors.listItemBackgroundCheckedHovered
        }
      }, _c["" + classNames.check] = {
        opacity: 1
      }, _c)
    }], compact && [classNames.compact, {
      border: 'none'
    }], className],
    groupHeaderContainer: [{
      display: 'flex',
      alignItems: 'center',
      height: finalRowHeight
    }],
    headerCount: [{
      padding: '0px 4px'
    }],
    check: [classNames.check, checkExpandResetStyles, {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      // paddingTop and marginTop brought from the DetailsRow.styles.ts with explanation below.
      // Ensure that the check cell covers the top border of the cell.
      // This ensures the click target does not leave a spot which would
      // cause other items to be deselected.
      paddingTop: 1,
      marginTop: -1,
      opacity: 0,
      width: CHECK_CELL_WIDTH,
      height: finalRowHeight,
      selectors: (_d = {}, _d["." + IsFocusVisibleClassName + " &:focus"] = {
        opacity: 1
      }, _d)
    }],
    expand: [classNames.expand, checkExpandResetStyles, {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: fonts.small.fontSize,
      width: SPACER_WIDTH,
      height: finalRowHeight,
      color: selected ? palette.neutralPrimary : palette.neutralSecondary,
      selectors: {
        ':hover': {
          backgroundColor: selected ? palette.neutralQuaternary : palette.neutralLight
        },
        ':active': {
          backgroundColor: selected ? palette.neutralTertiaryAlt : palette.neutralQuaternaryAlt
        }
      }
    }],
    expandIsCollapsed: [isCollapsed ? [classNames.isCollapsed, {
      transform: 'rotate(0deg)',
      transformOrigin: '50% 50%',
      transition: 'transform .1s linear'
    }] : {
      transform: 'rotate(90deg)',
      transformOrigin: '50% 50%',
      transition: 'transform .1s linear'
    }],
    title: [classNames.title, {
      paddingLeft: cellLeftPadding,
      fontSize: compact ? fonts.medium.fontSize : fonts.mediumPlus.fontSize,
      fontWeight: isCollapsed ? FontWeights.regular : FontWeights.semibold,
      cursor: 'pointer',
      outline: 0,
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis'
    }],
    dropIcon: [classNames.dropIcon, {
      position: 'absolute',
      left: -26,
      fontSize: IconFontSizes.large,
      color: palette.neutralSecondary,
      transition: "transform " + AnimationVariables.durationValue2 + " " + beziers$1.easeInBack + ", " + ("opacity " + AnimationVariables.durationValue4 + " " + beziers$1.easeOutSine),
      opacity: 0,
      transform: 'rotate(0.2deg) scale(0.65)',
      transformOrigin: '10px 10px',
      selectors: (_e = {}, _e[":global(." + classNames.iconTag + ")"] = {
        position: 'absolute'
      }, _e)
    }]
  };
};

var getClassNames$5 = classNamesFunction();
var CheckBase = function CheckBase(props) {
  var _a = props.checked,
      checked = _a === void 0 ? false : _a,
      className = props.className,
      theme = props.theme,
      styles = props.styles,
      _b = props.useFastIcons,
      useFastIcons = _b === void 0 ? true : _b;
  var classNames = getClassNames$5(styles, {
    theme: theme,
    className: className,
    checked: checked
  });
  var IconComponent = useFastIcons ? FontIcon : Icon;
  return React.createElement("div", {
    className: classNames.root
  }, React.createElement(IconComponent, {
    iconName: "CircleRing",
    className: classNames.circle
  }), React.createElement(IconComponent, {
    iconName: "StatusCircleCheckmark",
    className: classNames.check
  }));
};

var Check = styled(CheckBase, getStyles$8, undefined, {
  scope: 'Check'
}, true);

/**
 * Possible variations of the spinner circle size.
 * {@docCategory Spinner}
 */
var SpinnerSize;

(function (SpinnerSize) {
  /**
   * 12px Spinner diameter
   */
  SpinnerSize[SpinnerSize["xSmall"] = 0] = "xSmall";
  /**
   * 16px Spinner diameter
   */

  SpinnerSize[SpinnerSize["small"] = 1] = "small";
  /**
   * 20px Spinner diameter
   */

  SpinnerSize[SpinnerSize["medium"] = 2] = "medium";
  /**
   * 28px Spinner diameter
   */

  SpinnerSize[SpinnerSize["large"] = 3] = "large";
})(SpinnerSize || (SpinnerSize = {}));
/**
 * Deprecated at v2.0.0, use `SpinnerSize` instead.
 * @deprecated Use `SpinnerSize` instead.
 * {@docCategory Spinner}
 */


var SpinnerType;

(function (SpinnerType) {
  /**
   * Deprecated and will be removed at \>= 2.0.0. Use `SpinnerSize.medium` instead.
   * @deprecated Use `SpinnerSize.medium` instead.
   */
  SpinnerType[SpinnerType["normal"] = 0] = "normal";
  /**
   * Deprecated and will be removed at \>= 2.0.0. Use `SpinnerSize.large` instead.
   * @deprecated Use `SpinnerSize.large` instead.
   */

  SpinnerType[SpinnerType["large"] = 1] = "large";
})(SpinnerType || (SpinnerType = {}));

var getClassNames$6 = classNamesFunction();

var SpinnerBase =
/** @class */
function (_super) {
  __extends(SpinnerBase, _super);

  function SpinnerBase() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  SpinnerBase.prototype.render = function () {
    // tslint:disable-next-line:deprecation
    var _a = this.props,
        type = _a.type,
        size = _a.size,
        ariaLabel = _a.ariaLabel,
        ariaLive = _a.ariaLive,
        styles = _a.styles,
        label = _a.label,
        theme = _a.theme,
        className = _a.className,
        labelPosition = _a.labelPosition;
    var statusMessage = ariaLabel;
    var nativeProps = getNativeProps(this.props, divProperties, ['size']); // SpinnerType is deprecated. If someone is still using this property, rather than putting the SpinnerType into the
    // ISpinnerStyleProps, we'll map SpinnerType to its equivalent SpinnerSize and pass that in. Once SpinnerType
    // finally goes away we should delete this.

    var styleSize = size;

    if (styleSize === undefined && type !== undefined) {
      // tslint:disable-next-line:deprecation
      styleSize = type === SpinnerType.large ? SpinnerSize.large : SpinnerSize.medium;
    }

    var classNames = getClassNames$6(styles, {
      theme: theme,
      size: styleSize,
      className: className,
      labelPosition: labelPosition
    });
    return React.createElement("div", _assign({}, nativeProps, {
      className: classNames.root
    }), React.createElement("div", {
      className: classNames.circle
    }), label && React.createElement("div", {
      className: classNames.label
    }, label), statusMessage && React.createElement("div", {
      role: "status",
      "aria-live": ariaLive
    }, React.createElement(DelayedRender, null, React.createElement("div", {
      className: classNames.screenReaderText
    }, statusMessage))));
  };

  SpinnerBase.defaultProps = {
    size: SpinnerSize.medium,
    ariaLive: 'polite',
    labelPosition: 'bottom'
  };
  return SpinnerBase;
}(React.Component);

var GlobalClassNames$8 = {
  root: 'ms-Spinner',
  circle: 'ms-Spinner-circle',
  label: 'ms-Spinner-label'
};
var spinAnimation = memoizeFunction(function () {
  return keyframes({
    '0%': {
      transform: 'rotate(0deg)'
    },
    '100%': {
      transform: 'rotate(360deg)'
    }
  });
});
var getStyles$b = function getStyles(props) {
  var _a;

  var theme = props.theme,
      size = props.size,
      className = props.className,
      labelPosition = props.labelPosition;
  var palette = theme.palette;
  var classNames = getGlobalClassNames(GlobalClassNames$8, theme);
  return {
    root: [classNames.root, {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }, labelPosition === 'top' && {
      flexDirection: 'column-reverse'
    }, labelPosition === 'right' && {
      flexDirection: 'row'
    }, labelPosition === 'left' && {
      flexDirection: 'row-reverse'
    }, className],
    circle: [classNames.circle, {
      boxSizing: 'border-box',
      borderRadius: '50%',
      border: '1.5px solid ' + palette.themeLight,
      borderTopColor: palette.themePrimary,
      animationName: spinAnimation(),
      animationDuration: '1.3s',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'cubic-bezier(.53,.21,.29,.67)',
      selectors: (_a = {}, _a[HighContrastSelector] = {
        borderTopColor: 'Highlight'
      }, _a)
    }, size === SpinnerSize.xSmall && ['ms-Spinner--xSmall', {
      width: 12,
      height: 12
    }], size === SpinnerSize.small && ['ms-Spinner--small', {
      width: 16,
      height: 16
    }], size === SpinnerSize.medium && ['ms-Spinner--medium', {
      width: 20,
      height: 20
    }], size === SpinnerSize.large && ['ms-Spinner--large', {
      width: 28,
      height: 28
    }]],
    label: [classNames.label, theme.fonts.small, {
      color: palette.themePrimary,
      margin: '8px 0 0',
      textAlign: 'center'
    }, labelPosition === 'top' && {
      margin: '0 0 8px'
    }, labelPosition === 'right' && {
      margin: '0 0 0 8px'
    }, labelPosition === 'left' && {
      margin: '0 8px 0 0'
    }],
    screenReaderText: hiddenContentStyle
  };
};

var Spinner = styled(SpinnerBase, getStyles$b, undefined, {
  scope: 'Spinner'
});

var getClassNames$7 = classNamesFunction();

var GroupHeaderBase =
/** @class */
function (_super) {
  __extends(GroupHeaderBase, _super);

  function GroupHeaderBase(props) {
    var _this = _super.call(this, props) || this;

    _this._onToggleCollapse = function (ev) {
      var _a = _this.props,
          group = _a.group,
          onToggleCollapse = _a.onToggleCollapse,
          isGroupLoading = _a.isGroupLoading;
      var isCollapsed = _this.state.isCollapsed;
      var newCollapsed = !isCollapsed;
      var newLoadingVisible = !newCollapsed && isGroupLoading && isGroupLoading(group);

      _this.setState({
        isCollapsed: newCollapsed,
        isLoadingVisible: newLoadingVisible
      });

      if (onToggleCollapse) {
        onToggleCollapse(group);
      }

      ev.stopPropagation();
      ev.preventDefault();
    };

    _this._onToggleSelectGroupClick = function (ev) {
      var _a = _this.props,
          onToggleSelectGroup = _a.onToggleSelectGroup,
          group = _a.group;

      if (onToggleSelectGroup) {
        onToggleSelectGroup(group);
      }

      ev.preventDefault();
      ev.stopPropagation();
    };

    _this._onHeaderClick = function () {
      var _a = _this.props,
          group = _a.group,
          onGroupHeaderClick = _a.onGroupHeaderClick,
          onToggleSelectGroup = _a.onToggleSelectGroup;

      if (onGroupHeaderClick) {
        onGroupHeaderClick(group);
      } else if (onToggleSelectGroup) {
        onToggleSelectGroup(group);
      }
    };

    _this._onRenderTitle = function (props) {
      var group = props.group;

      if (!group) {
        return null;
      }

      return React.createElement("div", {
        className: _this._classNames.title
      }, React.createElement("span", null, group.name), React.createElement("span", {
        className: _this._classNames.headerCount
      }, "(", group.count, group.hasMoreData && '+', ")"));
    };

    _this.state = {
      isCollapsed: _this.props.group && _this.props.group.isCollapsed,
      isLoadingVisible: false
    };
    return _this;
  } // tslint:disable-next-line function-name


  GroupHeaderBase.prototype.UNSAFE_componentWillReceiveProps = function (newProps) {
    if (newProps.group) {
      var newCollapsed = newProps.group.isCollapsed;
      var isGroupLoading = newProps.isGroupLoading;
      var newLoadingVisible = !newCollapsed && isGroupLoading && isGroupLoading(newProps.group);
      this.setState({
        isCollapsed: newCollapsed || false,
        isLoadingVisible: newLoadingVisible || false
      });
    }
  };

  GroupHeaderBase.prototype.render = function () {
    var _a = this.props,
        group = _a.group,
        groupLevel = _a.groupLevel,
        viewport = _a.viewport,
        selectionMode = _a.selectionMode,
        loadingText = _a.loadingText,
        // tslint:disable-next-line:deprecation
    _b = _a.isSelected,
        // tslint:disable-next-line:deprecation
    isSelected = _b === void 0 ? false : _b,
        _c = _a.selected,
        selected = _c === void 0 ? false : _c,
        indentWidth = _a.indentWidth,
        _d = _a.onRenderTitle,
        onRenderTitle = _d === void 0 ? this._onRenderTitle : _d,
        _e = _a.isCollapsedGroupSelectVisible,
        isCollapsedGroupSelectVisible = _e === void 0 ? true : _e,
        expandButtonProps = _a.expandButtonProps,
        selectAllButtonProps = _a.selectAllButtonProps,
        theme = _a.theme,
        styles = _a.styles,
        className = _a.className,
        groupedListId = _a.groupedListId,
        compact = _a.compact,
        ariaPosInSet = _a.ariaPosInSet,
        ariaSetSize = _a.ariaSetSize;
    var _f = this.state,
        isCollapsed = _f.isCollapsed,
        isLoadingVisible = _f.isLoadingVisible;
    var canSelectGroup = selectionMode === SelectionMode.multiple;
    var isSelectionCheckVisible = canSelectGroup && (isCollapsedGroupSelectVisible || !(group && group.isCollapsed));
    var currentlySelected = selected || isSelected;
    var isRTL = getRTL$1(theme);
    this._classNames = getClassNames$7(styles, {
      theme: theme,
      className: className,
      selected: currentlySelected,
      isCollapsed: isCollapsed,
      compact: compact
    });

    if (!group) {
      return null;
    }

    return React.createElement("div", {
      className: this._classNames.root,
      style: viewport ? {
        minWidth: viewport.width
      } : {},
      onClick: this._onHeaderClick,
      "aria-expanded": !group.isCollapsed,
      "aria-label": group.ariaLabel || group.name,
      "aria-level": groupLevel !== undefined ? groupLevel + 1 : undefined,
      "aria-setsize": ariaSetSize,
      "aria-posinset": ariaPosInSet,
      "data-is-focusable": true
    }, React.createElement(FocusZone, {
      className: this._classNames.groupHeaderContainer,
      direction: FocusZoneDirection.horizontal
    }, isSelectionCheckVisible ? React.createElement("button", _assign({
      type: "button",
      className: this._classNames.check,
      role: "checkbox",
      "aria-checked": currentlySelected,
      "data-selection-toggle": true,
      onClick: this._onToggleSelectGroupClick
    }, selectAllButtonProps), React.createElement(Check, {
      checked: currentlySelected
    })) : selectionMode !== SelectionMode.none && React.createElement(GroupSpacer, {
      indentWidth: indentWidth,
      count: 1
    }), React.createElement(GroupSpacer, {
      indentWidth: indentWidth,
      count: groupLevel
    }), React.createElement("div", {
      className: this._classNames.dropIcon
    }, React.createElement(Icon, {
      iconName: "Tag"
    })), React.createElement("button", _assign({
      type: "button",
      className: this._classNames.expand,
      onClick: this._onToggleCollapse,
      "aria-expanded": !group.isCollapsed,
      "aria-controls": group && !group.isCollapsed ? groupedListId : undefined
    }, expandButtonProps), React.createElement(Icon, {
      className: this._classNames.expandIsCollapsed,
      iconName: isRTL ? 'ChevronLeftMed' : 'ChevronRightMed'
    })), onRenderTitle(this.props, this._onRenderTitle), isLoadingVisible && React.createElement(Spinner, {
      label: loadingText
    })));
  };

  GroupHeaderBase.defaultProps = {
    expandButtonProps: {
      'aria-label': 'expand collapse group'
    }
  };
  return GroupHeaderBase;
}(React.Component);

var GroupHeader = styled(GroupHeaderBase, getStyles$a, undefined, {
  scope: 'GroupHeader'
});

var GlobalClassNames$9 = {
  root: 'ms-GroupShowAll',
  link: 'ms-Link'
};
var getStyles$c = function getStyles(props) {
  var _a;

  var theme = props.theme;
  var fonts = theme.fonts;
  var classNames = getGlobalClassNames(GlobalClassNames$9, theme);
  return {
    root: [classNames.root, {
      position: 'relative',
      padding: '10px 84px',
      cursor: 'pointer',
      selectors: (_a = {}, _a["." + classNames.link] = {
        fontSize: fonts.small.fontSize
      }, _a)
    }]
  };
};

var getClassNames$8 = classNamesFunction();
var GroupShowAllBase = function GroupShowAllBase(props) {
  var group = props.group,
      groupLevel = props.groupLevel,
      _a = props.showAllLinkText,
      showAllLinkText = _a === void 0 ? 'Show All' : _a,
      styles = props.styles,
      theme = props.theme,
      onToggleSummarize = props.onToggleSummarize;
  var classNames = getClassNames$8(styles, {
    theme: theme
  });
  var memoizedOnClick = React.useCallback(function (ev) {
    onToggleSummarize(group);
    ev.stopPropagation();
    ev.preventDefault();
  }, [onToggleSummarize, group]);

  if (group) {
    return React.createElement("div", {
      className: classNames.root
    }, React.createElement(GroupSpacer, {
      count: groupLevel
    }), React.createElement(Link, {
      onClick: memoizedOnClick
    }, showAllLinkText));
  }

  return null;
};

var GroupShowAll = styled(GroupShowAllBase, getStyles$c, undefined, {
  scope: 'GroupShowAll'
});

var GlobalClassNames$a = {
  root: 'ms-groupFooter'
};
var getStyles$d = function getStyles(props) {
  var theme = props.theme,
      className = props.className;
  var classNames = getGlobalClassNames(GlobalClassNames$a, theme);
  return {
    root: [theme.fonts.medium, classNames.root, {
      position: 'relative',
      padding: '5px 38px'
    }, className]
  };
};

var getClassNames$9 = classNamesFunction();
var GroupFooterBase = function GroupFooterBase(props) {
  var group = props.group,
      groupLevel = props.groupLevel,
      footerText = props.footerText,
      indentWidth = props.indentWidth,
      styles = props.styles,
      theme = props.theme;
  var classNames = getClassNames$9(styles, {
    theme: theme
  });

  if (group && footerText) {
    return React.createElement("div", {
      className: classNames.root
    }, React.createElement(GroupSpacer, {
      indentWidth: indentWidth,
      count: groupLevel
    }), footerText);
  }

  return null;
};

var GroupFooter = styled(GroupFooterBase, getStyles$d, undefined, {
  scope: 'GroupFooter'
});

/**
 * {@docCategory List}
 */
var ScrollToMode = {
  /**
   * Does not make any consideration to where in the viewport the item should align to.
   */
  auto: 0,

  /**
   * Attempts to scroll the list so the top of the desired item is aligned with the top of the viewport.
   */
  top: 1,

  /**
   * Attempts to scroll the list so the bottom of the desired item is aligned with the bottom of the viewport.
   */
  bottom: 2,

  /**
   * Attempts to scroll the list so the desired item is in the exact center of the viewport.
   */
  center: 3
};

var RESIZE_DELAY = 16;
var MIN_SCROLL_UPDATE_DELAY = 100;
var MAX_SCROLL_UPDATE_DELAY = 500;
var IDLE_DEBOUNCE_DELAY = 200; // The amount of time to wait before declaring that the list isn't scrolling

var DONE_SCROLLING_WAIT = 500;
var DEFAULT_ITEMS_PER_PAGE = 10;
var DEFAULT_PAGE_HEIGHT = 30;
var DEFAULT_RENDERED_WINDOWS_BEHIND = 2;
var DEFAULT_RENDERED_WINDOWS_AHEAD = 2;
var PAGE_KEY_PREFIX = 'page-';
var SPACER_KEY_PREFIX = 'spacer-';
var EMPTY_RECT = {
  top: -1,
  bottom: -1,
  left: -1,
  right: -1,
  width: 0,
  height: 0
}; // Naming expensive measures so that they're named in profiles.

var _measurePageRect = function _measurePageRect(element) {
  return element.getBoundingClientRect();
};

var _measureSurfaceRect = _measurePageRect;
var _measureScrollRect = _measurePageRect;
/**
 * The List renders virtualized pages of items. Each page's item count is determined by the getItemCountForPage callback
 * if provided by the caller, or 10 as default. Each page's height is determined by the getPageHeight callback if
 * provided by the caller, or by cached measurements if available, or by a running average, or a default fallback.
 *
 * The algorithm for rendering pages works like this:
 *
 * 1. Predict visible pages based on "current measure data" (page heights, surface position, visible window)
 * 2. If changes are necessary, apply changes (add/remove pages)
 * 3. For pages that are added, measure the page heights if we need to using getBoundingClientRect
 * 4. If measurements don't match predictions, update measure data and goto step 1 asynchronously
 *
 * Measuring too frequently can pull performance down significantly. To compensate, we cache measured values so that
 * we can avoid re-measuring during operations that should not alter heights, like scrolling.
 *
 * To optimize glass rendering performance, onShouldVirtualize can be set. When onShouldVirtualize return false,
 * List will run in fast mode (not virtualized) to render all items without any measurements to improve page load time.
 * And we start doing measurements and rendering in virtualized mode when items grows larger than this threshold.
 *
 * However, certain operations can make measure data stale. For example, resizing the list, or passing in new props,
 * or forcing an update change cause pages to shrink/grow. When these operations occur, we increment a measureVersion
 * number, which we associate with cached measurements and use to determine if a remeasure should occur.
 */

var List =
/** @class */
function (_super) {
  __extends(List, _super);

  function List(props) {
    var _this = _super.call(this, props) || this;

    _this._root = React.createRef();
    _this._surface = React.createRef();

    _this._onRenderRoot = function (props) {
      var rootRef = props.rootRef,
          surfaceElement = props.surfaceElement,
          divProps = props.divProps;
      return React.createElement("div", _assign({
        ref: rootRef
      }, divProps), surfaceElement);
    };

    _this._onRenderSurface = function (props) {
      var surfaceRef = props.surfaceRef,
          pageElements = props.pageElements,
          divProps = props.divProps;
      return React.createElement("div", _assign({
        ref: surfaceRef
      }, divProps), pageElements);
    };

    _this._onRenderPage = function (pageProps, defaultRender) {
      var _a = _this.props,
          onRenderCell = _a.onRenderCell,
          role = _a.role;

      var _b = pageProps.page,
          _c = _b.items,
          items = _c === void 0 ? [] : _c,
          startIndex = _b.startIndex,
          divProps = __rest(pageProps, ["page"]); // only assign list item role if no role is assigned


      var cellRole = role === undefined ? 'listitem' : 'presentation';
      var cells = [];

      for (var i = 0; i < items.length; i++) {
        var index = startIndex + i;
        var item = items[i];
        var itemKey = _this.props.getKey ? _this.props.getKey(item, index) : item && item.key;

        if (itemKey === null || itemKey === undefined) {
          itemKey = index;
        }

        cells.push(React.createElement("div", {
          role: cellRole,
          className: 'ms-List-cell',
          key: itemKey,
          "data-list-index": index,
          "data-automationid": "ListCell"
        }, onRenderCell && onRenderCell(item, index, !_this.props.ignoreScrollingState ? _this.state.isScrolling : undefined)));
      }

      return React.createElement("div", _assign({}, divProps), cells);
    };

    initializeComponentRef(_this);
    _this.state = {
      pages: [],
      isScrolling: false
    };
    _this._async = new Async(_this);
    _this._events = new EventGroup(_this);
    _this._estimatedPageHeight = 0;
    _this._totalEstimates = 0;
    _this._requiredWindowsAhead = 0;
    _this._requiredWindowsBehind = 0; // Track the measure version for everything.

    _this._measureVersion = 0; // Ensure that scrolls are lazy updated.

    _this._onAsyncScroll = _this._async.debounce(_this._onAsyncScroll, MIN_SCROLL_UPDATE_DELAY, {
      leading: false,
      maxWait: MAX_SCROLL_UPDATE_DELAY
    });
    _this._onAsyncIdle = _this._async.debounce(_this._onAsyncIdle, IDLE_DEBOUNCE_DELAY, {
      leading: false
    });
    _this._onAsyncResize = _this._async.debounce(_this._onAsyncResize, RESIZE_DELAY, {
      leading: false
    });
    _this._onScrollingDone = _this._async.debounce(_this._onScrollingDone, DONE_SCROLLING_WAIT, {
      leading: false
    });
    _this._cachedPageHeights = {};
    _this._estimatedPageHeight = 0;
    _this._focusedIndex = -1;
    _this._pageCache = {};
    return _this;
  }
  /**
   * Scroll to the given index. By default will bring the page the specified item is on into the view. If a callback
   * to measure the height of an individual item is specified, will only scroll to bring the specific item into view.
   *
   * Note: with items of variable height and no passed in `getPageHeight` method, the list might jump after scrolling
   * when windows before/ahead are being rendered, and the estimated height is replaced using actual elements.
   *
   * @param index - Index of item to scroll to
   * @param measureItem - Optional callback to measure the height of an individual item
   * @param scrollToMode - Optional defines where in the window the item should be positioned to when scrolling
   */


  List.prototype.scrollToIndex = function (index, measureItem, scrollToMode) {
    if (scrollToMode === void 0) {
      scrollToMode = ScrollToMode.auto;
    }

    var startIndex = this.props.startIndex;

    var renderCount = this._getRenderCount();

    var endIndex = startIndex + renderCount;
    var allowedRect = this._allowedRect;
    var scrollTop = 0;
    var itemsPerPage = 1;

    for (var itemIndex = startIndex; itemIndex < endIndex; itemIndex += itemsPerPage) {
      var pageSpecification = this._getPageSpecification(itemIndex, allowedRect);

      var pageHeight = pageSpecification.height;
      itemsPerPage = pageSpecification.itemCount;
      var requestedIndexIsInPage = itemIndex <= index && itemIndex + itemsPerPage > index;

      if (requestedIndexIsInPage) {
        // We have found the page. If the user provided a way to measure an individual item, we will try to scroll in
        // just the given item, otherwise we'll only bring the page into view
        if (measureItem && this._scrollElement) {
          var scrollRect = _measureScrollRect(this._scrollElement);

          var scrollWindow = {
            top: this._scrollElement.scrollTop,
            bottom: this._scrollElement.scrollTop + scrollRect.height
          }; // Adjust for actual item position within page

          var itemPositionWithinPage = index - itemIndex;

          for (var itemIndexInPage = 0; itemIndexInPage < itemPositionWithinPage; ++itemIndexInPage) {
            scrollTop += measureItem(itemIndex + itemIndexInPage);
          }

          var scrollBottom = scrollTop + measureItem(index); // If scrollToMode is set to something other than auto, we always want to
          // scroll the item into a specific position on the page.

          switch (scrollToMode) {
            case ScrollToMode.top:
              this._scrollElement.scrollTop = scrollTop;
              return;

            case ScrollToMode.bottom:
              this._scrollElement.scrollTop = scrollBottom - scrollRect.height;
              return;

            case ScrollToMode.center:
              this._scrollElement.scrollTop = (scrollTop + scrollBottom - scrollRect.height) / 2;
              return;
          }

          var itemIsFullyVisible = scrollTop >= scrollWindow.top && scrollBottom <= scrollWindow.bottom;

          if (itemIsFullyVisible) {
            // Item is already visible, do nothing.
            return;
          }

          var itemIsPartiallyAbove = scrollTop < scrollWindow.top;
          var itemIsPartiallyBelow = scrollBottom > scrollWindow.bottom;

          if (itemIsPartiallyAbove) ; else if (itemIsPartiallyBelow) {
            //  Adjust scrollTop position to just bring in the element
            // .------.  - scrollTop
            // |      |
            // | .------.
            // '-|----' | - scrollWindow.bottom
            //   | Item |
            //   '------' - scrollBottom
            scrollTop = scrollBottom - scrollRect.height;
          }
        }

        this._scrollElement.scrollTop = scrollTop;
        return;
      }

      scrollTop += pageHeight;
    }
  };

  List.prototype.getStartItemIndexInView = function (measureItem) {
    var pages = this.state.pages || [];

    for (var _i = 0, pages_1 = pages; _i < pages_1.length; _i++) {
      var page = pages_1[_i];
      var isPageVisible = !page.isSpacer && (this._scrollTop || 0) >= page.top && (this._scrollTop || 0) <= page.top + page.height;

      if (isPageVisible) {
        if (!measureItem) {
          var rowHeight = Math.floor(page.height / page.itemCount);
          return page.startIndex + Math.floor((this._scrollTop - page.top) / rowHeight);
        } else {
          var totalRowHeight = 0;

          for (var itemIndex = page.startIndex; itemIndex < page.startIndex + page.itemCount; itemIndex++) {
            var rowHeight = measureItem(itemIndex);

            if (page.top + totalRowHeight <= this._scrollTop && this._scrollTop < page.top + totalRowHeight + rowHeight) {
              return itemIndex;
            } else {
              totalRowHeight += rowHeight;
            }
          }
        }
      }
    }

    return 0;
  };

  List.prototype.componentDidMount = function () {
    this._updatePages();

    this._measureVersion++;
    this._scrollElement = findScrollableParent(this._root.current);

    this._events.on(window, 'resize', this._onAsyncResize);

    if (this._root.current) {
      this._events.on(this._root.current, 'focus', this._onFocus, true);
    }

    if (this._scrollElement) {
      this._events.on(this._scrollElement, 'scroll', this._onScroll);

      this._events.on(this._scrollElement, 'scroll', this._onAsyncScroll);
    }
  };

  List.prototype.componentWillUnmount = function () {
    this._async.dispose();

    this._events.dispose();

    delete this._scrollElement;
  }; // tslint:disable-next-line function-name


  List.prototype.UNSAFE_componentWillReceiveProps = function (newProps) {
    if (newProps.items !== this.props.items || newProps.renderCount !== this.props.renderCount || newProps.startIndex !== this.props.startIndex || newProps.version !== this.props.version) {
      // We have received new items so we want to make sure that initially we only render a single window to
      // fill the currently visible rect, and then later render additional windows.
      this._resetRequiredWindows();

      this._requiredRect = null;
      this._measureVersion++;

      this._invalidatePageCache();

      this._updatePages(newProps);
    }
  };

  List.prototype.shouldComponentUpdate = function (newProps, newState) {
    var oldPages = this.state.pages;
    var newPages = newState.pages;
    var shouldComponentUpdate = false; // Update if the page stops scrolling

    if (!newState.isScrolling && this.state.isScrolling) {
      return true;
    }

    if (newProps.version !== this.props.version) {
      return true;
    }

    if (newProps.items === this.props.items && oldPages.length === newPages.length) {
      for (var i = 0; i < oldPages.length; i++) {
        var oldPage = oldPages[i];
        var newPage = newPages[i];

        if (oldPage.key !== newPage.key || oldPage.itemCount !== newPage.itemCount) {
          shouldComponentUpdate = true;
          break;
        }
      }
    } else {
      shouldComponentUpdate = true;
    }

    return shouldComponentUpdate;
  };

  List.prototype.forceUpdate = function () {
    this._invalidatePageCache(); // Ensure that when the list is force updated we update the pages first before render.


    this._updateRenderRects(this.props, true);

    this._updatePages();

    this._measureVersion++;

    _super.prototype.forceUpdate.call(this);
  };
  /**
   * Get the current height the list and it's pages.
   */


  List.prototype.getTotalListHeight = function () {
    return this._surfaceRect.height;
  };

  List.prototype.render = function () {
    var _a = this.props,
        className = _a.className,
        _b = _a.role,
        role = _b === void 0 ? 'list' : _b,
        onRenderSurface = _a.onRenderSurface,
        onRenderRoot = _a.onRenderRoot;
    var _c = this.state.pages,
        pages = _c === void 0 ? [] : _c;
    var pageElements = [];
    var divProps = getNativeProps(this.props, divProperties);

    for (var _i = 0, pages_2 = pages; _i < pages_2.length; _i++) {
      var page = pages_2[_i];
      pageElements.push(this._renderPage(page));
    }

    var finalOnRenderSurface = onRenderSurface ? composeRenderFunction(onRenderSurface, this._onRenderSurface) : this._onRenderSurface;
    var finalOnRenderRoot = onRenderRoot ? composeRenderFunction(onRenderRoot, this._onRenderRoot) : this._onRenderRoot;
    return finalOnRenderRoot({
      rootRef: this._root,
      pages: pages,
      surfaceElement: finalOnRenderSurface({
        surfaceRef: this._surface,
        pages: pages,
        pageElements: pageElements,
        divProps: {
          role: 'presentation',
          className: 'ms-List-surface'
        }
      }),
      divProps: _assign(_assign({}, divProps), {
        className: css('ms-List', className),
        role: pageElements.length > 0 ? role : undefined
      })
    });
  };

  List.prototype._shouldVirtualize = function (props) {
    if (props === void 0) {
      props = this.props;
    }

    var onShouldVirtualize = props.onShouldVirtualize;
    return !onShouldVirtualize || onShouldVirtualize(props);
  };
  /**
   * when props.items change or forceUpdate called, throw away cached pages
   */


  List.prototype._invalidatePageCache = function () {
    this._pageCache = {};
  };

  List.prototype._renderPage = function (page) {
    var usePageCache = this.props.usePageCache;
    var cachedPage; // if usePageCache is set and cached page element can be found, just return cached page

    if (usePageCache) {
      cachedPage = this._pageCache[page.key];

      if (cachedPage && cachedPage.pageElement) {
        return cachedPage.pageElement;
      }
    }

    var pageStyle = this._getPageStyle(page);

    var _a = this.props.onRenderPage,
        onRenderPage = _a === void 0 ? this._onRenderPage : _a;
    var pageElement = onRenderPage({
      page: page,
      className: 'ms-List-page',
      key: page.key,
      ref: page.key,
      style: pageStyle,
      role: 'presentation'
    }, this._onRenderPage); // cache the first page for now since it is re-rendered a lot times unnecessarily.
    // todo: a more aggresive caching mechanism is to cache pages constaining the items not changed.
    // now we re-render pages too frequently, for example, props.items increased from 30 to 60, although the
    // first 30 items did not change, we still re-rendered all of them in this props.items change.

    if (usePageCache && page.startIndex === 0) {
      this._pageCache[page.key] = {
        page: page,
        pageElement: pageElement
      };
    }

    return pageElement;
  };
  /** Generate the style object for the page. */


  List.prototype._getPageStyle = function (page) {
    var getPageStyle = this.props.getPageStyle;
    return _assign(_assign({}, getPageStyle ? getPageStyle(page) : {}), !page.items ? {
      height: page.height
    } : {});
  };
  /** Track the last item index focused so that we ensure we keep it rendered. */


  List.prototype._onFocus = function (ev) {
    var target = ev.target;

    while (target !== this._surface.current) {
      var indexString = target.getAttribute('data-list-index');

      if (indexString) {
        this._focusedIndex = Number(indexString);
        break;
      }

      target = getParent(target);
    }
  };
  /**
   * Called synchronously to reset the required render range to 0 on scrolling. After async scroll has executed,
   * we will call onAsyncIdle which will reset it back to it's correct value.
   */


  List.prototype._onScroll = function () {
    if (!this.state.isScrolling && !this.props.ignoreScrollingState) {
      this.setState({
        isScrolling: true
      });
    }

    this._resetRequiredWindows();

    this._onScrollingDone();
  };

  List.prototype._resetRequiredWindows = function () {
    this._requiredWindowsAhead = 0;
    this._requiredWindowsBehind = 0;
  };
  /**
   * Debounced method to asynchronously update the visible region on a scroll event.
   */


  List.prototype._onAsyncScroll = function () {
    this._updateRenderRects(); // Only update pages when the visible rect falls outside of the materialized rect.


    if (!this._materializedRect || !_isContainedWithin(this._requiredRect, this._materializedRect)) {
      this._updatePages();
    }
  };
  /**
   * This is an async debounced method that will try and increment the windows we render. If we can increment
   * either, we increase the amount we render and re-evaluate.
   */


  List.prototype._onAsyncIdle = function () {
    var _a = this.props,
        renderedWindowsAhead = _a.renderedWindowsAhead,
        renderedWindowsBehind = _a.renderedWindowsBehind;

    var _b = this,
        requiredWindowsAhead = _b._requiredWindowsAhead,
        requiredWindowsBehind = _b._requiredWindowsBehind;

    var windowsAhead = Math.min(renderedWindowsAhead, requiredWindowsAhead + 1);
    var windowsBehind = Math.min(renderedWindowsBehind, requiredWindowsBehind + 1);

    if (windowsAhead !== requiredWindowsAhead || windowsBehind !== requiredWindowsBehind) {
      // console.log('idling', windowsBehind, windowsAhead);
      this._requiredWindowsAhead = windowsAhead;
      this._requiredWindowsBehind = windowsBehind;

      this._updateRenderRects();

      this._updatePages();
    }

    if (renderedWindowsAhead > windowsAhead || renderedWindowsBehind > windowsBehind) {
      // Async increment on next tick.
      this._onAsyncIdle();
    }
  };
  /**
   * Function to call when the list is done scrolling.
   * This function is debounced.
   */


  List.prototype._onScrollingDone = function () {
    if (!this.props.ignoreScrollingState) {
      this.setState({
        isScrolling: false
      });
    }
  };

  List.prototype._onAsyncResize = function () {
    this.forceUpdate();
  };

  List.prototype._updatePages = function (props) {
    // console.log('updating pages');
    var _this = this;

    if (props === void 0) {
      props = this.props;
    }

    if (!this._requiredRect) {
      this._updateRenderRects(props);
    }

    var newListState = this._buildPages(props);

    var oldListPages = this.state.pages;

    this._notifyPageChanges(oldListPages, newListState.pages);

    this.setState(newListState, function () {
      // Multiple updates may have been queued, so the callback will reflect all of them.
      // Re-fetch the current props and states to avoid using a stale props or state captured in the closure.
      var finalProps = _this.props;
      var finalState = _this.state; // If we weren't provided with the page height, measure the pages

      if (!finalProps.getPageHeight) {
        // If measured version is invalid since we've updated the DOM
        var heightsChanged = _this._updatePageMeasurements(finalState.pages); // On first render, we should re-measure so that we don't get a visual glitch.


        if (heightsChanged) {
          _this._materializedRect = null;

          if (!_this._hasCompletedFirstRender) {
            _this._hasCompletedFirstRender = true;

            _this._updatePages(finalProps);
          } else {
            _this._onAsyncScroll();
          }
        } else {
          // Enqueue an idle bump.
          _this._onAsyncIdle();
        }
      } else {
        // Enqueue an idle bump
        _this._onAsyncIdle();
      } // Notify the caller that rendering the new pages has completed


      if (finalProps.onPagesUpdated) {
        finalProps.onPagesUpdated(finalState.pages);
      }
    });
  };
  /**
   * Notify consumers that the rendered pages have changed
   * @param oldPages - The old pages
   * @param newPages - The new pages
   * @param props - The props to use
   */


  List.prototype._notifyPageChanges = function (oldPages, newPages, props) {
    if (props === void 0) {
      props = this.props;
    }

    var onPageAdded = props.onPageAdded,
        onPageRemoved = props.onPageRemoved;

    if (onPageAdded || onPageRemoved) {
      var renderedIndexes = {};

      for (var _i = 0, oldPages_1 = oldPages; _i < oldPages_1.length; _i++) {
        var page = oldPages_1[_i];

        if (page.items) {
          renderedIndexes[page.startIndex] = page;
        }
      }

      for (var _a = 0, newPages_1 = newPages; _a < newPages_1.length; _a++) {
        var page = newPages_1[_a];

        if (page.items) {
          if (!renderedIndexes[page.startIndex]) {
            this._onPageAdded(page);
          } else {
            delete renderedIndexes[page.startIndex];
          }
        }
      }

      for (var index in renderedIndexes) {
        if (renderedIndexes.hasOwnProperty(index)) {
          this._onPageRemoved(renderedIndexes[index]);
        }
      }
    }
  };

  List.prototype._updatePageMeasurements = function (pages) {
    var heightChanged = false; // when not in virtualize mode, we render all the items without page measurement

    if (!this._shouldVirtualize()) {
      return heightChanged;
    }

    for (var i = 0; i < pages.length; i++) {
      var page = pages[i];

      if (page.items) {
        heightChanged = this._measurePage(page) || heightChanged;
      }
    }

    return heightChanged;
  };
  /**
   * Given a page, measure its dimensions, update cache.
   * @returns True if the height has changed.
   */


  List.prototype._measurePage = function (page) {
    var hasChangedHeight = false;
    var pageElement = this.refs[page.key];
    var cachedHeight = this._cachedPageHeights[page.startIndex]; // console.log('   * measure attempt', page.startIndex, cachedHeight);

    if (pageElement && this._shouldVirtualize() && (!cachedHeight || cachedHeight.measureVersion !== this._measureVersion)) {
      var newClientRect = {
        width: pageElement.clientWidth,
        height: pageElement.clientHeight
      };

      if (newClientRect.height || newClientRect.width) {
        hasChangedHeight = page.height !== newClientRect.height; // console.warn(' *** expensive page measure', page.startIndex, page.height, newClientRect.height);

        page.height = newClientRect.height;
        this._cachedPageHeights[page.startIndex] = {
          height: newClientRect.height,
          measureVersion: this._measureVersion
        };
        this._estimatedPageHeight = Math.round((this._estimatedPageHeight * this._totalEstimates + newClientRect.height) / (this._totalEstimates + 1));
        this._totalEstimates++;
      }
    }

    return hasChangedHeight;
  };
  /** Called when a page has been added to the DOM. */


  List.prototype._onPageAdded = function (page) {
    var onPageAdded = this.props.onPageAdded; // console.log('page added', page.startIndex, this.state.pages.map(page => page.key).join(', '));

    if (onPageAdded) {
      onPageAdded(page);
    }
  };
  /** Called when a page has been removed from the DOM. */


  List.prototype._onPageRemoved = function (page) {
    var onPageRemoved = this.props.onPageRemoved; // console.log('  --- page removed', page.startIndex, this.state.pages.map(page => page.key).join(', '));

    if (onPageRemoved) {
      onPageRemoved(page);
    }
  };
  /** Build up the pages that should be rendered. */


  List.prototype._buildPages = function (props) {
    var renderCount = props.renderCount;
    var items = props.items,
        startIndex = props.startIndex,
        getPageHeight = props.getPageHeight;
    renderCount = this._getRenderCount(props);

    var materializedRect = _assign({}, EMPTY_RECT);

    var pages = [];
    var itemsPerPage = 1;
    var pageTop = 0;
    var currentSpacer = null;
    var focusedIndex = this._focusedIndex;
    var endIndex = startIndex + renderCount;

    var shouldVirtualize = this._shouldVirtualize(props); // First render is very important to track; when we render cells, we have no idea of estimated page height.
    // So we should default to rendering only the first page so that we can get information.
    // However if the user provides a measure function, let's just assume they know the right heights.


    var isFirstRender = this._estimatedPageHeight === 0 && !getPageHeight;
    var allowedRect = this._allowedRect;

    var _loop_1 = function _loop_1(itemIndex) {
      var pageSpecification = this_1._getPageSpecification(itemIndex, allowedRect);

      var pageHeight = pageSpecification.height;
      var pageData = pageSpecification.data;
      var key = pageSpecification.key;
      itemsPerPage = pageSpecification.itemCount;
      var pageBottom = pageTop + pageHeight - 1;
      var isPageRendered = findIndex(this_1.state.pages, function (page) {
        return !!page.items && page.startIndex === itemIndex;
      }) > -1;
      var isPageInAllowedRange = !allowedRect || pageBottom >= allowedRect.top && pageTop <= allowedRect.bottom;
      var isPageInRequiredRange = !this_1._requiredRect || pageBottom >= this_1._requiredRect.top && pageTop <= this_1._requiredRect.bottom;
      var isPageVisible = !isFirstRender && (isPageInRequiredRange || isPageInAllowedRange && isPageRendered) || !shouldVirtualize;
      var isPageFocused = focusedIndex >= itemIndex && focusedIndex < itemIndex + itemsPerPage;
      var isFirstPage = itemIndex === startIndex; // console.log('building page', itemIndex, 'pageTop: ' + pageTop, 'inAllowed: ' +
      // isPageInAllowedRange, 'inRequired: ' + isPageInRequiredRange);
      // Only render whats visible, focused, or first page,
      // or when running in fast rendering mode (not in virtualized mode), we render all current items in pages

      if (isPageVisible || isPageFocused || isFirstPage) {
        if (currentSpacer) {
          pages.push(currentSpacer);
          currentSpacer = null;
        }

        var itemsInPage = Math.min(itemsPerPage, endIndex - itemIndex);

        var newPage = this_1._createPage(key, items.slice(itemIndex, itemIndex + itemsInPage), itemIndex, undefined, undefined, pageData);

        newPage.top = pageTop;
        newPage.height = pageHeight;

        if (this_1._visibleRect && this_1._visibleRect.bottom) {
          newPage.isVisible = pageBottom >= this_1._visibleRect.top && pageTop <= this_1._visibleRect.bottom;
        }

        pages.push(newPage);

        if (isPageInRequiredRange && this_1._allowedRect) {
          _mergeRect(materializedRect, {
            top: pageTop,
            bottom: pageBottom,
            height: pageHeight,
            left: allowedRect.left,
            right: allowedRect.right,
            width: allowedRect.width
          });
        }
      } else {
        if (!currentSpacer) {
          currentSpacer = this_1._createPage(SPACER_KEY_PREFIX + itemIndex, undefined, itemIndex, 0, undefined, pageData, true
          /*isSpacer*/
          );
        }

        currentSpacer.height = (currentSpacer.height || 0) + (pageBottom - pageTop) + 1;
        currentSpacer.itemCount += itemsPerPage;
      }

      pageTop += pageBottom - pageTop + 1; // in virtualized mode, we render need to render first page then break and measure,
      // otherwise, we render all items without measurement to make rendering fast

      if (isFirstRender && shouldVirtualize) {
        return "break";
      }
    };

    var this_1 = this;

    for (var itemIndex = startIndex; itemIndex < endIndex; itemIndex += itemsPerPage) {
      var state_1 = _loop_1(itemIndex);

      if (state_1 === "break") break;
    }

    if (currentSpacer) {
      currentSpacer.key = SPACER_KEY_PREFIX + 'end';
      pages.push(currentSpacer);
    }

    this._materializedRect = materializedRect; // console.log('materialized: ', materializedRect);

    return {
      pages: pages,
      measureVersion: this._measureVersion
    };
  };

  List.prototype._getPageSpecification = function (itemIndex, visibleRect) {
    var getPageSpecification = this.props.getPageSpecification;

    if (getPageSpecification) {
      var pageData = getPageSpecification(itemIndex, visibleRect);
      var _a = pageData.itemCount,
          itemCount = _a === void 0 ? this._getItemCountForPage(itemIndex, visibleRect) : _a;
      var _b = pageData.height,
          height = _b === void 0 ? this._getPageHeight(itemIndex, visibleRect, itemCount) : _b;
      return {
        itemCount: itemCount,
        height: height,
        data: pageData.data,
        key: pageData.key
      };
    } else {
      var itemCount = this._getItemCountForPage(itemIndex, visibleRect);

      return {
        itemCount: itemCount,
        height: this._getPageHeight(itemIndex, visibleRect, itemCount)
      };
    }
  };
  /**
   * Get the pixel height of a give page. Will use the props getPageHeight first, and if not provided, fallback to
   * cached height, or estimated page height, or default page height.
   */


  List.prototype._getPageHeight = function (itemIndex, visibleRect, itemsPerPage) {
    if (this.props.getPageHeight) {
      return this.props.getPageHeight(itemIndex, visibleRect, itemsPerPage);
    } else {
      var cachedHeight = this._cachedPageHeights[itemIndex];
      return cachedHeight ? cachedHeight.height : this._estimatedPageHeight || DEFAULT_PAGE_HEIGHT;
    }
  };

  List.prototype._getItemCountForPage = function (itemIndex, visibileRect) {
    var itemsPerPage = this.props.getItemCountForPage ? this.props.getItemCountForPage(itemIndex, visibileRect) : DEFAULT_ITEMS_PER_PAGE;
    return itemsPerPage ? itemsPerPage : DEFAULT_ITEMS_PER_PAGE;
  };

  List.prototype._createPage = function (pageKey, items, startIndex, count, style, data, isSpacer) {
    if (startIndex === void 0) {
      startIndex = -1;
    }

    if (count === void 0) {
      count = items ? items.length : 0;
    }

    if (style === void 0) {
      style = {};
    }

    pageKey = pageKey || PAGE_KEY_PREFIX + startIndex;
    var cachedPage = this._pageCache[pageKey];

    if (cachedPage && cachedPage.page) {
      return cachedPage.page;
    }

    return {
      key: pageKey,
      startIndex: startIndex,
      itemCount: count,
      items: items,
      style: style,
      top: 0,
      height: 0,
      data: data,
      isSpacer: isSpacer || false
    };
  };

  List.prototype._getRenderCount = function (props) {
    var _a = props || this.props,
        items = _a.items,
        startIndex = _a.startIndex,
        renderCount = _a.renderCount;

    return renderCount === undefined ? items ? items.length - startIndex : 0 : renderCount;
  };
  /** Calculate the visible rect within the list where top: 0 and left: 0 is the top/left of the list. */


  List.prototype._updateRenderRects = function (props, forceUpdate) {
    props = props || this.props;
    var renderedWindowsAhead = props.renderedWindowsAhead,
        renderedWindowsBehind = props.renderedWindowsBehind;
    var pages = this.state.pages; // when not in virtualize mode, we render all items without measurement to optimize page rendering perf

    if (!this._shouldVirtualize(props)) {
      return;
    }

    var surfaceRect = this._surfaceRect || _assign({}, EMPTY_RECT);

    var scrollHeight = this._scrollElement && this._scrollElement.scrollHeight;
    var scrollTop = this._scrollElement ? this._scrollElement.scrollTop : 0; // WARNING: EXPENSIVE CALL! We need to know the surface top relative to the window.
    // This needs to be called to recalculate when new pages should be loaded.
    // We check to see how far we've scrolled and if it's further than a third of a page we run it again.

    if (this._surface.current && (forceUpdate || !pages || !this._surfaceRect || !scrollHeight || scrollHeight !== this._scrollHeight || Math.abs(this._scrollTop - scrollTop) > this._estimatedPageHeight / 3)) {
      surfaceRect = this._surfaceRect = _measureSurfaceRect(this._surface.current);
      this._scrollTop = scrollTop;
    } // If the scroll height has changed, something in the container likely resized and
    // we should redo the page heights incase their content resized.


    if (forceUpdate || !scrollHeight || scrollHeight !== this._scrollHeight) {
      this._measureVersion++;
    }

    this._scrollHeight = scrollHeight; // If the surface is above the container top or below the container bottom, or if this is not the first
    // render return empty rect.
    // The first time the list gets rendered we need to calculate the rectangle. The width of the list is
    // used to calculate the width of the list items.

    var visibleTop = Math.max(0, -surfaceRect.top);
    var win = getWindow(this._root.current);
    var visibleRect = {
      top: visibleTop,
      left: surfaceRect.left,
      bottom: visibleTop + win.innerHeight,
      right: surfaceRect.right,
      width: surfaceRect.width,
      height: win.innerHeight
    }; // The required/allowed rects are adjusted versions of the visible rect.

    this._requiredRect = _expandRect(visibleRect, this._requiredWindowsBehind, this._requiredWindowsAhead);
    this._allowedRect = _expandRect(visibleRect, renderedWindowsBehind, renderedWindowsAhead); // store the visible rect for later use.

    this._visibleRect = visibleRect;
  };

  List.defaultProps = {
    startIndex: 0,
    onRenderCell: function onRenderCell(item, index, containsFocus) {
      return React.createElement(React.Fragment, null, item && item.name || '');
    },
    renderedWindowsAhead: DEFAULT_RENDERED_WINDOWS_AHEAD,
    renderedWindowsBehind: DEFAULT_RENDERED_WINDOWS_BEHIND
  };
  return List;
}(React.Component);

function _expandRect(rect, pagesBefore, pagesAfter) {
  var top = rect.top - pagesBefore * rect.height;
  var height = rect.height + (pagesBefore + pagesAfter) * rect.height;
  return {
    top: top,
    bottom: top + height,
    height: height,
    left: rect.left,
    right: rect.right,
    width: rect.width
  };
}

function _isContainedWithin(innerRect, outerRect) {
  return innerRect.top >= outerRect.top && innerRect.left >= outerRect.left && innerRect.bottom <= outerRect.bottom && innerRect.right <= outerRect.right;
}

function _mergeRect(targetRect, newRect) {
  targetRect.top = newRect.top < targetRect.top || targetRect.top === -1 ? newRect.top : targetRect.top;
  targetRect.left = newRect.left < targetRect.left || targetRect.left === -1 ? newRect.left : targetRect.left;
  targetRect.bottom = newRect.bottom > targetRect.bottom || targetRect.bottom === -1 ? newRect.bottom : targetRect.bottom;
  targetRect.right = newRect.right > targetRect.right || targetRect.right === -1 ? newRect.right : targetRect.right;
  targetRect.width = targetRect.right - targetRect.left + 1;
  targetRect.height = targetRect.bottom - targetRect.top + 1;
  return targetRect;
}

var DEFAULT_DROPPING_CSS_CLASS = 'is-dropping';

var GroupedListSection =
/** @class */
function (_super) {
  __extends(GroupedListSection, _super);

  function GroupedListSection(props) {
    var _this = _super.call(this, props) || this;

    _this._root = React.createRef();
    _this._list = React.createRef();
    _this._droppingClassName = '';

    _this._onRenderGroupHeader = function (props) {
      return React.createElement(GroupHeader, _assign({}, props));
    };

    _this._onRenderGroupShowAll = function (props) {
      return React.createElement(GroupShowAll, _assign({}, props));
    };

    _this._onRenderGroupFooter = function (props) {
      return React.createElement(GroupFooter, _assign({}, props));
    };

    _this._renderSubGroup = function (subGroup, subGroupIndex) {
      var _a = _this.props,
          dragDropEvents = _a.dragDropEvents,
          dragDropHelper = _a.dragDropHelper,
          eventsToRegister = _a.eventsToRegister,
          getGroupItemLimit = _a.getGroupItemLimit,
          groupNestingDepth = _a.groupNestingDepth,
          groupProps = _a.groupProps,
          items = _a.items,
          headerProps = _a.headerProps,
          showAllProps = _a.showAllProps,
          footerProps = _a.footerProps,
          listProps = _a.listProps,
          onRenderCell = _a.onRenderCell,
          selection = _a.selection,
          selectionMode = _a.selectionMode,
          viewport = _a.viewport,
          onRenderGroupHeader = _a.onRenderGroupHeader,
          onRenderGroupShowAll = _a.onRenderGroupShowAll,
          onRenderGroupFooter = _a.onRenderGroupFooter,
          onShouldVirtualize = _a.onShouldVirtualize,
          group = _a.group,
          compact = _a.compact;
      var nestingDepth = subGroup.level ? subGroup.level + 1 : groupNestingDepth;
      return !subGroup || subGroup.count > 0 || groupProps && groupProps.showEmptyGroups ? React.createElement(GroupedListSection, {
        ref: 'subGroup_' + subGroupIndex,
        key: _this._getGroupKey(subGroup, subGroupIndex),
        dragDropEvents: dragDropEvents,
        dragDropHelper: dragDropHelper,
        eventsToRegister: eventsToRegister,
        footerProps: footerProps,
        getGroupItemLimit: getGroupItemLimit,
        group: subGroup,
        groupIndex: subGroupIndex,
        groupNestingDepth: nestingDepth,
        groupProps: groupProps,
        headerProps: headerProps,
        items: items,
        listProps: listProps,
        onRenderCell: onRenderCell,
        selection: selection,
        selectionMode: selectionMode,
        showAllProps: showAllProps,
        viewport: viewport,
        onRenderGroupHeader: onRenderGroupHeader,
        onRenderGroupShowAll: onRenderGroupShowAll,
        onRenderGroupFooter: onRenderGroupFooter,
        onShouldVirtualize: onShouldVirtualize,
        groups: group ? group.children : [],
        compact: compact
      }) : null;
    };
    /**
     * collect all the data we need to enable drag/drop for a group
     */


    _this._getGroupDragDropOptions = function () {
      var _a = _this.props,
          group = _a.group,
          groupIndex = _a.groupIndex,
          dragDropEvents = _a.dragDropEvents,
          eventsToRegister = _a.eventsToRegister;
      var options = {
        eventMap: eventsToRegister,
        selectionIndex: -1,
        context: {
          data: group,
          index: groupIndex,
          isGroup: true
        },
        updateDropState: _this._updateDroppingState,
        canDrag: dragDropEvents.canDrag,
        canDrop: dragDropEvents.canDrop,
        onDrop: dragDropEvents.onDrop,
        onDragStart: dragDropEvents.onDragStart,
        onDragEnter: dragDropEvents.onDragEnter,
        onDragLeave: dragDropEvents.onDragLeave,
        onDragEnd: dragDropEvents.onDragEnd
      };
      return options;
    };
    /**
     * update groupIsDropping state based on the input value, which is used to change style during drag and drop
     *
     * @param newValue - new isDropping state value
     * @param event - the event trigger dropping state change which can be dragenter, dragleave etc
     */


    _this._updateDroppingState = function (newIsDropping, event) {
      var isDropping = _this.state.isDropping;
      var _a = _this.props,
          dragDropEvents = _a.dragDropEvents,
          group = _a.group;

      if (isDropping !== newIsDropping) {
        if (isDropping) {
          if (dragDropEvents && dragDropEvents.onDragLeave) {
            dragDropEvents.onDragLeave(group, event);
          }
        } else {
          if (dragDropEvents && dragDropEvents.onDragEnter) {
            _this._droppingClassName = dragDropEvents.onDragEnter(group, event);
          }
        }

        _this.setState({
          isDropping: newIsDropping
        });
      }
    };

    var selection = props.selection,
        group = props.group;
    initializeComponentRef(_this);
    _this._id = getId('GroupedListSection');
    _this.state = {
      isDropping: false,
      isSelected: selection && group ? selection.isRangeSelected(group.startIndex, group.count) : false
    };
    _this._events = new EventGroup(_this);
    return _this;
  }

  GroupedListSection.prototype.componentDidMount = function () {
    var _a = this.props,
        dragDropHelper = _a.dragDropHelper,
        selection = _a.selection;

    if (dragDropHelper && this._root.current) {
      this._dragDropSubscription = dragDropHelper.subscribe(this._root.current, this._events, this._getGroupDragDropOptions());
    }

    if (selection) {
      this._events.on(selection, SELECTION_CHANGE, this._onSelectionChange);
    }
  };

  GroupedListSection.prototype.componentWillUnmount = function () {
    this._events.dispose();

    if (this._dragDropSubscription) {
      this._dragDropSubscription.dispose();
    }
  };

  GroupedListSection.prototype.componentDidUpdate = function (previousProps) {
    if (this.props.group !== previousProps.group || this.props.groupIndex !== previousProps.groupIndex || this.props.dragDropHelper !== previousProps.dragDropHelper) {
      if (this._dragDropSubscription) {
        this._dragDropSubscription.dispose();

        delete this._dragDropSubscription;
      }

      if (this.props.dragDropHelper && this._root.current) {
        this._dragDropSubscription = this.props.dragDropHelper.subscribe(this._root.current, this._events, this._getGroupDragDropOptions());
      }
    }
  };

  GroupedListSection.prototype.render = function () {
    var _a = this.props,
        getGroupItemLimit = _a.getGroupItemLimit,
        group = _a.group,
        groupIndex = _a.groupIndex,
        headerProps = _a.headerProps,
        showAllProps = _a.showAllProps,
        footerProps = _a.footerProps,
        viewport = _a.viewport,
        selectionMode = _a.selectionMode,
        _b = _a.onRenderGroupHeader,
        onRenderGroupHeader = _b === void 0 ? this._onRenderGroupHeader : _b,
        _c = _a.onRenderGroupShowAll,
        onRenderGroupShowAll = _c === void 0 ? this._onRenderGroupShowAll : _c,
        _d = _a.onRenderGroupFooter,
        onRenderGroupFooter = _d === void 0 ? this._onRenderGroupFooter : _d,
        onShouldVirtualize = _a.onShouldVirtualize,
        groupedListClassNames = _a.groupedListClassNames,
        groups = _a.groups,
        compact = _a.compact,
        _e = _a.listProps,
        listProps = _e === void 0 ? {} : _e;
    var isSelected = this.state.isSelected;
    var renderCount = group && getGroupItemLimit ? getGroupItemLimit(group) : Infinity;
    var isShowAllVisible = group && !group.children && !group.isCollapsed && !group.isShowingAll && (group.count > renderCount || group.hasMoreData);
    var hasNestedGroups = group && group.children && group.children.length > 0;
    var version = listProps.version;
    var dividerProps = {
      group: group,
      groupIndex: groupIndex,
      groupLevel: group ? group.level : 0,
      isSelected: isSelected,
      selected: isSelected,
      viewport: viewport,
      selectionMode: selectionMode,
      groups: groups,
      compact: compact
    };
    var ariaControlsProps = {
      groupedListId: this._id,
      ariaSetSize: groups ? groups.length : undefined,
      ariaPosInSet: groupIndex !== undefined ? groupIndex + 1 : undefined
    };

    var groupHeaderProps = _assign(_assign(_assign({}, headerProps), dividerProps), ariaControlsProps);

    var groupShowAllProps = _assign(_assign({}, showAllProps), dividerProps);

    var groupFooterProps = _assign(_assign({}, footerProps), dividerProps);

    var isDraggable = !!this.props.dragDropHelper && this._getGroupDragDropOptions().canDrag(group) && !!this.props.dragDropEvents.canDragGroups;
    return React.createElement("div", _assign({
      ref: this._root
    }, isDraggable && {
      draggable: true
    }, {
      className: css(groupedListClassNames && groupedListClassNames.group, this._getDroppingClassName()),
      role: "presentation"
    }), onRenderGroupHeader(groupHeaderProps, this._onRenderGroupHeader), group && group.isCollapsed ? null : hasNestedGroups ? React.createElement(List, {
      role: "presentation",
      ref: this._list,
      items: group ? group.children : [],
      onRenderCell: this._renderSubGroup,
      getItemCountForPage: this._returnOne,
      onShouldVirtualize: onShouldVirtualize,
      version: version,
      id: this._id
    }) : this._onRenderGroup(renderCount), group && group.isCollapsed ? null : isShowAllVisible && onRenderGroupShowAll(groupShowAllProps, this._onRenderGroupShowAll), onRenderGroupFooter(groupFooterProps, this._onRenderGroupFooter));
  };

  GroupedListSection.prototype.forceUpdate = function () {
    _super.prototype.forceUpdate.call(this);

    this.forceListUpdate();
  };

  GroupedListSection.prototype.forceListUpdate = function () {
    var group = this.props.group;

    if (this._list.current) {
      this._list.current.forceUpdate();

      if (group && group.children && group.children.length > 0) {
        var subGroupCount = group.children.length;

        for (var i = 0; i < subGroupCount; i++) {
          var subGroup = this._list.current.refs['subGroup_' + String(i)];

          if (subGroup) {
            subGroup.forceListUpdate();
          }
        }
      }
    } else {
      // tslint:disable-next-line:deprecation
      var subGroup = this.refs['subGroup_' + String(0)];

      if (subGroup) {
        subGroup.forceListUpdate();
      }
    }
  };

  GroupedListSection.prototype._onSelectionChange = function () {
    var _a = this.props,
        group = _a.group,
        selection = _a.selection;

    if (selection && group) {
      var isSelected = selection.isRangeSelected(group.startIndex, group.count);

      if (isSelected !== this.state.isSelected) {
        this.setState({
          isSelected: isSelected
        });
      }
    }
  };

  GroupedListSection.prototype._onRenderGroupCell = function (onRenderCell, groupNestingDepth) {
    return function (item, itemIndex) {
      return onRenderCell(groupNestingDepth, item, itemIndex);
    };
  };

  GroupedListSection.prototype._onRenderGroup = function (renderCount) {
    var _a = this.props,
        group = _a.group,
        items = _a.items,
        onRenderCell = _a.onRenderCell,
        listProps = _a.listProps,
        groupNestingDepth = _a.groupNestingDepth,
        onShouldVirtualize = _a.onShouldVirtualize,
        groupProps = _a.groupProps;
    var count = group && !group.isShowingAll ? group.count : items.length;
    var startIndex = group ? group.startIndex : 0;
    return React.createElement(List, _assign({
      role: groupProps && groupProps.role ? groupProps.role : 'grid',
      items: items,
      onRenderCell: this._onRenderGroupCell(onRenderCell, groupNestingDepth),
      ref: this._list,
      renderCount: Math.min(count, renderCount),
      startIndex: startIndex,
      onShouldVirtualize: onShouldVirtualize,
      id: this._id
    }, listProps));
  };

  GroupedListSection.prototype._returnOne = function () {
    return 1;
  };

  GroupedListSection.prototype._getGroupKey = function (group, index) {
    return 'group-' + (group && group.key ? group.key : String(group.level) + String(index));
  };
  /**
   * get the correct css class to reflect the dropping state for a given group
   *
   * If the group is the current drop target, return the default dropping class name
   * Otherwise, return '';
   *
   */


  GroupedListSection.prototype._getDroppingClassName = function () {
    var isDropping = this.state.isDropping;
    var _a = this.props,
        group = _a.group,
        groupedListClassNames = _a.groupedListClassNames;
    isDropping = !!(group && isDropping);
    return css(isDropping && this._droppingClassName, isDropping && DEFAULT_DROPPING_CSS_CLASS, isDropping && groupedListClassNames && groupedListClassNames.groupIsDropping);
  };

  return GroupedListSection;
}(React.Component);

var getClassNames$a = classNamesFunction();
var ROW_HEIGHT = DEFAULT_ROW_HEIGHTS.rowHeight,
    COMPACT_ROW_HEIGHT = DEFAULT_ROW_HEIGHTS.compactRowHeight;

var GroupedListBase =
/** @class */
function (_super) {
  __extends(GroupedListBase, _super);

  function GroupedListBase(props) {
    var _this = _super.call(this, props) || this;

    _this._list = React.createRef();

    _this._renderGroup = function (group, groupIndex) {
      var _a = _this.props,
          dragDropEvents = _a.dragDropEvents,
          dragDropHelper = _a.dragDropHelper,
          eventsToRegister = _a.eventsToRegister,
          groupProps = _a.groupProps,
          items = _a.items,
          listProps = _a.listProps,
          onRenderCell = _a.onRenderCell,
          selectionMode = _a.selectionMode,
          selection = _a.selection,
          viewport = _a.viewport,
          onShouldVirtualize = _a.onShouldVirtualize,
          groups = _a.groups,
          compact = _a.compact; // override group header/footer props as needed

      var dividerProps = {
        onToggleSelectGroup: _this._onToggleSelectGroup,
        onToggleCollapse: _this._onToggleCollapse,
        onToggleSummarize: _this._onToggleSummarize
      };

      var headerProps = _assign(_assign({}, groupProps.headerProps), dividerProps);

      var showAllProps = _assign(_assign({}, groupProps.showAllProps), dividerProps);

      var footerProps = _assign(_assign({}, groupProps.footerProps), dividerProps);

      var groupNestingDepth = _this._getGroupNestingDepth();

      if (!groupProps.showEmptyGroups && group && group.count === 0) {
        return null;
      }

      return React.createElement(GroupedListSection, {
        ref: 'group_' + groupIndex,
        key: _this._getGroupKey(group, groupIndex),
        dragDropEvents: dragDropEvents,
        dragDropHelper: dragDropHelper,
        eventsToRegister: eventsToRegister,
        footerProps: footerProps,
        getGroupItemLimit: groupProps && groupProps.getGroupItemLimit,
        group: group,
        groupIndex: groupIndex,
        groupNestingDepth: groupNestingDepth,
        groupProps: groupProps,
        headerProps: headerProps,
        listProps: listProps,
        items: items,
        onRenderCell: onRenderCell,
        onRenderGroupHeader: groupProps.onRenderHeader,
        onRenderGroupShowAll: groupProps.onRenderShowAll,
        onRenderGroupFooter: groupProps.onRenderFooter,
        selectionMode: selectionMode,
        selection: selection,
        showAllProps: showAllProps,
        viewport: viewport,
        onShouldVirtualize: onShouldVirtualize,
        groupedListClassNames: _this._classNames,
        groups: groups,
        compact: compact
      });
    };

    _this._getDefaultGroupItemLimit = function (group) {
      return group.count;
    };

    _this._getGroupItemLimit = function (group) {
      var groupProps = _this.props.groupProps;
      var getGroupItemLimit = groupProps && groupProps.getGroupItemLimit ? groupProps.getGroupItemLimit : _this._getDefaultGroupItemLimit;
      return getGroupItemLimit(group);
    };

    _this._getGroupHeight = function (group) {
      var rowHeight = _this.props.compact ? COMPACT_ROW_HEIGHT : ROW_HEIGHT;
      return rowHeight + (group.isCollapsed ? 0 : rowHeight * _this._getGroupItemLimit(group));
    };

    _this._getPageHeight = function (itemIndex) {
      var groups = _this.state.groups;
      var _a = _this.props.getGroupHeight,
          getGroupHeight = _a === void 0 ? _this._getGroupHeight : _a;
      var pageGroup = groups && groups[itemIndex];

      if (pageGroup) {
        return getGroupHeight(pageGroup, itemIndex);
      } else {
        return 0;
      }
    };

    _this._onToggleCollapse = function (group) {
      var groupProps = _this.props.groupProps;
      var onToggleCollapse = groupProps && groupProps.headerProps && groupProps.headerProps.onToggleCollapse;

      if (group) {
        if (onToggleCollapse) {
          onToggleCollapse(group);
        }

        group.isCollapsed = !group.isCollapsed;

        _this._updateIsSomeGroupExpanded();

        _this.forceUpdate();
      }
    };

    _this._onToggleSelectGroup = function (group) {
      var _a = _this.props,
          selection = _a.selection,
          selectionMode = _a.selectionMode;

      if (group && selection && selectionMode === SelectionMode.multiple) {
        selection.toggleRangeSelected(group.startIndex, group.count);
      }
    };

    _this._onToggleSummarize = function (group) {
      var groupProps = _this.props.groupProps;
      var onToggleSummarize = groupProps && groupProps.showAllProps && groupProps.showAllProps.onToggleSummarize;

      if (onToggleSummarize) {
        onToggleSummarize(group);
      } else {
        if (group) {
          group.isShowingAll = !group.isShowingAll;
        }

        _this.forceUpdate();
      }
    };

    _this._getPageSpecification = function (itemIndex) {
      var groups = _this.state.groups;
      var pageGroup = groups && groups[itemIndex];
      return {
        key: pageGroup && pageGroup.key
      };
    };

    initializeComponentRef(_this);
    _this._isSomeGroupExpanded = _this._computeIsSomeGroupExpanded(props.groups);
    _this.state = {
      lastWidth: 0,
      groups: props.groups
    };
    return _this;
  }

  GroupedListBase.prototype.scrollToIndex = function (index, measureItem, scrollToMode) {
    if (this._list.current) {
      this._list.current.scrollToIndex(index, measureItem, scrollToMode);
    }
  };

  GroupedListBase.prototype.getStartItemIndexInView = function () {
    return this._list.current.getStartItemIndexInView() || 0;
  }; // tslint:disable-next-line function-name


  GroupedListBase.prototype.UNSAFE_componentWillReceiveProps = function (newProps) {
    var _a = this.props,
        groups = _a.groups,
        selectionMode = _a.selectionMode,
        compact = _a.compact;
    var shouldForceUpdates = false;

    if (newProps.groups !== groups) {
      this.setState({
        groups: newProps.groups
      });
      shouldForceUpdates = true;
    }

    if (newProps.selectionMode !== selectionMode || newProps.compact !== compact) {
      shouldForceUpdates = true;
    }

    if (shouldForceUpdates) {
      this._forceListUpdates();
    }
  };

  GroupedListBase.prototype.componentDidMount = function () {
    var _a = this.props,
        groupProps = _a.groupProps,
        _b = _a.groups,
        groups = _b === void 0 ? [] : _b;

    if (groupProps && groupProps.isAllGroupsCollapsed) {
      this._setGroupsCollapsedState(groups, groupProps.isAllGroupsCollapsed);
    }
  };

  GroupedListBase.prototype.render = function () {
    var _a = this.props,
        className = _a.className,
        usePageCache = _a.usePageCache,
        onShouldVirtualize = _a.onShouldVirtualize,
        theme = _a.theme,
        styles = _a.styles,
        compact = _a.compact,
        _b = _a.listProps,
        listProps = _b === void 0 ? {} : _b;
    var groups = this.state.groups;
    this._classNames = getClassNames$a(styles, {
      theme: theme,
      className: className,
      compact: compact
    });
    var version = listProps.version;
    return React.createElement("div", {
      className: this._classNames.root,
      "data-automationid": "GroupedList",
      "data-is-scrollable": "false",
      role: "presentation"
    }, React.createElement(FocusRects, null), !groups ? this._renderGroup(undefined, 0) : React.createElement(List, {
      ref: this._list,
      role: "presentation",
      items: groups,
      onRenderCell: this._renderGroup,
      getItemCountForPage: this._returnOne,
      getPageHeight: this._getPageHeight,
      getPageSpecification: this._getPageSpecification,
      usePageCache: usePageCache,
      onShouldVirtualize: onShouldVirtualize,
      version: version
    }));
  };

  GroupedListBase.prototype.forceUpdate = function () {
    _super.prototype.forceUpdate.call(this);

    this._forceListUpdates();
  };

  GroupedListBase.prototype.toggleCollapseAll = function (allCollapsed) {
    var _a = this.state.groups,
        groups = _a === void 0 ? [] : _a;
    var groupProps = this.props.groupProps;
    var onToggleCollapseAll = groupProps && groupProps.onToggleCollapseAll;

    if (groups.length > 0) {
      if (onToggleCollapseAll) {
        onToggleCollapseAll(allCollapsed);
      }

      this._setGroupsCollapsedState(groups, allCollapsed);

      this._updateIsSomeGroupExpanded();

      this.forceUpdate();
    }
  };

  GroupedListBase.prototype._setGroupsCollapsedState = function (groups, isCollapsed) {
    for (var groupIndex = 0; groupIndex < groups.length; groupIndex++) {
      groups[groupIndex].isCollapsed = isCollapsed;
    }
  };

  GroupedListBase.prototype._returnOne = function () {
    return 1;
  };

  GroupedListBase.prototype._getGroupKey = function (group, index) {
    return 'group-' + (group && group.key ? group.key : String(index));
  };

  GroupedListBase.prototype._getGroupNestingDepth = function () {
    var groups = this.state.groups;
    var level = 0;
    var groupsInLevel = groups;

    while (groupsInLevel && groupsInLevel.length > 0) {
      level++;
      groupsInLevel = groupsInLevel[0].children;
    }

    return level;
  };

  GroupedListBase.prototype._forceListUpdates = function (groups) {
    groups = groups || this.state.groups;
    var groupCount = groups ? groups.length : 1;

    if (this._list.current) {
      this._list.current.forceUpdate();

      for (var i = 0; i < groupCount; i++) {
        var group = this._list.current.refs['group_' + String(i)];

        if (group) {
          group.forceListUpdate();
        }
      }
    } else {
      var group = this.refs['group_' + String(0)];

      if (group) {
        group.forceListUpdate();
      }
    }
  };

  GroupedListBase.prototype._computeIsSomeGroupExpanded = function (groups) {
    var _this = this;

    return !!(groups && groups.some(function (group) {
      return group.children ? _this._computeIsSomeGroupExpanded(group.children) : !group.isCollapsed;
    }));
  };

  GroupedListBase.prototype._updateIsSomeGroupExpanded = function () {
    var groups = this.state.groups;
    var onGroupExpandStateChanged = this.props.onGroupExpandStateChanged;

    var newIsSomeGroupExpanded = this._computeIsSomeGroupExpanded(groups);

    if (this._isSomeGroupExpanded !== newIsSomeGroupExpanded) {
      if (onGroupExpandStateChanged) {
        onGroupExpandStateChanged(newIsSomeGroupExpanded);
      }

      this._isSomeGroupExpanded = newIsSomeGroupExpanded;
    }
  };

  GroupedListBase.defaultProps = {
    selectionMode: SelectionMode.multiple,
    isHeaderVisible: true,
    groupProps: {},
    compact: false
  };
  return GroupedListBase;
}(React.Component);

var GroupedList = styled(GroupedListBase, getStyles$5, undefined, {
  scope: 'GroupedList'
});

var getClassNames$b = classNamesFunction();

var DetailsRowCheckBase = function DetailsRowCheckBase(props) {
  var _a = props.isVisible,
      isVisible = _a === void 0 ? false : _a,
      _b = props.canSelect,
      canSelect = _b === void 0 ? false : _b,
      _c = props.anySelected,
      anySelected = _c === void 0 ? false : _c,
      _d = props.selected,
      selected = _d === void 0 ? false : _d,
      _e = props.isHeader,
      isHeader = _e === void 0 ? false : _e,
      className = props.className,
      checkClassName = props.checkClassName,
      styles = props.styles,
      theme = props.theme,
      compact = props.compact,
      onRenderDetailsCheckbox = props.onRenderDetailsCheckbox,
      _f = props.useFastIcons,
      useFastIcons = _f === void 0 ? true : _f,
      // must be removed from buttonProps
  buttonProps = __rest(props, ["isVisible", "canSelect", "anySelected", "selected", "isHeader", "className", "checkClassName", "styles", "theme", "compact", "onRenderDetailsCheckbox", "useFastIcons"]);

  var defaultCheckboxRender = useFastIcons ? _fastDefaultCheckboxRender : _defaultCheckboxRender;
  var onRenderCheckbox = onRenderDetailsCheckbox ? composeRenderFunction(onRenderDetailsCheckbox, defaultCheckboxRender) : defaultCheckboxRender;
  var classNames = getClassNames$b(styles, {
    theme: theme,
    canSelect: canSelect,
    selected: selected,
    anySelected: anySelected,
    className: className,
    isHeader: isHeader,
    isVisible: isVisible,
    compact: compact
  });
  var detailsCheckboxProps = {
    checked: selected,
    theme: theme
  };
  return canSelect ? React.createElement("div", _assign({}, buttonProps, {
    role: "checkbox",
    // tslint:disable-next-line:deprecation
    className: css(classNames.root, classNames.check),
    "aria-checked": selected,
    "data-selection-toggle": true,
    "data-automationid": "DetailsRowCheck"
  }), onRenderCheckbox(detailsCheckboxProps)) : // tslint:disable-next-line:deprecation
  React.createElement("div", _assign({}, buttonProps, {
    className: css(classNames.root, classNames.check)
  }));
};

var FastCheck = React.memo(function (props) {
  return React.createElement(Check, {
    theme: props.theme,
    checked: props.checked,
    className: props.className,
    useFastIcons: true
  });
});

function _defaultCheckboxRender(checkboxProps) {
  return React.createElement(Check, {
    checked: checkboxProps.checked
  });
}

function _fastDefaultCheckboxRender(checkboxProps) {
  return React.createElement(FastCheck, {
    theme: checkboxProps.theme,
    checked: checkboxProps.checked
  });
}

var DetailsRowCheck = styled(DetailsRowCheckBase, getStyles$9, undefined, {
  scope: 'DetailsRowCheck'
}, true);

var MOUSEDOWN_PRIMARY_BUTTON = 0; // for mouse down event we are using ev.button property, 0 means left button

var MOUSEMOVE_PRIMARY_BUTTON = 1; // for mouse move event we are using ev.buttons property, 1 means left button

var DragDropHelper =
/** @class */
function () {
  function DragDropHelper(params) {
    this._selection = params.selection;
    this._dragEnterCounts = {};
    this._activeTargets = {};
    this._lastId = 0; // To make this class cheap to create, which allows simplifying some logic elsewhere,
    // only initialize the event group and global event handlers as needed.

    this._initialized = false;
  }

  DragDropHelper.prototype.dispose = function () {
    if (this._events) {
      this._events.dispose();
    }
  };

  DragDropHelper.prototype.subscribe = function (root, events, dragDropOptions) {
    var _this = this;

    if (!this._initialized) {
      this._events = new EventGroup(this);
      var doc = getDocument(); // clear drag data when mouse up, use capture event to ensure it will be run

      if (doc) {
        this._events.on(doc.body, 'mouseup', this._onMouseUp.bind(this), true);

        this._events.on(doc, 'mouseup', this._onDocumentMouseUp.bind(this), true);
      }

      this._initialized = true;
    }

    var _a = dragDropOptions.key,
        key = _a === void 0 ? "" + ++this._lastId : _a;
    var handlers = [];
    var onDragStart;
    var onDragLeave;
    var onDragEnter;
    var onDragEnd;
    var onDrop;
    var onDragOver;
    var onMouseDown;
    var isDraggable;
    var isDroppable;
    var activeTarget;

    if (dragDropOptions && root) {
      var eventMap = dragDropOptions.eventMap,
          context = dragDropOptions.context,
          updateDropState_1 = dragDropOptions.updateDropState;
      var dragDropTarget = {
        root: root,
        options: dragDropOptions,
        key: key
      };
      isDraggable = this._isDraggable(dragDropTarget);
      isDroppable = this._isDroppable(dragDropTarget);

      if (isDraggable || isDroppable) {
        if (eventMap) {
          for (var _i = 0, eventMap_1 = eventMap; _i < eventMap_1.length; _i++) {
            var event_1 = eventMap_1[_i];
            var handler = {
              callback: event_1.callback.bind(null, context),
              eventName: event_1.eventName
            };
            handlers.push(handler);

            this._events.on(root, handler.eventName, handler.callback);
          }
        }
      }

      if (isDroppable) {
        // If the target is droppable, wire up global event listeners to track drop-related events.
        onDragLeave = function onDragLeave(event) {
          if (!event.isHandled) {
            event.isHandled = true;
            _this._dragEnterCounts[key]--;

            if (_this._dragEnterCounts[key] === 0) {
              updateDropState_1(false
              /* isDropping */
              , event);
            }
          }
        };

        onDragEnter = function onDragEnter(event) {
          event.preventDefault(); // needed for IE

          if (!event.isHandled) {
            event.isHandled = true;
            _this._dragEnterCounts[key]++;

            if (_this._dragEnterCounts[key] === 1) {
              updateDropState_1(true
              /* isDropping */
              , event);
            }
          }
        };

        onDragEnd = function onDragEnd(event) {
          _this._dragEnterCounts[key] = 0;
          updateDropState_1(false
          /* isDropping */
          , event);
        };

        onDrop = function onDrop(event) {
          _this._dragEnterCounts[key] = 0;
          updateDropState_1(false
          /* isDropping */
          , event);

          if (dragDropOptions.onDrop) {
            dragDropOptions.onDrop(dragDropOptions.context.data, event);
          }
        };

        onDragOver = function onDragOver(event) {
          event.preventDefault();

          if (dragDropOptions.onDragOver) {
            dragDropOptions.onDragOver(dragDropOptions.context.data, event);
          }
        };

        this._dragEnterCounts[key] = 0; // dragenter and dragleave will be fired when hover to the child element
        // but we only want to change state when enter or leave the current element
        // use the count to ensure it.

        events.on(root, 'dragenter', onDragEnter);
        events.on(root, 'dragleave', onDragLeave);
        events.on(root, 'dragend', onDragEnd);
        events.on(root, 'drop', onDrop);
        events.on(root, 'dragover', onDragOver);
      }

      if (isDraggable) {
        // If the target is draggable, wire up local event listeners for mouse events.
        onMouseDown = this._onMouseDown.bind(this, dragDropTarget);
        onDragEnd = this._onDragEnd.bind(this, dragDropTarget); // We need to add in data so that on Firefox we show the ghost element when dragging

        onDragStart = function onDragStart(event) {
          var options = dragDropOptions;

          if (options && options.onDragStart) {
            options.onDragStart(options.context.data, options.context.index, _this._selection.getSelection(), event);
          }

          _this._isDragging = true;

          if (event.dataTransfer) {
            event.dataTransfer.setData('id', root.id);
          }
        };

        events.on(root, 'dragstart', onDragStart);
        events.on(root, 'mousedown', onMouseDown);
        events.on(root, 'dragend', onDragEnd);
      }

      activeTarget = {
        target: dragDropTarget,
        dispose: function dispose() {
          if (_this._activeTargets[key] === activeTarget) {
            delete _this._activeTargets[key];
          }

          if (root) {
            for (var _i = 0, handlers_1 = handlers; _i < handlers_1.length; _i++) {
              var handler = handlers_1[_i];

              _this._events.off(root, handler.eventName, handler.callback);
            }

            if (isDroppable) {
              events.off(root, 'dragenter', onDragEnter);
              events.off(root, 'dragleave', onDragLeave);
              events.off(root, 'dragend', onDragEnd);
              events.off(root, 'dragover', onDragOver);
              events.off(root, 'drop', onDrop);
            }

            if (isDraggable) {
              events.off(root, 'dragstart', onDragStart);
              events.off(root, 'mousedown', onMouseDown);
              events.off(root, 'dragend', onDragEnd);
            }
          }
        }
      };
      this._activeTargets[key] = activeTarget;
    }

    return {
      key: key,
      dispose: function dispose() {
        if (activeTarget) {
          activeTarget.dispose();
        }
      }
    };
  };

  DragDropHelper.prototype.unsubscribe = function (root, key) {
    var activeTarget = this._activeTargets[key];

    if (activeTarget) {
      activeTarget.dispose();
    }
  };

  DragDropHelper.prototype._onDragEnd = function (target, event) {
    var options = target.options;

    if (options.onDragEnd) {
      options.onDragEnd(options.context.data, event);
    }
  };
  /**
   * clear drag data when mouse up on body
   */


  DragDropHelper.prototype._onMouseUp = function (event) {
    this._isDragging = false;

    if (this._dragData) {
      for (var _i = 0, _a = Object.keys(this._activeTargets); _i < _a.length; _i++) {
        var key = _a[_i];
        var activeTarget = this._activeTargets[key];

        if (activeTarget.target.root) {
          this._events.off(activeTarget.target.root, 'mousemove');

          this._events.off(activeTarget.target.root, 'mouseleave');
        }
      }

      if (this._dragData.dropTarget) {
        // raise dragleave event to let dropTarget know it need to remove dropping style
        EventGroup.raise(this._dragData.dropTarget.root, 'dragleave');
        EventGroup.raise(this._dragData.dropTarget.root, 'drop');
      }
    }

    this._dragData = null;
  };
  /**
   * clear drag data when mouse up outside of the document
   */


  DragDropHelper.prototype._onDocumentMouseUp = function (event) {
    var doc = getDocument();

    if (doc && event.target === doc.documentElement) {
      this._onMouseUp(event);
    }
  };
  /**
   * when mouse move over a new drop target while dragging some items,
   * fire dragleave on the old target and fire dragenter to the new target
   * The target will handle style change on dragenter and dragleave events.
   */


  DragDropHelper.prototype._onMouseMove = function (target, event) {
    var // use buttons property here since ev.button in some edge case is not updating well during the move.
    // but firefox doesn't support it, so we set the default value when it is not defined.
    _a = event.buttons,
        // use buttons property here since ev.button in some edge case is not updating well during the move.
    // but firefox doesn't support it, so we set the default value when it is not defined.
    buttons = _a === void 0 ? MOUSEMOVE_PRIMARY_BUTTON : _a;

    if (this._dragData && buttons !== MOUSEMOVE_PRIMARY_BUTTON) {
      // cancel mouse down event and return early when the primary button is not pressed
      this._onMouseUp(event);

      return;
    }

    var root = target.root,
        key = target.key;

    if (this._isDragging) {
      if (this._isDroppable(target)) {
        // we can have nested drop targets in the DOM, like a folder inside a group. In that case, when we drag into
        // the inner target (folder), we first set dropTarget to the inner element. But the same event is bubbled to the
        // outer target too, and we need to prevent the outer one from taking over.
        // So, check if the last dropTarget is not a child of the current.
        if (this._dragData) {
          if (this._dragData.dropTarget && this._dragData.dropTarget.key !== key && !this._isChild(root, this._dragData.dropTarget.root)) {
            if (this._dragEnterCounts[this._dragData.dropTarget.key] > 0) {
              EventGroup.raise(this._dragData.dropTarget.root, 'dragleave');
              EventGroup.raise(root, 'dragenter');
              this._dragData.dropTarget = target;
            }
          }
        }
      }
    }
  };
  /**
   * when mouse leave a target while dragging some items, fire dragleave to the target
   */


  DragDropHelper.prototype._onMouseLeave = function (target, event) {
    if (this._isDragging) {
      if (this._dragData && this._dragData.dropTarget && this._dragData.dropTarget.key === target.key) {
        EventGroup.raise(target.root, 'dragleave');
        this._dragData.dropTarget = undefined;
      }
    }
  };
  /**
   * when mouse down on a draggable item, we start to track dragdata.
   */


  DragDropHelper.prototype._onMouseDown = function (target, event) {
    if (event.button !== MOUSEDOWN_PRIMARY_BUTTON) {
      // Ignore anything except the primary button.
      return;
    }

    if (this._isDraggable(target)) {
      this._dragData = {
        clientX: event.clientX,
        clientY: event.clientY,
        eventTarget: event.target,
        dragTarget: target
      };

      for (var _i = 0, _a = Object.keys(this._activeTargets); _i < _a.length; _i++) {
        var key = _a[_i];
        var activeTarget = this._activeTargets[key];

        if (activeTarget.target.root) {
          this._events.on(activeTarget.target.root, 'mousemove', this._onMouseMove.bind(this, activeTarget.target));

          this._events.on(activeTarget.target.root, 'mouseleave', this._onMouseLeave.bind(this, activeTarget.target));
        }
      }
    } else {
      this._dragData = null;
    }
  };
  /**
   * determine whether the child target is a descendant of the parent
   */


  DragDropHelper.prototype._isChild = function (parent, child) {
    var parentElement = ReactDOM.findDOMNode(parent);
    var childElement = ReactDOM.findDOMNode(child);

    while (childElement && childElement.parentElement) {
      if (childElement.parentElement === parentElement) {
        return true;
      }

      childElement = childElement.parentElement;
    }

    return false;
  };

  DragDropHelper.prototype._isDraggable = function (target) {
    var options = target.options;
    return !!(options.canDrag && options.canDrag(options.context.data));
  };

  DragDropHelper.prototype._isDroppable = function (target) {
    // TODO: take the drag item into consideration to prevent dragging an item into the same group
    var options = target.options;
    var dragContext = this._dragData && this._dragData.dragTarget ? this._dragData.dragTarget.options.context : undefined;
    return !!(options.canDrop && options.canDrop(options.context, dragContext));
  };

  return DragDropHelper;
}();

var MOUSEDOWN_PRIMARY_BUTTON$1 = 0; // for mouse down event we are using ev.button property, 0 means left button

var getClassNames$c = classNamesFunction();
var TRANSITION_DURATION_DRAG = 200; // ms

var TRANSITION_DURATION_DROP = 1500; // ms

var CLASSNAME_ADD_INTERVAL = 20; // ms

/**
 * Component for rendering columns in a `DetailsList`.
 *
 * {@docCategory DetailsList}
 */

var DetailsColumnBase =
/** @class */
function (_super) {
  __extends(DetailsColumnBase, _super);

  function DetailsColumnBase(props) {
    var _this = _super.call(this, props) || this;

    _this._root = React.createRef();

    _this._onRenderColumnHeaderTooltip = function (tooltipHostProps) {
      return React.createElement("span", {
        className: tooltipHostProps.hostClassName
      }, tooltipHostProps.children);
    };

    _this._onColumnClick = function (ev) {
      var _a = _this.props,
          onColumnClick = _a.onColumnClick,
          column = _a.column;

      if (column.columnActionsMode === ColumnActionsMode.disabled) {
        return;
      }

      if (column.onColumnClick) {
        column.onColumnClick(ev, column);
      }

      if (onColumnClick) {
        onColumnClick(ev, column);
      }
    };

    _this._onDragStart = function (item, itemIndex, selectedItems, event) {
      var classNames = _this._classNames;

      if (itemIndex) {
        _this._updateHeaderDragInfo(itemIndex);

        _this._root.current.classList.add(classNames.borderWhileDragging);

        _this._async.setTimeout(function () {
          if (_this._root.current) {
            _this._root.current.classList.add(classNames.noBorderWhileDragging);
          }
        }, CLASSNAME_ADD_INTERVAL);
      }
    };

    _this._onDragEnd = function (item, event) {
      var classNames = _this._classNames;

      if (event) {
        _this._updateHeaderDragInfo(-1, event);
      }

      _this._root.current.classList.remove(classNames.borderWhileDragging);

      _this._root.current.classList.remove(classNames.noBorderWhileDragging);
    };

    _this._updateHeaderDragInfo = function (itemIndex, event) {
      // tslint:disable:deprecation
      if (_this.props.setDraggedItemIndex) {
        _this.props.setDraggedItemIndex(itemIndex);
      } // tslint:enable:deprecation


      if (_this.props.updateDragInfo) {
        _this.props.updateDragInfo({
          itemIndex: itemIndex
        }, event);
      }
    };

    _this._onColumnContextMenu = function (ev) {
      var _a = _this.props,
          onColumnContextMenu = _a.onColumnContextMenu,
          column = _a.column;

      if (column.onColumnContextMenu) {
        column.onColumnContextMenu(column, ev);
        ev.preventDefault();
      }

      if (onColumnContextMenu) {
        onColumnContextMenu(column, ev);
        ev.preventDefault();
      }
    };

    _this._onRootMouseDown = function (ev) {
      var isDraggable = _this.props.isDraggable; // Ignore anything except the primary button.

      if (isDraggable && ev.button === MOUSEDOWN_PRIMARY_BUTTON$1) {
        ev.stopPropagation();
      }
    };

    initializeComponentRef(_this);
    _this._async = new Async(_this);
    _this._events = new EventGroup(_this);
    return _this;
  }

  DetailsColumnBase.prototype.render = function () {
    var _a = this.props,
        column = _a.column,
        columnIndex = _a.columnIndex,
        parentId = _a.parentId,
        isDraggable = _a.isDraggable,
        styles = _a.styles,
        theme = _a.theme,
        _b = _a.cellStyleProps,
        cellStyleProps = _b === void 0 ? DEFAULT_CELL_STYLE_PROPS : _b,
        _c = _a.useFastIcons,
        useFastIcons = _c === void 0 ? true : _c;
    var _d = this.props.onRenderColumnHeaderTooltip,
        onRenderColumnHeaderTooltip = _d === void 0 ? this._onRenderColumnHeaderTooltip : _d;
    this._classNames = getClassNames$c(styles, {
      theme: theme,
      headerClassName: column.headerClassName,
      iconClassName: column.iconClassName,
      isActionable: column.columnActionsMode !== ColumnActionsMode.disabled,
      isEmpty: !column.name,
      isIconVisible: column.isSorted || column.isGrouped || column.isFiltered,
      isPadded: column.isPadded,
      isIconOnly: column.isIconOnly,
      cellStyleProps: cellStyleProps,
      transitionDurationDrag: TRANSITION_DURATION_DRAG,
      transitionDurationDrop: TRANSITION_DURATION_DROP
    });
    var classNames = this._classNames;
    var IconComponent = useFastIcons ? FontIcon : Icon;
    return React.createElement(React.Fragment, null, React.createElement("div", {
      key: column.key,
      ref: this._root,
      role: 'columnheader',
      "aria-sort": column.isSorted ? column.isSortedDescending ? 'descending' : 'ascending' : 'none',
      "aria-colindex": columnIndex,
      className: classNames.root,
      "data-is-draggable": isDraggable,
      draggable: isDraggable,
      style: {
        width: column.calculatedWidth + cellStyleProps.cellLeftPadding + cellStyleProps.cellRightPadding + (column.isPadded ? cellStyleProps.cellExtraRightPadding : 0)
      },
      "data-automationid": 'ColumnsHeaderColumn',
      "data-item-key": column.key
    }, isDraggable && React.createElement(IconComponent, {
      iconName: "GripperBarVertical",
      className: classNames.gripperBarVerticalStyle
    }), onRenderColumnHeaderTooltip({
      hostClassName: classNames.cellTooltip,
      id: parentId + "-" + column.key + "-tooltip",
      setAriaDescribedBy: false,
      column: column,
      content: column.columnActionsMode !== ColumnActionsMode.disabled ? column.ariaLabel : '',
      children: React.createElement("span", {
        id: parentId + "-" + column.key,
        "aria-label": column.isIconOnly ? column.name : undefined,
        "aria-labelledby": column.isIconOnly ? undefined : parentId + "-" + column.key + "-name",
        className: classNames.cellTitle,
        "data-is-focusable": column.columnActionsMode !== ColumnActionsMode.disabled,
        role: column.columnActionsMode !== ColumnActionsMode.disabled && (column.onColumnClick !== undefined || this.props.onColumnClick !== undefined) ? 'button' : undefined,
        "aria-describedby": !this.props.onRenderColumnHeaderTooltip && this._hasAccessibleLabel() ? parentId + "-" + column.key + "-tooltip" : undefined,
        onContextMenu: this._onColumnContextMenu,
        onClick: this._onColumnClick,
        "aria-haspopup": column.columnActionsMode === ColumnActionsMode.hasDropdown,
        "aria-expanded": column.columnActionsMode === ColumnActionsMode.hasDropdown ? !!column.isMenuOpen : undefined
      }, React.createElement("span", {
        id: parentId + "-" + column.key + "-name",
        className: classNames.cellName
      }, (column.iconName || column.iconClassName) && React.createElement(IconComponent, {
        className: classNames.iconClassName,
        iconName: column.iconName
      }), column.isIconOnly ? React.createElement("span", {
        className: classNames.accessibleLabel
      }, column.name) : column.name), column.isFiltered && React.createElement(IconComponent, {
        className: classNames.nearIcon,
        iconName: "Filter"
      }), column.isSorted && React.createElement(IconComponent, {
        className: classNames.sortIcon,
        iconName: column.isSortedDescending ? 'SortDown' : 'SortUp'
      }), column.isGrouped && React.createElement(IconComponent, {
        className: classNames.nearIcon,
        iconName: "GroupedDescending"
      }), column.columnActionsMode === ColumnActionsMode.hasDropdown && !column.isIconOnly && React.createElement(IconComponent, {
        "aria-hidden": true,
        className: classNames.filterChevron,
        iconName: "ChevronDown"
      }))
    }, this._onRenderColumnHeaderTooltip)), !this.props.onRenderColumnHeaderTooltip ? this._renderAccessibleLabel() : null);
  };

  DetailsColumnBase.prototype.componentDidMount = function () {
    var _this = this;

    if (this.props.dragDropHelper && this.props.isDraggable) {
      this._addDragDropHandling();
    }

    var classNames = this._classNames;

    if (this.props.isDropped) {
      if (this._root.current) {
        this._root.current.classList.add(classNames.borderAfterDropping);

        this._async.setTimeout(function () {
          if (_this._root.current) {
            _this._root.current.classList.add(classNames.noBorderAfterDropping);
          }
        }, CLASSNAME_ADD_INTERVAL);
      }

      this._async.setTimeout(function () {
        if (_this._root.current) {
          _this._root.current.classList.remove(classNames.borderAfterDropping);

          _this._root.current.classList.remove(classNames.noBorderAfterDropping);
        }
      }, TRANSITION_DURATION_DROP + CLASSNAME_ADD_INTERVAL);
    }
  };

  DetailsColumnBase.prototype.componentWillUnmount = function () {
    if (this._dragDropSubscription) {
      this._dragDropSubscription.dispose();

      delete this._dragDropSubscription;
    }

    this._async.dispose();

    this._events.dispose();
  };

  DetailsColumnBase.prototype.componentDidUpdate = function () {
    if (!this._dragDropSubscription && this.props.dragDropHelper && this.props.isDraggable) {
      this._addDragDropHandling();
    }

    if (this._dragDropSubscription && !this.props.isDraggable) {
      this._dragDropSubscription.dispose();

      this._events.off(this._root.current, 'mousedown');

      delete this._dragDropSubscription;
    }
  };

  DetailsColumnBase.prototype._getColumnDragDropOptions = function () {
    var _this = this;

    var columnIndex = this.props.columnIndex;
    var options = {
      selectionIndex: columnIndex,
      context: {
        data: columnIndex,
        index: columnIndex
      },
      canDrag: function canDrag() {
        return _this.props.isDraggable;
      },
      canDrop: function canDrop() {
        return false;
      },
      onDragStart: this._onDragStart,
      updateDropState: function updateDropState() {
        return undefined;
      },
      onDrop: function onDrop() {
        return undefined;
      },
      onDragEnd: this._onDragEnd
    };
    return options;
  };

  DetailsColumnBase.prototype._hasAccessibleLabel = function () {
    var column = this.props.column;
    return !!(column.ariaLabel || column.filterAriaLabel || column.sortAscendingAriaLabel || column.sortDescendingAriaLabel || column.groupAriaLabel);
  };

  DetailsColumnBase.prototype._renderAccessibleLabel = function () {
    var _a = this.props,
        column = _a.column,
        parentId = _a.parentId;
    var classNames = this._classNames;
    return this._hasAccessibleLabel() && !this.props.onRenderColumnHeaderTooltip ? React.createElement("label", {
      key: column.key + "_label",
      id: parentId + "-" + column.key + "-tooltip",
      className: classNames.accessibleLabel
    }, column.ariaLabel, column.isFiltered && column.filterAriaLabel || null, column.isSorted && (column.isSortedDescending ? column.sortDescendingAriaLabel : column.sortAscendingAriaLabel) || null, column.isGrouped && column.groupAriaLabel || null) : null;
  };

  DetailsColumnBase.prototype._addDragDropHandling = function () {
    this._dragDropSubscription = this.props.dragDropHelper.subscribe(this._root.current, this._events, this._getColumnDragDropOptions()); // We need to use native on this to prevent MarqueeSelection from handling the event before us.

    this._events.on(this._root.current, 'mousedown', this._onRootMouseDown);
  };

  return DetailsColumnBase;
}(React.Component);

var GlobalClassNames$b = {
  isActionable: 'is-actionable',
  cellIsCheck: 'ms-DetailsHeader-cellIsCheck',
  collapseButton: 'ms-DetailsHeader-collapseButton',
  isCollapsed: 'is-collapsed',
  isAllSelected: 'is-allSelected',
  isSelectAllHidden: 'is-selectAllHidden',
  isResizingColumn: 'is-resizingColumn',
  isEmpty: 'is-empty',
  isIconVisible: 'is-icon-visible',
  cellSizer: 'ms-DetailsHeader-cellSizer',
  isResizing: 'is-resizing',
  dropHintCircleStyle: 'ms-DetailsHeader-dropHintCircleStyle',
  dropHintLineStyle: 'ms-DetailsHeader-dropHintLineStyle',
  cellTitle: 'ms-DetailsHeader-cellTitle',
  cellName: 'ms-DetailsHeader-cellName',
  filterChevron: 'ms-DetailsHeader-filterChevron',
  gripperBarVerticalStyle: 'ms-DetailsColumn-gripperBar',
  nearIcon: 'ms-DetailsColumn-nearIcon'
};
var getStyles$e = function getStyles(props) {
  var _a;

  var theme = props.theme,
      headerClassName = props.headerClassName,
      iconClassName = props.iconClassName,
      isActionable = props.isActionable,
      isEmpty = props.isEmpty,
      isIconVisible = props.isIconVisible,
      isPadded = props.isPadded,
      isIconOnly = props.isIconOnly,
      _b = props.cellStyleProps,
      cellStyleProps = _b === void 0 ? DEFAULT_CELL_STYLE_PROPS : _b,
      transitionDurationDrag = props.transitionDurationDrag,
      transitionDurationDrop = props.transitionDurationDrop;
  var semanticColors = theme.semanticColors,
      palette = theme.palette,
      fonts = theme.fonts;
  var classNames = getGlobalClassNames(GlobalClassNames$b, theme);
  var colors = {
    iconForegroundColor: semanticColors.bodySubtext,
    headerForegroundColor: semanticColors.bodyText,
    headerBackgroundColor: semanticColors.bodyBackground,
    dropdownChevronForegroundColor: palette.neutralTertiary,
    resizerColor: palette.neutralTertiaryAlt
  };
  var nearIconStyle = {
    color: colors.iconForegroundColor,
    opacity: 1,
    paddingLeft: 8
  };
  var borderWhileDragging = {
    outline: "1px solid " + palette.themePrimary
  };
  var borderAfterDragOrDrop = {
    outlineColor: 'transparent'
  };
  return {
    root: [getCellStyles(props), fonts.small, isActionable && [classNames.isActionable, {
      selectors: {
        ':hover': {
          color: semanticColors.bodyText,
          background: semanticColors.listHeaderBackgroundHovered
        },
        ':active': {
          background: semanticColors.listHeaderBackgroundPressed
        }
      }
    }], isEmpty && [classNames.isEmpty, {
      textOverflow: 'clip'
    }], isIconVisible && classNames.isIconVisible, isPadded && {
      paddingRight: cellStyleProps.cellExtraRightPadding + cellStyleProps.cellRightPadding
    }, {
      selectors: {
        ':hover i[data-icon-name="GripperBarVertical"]': {
          display: 'block'
        }
      }
    }, headerClassName],
    gripperBarVerticalStyle: {
      display: 'none',
      position: 'absolute',
      textAlign: 'left',
      color: palette.neutralTertiary,
      left: 1
    },
    nearIcon: [classNames.nearIcon, nearIconStyle],
    sortIcon: [nearIconStyle, {
      paddingLeft: 4,
      position: 'relative',
      top: 1
    }],
    iconClassName: [{
      color: colors.iconForegroundColor,
      opacity: 1
    }, iconClassName],
    filterChevron: [classNames.filterChevron, {
      color: colors.dropdownChevronForegroundColor,
      paddingLeft: 6,
      verticalAlign: 'middle',
      fontSize: fonts.small.fontSize
    }],
    cellTitle: [classNames.cellTitle, getFocusStyle(theme), _assign({
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      boxSizing: 'border-box',
      overflow: 'hidden',
      padding: "0 " + cellStyleProps.cellRightPadding + "px 0 " + cellStyleProps.cellLeftPadding + "px"
    }, isIconOnly ? {
      alignContent: 'flex-end',
      maxHeight: '100%',
      flexWrap: 'wrap-reverse'
    } : {})],
    cellName: [classNames.cellName, {
      flex: '0 1 auto',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      fontWeight: FontWeights.semibold,
      fontSize: fonts.medium.fontSize
    }, isIconOnly && {
      selectors: (_a = {}, _a["." + classNames.nearIcon] = {
        paddingLeft: 0
      }, _a)
    }],
    cellTooltip: {
      display: 'block',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    },
    accessibleLabel: hiddenContentStyle,
    borderWhileDragging: borderWhileDragging,
    noBorderWhileDragging: [borderAfterDragOrDrop, {
      transition: "outline " + transitionDurationDrag + "ms ease"
    }],
    borderAfterDropping: borderWhileDragging,
    noBorderAfterDropping: [borderAfterDragOrDrop, {
      transition: "outline  " + transitionDurationDrop + "ms ease"
    }]
  };
};

var DetailsColumn = styled(DetailsColumnBase, getStyles$e, undefined, {
  scope: 'DetailsColumn'
});

/**
 * {@docCategory DetailsList}
 */
var SelectAllVisibility;

(function (SelectAllVisibility) {
  SelectAllVisibility[SelectAllVisibility["none"] = 0] = "none";
  SelectAllVisibility[SelectAllVisibility["hidden"] = 1] = "hidden";
  SelectAllVisibility[SelectAllVisibility["visible"] = 2] = "visible";
})(SelectAllVisibility || (SelectAllVisibility = {}));

var getClassNames$d = classNamesFunction();
var MOUSEDOWN_PRIMARY_BUTTON$2 = 0; // for mouse down event we are using ev.button property, 0 means left button

var MOUSEMOVE_PRIMARY_BUTTON$1 = 1; // for mouse move event we are using ev.buttons property, 1 means left button

var NO_COLUMNS = [];

var DetailsHeaderBase =
/** @class */
function (_super) {
  __extends(DetailsHeaderBase, _super);

  function DetailsHeaderBase(props) {
    var _this = _super.call(this, props) || this;

    _this._rootComponent = React.createRef();
    _this._draggedColumnIndex = -1;
    _this._dropHintDetails = {};

    _this._updateDroppingState = function (newValue, event) {
      if (_this._draggedColumnIndex >= 0 && event.type !== 'drop' && !newValue) {
        _this._resetDropHints();
      }
    };

    _this._onDragOver = function (item, event) {
      if (_this._draggedColumnIndex >= 0) {
        event.stopPropagation();

        _this._computeDropHintToBeShown(event.clientX);
      }
    };

    _this._onDrop = function (item, event) {
      // Safe to assume this is defined since we're handling a drop event
      var columnReorderProps = _this._getColumnReorderProps(); // Target index will not get changed if draggeditem is after target item.


      if (_this._draggedColumnIndex >= 0 && event) {
        var targetIndex = _this._draggedColumnIndex > _this._currentDropHintIndex ? _this._currentDropHintIndex : _this._currentDropHintIndex - 1;

        var isValidDrop = _this._isValidCurrentDropHintIndex();

        event.stopPropagation();

        if (isValidDrop) {
          _this._onDropIndexInfo.sourceIndex = _this._draggedColumnIndex;
          _this._onDropIndexInfo.targetIndex = targetIndex;

          if (columnReorderProps.onColumnDrop) {
            var dragDropDetails = {
              draggedIndex: _this._draggedColumnIndex,
              targetIndex: targetIndex
            };
            columnReorderProps.onColumnDrop(dragDropDetails); // tslint:disable:deprecation
          } else if (columnReorderProps.handleColumnReorder) {
            columnReorderProps.handleColumnReorder(_this._draggedColumnIndex, targetIndex); // tslint:enable:deprecation
          }
        }
      }

      _this._resetDropHints();

      _this._dropHintDetails = {};
      _this._draggedColumnIndex = -1;
    };

    _this._updateDragInfo = function (props, event) {
      // Safe to assume this is defined since we're handling a drag event
      var columnReorderProps = _this._getColumnReorderProps();

      var itemIndex = props.itemIndex;

      if (itemIndex >= 0) {
        // Column index is set based on the checkbox
        _this._draggedColumnIndex = _this._isCheckboxColumnHidden() ? itemIndex - 1 : itemIndex - 2;

        _this._getDropHintPositions();

        if (columnReorderProps.onColumnDragStart) {
          columnReorderProps.onColumnDragStart(true);
        }
      } else if (event && _this._draggedColumnIndex >= 0) {
        _this._resetDropHints();

        _this._draggedColumnIndex = -1;
        _this._dropHintDetails = {};

        if (columnReorderProps.onColumnDragEnd) {
          var columnDragEndLocation = _this._isEventOnHeader(event);

          columnReorderProps.onColumnDragEnd({
            dropLocation: columnDragEndLocation
          }, event);
        }
      }
    };

    _this._getDropHintPositions = function () {
      var _a = _this.props.columns,
          columns = _a === void 0 ? NO_COLUMNS : _a; // Safe to assume this is defined since we're handling a drag/drop event

      var columnReorderProps = _this._getColumnReorderProps();

      var prevX = 0;
      var prevMid = 0;
      var prevRef;
      var frozenColumnCountFromStart = columnReorderProps.frozenColumnCountFromStart || 0;
      var frozenColumnCountFromEnd = columnReorderProps.frozenColumnCountFromEnd || 0;

      for (var i = frozenColumnCountFromStart; i < columns.length - frozenColumnCountFromEnd + 1; i++) {
        if (_this._rootElement) {
          var dropHintElement = _this._rootElement.querySelectorAll('#columnDropHint_' + i)[0];

          if (dropHintElement) {
            if (i === frozenColumnCountFromStart) {
              prevX = dropHintElement.offsetLeft;
              prevMid = dropHintElement.offsetLeft;
              prevRef = dropHintElement;
            } else {
              var newMid = (dropHintElement.offsetLeft + prevX) / 2;
              _this._dropHintDetails[i - 1] = {
                originX: prevX,
                startX: prevMid,
                endX: newMid,
                dropHintElementRef: prevRef
              };
              prevMid = newMid;
              prevRef = dropHintElement;
              prevX = dropHintElement.offsetLeft;

              if (i === columns.length - frozenColumnCountFromEnd) {
                _this._dropHintDetails[i] = {
                  originX: prevX,
                  startX: prevMid,
                  endX: dropHintElement.offsetLeft,
                  dropHintElementRef: prevRef
                };
              }
            }
          }
        }
      }
    };
    /**
     * Based on the given cursor position, finds the nearest drop hint and updates the state to make it visible
     */


    _this._computeDropHintToBeShown = function (clientX) {
      var isRtl = getRTL$1(_this.props.theme);

      if (_this._rootElement) {
        var clientRect = _this._rootElement.getBoundingClientRect();

        var headerOriginX = clientRect.left;
        var eventXRelativePosition = clientX - headerOriginX;
        var currentDropHintIndex = _this._currentDropHintIndex;

        if (_this._isValidCurrentDropHintIndex()) {
          if (_liesBetween(isRtl, eventXRelativePosition, _this._dropHintDetails[currentDropHintIndex].startX, _this._dropHintDetails[currentDropHintIndex].endX)) {
            return;
          }
        }

        var _a = _this.props.columns,
            columns = _a === void 0 ? NO_COLUMNS : _a; // Safe to assume this is defined since we're handling a drag/drop event

        var columnReorderProps = _this._getColumnReorderProps();

        var frozenColumnCountFromStart = columnReorderProps.frozenColumnCountFromStart || 0;
        var frozenColumnCountFromEnd = columnReorderProps.frozenColumnCountFromEnd || 0;
        var currentIndex = frozenColumnCountFromStart;
        var lastValidColumn = columns.length - frozenColumnCountFromEnd;
        var indexToUpdate = -1;

        if (_isBefore(isRtl, eventXRelativePosition, _this._dropHintDetails[currentIndex].endX)) {
          indexToUpdate = currentIndex;
        } else if (_isAfter(isRtl, eventXRelativePosition, _this._dropHintDetails[lastValidColumn].startX)) {
          indexToUpdate = lastValidColumn;
        } else if (_this._isValidCurrentDropHintIndex()) {
          if (_this._dropHintDetails[currentDropHintIndex + 1] && _liesBetween(isRtl, eventXRelativePosition, _this._dropHintDetails[currentDropHintIndex + 1].startX, _this._dropHintDetails[currentDropHintIndex + 1].endX)) {
            indexToUpdate = currentDropHintIndex + 1;
          } else if (_this._dropHintDetails[currentDropHintIndex - 1] && _liesBetween(isRtl, eventXRelativePosition, _this._dropHintDetails[currentDropHintIndex - 1].startX, _this._dropHintDetails[currentDropHintIndex - 1].endX)) {
            indexToUpdate = currentDropHintIndex - 1;
          }
        }

        if (indexToUpdate === -1) {
          var startIndex = frozenColumnCountFromStart;
          var endIndex = lastValidColumn;

          while (startIndex < endIndex) {
            var middleIndex = Math.ceil((endIndex + startIndex) / 2);

            if (_liesBetween(isRtl, eventXRelativePosition, _this._dropHintDetails[middleIndex].startX, _this._dropHintDetails[middleIndex].endX)) {
              indexToUpdate = middleIndex;
              break;
            } else if (_isBefore(isRtl, eventXRelativePosition, _this._dropHintDetails[middleIndex].originX)) {
              endIndex = middleIndex;
            } else if (_isAfter(isRtl, eventXRelativePosition, _this._dropHintDetails[middleIndex].originX)) {
              startIndex = middleIndex;
            }
          }
        }

        if (indexToUpdate === _this._draggedColumnIndex || indexToUpdate === _this._draggedColumnIndex + 1) {
          if (_this._isValidCurrentDropHintIndex()) {
            _this._resetDropHints();
          }
        } else if (currentDropHintIndex !== indexToUpdate && indexToUpdate >= 0) {
          _this._resetDropHints();

          _this._updateDropHintElement(_this._dropHintDetails[indexToUpdate].dropHintElementRef, 'inline-block');

          _this._currentDropHintIndex = indexToUpdate;
        }
      }
    };

    _this._renderColumnSizer = function (_a) {
      var _b;

      var columnIndex = _a.columnIndex;
      var _c = _this.props.columns,
          columns = _c === void 0 ? NO_COLUMNS : _c;
      var column = columns[columnIndex];
      var columnResizeDetails = _this.state.columnResizeDetails;
      var classNames = _this._classNames;
      return column.isResizable ? React.createElement("div", {
        key: column.key + "_sizer",
        "aria-hidden": true,
        role: "button",
        "data-is-focusable": false,
        onClick: _stopPropagation,
        "data-sizer-index": columnIndex,
        onBlur: _this._onSizerBlur,
        className: css(classNames.cellSizer, columnIndex < columns.length - 1 ? classNames.cellSizerStart : classNames.cellSizerEnd, (_b = {}, _b[classNames.cellIsResizing] = columnResizeDetails && columnResizeDetails.columnIndex === columnIndex, _b)),
        onDoubleClick: _this._onSizerDoubleClick.bind(_this, columnIndex)
      }) : null;
    };

    _this._onRenderColumnHeaderTooltip = function (tooltipHostProps) {
      return React.createElement("span", {
        className: tooltipHostProps.hostClassName
      }, tooltipHostProps.children);
    };
    /**
     * Called when the select all toggle is clicked.
     */


    _this._onSelectAllClicked = function () {
      var selection = _this.props.selection;

      if (selection) {
        selection.toggleAllSelected();
      }
    };

    _this._onRootMouseDown = function (ev) {
      var columnIndexAttr = ev.target.getAttribute('data-sizer-index');
      var columnIndex = Number(columnIndexAttr);
      var _a = _this.props.columns,
          columns = _a === void 0 ? NO_COLUMNS : _a;

      if (columnIndexAttr === null || ev.button !== MOUSEDOWN_PRIMARY_BUTTON$2) {
        // Ignore anything except the primary button.
        return;
      }

      _this.setState({
        columnResizeDetails: {
          columnIndex: columnIndex,
          columnMinWidth: columns[columnIndex].calculatedWidth,
          originX: ev.clientX
        }
      });

      ev.preventDefault();
      ev.stopPropagation();
    };

    _this._onRootMouseMove = function (ev) {
      var _a = _this.state,
          columnResizeDetails = _a.columnResizeDetails,
          isSizing = _a.isSizing;

      if (columnResizeDetails && !isSizing && ev.clientX !== columnResizeDetails.originX) {
        _this.setState({
          isSizing: true
        });
      }
    };

    _this._onRootRef = function (focusZone) {
      if (focusZone) {
        // Need to resolve the actual DOM node, not the component.
        // The element itself will be used for drag/drop and focusing.
        _this._rootElement = ReactDOM.findDOMNode(focusZone);
      } else {
        _this._rootElement = undefined;
      }
    };

    _this._onRootKeyDown = function (ev) {
      var _a = _this.state,
          columnResizeDetails = _a.columnResizeDetails,
          isSizing = _a.isSizing;
      var _b = _this.props,
          _c = _b.columns,
          columns = _c === void 0 ? NO_COLUMNS : _c,
          onColumnResized = _b.onColumnResized;
      var columnIndexAttr = ev.target.getAttribute('data-sizer-index');

      if (!columnIndexAttr || isSizing) {
        return;
      }

      var columnIndex = Number(columnIndexAttr);

      if (!columnResizeDetails) {
        // tslint:disable-next-line:deprecation
        if (ev.which === KeyCodes.enter) {
          _this.setState({
            columnResizeDetails: {
              columnIndex: columnIndex,
              columnMinWidth: columns[columnIndex].calculatedWidth
            }
          });

          ev.preventDefault();
          ev.stopPropagation();
        }
      } else {
        var increment = void 0; // tslint:disable-next-line:deprecation

        if (ev.which === KeyCodes.enter) {
          _this.setState({
            columnResizeDetails: undefined
          });

          ev.preventDefault();
          ev.stopPropagation(); // tslint:disable-next-line:deprecation
        } else if (ev.which === KeyCodes.left) {
          increment = getRTL$1(_this.props.theme) ? 1 : -1; // tslint:disable-next-line:deprecation
        } else if (ev.which === KeyCodes.right) {
          increment = getRTL$1(_this.props.theme) ? -1 : 1;
        }

        if (increment) {
          if (!ev.shiftKey) {
            increment *= 10;
          }

          _this.setState({
            columnResizeDetails: _assign(_assign({}, columnResizeDetails), {
              columnMinWidth: columnResizeDetails.columnMinWidth + increment
            })
          });

          if (onColumnResized) {
            onColumnResized(columns[columnIndex], columnResizeDetails.columnMinWidth + increment, columnIndex);
          }

          ev.preventDefault();
          ev.stopPropagation();
        }
      }
    };
    /**
     * mouse move event handler in the header
     * it will set isSizing state to true when user clicked on the sizer and move the mouse.
     *
     * @param ev - mouse move event
     */


    _this._onSizerMouseMove = function (ev) {
      var // use buttons property here since ev.button in some edge case is not upding well during the move.
      // but firefox doesn't support it, so we set the default value when it is not defined.
      buttons = ev.buttons;
      var _a = _this.props,
          onColumnIsSizingChanged = _a.onColumnIsSizingChanged,
          onColumnResized = _a.onColumnResized,
          _b = _a.columns,
          columns = _b === void 0 ? NO_COLUMNS : _b;
      var columnResizeDetails = _this.state.columnResizeDetails;

      if (buttons !== undefined && buttons !== MOUSEMOVE_PRIMARY_BUTTON$1) {
        // cancel mouse down event and return early when the primary button is not pressed
        _this._onSizerMouseUp(ev);

        return;
      }

      if (ev.clientX !== columnResizeDetails.originX) {
        if (onColumnIsSizingChanged) {
          onColumnIsSizingChanged(columns[columnResizeDetails.columnIndex], true);
        }
      }

      if (onColumnResized) {
        var movement = ev.clientX - columnResizeDetails.originX;

        if (getRTL$1(_this.props.theme)) {
          movement = -movement;
        }

        onColumnResized(columns[columnResizeDetails.columnIndex], columnResizeDetails.columnMinWidth + movement, columnResizeDetails.columnIndex);
      }
    };

    _this._onSizerBlur = function (ev) {
      var columnResizeDetails = _this.state.columnResizeDetails;

      if (columnResizeDetails) {
        _this.setState({
          columnResizeDetails: undefined,
          isSizing: false
        });
      }
    };
    /**
     * mouse up event handler in the header
     * clear the resize related state.
     * This is to ensure we can catch double click event
     *
     * @param ev - mouse up event
     */


    _this._onSizerMouseUp = function (ev) {
      var _a = _this.props,
          _b = _a.columns,
          columns = _b === void 0 ? NO_COLUMNS : _b,
          onColumnIsSizingChanged = _a.onColumnIsSizingChanged;
      var columnResizeDetails = _this.state.columnResizeDetails;

      _this.setState({
        columnResizeDetails: undefined,
        isSizing: false
      });

      if (onColumnIsSizingChanged) {
        onColumnIsSizingChanged(columns[columnResizeDetails.columnIndex], false);
      }
    };

    _this._onToggleCollapseAll = function () {
      var onToggleCollapseAll = _this.props.onToggleCollapseAll;
      var newCollapsed = !_this.state.isAllCollapsed;

      _this.setState({
        isAllCollapsed: newCollapsed
      });

      if (onToggleCollapseAll) {
        onToggleCollapseAll(newCollapsed);
      }
    };

    initializeComponentRef(_this);
    _this._events = new EventGroup(_this);
    _this.state = {
      columnResizeDetails: undefined,
      isAllCollapsed: _this.props.isAllCollapsed,
      isAllSelected: !!_this.props.selection && _this.props.selection.isAllSelected()
    };
    _this._onDropIndexInfo = {
      sourceIndex: -1,
      targetIndex: -1
    };
    _this._id = getId('header');
    _this._currentDropHintIndex = -1; // The drag drop handler won't do any work until subscribe() is called,
    // so always set it up for convenience

    _this._dragDropHelper = new DragDropHelper({
      selection: {
        getSelection: function getSelection() {
          return;
        }
      },
      minimumPixelsForDrag: _this.props.minimumPixelsForDrag
    });
    return _this;
  }

  DetailsHeaderBase.prototype.componentDidMount = function () {
    var selection = this.props.selection;

    this._events.on(selection, SELECTION_CHANGE, this._onSelectionChanged); // We need to use native on this to prevent MarqueeSelection from handling the event before us.


    this._events.on(this._rootElement, 'mousedown', this._onRootMouseDown);

    this._events.on(this._rootElement, 'keydown', this._onRootKeyDown);

    if (this._getColumnReorderProps()) {
      this._subscriptionObject = this._dragDropHelper.subscribe(this._rootElement, this._events, this._getHeaderDragDropOptions());
    }
  };

  DetailsHeaderBase.prototype.componentDidUpdate = function (prevProps) {
    if (this._getColumnReorderProps()) {
      if (!this._subscriptionObject) {
        this._subscriptionObject = this._dragDropHelper.subscribe(this._rootElement, this._events, this._getHeaderDragDropOptions());
      }
    } else if (this._subscriptionObject) {
      this._subscriptionObject.dispose();

      delete this._subscriptionObject;
    }

    if (this.props !== prevProps && this._onDropIndexInfo.sourceIndex >= 0 && this._onDropIndexInfo.targetIndex >= 0) {
      var _a = prevProps.columns,
          previousColumns = _a === void 0 ? NO_COLUMNS : _a;
      var _b = this.props.columns,
          columns = _b === void 0 ? NO_COLUMNS : _b;

      if (previousColumns[this._onDropIndexInfo.sourceIndex].key === columns[this._onDropIndexInfo.targetIndex].key) {
        this._onDropIndexInfo = {
          sourceIndex: -1,
          targetIndex: -1
        };
      }
    }

    if (this.props.isAllCollapsed !== prevProps.isAllCollapsed) {
      this.setState({
        isAllCollapsed: this.props.isAllCollapsed
      });
    }
  };

  DetailsHeaderBase.prototype.componentWillUnmount = function () {
    if (this._subscriptionObject) {
      this._subscriptionObject.dispose();

      delete this._subscriptionObject;
    }

    this._dragDropHelper.dispose();

    this._events.dispose();
  };

  DetailsHeaderBase.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        _b = _a.columns,
        columns = _b === void 0 ? NO_COLUMNS : _b,
        ariaLabel = _a.ariaLabel,
        ariaLabelForToggleAllGroupsButton = _a.ariaLabelForToggleAllGroupsButton,
        ariaLabelForSelectAllCheckbox = _a.ariaLabelForSelectAllCheckbox,
        selectAllVisibility = _a.selectAllVisibility,
        ariaLabelForSelectionColumn = _a.ariaLabelForSelectionColumn,
        indentWidth = _a.indentWidth,
        _c = _a.rowWidth,
        rowWidth = _c === void 0 ? 0 : _c,
        onColumnClick = _a.onColumnClick,
        onColumnContextMenu = _a.onColumnContextMenu,
        _d = _a.onRenderColumnHeaderTooltip,
        onRenderColumnHeaderTooltip = _d === void 0 ? this._onRenderColumnHeaderTooltip : _d,
        styles = _a.styles,
        selectionMode = _a.selectionMode,
        theme = _a.theme,
        onRenderDetailsCheckbox = _a.onRenderDetailsCheckbox,
        groupNestingDepth = _a.groupNestingDepth,
        useFastIcons = _a.useFastIcons,
        checkboxVisibility = _a.checkboxVisibility,
        className = _a.className;
    var _e = this.state,
        isAllSelected = _e.isAllSelected,
        columnResizeDetails = _e.columnResizeDetails,
        isSizing = _e.isSizing,
        isAllCollapsed = _e.isAllCollapsed;
    var showCheckbox = selectAllVisibility !== SelectAllVisibility.none;
    var isCheckboxHidden = selectAllVisibility === SelectAllVisibility.hidden;
    var isCheckboxAlwaysVisible = checkboxVisibility === CheckboxVisibility.always;

    var columnReorderProps = this._getColumnReorderProps();

    var frozenColumnCountFromStart = columnReorderProps && columnReorderProps.frozenColumnCountFromStart ? columnReorderProps.frozenColumnCountFromStart : 0;
    var frozenColumnCountFromEnd = columnReorderProps && columnReorderProps.frozenColumnCountFromEnd ? columnReorderProps.frozenColumnCountFromEnd : 0;
    this._classNames = getClassNames$d(styles, {
      theme: theme,
      isAllSelected: isAllSelected,
      isSelectAllHidden: selectAllVisibility === SelectAllVisibility.hidden,
      isResizingColumn: !!columnResizeDetails && isSizing,
      isSizing: isSizing,
      isAllCollapsed: isAllCollapsed,
      isCheckboxHidden: isCheckboxHidden,
      className: className
    });
    var classNames = this._classNames;
    var IconComponent = useFastIcons ? FontIcon : Icon;
    var isRTL = getRTL$1(theme);
    return React.createElement(FocusZone, {
      role: "row",
      "aria-label": ariaLabel,
      className: classNames.root,
      componentRef: this._rootComponent,
      ref: this._onRootRef,
      onMouseMove: this._onRootMouseMove,
      "data-automationid": "DetailsHeader",
      style: {
        minWidth: rowWidth
      },
      direction: FocusZoneDirection.horizontal
    }, showCheckbox ? [React.createElement("div", {
      key: "__checkbox",
      className: classNames.cellIsCheck,
      "aria-labelledby": this._id + "-check",
      onClick: !isCheckboxHidden ? this._onSelectAllClicked : undefined,
      "aria-colindex": 1,
      role: 'columnheader'
    }, onRenderColumnHeaderTooltip({
      hostClassName: classNames.checkTooltip,
      id: this._id + "-checkTooltip",
      setAriaDescribedBy: false,
      content: ariaLabelForSelectAllCheckbox,
      children: React.createElement(DetailsRowCheck, {
        id: this._id + "-check",
        "aria-label": selectionMode === SelectionMode.multiple ? ariaLabelForSelectAllCheckbox : ariaLabelForSelectionColumn,
        "aria-describedby": !isCheckboxHidden ? ariaLabelForSelectAllCheckbox && !this.props.onRenderColumnHeaderTooltip ? this._id + "-checkTooltip" : undefined : ariaLabelForSelectionColumn && !this.props.onRenderColumnHeaderTooltip ? this._id + "-checkTooltip" : undefined,
        "data-is-focusable": !isCheckboxHidden || undefined,
        isHeader: true,
        selected: isAllSelected,
        anySelected: false,
        canSelect: !isCheckboxHidden,
        className: classNames.check,
        onRenderDetailsCheckbox: onRenderDetailsCheckbox,
        useFastIcons: useFastIcons,
        isVisible: isCheckboxAlwaysVisible
      })
    }, this._onRenderColumnHeaderTooltip)), !this.props.onRenderColumnHeaderTooltip ? ariaLabelForSelectAllCheckbox && !isCheckboxHidden ? React.createElement("label", {
      key: "__checkboxLabel",
      id: this._id + "-checkTooltip",
      className: classNames.accessibleLabel,
      "aria-hidden": true
    }, ariaLabelForSelectAllCheckbox) : ariaLabelForSelectionColumn && isCheckboxHidden ? React.createElement("label", {
      key: "__checkboxLabel",
      id: this._id + "-checkTooltip",
      className: classNames.accessibleLabel,
      "aria-hidden": true
    }, ariaLabelForSelectionColumn) : null : null] : null, groupNestingDepth > 0 && this.props.collapseAllVisibility === CollapseAllVisibility.visible ? React.createElement("div", {
      className: classNames.cellIsGroupExpander,
      onClick: this._onToggleCollapseAll,
      "data-is-focusable": true,
      "aria-label": ariaLabelForToggleAllGroupsButton,
      "aria-expanded": !isAllCollapsed,
      role: ariaLabelForToggleAllGroupsButton ? 'button' : undefined
    }, React.createElement(IconComponent, {
      className: classNames.collapseButton,
      iconName: isRTL ? 'ChevronLeftMed' : 'ChevronRightMed'
    })) : null, React.createElement(GroupSpacer, {
      indentWidth: indentWidth,
      count: groupNestingDepth - 1
    }), columns.map(function (column, columnIndex) {
      var _isDraggable = columnReorderProps ? columnIndex >= frozenColumnCountFromStart && columnIndex < columns.length - frozenColumnCountFromEnd : false;

      return [columnReorderProps && (_isDraggable || columnIndex === columns.length - frozenColumnCountFromEnd) && _this._renderDropHint(columnIndex), React.createElement(DetailsColumn, {
        column: column,
        styles: column.styles,
        key: column.key,
        columnIndex: (showCheckbox ? 2 : 1) + columnIndex,
        parentId: _this._id,
        isDraggable: _isDraggable,
        updateDragInfo: _this._updateDragInfo,
        dragDropHelper: _this._dragDropHelper,
        onColumnClick: onColumnClick,
        onColumnContextMenu: onColumnContextMenu,
        // Do not render tooltips by default, but allow for override via props.
        onRenderColumnHeaderTooltip: _this.props.onRenderColumnHeaderTooltip,
        isDropped: _this._onDropIndexInfo.targetIndex === columnIndex,
        cellStyleProps: _this.props.cellStyleProps,
        useFastIcons: useFastIcons
      }), _this._renderColumnDivider(columnIndex)];
    }), columnReorderProps && frozenColumnCountFromEnd === 0 && this._renderDropHint(columns.length), isSizing && React.createElement(Layer, null, React.createElement("div", {
      className: classNames.sizingOverlay,
      onMouseMove: this._onSizerMouseMove,
      onMouseUp: this._onSizerMouseUp
    })));
  };
  /** Set focus to the active thing in the focus area. */


  DetailsHeaderBase.prototype.focus = function () {
    return Boolean(this._rootComponent.current && this._rootComponent.current.focus());
  };
  /**
   * Gets column reorder props from this.props. If the calling code is part of setting up or
   * handling drag/drop events, it's safe to assume that this method's return value is defined
   * (because drag/drop handling will only be set up if reorder props are given).
   */


  DetailsHeaderBase.prototype._getColumnReorderProps = function () {
    var _a = this.props,
        columnReorderOptions = _a.columnReorderOptions,
        columnReorderProps = _a.columnReorderProps;
    return columnReorderProps || columnReorderOptions && _assign(_assign({}, columnReorderOptions), {
      onColumnDragEnd: undefined
    });
  };

  DetailsHeaderBase.prototype._getHeaderDragDropOptions = function () {
    var options = {
      selectionIndex: 1,
      context: {
        data: this,
        index: 0
      },
      canDrag: function canDrag() {
        return false;
      },
      canDrop: function canDrop() {
        return true;
      },
      onDragStart: function onDragStart() {
        return undefined;
      },
      updateDropState: this._updateDroppingState,
      onDrop: this._onDrop,
      onDragEnd: function onDragEnd() {
        return undefined;
      },
      onDragOver: this._onDragOver
    };
    return options;
  };

  DetailsHeaderBase.prototype._isValidCurrentDropHintIndex = function () {
    return this._currentDropHintIndex >= 0;
  };
  /**
   * @returns whether or not the "Select All" checkbox column is hidden.
   */


  DetailsHeaderBase.prototype._isCheckboxColumnHidden = function () {
    var _a = this.props,
        selectionMode = _a.selectionMode,
        checkboxVisibility = _a.checkboxVisibility;
    return selectionMode === SelectionMode.none || checkboxVisibility === CheckboxVisibility.hidden;
  };

  DetailsHeaderBase.prototype._resetDropHints = function () {
    if (this._currentDropHintIndex >= 0) {
      this._updateDropHintElement(this._dropHintDetails[this._currentDropHintIndex].dropHintElementRef, 'none');

      this._currentDropHintIndex = -1;
    }
  };

  DetailsHeaderBase.prototype._updateDropHintElement = function (element, displayProperty) {
    element.childNodes[1].style.display = displayProperty;
    element.childNodes[0].style.display = displayProperty;
  };

  DetailsHeaderBase.prototype._isEventOnHeader = function (event) {
    if (this._rootElement) {
      var clientRect = this._rootElement.getBoundingClientRect();

      if (event.clientX > clientRect.left && event.clientX < clientRect.right && event.clientY > clientRect.top && event.clientY < clientRect.bottom) {
        return ColumnDragEndLocation.header;
      }
    }
  };

  DetailsHeaderBase.prototype._renderColumnDivider = function (columnIndex) {
    var _a = this.props.columns,
        columns = _a === void 0 ? NO_COLUMNS : _a;
    var column = columns[columnIndex];
    var onRenderDivider = column.onRenderDivider;
    return onRenderDivider ? onRenderDivider({
      column: column,
      columnIndex: columnIndex
    }, this._renderColumnSizer) : this._renderColumnSizer({
      column: column,
      columnIndex: columnIndex
    });
  };

  DetailsHeaderBase.prototype._renderDropHint = function (dropHintIndex) {
    var classNames = this._classNames;
    var IconComponent = this.props.useFastIcons ? FontIcon : Icon;
    return React.createElement("div", {
      key: 'dropHintKey',
      className: classNames.dropHintStyle,
      id: "columnDropHint_" + dropHintIndex
    }, React.createElement(IconComponent, {
      key: "dropHintCircleKey",
      "aria-hidden": true,
      "data-is-focusable": false,
      "data-sizer-index": dropHintIndex,
      className: classNames.dropHintCaretStyle,
      iconName: 'CircleShapeSolid'
    }), React.createElement("div", {
      key: "dropHintLineKey",
      "aria-hidden": true,
      "data-is-focusable": false,
      "data-sizer-index": dropHintIndex,
      className: classNames.dropHintLineStyle
    }));
  };
  /**
   * double click on the column sizer will auto ajust column width
   * to fit the longest content among current rendered rows.
   *
   * @param columnIndex - index of the column user double clicked
   * @param ev - mouse double click event
   */


  DetailsHeaderBase.prototype._onSizerDoubleClick = function (columnIndex, ev) {
    var _a = this.props,
        onColumnAutoResized = _a.onColumnAutoResized,
        _b = _a.columns,
        columns = _b === void 0 ? NO_COLUMNS : _b;

    if (onColumnAutoResized) {
      onColumnAutoResized(columns[columnIndex], columnIndex);
    }
  };

  DetailsHeaderBase.prototype._onSelectionChanged = function () {
    var isAllSelected = !!this.props.selection && this.props.selection.isAllSelected();

    if (this.state.isAllSelected !== isAllSelected) {
      this.setState({
        isAllSelected: isAllSelected
      });
    }
  };

  DetailsHeaderBase.defaultProps = {
    selectAllVisibility: SelectAllVisibility.visible,
    collapseAllVisibility: CollapseAllVisibility.visible,
    useFastIcons: true
  };
  return DetailsHeaderBase;
}(React.Component);

function _liesBetween(rtl, target, left, right) {
  return rtl ? target <= left && target >= right : target >= left && target <= right;
}

function _isBefore(rtl, a, b) {
  return rtl ? a >= b : a <= b;
}

function _isAfter(rtl, a, b) {
  return rtl ? a <= b : a >= b;
}

function _stopPropagation(ev) {
  ev.stopPropagation();
}

var DetailsHeader = styled(DetailsHeaderBase, getStyles$7, undefined, {
  scope: 'DetailsHeader'
});

var getCellText = function getCellText(item, column) {
  var value = item && column && column.fieldName ? item[column.fieldName] : '';

  if (value === null || value === undefined) {
    value = '';
  }

  if (typeof value === 'boolean') {
    return value.toString();
  }

  return value;
};
/**
 * Component for rendering a row's cells in a `DetailsList`.
 *
 * {@docCategory DetailsList}
 */


var DetailsRowFields = function DetailsRowFields(props) {
  var columns = props.columns,
      columnStartIndex = props.columnStartIndex,
      rowClassNames = props.rowClassNames,
      _a = props.cellStyleProps,
      cellStyleProps = _a === void 0 ? DEFAULT_CELL_STYLE_PROPS : _a,
      item = props.item,
      itemIndex = props.itemIndex,
      onRenderItemColumn = props.onRenderItemColumn,
      getCellValueKey = props.getCellValueKey,
      cellsByColumn = props.cellsByColumn,
      enableUpdateAnimations = props.enableUpdateAnimations;
  var cellValueKeysRef = React.useRef();
  var cellValueKeys = cellValueKeysRef.current || (cellValueKeysRef.current = {});
  return React.createElement("div", {
    className: rowClassNames.fields,
    "data-automationid": "DetailsRowFields",
    role: "presentation"
  }, columns.map(function (column, columnIndex) {
    var width = typeof column.calculatedWidth === 'undefined' ? 'auto' : column.calculatedWidth + cellStyleProps.cellLeftPadding + cellStyleProps.cellRightPadding + (column.isPadded ? cellStyleProps.cellExtraRightPadding : 0);
    var _a = column.onRender,
        onRender = _a === void 0 ? onRenderItemColumn : _a,
        _b = column.getValueKey,
        getValueKey = _b === void 0 ? getCellValueKey : _b;
    var cellContentsRender = cellsByColumn && column.key in cellsByColumn ? cellsByColumn[column.key] : onRender ? onRender(item, itemIndex, column) : getCellText(item, column);
    var previousValueKey = cellValueKeys[column.key];
    var cellValueKey = enableUpdateAnimations && getValueKey ? getValueKey(item, itemIndex, column) : undefined;
    var showAnimation = false;

    if (cellValueKey !== undefined && previousValueKey !== undefined && cellValueKey !== previousValueKey) {
      showAnimation = true;
    }

    cellValueKeys[column.key] = cellValueKey; // generate a key that auto-dirties when content changes, to force the container to re-render,
    // to trigger animation

    var key = "" + column.key + (cellValueKey !== undefined ? "-" + cellValueKey : '');
    return React.createElement("div", {
      key: key,
      role: column.isRowHeader ? 'rowheader' : 'gridcell',
      "aria-readonly": true,
      "aria-colindex": columnIndex + columnStartIndex + 1,
      className: css(column.className, column.isMultiline && rowClassNames.isMultiline, column.isRowHeader && rowClassNames.isRowHeader, rowClassNames.cell, column.isPadded ? rowClassNames.cellPadded : rowClassNames.cellUnpadded, showAnimation && rowClassNames.cellAnimation),
      style: {
        width: width
      },
      "data-automationid": "DetailsRowCell",
      "data-automation-key": column.key
    }, cellContentsRender);
  }));
};

var getClassNames$e = classNamesFunction();
var DEFAULT_DROPPING_CSS_CLASS$1 = 'is-dropping';
var NO_COLUMNS$1 = [];

var DetailsRowBase =
/** @class */
function (_super) {
  __extends(DetailsRowBase, _super);

  function DetailsRowBase(props) {
    var _this = _super.call(this, props) || this;

    _this._cellMeasurer = React.createRef();
    _this._focusZone = React.createRef();

    _this._onSelectionChanged = function () {
      var selectionState = _this._getSelectionState(_this.props);

      if (!shallowCompare(selectionState, _this.state.selectionState)) {
        _this.setState({
          selectionState: selectionState
        });
      }
    };

    _this._onRootRef = function (focusZone) {
      if (focusZone) {
        // Need to resolve the actual DOM node, not the component.
        // The element itself will be used for drag/drop and focusing.
        _this._root = ReactDOM.findDOMNode(focusZone);
      } else {
        _this._root = undefined;
      }
    };
    /**
     * update isDropping state based on the input value, which is used to change style during drag and drop
     *
     * when change to true, that means drag enter. we will add default dropping class name
     * or the custom dropping class name (return result from onDragEnter) to the root elemet.
     *
     * when change to false, that means drag leave. we will remove the dropping class name from root element.
     *
     * @param newValue - New isDropping state value
     * @param event - The event trigger dropping state change which can be dragenter, dragleave etc
     */


    _this._updateDroppingState = function (newValue, event) {
      var isDropping = _this.state.isDropping;
      var _a = _this.props,
          dragDropEvents = _a.dragDropEvents,
          item = _a.item;

      if (!newValue) {
        if (dragDropEvents.onDragLeave) {
          dragDropEvents.onDragLeave(item, event);
        }
      } else if (dragDropEvents.onDragEnter) {
        _this._droppingClassNames = dragDropEvents.onDragEnter(item, event);
      }

      if (isDropping !== newValue) {
        _this.setState({
          isDropping: newValue
        });
      }
    };

    initializeComponentRef(_this);
    _this._events = new EventGroup(_this);
    _this.state = {
      selectionState: _this._getSelectionState(props),
      columnMeasureInfo: undefined,
      isDropping: false
    };
    _this._droppingClassNames = '';
    return _this;
  }

  DetailsRowBase.prototype.componentDidMount = function () {
    var dragDropHelper = this.props.dragDropHelper;

    if (dragDropHelper) {
      this._dragDropSubscription = dragDropHelper.subscribe(this._root, this._events, this._getRowDragDropOptions());
    }

    this._events.on(this.props.selection, SELECTION_CHANGE, this._onSelectionChanged);

    if (this.props.onDidMount && this.props.item) {
      // If the item appears later, we should wait for it before calling this method.
      this._onDidMountCalled = true;
      this.props.onDidMount(this);
    }
  };

  DetailsRowBase.prototype.componentDidUpdate = function (previousProps) {
    var state = this.state;
    var _a = this.props,
        item = _a.item,
        onDidMount = _a.onDidMount;
    var columnMeasureInfo = state.columnMeasureInfo;

    if (this.props.itemIndex !== previousProps.itemIndex || this.props.item !== previousProps.item || this.props.dragDropHelper !== previousProps.dragDropHelper) {
      if (this._dragDropSubscription) {
        this._dragDropSubscription.dispose();

        delete this._dragDropSubscription;
      }

      if (this.props.dragDropHelper) {
        this._dragDropSubscription = this.props.dragDropHelper.subscribe(this._root, this._events, this._getRowDragDropOptions());
      }
    }

    if (columnMeasureInfo && columnMeasureInfo.index >= 0 && this._cellMeasurer.current) {
      var newWidth = this._cellMeasurer.current.getBoundingClientRect().width;

      columnMeasureInfo.onMeasureDone(newWidth);
      this.setState({
        columnMeasureInfo: undefined
      });
    }

    if (item && onDidMount && !this._onDidMountCalled) {
      this._onDidMountCalled = true;
      onDidMount(this);
    }
  };

  DetailsRowBase.prototype.componentWillUnmount = function () {
    var _a = this.props,
        item = _a.item,
        onWillUnmount = _a.onWillUnmount; // Only call the onWillUnmount callback if we have an item.

    if (onWillUnmount && item) {
      onWillUnmount(this);
    }

    if (this._dragDropSubscription) {
      this._dragDropSubscription.dispose();

      delete this._dragDropSubscription;
    }

    this._events.dispose();
  }; // tslint:disable-next-line function-name


  DetailsRowBase.prototype.UNSAFE_componentWillReceiveProps = function (newProps) {
    this.setState({
      selectionState: this._getSelectionState(newProps)
    });
  };

  DetailsRowBase.prototype.shouldComponentUpdate = function (nextProps, nextState) {
    if (this.props.useReducedRowRenderer) {
      var newSelectionState = this._getSelectionState(nextProps);

      if (this.state.selectionState.isSelected !== newSelectionState.isSelected) {
        return true;
      }

      return !shallowCompare(this.props, nextProps);
    } else {
      return true;
    }
  };

  DetailsRowBase.prototype.render = function () {
    var _a = this.props,
        className = _a.className,
        _b = _a.columns,
        columns = _b === void 0 ? NO_COLUMNS$1 : _b,
        dragDropEvents = _a.dragDropEvents,
        item = _a.item,
        itemIndex = _a.itemIndex,
        _c = _a.onRenderCheck,
        onRenderCheck = _c === void 0 ? this._onRenderCheck : _c,
        onRenderDetailsCheckbox = _a.onRenderDetailsCheckbox,
        onRenderItemColumn = _a.onRenderItemColumn,
        getCellValueKey = _a.getCellValueKey,
        selectionMode = _a.selectionMode,
        _d = _a.rowWidth,
        rowWidth = _d === void 0 ? 0 : _d,
        checkboxVisibility = _a.checkboxVisibility,
        getRowAriaLabel = _a.getRowAriaLabel,
        getRowAriaDescribedBy = _a.getRowAriaDescribedBy,
        checkButtonAriaLabel = _a.checkButtonAriaLabel,
        checkboxCellClassName = _a.checkboxCellClassName,

    /** Alias rowFieldsAs as RowFields and default to DetailsRowFields if rowFieldsAs does not exist */
    _e = _a.rowFieldsAs,

    /** Alias rowFieldsAs as RowFields and default to DetailsRowFields if rowFieldsAs does not exist */
    RowFields = _e === void 0 ? DetailsRowFields : _e,
        selection = _a.selection,
        indentWidth = _a.indentWidth,
        enableUpdateAnimations = _a.enableUpdateAnimations,
        compact = _a.compact,
        theme = _a.theme,
        styles = _a.styles,
        cellsByColumn = _a.cellsByColumn,
        groupNestingDepth = _a.groupNestingDepth,
        _f = _a.useFastIcons,
        useFastIcons = _f === void 0 ? true : _f,
        cellStyleProps = _a.cellStyleProps;
    var _g = this.state,
        columnMeasureInfo = _g.columnMeasureInfo,
        isDropping = _g.isDropping;
    var _h = this.state.selectionState,
        _j = _h.isSelected,
        isSelected = _j === void 0 ? false : _j,
        _k = _h.isSelectionModal,
        isSelectionModal = _k === void 0 ? false : _k;
    var isDraggable = dragDropEvents ? !!(dragDropEvents.canDrag && dragDropEvents.canDrag(item)) : undefined;
    var droppingClassName = isDropping ? this._droppingClassNames || DEFAULT_DROPPING_CSS_CLASS$1 : '';
    var ariaLabel = getRowAriaLabel ? getRowAriaLabel(item) : undefined;
    var ariaDescribedBy = getRowAriaDescribedBy ? getRowAriaDescribedBy(item) : undefined;
    var canSelect = !!selection && selection.canSelectItem(item, itemIndex);
    var isContentUnselectable = selectionMode === SelectionMode.multiple;
    var showCheckbox = selectionMode !== SelectionMode.none && checkboxVisibility !== CheckboxVisibility.hidden;
    var ariaSelected = selectionMode === SelectionMode.none ? undefined : isSelected;
    this._classNames = _assign(_assign({}, this._classNames), getClassNames$e(styles, {
      theme: theme,
      isSelected: isSelected,
      canSelect: !isContentUnselectable,
      anySelected: isSelectionModal,
      checkboxCellClassName: checkboxCellClassName,
      droppingClassName: droppingClassName,
      className: className,
      compact: compact,
      enableUpdateAnimations: enableUpdateAnimations,
      cellStyleProps: cellStyleProps
    }));
    var rowClassNames = {
      isMultiline: this._classNames.isMultiline,
      isRowHeader: this._classNames.isRowHeader,
      cell: this._classNames.cell,
      cellAnimation: this._classNames.cellAnimation,
      cellPadded: this._classNames.cellPadded,
      cellUnpadded: this._classNames.cellUnpadded,
      fields: this._classNames.fields
    }; // Only re-assign rowClassNames when classNames have changed.
    // Otherwise, they will cause DetailsRowFields to unnecessarily
    // re-render, see https://github.com/microsoft/fluentui/pull/8799.
    // Refactor DetailsRowFields to generate own styles to remove need for this.

    if (!shallowCompare(this._rowClassNames || {}, rowClassNames)) {
      this._rowClassNames = rowClassNames;
    }

    var rowFields = React.createElement(RowFields, {
      rowClassNames: this._rowClassNames,
      cellsByColumn: cellsByColumn,
      columns: columns,
      item: item,
      itemIndex: itemIndex,
      columnStartIndex: showCheckbox ? 1 : 0,
      onRenderItemColumn: onRenderItemColumn,
      getCellValueKey: getCellValueKey,
      enableUpdateAnimations: enableUpdateAnimations,
      cellStyleProps: cellStyleProps
    });
    return React.createElement(FocusZone, _assign({
      "data-is-focusable": true
    }, getNativeProps(this.props, divProperties), typeof isDraggable === 'boolean' ? {
      'data-is-draggable': isDraggable,
      draggable: isDraggable
    } : {}, {
      direction: FocusZoneDirection.horizontal,
      ref: this._onRootRef,
      componentRef: this._focusZone,
      role: "row",
      "aria-label": ariaLabel,
      "aria-describedby": ariaDescribedBy,
      className: this._classNames.root,
      "data-selection-index": itemIndex,
      "data-item-index": itemIndex,
      "aria-rowindex": itemIndex + 1,
      "data-automationid": "DetailsRow",
      style: {
        minWidth: rowWidth
      },
      "aria-selected": ariaSelected,
      allowFocusRoot: true
    }), showCheckbox && React.createElement("div", {
      role: "gridcell",
      "aria-colindex": 1,
      "data-selection-toggle": true,
      className: this._classNames.checkCell
    }, onRenderCheck({
      selected: isSelected,
      anySelected: isSelectionModal,
      'aria-label': checkButtonAriaLabel,
      canSelect: canSelect,
      compact: compact,
      className: this._classNames.check,
      theme: theme,
      isVisible: checkboxVisibility === CheckboxVisibility.always,
      onRenderDetailsCheckbox: onRenderDetailsCheckbox,
      useFastIcons: useFastIcons
    })), React.createElement(GroupSpacer, {
      indentWidth: indentWidth,
      count: groupNestingDepth - (this.props.collapseAllVisibility === CollapseAllVisibility.hidden ? 1 : 0)
    }), item && rowFields, columnMeasureInfo && React.createElement("span", {
      role: "presentation",
      className: css(this._classNames.cellMeasurer, this._classNames.cell),
      ref: this._cellMeasurer
    }, React.createElement(RowFields, {
      rowClassNames: this._rowClassNames,
      columns: [columnMeasureInfo.column],
      item: item,
      itemIndex: itemIndex,
      columnStartIndex: (showCheckbox ? 1 : 0) + columns.length,
      onRenderItemColumn: onRenderItemColumn,
      getCellValueKey: getCellValueKey
    })), React.createElement("span", {
      role: "checkbox",
      className: this._classNames.checkCover,
      "aria-checked": isSelected,
      "data-selection-toggle": true
    }));
  };
  /**
   * measure cell at index. and call the call back with the measured cell width when finish measure
   *
   * @param index - The cell index
   * @param onMeasureDone - The call back function when finish measure
   */


  DetailsRowBase.prototype.measureCell = function (index, onMeasureDone) {
    var _a = this.props.columns,
        columns = _a === void 0 ? NO_COLUMNS$1 : _a;

    var column = _assign({}, columns[index]);

    column.minWidth = 0;
    column.maxWidth = 999999;
    delete column.calculatedWidth;
    this.setState({
      columnMeasureInfo: {
        index: index,
        column: column,
        onMeasureDone: onMeasureDone
      }
    });
  };

  DetailsRowBase.prototype.focus = function (forceIntoFirstElement) {
    if (forceIntoFirstElement === void 0) {
      forceIntoFirstElement = false;
    }

    return !!this._focusZone.current && this._focusZone.current.focus(forceIntoFirstElement);
  };

  DetailsRowBase.prototype._onRenderCheck = function (props) {
    return React.createElement(DetailsRowCheck, _assign({}, props));
  };

  DetailsRowBase.prototype._getSelectionState = function (props) {
    var itemIndex = props.itemIndex,
        selection = props.selection;
    return {
      isSelected: !!selection && selection.isIndexSelected(itemIndex),
      isSelectionModal: !!selection && !!selection.isModal && selection.isModal()
    };
  };

  DetailsRowBase.prototype._getRowDragDropOptions = function () {
    var _a = this.props,
        item = _a.item,
        itemIndex = _a.itemIndex,
        dragDropEvents = _a.dragDropEvents,
        eventsToRegister = _a.eventsToRegister;
    var options = {
      eventMap: eventsToRegister,
      selectionIndex: itemIndex,
      context: {
        data: item,
        index: itemIndex
      },
      canDrag: dragDropEvents.canDrag,
      canDrop: dragDropEvents.canDrop,
      onDragStart: dragDropEvents.onDragStart,
      updateDropState: this._updateDroppingState,
      onDrop: dragDropEvents.onDrop,
      onDragEnd: dragDropEvents.onDragEnd
    };
    return options;
  };

  return DetailsRowBase;
}(React.Component);

var DetailsRow = styled(DetailsRowBase, getStyles$6, undefined, {
  scope: 'DetailsRow'
});

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

var RESIZE_DELAY$1 = 500;
var MAX_RESIZE_ATTEMPTS = 3;
/**
 * A decorator to update decorated component on viewport or window resize events.
 *
 * @param ComposedComponent decorated React component reference.
 */

function withViewport(ComposedComponent) {
  return (
    /** @class */
    function (_super) {
      __extends(WithViewportComponent, _super);

      function WithViewportComponent(props) {
        var _this = _super.call(this, props) || this;

        _this._root = React.createRef();

        _this._registerResizeObserver = function () {
          var win = getWindow(_this._root.current);
          _this._viewportResizeObserver = new win.ResizeObserver(_this._onAsyncResize);

          _this._viewportResizeObserver.observe(_this._root.current);
        };

        _this._unregisterResizeObserver = function () {
          if (_this._viewportResizeObserver) {
            _this._viewportResizeObserver.disconnect();

            delete _this._viewportResizeObserver;
          }
        };
        /* Note: using lambda here because decorators don't seem to work in decorators. */


        _this._updateViewport = function (withForceUpdate) {
          var viewport = _this.state.viewport;
          var viewportElement = _this._root.current;
          var scrollElement = findScrollableParent(viewportElement);
          var scrollRect = getRect(scrollElement);
          var clientRect = getRect(viewportElement);

          var updateComponent = function updateComponent() {
            if (withForceUpdate && _this._composedComponentInstance) {
              _this._composedComponentInstance.forceUpdate();
            }
          };

          var isSizeChanged = (clientRect && clientRect.width) !== viewport.width || (scrollRect && scrollRect.height) !== viewport.height;

          if (isSizeChanged && _this._resizeAttempts < MAX_RESIZE_ATTEMPTS && clientRect && scrollRect) {
            _this._resizeAttempts++;

            _this.setState({
              viewport: {
                width: clientRect.width,
                height: scrollRect.height
              }
            }, function () {
              _this._updateViewport(withForceUpdate);
            });
          } else {
            _this._resizeAttempts = 0;
            updateComponent();
          }
        };

        _this._async = new Async(_this);
        _this._events = new EventGroup(_this);
        _this._resizeAttempts = 0;
        _this.state = {
          viewport: {
            width: 0,
            height: 0
          }
        };
        return _this;
      }

      WithViewportComponent.prototype.componentDidMount = function () {
        var skipViewportMeasures = this.props.skipViewportMeasures;
        var win = getWindow(this._root.current);
        this._onAsyncResize = this._async.debounce(this._onAsyncResize, RESIZE_DELAY$1, {
          leading: false
        }); // ResizeObserver seems always fire even window is not resized. This is
        // particularly bad when skipViewportMeasures is set when optimizing fixed layout lists.
        // It will measure and update and re-render the entire list after list is fully rendered.
        // So fallback to listen to resize event when skipViewportMeasures is set.

        if (!skipViewportMeasures && this._isResizeObserverAvailable()) {
          this._registerResizeObserver();
        } else {
          this._events.on(win, 'resize', this._onAsyncResize);
        }

        if (!skipViewportMeasures) {
          this._updateViewport();
        }
      };

      WithViewportComponent.prototype.componentDidUpdate = function (newProps) {
        var oldSkipViewportMeasures = this.props.skipViewportMeasures;
        var newSkipViewportMeasures = newProps.skipViewportMeasures;
        var win = getWindow(this._root.current);

        if (oldSkipViewportMeasures !== newSkipViewportMeasures) {
          if (newSkipViewportMeasures) {
            this._unregisterResizeObserver();

            this._events.on(win, 'resize', this._onAsyncResize);
          } else if (!newSkipViewportMeasures && this._isResizeObserverAvailable()) {
            this._events.off(win, 'resize', this._onAsyncResize);

            this._registerResizeObserver();
          }
        }

        if (!!newSkipViewportMeasures) {
          this._updateViewport();
        }
      };

      WithViewportComponent.prototype.componentWillUnmount = function () {
        this._events.dispose();

        this._async.dispose();

        this._unregisterResizeObserver();
      };

      WithViewportComponent.prototype.render = function () {
        var viewport = this.state.viewport;
        var newViewport = viewport.width > 0 && viewport.height > 0 ? viewport : undefined;
        return React.createElement("div", {
          className: "ms-Viewport",
          ref: this._root,
          style: {
            minWidth: 1,
            minHeight: 1
          }
        }, React.createElement(ComposedComponent, _assign({
          ref: this._updateComposedComponentRef,
          viewport: newViewport
        }, this.props)));
      };

      WithViewportComponent.prototype.forceUpdate = function () {
        this._updateViewport(true);
      };

      WithViewportComponent.prototype._onAsyncResize = function () {
        this._updateViewport();
      };

      WithViewportComponent.prototype._isResizeObserverAvailable = function () {
        var win = getWindow(this._root.current);
        return win && win.ResizeObserver;
      };

      return WithViewportComponent;
    }(BaseDecorator)
  );
}

/**
 * Takes an array of groups and returns a count of the groups and all descendant groups.
 * @param groups - The array of groups to count.
 */

var GetGroupCount = function GetGroupCount(groups) {
  var total = 0;

  if (groups) {
    var remainingGroups = __spreadArrays(groups);

    var currentGroup = void 0;

    while (remainingGroups && remainingGroups.length > 0) {
      ++total;
      currentGroup = remainingGroups.pop();

      if (currentGroup && currentGroup.children) {
        remainingGroups.push.apply(remainingGroups, currentGroup.children);
      }
    }
  }

  return total;
};

var getClassNames$f = classNamesFunction();
var MIN_COLUMN_WIDTH = 100; // this is the global min width

var DEFAULT_RENDERED_WINDOWS_AHEAD$1 = 2;
var DEFAULT_RENDERED_WINDOWS_BEHIND$1 = 2;

var DetailsListBase =
/** @class */
function (_super) {
  __extends(DetailsListBase, _super);

  function DetailsListBase(props) {
    var _this = _super.call(this, props) || this;

    _this._root = React.createRef();
    _this._header = React.createRef();
    _this._groupedList = React.createRef();
    _this._list = React.createRef();
    _this._focusZone = React.createRef();
    _this._selectionZone = React.createRef();
    _this._sumColumnWidths = memoizeFunction(function (columns) {
      var totalWidth = 0;
      columns.forEach(function (column) {
        return totalWidth += column.calculatedWidth || column.minWidth;
      });
      return totalWidth;
    });

    _this._onRenderRow = function (props, defaultRender) {
      return React.createElement(DetailsRow, _assign({}, props));
    };

    _this._onRenderDetailsHeader = function (detailsHeaderProps, defaultRender) {
      return React.createElement(DetailsHeader, _assign({}, detailsHeaderProps));
    };

    _this._onRenderDetailsFooter = function (detailsFooterProps, defaultRender) {
      return null;
    };

    _this._onRenderListCell = function (nestingDepth) {
      return function (item, itemIndex) {
        return _this._onRenderCell(nestingDepth, item, itemIndex);
      };
    };

    _this._onRenderCell = function (nestingDepth, item, index) {
      var _a = _this.props,
          compact = _a.compact,
          dragDropEvents = _a.dragDropEvents,
          eventsToRegister = _a.rowElementEventMap,
          onRenderMissingItem = _a.onRenderMissingItem,
          onRenderItemColumn = _a.onRenderItemColumn,
          getCellValueKey = _a.getCellValueKey,
          _b = _a.selectionMode,
          selectionMode = _b === void 0 ? _this._selection.mode : _b,
          viewport = _a.viewport,
          checkboxVisibility = _a.checkboxVisibility,
          getRowAriaLabel = _a.getRowAriaLabel,
          getRowAriaDescribedBy = _a.getRowAriaDescribedBy,
          checkButtonAriaLabel = _a.checkButtonAriaLabel,
          checkboxCellClassName = _a.checkboxCellClassName,
          groupProps = _a.groupProps,
          useReducedRowRenderer = _a.useReducedRowRenderer,
          indentWidth = _a.indentWidth,
          _c = _a.cellStyleProps,
          cellStyleProps = _c === void 0 ? DEFAULT_CELL_STYLE_PROPS : _c,
          onRenderCheckbox = _a.onRenderCheckbox,
          enableUpdateAnimations = _a.enableUpdateAnimations,
          useFastIcons = _a.useFastIcons;
      var onRenderRow = _this.props.onRenderRow ? composeRenderFunction(_this.props.onRenderRow, _this._onRenderRow) : _this._onRenderRow;
      var collapseAllVisibility = groupProps && groupProps.collapseAllVisibility;
      var selection = _this._selection;
      var dragDropHelper = _this._dragDropHelper;
      var columns = _this.state.adjustedColumns;
      var rowProps = {
        item: item,
        itemIndex: index,
        compact: compact,
        columns: columns,
        groupNestingDepth: nestingDepth,
        selectionMode: selectionMode,
        selection: selection,
        onDidMount: _this._onRowDidMount,
        onWillUnmount: _this._onRowWillUnmount,
        onRenderItemColumn: onRenderItemColumn,
        getCellValueKey: getCellValueKey,
        eventsToRegister: eventsToRegister,
        dragDropEvents: dragDropEvents,
        dragDropHelper: dragDropHelper,
        viewport: viewport,
        checkboxVisibility: checkboxVisibility,
        collapseAllVisibility: collapseAllVisibility,
        getRowAriaLabel: getRowAriaLabel,
        getRowAriaDescribedBy: getRowAriaDescribedBy,
        checkButtonAriaLabel: checkButtonAriaLabel,
        checkboxCellClassName: checkboxCellClassName,
        useReducedRowRenderer: useReducedRowRenderer,
        indentWidth: indentWidth,
        cellStyleProps: cellStyleProps,
        onRenderDetailsCheckbox: onRenderCheckbox,
        enableUpdateAnimations: enableUpdateAnimations,
        rowWidth: _this._sumColumnWidths(columns),
        useFastIcons: useFastIcons
      };

      if (!item) {
        if (onRenderMissingItem) {
          return onRenderMissingItem(index, rowProps);
        }

        return null;
      }

      return onRenderRow(rowProps);
    };

    _this._onGroupExpandStateChanged = function (isSomeGroupExpanded) {
      _this.setState({
        isSomeGroupExpanded: isSomeGroupExpanded
      });
    };

    _this._onColumnIsSizingChanged = function (column, isSizing) {
      _this.setState({
        isSizing: isSizing
      });
    };

    _this._onHeaderKeyDown = function (ev) {
      if (ev.which === KeyCodes.down) {
        if (_this._focusZone.current && _this._focusZone.current.focus()) {
          // select the first item in list after down arrow key event
          // only if nothing was selected; otherwise start with the already-selected item
          if (_this._selection.getSelectedIndices().length === 0) {
            _this._selection.setIndexSelected(0, true, false);
          }

          ev.preventDefault();
          ev.stopPropagation();
        }
      }
    };

    _this._onContentKeyDown = function (ev) {
      if (ev.which === KeyCodes.up && !ev.altKey) {
        if (_this._header.current && _this._header.current.focus()) {
          ev.preventDefault();
          ev.stopPropagation();
        }
      }
    };

    _this._onRowDidMount = function (row) {
      var _a = row.props,
          item = _a.item,
          itemIndex = _a.itemIndex;

      var itemKey = _this._getItemKey(item, itemIndex);

      _this._activeRows[itemKey] = row; // this is used for column auto resize

      _this._setFocusToRowIfPending(row);

      var onRowDidMount = _this.props.onRowDidMount;

      if (onRowDidMount) {
        onRowDidMount(item, itemIndex);
      }
    };

    _this._onRowWillUnmount = function (row) {
      var onRowWillUnmount = _this.props.onRowWillUnmount;
      var _a = row.props,
          item = _a.item,
          itemIndex = _a.itemIndex;

      var itemKey = _this._getItemKey(item, itemIndex);

      delete _this._activeRows[itemKey];

      if (onRowWillUnmount) {
        onRowWillUnmount(item, itemIndex);
      }
    };

    _this._onToggleCollapse = function (collapsed) {
      _this.setState({
        isCollapsed: collapsed
      });

      if (_this._groupedList.current) {
        _this._groupedList.current.toggleCollapseAll(collapsed);
      }
    };

    _this._onColumnDragEnd = function (props, event) {
      var columnReorderOptions = _this.props.columnReorderOptions;
      var finalDropLocation = ColumnDragEndLocation.outside;

      if (columnReorderOptions && columnReorderOptions.onDragEnd) {
        if (props.dropLocation && props.dropLocation !== ColumnDragEndLocation.header) {
          finalDropLocation = props.dropLocation;
        } else if (_this._root.current) {
          var clientRect = _this._root.current.getBoundingClientRect();

          if (event.clientX > clientRect.left && event.clientX < clientRect.right && event.clientY > clientRect.top && event.clientY < clientRect.bottom) {
            finalDropLocation = ColumnDragEndLocation.surface;
          }
        }

        columnReorderOptions.onDragEnd(finalDropLocation);
      }
    };

    _this._onColumnResized = function (resizingColumn, newWidth, resizingColumnIndex) {
      var newCalculatedWidth = Math.max(resizingColumn.minWidth || MIN_COLUMN_WIDTH, newWidth);

      if (_this.props.onColumnResize) {
        _this.props.onColumnResize(resizingColumn, newCalculatedWidth, resizingColumnIndex);
      }

      _this._rememberCalculatedWidth(resizingColumn, newCalculatedWidth);

      _this._adjustColumns(_this.props, true, resizingColumnIndex);

      _this.setState({
        version: {}
      });
    };
    /**
     * Callback function when double clicked on the details header column resizer
     * which will measure the column cells of all the active rows and resize the
     * column to the max cell width.
     *
     * @param column - double clicked column definition
     * @param columnIndex - double clicked column index
     * TODO: min width 100 should be changed to const value and should be consistent with the
     * value used on _onSizerMove method in DetailsHeader
     */


    _this._onColumnAutoResized = function (column, columnIndex) {
      var max = 0;
      var count = 0;
      var totalCount = Object.keys(_this._activeRows).length;

      for (var key in _this._activeRows) {
        if (_this._activeRows.hasOwnProperty(key)) {
          var currentRow = _this._activeRows[key];
          currentRow.measureCell(columnIndex, function (width) {
            max = Math.max(max, width);
            count++;

            if (count === totalCount) {
              _this._onColumnResized(column, max, columnIndex);
            }
          });
        }
      }
    };
    /**
     * Call back function when an element in FocusZone becomes active. It will translate it into item
     * and call onActiveItemChanged callback if specified.
     *
     * @param row - element that became active in Focus Zone
     * @param focus - event from Focus Zone
     */


    _this._onActiveRowChanged = function (el, ev) {
      var _a = _this.props,
          items = _a.items,
          onActiveItemChanged = _a.onActiveItemChanged;

      if (!el) {
        return;
      } // Check and assign index only if the event was raised from any DetailsRow element


      if (el.getAttribute('data-item-index')) {
        var index = Number(el.getAttribute('data-item-index'));

        if (index >= 0) {
          if (onActiveItemChanged) {
            onActiveItemChanged(items[index], index, ev);
          }

          _this.setState({
            focusedItemIndex: index
          });
        }
      }
    };

    _this._onBlur = function (event) {
      _this.setState({
        focusedItemIndex: -1
      });
    };

    _this.isRightArrow = function (event) {
      return event.which === getRTLSafeKeyCode(KeyCodes.right, _this.props.theme);
    };

    initializeComponentRef(_this);
    _this._async = new Async(_this);
    _this._activeRows = {};
    _this._columnOverrides = {};
    _this.state = {
      focusedItemIndex: -1,
      lastWidth: 0,
      adjustedColumns: _this._getAdjustedColumns(props),
      isSizing: false,
      isDropping: false,
      isCollapsed: props.groupProps && props.groupProps.isAllGroupsCollapsed,
      isSomeGroupExpanded: props.groupProps && !props.groupProps.isAllGroupsCollapsed,
      version: {}
    };
    _this._selection = props.selection || new Selection({
      onSelectionChanged: undefined,
      getKey: props.getKey,
      selectionMode: props.selectionMode
    });

    if (!_this.props.disableSelectionZone) {
      _this._selection.setItems(props.items, false);
    }

    _this._dragDropHelper = props.dragDropEvents ? new DragDropHelper({
      selection: _this._selection,
      minimumPixelsForDrag: props.minimumPixelsForDrag
    }) : undefined;
    _this._initialFocusedIndex = props.initialFocusedIndex;
    return _this;
  }

  DetailsListBase.prototype.scrollToIndex = function (index, measureItem, scrollToMode) {
    this._list.current && this._list.current.scrollToIndex(index, measureItem, scrollToMode);
    this._groupedList.current && this._groupedList.current.scrollToIndex(index, measureItem, scrollToMode);
  };

  DetailsListBase.prototype.focusIndex = function (index, forceIntoFirstElement, measureItem, scrollToMode) {
    if (forceIntoFirstElement === void 0) {
      forceIntoFirstElement = false;
    }

    var item = this.props.items[index];

    if (item) {
      this.scrollToIndex(index, measureItem, scrollToMode);

      var itemKey = this._getItemKey(item, index);

      var row = this._activeRows[itemKey];

      if (row) {
        this._setFocusToRow(row, forceIntoFirstElement);
      }
    }
  };

  DetailsListBase.prototype.getStartItemIndexInView = function () {
    if (this._list && this._list.current) {
      return this._list.current.getStartItemIndexInView();
    } else if (this._groupedList && this._groupedList.current) {
      return this._groupedList.current.getStartItemIndexInView();
    }

    return 0;
  };

  DetailsListBase.prototype.componentWillUnmount = function () {
    if (this._dragDropHelper) {
      // TODO If the DragDropHelper was passed via props, this will dispose it, which is incorrect behavior.
      this._dragDropHelper.dispose();
    }

    this._async.dispose();
  };

  DetailsListBase.prototype.componentDidUpdate = function (prevProps, prevState) {
    if (this._initialFocusedIndex !== undefined) {
      var item = this.props.items[this._initialFocusedIndex];

      if (item) {
        var itemKey = this._getItemKey(item, this._initialFocusedIndex);

        var row = this._activeRows[itemKey];

        if (row) {
          this._setFocusToRowIfPending(row);
        }
      }
    }

    if (this.props.items !== prevProps.items && this.props.items.length > 0 && this.state.focusedItemIndex !== -1 && !elementContains(this._root.current, document.activeElement, false)) {
      // Item set has changed and previously-focused item is gone.
      // Set focus to item at index of previously-focused item if it is in range,
      // else set focus to the last item.
      var index = this.state.focusedItemIndex < this.props.items.length ? this.state.focusedItemIndex : this.props.items.length - 1;
      var item = this.props.items[index];

      var itemKey = this._getItemKey(item, this.state.focusedItemIndex);

      var row = this._activeRows[itemKey];

      if (row) {
        this._setFocusToRow(row);
      } else {
        this._initialFocusedIndex = index;
      }
    }

    if (this.props.onDidUpdate) {
      this.props.onDidUpdate(this);
    }
  }; // tslint:disable-next-line function-name


  DetailsListBase.prototype.UNSAFE_componentWillReceiveProps = function (newProps) {
    var _a = this.props,
        checkboxVisibility = _a.checkboxVisibility,
        items = _a.items,
        setKey = _a.setKey,
        _b = _a.selectionMode,
        selectionMode = _b === void 0 ? this._selection.mode : _b,
        columns = _a.columns,
        viewport = _a.viewport,
        compact = _a.compact,
        dragDropEvents = _a.dragDropEvents;
    var _c = (this.props.groupProps || {}).isAllGroupsCollapsed,
        isAllGroupsCollapsed = _c === void 0 ? undefined : _c;
    var newViewportWidth = newProps.viewport && newProps.viewport.width || 0;
    var oldViewportWidth = viewport && viewport.width || 0;
    var shouldResetSelection = newProps.setKey !== setKey || newProps.setKey === undefined;
    var shouldForceUpdates = false;

    if (newProps.layoutMode !== this.props.layoutMode) {
      shouldForceUpdates = true;
    }

    if (shouldResetSelection) {
      this._initialFocusedIndex = newProps.initialFocusedIndex; // reset focusedItemIndex when setKey changes

      this.setState({
        focusedItemIndex: this._initialFocusedIndex !== undefined ? this._initialFocusedIndex : -1
      });
    }

    if (!this.props.disableSelectionZone && newProps.items !== items) {
      this._selection.setItems(newProps.items, shouldResetSelection);
    }

    if (newProps.checkboxVisibility !== checkboxVisibility || newProps.columns !== columns || newViewportWidth !== oldViewportWidth || newProps.compact !== compact) {
      shouldForceUpdates = true;
    }

    this._adjustColumns(newProps, true);

    if (newProps.selectionMode !== selectionMode) {
      shouldForceUpdates = true;
    }

    if (isAllGroupsCollapsed === undefined && newProps.groupProps && newProps.groupProps.isAllGroupsCollapsed !== undefined) {
      this.setState({
        isCollapsed: newProps.groupProps.isAllGroupsCollapsed,
        isSomeGroupExpanded: !newProps.groupProps.isAllGroupsCollapsed
      });
    }

    if (newProps.dragDropEvents !== dragDropEvents) {
      this._dragDropHelper && this._dragDropHelper.dispose();
      this._dragDropHelper = newProps.dragDropEvents ? new DragDropHelper({
        selection: this._selection,
        minimumPixelsForDrag: newProps.minimumPixelsForDrag
      }) : undefined;
      shouldForceUpdates = true;
    }

    if (shouldForceUpdates) {
      this.setState({
        version: {}
      });
    }
  };

  DetailsListBase.prototype.render = function () {
    var _a = this.props,
        ariaLabelForListHeader = _a.ariaLabelForListHeader,
        ariaLabelForSelectAllCheckbox = _a.ariaLabelForSelectAllCheckbox,
        ariaLabelForSelectionColumn = _a.ariaLabelForSelectionColumn,
        className = _a.className,
        checkboxVisibility = _a.checkboxVisibility,
        compact = _a.compact,
        constrainMode = _a.constrainMode,
        dragDropEvents = _a.dragDropEvents,
        groups = _a.groups,
        groupProps = _a.groupProps,
        indentWidth = _a.indentWidth,
        items = _a.items,
        isPlaceholderData = _a.isPlaceholderData,
        isHeaderVisible = _a.isHeaderVisible,
        layoutMode = _a.layoutMode,
        onItemInvoked = _a.onItemInvoked,
        onItemContextMenu = _a.onItemContextMenu,
        onColumnHeaderClick = _a.onColumnHeaderClick,
        onColumnHeaderContextMenu = _a.onColumnHeaderContextMenu,
        _b = _a.selectionMode,
        selectionMode = _b === void 0 ? this._selection.mode : _b,
        selectionPreservedOnEmptyClick = _a.selectionPreservedOnEmptyClick,
        selectionZoneProps = _a.selectionZoneProps,
        ariaLabel = _a.ariaLabel,
        ariaLabelForGrid = _a.ariaLabelForGrid,
        rowElementEventMap = _a.rowElementEventMap,
        _c = _a.shouldApplyApplicationRole,
        shouldApplyApplicationRole = _c === void 0 ? false : _c,
        getKey = _a.getKey,
        listProps = _a.listProps,
        usePageCache = _a.usePageCache,
        onShouldVirtualize = _a.onShouldVirtualize,
        viewport = _a.viewport,
        minimumPixelsForDrag = _a.minimumPixelsForDrag,
        getGroupHeight = _a.getGroupHeight,
        styles = _a.styles,
        theme = _a.theme,
        _d = _a.cellStyleProps,
        cellStyleProps = _d === void 0 ? DEFAULT_CELL_STYLE_PROPS : _d,
        onRenderCheckbox = _a.onRenderCheckbox,
        useFastIcons = _a.useFastIcons;
    var _e = this.state,
        adjustedColumns = _e.adjustedColumns,
        isCollapsed = _e.isCollapsed,
        isSizing = _e.isSizing,
        isSomeGroupExpanded = _e.isSomeGroupExpanded;

    var _f = this,
        selection = _f._selection,
        dragDropHelper = _f._dragDropHelper;

    var groupNestingDepth = this._getGroupNestingDepth();

    var additionalListProps = _assign({
      renderedWindowsAhead: isSizing ? 0 : DEFAULT_RENDERED_WINDOWS_AHEAD$1,
      renderedWindowsBehind: isSizing ? 0 : DEFAULT_RENDERED_WINDOWS_BEHIND$1,
      getKey: getKey,
      version: this.state.version
    }, listProps);

    var selectAllVisibility = SelectAllVisibility.none; // for SelectionMode.none

    if (selectionMode === SelectionMode.single) {
      selectAllVisibility = SelectAllVisibility.hidden;
    }

    if (selectionMode === SelectionMode.multiple) {
      // if isCollapsedGroupSelectVisible is false, disable select all when the list has all collapsed groups
      var isCollapsedGroupSelectVisible = groupProps && groupProps.headerProps && groupProps.headerProps.isCollapsedGroupSelectVisible;

      if (isCollapsedGroupSelectVisible === undefined) {
        isCollapsedGroupSelectVisible = true;
      }

      var isSelectAllVisible = isCollapsedGroupSelectVisible || !groups || isSomeGroupExpanded;
      selectAllVisibility = isSelectAllVisible ? SelectAllVisibility.visible : SelectAllVisibility.hidden;
    }

    if (checkboxVisibility === CheckboxVisibility.hidden) {
      selectAllVisibility = SelectAllVisibility.none;
    }

    var _g = this.props,
        _h = _g.onRenderDetailsHeader,
        onRenderDetailsHeader = _h === void 0 ? this._onRenderDetailsHeader : _h,
        _j = _g.onRenderDetailsFooter,
        onRenderDetailsFooter = _j === void 0 ? this._onRenderDetailsFooter : _j;

    var detailsFooterProps = this._getDetailsFooterProps();

    var columnReorderProps = this._getColumnReorderProps();

    var rowCount = (isHeaderVisible ? 1 : 0) + GetGroupCount(groups) + (items ? items.length : 0);
    var classNames = getClassNames$f(styles, {
      theme: theme,
      compact: compact,
      isFixed: layoutMode === DetailsListLayoutMode.fixedColumns,
      isHorizontalConstrained: constrainMode === ConstrainMode.horizontalConstrained,
      className: className
    });
    var list = groups ? React.createElement(GroupedList, {
      componentRef: this._groupedList,
      groups: groups,
      groupProps: groupProps ? this._getGroupProps(groupProps) : undefined,
      items: items,
      onRenderCell: this._onRenderCell,
      selection: selection,
      selectionMode: checkboxVisibility !== CheckboxVisibility.hidden ? selectionMode : SelectionMode.none,
      dragDropEvents: dragDropEvents,
      dragDropHelper: dragDropHelper,
      eventsToRegister: rowElementEventMap,
      listProps: additionalListProps,
      onGroupExpandStateChanged: this._onGroupExpandStateChanged,
      usePageCache: usePageCache,
      onShouldVirtualize: onShouldVirtualize,
      getGroupHeight: getGroupHeight,
      compact: compact
    }) : React.createElement(List, _assign({
      ref: this._list,
      role: "presentation",
      items: items,
      onRenderCell: this._onRenderListCell(0),
      usePageCache: usePageCache,
      onShouldVirtualize: onShouldVirtualize
    }, additionalListProps));
    return (// If shouldApplyApplicationRole is true, role application will be applied to make arrow keys work
      // with JAWS.
      React.createElement("div", _assign({
        ref: this._root,
        className: classNames.root,
        "data-automationid": "DetailsList",
        "data-is-scrollable": "false",
        "aria-label": ariaLabel
      }, shouldApplyApplicationRole ? {
        role: 'application'
      } : {}), React.createElement(FocusRects, null), React.createElement("div", {
        role: "grid",
        "aria-label": ariaLabelForGrid,
        "aria-rowcount": isPlaceholderData ? -1 : rowCount,
        "aria-colcount": (selectAllVisibility !== SelectAllVisibility.none ? 1 : 0) + (adjustedColumns ? adjustedColumns.length : 0),
        "aria-readonly": "true",
        "aria-busy": isPlaceholderData
      }, React.createElement("div", {
        onKeyDown: this._onHeaderKeyDown,
        role: "presentation",
        className: classNames.headerWrapper
      }, isHeaderVisible && onRenderDetailsHeader({
        componentRef: this._header,
        selectionMode: selectionMode,
        layoutMode: layoutMode,
        selection: selection,
        columns: adjustedColumns,
        onColumnClick: onColumnHeaderClick,
        onColumnContextMenu: onColumnHeaderContextMenu,
        onColumnResized: this._onColumnResized,
        onColumnIsSizingChanged: this._onColumnIsSizingChanged,
        onColumnAutoResized: this._onColumnAutoResized,
        groupNestingDepth: groupNestingDepth,
        isAllCollapsed: isCollapsed,
        onToggleCollapseAll: this._onToggleCollapse,
        ariaLabel: ariaLabelForListHeader,
        ariaLabelForSelectAllCheckbox: ariaLabelForSelectAllCheckbox,
        ariaLabelForSelectionColumn: ariaLabelForSelectionColumn,
        selectAllVisibility: selectAllVisibility,
        collapseAllVisibility: groupProps && groupProps.collapseAllVisibility,
        viewport: viewport,
        columnReorderProps: columnReorderProps,
        minimumPixelsForDrag: minimumPixelsForDrag,
        cellStyleProps: cellStyleProps,
        checkboxVisibility: checkboxVisibility,
        indentWidth: indentWidth,
        onRenderDetailsCheckbox: onRenderCheckbox,
        rowWidth: this._sumColumnWidths(this.state.adjustedColumns),
        useFastIcons: useFastIcons
      }, this._onRenderDetailsHeader)), React.createElement("div", {
        onKeyDown: this._onContentKeyDown,
        role: "presentation",
        className: classNames.contentWrapper
      }, React.createElement(FocusZone, {
        componentRef: this._focusZone,
        className: classNames.focusZone,
        direction: FocusZoneDirection.vertical,
        shouldEnterInnerZone: this.isRightArrow,
        onActiveElementChanged: this._onActiveRowChanged,
        onBlur: this._onBlur
      }, !this.props.disableSelectionZone ? React.createElement(SelectionZone, _assign({
        ref: this._selectionZone,
        selection: selection,
        selectionPreservedOnEmptyClick: selectionPreservedOnEmptyClick,
        selectionMode: selectionMode,
        onItemInvoked: onItemInvoked,
        onItemContextMenu: onItemContextMenu,
        enterModalOnTouch: this.props.enterModalSelectionOnTouch
      }, selectionZoneProps || {}), list) : list)), onRenderDetailsFooter(_assign({}, detailsFooterProps), this._onRenderDetailsFooter)))
    );
  };

  DetailsListBase.prototype.forceUpdate = function () {
    _super.prototype.forceUpdate.call(this);

    this._forceListUpdates();
  };

  DetailsListBase.prototype._getGroupNestingDepth = function () {
    var groups = this.props.groups;
    var level = 0;
    var groupsInLevel = groups;

    while (groupsInLevel && groupsInLevel.length > 0) {
      level++;
      groupsInLevel = groupsInLevel[0].children;
    }

    return level;
  };

  DetailsListBase.prototype._setFocusToRowIfPending = function (row) {
    var itemIndex = row.props.itemIndex;

    if (this._initialFocusedIndex !== undefined && itemIndex === this._initialFocusedIndex) {
      this._setFocusToRow(row);

      delete this._initialFocusedIndex;
    }
  };

  DetailsListBase.prototype._setFocusToRow = function (row, forceIntoFirstElement) {
    if (forceIntoFirstElement === void 0) {
      forceIntoFirstElement = false;
    }

    if (this._selectionZone.current) {
      this._selectionZone.current.ignoreNextFocus();
    }

    this._async.setTimeout(function () {
      row.focus(forceIntoFirstElement);
    }, 0);
  };

  DetailsListBase.prototype._forceListUpdates = function () {
    if (this._groupedList.current) {
      this._groupedList.current.forceUpdate();
    }

    if (this._list.current) {
      this._list.current.forceUpdate();
    }
  };

  DetailsListBase.prototype._notifyColumnsResized = function () {
    this.state.adjustedColumns.forEach(function (column) {
      if (column.onColumnResize) {
        column.onColumnResize(column.currentWidth);
      }
    });
  };

  DetailsListBase.prototype._adjustColumns = function (newProps, forceUpdate, resizingColumnIndex) {
    var adjustedColumns = this._getAdjustedColumns(newProps, forceUpdate, resizingColumnIndex);

    var viewport = this.props.viewport;
    var viewportWidth = viewport && viewport.width ? viewport.width : 0;

    if (adjustedColumns) {
      this.setState({
        adjustedColumns: adjustedColumns,
        lastWidth: viewportWidth
      }, this._notifyColumnsResized);
    }
  };
  /** Returns adjusted columns, given the viewport size and layout mode. */


  DetailsListBase.prototype._getAdjustedColumns = function (newProps, forceUpdate, resizingColumnIndex) {
    var _this = this;

    var newItems = newProps.items,
        layoutMode = newProps.layoutMode,
        selectionMode = newProps.selectionMode,
        viewport = newProps.viewport;
    var viewportWidth = viewport && viewport.width ? viewport.width : 0;
    var newColumns = newProps.columns;
    var columns = this.props ? this.props.columns : [];
    var lastWidth = this.state ? this.state.lastWidth : -1;
    var lastSelectionMode = this.state ? this.state.lastSelectionMode : undefined;

    if (!forceUpdate && lastWidth === viewportWidth && lastSelectionMode === selectionMode && (!columns || newColumns === columns)) {
      return [];
    }

    newColumns = newColumns || buildColumns(newItems, true);
    var adjustedColumns;

    if (layoutMode === DetailsListLayoutMode.fixedColumns) {
      adjustedColumns = this._getFixedColumns(newColumns); // Preserve adjusted column calculated widths.

      adjustedColumns.forEach(function (column) {
        _this._rememberCalculatedWidth(column, column.calculatedWidth);
      });
    } else {
      if (resizingColumnIndex !== undefined) {
        adjustedColumns = this._getJustifiedColumnsAfterResize(newColumns, viewportWidth, newProps, resizingColumnIndex);
      } else {
        adjustedColumns = this._getJustifiedColumns(newColumns, viewportWidth, newProps, 0);
      }

      adjustedColumns.forEach(function (column) {
        _this._getColumnOverride(column.key).currentWidth = column.calculatedWidth;
      });
    }

    return adjustedColumns;
  };
  /** Builds a set of columns based on the given columns mixed with the current overrides. */


  DetailsListBase.prototype._getFixedColumns = function (newColumns) {
    var _this = this;

    return newColumns.map(function (column) {
      var newColumn = _assign(_assign({}, column), _this._columnOverrides[column.key]);

      if (!newColumn.calculatedWidth) {
        newColumn.calculatedWidth = newColumn.maxWidth || newColumn.minWidth || MIN_COLUMN_WIDTH;
      }

      return newColumn;
    });
  };

  DetailsListBase.prototype._getJustifiedColumnsAfterResize = function (newColumns, viewportWidth, props, resizingColumnIndex) {
    var _this = this;

    var fixedColumns = newColumns.slice(0, resizingColumnIndex);
    fixedColumns.forEach(function (column) {
      return column.calculatedWidth = _this._getColumnOverride(column.key).currentWidth;
    });
    var fixedWidth = fixedColumns.reduce(function (total, column, i) {
      return total + getPaddedWidth(column, i === 0, props);
    }, 0);
    var remainingColumns = newColumns.slice(resizingColumnIndex);
    var remainingWidth = viewportWidth - fixedWidth;
    return __spreadArrays(fixedColumns, this._getJustifiedColumns(remainingColumns, remainingWidth, props, resizingColumnIndex));
  };
  /** Builds a set of columns to fix within the viewport width. */


  DetailsListBase.prototype._getJustifiedColumns = function (newColumns, viewportWidth, props, firstIndex) {
    var _this = this;

    var _a = props.selectionMode,
        selectionMode = _a === void 0 ? this._selection.mode : _a,
        checkboxVisibility = props.checkboxVisibility;
    var rowCheckWidth = selectionMode !== SelectionMode.none && checkboxVisibility !== CheckboxVisibility.hidden ? CHECK_CELL_WIDTH : 0;
    var groupExpandWidth = this._getGroupNestingDepth() * SPACER_WIDTH;
    var totalWidth = 0; // offset because we have one less inner padding.

    var availableWidth = viewportWidth - (rowCheckWidth + groupExpandWidth);
    var adjustedColumns = newColumns.map(function (column, i) {
      var newColumn = _assign(_assign(_assign({}, column), {
        calculatedWidth: column.minWidth || MIN_COLUMN_WIDTH
      }), _this._columnOverrides[column.key]);

      var isFirst = i + firstIndex === 0;
      totalWidth += getPaddedWidth(newColumn, isFirst, props);
      return newColumn;
    });
    var lastIndex = adjustedColumns.length - 1; // Shrink or remove collapsable columns.

    while (lastIndex > 0 && totalWidth > availableWidth) {
      var column = adjustedColumns[lastIndex];
      var minWidth = column.minWidth || MIN_COLUMN_WIDTH;
      var overflowWidth = totalWidth - availableWidth; // tslint:disable-next-line:deprecation

      if (column.calculatedWidth - minWidth >= overflowWidth || !(column.isCollapsible || column.isCollapsable)) {
        var originalWidth = column.calculatedWidth;
        column.calculatedWidth = Math.max(column.calculatedWidth - overflowWidth, minWidth);
        totalWidth -= originalWidth - column.calculatedWidth;
      } else {
        totalWidth -= getPaddedWidth(column, false, props);
        adjustedColumns.splice(lastIndex, 1);
      }

      lastIndex--;
    } // Then expand columns starting at the beginning, until we've filled the width.


    for (var i = 0; i < adjustedColumns.length && totalWidth < availableWidth; i++) {
      var column = adjustedColumns[i];
      var isLast = i === adjustedColumns.length - 1;
      var overrides = this._columnOverrides[column.key];

      if (overrides && overrides.calculatedWidth && !isLast) {
        continue;
      }

      var spaceLeft = availableWidth - totalWidth;
      var increment = void 0;

      if (isLast) {
        increment = spaceLeft;
      } else {
        var maxWidth = column.maxWidth;
        var minWidth = column.minWidth || maxWidth || MIN_COLUMN_WIDTH;
        increment = maxWidth ? Math.min(spaceLeft, maxWidth - minWidth) : spaceLeft;
      }

      column.calculatedWidth = column.calculatedWidth + increment;
      totalWidth += increment;
    }

    return adjustedColumns;
  };

  DetailsListBase.prototype._rememberCalculatedWidth = function (column, newCalculatedWidth) {
    var overrides = this._getColumnOverride(column.key);

    overrides.calculatedWidth = newCalculatedWidth;
    overrides.currentWidth = newCalculatedWidth;
  };

  DetailsListBase.prototype._getColumnOverride = function (key) {
    return this._columnOverrides[key] = this._columnOverrides[key] || {};
  };

  DetailsListBase.prototype._getItemKey = function (item, itemIndex) {
    var getKey = this.props.getKey;
    var itemKey = undefined;

    if (item) {
      itemKey = item.key;
    }

    if (getKey) {
      itemKey = getKey(item, itemIndex);
    }

    if (!itemKey) {
      itemKey = itemIndex;
    }

    return itemKey;
  };

  DetailsListBase.prototype._getDetailsFooterProps = function () {
    var columns = this.state.adjustedColumns;
    var _a = this.props,
        viewport = _a.viewport,
        checkboxVisibility = _a.checkboxVisibility,
        indentWidth = _a.indentWidth,
        _b = _a.cellStyleProps,
        cellStyleProps = _b === void 0 ? DEFAULT_CELL_STYLE_PROPS : _b,
        _c = _a.selectionMode,
        selectionMode = _c === void 0 ? this._selection.mode : _c;
    return {
      columns: columns,
      groupNestingDepth: this._getGroupNestingDepth(),
      selection: this._selection,
      selectionMode: selectionMode,
      viewport: viewport,
      checkboxVisibility: checkboxVisibility,
      indentWidth: indentWidth,
      cellStyleProps: cellStyleProps
    };
  };

  DetailsListBase.prototype._getColumnReorderProps = function () {
    var columnReorderOptions = this.props.columnReorderOptions;

    if (columnReorderOptions) {
      return _assign(_assign({}, columnReorderOptions), {
        onColumnDragEnd: this._onColumnDragEnd
      });
    }
  };

  DetailsListBase.prototype._getGroupProps = function (detailsGroupProps) {
    var _this = this;

    var onRenderDetailsGroupFooter = detailsGroupProps.onRenderFooter,
        onRenderDetailsGroupHeader = detailsGroupProps.onRenderHeader;
    var columns = this.state.adjustedColumns;
    var _a = this.props,
        _b = _a.selectionMode,
        selectionMode = _b === void 0 ? this._selection.mode : _b,
        viewport = _a.viewport,
        _c = _a.cellStyleProps,
        cellStyleProps = _c === void 0 ? DEFAULT_CELL_STYLE_PROPS : _c,
        checkboxVisibility = _a.checkboxVisibility,
        indentWidth = _a.indentWidth;

    var groupNestingDepth = this._getGroupNestingDepth();

    var onRenderFooter = onRenderDetailsGroupFooter ? function (props, defaultRender) {
      return onRenderDetailsGroupFooter(_assign(_assign({}, props), {
        columns: columns,
        groupNestingDepth: groupNestingDepth,
        indentWidth: indentWidth,
        selection: _this._selection,
        selectionMode: selectionMode,
        viewport: viewport,
        checkboxVisibility: checkboxVisibility,
        cellStyleProps: cellStyleProps
      }), defaultRender);
    } : undefined;
    var onRenderHeader = onRenderDetailsGroupHeader ? function (props, defaultRender) {
      return onRenderDetailsGroupHeader(_assign(_assign({}, props), {
        columns: columns,
        groupNestingDepth: groupNestingDepth,
        indentWidth: indentWidth,
        selection: _this._selection,
        selectionMode: selectionMode,
        viewport: viewport,
        checkboxVisibility: checkboxVisibility,
        cellStyleProps: cellStyleProps
      }), defaultRender);
    } : undefined;
    return _assign(_assign({}, detailsGroupProps), {
      onRenderFooter: onRenderFooter,
      onRenderHeader: onRenderHeader
    });
  };

  DetailsListBase.defaultProps = {
    layoutMode: DetailsListLayoutMode.justified,
    selectionMode: SelectionMode.multiple,
    constrainMode: ConstrainMode.horizontalConstrained,
    checkboxVisibility: CheckboxVisibility.onHover,
    isHeaderVisible: true,
    compact: false,
    useFastIcons: true
  };
  DetailsListBase = __decorate([withViewport], DetailsListBase);
  return DetailsListBase;
}(React.Component);
function buildColumns(items, canResizeColumns, onColumnClick, sortedColumnKey, isSortedDescending, groupedColumnKey, isMultiline) {
  var columns = [];

  if (items && items.length) {
    var firstItem = items[0];

    for (var propName in firstItem) {
      if (firstItem.hasOwnProperty(propName)) {
        columns.push({
          key: propName,
          name: propName,
          fieldName: propName,
          minWidth: MIN_COLUMN_WIDTH,
          maxWidth: 300,
          isCollapsable: !!columns.length,
          isCollapsible: !!columns.length,
          isMultiline: isMultiline === undefined ? false : isMultiline,
          isSorted: sortedColumnKey === propName,
          isSortedDescending: !!isSortedDescending,
          isRowHeader: false,
          columnActionsMode: ColumnActionsMode.clickable,
          isResizable: canResizeColumns,
          onColumnClick: onColumnClick,
          isGrouped: groupedColumnKey === propName
        });
      }
    }
  }

  return columns;
}

function getPaddedWidth(column, isFirst, props) {
  var _a = props.cellStyleProps,
      cellStyleProps = _a === void 0 ? DEFAULT_CELL_STYLE_PROPS : _a;
  return column.calculatedWidth + cellStyleProps.cellLeftPadding + cellStyleProps.cellRightPadding + (column.isPadded ? cellStyleProps.cellExtraRightPadding : 0);
}

var GlobalClassNames$c = {
  root: 'ms-DetailsList',
  compact: 'ms-DetailsList--Compact',
  contentWrapper: 'ms-DetailsList-contentWrapper',
  headerWrapper: 'ms-DetailsList-headerWrapper',
  isFixed: 'is-fixed',
  isHorizontalConstrained: 'is-horizontalConstrained',
  listCell: 'ms-List-cell'
};
var getStyles$f = function getStyles(props) {
  var _a, _b;

  var theme = props.theme,
      className = props.className,
      isHorizontalConstrained = props.isHorizontalConstrained,
      compact = props.compact,
      isFixed = props.isFixed;
  var semanticColors = theme.semanticColors;
  var classNames = getGlobalClassNames(GlobalClassNames$c, theme);
  return {
    root: [classNames.root, theme.fonts.small, {
      position: 'relative',
      background: semanticColors.listBackground,
      color: semanticColors.listText,
      selectors: (_a = {}, _a["& ." + classNames.listCell] = {
        minHeight: 38,
        wordBreak: 'break-word'
      }, _a)
    }, isFixed && classNames.isFixed, compact && [classNames.compact, {
      selectors: (_b = {}, _b["." + classNames.listCell] = {
        minHeight: 32
      }, _b)
    }], isHorizontalConstrained && [classNames.isHorizontalConstrained, {
      overflowX: 'auto',
      overflowY: 'visible',
      WebkitOverflowScrolling: 'touch'
    }], className],
    focusZone: [{
      display: 'inline-block',
      minWidth: '100%',
      minHeight: 1
    }],
    headerWrapper: classNames.headerWrapper,
    contentWrapper: classNames.contentWrapper
  };
};

var DetailsList = styled(DetailsListBase, getStyles$f, undefined, {
  scope: 'DetailsList'
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 0.5rem;\n    height: 100%;\n    margin: auto 35px auto auto;\n    background: ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var VerticalLine = styled$1.div(_templateObject(), function (props) {
  if (props.selected) {
    return 'rgba(253, 167, 223,0.4)';
  }

  return 'rgba(223, 230, 233,0.4)';
});

var CheckRow = /*#__PURE__*/function (_React$Component) {
  _inherits(CheckRow, _React$Component);

  var _super = _createSuper(CheckRow);

  function CheckRow() {
    _classCallCheck(this, CheckRow);

    return _super.apply(this, arguments);
  }

  _createClass(CheckRow, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(VerticalLine, {
        selected: this.props.selected
      }));
    }
  }]);

  return CheckRow;
}(React__default.Component);

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    > .focused-row{\n        background: ", ";\n    }\n    > .focused-row:hover{\n        background: ", ";\n    }\n    > .focused-row:focus{\n        background: ", ";\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 50vh;\n  overflow: auto;\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
initializeIcons$j();
var DetailsListWrapper = styled$1.div(_templateObject$1());
var FocusedRow = styled$1.div(_templateObject2(), function (props) {
  return props.rowNormalBgColor || 'rgba(223, 230, 233,0.2)';
}, function (props) {
  return props.rowHoverColor || 'rgba(116, 185, 255,0.2)';
}, function (props) {
  return props.rowFocusedColor || 'rgba(253, 167, 223,0.2)';
});

var TableFlt = /*#__PURE__*/function (_React$Component) {
  _inherits(TableFlt, _React$Component);

  var _super = _createSuper(TableFlt);

  // #region ====== props ========
  // rowNormalBgColor 行背景色
  // rowHoverColor 鼠标悬浮时的行背景色
  // rowFocusedColor 行被选中(获取焦点)时的行背景色
  // #endregion
  function TableFlt(props) {
    var _this;

    _classCallCheck(this, TableFlt);

    _this = _super.call(this, props);

    _this._onRenderRow = function (rowProps) {
      var rowPropParams = {
        // rowNormalBgColor 行背景色
        rowNormalBgColor: _this.props.rowNormalBgColor,
        // rowHoverColor 鼠标悬浮时的行背景色
        rowHoverColor: _this.props.rowHoverColor,
        // rowFocusedColor 行被选中(获取焦点)时的行背景色
        rowFocusedColor: _this.props.rowFocusedColor
      };

      var _onRenderCheck = function _onRenderCheck(rowProps) {
        return /*#__PURE__*/React__default.createElement(CheckRow, {
          selected: rowProps.selected
        });
      };

      console.log('this.props.rowNormalBgColor = ', _this.props.rowNormalBgColor);
      return /*#__PURE__*/React__default.createElement(FocusedRow, rowPropParams, /*#__PURE__*/React__default.createElement(DetailsRow, _extends({
        className: "focused-row"
      }, rowProps, {
        onRenderCheck: _onRenderCheck // styles={{
        //   root: {
        //     backgroundColor: "rgba(253, 167, 223,0.2)"
        //   }
        // }}

      })));
    };

    _this._onColumnClick = function (event, column) {
      var columns = _this.state.columns;
      var sortedItems = _this.state.sortedItems;
      var isSortedDescending = column.isSortedDescending; // If we've sorted this column, flip it.

      if (column.isSorted) {
        isSortedDescending = !isSortedDescending;
      } // Sort the items.


      sortedItems = _copyAndSort(sortedItems, column.fieldName, isSortedDescending); // Reset the items and columns to match the state.

      _this.setState({
        sortedItems: sortedItems,
        columns: columns.map(function (col) {
          col.isSorted = col.key === column.key;

          if (col.isSorted) {
            col.isSortedDescending = isSortedDescending;
          }

          return col;
        })
      });
    };

    var items = createListItems(500);
    _this.state = {
      sortedItems: items,
      columns: _buildColumns(items)
    };
    return _this;
  }

  _createClass(TableFlt, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          sortedItems = _this$state.sortedItems,
          columns = _this$state.columns;
      return /*#__PURE__*/React__default.createElement(DetailsListWrapper, null, /*#__PURE__*/React__default.createElement(DetailsList, {
        items: sortedItems,
        setKey: "set",
        columns: columns,
        onRenderItemColumn: _renderItemColumn,
        onColumnHeaderClick: this._onColumnClick,
        onItemInvoked: _onItemInvoked,
        onColumnHeaderContextMenu: _onColumnHeaderContextMenu,
        onRenderRow: this._onRenderRow,
        ariaLabelForSelectionColumn: "Toggle selection",
        ariaLabelForSelectAllCheckbox: "Toggle selection for all items",
        checkButtonAriaLabel: "Row checkbox" // styles={{
        //     subComponentStyles: {
        //       menuItem: {
        //         root: { check: { '&:hover': { backgroundColor: '#98dad2' } } }
        //       }
        //     }
        //   }}

      }));
    }
  }]);

  return TableFlt;
}(React__default.Component);

function _onColumnHeaderContextMenu(column, ev) {//   console.log(`column ${column.key} contextmenu opened.`);
}

function _onItemInvoked(item, index) {
  alert("Item ".concat(item.name, " at index ").concat(index, " has been invoked."));
}

function _buildColumns(items) {
  var columns = buildColumns(items);
  var thumbnailColumn = columns.filter(function (column) {
    return column.name === "thumbnail";
  })[0]; // Special case one column's definition.

  thumbnailColumn.name = "image";
  thumbnailColumn.maxWidth = 50;
  thumbnailColumn.ariaLabel = "Thumbnail";
  return columns;
}

function _renderItemColumn(item, index, column) {
  var fieldContent = item[column.fieldName];

  switch (column.key) {
    case "thumbnail":
      return /*#__PURE__*/React__default.createElement(Image, {
        src: fieldContent,
        width: 50,
        height: 50,
        imageFit: ImageFit.cover
      });

    case "name":
      return /*#__PURE__*/React__default.createElement(Link, {
        href: "#"
      }, fieldContent);

    case "color":
      return /*#__PURE__*/React__default.createElement("span", {
        "data-selection-disabled": true,
        className: mergeStyles({
          color: fieldContent,
          height: "100%",
          display: "block"
        })
      }, fieldContent);

    default:
      return /*#__PURE__*/React__default.createElement("span", null, fieldContent);
  }
}

function _copyAndSort(items, columnKey, isSortedDescending) {
  var key = columnKey;
  return items.slice(0).sort(function (a, b) {
    return (isSortedDescending ? a[key] < b[key] : a[key] > b[key]) ? 1 : -1;
  });
}

exports.default = TableFlt;
//# sourceMappingURL=index.js.map
