import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "serif" : "Avenir",
  },
});
