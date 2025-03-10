import { configureStore } from "@reduxjs/toolkit";
import {themeModeReducer} from '@/features/ThemeMode/index'
import cartReducer from '@/features/abilities/features/shopingCart/cartSlice/slice'
const store = configureStore({
  reducer: {
    themeModeReducer,
    cartReducer
  },
});

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch