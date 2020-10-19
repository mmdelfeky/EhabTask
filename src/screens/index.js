const {createStackNavigator} = require('@react-navigation/stack');
const {default: Home} = require('./Home');

import React from 'react';
const Stack = createStackNavigator();
export const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="DocotrsList" component={Home} />
    </Stack.Navigator>
  );
};
