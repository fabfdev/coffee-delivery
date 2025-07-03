import { useState, useEffect } from "react";
import { Text, View, StatusBar } from "react-native";
import Animated, {
  runOnJS,
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
  const [statusBarStyle, setStatusBarStyle] = useState<
    "light-content" | "dark-content"
  >("light-content");

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const fixedFilter = useAnimatedStyle(() => {
    const shouldBeFixed = scrollY.value > filterInputHeight;
    ("worklet");
    if (shouldBeFixed) {
      runOnJS(setStatusBarStyle)("dark-content");
    } else {
      runOnJS(setStatusBarStyle)("light-content");
    }
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

  useEffect(() => {
    StatusBar.setBarStyle(statusBarStyle);
  }, [statusBarStyle]);

  return (
    <>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        animated
        translucent
      />

      <Animated.View style={fixedFilter}>
        <Text>Nossos cafés</Text>
      </Animated.View>

      <Header
        scrollY={scrollY}
        onLayout={(event) => {
          const { height } = event.nativeEvent.layout;
          setHeaderHeight(height);
        }}
        filterInputHeight={filterInputHeight}
      />

      <Animated.ScrollView style={styles.container} onScroll={scrollHandler}>
        <FilterInput
          scrollY={scrollY}
          onLayout={(event) => {
            const { height } = event.nativeEvent.layout;
            setFilterInputHeight(height);
          }}
          filterInputHeight={filterInputHeight}
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
