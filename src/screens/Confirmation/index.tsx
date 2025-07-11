import { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Animated, {
  interpolate,
  Keyframe,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { CommonActions, useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

import { AppNavigatorRoutesProps } from "@routes/app.routes";

import IllustrationDelivery from "@assets/illustration_delivery.svg";

const TouchableOpacityAnimated =
  Animated.createAnimatedComponent(TouchableOpacity);

export function Confirmation() {
  const deliveryPositionY = useSharedValue(0);

  const navigator = useNavigation<AppNavigatorRoutesProps>();

  const entering = new Keyframe({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  }).duration(1000);

  const enteringButton = new Keyframe({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  })
    .delay(2000)
    .duration(1000);

  const animatedDelivery = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(deliveryPositionY.value, [0, 1], [5, -5]),
        },
      ],
    };
  });

  function handleGoHome() {
    navigator.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "home" }],
      })
    );
  }

  useEffect(() => {
    deliveryPositionY.value = withRepeat(
      withSequence(
        withTiming(0, { duration: 1000 }),
        withTiming(1, { duration: 1000 })
      ),
      -1,
      true
    );
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={animatedDelivery} entering={entering}>
        <IllustrationDelivery />
      </Animated.View>

      <Animated.View entering={entering} style={styles.containerTexts}>
        <Text style={styles.title}>Uhu! Pedido confirmado</Text>
        <Text style={styles.body}>
          Agora é só aguardar que logo o café chegará até você!
        </Text>
      </Animated.View>

      <TouchableOpacityAnimated
        style={styles.button}
        entering={enteringButton}
        onPress={handleGoHome}
      >
        <Text style={styles.textButton}>{"ir para a home".toUpperCase()}</Text>
      </TouchableOpacityAnimated>
    </View>
  );
}
