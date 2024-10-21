import { configureStore } from '@reduxjs/toolkit'
// import User from "./user/userSlice"
import userReducer from "./user/userSlice"

export const store = configureStore({
  reducer: {
    user:userReducer

  },
})