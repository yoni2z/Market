import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from "react-native";
import React from "react";

import colors from "../config/colors";
import AppText from "./AppText";

export default function Card({ title, subTitle, image, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 300,
    backgroundColor: colors.white,
    borderRadius: 15,
    marginVertical: 10,
    overflow: "hidden"
  },
  detailsContainer: {
    padding: 20,
    alignItems: "flex-start",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 7,
  },
  subTitle: {
    fontSize: 18,
    color: colors.secondary,
  },
});
