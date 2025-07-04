import { TouchableOpacity } from "react-native";
import { useEffect } from "react";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { THEME } from "@styles/theme";

import { styles } from "./styles";

const TouchableOpacityAnimated =
  Animated.createAnimatedComponent(TouchableOpacity);

type Props = {
  index: number;
  item: string;
  onPress: () => void;
  isChecked: boolean;
};

export function CoffeeListItem({ index, item, onPress, isChecked }: Props) {
  const checked = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
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

  useEffect(() => {
    checked.value = isChecked ? 1 : 0;
  }, [isChecked]);

  return (
    <TouchableOpacityAnimated
      key={index}
      style={[styles.filterButton, animatedStyle]}
      onPress={onPress}
    >
      <Animated.Text style={[styles.filterTitle, titleAnimatedStyle]}>
        {item.toUpperCase()}
      </Animated.Text>
    </TouchableOpacityAnimated>
  );
}
