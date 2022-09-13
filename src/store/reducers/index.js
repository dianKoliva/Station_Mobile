import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    token: null,
    user: null,
    isAuth: false,
    products: [],
    modes: [],
    prices: [],
  },
  reducers: {
    authenticate: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuth = true;
    },
    add_products: (state, action) => {
      state.products = action.payload;
    },
    add_modes: (state, action) => {
      state.modes = action.payload;
    },
    add_prices: (state, action) => {
      state.prices = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuth = false;
    },
  },
});

export const { authenticate, logout, add_products, add_prices, add_modes } =
  appSlice.actions;

export default appSlice.reducer;
