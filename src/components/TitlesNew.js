import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";

function TitlesNew(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text >Tus artistas favoritos...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
});

export default TitlesNew;
