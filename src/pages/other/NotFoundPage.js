import React from "react";
import img_not_found from "assets/404 error with portals-pana.png";
import { Button } from "components/button";
const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <img
                src={img_not_found}
                className="w-480 h-auto select-none pointer-events-none"
                alt="page not found"
            />
            <div>
                <Button
                    href="/"
                    className="bg-error text-whiteSoft p-4 w-20 rounded-md"
                >
                    Trang chủ
                </Button>
            </div>
        </div>
    );
};

export default NotFoundPage;
