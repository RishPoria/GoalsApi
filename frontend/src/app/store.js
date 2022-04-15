import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from '../features/auth/authSlice.js'

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
});
