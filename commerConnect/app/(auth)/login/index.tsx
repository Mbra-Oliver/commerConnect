import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  Image,
} from "react-native";
import TextInputIcon from "../../../components/TextInputIcon";
import { COLORS } from "../../../constant/colors";
import { APP_DIMESION } from "../../../constant/dimension";
import { APP_TEXT } from "../../../constant/text";

const Index = () => {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar
        animated={true}
        backgroundColor={COLORS.primary}
        barStyle="light-content"
      />

      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require("./../../../assets/logo.png")}
            style={styles.logo}
          />
        </View>

        <View style={styles.appName}>
          <Text style={styles.mainText}>{APP_TEXT.appName}</Text>
          <Text style={[styles.mainText, styles.textColored]}>
            {APP_TEXT.appName1}
          </Text>
        </View>

        <View style={styles.subTextContainer}>
          <Text style={styles.textColored}>Achète & vend en 1 click</Text>
        </View>

        <TextInputIcon />
        <TextInputIcon />
      </View>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: APP_DIMESION.DEFAULT_PADDING,
  },

  container: {
    paddingTop: APP_DIMESION.DEFAULT_PADDING,
  },

  logoContainer: {
    alignItems: "center",
    marginBottom: 8,
  },

  logo: {
    width: APP_DIMESION.LOGO_WIDTH_HEIGHT,
    height: APP_DIMESION.LOGO_WIDTH_HEIGHT,
  },

  appName: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    gap: APP_DIMESION.DEFAULT_GAP / 2,
  },

  subTextContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 30,
  },

  mainText: {
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  textColored: {
    color: COLORS.primary,
  },
});
