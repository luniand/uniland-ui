import { ColorModeRef } from "@uisland-ui/c-color-mode"
import { UnwrapRef } from "vue"
import { ThemeOverride } from "../extend-theme"
import { Options } from "@emotion/cache"

interface ExtendIconsPath {
  path: string
  viewBox?: string
}

interface IconsOptions {
  pack?: "fa" | "fe"
  library?: {}
  extend?: Record<string, ExtendIconsPath>
}
export interface UislandPluginOptions {
  cssReset?: boolean
  extendTheme?: ThemeOverride
  icons?: IconsOptions
  defaultColorMode?: UnwrapRef<ColorModeRef>
  emotionCacheOptions?: Options
}
