import { THEME } from "@styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    paddingTop: 32,
  },
  container: {
    width: 208,
    minHeight: 242,
    backgroundColor: THEME.COLOR.GRAY_800,
    justifyContent: "center",
    alignItems: "center",
    borderTopStartRadius: 8,
    borderTopEndRadius: 40,
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 40,
    paddingTop: 40,
    shadowColor: THEME.COLOR.BLACK,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 4, },
    shadowOpacity: 0.2,
  },
  image: {
    position: "absolute",
    top: 0,
    zIndex: 10,
    shadowColor: THEME.COLOR.BLACK,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 4, },
    shadowOpacity: 0.2,
  },
  coffeeType: {
    backgroundColor: THEME.COLOR.PURPLE_LIGHT,
    color: THEME.COLOR.PURPLE_DARK,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 100,
    fontFamily: THEME.FONTS.BOLD,
    textTransform: "uppercase",
    fontSize: 10,
    marginVertical: 16,
  },
  title: {
    color: THEME.COLOR.GRAY_200,
    fontFamily: THEME.FONTS.BALOO_BOLD,
    fontSize: 20,
  },
  description: {
    color: THEME.COLOR.GRAY_400,
    textAlign: "center",
    fontSize: 12,
    fontFamily: THEME.FONTS.REGULAR,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 4,
  },
  priceCurrency: {
    color: THEME.COLOR.YELLOW_DARK,
    fontSize: 14,
    fontFamily: THEME.FONTS.REGULAR,
  },
  price: {
    color: THEME.COLOR.YELLOW_DARK,
    fontFamily: THEME.FONTS.BALOO_BOLD,
    fontSize: 24,
  }
});
