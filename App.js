import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native";

import Chats from "./screens/Chats";
import Settings from "./screens/Settings";
import { colors } from "./config/constants";

const Tabs = createBottomTabNavigator();

const TabsScreen = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Chats") {
            iconName = focused ? "chatbubbles" : "chatbubbles-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
      })}
    >
      <Tabs.Screen name="Chats" component={Chats} />
      <Tabs.Screen name="Settings" component={Settings} />
    </Tabs.Navigator>
  );
};

const MainStack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <MainStack.Navigator headerMode="false">
          <MainStack.Screen name="Tabs" component={TabsScreen} />
        </MainStack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
