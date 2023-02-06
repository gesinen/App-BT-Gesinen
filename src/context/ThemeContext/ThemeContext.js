import React, { useState, useEffect, createContext } from "react";
import { ThemeProvider as Theme } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { lightTheme } from "./LightTheme";
import { darkTheme } from "./DarkTheme";

export const ThemeContext = createContext({
  darkMode: true,
  toggleTheme: () => null,
  theme: {},
});

const theme = {
  Button: {
    titleStyle: {
      color: "#fff",
    },
  },
  Text: {
    style: {
      color: "red",
    },
  },
};

export function ThemeProvider(props) {
  const { children } = props;
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await AsyncStorage.getItem("theme");
      if (response) setDarkMode(JSON.parse(response));
    })();
  }, []);

  const toggleTheme = async () => {
    setDarkMode(!darkMode);
    // console.log("change theme to DarkMode: " + !darkMode)
    await AsyncStorage.setItem("theme", JSON.stringify(!darkMode));
  };

  const data = {
    darkMode,
    toggleTheme,
    theme: darkMode ? darkTheme : lightTheme,
  };

  return (
    <ThemeContext.Provider value={data}>
      <Theme theme={data.theme}>{children}</Theme>
    </ThemeContext.Provider>
  );
}
