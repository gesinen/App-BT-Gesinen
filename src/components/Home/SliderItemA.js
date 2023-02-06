import { Text } from 'react-native-elements'
import React from 'react'
import { StyleSheet, TouchableOpacity, Image } from "react-native";

export default function SliderItemA() {

    return (
        <TouchableOpacity style={styles.button}>
            <Image
                source={require("../../assets/images/duko.jpg")}
                resizeMode="cover"
                style={styles.image}
            ></Image>
            <Text style={styles.text}>Lorem Ipsum</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 110,
        margin:10,
    },
    image: {
        width: 110,
        height: 104,
        borderWidth: 0,
        borderColor: "#000000",
        borderRadius: 15,
        marginTop: 16,
    },
    text: {
        textAlign: "center",
        marginTop: 9,
    },
})