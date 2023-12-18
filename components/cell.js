import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../config/constants";

const Cell = ({
  title,
  iconName,
  iconBackgroundColor,
  iconColor,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity style={[styles.cell, style]} onPress={onPress}>
      <View
        style={[styles.logoutIcon, { backgroundColor: iconBackgroundColor }]}
      >
        <Ionicons name={iconName} size={24} color={`${iconColor}`} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Ionicons name="chevron-forward-outline" size={20} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cell: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderColor: colors.border,
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
  },
  title: {
    flex: 1,
    fontSize: 16,
    color: "black",
    marginStart: 16,
  },
  logoutIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.red,
    width: 32,
    height: 32,
    borderRadius: 6,
  },
});

export default Cell;
