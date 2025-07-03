import { StyleSheet } from "react-native";

import { THEME } from "@styles/theme";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 48,
    paddingBottom: 24,
    paddingHorizontal: 24,
  },
  containerLocation: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    flex: 1,
    color: THEME.COLOR.GRAY_900,
    fontFamily: THEME.FONTS.REGULAR,
    fontSize: 14,
    marginLeft: 8,
  }
});
