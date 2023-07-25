import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: localStorage.getItem("loginState") ? localStorage.getItem("loginState") : false
}

export const LoginSlice = createSlice({
    name: 'loginStore',
    initialState,
    reducers: {
        handleLogin: (state) => {
            state.status = true;
            localStorage.setItem("loginState", true);
        },
        handleLogout: (state) => {
            state.status = false;
            localStorage.removeItem("loginState");
        }
    },
})

// Action creators are generated for each case reducer function
export const { handleLogin, handleLogout } = LoginSlice.actions

export default LoginSlice.reducer