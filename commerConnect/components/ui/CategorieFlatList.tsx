import React from "react";
import {
  ScrollView,
  View,
  Pressable,
  Text,
  Image,
  FlatList,
  StyleSheet,
} from "react-native";
import SectionTitle from "./SectionTitle";

const DATA_CATEGORIES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const CategorieFlatList = () => {
  return (
    <View style={{ paddingHorizontal: 15 }}>
      <SectionTitle title="Top categories" />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingVertical: 10 }}
      >
        {DATA_CATEGORIES.map((item, index) => {
          return (
            <Pressable
              key={index}
              style={[
                styles.categorieItem,
                {
                  marginRight: index !== DATA_CATEGORIES.length - 1 ? 10 : 0,
                },
              ]}
            >
              <View style={styles.imageContainer}>
                <Image
                  source={require("./../../assets/default.png")}
                  style={styles.backgroundImage}
                />
              </View>
              <Text>Vetements</Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: 40,
    height: 40,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  categorieItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 5,
  },
  text: {
    fontWeight: "bold",
  },
});

export default CategorieFlatList;
