import { StyleSheet, Platform, Dimensions } from 'react-native';
import variable from './variables';
const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
    headerTitleStyle: {
        ...Platform.select({
            ios: {

            },
            android: {
                fontSize: variable.largeFontSize,
                fontWeight: "normal",
            },
        }),
        color: '#fff',
        textAlign: 'left',
        backgroundColor: '#4389a2'
    },
    headerBackTitleStyle: {
        color: '#fff',
        fontSize: variable.fontSizeSmall,
        alignSelf: 'center',
    },
    row: {
        flexDirection: 'row'
    },
    column: {
        flexDirection: 'column'
    },
    growOne: {
        flexGrow: 1
    },
    whiteColor: {
        color: '#fff'
    },
    topHeader: {
        fontSize: 25,
        color: '#fff'
    },
    doubleBottomSpace: {
        marginBottom: variable.baseSpacing * 2
    },
    bottomSpace: {
        marginBottom: variable.baseSpacing
    },
    rightHeaderButton: {
        color: '#fff',
        fontSize: variable.extraFontSize,
        marginBottom: 5
    }
});
