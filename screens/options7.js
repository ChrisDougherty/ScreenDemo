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
        You continue through the forest and climb upon a hill just above the
        trees. You see what looks to be a military base, but don't know whose.
        Do you continue towards it or turn back to the path?
      </Text>
      <RowItem
        title="To the base"
        icon={<Entypo name="arrow-right" size={24} color="black" />}
        onPress={() => navigation.push("Base")}
      />

      <RowSeperator />

      <RowItem
        title="Back to the path"
        icon={<Entypo name="arrow-right" size={24} color="black" />}
        onPress={() => navigation.push("The Path")}
      />
    </SafeAreaView>
  );
};
