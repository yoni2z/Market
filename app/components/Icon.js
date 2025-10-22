import { StyleSheet, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import colors from "../config/colors";
import defaultStyles from "../config/styles";

export default function Icon({
  iconName,
  backgroundColor = defaultStyles.colors.primary,
  color = defaultStyles.colors.white,
  size = "30",
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor,
      }}
    >
      <MaterialCommunityIcons color={color} name={iconName} size={size * 0.5} />
    </View>
  );
}

const styles = StyleSheet.create({});
