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
    height: 700,
  },
});

export default ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>
        You try to fight them but are quickly overwhelmed, they have the numbers
        advantage and you can't fight to save your life, literally. So you are
        taken back to their camp and where you are burned alive.
      </Text>
      <RowItem
        title="Play again?"
        icon={<Entypo name="arrow-right" size={24} color="black" />}
        onPress={() => navigation.push("The Island")}
      />
      <Image
        style={styles.img}
        source={{
          uri: "https://cdn.w600.comps.canstockphoto.com/martial-arts-fighter-stock-images_csp25836753.jpg",
        }}
      />
    </SafeAreaView>
  );
};
