import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import DeliveriesDashboard from './DeliveriesDashboard';
import Profile from '~/pages/Profile';

const Tab = createBottomTabNavigator();

const tabBarOptions = {
  activeTintColor: '#7159c1',
  labelStyle: {
    fontSize: 15,
    padding: 5,
  },
  style: {
    height: 70,
    paddingTop: 10,
  },
  size: 30,
};

const deliveriesDashboardOptions = {
  title: 'Entregas',
  tabBarIcon: ({ color }) => <Icon name="reorder" size={30} color={color} />,
};

const profileOptions = {
  title: 'Meu Perfil',
  tabBarIcon: ({ color }) => (
    <Icon name="account-circle" size={30} color={color} />
  ),
};

export default function Dashboard() {
  return (
    <Tab.Navigator tabBarOptions={tabBarOptions}>
      <Tab.Screen
        name="Deliveries"
        component={DeliveriesDashboard}
        options={deliveriesDashboardOptions}
      />
      <Tab.Screen name="Profile" component={Profile} options={profileOptions} />
    </Tab.Navigator>
  );
}
