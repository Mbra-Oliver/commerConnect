import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import HomeHeader from "../../../components/ui/HomePage/HomeHeader";
import CategorieCarousel from "../../../components/ui/HomePage/CategorieCarousel";
import ProductList from "../../../components/api/ProductList";
import Toast from "react-native-toast-message";

const index = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <HomeHeader />

        <CategorieCarousel />

        <ProductList />
      </ScrollView>
      <Toast />
    </SafeAreaView>
  );
};

export default index;
