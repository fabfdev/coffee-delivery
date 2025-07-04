import { StyleSheet } from "react-native";

export const TOP_SPACING_BEST_COFFEE = 80;

export const styles = StyleSheet.create({
  container: {
    marginTop: TOP_SPACING_BEST_COFFEE * -1, // Negative margin to overlap FilterInput
    zIndex: 1,
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  contentContainerStyles: {
    paddingRight: 24, // Extra padding for last item
    gap: 20,
  },
});
