import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Image,
  ImageBackground,
  Animated,
  useWindowDimensions
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Category from "../components/Category";
import Adventure from "../components/Adventure";
import SearchParam from "../components/SearchParam";

const Explore = () => {
  const { width: windowWidth } = useWindowDimensions();
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
      pricePerPerson: 595,
      rating: 5
    },
    {
      imageUri:
        "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
      name: "Airport Overnight Stay",
      country: "Netherlands",
      pricePerPerson: 355,
      rating: 3
    },
    {
      imageUri:
        "https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2186&q=80",
      name: "Lakeside Party",
      country: "Canada",
      pricePerPerson: 250,
      rating: 4
    },
    {
      imageUri:
        "https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
      name: "Air Baloons Festival",
      country: "Cappadocia",
      pricePerPerson: 450,
      rating: 5
    }
  ];

  const scrollY = React.useRef(new Animated.Value(0)).current;

  const hide = () => {};

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Animated.View style={styles.searchBarWrapper}>
          <View style={styles.searchBar}>
            <AntDesign name="search1" size={20} style={{ marginRight: 8 }} />
            <TextInput
              underlineColorAndroid="transparent"
              placeholder="Where are you going?"
              placeholderTextColor="grey"
              style={{ fontSize: 16, fontWeight: "700" }}
            />
          </View>
          <Animated.View style={{ marginVertical: 15, flexDirection: "row" }}>
            <SearchParam name="Guests" />
            <SearchParam name="Dates" />
          </Animated.View>
        </Animated.View>
        <ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  y: scrollY
                }
              }
            }
          ])}
        >
          <View style={styles.containerMain}>
            <Text style={styles.header}>
              What can we help you find, Aldiyar?
            </Text>
          </View>
          <View style={styles.categories}>
            <ScrollView
              contentContainerStyle={{alignItems: 'center'}}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {store.map((category, i) => {
                return <Category key={i} category={category} />;
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
                  width: windowWidth - 40,
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
            <View
              style={{
                paddingHorizontal: 20,
                marginTop: 20,
                flexDirection: "row",
                justifyContent: "space-between",
                flexWrap: "wrap"
              }}
            >
              {experiences.map((experience, i) => {
                return (
                  <Adventure
                    key={i}
                    experience={experience}
                    width={windowWidth}
                  />
                );
              })}
            </View>
            <TouchableOpacity
              style={{
                alignItems: "center",
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "#484848",
                marginHorizontal: 20,
                paddingVertical: 16
              }}
            >
              <Text
                style={{ fontSize: 16, fontWeight: "500", color: "#484848" }}
              >
                Show all adventures
              </Text>
            </TouchableOpacity>
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
    // height: 80,
    backgroundColor: "#ffffff",
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
      height: 2,
      width: 0
    },
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1
  },
  header: {
    fontSize: 24,
    fontWeight: "500",
    paddingHorizontal: 20
  },
  categories: {
    flex: 1,
    height: 200,
    justifyContent: "center",
    alignItems: "center"
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
