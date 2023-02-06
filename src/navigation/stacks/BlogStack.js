import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../../utils";
import BlogsScreen from "../../screens/Blog/BlogsScreen";
import AddBlogScreen from "../../screens/Blog/AddBlogScreen";
import IndividualBlogScreen from "../../screens/Blog/InividualBlogScreen";
import IndividualPostScreen from "../../screens/Blog/InividualPostScreen"
import AddPostScreen from "../../screens/Blog/AddPostScreen"

/**
 * Los stacks sirven para poder ir a las pestañas asociadas.
 * Aqui iran todas las pestañas accesibles desde Blog
 * A un tabScreen le pasamos como componente un Stack y solo renderiza la primera que encuentra
 * las demás las mantiene como accesibles dentro de esta ruta
 */

const Stack = createNativeStackNavigator();

export function BlogStack() {

  const blogScreenStacks = screen.blog.screenStacks

  return (
    <Stack.Navigator>
       <Stack.Screen
        name={screen.blog.stackName}
        component={BlogsScreen}
        options={{ title: screen.blog.title, headerShown: false }}
      />
      <Stack.Screen
        name={blogScreenStacks.individualBlog.tab}
        component={IndividualBlogScreen}
        options={{ title: blogScreenStacks.individualBlog.title, headerShown: false }}
      />
       <Stack.Screen
        name={blogScreenStacks.individualPost.tab}
        component={IndividualPostScreen}
        options={{ title: blogScreenStacks.individualPost.title, headerShown: false }}
      />
    
      <Stack.Screen
        name={blogScreenStacks.addBlog.tab}
        component={AddBlogScreen}
        options={{ title: blogScreenStacks.addBlog.title, headerShown: false }}
      />
      <Stack.Screen
        name={blogScreenStacks.addPost.tab}
        component={AddPostScreen}
        options={{ title: blogScreenStacks.addPost.title, headerShown: false }}
      />
    </Stack.Navigator>
  );
}
