import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../config/constants";

const Button = ({ text, varient }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: varient === "primary" ? "black" : "transparent" },
      ]}
    >
      <Text
        style={[
          styles.buttonText,
          { color: varient === "primary" ? "white" : "black" },
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    padding: 15,
    display: "flex",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
  },
});

export default Button;
