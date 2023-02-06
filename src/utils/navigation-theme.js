import { DefaultTheme } from "@react-navigation/native";

import { View, Text } from "react-native";
import React from "react";

export function getNavigationTheme(theme) {
  // console.log(DefaultTheme)
  ;
  /**
   * En colors el que esté mas abajo sobreescribe al resto "MANDA"
   */
  return {
    colors: {
      ...DefaultTheme,
      background:theme.Default.background,
      card:theme.Default.background,
      text:theme.Text.style.color,
    },
  };
}
