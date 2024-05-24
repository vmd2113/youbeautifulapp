import React from "react";
import HeaderAdminBoard from "./HeaderAdminBoard";
import SideBarAdminBoard from "./SideBarAdminBoard";
import Footer from "layouts/footer/Footer";

function Admin(children) {
    return (
        <React.Fragment>
            <HeaderAdminBoard />
            <div style={{ display: "flex" }}>
                <SideBarAdminBoard />
                <div style={{ height: "100%", width: "100%" }}>{children}</div>
            </div>
            <Footer />
        </React.Fragment>
    );
}
export default Admin;
