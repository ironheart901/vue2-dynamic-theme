var Vue2DynamicTheme = {
  install: function(Vue, options) {

    /** Set default options */
    if (!options) {
      options = {} 
    }
    if (!options.theme) {
      options.theme = {}
    }
    if (typeof options.autoLogThemePalette == 'undefined') {
      options.autoLogThemePalette = true
    }

    /** Set theme palette to intial passed theme */
    Vue.prototype.$themePalette = generateThemePaletteFromTheme(options.theme)
    if (Object.keys(options.theme).length && options.autoLogThemePalette) {
      logThemePalette(Vue.prototype.$themePalette)
    }

    /**
     * Log theme with corresponding colors to console
     */
    Vue.prototype.$logThemePalette = () => {
      logThemePalette(Vue.prototype.$themePalette)
    }

    /** Returns black or white color depending on lightness of passed contrast color */
    Vue.prototype.$getAppropriateTextColor = (hslaStr) => {
      return getAppropriateTextColor(hslaStr)
    }

    /**
     * Generates theme palette from theme object
     */
    Vue.prototype.$generateThemePaletteFromTheme = theme => {
      Vue.prototype.$themePalette = generateThemePaletteFromTheme(theme)
      if (options.autoLogThemePalette) {
        Vue.prototype.$logThemePalette(Vue.prototype.$themePalette)
      }
    }

    Vue.mixin({
      mounted() {
        this.$nextTick(() => {
          applyThemePaletteToElements(
            Vue.prototype.$themePalette,
            this.$options._scopeId
          )
        })
      },
      updated() {
        this.$nextTick(() => {
          applyThemePaletteToElements(
            Vue.prototype.$themePalette,
            this.$options._scopeId
          )
        })
      }
    })
  }
}

export default Vue2DynamicTheme;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Vue2DynamicTheme);
  window.Vue2DynamicTheme = Vue2DynamicTheme;
}

/********* */

var StyleType  = {
  Text: 'text',
  Background: 'bg',
  Border: 'border'
}

class ColorPalette {

  constructor(light, base, dark) {
    this.light = light
    this.base = base
    this.dark = dark
  }
}

class HslaColor {

  constructor(h, s, l, a) {
    this.h = h
    this.s = s
    this.l = l
    this.a = a
  }

  toString() {
    return 'hsla(' + this.h + ',' + this.s + '%,' + this.l + '%,' + this.a + ')'
  }

  /** hsl(h, s%, l%) or hsla(h, s%, l%, a) */
  static fromString(str) {
    let h = 0,
      s = 0,
      l = 0,
      a = 1
    let strSplit = str.split(',')

    if (strSplit.length != 3 && strSplit.length != 4) {
      return null
    }

    if (strSplit.length == 3) {
      h = clamp(parseInt(strSplit[0].replace('hsl(', '')), 0, 360)
      s = clamp(parseInt(strSplit[1].replace('%', '')), 0, 100)
      l = clamp(parseInt(strSplit[2].replace('%)', '')), 0, 100)
    } else if (strSplit.length == 4) {
      h = clamp(parseInt(strSplit[0].replace('hsla(', '')), 0, 360)
      s = clamp(parseInt(strSplit[1].replace('%', '')), 0, 100)
      l = clamp(parseInt(strSplit[2].replace('%', '')), 0, 100)
      a = clamp(parseFloat(strSplit[3].replace(')', '')), 0, 1)
    }

    if (isNaN(h + s + l + a)) {
      return null
    }

    return new HslaColor(h, s, l, a)
  }
}

class RgbaColor {

  constructor(r, g, b, a) {
    this.r = r
    this.g = g
    this.b = b
    this.a = a
  }

  /** rgb(r,g,b) or rgba(r,g,b,a) */
  static fromString(str) {
    let r = 0,
      g = 0,
      b = 0,
      a = 1
    let strSplit = str.split(',')

    if (strSplit.length != 3 && strSplit.length != 4) {
      return null
    }

    if (strSplit.length == 3) {
      r = clamp(parseInt(strSplit[0].replace('rgb(', '')), 0, 255)
      g = clamp(parseInt(strSplit[1]), 0, 255)
      b = clamp(parseInt(strSplit[2].replace(')', '')), 0, 255)
    } else if (strSplit.length == 4) {
      r = clamp(parseInt(strSplit[0].replace('rgba(', '')), 0, 255)
      g = clamp(parseInt(strSplit[1]), 0, 255)
      b = clamp(parseInt(strSplit[2]), 0, 255)
      a = clamp(parseFloat(strSplit[3].replace(')', '')), 0, 1)
    }

    if (isNaN(r + g + b + a)) {
      return null
    }
    return new RgbaColor(r, g, b, a)
  }
}

/**
 * Applies theme palette color values to DOM elements that have classes of
 * {type}-{color} or {type}-{color}-{variant} signatures
 * componentScopeId is needed so that only DOM elements unique to the
 * component are processed
 * @param themePalette
 * @param componentScopeId
 */
function applyThemePaletteToElements(themePalette, componentScopeId) {
  /** scopeId is needed to avoid redundant processing of DOM elements */
  if (componentScopeId) {
    Object.entries(themePalette).forEach(colorPaletteKeyValue => {
      let colorPaletteKV = colorPaletteKeyValue
      applyColorPaletteToElements(StyleType.Text, colorPaletteKV, componentScopeId)
      applyColorPaletteToElements(StyleType.Background, colorPaletteKV, componentScopeId)
      applyColorPaletteToElements(StyleType.Border, colorPaletteKV, componentScopeId)
    })
  }
}

/**
 * Given a style type ("text", "bg", or "border")
 * @param elementType
 * @param colorPaletteKeyValue
 */
function applyColorPaletteToElements(styleType, colorPaletteKeyValue, componentScopeId) {
  let lightElements = getColorElements(styleType, colorPaletteKeyValue[0], componentScopeId, 'light')
  let baseElements = getColorElements(styleType, colorPaletteKeyValue[0], componentScopeId, null)
  let darkElements = getColorElements(styleType, colorPaletteKeyValue[0], componentScopeId, 'dark')

  let styleParam = styleTypeToCssProperty(styleType)

  for (let element of lightElements) {
    element.style[styleParam] = colorPaletteKeyValue[1].light
  }
  for (let element of baseElements) {
    element.style[styleParam] = colorPaletteKeyValue[1].base
  }
  for (let element of darkElements) {
    element.style[styleParam] = colorPaletteKeyValue[1].dark
  }
}

/**
 * returns collection of HTMLElements that have the corresponding colorKey, variant, and type
 * class = "type-color" for base or "type-color-variant" for light or dark variant
 * @param styleType
 * @param colorKey
 * @param variant
 * @param type
 */
function getColorElements(styleType, colorKey, componentScopeId, variant) {
  let styleClassStr = getStyleClassStr(styleType, colorKey, variant)
  let matchingElements = document.querySelectorAll(
    '[' + componentScopeId + '].' + styleClassStr
  )
  return matchingElements
}

/**
 * Returns the resulting dyanamic theme class string in the format: {{style}}-{{colorKey}}-{{variant}}
 * @param styleType
 * @param colorKey
 * @param variant
 */
function getStyleClassStr(styleType, colorKey, variant) {
  let base = styleType + '-' + colorKey
  return variant ? base + '-' + variant : base
}

/**
 * Converts StyleType enum to corresponding css property
 * @param styleType
 */
function styleTypeToCssProperty(styleType) {
  switch (styleType) {
    case StyleType.Text:
      return 'color'
    case StyleType.Background:
      return 'backgroundColor'
    case StyleType.Border:
      return 'borderColor'
    default:
      return ''
  }
}

/**
 * Generate a theme color palette with light and dark variants for each "core" color
 * @param theme
 */
function generateThemePaletteFromTheme(theme) {
  let themePalette = {} 
  Object.entries(theme).forEach(colorKeyValue => {
    if (typeof colorKeyValue[1] == 'string') {
      let colorValueStr = colorKeyValue[1]
      colorValueStr = colorStringToHslaString(colorValueStr)
      if (colorValueStr) {
        themePalette[colorKeyValue[0]] = new ColorPalette(
          generateLightColorVariant(colorValueStr),
          colorValueStr,
          generateDarkColorVariant(colorValueStr)
        )
      }
    } else {
      console.error(
        'value for theme property ' +
          "'" +
          colorKeyValue[0] +
          "'" +
          ' is not a string. The theme object must not contain nested objects or arrays; only string color values are supported - rgb, hex, or hsl.'
      )
    }
  })
  return themePalette
}

/**
 * Log theme with corresponding colors to console
 */
function logThemePalette(themePalette) {
  if (themePalette) {
    console.groupCollapsed('Theme Palette:')
    console.log('Theme Object: ', themePalette)
    console.log('Theme Colors: ')
    Object.entries(themePalette).forEach(colorKey => {
      let colorPrefix = colorKey[0]
      let colorPalette = colorKey[1]
      let labels = [
        colorPrefix + '-light',
        colorPrefix + '-base',
        colorPrefix + '-dark'
      ]
      let values = [colorPalette.light, colorPalette.base, colorPalette.dark]
      for (let i = 0; i < labels.length; i++) {
        let css =
          'background: ' +
          values[i] +
          '; color: ' +
          getAppropriateTextColor(values[i])
        console.log('%c ' + labels[i] + ' ', css)
      }
    })
    console.groupEnd()
  } else {
    console.warn('No theme palette has been generated yet.')
  }
}

/**
 * Given an HSLA string value, returns an appropriate text color for it(black or white)
 * @param hslaStr
 */
function getAppropriateTextColor(hslaStr) {
  let lightness = parseInt(hslaStr.split(',')[2].replace('%)', ''))
  return lightness <= 49 ? '#fff' : '#000'
}

/**
 * Given an hsl color, generates a light variant of that color
 * @param hslaStr
 */
function generateLightColorVariant(hslaStr) {
  let hslaColor = HslaColor.fromString(hslaStr)
  hslaColor.l = Math.round(clamp(hslaColor.l + hslaColor.l / 3, 0, 100))
  return hslaColor.toString()
}

/**
 * Given an hsl color, generates a dark variant of that color
 * @param hslaStr
 */
function generateDarkColorVariant(hslaStr) {
  let hslaColor = HslaColor.fromString(hslaStr)
  hslaColor.l = Math.round(clamp(hslaColor.l - hslaColor.l / 3, 0, 100))
  return hslaColor.toString()
}

/**
 * Given a color string value, converts that value to a HSLA string value
 * if possible; if conversion is not possible error is logged
 * @param str
 */
function colorStringToHslaString(str) {
  /** Show error for unsupported color value */
  let strError = () => {
    console.error(
      'The following color value cannot be used: ' +
        "'" +
        str +
        "'" +
        '. Color values for theme object must be correctly formatted rgb, hex, or hsl values only.'
    )
    return ''
  }

  /** Match string to regex for HEX, RGB, RGBA, HSL, and HSLA */
  let colorValueRegex = /(#([\da-f]{3}){1,2}|(rgb|hsl)a\((\d{1,3}%?,\s?){3}(1|0?\.\d+)\)|(rgb|hsl)\(\d{1,3}%?(,\s?\d{1,3}%?){2}\))/gi
  let regexMatchedStr = str.match(colorValueRegex)
  if (regexMatchedStr) {
    if (str != regexMatchedStr[0]) {
      console.warn(
        "Color value for '" +
          str +
          "' was not formatted correctly. Using matched value " +
          "'" +
          regexMatchedStr[0] +
          "' instead."
      )
    }
    str = regexMatchedStr[0]
  } else {
    return strError()
  }

  /** Convert RGB and RGBA to HSLA */
  if (str.includes('rgb')) {
    if (RgbaColor.fromString(str)) {
      return rgbaToHslaStr(RgbaColor.fromString(str))
    } else {
      return strError()
    }
  } else if (str.includes('#') && (str.length == 4 || str.length == 7)) {
    /** Convert HEX to HSLA */
    return hexToHslaStr(str)
  } else if (str.includes('hsl')) {
    /** Accept the HSL and HSLA */
    if (HslaColor.fromString(str)) {
      return str
    } else {
      return strError()
    }
  } else {
    return strError()
  }
}

/*************** Color Space Converters **********
 * credit to: https://css-tricks.com/converting-color-spaces-in-javascript/
 */

/**
 * Converts HEX color value to RGB color value
 * @param hex
 */
function hexToRgba(hex) {
  let rgbaColor = new RgbaColor(0, 0, 0, 1)
  if (hex.length == 4) {
    rgbaColor.r = +('0x' + hex[1] + hex[1])
    rgbaColor.g = +('0x' + hex[2] + hex[2])
    rgbaColor.b = +('0x' + hex[3] + hex[3])
  } else if (hex.length == 7) {
    rgbaColor.r = +('0x' + hex[1] + hex[2])
    rgbaColor.g = +('0x' + hex[3] + hex[4])
    rgbaColor.b = +('0x' + hex[5] + hex[6])
  }
  return rgbaColor
}

/**
 * Converts RGB color value to HSLA color value
 * @param RgbaColor
 */
function rgbaToHsla(rgbaColor) {
  let r = rgbaColor.r / 255
  let g = rgbaColor.g / 255
  let b = rgbaColor.b / 255
  let a = rgbaColor.a

  let cmin = Math.min(r, g, b)
  let cmax = Math.max(r, g, b)
  let delta = cmax - cmin
  let h,
    s,
    l = 0

  if (delta == 0) {
    h = 0
  } else if (cmax == r) {
    h = ((g - b) / delta) % 6
  } else if (cmax == g) {
    h = (b - r) / delta + 2
  } else {
    h = (r - g) / delta + 4
  }

  h = Math.round(h * 60)

  if (h < 0) {
    h += 360
  }

  l = (cmax + cmin) / 2
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))

  l = +(l * 100).toFixed(1)
  s = +(s * 100).toFixed(1)

  return new HslaColor(h, s, l, a)
}

/**
 * Converts RGB color value to HSLA string value
 * @param RgbaColor
 */
function rgbaToHslaStr(rgbaColor) {
  return rgbaToHsla(rgbaColor).toString()
}

/**
 * Converts HEX color value to HSLA string value
 * @param hex
 */
function hexToHslaStr(hex) {
  let RgbaColor = hexToRgba(hex)
  return rgbaToHslaStr(RgbaColor)
}

/**
 * clamps the value to the given range [min, max]
 * @param value
 * @param min
 * @param max
 */
function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value))
}
