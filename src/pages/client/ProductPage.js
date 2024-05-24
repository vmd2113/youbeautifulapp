import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ProductApi from "../../api/ProductApi";
import CategoryApi from "../../api/CategoryApi";
import ProductItem from "modules/product/ProductItem";
import { list_product } from "utils/dataProduct";
import Banner from "components/banner/Banner";
import GridLayout from "components/common/GridLayout";
import HeadingTitle from "components/heading_title/HeadingTitle";
import Footer from "layouts/footer/Footer";
import Header from "layouts/header/Header";

import imge_1 from "assets/image/product/duong-toc-tinh-dau-buoi.jpg";
import imge_2 from "assets/image/product/tinh-nguyen-chat-toc-huong-buoi.jpg";
import imge_3 from "assets/image/product/tinh-dau-nguyen-chat-huong-cam.jpg";
import imge_4 from "assets/image/product/treo-xe.jpg";
import imge_5 from "assets/image/product/t77011.jpg";

const ProductPage = () => {
    const dispatch = useDispatch();
    const categories_ = [
        { id: 1, name: "TINH DẦU" },
        { id: 2, name: "SẢN PHẨM CHĂM SÓC TÓC" },
        { id: 3, name: "NĂNG LƯỢNG XANH" },
    ];
    const listImage = [
        { id: 1, src: imge_1 },
        { id: 2, src: imge_2 },
        { id: 3, src: imge_3 },
        { id: 4, src: imge_4 },
        { id: 5, src: imge_5 },
    ];

    const [productData, setProductData] = useState(list_product);
    const [categoryData, setCategoryData] = useState([]);

    // const handleGetAllProduct = async () => {
    //     try {
    //         const result = await ProductApi.getAllProduct();
    //         setProductData(result);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    const handleSetProductDataByCategory = (id) => {
        const productsWithSameId = list_product.filter(
            (product) => product.category_id === id
        );
        setProductData(productsWithSameId);
    };

    const handleGetAllCategory = async () => {
        try {
            const result = await CategoryApi.getAllCategories();
            setCategoryData(result);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        // handleGetAllProduct();
        handleGetAllCategory();
    }, []);

    return (
        <div>
            <Header />
            <Banner />
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 bg-whiteSoft p-4 h-300 gap-y-1 flex flex-col">
                    <button
                        onClick={() => setProductData(list_product)}
                        className="text-lg font-semibold mb-4"
                    >
                        Tất cả sản phẩm
                    </button>
                    <ul className="flex flex-col">
                        {categories_.map((item) => (
                            <li
                                key={item.id}
                                className="py-1"
                                onClick={() =>
                                    handleSetProductDataByCategory(item.id)
                                }
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col w-3/4">
                    <div className="md:w-full p-4">
                        <HeadingTitle className="text-2xl bg-primary italic text-whiteSoft">
                            Sản phẩm
                        </HeadingTitle>
                    </div>
                    <GridLayout type="list_product">
                        {productData.length > 0 &&
                            productData.map((item) => {
                                const image = listImage.find(
                                    (img) => img.id === item.img_id
                                );
                                return (
                                    <ProductItem
                                        key={item.id} // Use a consistent key
                                        item={item}
                                        src={image ? image.src : "default.jpg"}
                                    />
                                );
                            })}
                    </GridLayout>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProductPage;
