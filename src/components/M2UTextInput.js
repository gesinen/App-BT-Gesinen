import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function M2UTextInput(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Icon name={props.iconStyle || "account"} style={styles.iconStyle}></Icon>
      <TextInput
        placeholder={props.inputStyle || "Label"}
        autoFocus={true}
        style={styles.inputStyle}
      ></TextInput>
      <View style={styles.rect}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
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
    borderColor: "#D9D5DC",
    paddingTop: 14,
    paddingBottom: 8
  },
  rect: {}
});

export default M2UTextInput;
