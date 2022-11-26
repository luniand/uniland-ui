import { breadcrumbAnatomy as parts } from "@luniand-ui/anatomy";
import type {
  PartsStyleObject,
  SystemStyleObject,
} from "@luniand-ui/theme-tools";

const baseStyleLink: SystemStyleObject = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: "inherit",
  _hover: {
    textDecoration: "underline",
  },
  _focusVisible: {
    boxShadow: "outline",
  },
};

const baseStyle: PartsStyleObject<typeof parts> = {
  link: baseStyleLink,
};

export default {
  parts: parts.keys,
  baseStyle,
};
