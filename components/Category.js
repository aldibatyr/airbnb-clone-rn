import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Category = props => {
  return (
    <View style={styles.categoryCard}>
      <TouchableOpacity style={{ height: '100%', width: '100%' }}>
        <View style={{ flex: 3 }}>
          <Image
            source={{
              uri: props.category.imageUri
            }}
            style={{
              flex: 1,
              height: null,
              width: null,
              resizeMode: "cover",
              borderTopRightRadius: 8,
              borderTopLeftRadius: 8
            }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ padding: 8 }}>{props.category.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryCard: {
    width: 150,
    height: 150,
    marginLeft: 20,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    shadowOffset: {
      height: 0,
      width: 0
    },
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 1
  },
  categoryText: {
    padding: 8
  }
});

export default Category;
