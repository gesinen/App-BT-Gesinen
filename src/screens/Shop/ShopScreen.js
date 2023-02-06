import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  ImageBackground,
} from "react-native";
import { Text } from "react-native-elements";
import ProductShop from "../../components/ProductShop";
import Titles from "../../components/TitlesNew";

export default function ShopScreen(props) {

  const mook = ["a", "b", "c", "d",]
  let k = true
  const listItems = mook.map((mook) => {
     k = !(k) 
    return <ProductShop name= {mook} price="11.40" image="../assets/images/cami.jpg" style={k ? styles.item : styles.item2} ></ProductShop>
  }
  );

  return (
    <ScrollView >
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require("../../assets/images/duko.jpg")}
          resizeMode="cover"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <Text style={styles.title}>DUKI</Text>
        </ImageBackground>
      </View>
      <View style={styles.container}>
        {listItems}

        <Text style={styles.title}>DUKI</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: 'rgba(0,0,0,.9)',
    height: 300,
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "right",
    top: 250,
    marginHorizontal: 30
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start' // if you want to fill rows left to right
  },
  item2: {
    marginTop: -50,
    width: '50%', // is 50% of container width
  },
  item: {
    width: '50%', // is 50% of container width
    marginVertical: 10,
  },
  image: {
    position: "absolute",
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.3)",
    height: "100%",
  },
});
