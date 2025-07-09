import { useEffect, useState } from "react";
import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";
import {
  ArrowLeftIcon,
  ShoppingCartIcon,
  PlusIcon,
  MinusIcon,
} from "phosphor-react-native";

import { styles } from "./styles";

import { THEME } from "@styles/theme";

import Smoke from "@assets/smoke.svg";
import coffeeImg from "@assets/coffee.png";

import { CoffeeSelectionItem } from "@components/CoffeeSelectionItem";

export function Product() {
  const [coffeeSize, setCoffeeSize] = useState(0);

  function handleCoffeeSizeSelection(value: number) {
    setCoffeeSize(value);
  }

  function isCoffeeSizeSelected(value: number) {
    return coffeeSize === value;
  }

  useEffect(() => {
    StatusBar.setBarStyle("light-content");
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <View style={styles.menu}>
          <ArrowLeftIcon color={THEME.COLOR.WHITE} />
          <ShoppingCartIcon color={THEME.COLOR.WHITE} />
        </View>

        <Text style={styles.tag}>{"Especial".toUpperCase()}</Text>

        <View style={styles.namePriceContainer}>
          <Text style={styles.name}>Irlandês</Text>
          <Text style={styles.priceLabel}>R$</Text>
          <Text style={styles.price}>9,90</Text>
        </View>

        <Text style={styles.description}>
          Bebida a base de café, uísque irlandês, açúcar e chantilly
        </Text>
      </View>

      <View style={styles.coffeeContainer}>
        <Smoke style={styles.smoke} />
        <Image source={coffeeImg} style={styles.coffeeImg} />
      </View>

      <View style={styles.coffeeSizeContainer}>
        <Text style={styles.coffeeSizeText}>Selecione o tamanho</Text>
        <View style={styles.coffeeSelectionContainer}>
          <CoffeeSelectionItem
            size="114ml"
            onPress={() => handleCoffeeSizeSelection(1)}
            isChecked={isCoffeeSizeSelected(1)}
          />
          <CoffeeSelectionItem
            size="140ml"
            onPress={() => handleCoffeeSizeSelection(2)}
            isChecked={isCoffeeSizeSelected(2)}
          />
          <CoffeeSelectionItem
            size="227ml"
            onPress={() => handleCoffeeSizeSelection(3)}
            isChecked={isCoffeeSizeSelected(3)}
          />
        </View>

        <View style={styles.addToCardContainer}>
          <View style={styles.quantityContainer}>
            <TouchableOpacity>
              <MinusIcon color={THEME.COLOR.PURPLE} />
            </TouchableOpacity>
            <Text style={styles.quantityText}>1</Text>
            <TouchableOpacity>
              <PlusIcon color={THEME.COLOR.PURPLE} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>ADICIONAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
