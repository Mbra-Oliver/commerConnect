import React from "react";
import { View, Text, SafeAreaView, FlatList, StyleSheet } from "react-native";
import HomeHeader from "../../../components/ui/HomeHeader";
import FlashSaleItem from "../../../components/ui/FlashSaleItem";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Index = () => {
  const renderFlashSaleItem = ({ item }) => (
    <FlashSaleItem title={item.title} />
  );

  const itemSeparator = () => <View style={styles.itemSeparator} />;

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <View style={styles.flatlistContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={DATA}
          renderItem={renderFlashSaleItem}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={itemSeparator}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  flatlistContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  itemSeparator: {
    width: 10, // Ajoutez l'espace horizontal désiré ici
  },
});

export default Index;
