import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export const { open, close } = navigationSlice.actions;

export default navigationSlice.reducer;
