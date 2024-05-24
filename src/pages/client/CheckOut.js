import React, { useEffect, useState } from "react";
import LayoutAuthentication from "layouts/clients/login-logout/LayoutAuthentication";
import { Link, useNavigate } from "react-router-dom";
import { Label } from "components/label";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "components/input";
import FormGroup from "components/common/FormGroup";
import { Button } from "components/button";
import classNames from "utils/classNames";
import imgPayment from "assets/image/Cash Payment-bro.png";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "layouts/footer/Footer";
import Header from "layouts/header/Header";
import { useAuth } from "context/authContext";
import { addOrder } from "redux_toolkit_/OrderSlide"; // Import addOrder action

const useBeforeUnload = (message) => {
    useEffect(() => {
        const handleBeforeUnload = (event) => {
            event.preventDefault();
            event.returnValue = message;
            return message;
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [message]);
};

const schema = yup.object({
    fullName: yup.string().required("Họ tên không được bỏ trống"),
    email: yup
        .string()
        .email("Định dạng email không đúng")
        .required("Email không được để trống"),
    phoneNumber: yup.string().required("Số điện thoại không được bỏ trống"),
    address: yup.string().required("Địa chỉ không được bỏ trống"),
});

const CheckOut = () => {
    const { userInfo } = useAuth();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cartArray);
    const totalPrice = useSelector((state) => state.cart.totalPrice);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const navigate = useNavigate();
    const [toastDisplayed, setToastDisplayed] = useState(false);

    const {
        handleSubmit,
        control,
        formState: { errors },
        setValue,
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onSubmit",
    });

    useEffect(() => {
        if (userInfo) {
            setValue("fullName", userInfo.fullName);
            setValue("email", userInfo.email);
        }
    }, [userInfo, setValue]);

    useBeforeUnload("Bạn có chắc chắn muốn rời khỏi trang này?");

    const handConfirmOrder = async (values) => {
        if (!userInfo) {
            toast.success(
                "Đặt hàng thành công, hãy kiểm tra email để theo dõi trạng thái đơn hàng!"
            );
            return;
        }

        const orderData = {
            userInfo: values,
            products: cart,
            totalQuantity: totalQuantity,
            totalPrice: totalPrice,
            date: new Date().toISOString(),
        };

        dispatch(addOrder(orderData));
        toast.success(
            "Đặt hàng thành công, hãy kiểm tra email để theo dõi trạng thái đơn hàng!"
        );
        setToastDisplayed(true);
        await new Promise((resolve) => setTimeout(resolve, 3000));
        navigate("/");
    };

    return (
        <div>
            <Header />
            <div className="flex items-center justify-center p-4">
                <div></div>
                <div className="bg-white w-900 p-10">
                    <form onSubmit={handleSubmit(handConfirmOrder)}>
                        <div className="flex flex-row">
                            <div className="w-1/2">
                                <FormGroup>
                                    <Label htmlFor="fullName">Họ và tên</Label>
                                    <Input
                                        control={control}
                                        name="fullName"
                                        placeholder="Nhập họ và tên"
                                        error={errors.fullName?.message}
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        control={control}
                                        name="email"
                                        placeholder="Nhập email của bạn"
                                        error={errors.email?.message}
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlFor="phoneNumber">
                                        Số điện thoại
                                    </Label>
                                    <Input
                                        type="text"
                                        control={control}
                                        name="phoneNumber"
                                        placeholder="Nhập số điện thoại của bạn"
                                        error={errors.phoneNumber?.message}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="address">Địa chỉ</Label>
                                    <Input
                                        control={control}
                                        name="address"
                                        placeholder="Nhập địa chỉ của bạn"
                                        error={errors.address?.message}
                                    />
                                </FormGroup>
                                <span className="text-left font-cach_dieu text-error italic text-left pr-8 inline-block">
                                    Lưu ý: Với phương thức thanh toán mặc định
                                    của chúng tôi là COD, hãy điền thông tin
                                    chính xác nhất để được phục vụ tốt nhất
                                </span>
                            </div>
                            <div className="w-1/2 p-5 text-left">
                                <div>
                                    <span className="font-cach_dieu text-xl italic">
                                        Tổng sản phẩm:{" "}
                                    </span>
                                    <span className="font-cach_dieu text-2xl text-text2 italic">
                                        {totalQuantity}
                                    </span>
                                </div>
                                <div>
                                    <span
                                        className="font
                                   -cach_dieu text-xl italic"
                                    >
                                        Tổng giá tiền:{" "}
                                    </span>
                                    <span className="font-cach_dieu text-2xl text-text2 italic">
                                        {totalPrice}
                                    </span>
                                    <span className="px-3 font-thin text-xs">
                                        VND
                                    </span>
                                </div>

                                <img src={imgPayment} alt="order" />
                                <Button
                                    type="submit"
                                    className="bg-primary text-white w-full"
                                >
                                    Xác nhận
                                </Button>
                            </div>
                        </div>
                    </form>
                    <ToastContainer />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CheckOut;
