import React from "react";
import HeaderAdminBoard from "./HeaderAdminBoard";
import SideBarAdmin from "./SideBarAdminBoard";
import Footer from "layouts/footer/Footer";
import AccountManager from "pages/admin/AccountManager";

const AdminAccount = () => {
    return (
        <div>
            <React.Fragment>
                <HeaderAdminBoard />
                <div style={{ display: "flex" }}>
                    <SideBarAdmin />
                    <div style={{ height: "100%", width: "100%" }}>
                        <AccountManager></AccountManager>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        </div>
    );
};

export default AdminAccount;
