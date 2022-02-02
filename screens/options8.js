import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Linking,
  Image,
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
  img: {
    height: 500,
    width: 500,
  },
});

export default ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>
        You jump overboard and escape the scientologists. You're then saved by a
        rescue helicopeter flying over head, Congratualations... Just kidding
        you die in the open ocean, I said inevitable and I meant it.
      </Text>
      <Image
        style={styles.img}
        source={{
          uri: "https://i1.sndcdn.com/artworks-000183254778-9yo85h-t500x500.jpg",
        }}
      />
      <RowItem
        title="Play again?"
        icon={<Entypo name="arrow-right" size={24} color="black" />}
        onPress={() => navigation.push("The Island")}
      />
    </SafeAreaView>
  );
};
