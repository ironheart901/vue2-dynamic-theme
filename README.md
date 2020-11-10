# vue2-dynamic-theme

A dynamic theme plugin for Vue2 projects that allows for runtime theming.

## Installation

### Direct

For direct script installation, include `vue2-dynamic-theme` after the vue script.

```html
<script src="vue.js"></script>
<script src="vue2-dynamic-theme.min.js"></script>
```

### NPM

```
npm install vue2-dynamic-theme
```

Install via `Vue.use()`:

```js
import Vue from 'vue'
import Vue2DynamicTheme from 'vue2-dynamic-theme'

Vue.use(Vue2DynamicTheme {
  theme: {
    "primary": "#fcba03",
    "secondary": "#039dfc"
  },
  autoLogThemePalette: true // set to true by default
})
```

## Usage

This plugin provides dynamic theming through uniquely constructed CSS class templates.

These CSS classes are constructed using the following rules:

- `text-`, `bg-`, and `border-` prefixes (corresponding with the CSS properties of `color`, `background-color`, and `border-color`, respectively) 

- defined theme color suffixes (`primary` and `secondary` in the NPM install example) with an optional `-light` or `-dark` variant

Example CSS classes would be `bg-primary`, `text-secondary-light`, `border-primary-dark`, etc.

* Note - the light and dark variants for each color are automatically generated by this plugin.


## Theme Configuration

A theme can be defined when the plugin is installed (as demonstrated in the NPM install section) or dynamically set/changed using the instance method `$generateThemePaletteFromTheme({themeObject})`. 

The theme object must be single depth, but you can define as many colors as desired. The passed color values can be HEX, RGBA, RGBA, HSL, or HSLA (they are all converted to HSLA). 

Example theme pattern below:

```js
theme: {
  "color-one-name" : "{color-one-value}",
  "color-two-name" : "{color-two-value}",
  "color-three-name" : "{color-three-value}",
  "color-four-name" : "{color-four-value}",
  ....
}
```

By default, the resulting theme palette is logged to the console. This can be disabled by setting the `autoLogThemePalette` parameter of the install options to `false`.


## License

[MIT](http://opensource.org/licenses/MIT)


