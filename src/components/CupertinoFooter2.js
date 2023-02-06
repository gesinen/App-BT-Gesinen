import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function CupertinoFooter2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.btnWrapper1}>
        <MaterialCommunityIconsIcon
          name="music-circle"
          style={[
            styles.icon,
            {
              color: props.active ? "#007AFF" : "rgba(208,201,201,1)"
            }
          ]}
        ></MaterialCommunityIconsIcon>
        <Text
          style={[
            styles.musica,
            {
              color: props.active ? "#007AFF" : "rgba(208,201,201,1)"
            }
          ]}
        >
          Musica
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper3}>
        <MaterialCommunityIconsIcon
          name="swap-horizontal-variant"
          style={styles.icon2}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.descubre}>Descubre</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper4}>
        <MaterialCommunityIconsIcon
          name="account"
          style={styles.icon3}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.tu}>Tú</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper2}>
        <MaterialCommunityIconsIcon
          name="file"
          style={styles.icon1}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.blogs}>Blogs</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper5}>
        <IoniconsIcon
          name="heart"
          style={styles.icon4}
        ></IoniconsIcon>
        <Text style={styles.favorite}>Favorite</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.96,
    shadowRadius: 0,
    borderRadius: 9,
    backgroundColor: "rgba(79,77,77,0.37)"
  },
  btnWrapper1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    backgroundColor: "transparent",
    opacity: 0.8,
    fontSize: 24
  },
  musica: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12
  },
  btnWrapper3: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon2: {
    backgroundColor: "transparent",
    opacity: 0.8,
    fontSize: 24,
    color: "rgba(208,201,201,1)"
  },
  descubre: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12,
    color: "rgba(208,201,201,1)"
  },
  btnWrapper4: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon3: {
    backgroundColor: "transparent",
    opacity: 0.8,
    fontSize: 24,
    color: "rgba(208,201,201,1)"
  },
  tu: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12,
    color: "rgba(208,201,201,1)"
  },
  btnWrapper2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon1: {
    backgroundColor: "transparent",
    opacity: 0.8,
    fontSize: 24,
    color: "rgba(208,201,201,1)"
  },
  blogs: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12,
    color: "rgba(208,201,201,1)"
  },
  btnWrapper5: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon4: {
    backgroundColor: "transparent",
    opacity: 0.8,
    fontSize: 24,
    color: "rgba(208,201,201,1)"
  },
  favorite: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12,
    color: "rgba(208,201,201,1)"
  }
});

export default CupertinoFooter2;
