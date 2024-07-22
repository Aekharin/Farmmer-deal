import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import TabNavigator from "./tabNavigator";
import LoginScreen from "../login-page";
import RegisterScreen from "../register-page";
import AddProductScreen from "../addproduct-page";
import HomeScreen from "../home-page";
const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="home" component={HomeScreen}  options={{ headerShown: false }}/>
            <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="register" component={RegisterScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="home-market" component={TabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="add-product" component={AddProductScreen} />
            
        </Stack.Navigator>
    )
    
}

export default MainNavigator;
