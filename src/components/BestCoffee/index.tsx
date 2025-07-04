import { Dimensions, Image, Text, View } from "react-native";

import { styles } from "./styles";
import { BestCoffeeDTO } from "@dtos/BestCoffeeDTO";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

type Props = {
  scrollX: SharedValue<number>;
  index: number;
  item: BestCoffeeDTO;
};

const SCREEN_WIDTH = Dimensions.get("screen").width;

export function BestCoffee({ scrollX, index, item }: Props) {
  const ItemImage = item.image;

  const ITEM_WIDTH = 208 + 20; // largura do item + gap
  const CENTER_OFFSET = SCREEN_WIDTH / 2;
  const ITEM_CENTER = ITEM_WIDTH / 2; // centro do item (114)
  const SCREEN_CENTER = SCREEN_WIDTH / 2; // centro da tela (195)

  const animatedStyle = useAnimatedStyle(() => {
    // Posição onde o centro do item atual estaria
    const itemCenterPosition = index * ITEM_WIDTH + ITEM_CENTER;

    // Calcular a posição do item atual
    /*const inputRange = [
      (index - 1) * ITEM_WIDTH - CENTER_OFFSET,
      index * ITEM_WIDTH - CENTER_OFFSET,
      (index + 1) * ITEM_WIDTH - CENTER_OFFSET,
    ];*/
    const inputRange = [
      itemCenterPosition - ITEM_WIDTH - SCREEN_CENTER, // Item anterior centralizado
      itemCenterPosition - SCREEN_CENTER, // Item atual centralizado
      itemCenterPosition + ITEM_WIDTH - SCREEN_CENTER, // Próximo item centralizado
    ];

    const scale = interpolate(
      scrollX.value,
      inputRange,
      [0.7, 1, 0.7], // escala menor para os lados, maior para o centro
      "clamp"
    );

    return {
      transform: [{ scale }],
    };
  });

  return (
    <Animated.View style={[styles.wrapper, animatedStyle]}>
      <ItemImage style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.coffeeType}>{item.tag}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.priceCurrency}>R$</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      </View>
    </Animated.View>
  );
}
