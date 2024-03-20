import { Slot } from "expo-router";
import { Provider } from "react-redux";
import reduxStore from "../store";

const RootLayout = () => {
  return (
    <Provider store={reduxStore}>
      <Slot />
    </Provider>
  );
};

export default RootLayout;
