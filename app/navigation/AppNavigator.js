import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListingScreen from "../screens/ListingScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import MyAccountScreen from "../screens/MyAccountScreen";

const Tab = createBottomTabNavigator();
const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={ListingScreen} />
    <Tab.Screen name="Edit" component={ListingEditScreen} />
    <Tab.Screen name="Account" component={MyAccountScreen} />
  </Tab.Navigator>
);

export default AppNavigator;