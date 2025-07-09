import { StyleSheet } from "react-native";

import { THEME } from "@styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingBottom: 32,
    paddingTop: 24,
    paddingHorizontal: 24,
    backgroundColor: THEME.COLOR.WHITE,
  },
  cartContainer: {
    backgroundColor: THEME.COLOR.GRAY_500,
    padding: 8,
    borderRadius: 8,
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  cartSize: {
    backgroundColor: THEME.COLOR.PURPLE,
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: -10,
    right: -10,
  },
  cartSizeText: { fontSize: 12, color: THEME.COLOR.WHITE },
  addedCartItemsContainer: { justifyContent: "center", flex: 1 },
  addedItemText: {
    fontFamily: THEME.FONTS.REGULAR,
    color: THEME.COLOR.GRAY_400,
    fontSize: 14,
  },
  addedItemInfoText: {
    fontFamily: THEME.FONTS.REGULAR,
    color: THEME.COLOR.GRAY_400,
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  buttonText: {
    fontFamily: THEME.FONTS.BOLD,
    textTransform: "uppercase",
    color: THEME.COLOR.PURPLE,
    fontSize: 12,
  },
});
