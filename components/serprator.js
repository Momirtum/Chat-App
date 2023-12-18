import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../config/constants";

const Serprator = () => {
  return <View style={styles.serprator} />;
};

const styles = StyleSheet.create({
  serprator: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
    marginStart: 16,
  },
});

export default Serprator;
