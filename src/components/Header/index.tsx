import { Text, TextInput, View } from "react-native";
import {
  MapPinIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
} from "phosphor-react-native";

import { styles } from "./styles";

import { THEME } from "@styles/theme";

import CoffeeSvg from "@assets/image_coffee.svg";

export function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLocation}>
        <MapPinIcon color={THEME.COLOR.PURPLE} />

        <Text style={styles.title}>Guarapari, ES</Text>

        <ShoppingCartIcon color={THEME.COLOR.YELLOW_DARK} />
      </View>

      <Text style={styles.headline}>
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
    </View>
  );
}
