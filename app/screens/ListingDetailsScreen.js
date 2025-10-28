import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import ListItem from "../components/ListItem";
import AppText from "../components/AppText";

import colors from "../config/colors";

export default function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <View style={styles.listDetails}>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailsContainer}>
        <View style={styles.listText}>
          <AppText style={styles.title}>{listing.title}</AppText>
          <AppText style={styles.price}>{listing.price}</AppText>
        </View>
        <View style={styles.container}>
          <ListItem
            image={require("../assets/profile.jpg")}
            title="Yonas Zelalem"
            subTitle="5 Listing"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 40,
    width: "100%",
  },
  detailsContainer: {
    // padding: 20,
    alignItems: "flex-start",
  },
  image: {
    width: "100%",
    height: 300,
  },
  listText: {
    paddingLeft: 20,
    paddingTop: 20,
    alignItems: "flex-start",
  },
  price: {
    fontSize: 18,
    color: colors.secondary,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 7,
  },
});
