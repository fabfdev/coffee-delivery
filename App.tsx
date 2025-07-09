import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import {
  Baloo2_700Bold,
  useFonts as useFontsBaloo,
} from "@expo-google-fonts/baloo-2";

import { Routes } from "@routes/index";

export default function App() {
  const [fontsRobotoLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  const [fontsBalooLoaded] = useFontsBaloo({ Baloo2_700Bold });

  if (!fontsRobotoLoaded && !fontsBalooLoaded) {
    return;
  }

  return (
    <GestureHandlerRootView>
      <Routes />
    </GestureHandlerRootView>
  );
}
