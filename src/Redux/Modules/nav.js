import {
    createNavigationReducer,
} from 'react-navigation-redux-helpers';
import AppNavigator from '../../Navigator/stackNavigator';

const navReducer = createNavigationReducer(AppNavigator);

export default navReducer;
