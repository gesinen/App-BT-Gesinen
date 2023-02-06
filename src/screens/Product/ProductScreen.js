import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { Text, Button } from "react-native-elements";
import ProductHead from "../../components/ProductHead";
import Cancion1 from "../../components/Cancion1";
import SliderHorizontal from "../../components/Home/SliderHorizontal";
import { titles } from "../../utils/static-text/"

export default function ProductScreen(props) {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollArea_contentContainerStyle}
    >
      <Image
        source={require("../../assets/images/cami1.jpg")}
        resizeMode="cover"
        style={styles.image2}
      ></Image>
      <Text style={styles.title}>Camisetas No one is You</Text>
      <ProductHead style={styles.productHead}></ProductHead>

      <Button title="Comprar"></Button>
      <Button title="Agregar al carrito"></Button>
      <Text style={{ marginTop: 30 }}> Descripción:{"\n"}
        {"\n"}Ipsum has been the industry&#39;s standard dummy text ever{" "}
        {"\n"}since the 1500s, when an unknown printer took a galley {"\n"}of
        type and scrambled it to make a type specimen book. {"\n"}It has
        survived not only five centuries, but also the le{"\n"}Ipsum has been
        the industry&#39;s standard dummy text ever {"\n"}since the 1500s,
        when an unknown printer took a galley{"\n"} of type and scrambled it
        to make a type specimen book.{"\n"} It has survived not only five
        centuries, but also the le</Text>

      <Text style={styles.title}>Productos relacionados</Text>
      <SliderHorizontal style={styles.sliderHorizontal}></SliderHorizontal>
      <Text style={styles.title}>{titles.titleHomePage1}</Text>
      <SliderHorizontal style={styles.sliderHorizontal}></SliderHorizontal>

      {/* <Cancion1></Cancion1>
      <Cancion1></Cancion1>
      <Cancion1></Cancion1> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right",
    marginTop: 10,
    marginHorizontal: 30,
  },
  container: {
    flex: 1,
  },
  image2: {
    width: "100%",
    height: 419,
  },
  productHead: {
    width: 375,
    marginVertical: 15,
  },
  cancion3: {
    width: 360,
    height: 91,
    marginLeft: 8,
  },
});
