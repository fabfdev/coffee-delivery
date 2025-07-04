import { useState, useEffect } from "react";
import { Text, StatusBar, SectionList } from "react-native";
import Animated, {
  runOnJS,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import { styles } from "./styles";

import { Header } from "@components/Header";
import { FilterInput } from "@components/FilterInput";
import { BestCoffeeList } from "@components/BestCoffeeList";
import { CoffeeListFilter } from "@components/CoffeeListFilter";
import { SectionHeader } from "@components/SectionHeader";
import { SectionItem } from "@components/SectionItem";

import { CoffeeData } from "@data/coffeeData";
import { CoffeeDTO, CoffeeItemDTO } from "@dtos/CoffeeDTO";

const SectionListAnimated = Animated.createAnimatedComponent(
  SectionList<CoffeeItemDTO, CoffeeDTO>
);

export function Home() {
  const scrollY = useSharedValue(0);

  const [headerHeight, setHeaderHeight] = useState(0);
  const [filterInputHeight, setFilterInputHeight] = useState(0);
  const [bestCoffeeHeight, setBestCoffeeHeight] = useState(0);
  const [totalHeight, setTotalHeight] = useState(0);
  const [indexSelected, setIndexSelected] = useState(0);

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
      marginTop: headerHeight,
    };
  });

  function handleFilterPress(value: number) {
    setIndexSelected(value);
  }

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
        <CoffeeListFilter
          onPress={(value) => handleFilterPress(value)}
          index={indexSelected}
        />
      </Animated.View>

      <Header
        scrollY={scrollY}
        onLayout={(event) => {
          const { height } = event.nativeEvent.layout;
          setHeaderHeight(height);
        }}
        totalHeight={totalHeight}
      />

      <SectionListAnimated
        sections={CoffeeData}
        keyExtractor={(item, index) => String(item.id)}
        style={styles.container}
        onScroll={scrollHandler}
        contentContainerStyle={{ gap: 20, }}
        renderItem={({ item }) => <SectionItem coffee={item} />}
        renderSectionHeader={({ section }) => (
          <SectionHeader title={section.title} />
        )}
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

            <BestCoffeeList
              scrollY={scrollY}
              totalHeight={totalHeight}
              setBestCoffeeHeight={(value) => setBestCoffeeHeight(value)}
            />

            <CoffeeListFilter
              onPress={(value) => handleFilterPress(value)}
              index={indexSelected}
            />
          </>
        )}
      />
    </>
  );
}
