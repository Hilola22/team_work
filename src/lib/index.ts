import { configureStore } from '@reduxjs/toolkit'
import auth from './features/authSlice'
import cart from "./features/cartSlice";

export const store = configureStore({
  reducer: {
    auth,
    cart,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch