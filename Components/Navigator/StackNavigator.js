import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomePage from '../../Screens/Home/HomePage'
import About from '../../Screens/About/About'

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Group>
            <Stack.Screen name="HomePage" component={HomePage} />
            <Stack.Screen name="About" component={About} />
        </Stack.Group>
    </Stack.Navigator>
  )
}

export default StackNavigator