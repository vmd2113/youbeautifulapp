import React from "react";

const HeadingTitle = ({ children, className }) => {
    return (
        <h1 className={`font-cach_dieu text-8xl text-center p-5 ${className}`}>
            {children}
        </h1>
    );
};

export default HeadingTitle;
