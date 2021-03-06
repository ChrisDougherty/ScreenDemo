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
import Navigation from "./Navigation.js";

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
        You see a ship on the horizon, you have a flare gun you could use to
        alert them or you can take off your shirt and wave it around. Which do
        you do?
      </Text>
      <RowItem
        title="Flare Gun"
        icon={<Entypo name="arrow-right" size={24} color="black" />}
        onPress={() => navigation.push("Flare")}
      />

      <RowSeperator />

      <RowItem
        title="Use your shirt"
        icon={<Entypo name="arrow-right" size={24} color="black" />}
        onPress={() => navigation.push("Shirt")}
      />
    </SafeAreaView>
  );
};
