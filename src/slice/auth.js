import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLoading: false,
    loggedIn: false,
    user: null,
    error: null
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signUserStart: (state) => {
            state.isLoading = true
        },
        signUserSuccess: (state, action) => {
            state.loggedIn = true
            state.isLoading = false
            state.user = action.payload
        },
        signUserFailure: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
        confirmEmail: (state) => {
            state.isLoading = true
            state.error = null
        },
        reisterUserStart: (state) => {
            state.isLoading = true
        },
        registerUserSuccess: (state, action) => {
            state.isLoading = false
            state.loggedIn = true
            state.user = action.payload
        },
        registerUserFailure: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
        logout: (state)=>{
            state.user = null
            state.loggedIn = true
        },
        updadeUserSuccess: (state)=>{
            state.isLoading = false
        },
        updateUserFailed: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        }
    }
})


export const {signUserStart, signUserSuccess, signUserFailure, reisterUserStart, registerUserSuccess, registerUserFailure, logout, updateUserSuccess, updateUserFailed, confirmEmail} = authSlice.actions

export default authSlice.reducer