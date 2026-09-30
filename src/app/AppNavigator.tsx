import React from 'react';

import {
  NavigationContainer,
} from '@react-navigation/native';

import {ActivityIndicator, View} from 'react-native';

import {useAuth} from '../context/AuthContext';

import {AuthNavigator} from './navigation/AuthNavigator';
import {AdminTabNavigator} from './navigation/AdminTabNavigator';
import UserTabNavigator from './navigation/UserTabNavigator';

export const AppNavigator = () => {
  const {
    user,
    isLoading,
    isAuthenticated,
  } = useAuth();

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {!isAuthenticated ? (
        <AuthNavigator />
      ) : user?.role === 'admin' ? (
        <AdminTabNavigator />
      ) : (
        <UserTabNavigator />
      )}
    </NavigationContainer>
  );
};