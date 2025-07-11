import { useState, useEffect, useCallback, useRef } from "react";
import { StatusBar, SectionList } from "react-native";
import { useNavigation } from "@react-navigation/native";
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
import { CartSection } from "@components/CartSection";

import { CoffeeData } from "@data/coffeeData";
import { CoffeeDTO, CoffeeItemDTO } from "@dtos/CoffeeDTO";

import { AppNavigatorRoutesProps } from "@routes/app.routes";

const SectionListAnimated = Animated.createAnimatedComponent(
  SectionList<CoffeeItemDTO, CoffeeDTO>
);

export function Home() {
  const scrollY = useSharedValue(0);
  const sectionListRef = useRef<SectionList<CoffeeItemDTO, CoffeeDTO>>(null);

  const [headerHeight, setHeaderHeight] = useState(0);
  const [filterInputHeight, setFilterInputHeight] = useState(0);
  const [bestCoffeeHeight, setBestCoffeeHeight] = useState(0);
  const [totalHeight, setTotalHeight] = useState(0);
  const [indexSelected, setIndexSelected] = useState(0);

  const navigator = useNavigation<AppNavigatorRoutesProps>();

  const [statusBarStyle, setStatusBarStyle] = useState<
    "light-content" | "dark-content"
  >("dark-content");

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

    // Scroll para a seção selecionada
    if (sectionListRef.current && value < CoffeeData.length) {
      sectionListRef.current.scrollToLocation({
        sectionIndex: value,
        itemIndex: 1,
        animated: true,
        viewPosition: 0, // 0 = topo da tela
        viewOffset: headerHeight, // Offset para compensar o header fixo
      });
    }
  }

  const onViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: any[] }) => {
      if (viewableItems.length > 0) {
        // Pega o primeiro item visível
        const firstVisibleItem = viewableItems[0];

        // Se for um header de seção, pega o índice da seção
        if (/*firstVisibleItem.item !== null && */ firstVisibleItem.section) {
          const sectionIndex = CoffeeData.findIndex(
            (section) => section.title === firstVisibleItem.section.title
          );
          if (sectionIndex !== -1) {
            // setIndexSelected(sectionIndex);
          }
        }
      }
    },
    []
  );

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 100, // 50% do item precisa estar visível
  };

  function handleCoffeePress() {
    navigator.navigate("product");
  }

  function handleCart() {
    navigator.navigate("cart");
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
        <CoffeeListFilter onPress={handleFilterPress} index={indexSelected} />
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
        ref={sectionListRef}
        sections={CoffeeData}
        keyExtractor={(item, index) => String(item.id)}
        style={styles.container}
        onScroll={scrollHandler}
        contentContainerStyle={{ gap: 20 }}
        renderItem={({ item }) => (
          <SectionItem coffee={item} onPress={handleCoffeePress} />
        )}
        renderSectionHeader={({ section }) => (
          <SectionHeader title={section.title} />
        )}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
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
              onPress={handleFilterPress}
              index={indexSelected}
            />
          </>
        )}
      />

      <CartSection handleCart={handleCart} />
    </>
  );
}
