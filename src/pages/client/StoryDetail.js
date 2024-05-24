import HeadingTitle from "components/heading_title/HeadingTitle";
import Footer from "layouts/footer/Footer";
import Header from "layouts/header/Header";
import PropTypes from "prop-types";
import React from "react";
import { useParams } from "react-router";
import { list_story } from "utils/dataStory";

const StoryDetail = () => {
    const { storyId } = useParams(); // Sử dụng object destructuring để lấy storyId từ useParams
    const storyData = list_story[storyId - 1];

    // Kiểm tra nếu storyData không tồn tại, trả về null để không render gì cả
    if (!storyData) return null;

    return (
        <div>
            <Header />
            <div className="w-900 mx-auto flex flex-col gap-x-5 pb-4">
                <div className="bg-primary text-whiteSoft p-3 italic rounded-lg text-right w-full">
                    <h1 className="text-5xl  p-3 font-cach_dieu">
                        {storyData.title}
                    </h1>
                </div>
                <div className="flex flex-row items-center justify-center">
                    <div className="bg-primary w-1/2 h-1"></div>
                    <span className=" italic font-bold text-2xl text-text2 inline-block w-1/4 p-3 font-cach_dieu text-xl text-right">
                        {storyData.time}
                    </span>
                </div>

                <div className="bg-white text-center w-full my-10">
                    <div>
                        <img src={storyData.img} alt="" />
                    </div>
                </div>
                <div className="text-center italic p-4 text-xl">
                    {storyData.sort_des}
                </div>

                <div className="pt-5 text-balance">{storyData.content}</div>
            </div>
            <Footer />
        </div>
    );
};

StoryDetail.propTypes = {
    storyId: PropTypes.number,
    title: PropTypes.string,
    time: PropTypes.string,
    img: PropTypes.string,
    sort_des: PropTypes.string,
    content: PropTypes.string,
};

export default StoryDetail;
