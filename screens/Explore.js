import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  ImageBackground,
  Button
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Category from "../components/Category";

const { height, width } = Dimensions.get("window");

const Explore = () => {
  const store = [
    {
      imageUri:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3000&q=80",
      name: "Stays"
    },
    {
      imageUri:
        "https://images.unsplash.com/photo-1569706148438-e3eaf69e3846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
      name: "Experience"
    },
    {
      imageUri:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80",
      name: "Adventures"
    }
  ];

  const experiences = [
    {
      imageUri:
        "https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1387&q=80",
      name: "Hatted Planner",
      country: "United States",
      pricePerPerson: 595
    },
    {
      imageUri:
        "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
      name: "Airport Overnight Stay",
      country: "Netherlands",
      pricePerPerson: 355
    },
    {
      imageUri:
        "https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2186&q=80",
      name: "Lakeside Party",
      country: "Canada",
      pricePerPerson: 250
    },
    {
      imageUri:
        "https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
      name: "Air Baloons Festival",
      country: "Cappadocia",
      pricePerPerson: 450
    }
  ];
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.searchBarWrapper}>
          <View style={styles.searchBar}>
            <AntDesign name="search1" size={20} style={{ marginRight: 8 }} />
            <TextInput
              underlineColorAndroid="transparent"
              placeholder="Where are you going?"
              placeholderTextColor="grey"
              style={{ fontSize: 16, fontWeight: "700" }}
            />
          </View>
        </View>
        <ScrollView scrollEventThrottle={16}>
          <View style={styles.containerMain}>
            <Text style={styles.header}>
              What can we help you find, Aldiyar?
            </Text>
          </View>
          <View style={styles.categories}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {store.map(category => {
                return <Category category={category} />;
              })}
            </ScrollView>
          </View>
          <View style={styles.bnbPlus}>
            <Text style={styles.header}>Airbnb Plus places to stay</Text>
            <Text style={styles.subtext}>
              A selection of places to stay verified for quality and design
            </Text>
            <TouchableOpacity>
              <ImageBackground
                source={{
                  uri:
                    "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                }}
                style={{
                  width: width - 40,
                  height: 300,
                  marginHorizontal: 20,
                  marginTop: 20,
                  overflow: "hidden",
                  borderRadius: 5,
                  alignItems: "center"
                }}
              >
                <View style={styles.exploreButton}>
                  <Text style={{ fontSize: 14 }}>EXPLORE STAYS</Text>
                  <AntDesign name="right" size={14} />
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={styles.header}>Introducing Airbnb Adventures</Text>
            <Text style={styles.subtext}>
              Multi-day trips led by local experts - activities, meals, and
              stays included.
            </Text>
            {experiences.map(experience => {
              return (
                <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
                  <View style={{ width: width / 2, height: width / 2 }}>
                    <View style={{ flex: 1 }}>
                      <Image
                        source={{ uri: experience.imageUri }}
                        style={{
                          flex: 1,
                          width: null,
                          height: null,
                          resizeMode: "cover"
                        }}
                      />
                    </View>
                    <View
                      style={{
                        flex: 0.5,
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
                    </View>
                  </View>
                </View>
              );
            })}
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={styles.header}>Places to stay around the world</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.listings}>
                <View>
                  <View>
                    <Image
                      source={{
                        uri:
                          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                      }}
                      style={{ width: 200, height: 150 }}
                    />
                  </View>
                  <View>
                    {/* userInfo */}
                    <View></View>
                    {/* houseInfo */}
                    <View></View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  container: {
    flex: 1
  },
  containerMain: {
    flex: 1,
    paddingTop: 20
  },
  searchBarWrapper: {
    height: 80,
    backgroundColor: "#ffffff",
    shadowColor: "#767676",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    paddingHorizontal: 20
  },
  searchBar: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginTop: 10,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    borderWidth: 0.5,
    borderColor: "lightgrey",
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 1
  },
  header: {
    fontSize: 24,
    fontWeight: "500",
    paddingHorizontal: 20
  },
  categories: {
    height: 170,
    justifyContent: "center",
    marginTop: 20
  },
  bnbPlus: {
    flex: 1
  },
  subtext: {
    marginTop: 10,
    paddingHorizontal: 20,
    fontSize: 18,
    color: "#484848"
  },
  exploreButton: {
    marginTop: 160,
    paddingHorizontal: 32,
    paddingVertical: 18,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5
  },

  listings: {
    marginTop: 10,
    paddingHorizontal: 20
  }
});

export default Explore;
