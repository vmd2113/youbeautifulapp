import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        cartArray: [],
        totalQuantity: 0,
        totalPrice: 0,
    },

    reducers: {
        addItemToCart(state, action) {
            const newProduct = action.payload;
            const existingProduct = state.cartArray.find(
                (product) => product.id === newProduct.id
            );

            if (existingProduct) {
                existingProduct.quantity += 1;
                existingProduct.totalPrice += newProduct.price;
            } else {
                state.cartArray.push({
                    id: newProduct.id,
                    price: newProduct.price,
                    quantity: 1,
                    totalPrice: newProduct.price,
                    name: newProduct.name,
                });
            }

            // Update total quantity and price
            state.totalQuantity += 1;
            state.totalPrice += newProduct.price;
        },
        deleteItemFromCart(state, action) {
            const productId = action.payload.id;
            const existingProduct = state.cartArray.find(
                (product) => product.id === productId
            );

            if (existingProduct) {
                state.totalQuantity -= existingProduct.quantity;
                state.totalPrice -= existingProduct.totalPrice;
                state.cartArray = state.cartArray.filter(
                    (product) => product.id !== productId
                );
            }
        },
        incrementProduct(state, action) {
            const productId = action.payload.id;
            const existingProduct = state.cartArray.find(
                (product) => product.id === productId
            );

            if (existingProduct) {
                existingProduct.quantity += 1;
                existingProduct.totalPrice += existingProduct.price;

                // Update total quantity and price
                state.totalQuantity += 1;
                state.totalPrice += existingProduct.price;
            }
        },
        decrementProduct(state, action) {
            const productId = action.payload.id;
            const existingProduct = state.cartArray.find(
                (product) => product.id === productId
            );

            if (existingProduct && existingProduct.quantity > 1) {
                existingProduct.quantity -= 1;
                existingProduct.totalPrice -= existingProduct.price;

                // Update total quantity and price
                state.totalQuantity -= 1;
                state.totalPrice -= existingProduct.price;
            }
        },
        deleteAllProductInCart(state) {
            state.cartArray = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    addItemToCart,
    deleteItemFromCart,
    decrementProduct,
    incrementProduct,
    deleteAllProductInCart,
} = CartSlice.actions;

export const cartReducer = CartSlice.reducer;
export default CartSlice;
