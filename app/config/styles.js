import { Platform } from "react-native";

import colors from "./colors";

const defaultStyles = {
  colors,
  text: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "serif" : "Avenir",
  },
};

export default defaultStyles;
