import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
}

export const ThemeSlice = createSlice({
    name: 'menuStore',
    initialState,
    reducers: {
        handleChangeTheme: (state, action) => {
            state.value = action.payload;
            localStorage.setItem("theme", action.payload);
            // console.log(action.payload)
        },

    },
})

// Action creators are generated for each case reducer function
export const { handleChangeTheme } = ThemeSlice.actions

export default ThemeSlice.reducer