import { Pressable, TextInput, View } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { COLORS } from "../../constant/colors";
const SearchBar = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <TextInput
        placeholder="Rechercher...."
        style={{
          backgroundColor: "white",
          flex: 1,
          padding: 10,
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
        }}
      />

      <Pressable
        style={{
          backgroundColor: COLORS.primary,
          padding: 10,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
        }}
      >
        <EvilIcons name="search" size={24} color="white" />
      </Pressable>
    </View>
  );
};

export default SearchBar;
