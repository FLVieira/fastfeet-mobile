import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Deliveries from '~/pages/Deliveries';
import DeliveryManager from '~/pages/DeliveryManager';
import DeliveryProblem from '~/pages/DeliveryManager/DeliveryProblem';

const Stack = createStackNavigator();

const screenOptions = {
  headerTintColor: '#fff',
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: '#9751ed',
    elevation: 0,
  },
};

export default function Manager({ navigation }) {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="DeliveriesDashboard"
        component={Deliveries}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DeliveryManager"
        component={DeliveryManager}
        options={{
          title: 'Detalhes da encomenda',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="chevron-left" size={30} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="DeliveryProblem"
        component={DeliveryProblem}
        options={{
          title: 'Informar problema',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="chevron-left" size={30} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
