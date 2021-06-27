import { StyleSheet, Dimensions } from "react-native";
import colors from '../../resources/colors';

const AStyle = StyleSheet.create({
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
    HValue: {
        color: colors.text,
        fontSize: 20
    },
    Body: {
        height: Dimensions.get('window').height - 250,
        width: '100%',
        alignItems: 'center',
    },
    BItem: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    BTitle:{
        fontWeight: 'bold',
        color: colors.text,
        fontSize: 20,
    },
    BButton: {
        backgroundColor: colors.button,
        height: 50,
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginBottom: 10,
        color: colors.text,
        fontSize: 20  
    },
    BButtonText:{
        fontWeight: 'bold',
        color: colors.text,
        fontSize: 20  
    },
    Footer: {
        marginTop: 5
    },
    FButton: {
        backgroundColor: colors.button,
        height: 60,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginBottom: 10
    },
    FText: {
        fontWeight: 'bold',
        color: colors.text,
        fontSize: 20  
    },
});

export default AStyle;