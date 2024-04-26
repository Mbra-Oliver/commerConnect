import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const DATAS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const CategorieCarousel = () => {
  return (
    <View style={styles.root}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 15 }}
      >
        {DATAS.map((item, index) => {
          return (
            <Pressable key={index} style={[styles.categorieItem]}>
              <View style={styles.imageContainer}>
                <Image
                  source={require("./../../../assets/default.png")}
                  style={styles.image}
                />
              </View>
              <Text>Chaussures</Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 15,
  },

  categorieItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 5,
  },

  imageContainer: {
    width: 40,
    height: 40,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
export default CategorieCarousel;
