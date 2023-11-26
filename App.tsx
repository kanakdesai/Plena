import StackNavigation from './navigation/stackNav';
import { Provider } from 'react-redux';
import MyTabs from './navigation/BottomNav';
import React from 'react';
import 'react-native-gesture-handler';
import store from './redux/store';
export default function App() {
  return (
    <Provider store={store}>
      <MyTabs></MyTabs>
    </Provider>
    
  );
}


