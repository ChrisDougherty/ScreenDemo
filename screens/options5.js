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
        You continue down the path for only 100 feet when you're ambushed. A
        local tribe emerges from the trees and surrond you. They yell at you as
        you're overwhelmed. Do you fight back or put on the clown mask?
      </Text>
      <RowItem
        title="Fight"
        icon={<Entypo name="arrow-right" size={24} color="black" />}
        onPress={() => navigation.push("Fight")}
      />

      <RowSeperator />

      <RowItem
        title="Clown Mask"
        icon={<Entypo name="arrow-right" size={24} color="black" />}
        onPress={() => navigation.push("Clown")}
      />
    </SafeAreaView>
  );
};
