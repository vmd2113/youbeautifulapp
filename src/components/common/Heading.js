import React from "react";

const Heading = ({ children, className = "" }) => {
    return (
        <h2
            className={`pl-10
                text-5xl font-semibold text-text2 mb-5 ${className}`}
        >
            {children}
        </h2>
    );
};

export default Heading;
