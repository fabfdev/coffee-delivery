import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import { BestCoffee } from "@components/BestCoffee";

import { BestCoffeeData } from "@data/bestCoffeeData";
import { styles, TOP_SPACING_BEST_COFFEE } from "./styles";

type Props = {
  scrollY: SharedValue<number>;
  totalHeight: number;
  setBestCoffeeHeight: (value: number) => void;
};

export function BestCoffeeList({
  scrollY,
  totalHeight,
  setBestCoffeeHeight,
}: Props) {
  const bestCoffeeScrollX = useSharedValue(0);

  const bestCoffeeAnimatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollY.value,
      [0, totalHeight],
      [1, 0],
      "clamp"
    );
    return {
      opacity: opacity,
    };
  });

  return (
    <Animated.FlatList
      data={BestCoffeeData}
      keyExtractor={(item) => String(item.id)}
      onScroll={(event) => {
        bestCoffeeScrollX.value = event.nativeEvent.contentOffset.x;
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <BestCoffee scrollX={bestCoffeeScrollX} item={item} index={index} />
      )}
      onLayout={(event) => {
        const { height } = event.nativeEvent.layout;
        setBestCoffeeHeight(height - TOP_SPACING_BEST_COFFEE);
      }}
      style={[, styles.container, bestCoffeeAnimatedStyle]}
      contentContainerStyle={styles.contentContainerStyles}
    />
  );
}
