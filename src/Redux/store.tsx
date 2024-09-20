import {configureStore} from "@reduxjs/toolkit"
import dataReducer from "./feature/dataSlice"

export const store = configureStore({
  reducer: {
    userData: dataReducer,
  },
})