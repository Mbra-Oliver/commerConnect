import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { APP_TEXT, AUTH_TEXT } from "../../constant/text";
import { COLORS } from "../../constant/colors";
import { APP_DIMESION } from "../../constant/dimension";

interface AuthButtonProps {
  onPress: () => void;
  text: string;
}

const AuthButton = ({ onPress, text }: AuthButtonProps) => {
  return (
    <TouchableOpacity style={styles.root} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default AuthButton;
const styles = StyleSheet.create({
  root: {
    width: "100%",
    backgroundColor: COLORS.primary,
    alignItems: "center",
    padding: APP_DIMESION.DEFAULT_PADDING - 15,
    borderRadius: APP_DIMESION.DEFAULT_GAP,
  },

  text: {
    color: "white",
  },
});
