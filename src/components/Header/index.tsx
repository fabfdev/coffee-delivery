import { ComponentProps } from "react";
import { TouchableOpacity, View } from "react-native";
import { MapPinIcon, ShoppingCartIcon } from "phosphor-react-native";
import Animated, {
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

import { THEME } from "@styles/theme";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

type Props = ComponentProps<typeof Animated.View> & {
  scrollY: SharedValue<number>;
  totalHeight: number;
  onLayout?: (event: any) => void;
};

export function Header({ scrollY, onLayout, totalHeight }: Props) {
  const navigator = useNavigation<AppNavigatorRoutesProps>();

  const headerStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        scrollY.value,
        [20, totalHeight],
        [THEME.COLOR.GRAY_100, THEME.COLOR.WHITE]
      ),
    };
  });
  const locationStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        scrollY.value,
        [20, totalHeight],
        [THEME.COLOR.GRAY_900, THEME.COLOR.GRAY_200]
      ),
    };
  });

  function handleCart() {
    navigator.navigate("cart");
  }

  return (
    <Animated.View style={[styles.container, headerStyle]} onLayout={onLayout}>
      <View style={styles.containerLocation}>
        <MapPinIcon color={THEME.COLOR.PURPLE} />

        <Animated.Text style={[styles.title, locationStyle]}>
          Guarapari, ES
        </Animated.Text>

        <TouchableOpacity onPress={handleCart}>
          <ShoppingCartIcon color={THEME.COLOR.YELLOW_DARK} />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}
