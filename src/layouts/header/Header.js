import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Search from "./Search";
import logo from "assets/logo/logo.jpg";
import Cart from "modules/cart/Cart";
import { useAuth } from "context/authContext";
import { auth } from "firebase_app/firebase-config";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { deleteAllProductInCart } from "redux_toolkit_/CartSlice";
import { clearAllOrders } from "redux_toolkit_/OrderSlide";

const Header = () => {
    const [isOpen, setOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { userInfo, setUserInfo } = useAuth();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = async () => {
        try {
            // Clear cart and orders
            dispatch(deleteAllProductInCart());
            dispatch(clearAllOrders());

            // Clear local storage if used
            localStorage.removeItem("cart");
            localStorage.removeItem("orders");

            // Sign out from Firebase
            await signOut(auth);
            setUserInfo(null);
            toast.success("Đăng xuất thành công!");
            navigate("/login");
        } catch (error) {
            console.error("Logout error: ", error);
            toast.error("Đăng xuất thất bại!");
        }
    };

    const handleProfileClick = () => {
        navigate("/profile");
    };

    const handleOrderClick = () => {
        navigate("/order_user");
    };

    return (
        <>
            <div className="flex flex-col items-center justify-between p-2 bg-white text-lg font-semibold">
                <div className="flex flex-row items-center flex-1 gap-x-1 bg-white">
                    <Link to="/" className="inline-block">
                        <img className="w-300 h-auto" src={logo} alt="logo" />
                    </Link>
                    <div className="max-w-[458px] w-full">
                        <Search />
                    </div>
                </div>
                <div className="flex items-center justify-center flex-1 gap-x-10 font-bold py-3">
                    <div className="flex gap-x-5 pr-10 font-extralight">
                        <Link to={`/products`}>
                            <span>Sản phẩm</span>
                        </Link>
                        <Link to={`/stories`}>
                            <span>Câu chuyện</span>
                        </Link>
                        <Link to={`/shopping-manual`}>
                            <span>Chính sách</span>
                        </Link>
                        {userInfo ? (
                            <button onClick={handleOrderClick}>Đơn hàng</button>
                        ) : (
                            <></>
                        )}

                        <button onClick={() => setOpen(!isOpen)}>
                            Giỏ hàng
                        </button>
                        {userInfo ? (
                            <div className="relative">
                                <span
                                    onClick={() =>
                                        setDropdownOpen(!dropdownOpen)
                                    }
                                    className="cursor-pointer"
                                >
                                    {userInfo.fullName}
                                </span>
                                {dropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                                        <button
                                            onClick={handleProfileClick}
                                            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                                        >
                                            Thông tin
                                        </button>
                                        {userInfo.role === "ADMIN" && (
                                            <Link
                                                to="/admin/product"
                                                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                                            >
                                                Quản trị
                                            </Link>
                                        )}
                                        <button
                                            onClick={handleLogout}
                                            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                                        >
                                            Đăng xuất
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link to={`/login`}>
                                <span>Đăng nhập</span>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
            {isOpen && <Cart onClick={() => setOpen(!isOpen)} />}
            <ToastContainer />
        </>
    );
};

export default Header;
