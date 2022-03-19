import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home';
// import ManageSafeBoxes from '../pages/ManageSafeBoxes';
// import ContractDetail from '../pages/ContractDetail';
// import Transactions from '../pages/Transactions';
// import DetailTransaction from '../pages/DetailTransaction';
// import Profile from '../pages/Profile';
// import Notifications from '../pages/Notifications';
// import MovementSafeBox from '../pages/MovementSafeBox';
// import Splash from '../pages/Splash';
const Stack = createStackNavigator();

export default function MainScreens() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stack.Screen name="Splash" component={Splash} /> */}
      <Stack.Screen name="Home" component={Home} />
      {/* <Stack.Screen name="ManageSafeBoxes" component={ManageSafeBoxes} />
      <Stack.Screen name="MovementSafeBox" component={MovementSafeBox} />
      <Stack.Screen name="ContractDetail" component={ContractDetail} /> 
      <Stack.Screen name="Transactions" component={Transactions} />
      <Stack.Screen name="DetailTransaction" component={DetailTransaction} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Notifications" component={Notifications} /> */}
    </Stack.Navigator>
  );
}