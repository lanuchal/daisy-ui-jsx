import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
}

export const ThemeSlice = createSlice({
    name: 'themeStore',
    initialState,
    reducers: {
        handleChangeTheme: (state, action) => {
            state.value = action.payload;
            localStorage.setItem("theme", action.payload);
        },

    },
})

// Action creators are generated for each case reducer function
export const { handleChangeTheme } = ThemeSlice.actions

export default ThemeSlice.reducer