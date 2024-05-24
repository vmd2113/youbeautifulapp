import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "layouts/header/Header";
import Footer from "layouts/footer/Footer";

const Order = () => {
    const orders = useSelector((state) => state.order.orders);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);

    const openModal = (order) => {
        setSelectedOrder(order);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedOrder(null);
    };

    const handleCancelOrder = () => {
        // Logic để hủy đơn hàng (nếu cần)
        closeModal();
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="container mx-auto p-4 flex-grow">
                <h2 className=" text-center text-3xl font-thin font-cach_dieu italic mb-6 text-center md:text-left">
                    Đơn hàng của bạn
                </h2>
                {orders.length === 0 ? (
                    <p className="text-center text-lg">
                        Bạn chưa có đơn hàng nào, hãy quay lại mua sắm
                    </p>
                ) : (
                    <ul>
                        {orders.map((order, index) => (
                            <li
                                key={index}
                                className="mb-6 border rounded-lg shadow-sm p-6 bg-white text-left"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <p>
                                            <strong>Họ và tên:</strong>{" "}
                                            {order.userInfo.fullName}
                                        </p>
                                        <p>
                                            <strong>Email:</strong>{" "}
                                            {order.userInfo.email}
                                        </p>
                                        <p>
                                            <strong>Số điện thoại:</strong>{" "}
                                            {order.userInfo.phoneNumber}
                                        </p>
                                        <p>
                                            <strong>Địa chỉ:</strong>{" "}
                                            {order.userInfo.address}
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            <strong>Tổng sản phẩm:</strong>{" "}
                                            {order.totalQuantity}
                                        </p>
                                        <p>
                                            <strong>Tổng giá tiền:</strong>{" "}
                                            {order.totalPrice} VND
                                        </p>
                                        <p>
                                            <strong>Ngày đặt hàng:</strong>{" "}
                                            {new Date(
                                                order.date
                                            ).toLocaleString()}
                                        </p>
                                        <p>
                                            <strong>Trạng thái:</strong>{" "}
                                            {order.status}
                                        </p>
                                    </div>
                                </div>
                                <h3 className="font-bold mt-4">Sản phẩm:</h3>
                                <ul className="list-disc pl-5 mt-2">
                                    {order.products.map((product, idx) => (
                                        <li key={idx} className="mt-1">
                                            {product.name} - {product.quantity}{" "}
                                            x {product.price} VND
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                    onClick={() => openModal(order)}
                                >
                                    Hủy
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <Footer />
            {selectedOrder && (
                <div
                    className={`fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 transition-opacity ${
                        modalIsOpen
                            ? "opacity-100"
                            : "opacity-0 pointer-events-none"
                    }`}
                >
                    <div className="bg-white rounded-lg p-6 max-w-md mx-auto shadow-lg">
                        <h2 className="text-xl font-bold mb-4">
                            Xác nhận hủy đơn hàng
                        </h2>
                        <p className="mb-4">
                            {selectedOrder.status === "chưa xác nhận"
                                ? "Bạn có chắc chắn muốn hủy đơn hàng này không?"
                                : "Đơn hàng đã được xác nhận, không thể hủy."}
                        </p>
                        {selectedOrder.status === "chưa xác nhận" && (
                            <button
                                className="mr-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                onClick={handleCancelOrder}
                            >
                                Xác nhận hủy
                            </button>
                        )}
                        <button
                            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                            onClick={closeModal}
                        >
                            Đóng
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Order;
