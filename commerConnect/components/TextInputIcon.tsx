import { StyleSheet, Text, TextInput, View } from "react-native";
import { APP_DIMESION } from "../constant/dimension";
import { Fontisto } from "@expo/vector-icons";
import { useState } from "react";
import { COLORS } from "../constant/colors";

interface TextInputIconProps {
  icon: any;
  [key: string]: any;
}

const TextInputIcon = ({ icon, ...props }: TextInputIconProps) => {
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
      <Fontisto name={icon} size={24} color={COLORS.grayText} />
      <TextInput
        {...props}
        style={styles.input}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
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

  input: {
    flex: 1,
  },
});
