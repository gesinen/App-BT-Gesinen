import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import { Text, Icon } from "react-native-elements";

import { useTheme } from "../../../hooks";
import { screen } from "../../../utils";
import { styled } from "./AuthScreen.styles";

export function AuthScreen(props) {

  const { toggleTheme } = useTheme();
  const { navigation } = props;

  const goToRegisterEmail = () => {
    navigation.navigate(screen.auth.registerEmail);
  };
  const goToLoginEmail = () => {
    navigation.navigate(screen.auth.loginEmail);
  };
  // Para poder usar nuestro thema desde fuera (un archivo exterior), ya que lo impoortamos como una función que genera un obj
  styles = styled();

  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.optionsContent}>

        <Text style={styles.title}>Registrate en MUSIC2U</Text>
        <Text style={styles.info}>
          Tu mundo, tus reglas. Empieza a invertir en artistas...
        </Text>
        <Image
          source={require("../../../assets/images/Logo.png")}
          resizeMode="cover"
          style={styles.logo}
        ></Image>
        <TouchableOpacity
          style={styles.itemRegister}
          onPress={goToRegisterEmail}
        >
          <Icon type="material-community" name="at">
            Usar correo electrónico
          </Icon>
          <Text style={{}}>Usar correo electrónico</Text>
          <View></View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemRegister}
          onPress={goToRegisterEmail}
        >
          <Icon type="material-community" name="spotify">
            Usar correo electrónico
          </Icon>
          <Text style={{}}>Usar Spotify</Text>
          <View></View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemRegister}
          onPress={goToRegisterEmail}
        >

          <Icon type="material-community" name="google">
            Usar Google Account
          </Icon>
          <Text style={{}}>Usar correo electrónico</Text>
          <View></View>
        </TouchableOpacity>
      </View>

      {/* --------------------------------------------------*/}
      <View style={styles.loginContent}>

        <TouchableOpacity onPress={goToLoginEmail}>
          <Text>
            ¿ Ya tienes una cuenta ?{" "}
            <Text style={styles.login}>Iniciar sesión</Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemRegister}
          title={"cambiar tema"}
          onPress={toggleTheme}
        >
          <Text>Cambiar Tema</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}
