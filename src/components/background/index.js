import React from 'react';
import { SafeAreaView, View, StatusBar } from 'react-native';
import colors from '../../resources/colors';
import { GeralStyle } from '../../screens/styles';

const Background = ({ children }) => {
    return (
        <SafeAreaView style={GeralStyle.Safe}>
            <StatusBar backgroundColor={colors.background} />
            <View style={GeralStyle.Back}>
                    {children}
            </View>
        </SafeAreaView>
    )
}

export default Background;