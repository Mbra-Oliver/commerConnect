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
          style={[styles.categorieItem, { width: windowWidth / 2 - 10 }]}
        >
          <View style={styles.imageContainer}>
            <Image
              source={require("./../../assets/default.png")}
              style={styles.backgroundImage}
            />
          </View>

          <View
            style={{
              justifyContent: "space-between",
              gap: 5,
            }}
          >
            <View style={{ marginTop: 10 }}>
              <Text style={[styles.text, styles.name]}>
                Chaussures Femmes orangés gamer
              </Text>

              <Text style={{}}>Francis Doe</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={[styles.text, styles.price]}>1000k</Text>
              <Pressable
                style={{
                  backgroundColor: COLORS.white,
                  padding: 5,
                  borderRadius: 100,
                }}
                onPress={AddedCartNotification}
              >
                <AntDesign name="heart" size={15} color={COLORS.primary} />
              </Pressable>
            </View>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingVertical: 10,
    gap: 10,
  },

  imageContainer: {
    width: "100%",
    height: 150,
    backgroundColor: "white",
    borderRadius: 15,
  },
  name: {
    marginBottom: 5,
    fontWeight: "bold",
    fontSize: 14,
    fontFamily: "Lato-Regular",
  },
  price: {
    fontFamily: "Lato-Regular",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  text: {
    fontWeight: "bold",
    fontFamily: "Lato-Regular",
  },

  categorieItem: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "white",

    ...Platform.select({
      ios: {
        shadowColor: "#eee",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 1,
      },
    }),
  },
});

export default ProductList;
