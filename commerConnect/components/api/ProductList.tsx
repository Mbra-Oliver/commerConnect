import { StyleSheet, View } from "react-native";
import SectionTitle from "../ui/SectionTile";

const ProductList = () => {
  return (
    <View style={styles.root}>
      <SectionTitle title="les plus populaires" linkText="voir tout" />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

export default ProductList;
