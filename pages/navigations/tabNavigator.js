import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeMarketScreen from "../home-market-page";
import AddProductScreen from "../addproduct-page";
import LoginScreen from "../login-page";
import RegisterScreen from "../register-page";
import HomeScreen from "../home-page";


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return <Tab.Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Market" component={HomeMarketScreen}/>
        <Tab.Screen name="add-product" component={AddProductScreen}/>
        <Tab.Screen name="login" component={LoginScreen}/>
        <Tab.Screen name="register" component={RegisterScreen}/>
    </Tab.Navigator>
}

export default TabNavigator;