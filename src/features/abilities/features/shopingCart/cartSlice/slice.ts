import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Animal } from "../../filter/types/animal";
import { CartItem, CartState } from "../types/cartSliceRelated";

const INITIAL_STATE: CartState = {
  status: "loading",
  error: "",
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addAnimal(state, action: PayloadAction<Animal>) {
      const findIndex = state.items.findIndex(
        (item) => item.animal.name === action.payload.name,
      );
      if (findIndex >= 0) {
        state.items[findIndex].quantity += 1;
      } else {
        state.items.push({
          animal: action.payload,
          quantity: 1,
        });
      }
    },
    removeAnimal(state, action: PayloadAction<string>) {
      const findIndex = state.items.findIndex(
        (item) => item.animal.name === action.payload    
      );
      if (findIndex >= 0) {
        state.items[findIndex].quantity -= 1;
        if (state.items[findIndex].quantity <= 0) {
          console.log('im here')
          state.items = state.items.filter((item) => item.animal.name !== action.payload);
        }
      }
    },
    removeAnimalCompletely(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.animal.name !== action.payload);
    },
    setAnimalQuantity(
      state,
      action: PayloadAction<{ name: string; quantity: number }>,
    ) {
      const { name, quantity } = action.payload;
      const findIndex = state.items.findIndex(
        (item) => item.animal.name === name,
      );
      if (quantity <= 0) {
        state.items = state.items.filter((item) => item.animal.name !== name);
      } else if (findIndex >= 0) {
        state.items[findIndex].quantity = quantity;
      }
    },
  },
});

export const {
  addAnimal,
  removeAnimal,
  removeAnimalCompletely,
  setAnimalQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
