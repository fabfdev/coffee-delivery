import { useState, useEffect } from "react";
import { Text, View } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import { styles } from "./styles";

import { Header } from "@components/Header";
import { FilterInput } from "@components/FilterInput";

export function Home() {
  const scrollY = useSharedValue(0);

  const [headerHeight, setHeaderHeight] = useState(0);
  const [filterInputHeight, setFilterInputHeight] = useState(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      console.log(event.contentOffset.y);
      scrollY.value = event.contentOffset.y;
    },
  });

  const fixedFilter = useAnimatedStyle(() => {
    const shouldBeFixed = scrollY.value > filterInputHeight;
    return {
      position: "absolute",
      zIndex: 2,
      left: 0,
      right: 0,
      opacity: shouldBeFixed ? 1 : 0,
      display: shouldBeFixed ? "flex" : "none",
      backgroundColor: "red",
      paddingHorizontal: 24,
      paddingVertical: 32,
      marginTop: headerHeight,
    };
  });

  return (
    <>
      <Animated.View style={fixedFilter}>
        <Text>Nossos cafés</Text>
      </Animated.View>

      <Header
        scrollY={scrollY}
        onLayout={(event) => {
          const { height } = event.nativeEvent.layout;
          setHeaderHeight(height);
        }}
      />

      <Animated.ScrollView style={styles.container} onScroll={scrollHandler}>
        <FilterInput
          scrollY={scrollY}
          onLayout={(event) => {
            const { height } = event.nativeEvent.layout;
            setFilterInputHeight(height);
          }}
        />

        <View
          style={{
            backgroundColor: "red",
            paddingHorizontal: 24,
            paddingVertical: 32,
          }}
        >
          <Text>Nossos cafés</Text>
        </View>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
        <Text>ADB</Text>
      </Animated.ScrollView>
    </>
  );
}
