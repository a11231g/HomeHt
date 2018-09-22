import React from 'react';
import { connect } from 'react-redux';
import {
    reduxifyNavigator,
} from 'react-navigation-redux-helpers';

import AppNavigator from './stackNavigator';

const App = reduxifyNavigator(AppNavigator, 'root');
const mapStateToProps = state => ({
    state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(App);
export default AppWithNavigationState;
