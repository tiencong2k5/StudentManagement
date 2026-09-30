import React from 'react';

import {
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';


import { AdminHomeScreen } from '../../screens/admin/AdminHomeScreen';
import { AdminProfileScreen } from '../../screens/admin/AdminProfileScreen';
import { AdminUsersScreen } from '../../screens/admin/AdminUsersScreen';


const Tab =
  createBottomTabNavigator();

export const AdminTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Dashboard"
        component={AdminHomeScreen}
      />

      <Tab.Screen
        name="Users"
        component={AdminUsersScreen}
      />

      <Tab.Screen
        name="Profile"
        component={AdminProfileScreen}
      />
    </Tab.Navigator>
  );
};