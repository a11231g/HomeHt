import { StyleSheet, Dimensions } from 'react-native';
import GlobalStyles from '../../Styles/globalStyles';
import variable from '../../Styles/variables';
const { width} = Dimensions
export default Object.assign({}, GlobalStyles, StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: variable.baseSpacing,
        paddingTop: 80
    },
    image: {
        width: width,
        height: 200
    },
    title:{
        marginTop: variable.baseSpacing,
        color: variable.darkBlue,
        marginBottom: variable.baseSpacing,
        fontWeight: 'bold'
    }

}));
