import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Category = props => {
  return (
    <TouchableOpacity>
      <View style={styles.categoryCard}>
        <View style={styles.categoryImage}>
          <Image
            source={{
              uri: props.category.imageUri
            }}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.categoryText}>{props.category.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
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
  categoryImage: {
    flex: 3,
    overflow: "hidden",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  categoryText: {
    padding: 8
  }
});

export default Category;
