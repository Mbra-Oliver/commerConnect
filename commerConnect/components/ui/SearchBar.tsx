import { View, Text, TextInput, StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Rechercher...." style={styles.input} />
      <EvilIcons name="search" size={24} color="gray" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  input: {
    flex: 1,
  },
});

export default SearchBar;
