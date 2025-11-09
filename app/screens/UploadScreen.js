import { ActivityIndicator, Modal, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../config/colors";
import LottieView from "lottie-react-native";

export default function UploadScreen({
  onDone,
  visible,
  completed = false,
}) {
  if (!visible) return null;

  return (
    <Modal>
      <View style={styles.container}>
        {!completed ? (
          <ActivityIndicator size="large" color={colors.primary} />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            source={require("../assets/animations/done.json")}
            style={styles.animation}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  animation: {
    width: 100,
    height: 100,
  },
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
