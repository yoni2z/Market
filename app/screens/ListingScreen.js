import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Car",
    price: 1800000,
    image: require("../assets/car.jpg"),
  },
  {
    id: 2,
    title: "Playstation 4",
    price: 10000,
    image: require("../assets/ps4_2.jpg"),
  },
];

export default function ListingScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.price + "ETB"}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
    screen: {
        // padding: 20,
        backgroundColor: colors.light,
    }
});
