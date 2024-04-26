import { View, Text, Pressable, StyleSheet } from "react-native";
import { COLORS } from "../../constant/colors";

const SectionTitle = ({
  title,
  linkText,
}: {
  title: String;
  linkText: String;
}) => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>{title}</Text>

      <Pressable>
        <Text style={styles.link}>{linkText}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
  },
  link: {
    color: COLORS.primary,
  },
});

export default SectionTitle;
