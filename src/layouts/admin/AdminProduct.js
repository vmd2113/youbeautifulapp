import React from "react";
import HeaderAdminBoard from "./HeaderAdminBoard";
import ProductManager from "pages/admin/ProductManager";
import SideBarAdmin from "./SideBarAdminBoard";
import Footer from "layouts/footer/Footer";

const AdminProduct = () => {
    return (
        <div>
            <React.Fragment>
                <HeaderAdminBoard />
                <div style={{ display: "flex" }}>
                    <SideBarAdmin />
                    <div style={{ height: "100%", width: "100%" }}>
                        <ProductManager></ProductManager>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        </div>
    );
};

export default AdminProduct;
