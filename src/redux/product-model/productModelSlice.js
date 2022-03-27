import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: null
}

export const productModelSlice = createSlice({
    name: 'productModel',
    initialState,
    reducers:{
        set: (state, action)=>{
            state.value = action.payload
        },
        remove: (state)=>{
            state.value = null
        }
    }
})
export const {set, remove} = productModelSlice.actions
export default productModelSlice.reducer