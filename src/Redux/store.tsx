import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./feature/dataSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
})