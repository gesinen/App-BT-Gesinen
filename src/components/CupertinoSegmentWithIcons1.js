import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function CupertinoSegmentWithIcons1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.textWrapper}>
        <TouchableOpacity style={styles.segmentTextWrapper1}>
          <MaterialCommunityIconsIcon
            name="library-books"
            style={styles.text1}
          ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.segmentTextWrapper2}>
          <MaterialCommunityIconsIcon
            name="feather"
            style={styles.text2}
          ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.segmentTextWrapper3}>
          <MaterialCommunityIconsIcon
            name="message-outline"
            style={styles.text3}
          ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.segmentTextWrapper4}>
          <IoniconsIcon name="ios-cog" style={styles.text4}></IoniconsIcon>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center"
  },
  textWrapper: {
    height: 29,
    flex: 1,
    paddingLeft: 8,
    paddingRight: 8,
    flexDirection: "row",
    opacity: 0.79
  },
  segmentTextWrapper1: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(248,231,28,1)",
    padding: 6,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5
  },
  text1: {
    fontSize: 18,
    color: "rgba(2,2,2,1)"
  },
  segmentTextWrapper2: {
    flex: 1,
    alignItems: "center",
    padding: 6,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderLeftWidth: 0
  },
  text2: {
    fontSize: 18,
    color: "rgba(255,255,255,1)",
    opacity: 0.63
  },
  segmentTextWrapper3: {
    flex: 1,
    alignItems: "center",
    padding: 6,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderRightWidth: 0,
    borderLeftWidth: 0
  },
  text3: {
    fontSize: 18,
    color: "rgba(255,255,255,1)",
    opacity: 0.55
  },
  segmentTextWrapper4: {
    flex: 1,
    alignItems: "center",
    padding: 6,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5
  },
  text4: {
    fontSize: 18,
    color: "rgba(255,255,255,1)",
    opacity: 0.53
  }
});

export default CupertinoSegmentWithIcons1;
