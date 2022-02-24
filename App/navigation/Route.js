import React from "react";
import { Image, TouchableOpacity, Text, Platform } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Personal from '../screens/Personal'
import Daily from '../screens/Daily'
import Weekly from '../screens/Weekly'
import Header from '../components/Header'

let Stack = createNativeStackNavigator();

export default function Route (){

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='personal' component={Personal} options={{ headerShown: false }}/>
                <Stack.Screen name='daily' component={Daily} options={({ navigation, route }) => ({ title: route?.params.date, headerTitleStyle:{ fontFamily: 'Raleway-Regular' }, headerTitleAlign: 'center', headerLeft: (props) => <Header route={route} navigation={navigation}/>})}/>
                <Stack.Screen name='weekly' component={Weekly} options={({ navigation, route }) => ({ title: route?.params.date, headerTitleStyle:{ fontFamily: 'Raleway-Regular'}, headerTitleAlign: 'center', headerLeft: (props) => <Header route={route} navigation={navigation}/>})}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}