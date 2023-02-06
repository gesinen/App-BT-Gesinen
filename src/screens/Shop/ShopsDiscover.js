import React, { Component } from "react";
import { StyleSheet, ScrollView, SafeAreaView, View } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import SliderHorizontal from "../../components/Home/SliderHorizontal";
import { titles } from "../../utils/static-text"
import SliderBlogs from "../../components/Home/SliderBlogs"
import BlogMin from "../../components/Home/BlogMin";
import * as StaticText from "../../utils/static-text";

export default function ShopsDiscover(props) {
  // console.log(useTheme());
  //onChangeText={(text) => formik.setFieldValue("username", text)}
  /*errorMessage={formik.errors.username*/
  return (
    <SafeAreaView>
      <View style={styles.sectionSearch}>
        <Input
          style={styles.search}
          placeholder={StaticText.placeholder.search}
          leftIcon={{
            type: "material-community",
            name: "account-outline",
          }}
        /></View>
      <ScrollView contentContainerStyle={styles.scrollArea_contentContainerStyle} >

        <Text style={styles.title}>{titles.titleShopDiscover1}</Text>
        <SliderHorizontal style={styles.sliderHorizontal}></SliderHorizontal>

        <Text style={styles.title}>{titles.titleHomePage1}</Text>
        <SliderHorizontal style={styles.sliderHorizontal}></SliderHorizontal>

        <Text style={styles.title}>{titles.titleShopDiscover2}</Text>

        <SliderBlogs />
        <Text style={styles.title}>{titles.titleShopDiscover3}</Text>
        <SliderBlogs />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionSearch: {
    backgroundColor: "#E6E6E6",
    height: 50,
    borderRadius: 30,
    borderWidth: 4,
    marginHorizontal:20,
    marginTop:10,
  },
  search: {
    marginTop:0,
    textAlign: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right",
    marginVertical: 20,
    marginHorizontal: 30,
  }, sliderHorizontal: {
    height: 163,
    width: "100%",
    overflow: "scroll",
    alignContent: "center",
    alignSelf: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(24,24,30,1)",
  },
  scrollArea: {
    height: 741,
    marginTop: 11,
  },
  scrollArea_contentContainerStyle: {
    height: 1221,
    overflow: "hidden",
  },
  sliderHorizontal2: {
    height: 163,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0,
    borderRadius: 100,
    overflow: "scroll",
  },
  titles2: {
    height: 30,
    width: 371,
    marginTop: 12,
    marginLeft: 4,
  },
  titles3: {
    height: 30,
    width: 375,
    marginTop: 17,
  },
  scrollArea2: {
    top: 0,
    left: 0,
    height: 335,
    position: "absolute",
    right: 0,
  },
  scrollArea2_contentContainerStyle: {
    width: 982,
    height: "100%",
    flexDirection: "row",
  },
  blogMin: {
    width: 317,
    height: 282,
  },
  blogMin1: {
    width: 317,
    height: 282,
    marginLeft: 6,
  },
  blogMin2: {
    width: 317,
    height: 282,
    marginLeft: 8,
  },
  blogMinRow: {
    height: 282,
    flexDirection: "row",
    flex: 1,
    marginRight: -607,
    marginLeft: 17,
    marginTop: 27,
  },
  titles4: {
    position: "absolute",
    top: 333,
    left: 0,
    height: 30,
    width: 375,
  },
  scrollArea2Stack: {
    height: 363,
  },
  materialCardWithTextOverImage: {
    height: 359,
    width: 359,
    marginTop: 20,
    marginLeft: 8,
  },
  scrollAreaFiller: {
    flex: 1,
  },
  cupertinoFooter2: {
    height: 51,
    width: 375,
    marginBottom: 8,
  },
});
