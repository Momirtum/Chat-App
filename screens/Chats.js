import React, { useEffect } from "react";
import { SafeAreaView, Text } from "react-native";

import ContentRow from "../components/contentRow";
import Serprator from "../components/serprator";
import Chat from "./chat";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const chats = [
  {
    users: ["me@mail.com", "a@mail.com"],
    messages: [""],
  },
  {
    users: ["me@mail.com", "b@mail.com"],
    messages: [""],
  },
  {
    users: ["me@mail.com", "c@mail.com"],
    messages: [""],
  },
  {
    users: ["me@mail.com", "d@mail.com"],
    messages: [""],
  },
  {
    users: ["me@mail.com", "e@mail.com"],
    messages: [""],
  },
  {
    users: ["me@mail.com", "f@mail.com"],
    messages: [""],
  },
];

const Chats = ({ navigation }) => {
  useEffect(() => {
    const isLoggedIn = true;
    if (!isLoggedIn) {
      navigation.navigate("SignUp");
    }
  }, []);

  return (
    <SafeAreaView>
      {chats.map((chat, index) => (
        <ContentRow
          key={index}
          name={chat.users[1]}
          subtitle={"Naber"}
          onPress={() => {
            navigation.navigate("Chat");
          }}
        />
      ))}
      <Serprator />
    </SafeAreaView>
  );
};

export default Chats;
