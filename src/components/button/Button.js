import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "utils/classNames";

const Button = ({
    type = "button",
    children,
    className = "w-300",
    isLoading = false,
    ...rest
}) => {
    const child = !!isLoading ? (
        <div className="w-10 h-10 border-4 border-white rounded-full border-t-transparent border-b-transparent animate-spin"></div>
    ) : (
        children
    );

    let defaultClassName =
        "flex items-center justify-center p-4  rounded-xl min-h-[56px] ";
    switch (rest.kind) {
        case "primary":
            defaultClassName = defaultClassName + "text-primary";
            break;
        case "secondary":
            defaultClassName = defaultClassName + " bg-primary text-whiteSoft";
            break;
        case "ghost":
            defaultClassName =
                defaultClassName + " bg-secondary bg-opacity-10 text-secondary";
            break;

        default:
            break;
    }
    if (rest.href)
        return (
            <Link to={rest.href} className={classNames(className)}>
                {child}
            </Link>
        );
    return (
        <button
            className={classNames(
                defaultClassName,
                !!isLoading ? "opacity-50 pointer-events-none" : "",
                className
            )}
            type={type}
            {...rest}
        >
            {child}
        </button>
    );
};
Button.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
    isLoading: PropTypes.bool,
    href: PropTypes.string,
    kind: PropTypes.oneOf(["primary", "secondary", "ghost"]),
};
export default Button;
