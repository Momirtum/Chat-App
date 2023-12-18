import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

import ContentRow from "../components/contentRow";
import Serprator from "../components/serprator";

const Chats = () => {
  return (
    <SafeAreaView>
      <ContentRow
        name="Emir Taştan"
        subtitle="Böle card tasarımın aq"
        onPress={() => {
          alert("Emir Taştan'a tıklandı");
        }}
      />
      <Serprator />
      <ContentRow
        name="Azmi Mengü"
        subtitle="Derhal revize edilmesi lazım edilmez ise kovulursun"
        onPress={() => {
          alert("Azmi Mengü'ye tıklandı");
        }}
      />
      <Serprator />
    </SafeAreaView>
  );
};

export default Chats;
