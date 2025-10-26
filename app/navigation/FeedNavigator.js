import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListingScreen from "../screens/ListingScreen";

const Stack = createStackNavigator();
const FeedNavigator = () => (
  <Stack.Navigator>
    <Tab.Screen name="Feed" component={ListingScreen} />
    <Tab.Screen name="ListDetails" component={ListingDetailsScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
