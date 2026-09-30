import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import CoursesScreen from '../screens/CoursesScreen';
import AssignmentsScreen from '../screens/AssignmentsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Trang chủ',
        }}
      />

      <Tab.Screen
        name="Courses"
        component={CoursesScreen}
        options={{
          title: 'Môn học',
        }}
      />

      <Tab.Screen
        name="Assignments"
        component={AssignmentsScreen}
        options={{
          title: 'Bài tập',
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Cá nhân',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;