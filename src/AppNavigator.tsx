import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../src/screens/Splash';
import RegisterScreen from '../src/screens/Register';
import SignInScreen from '../src/screens/SignIn';
import ForgotPasswordScreen from '../src/screens/Forgotpassword';
import GetStartedScreen from '../src/screens/GetStarted';
import HomePage from './common/Homepage';
import Search from '../src/screens/Search'
import Cart from '../src/screens/Cart'
import Profile from '../src/screens/Profile'
import Wishlist from '../src/screens/Wishlist'
import Trending from './screens/Trending';
import API from '../src/API/Api';
import Footer from '../src/common/Footer';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: false }} />
        <Stack.Screen name="GetStarted" component={GetStartedScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} /> 
        <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} /> 
        <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} /> 
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} /> 
        <Stack.Screen name="Wishlist" component={Wishlist} options={{ headerShown: false }} /> 
        <Stack.Screen name="Trending" component={Trending} options={{ headerShown: false }} /> 
        <Stack.Screen name="API" component={API} options={{ headerShown: false }} /> 

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
