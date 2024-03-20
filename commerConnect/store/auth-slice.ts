import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isLogged: boolean;
}

const initialState: AuthState = {
  isLogged: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleAuth(state) {
      state.isLogged = !state.isLogged;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
