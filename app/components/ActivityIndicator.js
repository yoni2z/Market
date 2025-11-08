import LottieView from "lottie-react-native";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function ActivityIndicator({ visible = false }) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        style={styles.animation}
        source={require("../assets/animations/Loading.json")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    // zIndex: 1,
  },
  animation: {
    width: 120,
    height: 120,
  },
});
