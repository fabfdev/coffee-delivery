import { useEffect } from "react";
import { Pressable, Text } from "react-native";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { styles } from "./styles";

import { THEME } from "@styles/theme";

const PressableAnimated = Animated.createAnimatedComponent(Pressable);

type Props = {
  isChecked: boolean;
  size: string;
  onPress: () => void;
};

export function CoffeeSelectionItem({ isChecked, size, onPress }: Props) {
  const checked = useSharedValue(0);

  const animatedSelection = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(
        interpolateColor(
          checked.value,
          [0, 1],
          [THEME.COLOR.GRAY_700, THEME.COLOR.WHITE]
        )
      ),
      borderColor: withTiming(
        interpolateColor(
          checked.value,
          [0, 1],
          [THEME.COLOR.GRAY_300, THEME.COLOR.PURPLE]
        )
      ),
      borderWidth: withTiming(interpolate(checked.value, [0, 1], [0, 1])),
    };
  });

  const animatedText = useAnimatedStyle(() => {
    return {
      opacity: withTiming(interpolate(checked.value, [0, 1], [1, 0])),
    };
  });

  const animatedBoldText = useAnimatedStyle(() => {
    return {
      opacity: withTiming(interpolate(checked.value, [0, 1], [0, 1])),
    };
  });

  useEffect(() => {
    checked.value = isChecked ? 1 : 0;
  }, [isChecked]);

  return (
    <PressableAnimated
      style={[styles.container, animatedSelection]}
      onPress={onPress}
    >
      <Animated.Text style={[styles.text, animatedText]}>{size}</Animated.Text>
      <Animated.Text style={[styles.boldText, animatedBoldText]}>
        {size}
      </Animated.Text>
    </PressableAnimated>
  );
}
