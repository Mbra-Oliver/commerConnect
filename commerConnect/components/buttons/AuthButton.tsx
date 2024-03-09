import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { APP_TEXT, AUTH_TEXT } from "../../constant/text";
import { COLORS } from "../../constant/colors";
import { APP_DIMESION } from "../../constant/dimension";

interface AuthButtonProps {
  onClick: () => void;
}

const AuthButton = ({ onClick }: AuthButtonProps) => {
  return (
    <TouchableOpacity style={styles.root}>
      <Text style={styles.text}>{AUTH_TEXT.loginText}</Text>
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
