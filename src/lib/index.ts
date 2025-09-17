
import { configureStore } from '@reduxjs/toolkit'
import auth from './features/authSlice'
import wishlist from './features/wishlistSlice'
import cart from "./features/cartSlice";

export const store = configureStore({
  reducer: {
    auth,
    cart,
    wishlist
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
