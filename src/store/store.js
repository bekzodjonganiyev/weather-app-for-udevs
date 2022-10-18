import { configureStore } from "@reduxjs/toolkit";

import weatherDataReducer from "./api/weatherSlice";

export const store = configureStore({
    reducer: {
       weatherDataReducer
    }
})