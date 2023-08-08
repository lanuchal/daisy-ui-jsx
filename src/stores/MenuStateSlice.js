import { createSlice } from "@reduxjs/toolkit";
import { BiHome, BiCard, BiFileBlank,BiLogIn,BiUserPlus } from "react-icons/bi";

const initialState = [
  {
    title: "Home",
    icons: BiHome(),
    open: false,
    route: "home",
    sub: [],
  },
  {
    title: "Card",
    icons: BiCard(),
    open: false,
    route: "card",
    sub: [],
  },
  {
    title: "Page",
    icons:  BiFileBlank(),
    open: false,
    route: "page",
    sub: [
      {
        title: "Login",
        icons: BiLogIn(),
        open: false,
        route: "login",
      },
      {
        title: "Register",
        icons: BiUserPlus(),
        open: false,
        route: "register",
      },
    ],
  },
];

export const MenuStateSlice = createSlice({
  name: "menuStateStore",
  initialState,
  reducers: {
    active: (state, action) => {
      const { title, open } = action.payload;
      state.forEach((item) => {
        item.open = title === item.route;
        if (open) {
          if (item.sub.length !== 0) {
            item.sub.forEach((subItem) => {
              subItem.open = open === subItem.route;
            });
          }
        } else {
          item.sub.forEach((subItem) => {
            subItem.open = false;
          });
        }
      });
    },
  },
});

export const { active } = MenuStateSlice.actions;

export default MenuStateSlice.reducer;
