import React from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponents from "components/common/ErrorComponents";
import backgroud from "assets/image/ellipse.png";
import logo from "assets/logo/logo.jpg";
// [TODO]:
const LayoutAuthentication = (props) => {
    const { children, heading = "" } = props;

    return (
        <div className="w-full min-h-screen bg-lite p-10 relative isolate ">
            <img
                src={backgroud}
                className="hidden lg:block absolute bottom-0 left-0 right-0 pointer-events-none z-[-1]"
            />

            <div className="w-full max-w-[556px] bg-white dark:bg-darkSecondary rounded-xl py-8 lg:px-16 lg:py-12 mx-auto">
                <Link to="/" className="inline-block mb-5 lg:mb-16">
                    <img src={logo} alt="zest-aroma" className="w-20" />
                </Link>
                <h1 className="mb-1 text-lg font-semibold text-center lg:text-xl lg:mb-3 text-text1 dark:text-white">
                    {heading}
                </h1>
                {children}
            </div>
        </div>
    );
};

LayoutAuthentication.propTypes = {
    heading: PropTypes.string,
    children: PropTypes.node,
};

export default withErrorBoundary(LayoutAuthentication, {
    FallbackComponent: ErrorComponents,
});
