import { StyleSheet, Dimensions } from 'react-native';
import GlobalStyles from '../../../Styles/globalStyles';
import variables from '../../../Styles/variables';

export default Object.assign({}, GlobalStyles, StyleSheet.create({
    linearGradient: {
        flex: 1
    },
    seprator: {
        height: 1,
        backgroundColor: '#eee'
    }
}));
