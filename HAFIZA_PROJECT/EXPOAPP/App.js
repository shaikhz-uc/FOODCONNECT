import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from './drawerscreens/LoginScreen';
import AboutScreen from './drawerscreens/AboutScreen';
import DonorDashboard from './drawerscreens/DonorDashboard';
import SignupScreen from './drawerscreens/SignUpScreen';
import RecipientDashboard from './drawerscreens/RecipientDashboard';
import AdminPanel from './drawerscreens/AdminPanel';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Signup" component={SignupScreen} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="FoodConnect App" component={AuthStack} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="DonorDashboard" component={DonorDashboard} />
        <Drawer.Screen name="RecipientDashboard" component={RecipientDashboard} />
        <Drawer.Screen name="AdminPanel" component={AdminPanel} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;


