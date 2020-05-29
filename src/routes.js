import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './pages/SignIn';

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          name="SignIn"
          options={{ title: '' }}
          component={SignIn}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
