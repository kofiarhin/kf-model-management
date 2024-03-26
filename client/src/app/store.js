import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import navigationReducer from "../features/Navigation/navigationSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    navigation: navigationReducer,
  },
});
