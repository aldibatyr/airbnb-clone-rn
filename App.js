import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import Explore from "./screens/Explore";
import Inbox from "./screens/Inbox";
import Saved from "./screens/Saved";
import Trips from "./screens/Trips";
import Profile from "./screens/Profile";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Explore"
        tabBarOptions={{ activeTintColor: "#FF5A5F" }}
      >
        <Tab.Screen
          name="Explore"
          component={Explore}
          options={{
            title: "EXPLORE",
            tabBarIcon: ({ color }) => (
              <Ionicons name="ios-search" size={24} color={color} />
            )
          }}
        />
        <Tab.Screen
          name="Saved"
          component={Saved}
          options={{
            title: "SAVED",
            tabBarIcon: ({ color }) => (
              <Ionicons name="ios-heart" size={24} color={color} />
            )
          }}
        />
        <Tab.Screen
          name="Trips"
          component={Trips}
          options={{
            title: "TRIPS",
            tabBarIcon: ({ color }) => (
              <Image
                source={require("./assets/airbnb.png")}
                style={{ height: 24, width: 24, tintColor: color }}
              />
            )
          }}
        />
        <Tab.Screen
          name="Inbox"
          component={Inbox}
          options={{
            title: "INBOX",
            tabBarIcon: ({ color }) => (
              <Ionicons name="ios-chatbubbles" size={24} color={color} />
            )
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            title: "PROFILE",
            tabBarIcon: ({ color }) => (
              <AntDesign name="user" size={24} color={color} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
