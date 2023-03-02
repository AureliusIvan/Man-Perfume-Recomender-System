import { configureStore } from "@reduxjs/toolkit"
import dataReducer from "./feature/dataSlice"
import { applyMiddleware } from "@reduxjs/toolkit"

export const store = configureStore({
  reducer: {
    // user: userReducer,
    userData: dataReducer,
  },
})