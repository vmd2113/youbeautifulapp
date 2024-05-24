import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./banner.css";

import banner_1 from "assets/banner/banner-top/t77011.jpg";
import banner_2 from "assets/banner/banner-top/t77012.jpg";
import banner_3 from "assets/banner/banner-top/t77013.jpg";
import banner_4 from "assets/banner/banner-top/t77014.jpg";
import { Button } from "components/button";

const Banner = () => {
    const listBanner = [banner_1, banner_2, banner_3, banner_4];

    console.log("image: ");
    return (
        <div className="banner h-[400] page-container mb-20 overflow-hidden">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {listBanner.map((image, index) => (
                    <div className="font-primary h-[500px] container mb-20 overflow-hidden ">
                        <SwiperSlide key={index}>
                            <div className="flex flex-row overflow-hidden rounded-lg">
                                <div className="wrap-image h-[400]">
                                    <img
                                        className="w-600 h-400 object-fill overflow-hidden "
                                        src={image}
                                        alt={`Banner ${index + 1}`}
                                    />
                                </div>
                                <div className="font-primary max-w-sm h-400 overflow-hidden item-center flex justify-center flex-col gap-y-2 text-lg bg-primary p-20 font-thin text-white">
                                    <span className="font-cach_dieu text-5xl font-thin italic">
                                        Sản phẩm hoàn toàn tự nhiên
                                    </span>

                                    <span className="text-left pt-3">
                                        THÂN THIỆN MÔI TRƯỜNG
                                    </span>
                                    <div className="">
                                        {/* link tới product  */}
                                        <Button
                                            href="/products"
                                            kind="secondary"
                                            className="rounded-2xl font-thin text-primary bg-whiteSoft w-480 px-5 py-2 mt-4"
                                        >
                                            Xem thêm
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;
