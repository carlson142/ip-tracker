import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IData } from "../../types/ipData/IData";

export const getIpFromAPI = createAsyncThunk(
  "ipSlice/getIp",
  async (ip: string, { rejectWithValue }) => {
    try {
      const responce = await axios.get(
        `
        https://geo.ipify.org/api/v2/country,city?apiKey=at_Ezh8d31B1p7ap9J8CzYxKDcPs4edD&ipAddress=${ip}`
      );

      return responce.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

interface ipInfo {
  data: IData;
  status: string;
  error: string;
}

const initialState: ipInfo = {
  data: {
    ip: "8.8.8.8",
    location: {
      city: "Mountain View",
      country: "US",
      lat: 37.40599,
      lng: -122.078514,
      timezone: "-07:00",
    },
    isp: "Google LLC",
  },
  status: "",
  error: "",
};

export const ipSlice = createSlice({
  name: "ipSlice",
  initialState,
  reducers: {
    updateLat: (state, action) => {
      state.data.location.lat = action.payload;
    },

    updateLng: (state, action) => {
      state.data.location.lng = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getIpFromAPI.pending, (state, action) => {
      state.status = "pending";
      state.error = "";
    });

    builder.addCase(getIpFromAPI.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.data = action.payload;
    });

    builder.addCase(getIpFromAPI.rejected, (state, action) => {
      state.status = "rejected";
      state.error = "error";
    });
  },
});

export const { updateLat, updateLng } = ipSlice.actions;

export default ipSlice.reducer;
