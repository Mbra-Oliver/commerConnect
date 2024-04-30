import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../constant/colors";
import Toast from "react-native-toast-message";

const ProductItem = () => {
  const windowWidth = Dimensions.get("window").width;

  const addToFavorite = () => {
    Toast.show({
      type: "success",
      text1: "Ajouté a la liste des favoris",
      position: "bottom",
    });
  };

  return (
    <TouchableOpacity style={[styles.root, { width: windowWidth / 2 - 20 }]}>
      <View style={styles.imageContainer}>
        <Image
          source={require("./../../assets/default.png")}
          style={styles.image}
        />
      </View>

      <View style={styles.productData}>
        <View>
          <Text style={styles.name}>Article exemple</Text>

          <View style={[styles.flex, styles.mt1]}>
            <AntDesign name="user" color={COLORS.primary} size={18} />
            <Text>john Doe</Text>
          </View>
        </View>

        <View style={[styles.flex_between, styles.mt1]}>
          <Text>40k</Text>
          <Pressable style={styles.heartContainer} onPress={addToFavorite}>
            <AntDesign name="heart" color={COLORS.primary} size={15} />
          </Pressable>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {},
  mt1: {
    marginTop: 5,
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  flex_between: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageContainer: {
    width: "100%",
    height: 150,
    backgroundColor: "white",
    borderRadius: 15,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  heartContainer: {
    backgroundColor: "white",
    padding: 5,
    borderRadius: 100,
  },
  name: {
    fontWeight: "800",
    fontSize: 14,
    marginBottom: 3,
  },
  price: {},
  productData: {
    marginTop: 15,
    gap: 3,
  },
});
export default ProductItem;
