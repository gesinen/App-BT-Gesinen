import React from 'react'
import { StyleSheet, ScrollView, SafeAreaView, Image } from "react-native";

import { Text } from 'react-native-elements'

export default function InividualPostScreen() {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.scrollArea} >
        <Image
        source={require("../../assets/images/duko2.jpg")}
        resizeMode="cover"
        style={styles.image2}
        ></Image>
        <Text style={styles.title}>Post 1 duko</Text>
        <Text>Posadas dsad sad dassad da dsad sad asdsa asd asdasd asd asdsadsadsadasd  dasd  asd st 1 duko</Text>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({

  scrollArea: {
    height: 1221,
    overflow: "hidden",
  },
  image2: {
    width: "100%",
    height: 419,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right",
    marginTop: 10,
    marginHorizontal: 30,
  },
});
