import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: false
}

export const MenuSlice = createSlice({
  name: 'menuStore',
  initialState,
  reducers: {
    showMenu: (state) => {
      state.status = true;
    },
    hiddenMenu: (state) => {
      state.status = false;
    }
  },
})

// Action creators are generated for each case reducer function
export const { showMenu, hiddenMenu } = MenuSlice.actions

export default MenuSlice.reducer