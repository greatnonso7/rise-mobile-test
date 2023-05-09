import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from 'screens/auth/onboarding';
import { AuthStackParamList } from 'types';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Onboarding'}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen component={Onboarding} name="Onboarding" />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
