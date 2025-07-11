import { StyleSheet } from "react-native";

import { THEME } from "@styles/theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingHorizontal: 24,
  },
  containerTexts: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontFamily: THEME.FONTS.BALOO_BOLD,
    color: THEME.COLOR.YELLOW_DARK,
  },
  body: {
    fontSize: 14,
    fontFamily: THEME.FONTS.REGULAR,
    color: THEME.COLOR.GRAY_200,
    flexShrink: 1,
  },
  button: {
    borderRadius: 6,
    backgroundColor: THEME.COLOR.PURPLE_DARK,
    paddingVertical: 12,
    paddingHorizontal: 64,
    marginTop: 64,
  },
  textButton: {
    color: THEME.COLOR.WHITE,
    fontFamily: THEME.FONTS.BOLD,
  },
});
