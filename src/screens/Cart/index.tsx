import { useEffect, useRef, useState } from "react";
import {
  Alert,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";

import { ArrowLeftIcon, TrashIcon } from "phosphor-react-native";

import { styles } from "./styles";

import { CartItem } from "@components/CartItem";

import { CoffeeData } from "@data/coffeeData";

import { THEME } from "@styles/theme";
import Animated, {
  Layout,
  SlideInRight,
  SlideOutRight,
} from "react-native-reanimated";

export function Cart() {
  const [data, setData] = useState([...CoffeeData[0].data, ...CoffeeData[1].data]);

  const swipeableRefs = useRef<Swipeable[]>([]);

  function remove(id: number) {
    setData(data.filter((item) => item.id !== id));
  }

  function handleRemove(id: number, index: number) {
    swipeableRefs.current?.[index].close();
    Alert.alert("Remover", "Deseja remover esse registro?", [
      {
        text: "Sim",
        onPress: () => remove(id),
      },
      { text: "Não", style: "cancel" },
    ]);
  }

  useEffect(() => {
    StatusBar.setBarStyle("dark-content");
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.toolbar}>
        <ArrowLeftIcon />
        <Text style={styles.title}>Carrinho</Text>
      </View>

      <ScrollView>
        {data.map((item, index) => (
          <Animated.View
            key={item.id}
            entering={SlideInRight.delay(index * 100)}
            layout={Layout.springify()}
          >
            <Swipeable
              ref={(ref) => {
                if (ref) {
                  swipeableRefs.current.push(ref);
                }
              }}
              overshootLeft={false}
              leftThreshold={10}
              onSwipeableOpen={() => handleRemove(item.id, index)}
              renderLeftActions={() => (
                <View style={styles.leftActionContainer}>
                  <TrashIcon color={THEME.COLOR.RED_DARK} size={28} />
                </View>
              )}
            >
              <CartItem item={item} />
            </Swipeable>
          </Animated.View>
        ))}
      </ScrollView>

      <View style={styles.subtotalContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.subtotalTitle}>Valor total</Text>
          <Text style={styles.subtotalPrice}>R$ 9,90</Text>
        </View>

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonTitle}>{"Confirmar pedido".toUpperCase()}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
