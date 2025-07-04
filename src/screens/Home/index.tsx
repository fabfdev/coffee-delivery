import { useState, useEffect } from "react";
import { Text, View, StatusBar, FlatList } from "react-native";
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import { styles } from "./styles";

import { Header } from "@components/Header";
import { FilterInput } from "@components/FilterInput";
import { BestCoffee } from "@components/BestCoffee";
import { BestCoffeeData } from "@data/bestCoffeeData";

const TOP_SPACING_BEST_COFFEE = 80;

export function Home() {
  const scrollY = useSharedValue(0);

  const bestCoffeeScrollX = useSharedValue(0);

  const [headerHeight, setHeaderHeight] = useState(0);
  const [filterInputHeight, setFilterInputHeight] = useState(0);
  const [bestCoffeeHeight, setBestCoffeeHeight] = useState(0);
  const [totalHeight, setTotalHeight] = useState(0);

  const [statusBarStyle, setStatusBarStyle] = useState<
    "light-content" | "dark-content"
  >("light-content");

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const fixedFilter = useAnimatedStyle(() => {
    const shouldBeFixed = scrollY.value > totalHeight;
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

  const bestCoffeeAnimatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollY.value,
      [0, totalHeight],
      [1, 0],
      "clamp"
    );
    return {
      opacity: opacity,
    };
  });

  useEffect(() => {
    StatusBar.setBarStyle(statusBarStyle);
  }, [statusBarStyle]);

  useEffect(() => {
    const newTotalHeight = filterInputHeight + bestCoffeeHeight;
    setTotalHeight(newTotalHeight);
  }, [filterInputHeight, bestCoffeeHeight]);

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
        totalHeight={totalHeight}
      />

      <Animated.FlatList
        data={["1", "2", "3", "5", "asd", "adasda"]}
        keyExtractor={(item) => item}
        style={styles.container}
        onScroll={scrollHandler}
        renderItem={() => <Text style={{ height: 200 }}>ADB</Text>}
        ListHeaderComponent={() => (
          <>
            <FilterInput
              scrollY={scrollY}
              onLayout={(event) => {
                const { height } = event.nativeEvent.layout;
                setFilterInputHeight(height);
              }}
              totalHeight={totalHeight}
            />

            <Animated.FlatList
              data={BestCoffeeData}
              keyExtractor={(item) => String(item.id)}
              onScroll={(event) => {
                bestCoffeeScrollX.value = event.nativeEvent.contentOffset.x;
              }}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <BestCoffee
                  scrollX={bestCoffeeScrollX}
                  item={item}
                  index={index}
                />
              )}
              onLayout={(event) => {
                const { height } = event.nativeEvent.layout;
                setBestCoffeeHeight(height - TOP_SPACING_BEST_COFFEE);
              }}
              style={[
                {
                  marginTop: TOP_SPACING_BEST_COFFEE * -1, // Negative margin to overlap FilterInput
                  zIndex: 1,
                  paddingHorizontal: 24,
                  paddingBottom: 24,
                },
                bestCoffeeAnimatedStyle,
              ]}
              contentContainerStyle={{
                paddingRight: 24, // Extra padding for last item
                gap: 20,
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
          </>
        )}
      />
    </>
  );
}
