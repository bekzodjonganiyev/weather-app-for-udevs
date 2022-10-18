import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weatherData: [],
  weatherErrorData: [],
  loadingStatus: "default",
};

export const weatherSlice = createSlice({
  name: "weatherData",
  initialState,
  reducers: {
    fetchingWeatherData: (state) => {
        state.loadingStatus = "loading"
    },

    fetchedWeatherData: (state, action) => {
      state.loadingStatus = "default";
      state.weatherData = action.payload;
    },

    fetchedWeatherErrorData: (state, action) => {
      state.loadingStatus = "default";
      state.weatherErrorData = action.payload;
    },
  },
});

export const {fetchingWeatherData, fetchedWeatherData, fetchedWeatherErrorData} = weatherSlice.actions
export default weatherSlice.reducer