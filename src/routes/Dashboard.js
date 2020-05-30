import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Deliveries from '~/pages/Deliveries';
import Profile from '~/pages/Profile';

// <Icon name="menu" size={20} color={tintColor} />

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

const deliveriesOptions = {
  title: 'Entregas',
  tabBarIcon: ({ color }) => <Icon name="menu" size={30} color={color} />,
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
        component={Deliveries}
        options={deliveriesOptions}
      />
      <Tab.Screen name="Profile" component={Profile} options={profileOptions} />
    </Tab.Navigator>
  );
}
