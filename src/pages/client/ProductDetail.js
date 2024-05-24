import React from "react";
import { useParams } from "react-router";

import { list_product } from "utils/dataProduct";

import { Button } from "components/button";

import Footer from "layouts/footer/Footer";
import Header from "layouts/header/Header";

import imge_1 from "assets/image/product/duong-toc-tinh-dau-buoi.jpg";
import imge_2 from "assets/image/product/tinh-nguyen-chat-toc-huong-buoi.jpg";
import imge_3 from "assets/image/product/tinh-dau-nguyen-chat-huong-cam.jpg";
import imge_4 from "assets/image/product/treo-xe.jpg";
import imge_5 from "assets/image/product/t77011.jpg";

import { addItemToCart } from "redux_toolkit_/CartSlice";
import { useDispatch } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Banner from "components/banner/Banner";

const ProductDetail = () => {
    const dispatch = useDispatch();

    const handleAddProductToCart = (product) => {
        dispatch(addItemToCart(product));
        notifyAddToCartSuccess(); // Hiển thị thông báo khi thêm vào giỏ hàng thành công
    };

    const notifyAddToCartSuccess = () => {
        toast.success("Sản phẩm đã được thêm vào giỏ hàng!");
    };

    const listImage = [
        { id: 1, src: imge_1 },
        { id: 2, src: imge_2 },
        { id: 3, src: imge_3 },
        { id: 4, src: imge_4 },
        { id: 5, src: imge_5 },
    ];

    const { productId } = useParams();
    const productDetail_ = list_product.find(
        (product) => product.id === parseInt(productId)
    );

    if (!productDetail_) {
        return <div>Product not found</div>;
    }

    const src_image =
        listImage.find((img) => img.id === productDetail_.img_id)?.src || "";

    return (
        <div>
            <Header />
            <div className="flex flex-col gap-y-8 py-5">
                <div className="px-20 w-full mx-auto flex item-center gap-x-5 object-cover">
                    <img
                        src={src_image}
                        alt={productDetail_.name}
                        className="h-400 w-1/2"
                    />
                    <div className="w-1/2 bg-primary p-4">
                        <div className="p-5 text-whiteSoft">
                            <h1 className="text-4xl font-cach_dieu italic">
                                {productDetail_.name}
                            </h1>
                        </div>
                        <div className="text-whiteSoft font-primary">
                            <div className="pb-4">
                                <span className="px-2">Giá: </span> VNĐ{" "}
                                <span className="text-2xl font-bold">
                                    {productDetail_.price}
                                </span>
                            </div>
                            <span>{productDetail_.describe}</span>
                        </div>
                        <div className="m-2">
                            <button
                                onClick={() =>
                                    handleAddProductToCart(productDetail_)
                                }
                                className="bg-whiteSoft p-4 text-primary rounded-none"
                            >
                                THÊM VÀO GIỎ HÀNG (+)
                            </button>
                        </div>
                    </div>
                </div>
                <div className="px-20 w-900 mx-auto flex item-center text-center gap-x-5">
                    <div className="w-1/2 bg-primary p-5">
                        <h1 className="text-whiteSoft italic font-cach_dieu text-2xl py-5">
                            Công dụng
                        </h1>
                        <span className="inline-block p-5 text-whiteSoft">
                            {productDetail_.cong_dung}
                        </span>
                    </div>
                    <div className="w-1/2 h-300 bg-white p-5">
                        <h1 className="text-primary italic font-cach_dieu text-2xl py-5">
                            Thành Phần
                        </h1>
                        <p className="inline-block p-5">
                            {productDetail_.thanh_phan}
                        </p>
                    </div>
                </div>
            </div>
            <Banner></Banner>
            <ToastContainer />{" "}
            {/* Component này cần được đặt ở ngoài layout để hoạt động */}
            <Footer />
        </div>
    );
};

export default ProductDetail;
