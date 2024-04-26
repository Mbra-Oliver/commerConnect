import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import HomeHeader from "../../../components/ui/HomePage/HomeHeader";
import CategorieCarousel from "../../../components/ui/HomePage/CategorieCarousel";
import ProductList from "../../../components/api/ProductList";

const index = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <HomeHeader />

        <CategorieCarousel />

        <ProductList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
