import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  ImageBackground
} from "react-native";

import CupertinoFooter1 from "../../components/CupertinoFooter1";
import SliderHorizontal from "../../components/Home/SliderHorizontal";
import Cancion1 from "../../components/Cancion1";
import { titles } from "../../utils/static-text/"

import { useTheme, useAuth } from "../../hooks";
import { Button, Text } from "react-native-elements";


export default function UserScreen(props) {

  const { darkMode, toggleTheme } = useTheme();

  const { logout, auth } = useAuth();
  const darkmode = true;

  return (
    <View style={styles.container}>
      <Button
        title={darkmode ? "Activar Light" : "Activar Dark"}
        onPress={toggleTheme}
      />
      <Button
        title={auth ? "Close Session" : "Start Session"}
        onPress={logout}
      />
      <ScrollView
        contentContainerStyle={styles.scrollArea_contentContainerStyle}
      >
        <Image style={styles.img} resizeMode="cover" source={require("../../assets/images/duko.jpg")}></Image>

        <Text style={styles.title}>Duki U know</Text>
        <View style={styles.containerButtons}>
          <Button title="Shop" />
          <Button title="Music" />
          <Button title="Blogs" />
        </View>
        <Text style={styles.title} >Descripción:</Text>
        <Text >loremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsum
        loremIpsumloremIpsumloremIpsuml
        </Text>
        <Text style={styles.title}>{titles.tittleUser2}</Text>
        <SliderHorizontal style={styles.sliderHorizontal}></SliderHorizontal>
        <Text style={styles.title}>{titles.tittleUser3}</Text>
        <SliderHorizontal style={styles.sliderHorizontal}></SliderHorizontal>
        <Text style={styles.title}>{titles.tittleUser2}</Text>
        <SliderHorizontal style={styles.sliderHorizontal}></SliderHorizontal>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollArea_contentContainerStyle:{
height:1100,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  containerButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical:10,
  },
  img: {
    borderRadius: 220,
    width: 200,
    height: 200,
    justifyContent: "center",
    marginHorizontal: 100,
    marginVertical: 10,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent:"center"
  },

});


