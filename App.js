import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/home-page.js';
import LoginScreen from './pages/login-page.js';
import RegisterScreen from './pages/register-page.js';
import HomeMarketScreen from './pages/home-market-page.js';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = () =>{
  return(
    <Tab.Navigator>
      screenOpions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'HomeMarket') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'Login') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
      <Tab.Screen name="HomeMarket" component={HomeMarketScreen} options={{title : 'market'}} />
      <Tab.Screen name="Login" component={LoginScreen}  options={{title : 'login'}}/>
    </Tab.Navigator>
  );
};


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
        <Stack.Screen name='HomeMarket' component={HomeMarketScreen} />
        <Stack.Screen name='Tab' component={Tab} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};




export default App;





