import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "context/authContext";

const AdminLayout = () => {
    const { userInfo } = useAuth();
    const navigate = useNavigate();

    if (!userInfo || userInfo.role !== "ADMIN") {
        navigate("/404");
        return null;
    }

    return (
        <div>
            {/* Header and other layout components */}
            <Outlet />
        </div>
    );
};

export default AdminLayout;
