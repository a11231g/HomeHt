import { StyleSheet } from 'react-native';
import variabale  from '../../../Styles/variables'

export default StyleSheet.create({
    default: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        paddingLeft:30,
        paddingRight:30,
        minWidth: 220,
        height: 36,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, .25)',
        alignSelf: 'center',
        marginTop: variabale.baseSpacing * 1.5
    },
    contentWrapper: {
        flexDirection: 'row'
    },
    text:{
        color: '#fff',
    },
    icon: {
        position:'absolute',
        left: 10,
        top: 8,
        fontSize: 20,
        color:'#fff',
    },
});
