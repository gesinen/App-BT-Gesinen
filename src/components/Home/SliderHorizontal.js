import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, TouchableOpacity, Image } from "react-native";
import { Text } from "react-native-elements";
import SliderItemA from "../Home/SliderItemA"
import { Artist } from "../../api/Artist"


function SliderHorizontal(props) {
  const artistController = new Artist();
  const data = "" // token

  const callAllArtists = async () => {
    data = "" // token
    await artistController.callAllArtists(data);
  }
  useEffect(() => {
    artistController.callAllArtists(data).then(response => {
      console.log(respone)
      console.debug(respone)
    })
  }, [])

  const mook = ["a", "b", "c", "d",]
  const listItems = mook.map((mook) =>
    <SliderItemA></SliderItemA>
  );

  return (
    <View style={styles.scrollArea} >
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.scrollArea_contentContainerStyle}
      >
        <View style={styles.button24Row}>
          { listItems }
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

  scrollArea_contentContainerStyle: {
    width: 780,
    flexDirection: "row",
  },
  button24: {
    width: 110,
  },
  image21: {
    width: 110,
    height: 104,
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 15,
    marginTop: 16,
  },
  loremIpsum26: {
    // fontFamily: "roboto-regular",
    // color: "rgba(255,255,255,1)",
    textAlign: "center",
    marginTop: 9,
  },
  button23: {
    width: 110,
    marginLeft: 10,
  },
  image20: {
    width: 110,
    height: 104,
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 15,
    marginTop: 16,
  },
  loremIpsum25: {
    // fontFamily: "roboto-regular",
    // color: "rgba(255,255,255,1)",
    textAlign: "center",
    marginTop: 9,
  },
  button11: {
    width: 110,
    marginLeft: 10,
  },
  image8: {
    width: 110,
    height: 104,
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 15,
    marginTop: 16,
  },
  loremIpsum16: {
    // fontFamily: "roboto-regular",
    // color: "rgba(255,255,255,1)",
    textAlign: "center",
    marginTop: 9,
  },
  button27: {
    width: 110,
    marginLeft: 7,
  },
  image24: {
    width: 110,
    height: 104,
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 15,
    marginTop: 16,
  },
  loremIpsum29: {
    // fontFamily: "roboto-regular",
    // color: "rgba(255,255,255,1)",
    textAlign: "center",
    marginTop: 9,
  },
  button26: {
    width: 110,
    marginLeft: 11,
  },
  image23: {
    width: 110,
    height: 104,
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 15,
    marginTop: 16,
  },
  loremIpsum28: {
    // fontFamily: "roboto-regular",
    // color: "rgba(255,255,255,1)",
    textAlign: "center",
    marginTop: 9,
  },
  button25: {
    width: 110,
    marginLeft: 10,
  },
  image22: {
    width: 110,
    height: 104,
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 15,
    marginTop: 16,
  },
  loremIpsum27: {
    // fontFamily: "roboto-regular",
    // color: "rgba(255,255,255,1)",
    textAlign: "center",
    marginTop: 9,
  },
  button30: {
    width: 110,
    marginLeft: 11,
  },
  image27: {
    width: 110,
    height: 104,
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 15,
    marginTop: 16,
  },
  loremIpsum32: {
    // fontFamily: "roboto-regular",
    // color: "rgba(255,255,255,1)",
    textAlign: "center",
    marginTop: 9,
  },
  button29: {
    width: 110,
    marginLeft: 11,
  },
  image26: {
    width: 110,
    height: 104,
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 15,
    marginTop: 16,
  },
  loremIpsum31: {
    // fontFamily: "roboto-regular",
    // color: "rgba(255,255,255,1)",
    textAlign: "center",
    marginTop: 9,
  },
  button28: {
    width: 110,
    marginLeft: 10,
  },
  image25: {
    width: 110,
    height: 104,
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 15,
    marginTop: 16,
  },
  loremIpsum30: {
    // fontFamily: "roboto-regular",
    // color: "rgba(255,255,255,1)",
    textAlign: "center",
    marginTop: 9,
  },
  button24Row: {
    height: 153,
    flexDirection: "row",
    flex: 1,
    marginRight: -713,
    marginLeft: 5,
  },
});

export default SliderHorizontal;
