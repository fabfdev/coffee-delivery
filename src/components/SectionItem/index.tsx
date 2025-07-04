import { Text, View } from "react-native";

import { styles } from "./styles";

import { CoffeeItemDTO } from "@dtos/CoffeeDTO";

type Props = {
  coffee: CoffeeItemDTO;
};

export function SectionItem({ coffee }: Props) {
  const CoffeeImage = coffee.image;
  return (
    <View style={styles.wrapper}>
      <CoffeeImage style={styles.image} />
      <View style={styles.container}>
        <View style={styles.dataContainer}>
          <Text style={styles.title}>{coffee.title}</Text>
          <Text style={styles.description}>{coffee.description}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.priceCurrency}>R$</Text>
            <Text style={styles.price}>{coffee.price}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
