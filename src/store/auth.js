import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../slice/auth"
import shopReducer from "../slice/createShop"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    shop: shopReducer,
  },
})