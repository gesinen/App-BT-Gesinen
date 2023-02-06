import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../../utils";
import InvestScreen from "../../screens/Invest/InvestScreen";
import InividualInvestScreen from "../../screens/Invest/IndividualInvestScreen";
/**
 * Los stacks sirven para poder ir a las pestañas asociadas.
 * Aqui iran todas las pestañas accesibles desde Blog
 * A un tabScreen le pasamos como componente un Stack y solo renderiza la primera que encuentra
 * las demás las mantiene como accesibles dentro de esta ruta
 */

const Stack = createNativeStackNavigator();

export function InvestStack() {
  const screenStacks = screen.invest.screenStacks
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.invest.stackName}
        component={InvestScreen}
        options={{ title: screen.invest.title, headerShown: false }}
      />
      <Stack.Screen
        name={screenStacks.individualInvest.tab}
        component={InividualInvestScreen}
        options={{ title: screenStacks.individualInvest.title, headerShown: false }}
      />
    </Stack.Navigator>
  );
}
