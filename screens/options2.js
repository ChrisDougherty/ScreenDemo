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

export default () => {
  return (
    <SafeAreaView>
      <RowItem
        title="My Github"
        icon={<Entypo name="arrow-right" size={24} color="black" />}
        onPress={() => openURL("https://chrisdougherty.github.io/")}
      />

      <RowSeperator />

      <RowItem
        title="Responsive Image"
        icon={<Entypo name="arrow-right" size={24} color="black" />}
        onPress={() =>
          openURL("https://chrisdougherty.github.io/responsive/index")
        }
      />
    </SafeAreaView>
  );
};
