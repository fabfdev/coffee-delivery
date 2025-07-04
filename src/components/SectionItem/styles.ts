import { StyleSheet } from "react-native";

import { THEME } from "@styles/theme";

export const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    paddingTop: 32,
  },
  container: {
    backgroundColor: THEME.COLOR.GRAY_800,
    marginHorizontal: 24,
    borderTopStartRadius: 8,
    borderTopEndRadius: 32,
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 32,
    borderWidth: 1,
    borderColor: THEME.COLOR.GRAY_700,
    shadowColor: THEME.COLOR.BLACK,
    shadowRadius: 1,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    paddingVertical: 16,
    flexDirection: "row",
    paddingHorizontal: 8,
  },
  image: {
    shadowColor: THEME.COLOR.BLACK,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    position: "absolute",
    top: 0,
    left: 40,
    zIndex: 10,
  },
  dataContainer: {
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
    paddingRight: 8,
    marginLeft: 120,
  },
  title: {
    color: THEME.COLOR.GRAY_200,
    fontSize: 16,
    fontFamily: THEME.FONTS.BALOO_BOLD,
    marginBottom: 4,
  },
  description: {
    color: THEME.COLOR.GRAY_400,
    fontSize: 12,
    fontFamily: THEME.FONTS.REGULAR,
    marginBottom: 8,
    flexWrap: "wrap",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 2,
  },
  priceCurrency: {
    color: THEME.COLOR.YELLOW_DARK,
    fontSize: 14,
    fontFamily: THEME.FONTS.REGULAR,
  },
  price: {
    color: THEME.COLOR.YELLOW_DARK,
    fontSize: 20,
    fontFamily: THEME.FONTS.BOLD,
  },
});
