import React, { Component } from "react";
import { Text } from "react-native-elements";
import { StyleSheet, TouchableOpacity, Image, View } from "react-native";
import { screen } from "../utils";
import { useNavigation } from "@react-navigation/native";

function ProductShop(props) {
  const navigation = useNavigation();

  const goToIndividualProduct = () => {
    console.log(navigation)
    navigation.navigate(screen.shop.screenStacks.individualProduct.tab, {screen: screen.shop.screenStacks.individualProduct.tab});
  };

  return (
    <TouchableOpacity style={[styles.container, props.style]} onPress={goToIndividualProduct} >
      <View style={styles.rect3}>
        <Image
          source={require("../assets/images/cami.jpg")}
          resizeMode="cover"
          style={styles.image}
        ></Image>
        <Text style={styles.loremIpsum}>{props.name}</Text>
        <Text style={styles.loremIpsum1}>{props.price} €</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect3: {
    width: 156,
    height: 260,
    backgroundColor: "#E6E6E6",
    borderRadius: 36,
    borderWidth: 0,
    borderColor: "#000000"
  },
  image: {
    width: 149,
    height: 207,
    borderRadius: 33,
    marginTop: 4,
    marginLeft: 3
  },
  loremIpsum: {
    // fontFamily: "roboto-regular",
    // color: "#121212",
    width: 155,
    textAlign: "center",
    height: 20,
    marginTop: 4,
    marginLeft: 1
  },
  loremIpsum1: {
    // fontFamily: "roboto-regular",
    // color: "#121212",
    width: 155,
    textAlign: "center",
    height: 20,
    marginTop: 1,
    marginLeft: 1
  }
});

export default ProductShop;
