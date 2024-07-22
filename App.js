import React from 'react';
import MainNavigator from './pages/navigations/mainNavigator.js';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;
