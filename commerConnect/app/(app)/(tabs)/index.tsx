import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import HomeHeader from "../../../components/ui/HomePage/HomeHeader";

const index = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <HomeHeader />
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
