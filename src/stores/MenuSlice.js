import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: localStorage.getItem("showMenu") ? localStorage.getItem("showMenu") : true
}

export const MenuSlice = createSlice({
  name: 'menuStore',
  initialState,
  reducers: {
    showMenu: (state) => {
      state.value = true;
      localStorage.setItem("showMenu", true);
    },
    hiddenMenu: (state) => {
      state.value = false;
      localStorage.setItem("showMenu", false);
    }
  },
})

// Action creators are generated for each case reducer function
export const { showMenu, hiddenMenu } = MenuSlice.actions

export default MenuSlice.reducer