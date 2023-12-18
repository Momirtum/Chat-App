import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { colors } from "../config/constants";

const ContentRow = ({ name, subtitle, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.row, style]} onPress={onPress}>
      <View style={styles.avatar}>
        <Text style={styles.avatarLabel}>
          {name
            .split(" ")
            .reduce((prev, current) => `${prev}${current[0]}`, "")}
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.subtitle} numberOfLines={1}>
          {subtitle}
        </Text>
      </View>
      <Ionicons name="chevron-forward-outline" size={20} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarLabel: { fontSize: 20, color: "white" },
  textContainer: { flex: 1, marginStart: 16 },
  name: { fontSize: 16 },
  subtitle: {
    marginTop: 2,
    color: "#565656",
    width: 200,
  },
});

export default ContentRow;
