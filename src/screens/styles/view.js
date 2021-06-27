import { StyleSheet, Dimensions } from "react-native";
import colors from '../../resources/colors';

const VStyle = StyleSheet.create({
    Container: {
        height: Dimensions.get('screen').height
    },
    Header: {
        height: 30,
        width: '100%',
        marginBottom: 30
    },
    HItem: {
        flexDirection: 'row',
        width: '100%'
    },
    HTitle: {
        fontWeight: 'bold',
        color: colors.text,
        fontSize: 20
    },
    Body: {
        width: '100%'
    },
    BItem: {
        backgroundColor: colors.button,
        padding: 10,
        borderRadius: 5,
        marginBottom: 10
    },
    BCont: {
        flexDirection: 'row'
    },
    BTitle:{
        fontWeight: 'bold',
        color: colors.text,
        fontSize: 18,
    },
    BValue: {
        color: colors.text,
        fontSize: 18,  
    }
});

export default VStyle;