import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";

const Auth = createStackNavigator();
const AuthNavigator = () => (
  <Auth.Navigator>
    <Auth.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Auth.Screen name="Register" component={RegisterScreen} />
    <Auth.Screen name="Login" component={LoginScreen} />
  </Auth.Navigator>
);

export default AuthNavigator;
