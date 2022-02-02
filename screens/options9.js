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
    width: 500,
    height: 500,
  },
});

export default ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>
        You join the scientoligists and never see your family or friends agains.
        You do meet Tom Cruise though and he's a solid 5'4.
      </Text>
      <Image
        style={styles.img}
        source={{
          uri: "https://c.files.bbci.co.uk/381B/production/_104336341_gettyimages-615931930.jpg",
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
