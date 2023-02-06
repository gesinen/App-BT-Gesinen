import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialIconTextbox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <MaterialCommunityIconsIcon
        name={props.icon}
        style={styles.iconStyle}
      ></MaterialCommunityIconsIcon>
      <TextInput
        placeholder={props.inputStyle || "Label"}
        secureTextEntry={true}
        style={styles.inputStyle}
      ></TextInput>
      <MaterialCommunityIconsIcon
        name="eye"
        style={styles.iconStyle1}
      ></MaterialCommunityIconsIcon>
      <View style={styles.rect}></View>
      <View style={styles.rect2}></View>
      <View style={styles.rect3}></View>
      <View style={styles.rect4}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center"
  },
  iconStyle: {
    // color: "#616161",
    fontSize: 24,
    paddingLeft: 8
  },
  inputStyle: {
    // color: "#000",
    marginLeft: 16,
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    borderBottomWidth: 1,
    // borderColor: "#D9D5DC",
    paddingTop: 14,
    paddingBottom: 8
  },
  iconStyle1: {
    // color: "#616161",
    fontSize: 24,
    paddingRight: 8
  },
  rect: {},
  rect2: {},
  rect3: {},
  rect4: {}
});

export default MaterialIconTextbox;
