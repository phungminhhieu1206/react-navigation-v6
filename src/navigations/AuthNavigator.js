import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, ForgotPassword, Register} from '../screens';
import {COLORS, ROUTES} from '../constants';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();
// return Object contains: Navigator, Screen, Group

function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: COLORS.white,
        headerBackTitle: 'Back',
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
      }}
      initialRouteName={ROUTES.LOGIN}>
      <Stack.Screen
        name={ROUTES.FORGOT_PASSWORD}
        component={ForgotPassword}
        options={({route}) => ({
          title: route.params.userId,
        })}
      />
      <Stack.Screen
        name={ROUTES.LOGIN}
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name={ROUTES.REGISTER} component={Register} />
      <Stack.Screen
        name={ROUTES.HOME}
        component={BottomTabNavigator}
        options={{
          headerShown: false, // header cua navigator hien tai
          gestureEnabled: false, // tat vuot nguoc khi vao home
        }}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
