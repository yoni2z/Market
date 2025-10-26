import { Button, Text } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Screen from "./app/components/Screen";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
  const Tweets = ({ navigation }) => (
    <Screen>
      <Text>Tweets</Text>
      <Button
        title="View Details"
        onPress={() =>
          navigation.navigate("TweetDetails", { id: 1, title: "Details" })
        }
      />
    </Screen>
  );

  const TweetDetails = ({ route }) => (
    <Screen>
      <Text>Tweet Details {route.params.id}</Text>
    </Screen>
  );

  const Accounts = () => (
    <Screen>
      <Text>Accounts</Text>
    </Screen>
  );

  const Stack = createStackNavigator();
  const StackNavigator = () => (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "grey" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="Tweets"
        component={Tweets}
        options={{
          headerStyle: { backgroundColor: "tomato" },
          headerTintColor: "white",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TweetDetails"
        component={TweetDetails}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Navigator>
  );

  const Tab = createBottomTabNavigator();
  const TabNavigator = () => (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: "tomato",
        tabBarActiveTintColor: "white",
        tabBarInactiveBackgroundColor: "grey",
        tabBarInactiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Feed"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Accounts}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );

  return (
    <GestureHandlerRootView>
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
