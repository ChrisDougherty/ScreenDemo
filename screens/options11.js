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
    width: 400,
    height: 400,
  },
});

export default ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>
        You put the clown mask on your face in hopes it will scare them. The
        tribesman then lower their weapons and bow their heads. It turns out
        that they worship a clown like thing and you fit the bill. The escort
        you back to camp where you are worshiped for the rest of your life and
        enjoy priveleges such as eating boar's tongue.
      </Text>
      <Image
        style={styles.img}
        source={{
          uri: "https://htdraw.com/wp-content/uploads/2020/01/How-to-Draw-Pennywise.jpg",
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
