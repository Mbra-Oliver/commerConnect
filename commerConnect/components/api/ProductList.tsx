import { ScrollView, StyleSheet, View } from "react-native";
import SectionTitle from "../ui/SectionTile";
import ProductItem from "./ProductItem";

const DATAS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const ProductList = () => {
  return (
    <View style={styles.root}>
      <SectionTitle title="les plus populaires" linkText="voir tout" />

      <ScrollView
        contentContainerStyle={styles.productList}
        showsVerticalScrollIndicator={false}
      >
        {DATAS.map((item, index) => {
          return <ProductItem key={index} />;
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  productList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingVertical: 10,
    gap: 10,
  },
});

export default ProductList;
