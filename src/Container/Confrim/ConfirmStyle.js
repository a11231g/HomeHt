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
    answer: {
        fontWeight: 'bold',
        fontSize: 16
    },
    headerTxt: {
        marginRight: variable.baseSpacing,
        fontSize: 16
    },
    answerContainer: {
        padding: variable.baseSpacing,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    button : {
        backgroundColor: variable.skyBlue
    },
    successButton: {
        backgroundColor: 'green'
    }

}));
