import React from "react";
import { View, Text } from "react-native";

const SearchParam = ({ name }) => {
  return (
    <View
      style={{
        paddingHorizontal: 24,
        paddingVertical: 16,
        borderColor: "#484848",
        borderWidth: 0.5,
        backgroundColor: "#ffffff",
        borderRadius: "100%",
        marginRight: 10
      }}
    >
      <Text>{name}</Text>
    </View>
  );
};

SearchParam.defaultProps = {
  name: "???"
};

export default SearchParam;
