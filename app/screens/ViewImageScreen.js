import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons style={styles.closeIcon} name="close" size={30} />
      <MaterialCommunityIcons
        style={styles.deleteIcon}
        name="trash-can-outline"
        size={30}
      />
      <Image
        resizeMode="contain"
        source={require("../assets/car.jpg")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    color: colors.white,
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  deleteIcon: {
    color: colors.white,
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
