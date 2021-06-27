import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import colors from '../../resources/colors';
import { TextInputMask } from 'react-native-masked-text';

export const FilterModal = ({ title, value, change, visible, close, call }) => {
    return (
        <Modal
            isVisible={visible}
            onBackdropPress={close}
        >
            <View style={Style.Body}>
                <View style={Style.BItem}>
                    <Text style={Style.BTitle}>{title}</Text>
                    {title == "DATA" ? (
                        <TextInputMask type={'datetime'} options={{ format: 'DD/MM/YYYY' }} style={Style.BButton} value={value} onChangeText={change} />
                    ) : (
                        <TextInputMask type={'datetime'} options={{ format: 'HH:mm:ss' }} style={Style.BButton} value={value} onChangeText={change} />
                    )}
                </View>
                <TouchableOpacity style={Style.OKButton} onPress={call}>
                    <Text style={Style.OKBText}>OK</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

const Style = StyleSheet.create({
    Body: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.button,
        height: 120,
        padding: 10
    },
    BItem: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    BTitle: {
        fontWeight: 'bold',
        color: colors.text,
        fontSize: 20,
    },
    BButton: {
        backgroundColor: colors.text,
        height: 50,
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        color: colors.button,
        fontSize: 20  
    },
    OKButton: {
        marginTop: 10
    },
    OKBText: {
        fontWeight: 'bold',
        color: colors.text,
        fontSize: 20,marginTop: 10
    }
})