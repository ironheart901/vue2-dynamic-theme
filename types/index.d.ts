import Vue, { PluginFunction, PluginObject } from "vue";

declare const Vue2DynamicTheme: Vue2DynamicTheme;

export default Vue2DynamicTheme;

export interface Vue2DynamicTheme extends PluginObject<Vue2DynamicThemeOptions> {
  install: PluginFunction<Vue2DynamicThemeOptions>;
  mixin: {
    methods: {
      $themePalette: any
      $logThemePalette: () => void
      $generateThemePaletteFromTheme: (theme: any) => void
      $getAppropriateTextColor: (hslStr: string) => string
    };
  };
}

export interface Vue2DynamicThemeOptions {}
