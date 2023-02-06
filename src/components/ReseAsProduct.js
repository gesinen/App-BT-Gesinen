import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import {  Text } from "react-native-elements";

function ReseAsProduct(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect1}>
        <Text style={styles.resenas}>Reseñas</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect1: {
    width: 375,
    height: 286,
    backgroundColor: "#E6E6E6"
  },
  resenas: {
    // fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 30,
    marginLeft: 16
  }
});

export default ReseAsProduct;
