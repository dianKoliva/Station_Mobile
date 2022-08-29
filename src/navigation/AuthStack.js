import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/Login';

const AuthStack = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator >
    <Stack.Screen name="Login" component={Login} />
  </Stack.Navigator>
  )
}

export default AuthStack