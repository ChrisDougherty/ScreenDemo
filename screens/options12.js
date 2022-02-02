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
    height: 600,
    paddingHorizontal: 100,
  },
});

export default ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>
        You walk for miles but eventually you here the sound of people and
        machinery. You start running and realize you've come across a military
        base. You are greeted by concerned soldiers who tend to you and you're
        sent on the next ship back to your home.
      </Text>
      <Image
        style={styles.img}
        source={{
          uri: "https://friendlystock.com/wp-content/uploads/2018/09/7-dabbing-soldier-character-vector-cartoon-clipart.jpg",
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
