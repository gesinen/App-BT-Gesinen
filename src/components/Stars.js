import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function Stars(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.icon1Row}>
        <FontAwesomeIcon name="star" style={styles.icon1}></FontAwesomeIcon>
        <FontAwesomeIcon name="star" style={styles.icon3}></FontAwesomeIcon>
        <FontAwesomeIcon name="star" style={styles.icon2}></FontAwesomeIcon>
        <FontAwesomeIcon name="star-o" style={styles.icon5}></FontAwesomeIcon>
        <FontAwesomeIcon name="star-o" style={styles.icon4}></FontAwesomeIcon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  icon1: {
    color: "rgba(227,251,6,1)",
    fontSize: 15
  },
  icon3: {
    color: "rgba(231,255,0,1)",
    fontSize: 15,
    marginLeft: 7
  },
  icon2: {
    color: "rgba(220,255,0,1)",
    fontSize: 15,
    marginLeft: 5
  },
  icon5: {
    color: "rgba(128,128,128,1)",
    fontSize: 15,
    marginLeft: 6
  },
  icon4: {
    color: "rgba(128,128,128,1)",
    fontSize: 15,
    marginLeft: 4
  },
  icon1Row: {
    height: 15,
    flexDirection: "row",
    flex: 1
  }
});

export default Stars;
