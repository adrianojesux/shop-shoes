import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import RouteNames from './utils/route_names';

import {HomePage, DetailPage, CartPage} from './pages';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName={RouteNames.HOME}>
      <Stack.Screen name={RouteNames.HOME} component={HomePage} />
      <Stack.Screen name={RouteNames.DETAILS} component={DetailPage} />
      <Stack.Screen name={RouteNames.CART} component={CartPage} />
    </Stack.Navigator>
  );
};

export default Routes;
