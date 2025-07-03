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
import { Home } from "@screens/Home";

export default function App() {
  const [fontsRobotoLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  const [fontsBalooLoaded] = useFontsBaloo({ Baloo2_700Bold });

  if (!fontsRobotoLoaded && !fontsBalooLoaded) {
    return;
  }

  return (
    <View style={{ flex: 1, backgroundColor: THEME.COLOR.WHITE }}>
      <Home />
      <StatusBar style="auto" animated />
    </View>
  );
}
