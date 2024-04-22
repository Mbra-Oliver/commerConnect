import { TextInput, View } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
const SearchBar = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <TextInput placeholder="Rechercher...." />
      <EvilIcons name="search" size={24} color="gray" />
    </View>
  );
};

export default SearchBar;
