import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";

function DescripcionProducto(props) {
  return (
    <View style={[styles.container, props.style]}>
        <Text style={styles.descripcion}>
          Descripción:{"\n"}
          {"\n"}Ipsum has been the industry&#39;s standard dummy text ever{" "}
          {"\n"}since the 1500s, when an unknown printer took a galley {"\n"}of
          type and scrambled it to make a type specimen book. {"\n"}It has
          survived not only five centuries, but also the le{"\n"}Ipsum has been
          the industry&#39;s standard dummy text ever {"\n"}since the 1500s,
          when an unknown printer took a galley{"\n"} of type and scrambled it
          to make a type specimen book.{"\n"} It has survived not only five
          centuries, but also the le
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  descripcion: {
    top: 2,
    left: 0,
    position: "absolute",
    //fontFamily: "roboto-regular",
    right: 1,
    fontSize: 15
  },
});

export default DescripcionProducto;
