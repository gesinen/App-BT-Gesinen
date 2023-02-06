import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet, Image } from 'react-native';
import icon from '../assets/icon.png';
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={icon} style={styles.thumbnail} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    thumbnail: {
        width: 150,
        height: 150,
        padding: 10,
        marginBottom:20
      }
});
