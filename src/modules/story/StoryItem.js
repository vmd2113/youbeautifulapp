import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const StoryItem = ({ item, onClick }) => {
    console.log(item);
    // Kiểm tra nếu item không tồn tại hoặc các thuộc tính bên trong không tồn tại, trả về null để không render gì cả
    if (
        !item ||
        !item.id ||
        !item.img ||
        !item.title ||
        !item.time ||
        !item.sort_des
    )
        return null;

    return (
        <>
            <Link to={`/stories/${item.id}`}>
                <div>
                    <div className="h-64 pb-2">
                        <img
                            src={item.img}
                            alt=""
                            className="object-cover w-full h-full rounded-2xl"
                        />
                    </div>
                    <h2 className="text-darkSoft text-2xl font-semibold italic font-cach_dieu text-primary  py-5">
                        {item.title}
                    </h2>
                    <span className="py-5">{item.time}</span>
                    <h5 className="text-text4">{item.sort_des}</h5>
                </div>
            </Link>
        </>
    );
};

StoryItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        time: PropTypes.string,
        img: PropTypes.string,
        sort_des: PropTypes.string,
    }),
    onClick: PropTypes.func, // Nếu bạn có một prop onClick
};

export default StoryItem;
