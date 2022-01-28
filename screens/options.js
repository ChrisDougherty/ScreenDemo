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
const openURL = (url) => {
  Linking.openURL(url).catch(alert("There was an error!"));
};

export default ({ navigator }) => {
  return (
    <SafeAreaView>
      <Text>
        You wake up on an island by yourself with no possesions. You determine
        you can either wait on the beach or try and get through the dense forest
        that covers the island.
      </Text>
      <RowItem
        title="Stay on the beach"
        icon={<Entypo name="arrow-right" size={24} color="black" />}
        onPress={() => openURL("https://chrisdougherty.github.io/")}
      />

      <RowSeperator />

      <RowItem
        title="Enter the forest"
        icon={<Entypo name="arrow-right" size={24} color="black" />}
        onPress={() => navigator.push("Options2")}
      />
    </SafeAreaView>
  );
};
