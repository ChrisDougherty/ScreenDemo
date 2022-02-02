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
        You shoot the flare into the air, the boat sees it and sends a rescue
        team. You're saved, they take you in and you are on the way home.
        However, you realize they are scientologists, logically you're only
        options are to jump overboard to inveitable death or to join them. What
        will you do?
      </Text>
      <RowItem
        title="Jump overboard"
        icon={<Entypo name="arrow-right" size={24} color="black" />}
        onPress={() => navigation.push("Overboard")}
      />

      <RowSeperator />

      <RowItem
        title="Join the scientologists"
        icon={<Entypo name="arrow-right" size={24} color="black" />}
        onPress={() => navigation.push("Scientology")}
      />
    </SafeAreaView>
  );
};
