import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import {
  Baloo2_700Bold,
  useFonts as useFontsBaloo,
} from "@expo-google-fonts/baloo-2";

import { THEME } from "@styles/theme";

export default function App() {
  const [fontsRobotoLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  const [fontsBalooLoaded] = useFontsBaloo({ Baloo2_700Bold });

  if (!fontsRobotoLoaded && !fontsBalooLoaded) {
    return;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Open up App.tsx to start working on your app!
      </Text>
      <Text style={styles.subTitle}>SubTitle with Baloo</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: THEME.FONTS.BOLD,
  },
  subTitle: {
    fontFamily: THEME.FONTS.BALOO_BOLD,
  },
});
