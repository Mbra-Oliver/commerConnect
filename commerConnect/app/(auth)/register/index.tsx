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
import Toast from "react-native-toast-message";

import TextInputIcon from "../../../components/TextInputIcon";
import { COLORS } from "../../../constant/colors";
import { APP_DIMESION } from "../../../constant/dimension";
import { APP_TEXT, AUTH_TEXT } from "../../../constant/text";
import AuthButton from "../../../components/buttons/AuthButton";
import { useState } from "react";
import { useRouter } from "expo-router";

const stepsContent = [
  "Salut, comment tu t'appelles ?",
  "Enregistre ton contact",
  "Définir ton mot de passe",
];

const icons = ["hipchat", "phone", "key"];
const isSecurity = [false, false, true];

const Index = () => {
  const [name, setName] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [currentStep, setCurrentStep] = useState<number>(1);

  const naivgation = useRouter();

  const showError = (description: string) => {
    Toast.show({
      type: "error",
      text1: description,
      position: "bottom",
    });
  };

  //Valider les étapes
  const validateStep = () => {
    switch (currentStep) {
      case 1:
        if ((name && name.trim() === "") || name === undefined) {
          showError("Votre nom est requis. Pouvez vous nous le fournir.");
          return false;
        }
        break;

      case 2:
        if ((phone && phone.trim() === "") || phone === undefined) {
          showError("Votre contact est requis.");
          return false;
        }
        break;

      case 3:
        if (
          (password && password.trim() === "") ||
          password === undefined ||
          password.length < 6
        ) {
          showError("Le mot de passe est requis et doit excéder 6 caractères.");
          return false;
        }

        break;

      default:
        break;
    }

    return true;
  };

  const handleRegister = () => {
    const isValid = validateStep();

    if (isValid && currentStep < stepsContent.length) {
      setCurrentStep((prevStep) => prevStep + 1);
    }

    // const dataSend = {
    //   phone,
    //   password,
    // };

    // console.log(dataSend);
  };

  const handleChangeName = (event: string) => {
    setName(event);
  };

  const handleChangePhone = (event: string) => {
    setPhone(event);
  };

  const handleChangePassword = (event: string) => {
    setPassword(event);
  };

  const goLogin = () => {
    naivgation.push("/login");
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

        <View style={styles.stepContainer}>
          <Text style={styles.stepText}>{stepsContent[currentStep - 1]}</Text>
        </View>

        {currentStep === 1 && (
          <TextInputIcon
            secureTextEntry={isSecurity[currentStep - 1]}
            icon={icons[currentStep - 1]}
            value={name}
            onChangeText={handleChangeName}
          />
        )}

        {currentStep === 2 && (
          <TextInputIcon
            secureTextEntry={isSecurity[currentStep - 1]}
            icon={icons[currentStep - 1]}
            value={phone}
            onChangeText={handleChangePhone}
          />
        )}

        {currentStep === 3 && (
          <TextInputIcon
            secureTextEntry={isSecurity[currentStep - 1]}
            icon={icons[currentStep - 1]}
            value={password}
            onChangeText={handleChangePassword}
          />
        )}

        <View style={styles.authButtonContainer}>
          <AuthButton
            text={
              currentStep < stepsContent.length
                ? AUTH_TEXT.next
                : AUTH_TEXT.registerText
            }
            onPress={handleRegister}
          />
        </View>

        <View style={styles.newUserContainer}>
          <Text>{AUTH_TEXT.OLD_USER}</Text>
          <TouchableOpacity onPress={goLogin}>
            <Text
              style={{
                color: COLORS.primary,
                fontWeight: "700",
                textTransform: "lowercase",
              }}
            >
              {AUTH_TEXT.loginText}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Toast />
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

  stepContainer: {
    gap: 10,
    marginBottom: 30,
  },
  stepText: {
    color: COLORS.primary,
    fontSize: 18,
  },
});
