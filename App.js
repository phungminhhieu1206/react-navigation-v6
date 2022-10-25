import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './src/navigations/AuthNavigator';

export default function App() {
  // isAuthenticated = is ...
  return (
    <NavigationContainer>
      {/* {isAuthenticated ? AuthNavigator : DrawerNavigator} */}
      <AuthNavigator />
    </NavigationContainer>
  );
}
