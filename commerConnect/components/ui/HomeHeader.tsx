import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import FlashSaleTimer from "../FlashSaleTimer";
import HomeCarousel from "./HomeCaousel";
import SearchBar from "./SearchBar";
import { COLORS } from "../../constant/colors";

const images = [
  {
    uri: "https://img.freepik.com/free-vector/gradient-social-media-sale-post-template_23-2149050983.jpg",
  },
  {
    uri: "https://img.freepik.com/premium-vector/flash-sale-banner-promotion_131000-379.jpg?w=1800",
  },
  {
    uri: "https://img.freepik.com/premium-vector/paper-style-12-12-sale-background_23-2149179973.jpg",
  },
  {
    uri: "https://img.freepik.com/premium-vector/paper-style-12-12-sale-background_23-2149179973.jpg",
  },
  {
    uri: "https://img.freepik.com/premium-vector/paper-style-12-12-sale-background_23-2149179973.jpg",
  },
  {
    uri: "https://img.freepik.com/premium-vector/paper-style-12-12-sale-background_23-2149179973.jpg",
  },
  {
    uri: "https://img.freepik.com/premium-vector/paper-style-12-12-sale-background_23-2149179973.jpg",
  },
  {
    uri: "https://img.freepik.com/premium-vector/paper-style-12-12-sale-background_23-2149179973.jpg",
  },
];

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <Text style={styles.title}>Bon retour</Text>
        <View style={styles.iconContainer}>
          <View
            style={{
              borderRadius: 100,
              padding: 5,
              backgroundColor: "white",
            }}
          >
            <Image
              source={require("./../../assets/default.png")}
              style={{ width: 30, height: 30, resizeMode: "cover" }}
            />
          </View>
        </View>
      </View>

      <SearchBar />

      <View style={{ paddingVertical: 10 }}>
        <FlashSaleTimer />
      </View>

      <HomeCarousel datas={images} showIndicator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  textSm: {
    fontSize: 12,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  countdownContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  flashSaleText: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default HomeHeader;
