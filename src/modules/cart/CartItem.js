import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    decrementProduct,
    deleteItemFromCart,
    incrementProduct,
} from "redux_toolkit_/CartSlice";
import { ToastContainer, toast } from "react-toastify";
const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const handleDecreaseCartItem = (product) => {
        dispatch(decrementProduct(product));
    };

    const handleIncreaseCartItem = (product) => {
        dispatch(incrementProduct(product));
    };
    const handleDeleteCartItem = (product) => {
        dispatch(deleteItemFromCart(product));
        notifyDeleteProduct();
    };
    const notifyDeleteProduct = () => {
        toast.success("Đã xóa sản phẩm khỏi giỏ hàng!"); // Display success toast for deleting a product
    };

    return (
        <div className="h-28">
            <div className="info flex flex-row items-center">
                <div className="w-4/5 items-start ">
                    <div className="py-2 text-left">
                        <span className="text-primary text-xl font-cach_dieu italic">
                            {item.name}
                        </span>
                    </div>
                    <div className="flex flex-row gap-x-3  items-start">
                        <div>
                            <button
                                className="w-10 bg-primary text-whiteSoft font-bold items-center justify-center"
                                onClick={() => handleIncreaseCartItem(item)}
                            >
                                {" "}
                                +{" "}
                            </button>
                        </div>
                        <div>
                            <span>{item.quantity}</span>
                        </div>
                        <div>
                            <button
                                className="w-10 bg-primary text-whiteSoft font-bold items-center justify-center"
                                onClick={() => handleDecreaseCartItem(item)}
                            >
                                {" "}
                                -{" "}
                            </button>
                        </div>
                        <div className="px-2">
                            <span className="font-bold text-text2">
                                {item.totalPrice}
                            </span>
                            <span className="px-2 font-thin text-xs">VND</span>
                        </div>
                    </div>
                </div>
                <div className="w-1/5">
                    <button
                        onClick={() => {
                            handleDeleteCartItem(item);
                        }}
                        className="bg-error p-1 px-3 rounded-sm text-whiteSoft"
                    >
                        x
                    </button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default CartItem;
