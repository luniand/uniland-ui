import { formErrorAnatomy as parts } from "@uniland-ui/anatomy"
import type {
  PartsStyleFunction,
  SystemStyleFunction,
} from "@uniland-ui/theme-tools"
import { mode } from "@uniland-ui/theme-tools"

const baseStyleText: SystemStyleFunction = (props) => {
  return {
    color: mode("red.500", "red.300")(props),
    mt: 2,
    fontSize: "sm",
    lineHeight: "normal",
  }
}

const baseStyleIcon: SystemStyleFunction = (props) => {
  return {
    marginEnd: "0.5em",
    color: mode("red.500", "red.300")(props),
  }
}

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  text: baseStyleText(props),
  icon: baseStyleIcon(props),
})

export default {
  parts: parts.keys,
  baseStyle,
}
