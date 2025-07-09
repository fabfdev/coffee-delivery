import { ComponentProps } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

import { CoffeeItemDTO } from "@dtos/CoffeeDTO";

type Props = ComponentProps<typeof TouchableOpacity> & {
  coffee: CoffeeItemDTO;
};

export function SectionItem({ coffee, ...rest }: Props) {
  const CoffeeImage = coffee.image;
  return (
    <TouchableOpacity style={styles.wrapper} {...rest}>
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
    </TouchableOpacity>
  );
}
