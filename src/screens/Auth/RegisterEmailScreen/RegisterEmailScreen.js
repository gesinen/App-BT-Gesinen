import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView, Image } from "react-native";
import { Button, Input, Text } from "react-native-elements";

import { useFormik } from "formik";
import { Auth } from "../../../api/auth";
import { styled } from "./RegisterEmailScreen.styles";

import { initialValues, validationSchema } from "./RegisterEmailScreen.data";

import * as StaticText from "../../../utils/static-text";

const auth = new Auth();

export function RegisterEmailScreen(props) {
  styles = styled();

  const { navigation } = props;
  const [showPassword, setShowPassword] = useState(false);
  const onShowPassword = () => setShowPassword((prevState) => !prevState);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      // console.log(formValue);
      try {
        await auth.register(formValue);
        navigation.goBack();
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.form}>
        <Text style={styles.title}>{StaticText.titles.registerPageTitle}</Text>
        <Image
          source={require("../../../assets/images/Logo.png")}
          resizeMode="cover"
          style={styles.logo}
        ></Image>
        <Input
          placeholder={StaticText.placeholder.email}
          autoCapitalize="none"
          onChangeText={(text) =>
            formik.setFieldValue("email", text.toLowerCase())
          }
          errorMessage={formik.errors.email}
        />
        <Input
          placeholder={StaticText.placeholder.name}
          autoCapitalize="none"
          onChangeText={(text) => formik.setFieldValue("name", text)}
          errorMessage={formik.errors.name}
        />
        <Input
          placeholder={StaticText.placeholder.username}
          autoCapitalize="none"
          onChangeText={(text) => formik.setFieldValue("username", text)}
          errorMessage={formik.errors.username}
        />
        <Input
          placeholder={StaticText.placeholder.password}
          secureTextEntry={!showPassword}
          rightIcon={{
            type: "material-community",
            name: showPassword ? "eye-off-outline" : "eye-outline",
            onPress: onShowPassword,
          }}
          onChangeText={(text) => formik.setFieldValue("pswd", text)}
          errorMessage={formik.errors.pswd}
        />
        <Input
          placeholder={StaticText.placeholder.repeat_password}
          secureTextEntry={!showPassword}
          // rightIcon={{
          //   type: "material-community",
          //   name: showPassword ? "eye-off-outline" : "eye-outline",
          //   onPress: onShowPassword,
          // }}
          onChangeText={(text) => formik.setFieldValue("repeat_pswd", text)}
          errorMessage={formik.errors.repeat_pswd}
        />
      </View>
        <Button
          title={StaticText.buttons.signup}
          containerStyle={styles.btnContainer}
          onPress={() => {
            formik.handleSubmit();
            // navigation.navigate(screen.auth.loginEmail);
          }}
          loading={formik.isSubmitting}
        ></Button>
    </SafeAreaView>
  );
}
