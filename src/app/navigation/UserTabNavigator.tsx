import React from 'react';
import {StyleSheet, View} from 'react-native';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../../screens/HomeScreen';
import CoursesScreen from '../../screens/CoursesScreen';
import AssignmentsScreen from '../../screens/AssignmentsScreen';
import ProfileScreen from '../../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const UserTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: '#4F46E5', 
        tabBarInactiveTintColor: '#9CA3AF',
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarItemStyle: styles.tabBarItem,
        tabBarHideOnKeyboard: true,
        tabBarIcon : ({focused, color, size}) => {
            let iconName: string;
            switch(route.name){
                case 'Home': 
                    iconName = focused ? 'home' : 'home-outline'; 
                    break;
                case 'Courses': 
                    iconName = focused ? 'book' : 'book-outline'; 
                    break;
                case 'Assignments': 
                    iconName = focused ? 'document-text' : 'document-text-outline'; 
                    break;
                case 'Profile': 
                    iconName = focused ? 'person' : 'person-outline'; 
                    break;
                default: 
                    iconName = 'help-outline';
            }

            return(
                <View style={[ styles.iconContainer, focused && styles.iconContainerActive, ]}>
                    <Ionicons name={iconName} size={size} color={color} />
                </View>
            )
        }
        
    })}>
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

const styles = StyleSheet.create({
  tabBar : {
    height: 72, 
    backgroundColor: '#FFFFFF', 
    borderTopWidth: 0, 
    elevation: 10, 
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: -3, }, 
    shadowOpacity: 0.08, 
    shadowRadius: 8, 
    paddingTop: 8, 
    paddingBottom: 8,
  },
  tabBarItem: { 
    paddingVertical: 2, 
  },
  tabBarLabel: { 
    fontSize: 11, 
    fontWeight: '600', 
    marginTop: 2, 
  },
  iconContainer: { 
    width: 42, 
    height: 32, 
    borderRadius: 12, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  iconContainerActive: { 
    backgroundColor: '#EEF2FF', 
  },
});

export default UserTabNavigator;