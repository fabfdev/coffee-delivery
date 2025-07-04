import { StyleSheet } from "react-native";

import { THEME } from "@styles/theme";

export const styles = StyleSheet.create({
  filterButton: {
    borderColor: THEME.COLOR.PURPLE,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  filterTitle: {
    color: THEME.COLOR.PURPLE_DARK,
    fontSize: 10,
    fontFamily: THEME.FONTS.BOLD,
  },
});
