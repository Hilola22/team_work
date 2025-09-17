import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IProduct } from "../../types";

export type ICartProduct = {
  quantity: number;
} & IProduct;

interface ICart {
  value: ICartProduct[];
}

const initialState: ICart = {
  value: JSON.parse(localStorage.getItem("cart") || "[]") || [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const index = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index < 0) {
        state.value.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    removeFromCart: (state, action: PayloadAction<IProduct>) => {
      state.value = state.value.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    increaseAmount: (state, action: PayloadAction<IProduct>) => {
      const index = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      state.value = state.value.map((item: ICartProduct, inx: number) => {
        if (index === inx) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    decreaseAmount: (state, action: PayloadAction<IProduct>) => {
      const index = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      state.value = state.value.map((item: ICartProduct, inx: number) => {
        if (index === inx) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    clearCart: (state) => {
      state.value = [];
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
  },
});

export const {
  addToCart,
  clearCart,
  decreaseAmount,
  increaseAmount,
  removeFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
