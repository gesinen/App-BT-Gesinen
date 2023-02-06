import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Button } from "react-native";

import Titles from "../../components/Titles";
import BlogMin from "../../components/Home/BlogMin";
import SliderHorizontal from "../../components/Home/SliderHorizontal";
import MaterialCardWithTextOverImage1 from "../../components/MaterialCardWithTextOverImage1";
import CupertinoFooter2 from "../../components/CupertinoFooter2";

import { screen } from "../../utils";

// Hooks para navegación
import { useNavigation } from "@react-navigation/native";

export default function BlogsScreen(props) {
  const navigation = useNavigation();

  const goToAddBlog = () => {
    // console.log("Ir a la creación de blogs");
    //Esto sirve para ir a otro Stack y otra pagina que no sea la principal, en este caso viajas a la misma dentro del mismo stack
    navigation.navigate(screen.blog.screenStacks.addBlog.tab, {screen: screen.blog.screenStacks.addBlog.tab});
  };
  
  return (
    <View style={styles.container}>
      <Button title="Crear Blog" onPress={goToAddBlog} />
      <View style={styles.scrollArea2}>
        <ScrollView
          contentContainerStyle={styles.scrollArea2_contentContainerStyle}
        >
          <View style={styles.titles1Stack}>
            <Titles titulos="Tus ultimos Blogs" style={styles.titles1}></Titles>
            <View style={styles.scrollArea3}>
              <ScrollView
                horizontal={true}
                contentContainerStyle={styles.scrollArea3_contentContainerStyle}
              >
                <View style={styles.blogMin1Row}>
                  <BlogMin style={styles.blogMin1}></BlogMin>
                  <BlogMin style={styles.blogMin2}></BlogMin>
                  <BlogMin style={styles.blogMin3}></BlogMin>
                </View>
              </ScrollView>
            </View>
          </View>
          <Titles
            titulos="Blogs de Artistas ..."
            style={styles.titles2}
          ></Titles>
          <SliderHorizontal style={styles.sliderHorizontal1}></SliderHorizontal>
          <Titles
            titulos="Menciones a Artistas ..."
            style={styles.titles3}
          ></Titles>
          <SliderHorizontal style={styles.sliderHorizontal2}></SliderHorizontal>
          <Titles
            titulos="Recomendados para Tí..."
            style={styles.titles4}
          ></Titles>
          <View style={styles.scrollArea4}>
            <ScrollView
              horizontal={true}
              contentContainerStyle={styles.scrollArea4_contentContainerStyle}
            >
              <View style={styles.materialCardWithTextOverImage1StackRow}>
                <View style={styles.materialCardWithTextOverImage1Stack}>
                  <MaterialCardWithTextOverImage1
                    style={styles.materialCardWithTextOverImage1}
                  ></MaterialCardWithTextOverImage1>
                  <MaterialCardWithTextOverImage1
                    style={styles.materialCardWithTextOverImage2}
                  ></MaterialCardWithTextOverImage1>
                </View>
                <MaterialCardWithTextOverImage1
                  style={styles.materialCardWithTextOverImage3}
                ></MaterialCardWithTextOverImage1>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
      <View style={styles.scrollArea2Filler}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollArea2: {
    width: 375,
    height: 712,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 1,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 10,
  },
  scrollArea2_contentContainerStyle: {
    height: 1193,
    width: 375,
  },
  titles1: {
    position: "absolute",
    top: 0,
    width: 375,
    height: 30,
    left: 0,
  },
  scrollArea3: {
    top: 24,
    left: 0,
    height: 335,
    position: "absolute",
    right: 0,
  },
  scrollArea3_contentContainerStyle: {
    width: 982,
    height: 335,
    flexDirection: "row",
  },
  blogMin1: {
    width: 317,
    height: 282,
  },
  blogMin2: {
    width: 317,
    height: 282,
    marginLeft: 6,
  },
  blogMin3: {
    width: 317,
    height: 282,
    marginLeft: 8,
  },
  blogMin1Row: {
    height: 282,
    flexDirection: "row",
    flex: 1,
    marginRight: -607,
    marginLeft: 17,
    marginTop: 27,
  },
  titles1Stack: {
    height: 359,
    marginTop: 6,
  },
  titles2: {
    height: 30,
    width: 371,
    marginLeft: 4,
  },
  sliderHorizontal1: {
    height: 163,
    overflow: "scroll",
    marginTop: 3,
  },
  titles3: {
    height: 30,
    width: 371,
    marginTop: 16,
    marginLeft: 4,
  },
  sliderHorizontal2: {
    height: 163,
    overflow: "scroll",
    marginTop: 3,
  },
  titles4: {
    height: 30,
    width: 375,
    marginTop: 23,
  },
  scrollArea4: {
    width: 375,
    height: 367,
  },
  scrollArea4_contentContainerStyle: {
    width: 1104,
    height: 367,
    flexDirection: "row",
  },
  materialCardWithTextOverImage1: {
    height: 309,
    width: 335,
    position: "absolute",
    left: 0,
    top: 0,
  },
  materialCardWithTextOverImage2: {
    height: 309,
    width: 335,
    position: "absolute",
    left: 3,
    top: 0,
  },
  materialCardWithTextOverImage1Stack: {
    width: 338,
    height: 309,
  },
  materialCardWithTextOverImage3: {
    height: 309,
    width: 335,
    marginLeft: 414,
  },
  materialCardWithTextOverImage1StackRow: {
    height: 309,
    flexDirection: "row",
    flex: 1,
    marginRight: -729,
    marginLeft: 17,
    marginTop: 29,
  },
  scrollArea2Filler: {
    flex: 1,
  },
  cupertinoFooter1: {
    height: 51,
    width: 375,
    marginBottom: 3,
  },
});
