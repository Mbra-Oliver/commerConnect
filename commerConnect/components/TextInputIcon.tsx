import { StyleSheet, Text, TextInput, View } from "react-native";
import { APP_DIMESION } from "../constant/dimension";
import { Fontisto } from "@expo/vector-icons";
import { useState } from "react";
import { COLORS } from "../constant/colors";

const TextInputIcon = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View
      style={[
        styles.root,
        {
          borderColor: isFocused ? COLORS.primary : COLORS.lightGrey,
          borderWidth: isFocused ? 2 : 1,
          backgroundColor: isFocused ? COLORS.white : COLORS.lightGrey,
        },
      ]}
    >
      <Fontisto name="email" size={24} color={COLORS.grayText} />
      <TextInput
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="saisir"
      />
    </View>
  );
};

export default TextInputIcon;

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    padding: APP_DIMESION.DEFAULT_PADDING - 15,
    gap: APP_DIMESION.DEFAULT_GAP,
    marginBottom: APP_DIMESION.DEFAULT_GAP,
    borderRadius: APP_DIMESION.DEFAULT_GAP,
  },
});
