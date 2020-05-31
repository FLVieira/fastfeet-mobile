import * as React from 'react';
import { useSelector } from 'react-redux';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '~/pages/SignIn';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

function Routes() {
  const { isLoggedIn } = useSelector((state) => state.user);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <Stack.Screen name="Dashboard" component={TabNavigator} />
        ) : (
          <Stack.Screen name="SignIn" component={SignIn} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
