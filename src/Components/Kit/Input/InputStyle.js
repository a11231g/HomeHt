import { StyleSheet } from 'react-native';
import variables from '../../../Styles/variables';
import GlobalStyles from '../../../Styles/globalStyles';


export default Object.assign({}, GlobalStyles, StyleSheet.create({
    container: {
        marginVertical: 8,
        minHeight: 40,
        paddingHorizontal: 15,
        paddingVertical: 5,
    },
    withIconContainer: {
        paddingLeft: 44
    },
    iconContainer: {
        position: 'absolute',
        left: 16,
        top: 7,
        zIndex: 2,
    },
    input: {
        textAlignVertical: 'top',
        paddingTop: 7,
        paddingBottom: 10,
        minHeight: 30,
        paddingLeft: variables.baseSpacing,
        borderWidth: 0,
        borderBottomWidth: 1,
        color: '#f4f4f4',
        borderStyle: 'solid',
    },
    desecure: {
        position: 'absolute',
        zIndex: 22,
        right: variables.baseSpacing * 2,
        top: variables.baseSpacing
    },
    dropDown: {
        position: 'absolute',
        zIndex: 22,
        right: variables.baseSpacing * 2,
        top: variables.baseSpacing,
        opacity: 0.8
    }
}));
