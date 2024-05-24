import styles from "./Cart.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useState } from "react";
import CartItem from "./CartItem";
import { deleteAllProductInCart } from "redux_toolkit_/CartSlice";
import { ToastContainer, toast } from "react-toastify"; // Import toast from react-toastify
const cx = classNames.bind(styles);

function Cart({ onClick, ...props }) {
    const totalPrice = useSelector((state) => state.cart.totalPrice);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const navigate = useNavigate();
    const [isOpenDeleteAll, setOpenDeleteAll] = useState(false);

    const dispatch = useDispatch();
    const cartProduct = useSelector((state) => state.cart.cartArray);
    console.log("cart-store: ", cartProduct);

    const handleDeleteAll = () => {
        try {
            dispatch(deleteAllProductInCart()); // Correctly dispatch the action
            setOpenDeleteAll(false); // Close the delete confirmation if applicable
            notifyDeleteAll();
        } catch (error) {
            console.log(error);
        }
    };

    const notifyDeleteAll = () => {
        toast.success("Đã xóa tất cả sản phẩm khỏi giỏ hàng!"); // Display success toast for deleting all products
    };

    return (
        <>
            <div className={cx("wrapper")}>
                <div className={cx("content")}>
                    <div className="text-center text-text2 text-2xl py-3 font-cach_dieu italic">
                        <h1>Giỏ hàng</h1>
                    </div>
                    <div className={cx("list-product-container")}>
                        {totalPrice > 0 && (
                            <div className="pt-2">
                                <span className="font-cach_dieu italic">
                                    Tổng số tiền phải thanh toán:{" "}
                                </span>
                                <span className="text-text2 text-2xl font-cach_dieu italic font-bold">
                                    {totalPrice}{" "}
                                </span>
                                <span className="px-2 font-thin text-xs">
                                    VND
                                </span>
                            </div>
                        )}
                        <div className={cx("list-product")}>
                            {cartProduct.length > 0 &&
                                cartProduct.map((item) => (
                                    <CartItem
                                        key={item.id}
                                        item={item}
                                    ></CartItem> // Use item.id as the key
                                ))}
                        </div>
                    </div>
                    <div className={cx("action", "flex flex-row")}>
                        <button
                            onClick={() => {
                                if (cartProduct.length > 0) {
                                    setOpenDeleteAll(true);
                                    handleDeleteAll();
                                }
                            }}
                            className="bg-error text-whiteSoft w-30 text-center p-3 w-1/2"
                        >
                            Xóa tất cả
                        </button>

                        <button
                            className="bg-primary text-whiteSoft w-30 text-center p-3 w-1/2"
                            onClick={() => {
                                if (cartProduct.length === 0) {
                                    alert(
                                        "Chưa có sản phẩm nào trong giỏ hàng!!!"
                                    );
                                } else {
                                    navigate("/order");
                                }
                            }}
                        >
                            Đặt hàng
                        </button>
                    </div>
                </div>
                <button onClick={onClick} className={cx("btn-close")}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
            </div>
            {isOpenDeleteAll && (
                <div className={cx("delete-all-background")}>
                    <div className={cx("delete-all-box")}>
                        <div className={cx("delete-all-content")}>
                            <p>
                                Bạn có chắc chắn muốn xóa tất cả sản phẩm khỏi
                                giỏ hàng?
                            </p>
                        </div>
                        <div className={cx("delete-all-btns")}>
                            <button
                                className={cx("delete-all-btn-confirm")}
                                onClick={handleDeleteAll}
                            >
                                Xác nhận
                            </button>
                            <button
                                className={cx("delete-all-btn-cancel")}
                                onClick={() => setOpenDeleteAll(false)}
                            >
                                Hủy bỏ
                            </button>
                        </div>
                    </div>
                    <ToastContainer />;
                </div>
            )}
        </>
    );
}
export default Cart;
