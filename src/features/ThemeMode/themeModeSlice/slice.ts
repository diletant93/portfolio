import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const INITIAL_STATE ={
    theme: ''
}

const themeModeSlice = createSlice({
    name:'theme',
    initialState:INITIAL_STATE,
    reducers:{
        setTheme(state,action:PayloadAction<string>){
            state.theme = action.payload
        }
    }
})

export const {setTheme} = themeModeSlice.actions
export default themeModeSlice.reducer