import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import colors from "../config/colors";

import ViewImageScreen from "../screens/ViewImageScreen";

function AppButton({ title, onPress, color = "primary" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    width: "100%",
    height: 50,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  text: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontFamily: "serif",
  },
});

export default AppButton;
