import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import FlashSaleTimer from "../FlashSaleTimer";
import HomeCarousel from "./HomeCaousel";

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>ShopLink</Text>
          <Text style={styles.textSm}>Découvrez vos rêves en produits.</Text>
        </View>
        <View style={styles.iconContainer}>
          <View
            style={{
              borderWidth: 1,
              borderColor: "gray",
              borderRadius: 10,
              padding: 5,
            }}
          >
            <Feather name="search" size={18} color="black" />
          </View>

          <View
            style={{
              borderWidth: 1,
              borderColor: "gray",
              borderRadius: 10,
              padding: 5,
            }}
          >
            <Ionicons name="notifications-outline" size={18} color="black" />
          </View>
        </View>
      </View>

      <HomeCarousel />

      <FlashSaleTimer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
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
