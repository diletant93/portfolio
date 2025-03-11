import { RootState } from "@/store/store";

export const selectItems = (state :RootState) => state.cartReducer.items
export const selectStatus = (state :RootState) => state.cartReducer.status
export const selectError = (state: RootState) => state.cartReducer.error