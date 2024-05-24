import { createSlice } from "@reduxjs/toolkit";

const OrderSlice = createSlice({
    name: "order",
    initialState: {
        orders: [],
    },
    reducers: {
        addOrder(state, action) {
            state.orders.push({
                ...action.payload,
                status: "chưa xác nhận", // Trạng thái mặc định
            });
        },
        clearAllOrders(state) {
            state.orders = [];
        },
    },
});

export const { addOrder, clearAllOrders } = OrderSlice.actions;
export const orderReducer = OrderSlice.reducer;
export default OrderSlice;
