import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

function MaterialUnderlineTextbox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput
        placeholder={props.inputStyle || "1"}
        selectTextOnFocus={true}
        keyboardType="numeric"
        maxLength={3}
        style={styles.inputStyle}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "rgba(49,49,49,1)",
    borderWidth: 3,
    borderRadius: 8
  },
  inputStyle: {
    color: "#000",
    fontSize: 32,
    flex: 1,
    lineHeight: 20,
    textAlign: "center",
    height: 45,
    letterSpacing: 0,
    width: 58,
    marginLeft: 5
  }
});

export default MaterialUnderlineTextbox;
