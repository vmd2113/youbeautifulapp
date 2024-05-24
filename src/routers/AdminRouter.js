import React from "react";

import { useAuth } from "context/authContext"; // Cập nhật đường dẫn đến AuthProvider của bạn
import NotFoundPage from "pages/other/NotFoundPage";

const AdminRouter = ({ children }) => {
    const { userInfo } = useAuth();

    if (!userInfo) {
        // Chưa tải xong thông tin user hoặc user chưa đăng nhập
        return (
            <>
                <NotFoundPage></NotFoundPage>
            </>
        ); // Hoặc bạn có thể hiển thị một spinner loading ở đây
    }

    if (userInfo.role !== "ADMIN") {
        // Nếu user không phải là admin, chuyển hướng đến trang notfound
        return (
            <>
                <NotFoundPage></NotFoundPage>
            </>
        );
    }

    // Nếu user là admin, render các children components
    return <>{children}</>;
};

export default AdminRouter;
