import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../../utils";
import UserScreen from "../../screens/User/UserScreen";

/**
 * Los stacks sirven para poder ir a las pestañas asociadas.
 * Aqui iran todas las pestañas accesibles desde Blog
 * A un tabScreen le pasamos como componente un Stack y solo renderiza la primera que encuentra
 * las demás las mantiene como accesibles dentro de esta ruta
 */

const Stack = createNativeStackNavigator();

export function UserStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.user.stackName}
        component={UserScreen}
        options={{ title: screen.user.title,headerShown:false }}
      />
{/*  // Si queremos que se represente como modal
      <Stack.Group screenOptions={{presentation:"modal"}}>
     <Stack.Screen
        name={screen.blog.screenStacks.addBlog.tab}
        component={AddBlogScreen}
        options={{ title: screen.blog.screenStacks.addBlog.title,headerShown:false }}
      />
      </Stack.Group> */}
    </Stack.Navigator>
  );
}
