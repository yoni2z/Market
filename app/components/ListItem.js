import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons"

import AppText from "./AppText";

// import colors from "../config/colors";
import defaultStyles from "../config/styles";

export default function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={defaultStyles.colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.details}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subTitle && (
              <AppText style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </AppText>
            )}
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={25}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: defaultStyles.colors.white,
    alignItems: "center",
  },
  details: {
    marginLeft: 10,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    overflow: "hidden",
    marginVertical: 10,
    backgroundColor: defaultStyles.colors.black,
  },
  subTitle: {
    fontSize: 16,
    color: defaultStyles.colors.medium,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
  },
});
