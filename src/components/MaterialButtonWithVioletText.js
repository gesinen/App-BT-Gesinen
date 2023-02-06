import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";

function MaterialButtonWithVioletText(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.button}>¿ Has olvidado la contraseña ?</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16
  },
  button: {
    color: "#3F51B5",
    fontSize: 14
  }
});

export default MaterialButtonWithVioletText;
