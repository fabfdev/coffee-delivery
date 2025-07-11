import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { Splash } from "@screens/Splash";
import { Home } from "@screens/Home";
import { Product } from "@screens/Product";
import { Cart } from "@screens/Cart";
import { Confirmation } from "@screens/Confirmation";

type AppRoutes = {
  splash: undefined;
  home: undefined;
  product: undefined;
  cart: undefined;
  confirmation: undefined;
};

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="splash" component={Splash} />
      <Screen name="home" component={Home} />
      <Screen name="product" component={Product} />
      <Screen name="cart" component={Cart} />
      <Screen name="confirmation" component={Confirmation} />
    </Navigator>
  );
}
