import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Platform } from 'react-native';

import ApiClient from './src/Utils/apiClient';
import createStore from './src/Redux/create';
import AppWithNavigationState from './src/Navigator/AppNavigator';
let SplashScreen = '';
Platform.OS === 'ios' ?  SplashScreen = require('react-native-smart-splash-screen') : SplashScreen = ''

const client = new ApiClient();
const store = createStore(client);


console.disableYellowBox = true;

class App extends Component {

    componentDidMount () {
        //SplashScreen.close(SplashScreen.animationType.scale, 850, 500)
        if(SplashScreen){
            SplashScreen.close({
                animationType: SplashScreen.animationType.scale,
                duration: 850,
                delay: 500,
            })
        }

    }

    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}

export default App;