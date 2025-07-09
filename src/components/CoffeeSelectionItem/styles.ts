import { THEME } from "@styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: THEME.COLOR.GRAY_700,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  text: {
    fontSize: 14,
    color: THEME.COLOR.GRAY_300,
    fontFamily: THEME.FONTS.REGULAR,
  },
  boldText: {
    fontSize: 14,
    color: THEME.COLOR.PURPLE,
    fontFamily: THEME.FONTS.BOLD,
    position: "absolute"
  }
});
