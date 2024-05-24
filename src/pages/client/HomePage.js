import Banner from "components/banner/Banner";
import { Button } from "components/button";
import LayoutBannerBot from "layouts/clients/home/LayoutBannerBot";
import LayoutBrand from "layouts/clients/home/LayoutBrand";
import LayoutNewProduct from "layouts/clients/home/LayoutNewProduct";
import LayoutSologan from "layouts/clients/home/LayoutSologan";

import LayoutStory from "layouts/clients/home/LayoutStory";
import Footer from "layouts/footer/Footer";
import Header from "layouts/header/Header";
import React from "react";
import { ToastContainer } from "react-toastify";

const HomePage = ({ children, props }) => {
    return (
        <div>
            <ToastContainer />
            <Header></Header>
            <Banner></Banner>
            <LayoutNewProduct></LayoutNewProduct>
            <LayoutBrand></LayoutBrand>
            {/* thực hiện đổ data layout story  */}
            <LayoutStory></LayoutStory>
            <LayoutBannerBot></LayoutBannerBot>
            <LayoutSologan></LayoutSologan>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;
