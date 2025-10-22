import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import AppText from "./AppText";

export default function PickerItem({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <AppText>{item.label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
  },
});
