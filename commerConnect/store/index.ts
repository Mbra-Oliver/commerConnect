import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";

const reduxStore = configureStore({
  reducer: {
    authReducer: authSlice.reducer,
  },
});

export default reduxStore;
