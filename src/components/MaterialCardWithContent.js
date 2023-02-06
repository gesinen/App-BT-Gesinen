import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import BlogMin from "./Home/BlogMin";

function MaterialCardWithContent(props) {
  return (
    <View style={[styles.container, props.style]}>
      <BlogMin style={styles.blogMin}></BlogMin>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#CCC",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden"
  },
  blogMin: {
    height: 282,
    width: 317,
    marginTop: 1,
    marginLeft: 1
  }
});

export default MaterialCardWithContent;
