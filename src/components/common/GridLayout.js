import React from "react";

const GridLayout = ({ children, className, type = "default" }) => {
    if (type === "list_story")
        return (
            <div className={`grid grid-cols-1 gap-y-10 ${className}`}>
                {" "}
                {children}
            </div>
        );
    if (type === "home_story" || "home_product")
        return (
            <div className="p-5">
                <div className={`grid grid-cols-3 gap-x-10 ${className}`}>
                    {" "}
                    {children}
                </div>
            </div>
        );

    if (type === "list_product")
        return (
            <div className={`grid grid-col-4 gap-y-8 ${className}`}>
                {" "}
                {children}
            </div>
        );

    if (type === "empty")
        return (
            <div className="text-center text-2xl text-darkbg">
                Sản phẩm đang trong quá trình cập nhật
            </div>
        );
    return (
        <div className={`grid grid-cols-4 gap-x-8 ${className}`}>
            {" "}
            {children}
        </div>
    );
};

export default GridLayout;
