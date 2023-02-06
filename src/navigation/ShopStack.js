import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils";
import ShopScreen from "../screens/Shop/ShopScreen";
import ProductScreen from "../screens/Product/ProductScreen";
import AddShopScreen from "../screens/Shop/AddShopScreen";
import AddProductScreen from "../screens/Product/AddProductScreen";
const Stack = createNativeStackNavigator();

/**
 * Los stacks sirven para poder ir a las pestañas asociadas.
 * Aqui iran todas las pestañas accesibles desde Blog
 * A un tabScreen le pasamos como componente un Stack y solo renderiza la primera que encuentra
 * las demás las mantiene como accesibles dentro de esta ruta
 */

export function ShopStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.shop.stackName}
        component={ShopScreen}
        options={{ title: screen.shop.title }}
      />
         <Stack.Screen
        name={screen.shop.addShop.tab}
        component={AddShopScreen}
        options={{ title: screen.shop.addShop.title }}
      />
      <Stack.Screen
        name={screen.shop.addProduct.tab}
        component={AddProductScreen}
        options={{ title: screen.shop.addProduct.title }}
      />
       <Stack.Screen
        name={screen.shop.product.stackName}
        component={ProductScreen}
        options={{ title: screen.shop.addProduct.title }}
      />
    </Stack.Navigator>
  );
}
