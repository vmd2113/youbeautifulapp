import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./CartSlice";

import { orderReducer } from "./OrderSlide";

const store = configureStore({
    //   reducer: rootReducer,p
    reducer: {
        cart: cartReducer,
        order: orderReducer,
    },
    devTools: process.env.NODE_ENV !== "production", // Automatically enable Redux DevTools in development
});

export default store;
