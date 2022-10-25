import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ROUTES} from '../constants';
import BottomTabNavigator from './BottomTabNavigator';
import {Notifications, Wallet} from '../screens';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name={ROUTES.HOME_DRAWER} component={BottomTabNavigator} />
      <Drawer.Screen name={ROUTES.WALLET_DRAWER} component={Wallet} />
      <Drawer.Screen
        name={ROUTES.NOTIFICATIONS_DRAWER}
        component={Notifications}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
