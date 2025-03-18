import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLoading: false,
    error: null,
    shop: null
}

export const shopSlice = createSlice({
    name: 'shops',
    initialState,
    reducers: {
        createShopStart: (state) => {
            state.isLoading = true
        },

        createShopSuccess: (state, action) => {
            state.isLoading = false
            state.shop = action.payload
        },

        createShopFailure: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
        
        addProductSuccess: (state) => {
            state.isLoading = false
        }
       
    }
})

export const {createShopFailure, createShopStart, createShopSuccess, addProductSuccess} = shopSlice.actions

export default shopSlice.reducer