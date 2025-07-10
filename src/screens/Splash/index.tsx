import { useEffect, useState } from "react";
import { Dimensions, StatusBar } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";

import { styles } from "./styles";

import { THEME } from "@styles/theme";

import AppIcon from "@assets/app_icon.svg";
import Logo from "@assets/logo.svg";

const { width: screenWidth } = Dimensions.get("window");

export function Splash() {
  const backgroundProperty = useSharedValue(0);
  const opacityProperty = useSharedValue(0);
  const appIconPositionProperty = useSharedValue(0);
  const opacityLogoProperty = useSharedValue(0);

  const [appIconWidth, setAppIconWidth] = useState(0);
  const [appIconPosition, setAppIconPosition] = useState(0);
  const [logoWidth, setLogoWidth] = useState(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        backgroundProperty.value,
        [0, 1],
        [THEME.COLOR.PURPLE_DARK, THEME.COLOR.PURPLE]
      ),
    };
  });

  const appIconAnimated = useAnimatedStyle(() => {
    return {
      opacity: opacityProperty.value,
      transform: [{ translateX: appIconPositionProperty.value }],
    };
  });

  const opacityLogoAnimated = useAnimatedStyle(() => {
    return {
      opacity: opacityLogoProperty.value,
    };
  });

  useEffect(() => {
    StatusBar.setBarStyle("light-content");
  }, []);

  useEffect(() => {
    backgroundProperty.value = withDelay(
      600,
      withTiming(1, { duration: 1000 })
    );
  }, [logoWidth, appIconWidth, appIconPosition]);

  useEffect(() => {
    opacityProperty.value = withDelay(1600, withTiming(1, { duration: 1000 }));
    appIconPositionProperty.value = ((appIconPosition + appIconWidth / 2 + logoWidth / 2 + 6) / 2) - appIconWidth
    appIconPositionProperty.value = withDelay(3000, withTiming(0, { duration: 1000 }))
  }, [logoWidth, appIconWidth, appIconPosition]);

  useEffect(() => {
    opacityLogoProperty.value = withDelay(
      3600,
      withTiming(1, { duration: 1000 })
    );
  }, [logoWidth, appIconWidth, appIconPosition]);

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Animated.View
        style={[styles.icon, appIconAnimated]}
        onLayout={(event) => {
          setAppIconWidth(event.nativeEvent.layout.width);
          setAppIconPosition(event.nativeEvent.layout.x);
        }}
      >
        <AppIcon />
      </Animated.View>
      <Animated.View
        style={[styles.icon, opacityLogoAnimated]}
        onLayout={(event) => {
          setLogoWidth(event.nativeEvent.layout.width);
        }}
      >
        <Logo />
      </Animated.View>
    </Animated.View>
  );
}
