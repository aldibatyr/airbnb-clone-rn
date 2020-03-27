import React from "react";
import { View, Text, SafeAreaView, Animated, Button } from "react-native";

const Inbox = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: "center"}}>
        <Button title="start animation"/>
      </View>
    </SafeAreaView>
  );
};

export default Inbox;
