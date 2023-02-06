import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";

function MaterialButtonPink1(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.signUpWithSpotify}>SIGN UP WITH SPOTIFY</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E91E63",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16
  },
  signUpWithSpotify: {
    color: "#fff",
    fontSize: 14
  }
});

export default MaterialButtonPink1;