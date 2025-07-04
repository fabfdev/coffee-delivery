import { StyleSheet } from "react-native";

import { THEME } from "@styles/theme";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  title: {
    fontFamily: THEME.FONTS.BOLD,
    fontSize: 14,
    color: THEME.COLOR.GRAY_400,
  },
});
