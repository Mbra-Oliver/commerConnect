import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";

const DATA = Array.from({ length: 30 }).map((_, index) => ({
  id: String(index),
  title: `Item ${index + 1}`,
}));

const HomeFooterProduct = () => {
  const renderImageItem = ({ item }: any) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <View>
      <FlatList
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={renderImageItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.imageListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageListContainer: {},
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 8,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
  },
});

export default HomeFooterProduct;
