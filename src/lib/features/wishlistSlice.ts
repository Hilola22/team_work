import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IProduct } from "../../types";

interface IWishlist {
  value: IProduct[];
}

const initialState: IWishlist = {
  value: JSON.parse(localStorage.getItem("wishlist") || "[]") || [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<IProduct>) => {
      const index = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index < 0) {
        // add
        state.value.push(action.payload);
      } else {
        // remove
        state.value.splice(index, 1);
      }
      localStorage.setItem("wishlist", JSON.stringify(state.value));
    },
  },
});

export const { toggleLike } = wishlistSlice.actions;

export default wishlistSlice.reducer;
