import { ComponentProps } from "react";
import { Text, TextInput, View } from "react-native";
import { MapPinIcon, ShoppingCartIcon } from "phosphor-react-native";
import Animated, {
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

import { styles } from "./styles";

import { THEME } from "@styles/theme";

type Props = ComponentProps<typeof Animated.View> & {
  scrollY: SharedValue<number>;
  filterInputHeight: number;
  onLayout?: (event: any) => void;
};

export function Header({ scrollY, onLayout, filterInputHeight }: Props) {
  const headerStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        scrollY.value,
        [20, filterInputHeight],
        [THEME.COLOR.GRAY_100, THEME.COLOR.WHITE]
      ),
    };
  });
  const locationStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        scrollY.value,
        [20, filterInputHeight],
        [THEME.COLOR.GRAY_900, THEME.COLOR.GRAY_200]
      ),
    };
  });

  return (
    <Animated.View style={[styles.container, headerStyle]} onLayout={onLayout}>
      <View style={styles.containerLocation}>
        <MapPinIcon color={THEME.COLOR.PURPLE} />

        <Animated.Text style={[styles.title, locationStyle]}>
          Guarapari, ES
        </Animated.Text>

        <ShoppingCartIcon color={THEME.COLOR.YELLOW_DARK} />
      </View>
    </Animated.View>
  );
}
