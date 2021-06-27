import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import { InitialScreen, AddScreen, ViewScreen } from '../screens';
import colors from '../resources/colors';



const Header = {
    headerStyle: {
        backgroundColor: colors.background,
      },
      headerTintColor: colors.text,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
}

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="initial" component={InitialScreen} options={Header}/>
                <Stack.Screen name="add" component={AddScreen} options={Header}/>
                <Stack.Screen name="view" component={ViewScreen} options={Header}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;