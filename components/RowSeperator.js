import React from "react";
import { View, StyleSheet, TouchableHighlight, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";

const styles = StyleSheet.create({
  text: {
    fontSize: 45,
    paddingHorizontal: 15,
    margin: 15,
  },
  seperator: {
    backgroundColor: "#101010",
    height: StyleSheet.hairlineWidth,
    marginHorizontal: 20,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 20,
  },
});

export const RowSeperator = () => {
  return <View style={styles.seperator} />;
};

export const RowItem = ({ onPress, title, icon }) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.row}>
        <Text style={styles.text}>{title}</Text>
        {icon}
      </View>
    </TouchableHighlight>
  );
};
