import { View, Text, TouchableOpacity } from "react-native";

import { ShoppingCartIcon, ArrowRightIcon } from "phosphor-react-native";

import { THEME } from "@styles/theme";
import { styles } from "./styles";

export function CartSection() {
  return (
    <View style={styles.container}>
      <View style={styles.cartContainer}>
        <View style={styles.cartSize}>
          <Text style={styles.cartSizeText}>1</Text>
        </View>
        <ShoppingCartIcon size={20} color={THEME.COLOR.WHITE} />
      </View>
      <View style={styles.addedCartItemsContainer}>
        <Text style={styles.addedItemText}>1 café Irlandês de 227ml</Text>
        <Text style={styles.addedItemInfoText}>adicionado ao carrinho</Text>
      </View>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>ver</Text>
        <ArrowRightIcon size={16} color={THEME.COLOR.PURPLE} />
      </TouchableOpacity>
    </View>
  );
}
