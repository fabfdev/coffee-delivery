import { Pressable, TouchableOpacity } from "react-native";
import { useEffect } from "react";
import Animated, {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { THEME } from "@styles/theme";

import { styles } from "./styles";

const PressableAnimated =
  Animated.createAnimatedComponent(Pressable);

type Props = {
  index: number;
  item: string;
  onPress: () => void;
  isChecked: boolean;
};

export function CoffeeListItem({ index, item, onPress, isChecked }: Props) {
  const checked = useSharedValue(0);
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      backgroundColor: withTiming(
        interpolateColor(
          checked.value,
          [0, 1],
          [THEME.COLOR.WHITE, THEME.COLOR.PURPLE]
        )
      ),
    };
  });

  const titleAnimatedStyle = useAnimatedStyle(() => {
    return {
      color: withTiming(
        interpolateColor(
          checked.value,
          [0, 1],
          [THEME.COLOR.PURPLE_DARK, THEME.COLOR.WHITE]
        )
      ),
    };
  });

  function onPressIn() {
    scale.value = withTiming(1.2, { easing: Easing.bounce, duration: 700 });
  }

  function onPressOut() {
    scale.value = withTiming(1, { easing: Easing.bounce, duration: 700 });
  }

  useEffect(() => {
    checked.value = isChecked ? 1 : 0;
  }, [isChecked]);

  return (
    <PressableAnimated
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      key={index}
      style={[styles.filterButton, animatedStyle]}
      onPress={onPress}
    >
      <Animated.Text style={[styles.filterTitle, titleAnimatedStyle]}>
        {item.toUpperCase()}
      </Animated.Text>
    </PressableAnimated>
  );
}
