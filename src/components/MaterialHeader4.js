import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialHeader4(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.textWrapper}>
        <Text numberOfLines={1} style={styles.title}>
          Te estabamos esperando
        </Text>
      </View>
      <View style={styles.leftIconButtonRow}>
        <TouchableOpacity style={styles.leftIconButton}>
          <MaterialCommunityIconsIcon
            name="menu"
            style={styles.leftIcon}
          ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
        <View style={styles.leftIconButtonFiller}></View>
        <View style={styles.rightIconsWrapper}>
          <TouchableOpacity style={styles.iconButton}>
            <MaterialCommunityIconsIcon
              name="magnify"
              style={styles.rightIcon1}
            ></MaterialCommunityIconsIcon>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <MaterialCommunityIconsIcon
              name="heart"
              style={styles.rightIcon2}
            ></MaterialCommunityIconsIcon>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <MaterialCommunityIconsIcon
              name="refresh"
              style={styles.rightIcon3}
            ></MaterialCommunityIconsIcon>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <MaterialCommunityIconsIcon
              name="dots-vertical"
              style={styles.rightIcon4}
            ></MaterialCommunityIconsIcon>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3F51B5",
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
    justifyContent: "space-between",
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3
  },
  textWrapper: {
    width: 375
  },
  title: {
    fontSize: 24,
    color: "#FFFFFF",
    backgroundColor: "transparent",
    lineHeight: 10,
    alignSelf: "stretch",
    flex: 1
  },
  leftIconButton: {
    padding: 11
  },
  leftIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  },
  leftIconButtonFiller: {
    flex: 1,
    flexDirection: "row"
  },
  rightIconsWrapper: {
    flexDirection: "row",
    alignItems: "center"
  },
  iconButton: {
    padding: 11
  },
  rightIcon1: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  },
  rightIcon2: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  },
  rightIcon3: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  },
  rightIcon4: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  },
  leftIconButtonRow: {
    height: 22,
    flexDirection: "row",
    flex: 1,
    marginRight: 5,
    marginLeft: -370,
    marginTop: 5
  }
});

export default MaterialHeader4;
