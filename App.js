// In App.js in a new project

import * as React from "react";
import { Text } from "react-native-elements";
import { AppNavigation } from "./src/navigation/AppNavigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider, AuthProvider } from "./src/context";

import { LogBox } from "react-native";
import { RootNavigation } from "./src/navigation/RootNavigation";

LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RootNavigation />
      </AuthProvider>
    </ThemeProvider>
  );
}
export default App;
