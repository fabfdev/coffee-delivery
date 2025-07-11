import { THEME } from "@styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLOR.GRAY_900,
    flex: 1,
  },
  toolbar: {
    flexDirection: "row",
    marginTop: 16,
    paddingHorizontal: 24,
    paddingVertical: 32,
    position: "relative",
    alignItems: "center",
    borderBottomColor: THEME.COLOR.GRAY_700,
    borderBottomWidth: 1,
  },
  title: {
    fontFamily: THEME.FONTS.BALOO_BOLD,
    fontSize: 16,
    color: THEME.COLOR.GRAY_200,
    position: "absolute",
    left: 0,
    right: 0,
    textAlign: "center",
  },
  leftActionContainer: {
    backgroundColor: THEME.COLOR.RED_LIGHT,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  /*
  shadowColor: Cor da sombra
•  shadowOffset: Posição da sombra (height negativo = sombra no topo)
•  shadowOpacity: Transparência da sombra (0-1)
•  shadowRadius: Blur da sombra
•  elevation: Sombra no Android (maior valor = sombra mais pronunciada)
•  backgroundColor: Necessário para a sombra funcionar corretamente
  */
  subtotalContainer: {
    paddingHorizontal: 24,
    paddingBottom: 48,
    paddingTop: 24,
    // Sombra mais visível
    shadowColor: THEME.COLOR.BLACK,
    shadowOffset: {
      width: 0,
      height: -6,
    },
    shadowOpacity: 0.35,
    shadowRadius: 20,
    elevation: 20,
    backgroundColor: THEME.COLOR.GRAY_900,
    gap: 18,
  },
  subtotalTitle: {
    fontFamily: THEME.FONTS.REGULAR,
    fontSize: 16,
    color: THEME.COLOR.GRAY_200,
  },
  subtotalPrice: {
    fontFamily: THEME.FONTS.BALOO_BOLD,
    fontSize: 16,
    color: THEME.COLOR.GRAY_200,
  },
  buttonContainer: {
    backgroundColor: THEME.COLOR.YELLOW_DARK,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 6,
  },
  buttonTitle: {
    color: THEME.COLOR.WHITE,
    fontFamily: THEME.FONTS.BOLD,
  }
});
