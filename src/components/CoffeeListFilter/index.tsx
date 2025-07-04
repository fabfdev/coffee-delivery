import { Text, View } from "react-native";

import { styles } from "./styles";

import { CoffeeListItem } from "@components/CoffeeListItem";

import { CoffeeData } from "@data/coffeeData";

const COFFEE_TAGS = CoffeeData.map((item) => item.title);

type Props = {
  onPress: (index: number) => void;
  index: number;
};

export function CoffeeListFilter({ onPress, index: selectedIndex }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nossos cafés</Text>
      <View style={styles.filterContainer}>
        {COFFEE_TAGS.map((item, index) => (
          <CoffeeListItem
            key={index}
            index={index}
            item={item}
            onPress={() => onPress(index)}
            isChecked={index === selectedIndex}
          />
        ))}
      </View>
    </View>
  );
}

