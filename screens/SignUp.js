import React from "react";
import { Text, View, StyleSheet, SafeAreaView, TextInput } from "react-native";
import { colors } from "../config/constants";
import Button from "../components/button";

const SignUp = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.form}>
        <Text style={styles.title}>SignUp</Text>
        <View style={styles.inputs}>
          <TextInput placeholder="Enter your name" style={styles.input} />
          <TextInput placeholder="Enter your email" style={styles.input} />
          <TextInput placeholder="Enter your password" style={styles.input} />
        </View>
        <View style={styles.buttons}>
          <Button text={"Sign In"} varient="secondary" />
          <Button text={"Sign Up"} varient="primary" />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  title: {
    display: "flex",
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
  },
  form: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  inputs: { marginTop: 40 },
  input: {
    backgroundColor: "white",
    width: 300,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 300,
    marginTop: 20,
  },
});

export default SignUp;
