import React, { useState } from "react";
import { SafeAreaView, View, Image } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import { useFormik } from "formik";
import { useTheme, useAuth } from "../../../hooks";
import { styles } from "./LoginEmailScreen.style";
import * as StaticText from "../../../utils/static-text";

import { initialValues, validationSchema } from "./LoginEmailScreen.data";

import { Auth } from "../../../api/auth";

const auth = new Auth();

export function LoginEmailScreen(props) {
  const { toggleTheme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const onShowPassword = () => setShowPassword((prevState) => !prevState);

  const { login } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const response = await auth.login(formValue);
        login(response);
        return;
      } catch (error) {
        console.error(error);
      }
    },
  });
  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.form}>
        <Image
          source={require("../../../assets/images/Logo.png")}
          resizeMode="cover"
          style={styles.logo}
        ></Image>
        <Text style={styles.slogan}>{StaticText.titles.sloganLogin}</Text>
        <Input
          placeholder={
            "   " +
            StaticText.placeholder.email +
            " / username" /* + StaticText.placeholder.username*/
          }
          leftIcon={{
            type: "material-community",
            name: "account-outline",
          }}
          onChangeText={(text) => formik.setFieldValue("username", text)}
          errorMessage={formik.errors.username}
        />
        <Input
          placeholder={"   " + StaticText.placeholder.password}
          secureTextEntry={!showPassword}
          leftIcon={{
            type: "material-community",
            name: "key-outline",
          }}
          rightIcon={{
            type: "material-community",
            name: showPassword ? "eye-off-outline" : "eye-outline",
            onPress: onShowPassword,
          }}
          onChangeText={(text) => formik.setFieldValue("pswd", text)}
          errorMessage={formik.errors.pswd}
        />
        <View style={styles.form}>
          <Button
            title={"cambiar tema"}
            style={styles.btnChangeThemeContainer}
            onPress={toggleTheme}
          ></Button>
        </View>
      </View>
      <Button
        title={"Login"}
        style={styles.btnContainer}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      ></Button>
    </SafeAreaView>
  );
}
