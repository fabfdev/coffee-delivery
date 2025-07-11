import { THEME } from "@styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderBottomColor: THEME.COLOR.GRAY_700,
    backgroundColor: THEME.COLOR.GRAY_900,
    borderBottomWidth: 1,
    alignItems: "center",
    gap: 24,
  },
  containerButtons: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 6,
    borderColor: THEME.COLOR.GRAY_600,
    gap: 12,
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignItems: "center",
    marginTop: 4,
  },
  content: {
    flex: 1,
    gap: 4,
  },
  title: {
    fontSize: 16,
    fontFamily: THEME.FONTS.REGULAR,
    color: THEME.COLOR.GRAY_100,
  },
  size: {
    fontSize: 14,
    fontFamily: THEME.FONTS.REGULAR,
    color: THEME.COLOR.GRAY_400,
  },
  quantity: {
    fontSize: 16,
    fontFamily: THEME.FONTS.REGULAR,
    color: THEME.COLOR.GRAY_100,
  },
  containerActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  trashButton: {
    backgroundColor: THEME.COLOR.GRAY_700,
    padding: 10,
    borderRadius: 6,
  },
  price: {
    fontSize: 16,
    fontFamily: THEME.FONTS.BALOO_BOLD,
    color: THEME.COLOR.GRAY_100,
    alignSelf: "flex-start",
  },
});
