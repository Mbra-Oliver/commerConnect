import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import HomeHeader from "../../../components/ui/HomeHeader";
import FlashSaleItem from "../../../components/ui/FlashSaleItem";
import FlashSaleTimer from "../../../components/FlashSaleTimer";
import HomeFooterProduct from "../../../components/ui/HomeFooterProduct";
import CategorieFlatList from "../../../components/ui/CategorieFlatList";
import ProductList from "../../../components/ui/ProductList";
import SectionTitle from "../../../components/ui/SectionTitle";
import SearchBar from "../../../components/ui/SearchBar";
import Toast from "react-native-toast-message";

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
  const renderFlashSaleItem = ({ item }: { item: { title: string } }) => (
    <FlashSaleItem />
  );

  const itemSeparator = () => <View style={styles.itemSeparator} />;

  return (
    <SafeAreaView style={styles.container}>
      

      <ScrollView>
        <HomeHeader />

        <CategorieFlatList />

        <View style={{ paddingHorizontal: 10 }}>
          <SectionTitle title="Les plus populaires" />
        </View>

        <ProductList />

        {/*<View style={styles.flatlistContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={DATA}
          renderItem={renderFlashSaleItem}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={itemSeparator}
        />
  </View>

      <HomeFooterProduct />*/}
      </ScrollView>
      <Toast />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  flatlistContainer: {
    paddingHorizontal: 10,
  },
  itemSeparator: {
    width: 10,
  },
});

export default Index;
