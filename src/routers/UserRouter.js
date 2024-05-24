import { useAuth } from "context/authContext";
import NotFoundPage from "pages/other/NotFoundPage";
import React from "react";

const UserRouter = ({ children }) => {
    const { userInfo } = useAuth();

    if (!userInfo) {
        // Chưa tải xong thông tin user hoặc user chưa đăng nhập
        return (
            <>
                <NotFoundPage></NotFoundPage>
            </>
        ); // Hoặc bạn có thể hiển thị một spinner loading ở đây
    }

    if (userInfo.role !== "USER") {
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

export default UserRouter;
