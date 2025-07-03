import { StyleSheet } from "react-native";

import { THEME } from "@styles/theme";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
  headline: {
    fontFamily: THEME.FONTS.BALOO_BOLD,
    fontSize: 20,
    color: THEME.COLOR.WHITE,
  },
  containerInput: {
    height: 42,
    backgroundColor: THEME.COLOR.GRAY_200,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    gap: 8,
    borderRadius: 4,
    marginTop: 12,
  },
  input: {
    color: THEME.COLOR.WHITE,
    fontFamily: THEME.FONTS.REGULAR,
  },
  coffeeImg: {
    alignSelf: "flex-end",
  },
});
