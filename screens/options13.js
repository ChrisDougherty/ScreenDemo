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
    height: 400,
    paddingHorizontal: 100,
  },
});

export default ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>
        You stumble into the base only to discover it is a North Korean base and
        you're shot on sight.
      </Text>
      <Image
        style={styles.img}
        source={{
          uri: "https://img.dtnext.in/Articles/2021/Dec/202112171304390639_North-Korea-bans-laughing-drinking-on-Kim-Jongils-10th_SECVPF.gif",
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
