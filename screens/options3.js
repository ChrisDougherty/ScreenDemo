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
        You enter the dense forest, there are nothing but trees until you enter
        a small clearing. You see a clown mask and pick it up. You can either
        continue down the path or through the forest.
      </Text>
      <RowItem
        title="Down the path"
        icon={<Entypo name="arrow-right" size={24} color="black" />}
        onPress={() => navigation.push("The Path")}
      />

      <RowSeperator />

      <RowItem
        title="Continue through the forest"
        icon={<Entypo name="arrow-right" size={24} color="black" />}
        onPress={() => navigation.push("Forest2")}
      />
    </SafeAreaView>
  );
};
