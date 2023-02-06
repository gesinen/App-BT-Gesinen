import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "react-native";
import { Text } from "react-native-elements";

import Stars from "./Stars";
import Icon from "react-native-vector-icons/Entypo";

function Review(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.image2Row}>
        <Image
          source={require("../assets/images/two.jpg")}
          resizeMode="cover"
          style={styles.image2}
        ></Image>
        <View style={styles.loremIpsum2Column}>
          <Text style={styles.loremIpsum2}>Lorem Ipsum</Text>
          <View style={styles.loremIpsum3ColumnRow}>
            <View style={styles.loremIpsum3Column}>
              <Text style={styles.loremIpsum3}>
                Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
                IpsumLorem Ipsum
              </Text>
              <Stars style={styles.stars}></Stars>
            </View>
            <Icon name="heart-outlined" style={styles.icon1}></Icon>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 20, },
  image2: {
    width: 80,
    height: 82,
    borderWidth: 0,
    borderColor: "#000000",
  },
  loremIpsum2: {
    // fontFamily: "roboto-regular",
    // color: "rgba(255,255,255,1)",
    textAlign: "left",
    fontSize: 22,
  },
  loremIpsum3: {
    // fontFamily: "roboto-regular",
    // color: "rgba(255,255,255,1)",
    textAlign: "left",
    width: 214,
    height: 30,
    fontSize: 10,
  },
  stars: {
    height: 15,
    width: 92,
    marginTop: 4,
    marginLeft: 6,
  },
  loremIpsum3Column: {
    width: 214,
    marginTop: 2,
  },
  icon1: {
    // color: "rgba(255,255,255,1)",
    fontSize: 40,
    marginLeft: 9,
  },
  loremIpsum3ColumnRow: {
    height: 51,
    flexDirection: "row",
    marginRight: 7,
  },
  loremIpsum2Column: {
    width: 270,
    marginLeft: 3,
    marginBottom: 4,
  },
  image2Row: {
    height: 82,
    flexDirection: "row",
  },
});

export default Review;
