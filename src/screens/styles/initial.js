import { StyleSheet } from "react-native";
import colors from '../../resources/colors';

const IStyle = StyleSheet.create({
    Header: {
        height: '10%',
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
        height: '70%',
        width: '100%',
        alignItems: 'center',
    },
    BItem: {
        backgroundColor: colors.button,
        height: 60,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginBottom: 10
    },
    BItemText: {
        fontWeight: 'bold',
        color: colors.text,
        fontSize: 20  
    },
    Footer: {
        marginTop: 10
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
    ViewE: {
        width: '100%',
        alignItems: 'center'
    },
    TextE: {
        fontSize: 20,
        color: colors.text,
        fontWeight: 'bold'
    }
});

export default IStyle;