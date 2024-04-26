import { StyleSheet, Image, Text, View } from "react-native";
import SearchBar from "../SearchBar";
import FlashSaleTimer from "./FlashSaleTimer";

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.greeting}>
        <Text style={styles.title}>Bon retour</Text>

        <View style={styles.imageContainer}>
          <Image
            source={require("./../../../assets/default.png")}
            style={styles.image}
          />
        </View>
      </View>

      <SearchBar />

      <FlashSaleTimer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    gap: 10,
  },

  greeting: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  title: {
    fontSize: 16,
  },

  imageContainer: {
    backgroundColor: "white",
    padding: 5,
    borderRadius: 100,
  },

  image: {
    width: 30,
    height: 30,
    resizeMode: "cover",
  },
});

export default HomeHeader;
