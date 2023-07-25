import { configureStore } from '@reduxjs/toolkit'
import menuSlice from './MenuSlice'
import MenuStateSlice from './MenuStateSlice'
import LoginSlice from './LoginSlice'
import ThemeSlice from './ThemeSlice'

export const Store = configureStore({
    reducer: {
        menuStore: menuSlice,
        menuStateStore: MenuStateSlice,
        loginStore: LoginSlice,
        themeStore: ThemeSlice
    },
})