import { StyleSheet } from 'react-native';
import GlobalStyles from '../../Styles/globalStyles';
import variable from '../../Styles/variables';

export default Object.assign({}, GlobalStyles, StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: variable.baseSpacing,
        paddingTop: 80
    },
    caption: {
        marginBottom: variable.baseSpacing,
        color: variable.gray,
        marginTop: variable.baseSpacing
    },
    radioContainer: {
        paddingLeft: variable.baseSpacing
    },
    button: {
        backgroundColor: variable.skyBlue
    }

}));
