import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Animated, { Keyframe } from "react-native-reanimated";

import { ShoppingCartIcon, ArrowRightIcon } from "phosphor-react-native";

import { THEME } from "@styles/theme";

import { styles } from "./styles";

export function CartSection() {
  const cart = [
    {
      title: "café Irlandês de 227ml",
      qtd: 1,
    },
    {
      title: "café latte de 227ml",
      qtd: 2,
    },
  ];
  const [currentItem, setCurrentItem] = useState(cart[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const enteringKeyFrame = new Keyframe({
    from: {
      opacity: 0,
      transform: [{ translateY: -30 }],
    },
    to: {
      opacity: 1,
      transform: [{ translateY: 0 }],
    },
  })
    .delay(400)
    .duration(600);

  const exitingKeyFrame = new Keyframe({
    from: {
      opacity: 1,
      transform: [{ translateY: 0 }],
    },
    to: {
      opacity: 0,
      transform: [{ translateY: 30 }],
    },
  }).duration(600);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prev) => {
        const newIndex = (prev + 1) % cart.length;
        setCurrentItem(cart[newIndex]);
        return newIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [cart.length]);

  return (
    <View style={styles.container}>
      <View style={styles.cartContainer}>
        <View style={styles.cartSize}>
          <Text style={styles.cartSizeText}>1</Text>
        </View>
        <ShoppingCartIcon size={20} color={THEME.COLOR.WHITE} />
      </View>
      <Animated.View
        key={selectedIndex} // Força remontagem do componente
        style={styles.addedCartItemsContainer}
        entering={enteringKeyFrame}
        exiting={exitingKeyFrame}
      >
        <Text style={styles.addedItemText}>
          {currentItem.qtd} {currentItem.title}
        </Text>
        <Text style={styles.addedItemInfoText}>adicionado ao carrinho</Text>
      </Animated.View>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>ver</Text>
        <ArrowRightIcon size={16} color={THEME.COLOR.PURPLE} />
      </TouchableOpacity>
    </View>
  );
}
