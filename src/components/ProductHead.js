import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import {  Text } from "react-native-elements";

import Titles from "./Titles";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";

function ProductHead(props) {
  return (
    <View style={[styles.container, props.style]}>
        <View style={styles.groupRow}>
              <FontAwesomeIcon
                name="star"
                style={styles.icon}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                name="star"
                style={styles.icon2}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                name="star"
                style={styles.icon1}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                name="star-o"
                style={styles.icon4}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                name="star-o"
                style={styles.icon3}
              ></FontAwesomeIcon>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>   19.98 €   </Text>
          </View>
          <EntypoIcon name="heart-outlined" style={styles.icon5}></EntypoIcon>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    color: "rgba(227,251,6,1)",
    fontSize: 30
  },
  icon2: {
    color: "rgba(231,255,0,1)",
    fontSize: 30,
    marginLeft: 6
  },
  icon1: {
    color: "rgba(220,255,0,1)",
    fontSize: 30,
    marginLeft: 6
  },
  icon4: {
    color: "rgba(128,128,128,1)",
    fontSize: 30,
    marginLeft: 5
  },
  icon3: {
    color: "rgba(128,128,128,1)",
    fontSize: 30,
    marginLeft: 3
  },
  priceContainer: {
    height: 35,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 94,
    marginLeft: 30,
    justifyContent:"center",
    alignItems:"center",
    margin:10,
  },
  price: {
    // fontFamily: "roboto-regular",
    color: "#121212",
    fontSize:20,
    
  },
  icon5: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    height: 44,
    width: 40,
    marginLeft: 31
  },
  groupRow: {
    flexDirection: "row",
    justifyContent:"space-between",
  }
});

export default ProductHead;
