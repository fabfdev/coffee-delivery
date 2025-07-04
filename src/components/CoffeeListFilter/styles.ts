import { THEME } from "@styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    minHeight: 90,
    backgroundColor: THEME.COLOR.WHITE,
    justifyContent: "center",
    paddingHorizontal: 24,
    gap: 8,
  },
  title: {
    fontFamily: THEME.FONTS.BALOO_BOLD,
    fontSize: 16,
    color: THEME.COLOR.GRAY_300,
  },
  filterContainer: {
    flexDirection: "row",
    gap: 6,
  },
  
});
