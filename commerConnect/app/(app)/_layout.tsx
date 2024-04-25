import { Redirect, Stack } from "expo-router";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

const AppLayout = () => {
  const userLoggedStatus = useSelector(
    (state: any) => state.authReducer.isLogged
  );

  if (!userLoggedStatus) {
    return <Redirect href="/login" />;
  }

  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack>
  );
};

export default AppLayout;
