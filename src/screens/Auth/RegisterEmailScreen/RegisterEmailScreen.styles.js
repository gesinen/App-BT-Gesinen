import { StyleSheet, Platform } from "react-native";
import { useTheme } from "react-native-elements";
// se usa styled cuando queremos acceder al tema desde un styles y esta  es la forma correcta

export const styled = () => {
  const { theme } = useTheme();
  return StyleSheet.create({
    content: {
      height: "100%",
      justifyContent: "space-between",
      marginHorizontal:15,
    },
    form: {
      marginTop: Platform.OS === "ios" ? 10:30,
    },
    optionsContent: {
      marginHorizontal: 20,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: 10,
    },
    info: {
      marginTop: 15,
      textAlign: "center",
      // color: "",
    },
    logo: {
      width: 120,
      height: 120,
      borderRadius: 43,
      marginBottom: 10,
      alignSelf: "center",
    },
    btnContainer:{
      bot:100,
    }
  });
};
