import {
  Button,
  View,
  Image,
  SafeAreaView,
  StatusBar,
  Platform,
  Text,
  TextInput,
  Switch,
} from "react-native";
import React, { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import ImageInput from "./app/components/ImageInput";
import Screen from "./app/components/Screen";
import ImageInputList from "./app/components/ImageInputList";
import ListItem from "./app/components/ListItem";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import LoginScreen from "./app/screens/LoginScreen";

export default function App() {
  return (
    <GestureHandlerRootView>
      <Screen>
        <ListingEditScreen />
        {/* <LoginScreen /> */}
        {/* <RegisterScreen /> */}
      </Screen>
    </GestureHandlerRootView>
  );
}
