import { StyleSheet, Text, View } from "react-native";

const HomeHeader = () => {
  <View style={styles.container}>
    <View style={styles.greeting}>
      <Text>Bon retour</Text>
    </View>
  </View>;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  greeting: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
});

export default HomeHeader;
