import { createStackNavigator } from '@react-navigation/stack';
import {Cart, Home, ProductDetails} from '../screens/index'
import MyTabs from './BottomNav';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
const Stack = createStackNavigator();

const StackNavigation=()=> {
  return (
   
    <Stack.Navigator >
      <Stack.Screen options={{ headerShown: false }} name="HomeScreen" component={Home} />
    
      <Stack.Screen options={{ headerShown: false }} name="Product" component={ProductDetails} />
      <Stack.Screen options={{ headerShown: false }} name="Cart" component={Cart} />
    
    </Stack.Navigator>
    
  );
}
export default StackNavigation;