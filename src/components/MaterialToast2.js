import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import {  Text } from "react-native-elements";

function MaterialToast2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text numberOfLines={1} style={styles.text1}>
        Toast Message
      </Text>
      <TouchableOpacity style={styles.button2}>
        <Text style={styles.buttonText}>UNDO</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth: 288,
    justifyContent: "space-between",
    backgroundColor: "#323232",
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 2,
    flexDirection: "row",
    alignItems: "center"
  },
  text1: {
    fontSize: 14,
    color: "rgba(255,255,255,1)"
  },
  button2: {},
  buttonText: {
    color: "#4CAF50",
    fontSize: 14
  }
});

export default MaterialToast2;
