import React from 'react';
// import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { MyStyles } from './styles/styles.js';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/home-page.js';
import LoginScreen from './pages/login-page.js';
import RegisterScreen from './pages/register-page.js';


const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
