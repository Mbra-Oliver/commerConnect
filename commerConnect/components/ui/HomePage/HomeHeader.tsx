import { StyleSheet, Image, Text, View } from "react-native";
import SearchBar from "../SearchBar";
import FlashSaleTimer from "./FlashSaleTimer";
import HomeCarousel from "./HomeCarousel";

const images = [
  {
    uri: "https://img.freepik.com/premium-vector/flash-sale-banner-promotion_131000-379.jpg?w=1800",
  },

  {
    uri: "https://img.freepik.com/premium-vector/paper-style-12-12-sale-background_23-2149179973.jpg",
  },
  {
    uri: "https://img.freepik.com/premium-vector/paper-style-12-12-sale-background_23-2149179973.jpg",
  },
  {
    uri: "https://img.freepik.com/premium-vector/paper-style-12-12-sale-background_23-2149179973.jpg",
  },

  {
    uri: "https://img.freepik.com/premium-vector/paper-style-12-12-sale-background_23-2149179973.jpg",
  },
  {
    uri: "https://img.freepik.com/premium-vector/paper-style-12-12-sale-background_23-2149179973.jpg",
  },
  {
    uri: "https://img.freepik.com/premium-vector/paper-style-12-12-sale-background_23-2149179973.jpg",
  },
];

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

      <HomeCarousel showIndicator={false} datas={images} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    gap: 20,
  },

  greeting: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
