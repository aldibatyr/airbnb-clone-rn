import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import StarRating from 'react-native-star-rating';

const Adventure = ({ experience, width }) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          width: width / 2 - 30,
          height: width / 2 - 30,
          marginBottom: 20
        }}
      >
        <View style={{ flex: 1 }}>
          <Image
            source={{ uri: experience.imageUri }}
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: "cover",
              borderRadius: 5
            }}
          />
        </View>
        <View
          style={{
            flex: 0.7,
            alignItems: "flex-start",
            justifyContent: "space-evenly"
          }}
        >
          <Text
            style={{
              textTransform: "uppercase",
              fontWeight: "700",
              color: "#767676",
              fontSize: 10
            }}
          >
            {experience.country}
          </Text>
          <Text style={{ fontWeight: "500", color: "#484848" }}>
            {experience.name}
          </Text>
          <Text style={{ fontWeight: "200", color: "#484848" }}>
            ${experience.pricePerPerson} per person
          </Text>
          <StarRating 
            disabled={true}
            maxStars={5}
            rating={experience.rating}
            starSize={10}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Adventure;
