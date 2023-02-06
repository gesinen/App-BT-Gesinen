import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../../utils";
import HomeScreen from "../../screens/Home/HomeScreen";
import ProductScreen from "../../screens/Product/ProductScreen";
import ShopScreen from "../../screens/Shop/ShopScreen";

import {  Icon } from "react-native-elements";
/**
 * Los stacks sirven para poder ir a las pestañas asociadas.
 * Aqui iran todas las pestañas accesibles desde Blog
 * A un tabScreen le pasamos como componente un Stack y solo renderiza la primera que encuentra
 * las demás las mantiene como accesibles dentro de esta ruta
 */

const Stack = createNativeStackNavigator();

export function HomeStack(props) {
  const { navigation } = props;
  const buttonLeft = () => {
    return  <Icon type="material-community" name="menu"></Icon>
  }
// TODO: VER https://tincode.es/user/course/8?section=188&class=1761&question=&tab=0
  const buttonRight = () => {
    return  <Icon type="material-community" name="magnify" onPress={()=>console.log("Go to search")/*navigation.navigate('search') */}></Icon>
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.home.stackName}
        component={HomeScreen}
        options={{ /*headerShown:false ,*/
          /*title: screen.home.title,*/ headerLeft:()=>buttonLeft(), headerRight:()=>buttonRight() }}
      />
      {/* <Stack.Screen
        name={screen.blog.screenStacks.addBlog.tab}
        component={AddBlogScreen}
        options={{ title: screen.blog.screenStacks.addBlog.title,headerShown:false }}
      /> */}
    </Stack.Navigator>
  );
}