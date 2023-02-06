import React, { Component } from "react";
import { StyleSheet, Image, View } from "react-native";
import { Text } from "react-native-elements";

import M2UTextInput from "./M2UTextInput";
import MaterialIconTextbox from "./MaterialIconTextbox";
import Titles from "./Titles";
import CupertinoSwitch from "./CupertinoSwitch";
import MaterialButtonPrimary from "./MaterialButtonPrimary";

function UntitledComponent(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.usernameInput1Column}>
        <M2UTextInput
          icon="account"
          inputStyle="Label"
          inputStyle="Nombre"
          style={styles.usernameInput1}
        ></M2UTextInput>
        <MaterialIconTextbox
          inputStyle="Label"
          inputStyle="Contraseña"
          icon="key-variant"
          style={styles.passwordInput1}
        ></MaterialIconTextbox>
        <View style={styles.logo1Stack}>
          <Image
            source={require("../assets/images/Logo.png")}
            resizeMode="cover"
            style={styles.logo1}
          ></Image>
          <Titles
            titulos="Tus artistas te esperan..."
            style={styles.titles1}
          ></Titles>
        </View>
        <MaterialIconTextbox
          inputStyle="Label"
          inputStyle="Repita Contraseña"
          style={styles.passwordInput2}
        ></MaterialIconTextbox>
        <M2UTextInput
          iconStyleName="account"
          inputStyle="Label"
          iconStyle="email"
          inputStyle="Direccion de correo"
          style={styles.usernameInput2}
        ></M2UTextInput>
        <M2UTextInput
          iconStyleName="account"
          inputStyle="Label"
          iconStyle="cellphone"
          inputStyle="Telefono "
          style={styles.usernameInput3}
        ></M2UTextInput>
        <View style={styles.loremIpsumRow}>
          <Text style={styles.loremIpsum}>
            Acepta los Términos y Condiciones
          </Text>
          <View style={styles.loremIpsumFiller}></View>
          <CupertinoSwitch style={styles.cupertinoSwitch}></CupertinoSwitch>
        </View>
      </View>
      <View style={styles.usernameInput1ColumnFiller}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  usernameInput1: {
    height: 43,
    opacity: 0.7,
    marginTop: 217,
  },
  passwordInput1: {
    height: 43,
    opacity: 0.7,
    marginTop: 141,
  },
  logo1: {
    width: 173,
    height: 170,
    position: "absolute",
    borderRadius: 43,
    top: 0,
    left: 41,
  },
  titles1: {
    top: 155,
    textAlign:"center",
    alignSelf:"center",
  },
  logo1Stack: {
    width: 255,
    height: 185,
    marginTop: -444,
    marginLeft: 60,
  },
  passwordInput2: {
    height: 43,
    opacity: 0.7,
    marginTop: 285,
  },
  usernameInput2: {
    height: 43,
    opacity: 0.7,
    marginTop: -233,
  },
  usernameInput3: {
    height: 43,
    opacity: 0.7,
    marginTop: 20,
  },
  loremIpsum: {
    // fontFamily: "roboto-regular",
    // color: "rgba(155,155,155,1)",
    marginTop: 3,
  },
  loremIpsumFiller: {
    flex: 1,
    flexDirection: "row",
  },
  cupertinoSwitch: {
    width: 45,
    height: 23,
  },
  loremIpsumRow: {
    height: 23,
    flexDirection: "row",
    marginTop: 183,
    marginLeft: 15,
    marginRight: 30,
  },
  usernameInput1Column: {},
  usernameInput1ColumnFiller: {
    flex: 1,
  },
  materialButtonPrimary1: {
    height: 56,
  },
});

export default UntitledComponent;
