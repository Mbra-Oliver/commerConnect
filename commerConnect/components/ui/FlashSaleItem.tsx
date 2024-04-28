import { View, Text, StyleSheet, Image } from "react-native";

const FlashSaleItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("./../../assets/default.png")}
          style={styles.backgroundImage}
        />
      </View>

      <View style={styles.content}>
        <Text style={{}}>Nom du produit</Text>
        <Text style={styles.price}>500k</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "red",
  },

  imageContainer: {
    width: 150,
    height: 150,
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
  },

  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  content: {
    width: "100%",
    marginTop: 5,
  },
  price: {
    marginTop: 3,
    fontWeight: "900",
    fontFamily: "Montserrat",
  },
});

export default FlashSaleItem;
