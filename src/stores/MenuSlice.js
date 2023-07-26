import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  display: "block"
}

export const MenuSlice = createSlice({
  name: 'menuStore',
  initialState,
  reducers: {
    showMenu: (state) => {
      state.display = "block";
    },
    hiddenMenu: (state) => {
      state.display = "none";
    }
  },
})

// Action creators are generated for each case reducer function
export const { showMenu, hiddenMenu } = MenuSlice.actions

export default MenuSlice.reducer