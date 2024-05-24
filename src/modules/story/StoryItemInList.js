import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const StoryItemInList = ({ item }) => {
    // Kiểm tra nếu item không tồn tại hoặc không có thuộc tính cần thiết, trả về null để không render gì cả
    if (!item || !item.img || !item.title || !item.time || !item.sort_des)
        return null;

    return (
        <div className="flex flex-col lg:flex-row items-center gap-7 p-2 lg:p-10 ">
            <div className="lg:w-1/2">
                <img
                    className="w-full lg:h-auto object-cover rounded-lg"
                    src={item.img}
                    alt="ảnh"
                />
            </div>
            <div className="lg:w-1/2 lg:pl-10 text-left">
                <h1 className=" italic font-cach_dieu text-3xl lg:text-3xl font-bold text-primary pb-2 lg:pb-5">
                    {item.title}
                </h1>

                <div>
                    <span className="font-semibold text-text2 py-2 lg:py-6 text-left block lg:inline">
                        {item.time}
                    </span>
                    <p className="text-sm lg:text-base">{item.sort_des}</p>
                </div>

                <div className="bg-primary h-1 w-full mt-4 lg:mt-10"></div>
            </div>
        </div>
    );
};

StoryItemInList.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string,
        time: PropTypes.string,
        img: PropTypes.string,
        sort_des: PropTypes.string,
    }),
};

export default StoryItemInList;
