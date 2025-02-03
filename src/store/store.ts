import { configureStore } from "@reduxjs/toolkit";
import {themeModeReducer} from '@/features/ThemeMode/index'
const store = configureStore({
  reducer: {
    themeModeReducer
  },
});

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch