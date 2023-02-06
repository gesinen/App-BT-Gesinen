import React, { Component } from "react";
import { Image, Text } from "react-native-elements";
import { StyleSheet,View,TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { screen } from "../../utils";


function BlogMin(props) {
  const navigation = useNavigation();

  const goToIndividualProduct = () => {
    console.log(navigation)
    navigation.navigate(screen.blog.screenStacks.individualBlog.tab, {screen: screen.shop.screenStacks.individualProduct.tab});
  };
  return (
    <TouchableOpacity  onPress={goToIndividualProduct} >
      <View style={styles.card}>
          <Image
            source={require("../../assets/images/cardImage.png")}
            style={styles.leftImage}
          ></Image>
          <View style={styles.headerContent}>
            <Text style={styles.title}>Title</Text>
            <Text style={styles.noteTextStyle}>Subhead</Text>
          </View>
      </View>
      <Image
        source={require("../../assets/images/cardImage1.png")}
        resizeMode="cover"
        style={styles.cardItemImagePlace}
      ></Image>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  card: {
    flexDirection: "row",
    alignItems: "center",
    height: 72,
    width: 317
  },
  leftImage: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  headerContent: {
    paddingLeft: 16,
    justifyContent: "center"
  },
  title: {
    fontSize: 16,
    // color: "rgba(255,255,255,1)",
    lineHeight: 20
  },
  noteTextStyle: {
    fontSize: 14,
    // color: "rgba(255,255,255,1)",
    lineHeight: 16,
    opacity: 0.5
  },
  cardItemImagePlace: {
    // backgroundColor: "#ccc",
    height: 210,
    width: 317
  }
});

export default BlogMin;
