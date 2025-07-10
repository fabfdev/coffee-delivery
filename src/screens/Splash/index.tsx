import { useEffect, useState } from "react";
import { Dimensions, StatusBar, Text, View } from "react-native";
import Animated, {
  interpolate,
  interpolateColor,
  Keyframe,
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
  const opacityLogoProperty = useSharedValue(0);

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
  }, [logoWidth]);

  useEffect(() => {
    opacityProperty.value = withDelay(1600, withTiming(1, { duration: 1000 }));
  }, [logoWidth]);

  useEffect(() => {
    opacityLogoProperty.value = withDelay(
      2600,
      withTiming(1, { duration: 1000 })
    );
  }, [logoWidth]);

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Animated.View style={[styles.icon, appIconAnimated]}>
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
