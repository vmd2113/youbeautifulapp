import React from "react";
import HeaderAdminBoard from "./HeaderAdminBoard";
import ProductManager from "pages/admin/ProductManager";
import SideBarAdmin from "./SideBarAdminBoard";
import Footer from "layouts/footer/Footer";
import OrderManager from "pages/admin/OrderManager";

const AdminOrder = () => {
    return (
        <div>
            <React.Fragment>
                <HeaderAdminBoard />
                <div style={{ display: "flex" }}>
                    <SideBarAdmin />
                    <div style={{ height: "100%", width: "100%" }}>
                        <OrderManager></OrderManager>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        </div>
    );
};

export default AdminOrder;
