import React from "react";
import { Text, View, StyleSheet } from "react-native";

import ContentRow from "../components/contentRow";
import Serprator from "../components/serprator";
import Cell from "../components/cell";
import { colors } from "../config/constants";

const Settings = () => {
  return (
    <View>
      <ContentRow
        name={"Emir Taştan"}
        subtitle={"emir@gmail.com"}
        style={styles.ContentRow}
      ></ContentRow>
      <Serprator />
      <Cell
        title={"Logout"}
        iconName={"log-out-outline"}
        iconColor={"white"}
        iconBackgroundColor={colors.red}
        style={{ marginBottom: 16 }}
        onPress={() => {
          alert("Logout");
        }}
      />
      <Cell
        title={"Help"}
        iconName={"information-circle-outline"}
        iconColor={"white"}
        iconBackgroundColor={colors.green}
        onPress={() => {
          alert("Help");
        }}
      />
      <Cell
        title={"Tell a friend"}
        iconName={"people-outline"}
        iconColor={"white"}
        iconBackgroundColor={colors.pink}
        onPress={() => {
          alert("Tell a friend");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ContentRow: {
    backgroundColor: "white",
    marginTop: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
  },
});

export default Settings;
