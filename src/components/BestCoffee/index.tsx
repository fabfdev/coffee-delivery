import { Image, Text, View } from "react-native";

import { styles } from "./styles";
import { BestCoffeeDTO } from "@dtos/BestCoffeeDTO";

type Props = {
  item: BestCoffeeDTO;
};

export function BestCoffee({ item }: Props) {
  const ItemImage = item.image;
  return (
    <View style={styles.wrapper}>
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
    </View>
  );
}
