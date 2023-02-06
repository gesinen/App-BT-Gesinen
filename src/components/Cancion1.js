import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Review from "./Review";

function Cancion1(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Review style={styles.reseA}></Review>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.4)",
    borderStyle: "solid",
    borderRadius: 4
  },
  reseA: {
    height: 63,
    width: 353,
    marginTop: 5,
    marginLeft: 4
  }
});

export default Cancion1;
