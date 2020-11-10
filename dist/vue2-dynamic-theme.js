(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vue2DynamicTheme = {
  install: function install(Vue, options) {
    /** Set default options */
    if (!options) {
      options = {};
    }

    if (!options.theme) {
      options.theme = {};
    }

    if (typeof options.autoLogThemePalette == 'undefined') {
      options.autoLogThemePalette = true;
    }
    /** Set theme palette to intial passed theme */


    Vue.prototype.$themePalette = generateThemePaletteFromTheme(options.theme);

    if (Object.keys(options.theme).length && options.autoLogThemePalette) {
      logThemePalette(Vue.prototype.$themePalette);
    }
    /**
     * Log theme with corresponding colors to console
     */


    Vue.prototype.$logThemePalette = function () {
      logThemePalette(Vue.prototype.$themePalette);
    };
    /** Returns black or white color depending on lightness of passed contrast color */


    Vue.prototype.$getAppropriateTextColor = function (hslaStr) {
      return getAppropriateTextColor(hslaStr);
    };
    /**
     * Generates theme palette from theme object
     */


    Vue.prototype.$generateThemePaletteFromTheme = function (theme) {
      Vue.prototype.$themePalette = generateThemePaletteFromTheme(theme);

      if (options.autoLogThemePalette) {
        Vue.prototype.$logThemePalette(Vue.prototype.$themePalette);
      }
    };

    Vue.mixin({
      mounted: function mounted() {
        var _this = this;

        this.$nextTick(function () {
          applyThemePaletteToElements(Vue.prototype.$themePalette, _this.$options._scopeId);
        });
      },
      updated: function updated() {
        var _this2 = this;

        this.$nextTick(function () {
          applyThemePaletteToElements(Vue.prototype.$themePalette, _this2.$options._scopeId);
        });
      }
    });
  } // mixin: {
  //   methods: {
  //   }
  // }

};
/* harmony default export */ __webpack_exports__["default"] = (Vue2DynamicTheme);

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Vue2DynamicTheme);
  window.Vue2DynamicTheme = Vue2DynamicTheme;
}
/********* */


var StyleType = {
  Text: 'text',
  Background: 'bg',
  Border: 'border'
};

var ColorPalette = function ColorPalette(light, base, dark) {
  _classCallCheck(this, ColorPalette);

  this.light = light;
  this.base = base;
  this.dark = dark;
};

var HslaColor = /*#__PURE__*/function () {
  function HslaColor(h, s, l, a) {
    _classCallCheck(this, HslaColor);

    this.h = h;
    this.s = s;
    this.l = l;
    this.a = a;
  }

  _createClass(HslaColor, [{
    key: "toString",
    value: function toString() {
      return 'hsla(' + this.h + ',' + this.s + '%,' + this.l + '%,' + this.a + ')';
    }
    /** hsl(h, s%, l%) or hsla(h, s%, l%, a) */

  }], [{
    key: "fromString",
    value: function fromString(str) {
      var h = 0,
          s = 0,
          l = 0,
          a = 1;
      var strSplit = str.split(',');

      if (strSplit.length != 3 && strSplit.length != 4) {
        return null;
      }

      if (strSplit.length == 3) {
        h = clamp(parseInt(strSplit[0].replace('hsl(', '')), 0, 360);
        s = clamp(parseInt(strSplit[1].replace('%', '')), 0, 100);
        l = clamp(parseInt(strSplit[2].replace('%)', '')), 0, 100);
      } else if (strSplit.length == 4) {
        h = clamp(parseInt(strSplit[0].replace('hsla(', '')), 0, 360);
        s = clamp(parseInt(strSplit[1].replace('%', '')), 0, 100);
        l = clamp(parseInt(strSplit[2].replace('%', '')), 0, 100);
        a = clamp(parseFloat(strSplit[3].replace(')', '')), 0, 1);
      }

      if (isNaN(h + s + l + a)) {
        return null;
      }

      return new HslaColor(h, s, l, a);
    }
  }]);

  return HslaColor;
}();

var RgbaColor = /*#__PURE__*/function () {
  function RgbaColor(r, g, b, a) {
    _classCallCheck(this, RgbaColor);

    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
  /** rgb(r,g,b) or rgba(r,g,b,a) */


  _createClass(RgbaColor, null, [{
    key: "fromString",
    value: function fromString(str) {
      var r = 0,
          g = 0,
          b = 0,
          a = 1;
      var strSplit = str.split(',');

      if (strSplit.length != 3 && strSplit.length != 4) {
        return null;
      }

      if (strSplit.length == 3) {
        r = clamp(parseInt(strSplit[0].replace('rgb(', '')), 0, 255);
        g = clamp(parseInt(strSplit[1]), 0, 255);
        b = clamp(parseInt(strSplit[2].replace(')', '')), 0, 255);
      } else if (strSplit.length == 4) {
        r = clamp(parseInt(strSplit[0].replace('rgba(', '')), 0, 255);
        g = clamp(parseInt(strSplit[1]), 0, 255);
        b = clamp(parseInt(strSplit[2]), 0, 255);
        a = clamp(parseFloat(strSplit[3].replace(')', '')), 0, 1);
      }

      if (isNaN(r + g + b + a)) {
        return null;
      }

      return new RgbaColor(r, g, b, a);
    }
  }]);

  return RgbaColor;
}();
/**
 * Applies theme palette color values to DOM elements that have classes of
 * {type}-{color} or {type}-{color}-{variant} signatures
 * componentScopeId is needed so that only DOM elements unique to the
 * component are processed
 * @param themePalette
 * @param componentScopeId
 */


applyThemePaletteToElements = function applyThemePaletteToElements(themePalette, componentScopeId) {
  /** scopeId is needed to avoid redundant processing of DOM elements */
  if (componentScopeId) {
    Object.entries(themePalette).forEach(function (colorPaletteKeyValue) {
      var colorPaletteKV = colorPaletteKeyValue;
      applyColorPaletteToElements(StyleType.Text, colorPaletteKV, componentScopeId);
      applyColorPaletteToElements(StyleType.Background, colorPaletteKV, componentScopeId);
      applyColorPaletteToElements(StyleType.Border, colorPaletteKV, componentScopeId);
    });
  }
};
/**
 * Given a style type ("text", "bg", or "border")
 * @param elementType
 * @param colorPaletteKeyValue
 */


applyColorPaletteToElements = function applyColorPaletteToElements(styleType, colorPaletteKeyValue, componentScopeId) {
  var lightElements = getColorElements(styleType, colorPaletteKeyValue[0], componentScopeId, 'light');
  var baseElements = getColorElements(styleType, colorPaletteKeyValue[0], componentScopeId, null);
  var darkElements = getColorElements(styleType, colorPaletteKeyValue[0], componentScopeId, 'dark');
  var styleParam = styleTypeToCssProperty(styleType);

  var _iterator = _createForOfIteratorHelper(lightElements),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var element = _step.value;
      element.style[styleParam] = colorPaletteKeyValue[1].light;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var _iterator2 = _createForOfIteratorHelper(baseElements),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _element = _step2.value;
      _element.style[styleParam] = colorPaletteKeyValue[1].base;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  var _iterator3 = _createForOfIteratorHelper(darkElements),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _element2 = _step3.value;
      _element2.style[styleParam] = colorPaletteKeyValue[1].dark;
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
};
/**
 * returns collection of HTMLElements that have the corresponding colorKey, variant, and type
 * class = "type-color" for base or "type-color-variant" for light or dark variant
 * @param styleType
 * @param colorKey
 * @param variant
 * @param type
 */


getColorElements = function getColorElements(styleType, colorKey, componentScopeId, variant) {
  var styleClassStr = getStyleClassStr(styleType, colorKey, variant);
  var matchingElements = document.querySelectorAll('[' + componentScopeId + '].' + styleClassStr);
  return matchingElements;
};
/**
 * Returns the resulting dyanamic theme class string in the format: {{style}}-{{colorKey}}-{{variant}}
 * @param styleType
 * @param colorKey
 * @param variant
 */


getStyleClassStr = function getStyleClassStr(styleType, colorKey, variant) {
  var base = styleType + '-' + colorKey;
  return variant ? base + ' - ' + variant : base;
};
/**
 * Converts StyleType enum to corresponding css property
 * @param styleType
 */


styleTypeToCssProperty = function styleTypeToCssProperty(styleType) {
  switch (styleType) {
    case StyleType.Text:
      return 'color';

    case StyleType.Background:
      return 'backgroundColor';

    case StyleType.Border:
      return 'borderColor';

    default:
      return '';
  }
};
/**
 * Generate a theme color palette with light and dark variants for each "core" color
 * @param theme
 */


generateThemePaletteFromTheme = function generateThemePaletteFromTheme(theme) {
  var themePalette = {};
  Object.entries(theme).forEach(function (colorKeyValue) {
    if (typeof colorKeyValue[1] == 'string') {
      var colorValueStr = colorKeyValue[1];
      colorValueStr = colorStringToHslaString(colorValueStr);

      if (colorValueStr) {
        themePalette[colorKeyValue[0]] = new ColorPalette(generateLightColorVariant(colorValueStr), colorValueStr, generateDarkColorVariant(colorValueStr));
      }
    } else {
      console.error('value for theme property ' + "'" + colorKeyValue[0] + "'" + ' is not a string. The theme object must not contain nested objects or arrays; only string color values are supported - rgb, hex, or hsl.');
    }
  });
  return themePalette;
};
/**
 * Log theme with corresponding colors to console
 */


logThemePalette = function logThemePalette(themePalette) {
  if (themePalette) {
    console.groupCollapsed('Theme Palette:');
    console.log('Theme Object: ', themePalette);
    console.log('Theme Colors: ');
    Object.entries(themePalette).forEach(function (colorKey) {
      var colorPrefix = colorKey[0];
      var colorPalette = colorKey[1];
      var labels = [colorPrefix + '-light', colorPrefix + '-base', colorPrefix + '-dark'];
      var values = [colorPalette.light, colorPalette.base, colorPalette.dark];

      for (var i = 0; i < labels.length; i++) {
        var css = 'background: ' + values[i] + '; color: ' + getAppropriateTextColor(values[i]);
        console.log('%c ' + labels[i] + ' ', css);
      }
    });
    console.groupEnd();
  } else {
    console.warn('No theme palette has been generated yet.');
  }
};
/**
 * Given an HSLA string value, returns an appropriate text color for it(black or white)
 * @param hslaStr
 */


getAppropriateTextColor = function getAppropriateTextColor(hslaStr) {
  var lightness = parseInt(hslaStr.split(',')[2].replace('%)', ''));

  if (lightness <= 49) {
    return '#fff';
  } else {
    return '#000';
  }
};
/**
 * Given an hsl color, generates a light variant of that color
 * @param hslaStr
 */


generateLightColorVariant = function generateLightColorVariant(hslaStr) {
  var hslaColor = HslaColor.fromString(hslaStr);
  hslaColor.l = Math.round(clamp(hslaColor.l + hslaColor.l / 3, 0, 100));
  return hslaColor.toString();
};
/**
 * Given an hsl color, generates a dark variant of that color
 * @param hslaStr
 */


generateDarkColorVariant = function generateDarkColorVariant(hslaStr) {
  var hslaColor = HslaColor.fromString(hslaStr);
  hslaColor.l = Math.round(clamp(hslaColor.l - hslaColor.l / 3, 0, 100));
  return hslaColor.toString();
};
/**
 * Given a color string value, converts that value to a HSLA string value
 * if possible; if conversion is not possible error is logged
 * @param str
 */


colorStringToHslaString = function colorStringToHslaString(str) {
  /** Show error for unsupported color value */
  var strError = function strError() {
    console.error('The following color value cannot be used: ' + "'" + str + "'" + '. Color values for theme object must be correctly formatted rgb, hex, or hsl values only.');
    return '';
  };
  /** Match string to regex for HEX, RGB, RGBA, HSL, and HSLA */


  var colorValueRegex = /(#([\da-f]{3}){1,2}|(rgb|hsl)a\((\d{1,3}%?,\s?){3}(1|0?\.\d+)\)|(rgb|hsl)\(\d{1,3}%?(,\s?\d{1,3}%?){2}\))/gi;
  var regexMatchedStr = str.match(colorValueRegex);

  if (regexMatchedStr) {
    if (str != regexMatchedStr[0]) {
      console.warn("Color value for '" + str + "' was not formatted correctly. Using matched value " + "'" + regexMatchedStr[0] + "' instead.");
    }

    str = regexMatchedStr[0];
  } else {
    return strError();
  }
  /** Convert RGB and RGBA to HSLA */


  if (str.includes('rgb')) {
    if (RgbaColor.fromString(str)) {
      return rgbaToHslaStr(RgbaColor.fromString(str));
    } else {
      return strError();
    }
  } else if (str.includes('#') && (str.length == 4 || str.length == 7)) {
    /** Convert HEX to HSLA */
    return hexToHslaStr(str);
  } else if (str.includes('hsl')) {
    /** Accept the HSL and HSLA */
    if (HslaColor.fromString(str)) {
      return str;
    } else {
      return strError();
    }
  } else {
    return strError();
  }
};
/*************** Color Space Converters **********
 * credit to: https://css-tricks.com/converting-color-spaces-in-javascript/
 */

/**
 * Converts HEX color value to RGB color value
 * @param hex
 */


hexToRgba = function hexToRgba(hex) {
  var rgbaColor = new RgbaColor(0, 0, 0, 1);

  if (hex.length == 4) {
    rgbaColor.r = +('0x' + hex[1] + hex[1]);
    rgbaColor.g = +('0x' + hex[2] + hex[2]);
    rgbaColor.b = +('0x' + hex[3] + hex[3]);
  } else if (hex.length == 7) {
    rgbaColor.r = +('0x' + hex[1] + hex[2]);
    rgbaColor.g = +('0x' + hex[3] + hex[4]);
    rgbaColor.b = +('0x' + hex[5] + hex[6]);
  }

  return rgbaColor;
};
/**
 * Converts RGB color value to HSLA color value
 * @param RgbaColor
 */


rgbaToHsla = function rgbaToHsla(rgbaColor) {
  var r = rgbaColor.r / 255;
  var g = rgbaColor.g / 255;
  var b = rgbaColor.b / 255;
  var a = rgbaColor.a;
  var cmin = Math.min(r, g, b);
  var cmax = Math.max(r, g, b);
  var delta = cmax - cmin;
  var h,
      s,
      l = 0;

  if (delta == 0) {
    h = 0;
  } else if (cmax == r) {
    h = (g - b) / delta % 6;
  } else if (cmax == g) {
    h = (b - r) / delta + 2;
  } else {
    h = (r - g) / delta + 4;
  }

  h = Math.round(h * 60);

  if (h < 0) {
    h += 360;
  }

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  l = +(l * 100).toFixed(1);
  s = +(s * 100).toFixed(1);
  return new HslaColor(h, s, l, a);
};
/**
 * Converts RGB color value to HSLA string value
 * @param RgbaColor
 */


rgbaToHslaStr = function rgbaToHslaStr(rgbaColor) {
  return rgbaToHsla(rgbaColor).toString();
};
/**
 * Converts HEX color value to HSLA string value
 * @param hex
 */


hexToHslaStr = function hexToHslaStr(hex) {
  var RgbaColor = hexToRgba(hex);
  return rgbaToHslaStr(RgbaColor);
};
/**
 * clamps the value to the given range [min, max]
 * @param value
 * @param min
 * @param max
 */


clamp = function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
};

/***/ })
/******/ ]);
});