import React from "react";
import {
  ScrollView,
  View,
  Pressable,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  Platform, // Importer Dimensions
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../constant/colors";
import Toast from "react-native-toast-message";

const DATA_CATEGORIES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const ProductList = () => {
  const AddedCartNotification = () => {
    Toast.show({
      type: "success",
      text1: "Produit ajoute au panier",
      position: "bottom",
    });
  };

  const windowWidth = Dimensions.get("window").width; // Obtenir la largeur de l'écran

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {DATA_CATEGORIES.map((item, index) => (
        <Pressable
          key={index}
          style={[styles.categorieItem, { width: windowWidth / 2 - 15 }]}
        >
          <View style={styles.imageContainer}>
            <Image
              source={require("./../../assets/default.png")}
              style={styles.backgroundImage}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text style={[styles.text, styles.name]}>Home</Text>
              <Text style={[styles.text, styles.price]}>+10000000</Text>
            </View>
            <Pressable
              style={{
                backgroundColor: COLORS.primary,
                padding: 5,
                borderRadius: 100,
              }}
              onPress={AddedCartNotification}
            >
              <AntDesign name="plus" size={15} color="white" />
            </Pressable>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingVertical: 10,
  },

  imageContainer: {
    width: "100%",
    height: 150,
  },
  name: {
    fontSize: 10,
    marginBottom: 5,
    color: "gray",
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    color: COLORS.secondary,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  text: {
    fontWeight: "bold",
  },

  categorieItem: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10,
    borderRadius: 10,

    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
    }),
  },
});

export default ProductList;
