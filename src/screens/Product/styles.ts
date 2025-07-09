import { StyleSheet } from "react-native";

import { THEME } from "@styles/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLOR.GRAY_100,
    paddingTop: 36,
    height: "100%",
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mainContent: {
    paddingHorizontal: 24,
  },
  tag: {
    alignSelf: "flex-start",
    fontSize: 10,
    fontFamily: THEME.FONTS.REGULAR,
    color: THEME.COLOR.WHITE,
    marginTop: 36,
    backgroundColor: THEME.COLOR.GRAY_200,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 80,
  },
  namePriceContainer: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  name: {
    fontSize: 24,
    fontFamily: THEME.FONTS.BALOO_BOLD,
    color: THEME.COLOR.WHITE,
    flex: 1,
  },
  priceLabel: {
    fontSize: 14,
    color: THEME.COLOR.YELLOW,
    fontFamily: THEME.FONTS.BALOO_BOLD,
    marginRight: 4,
  },
  price: {
    fontSize: 36,
    color: THEME.COLOR.YELLOW,
    fontFamily: THEME.FONTS.BALOO_BOLD,
  },
  description: {
    fontSize: 16,
    fontFamily: THEME.FONTS.REGULAR,
    color: THEME.COLOR.GRAY_500,
    marginTop: 8,
  },
  coffeeContainer: {
    alignItems: "center",
  },
  smoke: {
    zIndex: 2,
  },
  coffeeImg: {
    zIndex: 1,
  },
  coffeeSizeText: {
    color: THEME.COLOR.GRAY_400,
    fontSize: 14,
    fontFamily: THEME.FONTS.REGULAR,
    marginBottom: 8,
  },
  coffeeSizeContainer: {
    backgroundColor: THEME.COLOR.WHITE,
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 36,
  },
  coffeeSelectionContainer: {
    flexDirection: "row",
    gap: 8,
  },
  addToCardContainer: {
    flexDirection: "row",
    backgroundColor: THEME.COLOR.GRAY_700,
    alignItems: "center",
    marginTop: 18,
    padding: 8,
    borderRadius: 6,
  },
  quantityText: {
    color: THEME.COLOR.GRAY_100,
    fontFamily: THEME.FONTS.BOLD,
    fontSize: 16,
  },
  quantityContainer: {
    gap: 16,
    flexDirection: "row",
    marginRight: 24,
  },
  addButton: {
    backgroundColor: THEME.COLOR.PURPLE_DARK,
    height: 46,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    borderRadius: 8,
  },
  addButtonText: {
    color: THEME.COLOR.WHITE,
    fontSize: 14,
    fontFamily: THEME.FONTS.BOLD,
  }
});
