import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Linking,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { RowSeperator, RowItem } from "../components/RowSeperator.js";

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
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

export default ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>
        You wave your shirt around frantically trying to get the ships
        attention. You are not succesful and as the ship sails away you are only
        left with two options. Enter the forest or walk around the island.
      </Text>
      <RowItem
        title="Enter the forest"
        icon={<Entypo name="arrow-right" size={24} color="black" />}
        onPress={() => navigation.push("The Forest")}
      />

      <RowSeperator />

      <RowItem
        title="Walk around the island"
        icon={<Entypo name="arrow-right" size={24} color="black" />}
        onPress={() => navigation.push("Walk")}
      />
    </SafeAreaView>
  );
};
