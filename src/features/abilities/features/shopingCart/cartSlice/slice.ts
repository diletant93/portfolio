import { RootState } from "@/store/store";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartState = {
    variable:string;
}
const INITIAL_STATE : CartState = {
    variable:'asdasdasd'
}

const cartSlice = createSlice({
    name:'cart',
    initialState: INITIAL_STATE,
    reducers:{
        setVariable(state, action:PayloadAction<string>){
            state.variable = action.payload
        },
        showVariable(state){
            console.log(state.variable)
        }

    },
    extraReducers:(builder)=>{
        builder.addCase(showVariableAsync.fulfilled, (state,action) =>{
            console.log(action.payload)
        })
    }
})

export const showVariableAsync = createAsyncThunk<Promise<string>,void,{state:RootState}>(
    'cart/showVaribaleAsync',
    async (_,{getState}) =>{
        await new Promise((resolve) => setTimeout(resolve,1000))
        const state = getState() 
        const variable = state.cartReducer.variable
        return variable
    }
)

export const {setVariable, showVariable} = cartSlice.actions
export default cartSlice.reducer