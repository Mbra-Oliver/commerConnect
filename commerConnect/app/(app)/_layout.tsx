import { Redirect } from "expo-router";
import { Text, View } from "react-native";

const AppLayout = () => {
  const isLogged = false;

  if (!isLogged) {
    return <Redirect href="/login" />;
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Appeler depuis (App)</Text>
    </View>
  );
};

export default AppLayout;
