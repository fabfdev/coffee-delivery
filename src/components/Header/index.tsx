import { ComponentProps } from "react";
import { Text, TextInput, View } from "react-native";
import {
  MapPinIcon,
  ShoppingCartIcon,
} from "phosphor-react-native";
import Animated, {
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

import { styles } from "./styles";

import { THEME } from "@styles/theme";

type Props = ComponentProps<typeof Animated.View> & {
  scrollY: SharedValue<number>;
  onLayout?: (event: any) => void;
};

export function Header({ scrollY, onLayout }: Props) {
  const headerStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        scrollY.value,
        [20, 301],
        [THEME.COLOR.GRAY_100, THEME.COLOR.WHITE]
      ),
    };
  });

  return (
    <Animated.View style={[styles.container, headerStyle]} onLayout={onLayout}>
      <View style={styles.containerLocation}>
        <MapPinIcon color={THEME.COLOR.PURPLE} />

        <Text style={styles.title}>Guarapari, ES</Text>

        <ShoppingCartIcon color={THEME.COLOR.YELLOW_DARK} />
      </View>      
    </Animated.View>
  );
}
