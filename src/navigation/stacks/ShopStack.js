import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../../utils";
import HomeScreen from "../../screens/Home/HomeScreen";
import ProductScreen from "../../screens/Product/ProductScreen";
import ShopScreen from "../../screens/Shop/ShopScreen";
import ShopsDiscover from "../../screens/Shop/ShopsDiscover";

/**
 * Los stacks sirven para poder ir a las pestañas asociadas.
 * Aqui iran todas las pestañas accesibles desde Blog
 * A un tabScreen le pasamos como componente un Stack y solo renderiza la primera que encuentra
 * las demás las mantiene como accesibles dentro de esta ruta
 */

const Stack = createNativeStackNavigator();

export function ShopStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.shop.stackName}
        component={ShopsDiscover  }
        options={{ title: screen.shop.title,headerShown:false }}
      />
      <Stack.Screen
        name={screen.shop.screenStacks.shopIndividual.tab}
        component={ShopScreen  }
        options={{ title: screen.shop.screenStacks.shopIndividual.title,headerShown:false }}
      />
      <Stack.Screen
        name={screen.shop.screenStacks.individualProduct.tab}
        component={ProductScreen}
        options={{ title: screen.shop.screenStacks.individualProduct.title,headerShown:false }}
      />
    </Stack.Navigator>
  );
}
