import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../component';
import AddTodo from '../component/addTodo';

export type StackNavType = {
  HomeScreen: any;
  AddScreen: any;
};

const StackNav = createNativeStackNavigator<StackNavType>();

const RootApp = () => {
  return (
    <NavigationContainer>
      <StackNav.Navigator>
        <StackNav.Screen
          options={{title: 'Home'}}
          component={Home}
          name="HomeScreen"
        />
        <StackNav.Screen
          options={{title: 'Add Screen'}}
          component={AddTodo}
          name="AddScreen"
        />
      </StackNav.Navigator>
    </NavigationContainer>
  );
};

export default RootApp;
