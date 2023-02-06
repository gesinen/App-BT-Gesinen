import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";

// No usar

function Titles(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text >Tus artistas favoritos...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  titulos: {
    // fontFamily: "Roboto-Regular",
    textAlign: "center",
    fontSize: 25
  }
});

export default Titles;
