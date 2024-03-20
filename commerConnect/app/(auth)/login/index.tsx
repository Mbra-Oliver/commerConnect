import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import TextInputIcon from "../../../components/TextInputIcon";
import { COLORS } from "../../../constant/colors";
import { APP_DIMESION } from "../../../constant/dimension";
import { APP_TEXT, AUTH_TEXT } from "../../../constant/text";
import AuthButton from "../../../components/buttons/AuthButton";
import { useState } from "react";
import { useRouter } from "expo-router";
import { useDispatch } from "react-redux";
import { authActions } from "../../../store/auth-slice";

const Index = () => {
  const [phone, setPhone] = useState<string>();
  const [password, setPassword] = useState<string>();

  const navigation = useRouter();
  const dispatch = useDispatch();

  const handleLogin = () => {
    const dataSend = {
      phone,
      password,
    };
    dispatch(authActions.toggleAuth());
  };

  const handleChangePhone = (event: string) => {
    setPhone(event);
  };

  const handleChangePassword = (event: string) => {
    setPassword(event);
  };

  const goRegister = () => {
    navigation.push("/register");
  };

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

        <TextInputIcon
          icon="phone"
          value={phone}
          onChangeText={handleChangePhone}
          placeholder="+225 XX XX XX XX"
        />
        <TextInputIcon
          icon="key"
          value={password}
          onChangeText={handleChangePassword}
          placeholder="xxxxxxxx"
          secureTextEntry
        />

        <View style={styles.forgotContainer}>
          <Pressable>
            <Text>{AUTH_TEXT.forgotText}</Text>
          </Pressable>
        </View>

        <View style={styles.authButtonContainer}>
          <AuthButton text={AUTH_TEXT.loginText} onPress={handleLogin} />
        </View>

        <View style={styles.newUserContainer}>
          <Text>{AUTH_TEXT.AM_NEW}</Text>
          <TouchableOpacity onPress={goRegister}>
            <Text
              style={{
                color: COLORS.primary,
                fontWeight: "700",
                textTransform: "lowercase",
              }}
            >
              {AUTH_TEXT.NEW_USER_LINK}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: APP_DIMESION.DEFAULT_PADDING,
    justifyContent: "center",
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

  forgotContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingBottom: APP_DIMESION.DEFAULT_GAP,
    paddingTop: APP_DIMESION.DEFAULT_GAP,
  },

  authButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  newUserContainer: {
    marginTop: APP_DIMESION.DEFAULT_GAP,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 3,
  },
});
