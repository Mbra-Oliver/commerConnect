import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Pressable,
  Text,
} from "react-native";
import Carousel from "react-native-snap-carousel";

const images = [
  {
    uri: "https://img.freepik.com/free-vector/gradient-social-media-sale-post-template_23-2149050983.jpg",
  },
  {
    uri: "https://img.freepik.com/premium-vector/flash-sale-banner-promotion_131000-379.jpg?w=1800",
  },
  {
    uri: "https://img.freepik.com/premium-vector/paper-style-12-12-sale-background_23-2149179973.jpg",
  },
];

const renderItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <ImageBackground source={{ uri: item.uri }} style={styles.image}>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Visiter la boutique</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

const HomeCarousel = () => {
  return (
    <View style={styles.container}>
      <Carousel
        data={images}
        renderItem={renderItem}
        sliderWidth={Dimensions.get("window").width}
        itemWidth={Dimensions.get("window").width} // Utilise la largeur de l'écran pour les éléments du carousel
        loop
        autoplay
        autoplayInterval={3000}
        layout="default"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    marginBottom: 5,
    borderRadius: 15,
    overflow: "hidden",
  },
  item: {
    width: "100%",
    height: 150,
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    justifyContent: "flex-end", // Aligner le contenu en bas
  },
  buttonContainer: {
    alignItems: "center", // Centrer le contenu horizontalement
    marginBottom: 20, // Marge en bas pour éviter que le bouton ne soit collé au bord
  },
  button: {
    backgroundColor: "#000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
  },
});

export default HomeCarousel;
