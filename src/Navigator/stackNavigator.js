import React, { Component } from 'react';
import { Platform, View } from 'react-native';
import { createStackNavigator, } from 'react-navigation';
import GlobalStyle from '../Styles/globalStyles';
import {
    Splash,
    Register,
    Confirm,
    Result

} from '../Container';

const HeaderConfig = {
    title: 'Sign In',
    headerTintColor: '#444',
    headerTransparent: true,
    headerTitleStyle: GlobalStyle.headerTitleStyle,
    headerBackTitleStyle: GlobalStyle.headerTitleStyle,
    headerStyle: GlobalStyle.headerTitleStyle,
};

const AppNavigator = createStackNavigator({
    Splash: {
        screen: Splash,
        navigationOptions: () => ({ header: null })
    },
    Register: {
        screen: Register,
        navigationOptions: ({ navigation }) => {
            HeaderConfig.title = 'Fill Your Application';
            return HeaderConfig; },
    },
    Confirm: {
        screen: Confirm,
        navigationOptions: ({ navigation }) => {
            HeaderConfig.title = 'Confirm your information';
            return HeaderConfig; },
    },
    Result: {
        screen: Result,
        navigationOptions: ({ navigation }) => {
            HeaderConfig.title = 'Found the best match';
            return HeaderConfig; },
    },
}, { headerMode: Platform.OS === 'ios' ? 'float' : 'screen', });
export default AppNavigator;
