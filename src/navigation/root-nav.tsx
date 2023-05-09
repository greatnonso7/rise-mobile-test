import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './utils';
import AuthNavigation from './auth';
import { RootNavigationRoutes } from '../utils/types/navigation-types';
import DashboardNavigation from './dashboard';

const Stack = createStackNavigator<RootNavigationRoutes>();

const AppNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={'Auth'}
        screenOptions={{ headerShown: false }}>
        <Stack.Screen component={AuthNavigation} name="Auth" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const RootNavigation = AppNavigation;
