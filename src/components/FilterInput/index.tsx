import { Text, TextInput, View } from "react-native";
import Animated, {
  interpolate,
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { MagnifyingGlassIcon } from "phosphor-react-native";

import { THEME } from "@styles/theme";

import { styles } from "./styles";

import CoffeeSvg from "@assets/image_coffee.svg";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof Animated.View> & {
  scrollY: SharedValue<number>;
  onLayout?: (event: any) => void;
};

export function FilterInput({ scrollY, onLayout }: Props) {
  const containerStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [0, 301], [1, 0]),
    };
  });

  return (
    <Animated.View style={[styles.container, containerStyle]} onLayout={onLayout}>
      <Text style={styles.headline} numberOfLines={2}>
        Encontre o café perfeito para qualquer hora do dia
      </Text>

      <View style={styles.containerInput}>
        <MagnifyingGlassIcon color={THEME.COLOR.GRAY_400} />
        <TextInput
          style={styles.input}
          placeholder="Pesquisar"
          placeholderTextColor={THEME.COLOR.GRAY_400}
        />
      </View>

      <CoffeeSvg style={styles.coffeeImg} />
    </Animated.View>
  );
}
