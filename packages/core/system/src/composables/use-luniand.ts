import { inject } from "@vue/runtime-core";
import { useColorMode } from "@luniand-ui/color-mode";
import { Dict } from "@luniand-ui/utils";

/** Provides theme object in component context */
export const useTheme = <T extends object = Dict>(): T => {
  const theme = inject("$luniandTheme") as T;
  console.log("theme from use:", theme);

  return theme;
};

/** Single hook to provide theme and color mode values */
export const useLuniand = () => {
  const theme = useTheme();
  const { colorMode } = useColorMode();
  return {
    theme,
    colorMode,
  };
};
