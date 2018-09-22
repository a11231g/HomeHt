import React, { Component } from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import variable from '../../Styles/variables';
import { Text } from '../../Components/Kit';

export default class Splash extends Component {
    componentWillMount() {
        StatusBar.setBarStyle('dark-content', false);
    }

    render() {
        return (
            <View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 33,
        textAlign: 'center',
        color: '#fff'
    },
    subTitle: {
        fontSize: variable.fontSizeSmall,
        color: '#fff',
        letterSpacing: 3.3,
        textAlign: 'center',
        marginTop: variable.baseSpacing

    }
});
