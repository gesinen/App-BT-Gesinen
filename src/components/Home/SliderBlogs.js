import { Text } from 'react-native-elements'
import React from 'react'
import { StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import BlogMin from "./BlogMin";

export default function SliderBlogs() {

    return (
        <ScrollView
            horizontal={true}
            contentContainerStyle={styles.scrollArea}
        >
            <BlogMin ></BlogMin>
            <BlogMin ></BlogMin>
            <BlogMin ></BlogMin>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollArea: {
        width: 982,
        flexDirection: "row",
    },
});
