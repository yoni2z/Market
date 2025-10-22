import { StyleSheet, Text, View } from "react-native";
import React from "react";

import AppText from "../AppText";

export default function ErrorMessage({ error, visible }) {
  if (!error || !visible) return null;

  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 16,
    marginBottom: 5,
  },
});
