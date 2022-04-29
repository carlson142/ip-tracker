import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
  name: "inputSlice",
  initialState: {
    inputValue: "",
    ip: "",
  },
  reducers: {
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },

    getIP: (state, action) => {
      state.ip = action.payload;
    },
  },
});

export const { setInputValue, getIP } = inputSlice.actions;

export default inputSlice.reducer;
