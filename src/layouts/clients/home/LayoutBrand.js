import React from "react";
import backgroundImage from "assets/banner/banner-mid/bg_brand_cf39014_2_9e67c4813e.jpg";
const LayoutBrand = () => {
    return (
        <div className="p-10 ">
            <div className="w-full h-400 relative ">
                <div className="absolute "></div>
                <div
                    className="w-full h-full bg-cover bg-no-repeat rounded-lg"
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                    }}
                ></div>
            </div>
            <div className="p-10 w-900 h-64 max-w-[400px] mx-auto -mt-[200px] relative z-10 pb-10 bg-secondary rounded-lg">
                <h1 className=" font-cach_dieu font-bold text-center text-4xl italic ">
                    ZESTAROMA
                </h1>
                <br />
                <span className=" text-center pt-8">
                    Mỗi kilogram than ZestAroma đang được sử dụng là đang đóng
                    góp vào việc giảm lỗ hổng tầng ozon và tiết kiệm 1 thân cây
                    bị đốn hạ. Hãy chung tay cùng bảo vệ rừng và bảo vệ bầu khí
                    quyển của trái đất!
                </span>
            </div>
        </div>
    );
};

export default LayoutBrand;
