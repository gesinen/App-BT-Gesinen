import { StyleSheet } from "react-native";
import { useTheme } from "react-native-elements";

// se usa styled cuando queremos acceder al tema desde un styles y esta  es la forma correcta

export const styled = () => {
  const { theme } = useTheme();
  return StyleSheet.create({
    content: {
      height: "100%",
      justifyContent: "space-between",
    },
    optionsContent: {
      marginHorizontal: 20,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
      marginTop: 50,
    },
    info: {
        marginTop: 15,
        textAlign: "center",
        // color: "",
    },
    itemRegister: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 1,
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginTop: 30,
        borderColor: "#ccc",
        borderRadius: 4,
        // color: "",
    },
    loginContent:{
        backgroundColor:theme.Default.backgroundSecondary,
        alignItems:"center",
        paddingVertical:20,
        bot:100,
    },
    login:{
        fontWeight:"bold"
    },
    logo: {
        width: 303,
        height: 300,
        borderRadius: 43,
        alignSelf:"center",
      },
  });
};
