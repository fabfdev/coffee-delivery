import { Text, TouchableOpacity, View } from "react-native";
import { PlusIcon, MinusIcon, TrashIcon } from "phosphor-react-native";

import { styles } from "./styles";

import { THEME } from "@styles/theme";

import { CoffeeItemDTO } from "@dtos/CoffeeDTO";

type Props = {
  item: CoffeeItemDTO;
};

export function CartItem({ item }: Props) {
  const CoffeeImage = item.image;
  return (
    <View style={styles.container}>
      <CoffeeImage height={64} width={64} />

      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.size}>227ml</Text>

        <View style={styles.containerActions}>
          <View style={styles.containerButtons}>
            <TouchableOpacity>
              <MinusIcon color={THEME.COLOR.PURPLE} />
            </TouchableOpacity>
            <Text style={styles.quantity}>1</Text>
            <TouchableOpacity>
              <PlusIcon color={THEME.COLOR.PURPLE} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.trashButton}>
            <TrashIcon size={20} color={THEME.COLOR.PURPLE} />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.price}>R$ {item.price}</Text>
    </View>
  );
}
