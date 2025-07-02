import { Text, TextInput, View } from "react-native";
import {
  MapPinIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
} from "phosphor-react-native";

import { styles } from "./styles";

import { Header } from "@components/Header";

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}
