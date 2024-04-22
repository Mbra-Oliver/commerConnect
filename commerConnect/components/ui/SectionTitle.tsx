import { StyleSheet, View, Text, Pressable } from "react-native";
import { COLORS } from "../../constant/colors";

const SectionTitle = ({ title }: { title: String }) => {
  return (
    <View style={styles.head}>
      <Text style={styles.text}>{title}</Text>

      <Pressable>
        <Text
          style={[styles.text, { color: COLORS.primary, fontWeight: "normal" }]}
        >
          Voir tout
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 15,
  },

  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },

  text: {
    fontWeight: "bold",
  },
});

export default SectionTitle;
