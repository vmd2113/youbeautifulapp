import HeadingTitle from "components/heading_title/HeadingTitle";
import React from "react";
import img_sourc from "assets/banner/banner-top/t77011.jpg";
import { Button } from "components/button";
const LayoutNewProduct = () => {
    const newProduct = {
        id: 1,
        name: "THAN SẠCH KHÔNG KHÓI CAO CẤP",
        sortDescription: `Thời gian bén lửa nhanh, mồi nhanh , dễ cháy
        Không chứa hóa chất độc hại hoặc sinh ra khí gây độc hại Không phải thay hay thêm than khi nướng tại bàn
        Nhiệt lượng cao & không thay đổi cho đến lúc tàn Tiết kiệm & an toàn hơn rất nhiều so với các loại than củi, than gỗ, than đá và các loại than khác.`,

        imgSrc: img_sourc,
    };
    return (
        <div>
            <div className="grid grid-cols-3">
                <div>
                    <HeadingTitle className="text-darkbg">
                        Sản phẩm
                    </HeadingTitle>
                    <span className="text-darkbg font-primary text-4xl">
                        MỚI
                    </span>
                </div>
                <div>
                    <img className="w-full" src={newProduct.imgSrc} alt="" />
                </div>
                <div className="p-10">
                    <span className="italic font-cach_dieu pb-3 text-xl">
                        {newProduct.name}
                    </span>{" "}
                    <br></br>
                    <span>{newProduct.sortDescription}</span>
                    <div className="flex items-end justify-end py-5">
                        <Button
                            href="/products"
                            kind="secondary"
                            className="rounded-none text-center p-1 bg-secondary text-pretty h-10 w-300 text-xl"
                        >
                            Xem thêm
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LayoutNewProduct;
