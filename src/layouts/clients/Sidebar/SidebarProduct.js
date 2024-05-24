import React from "react";

const SidebarProduct = () => {
    const categories = ["TINH DẦU", "CHĂM SÓC TÓC", "CHẤT ĐỐT"];
    return (
        <div>
            <ul>
                <li className="mb-2">
                    <a href="#" className="text-darkbg hover:text-primary">
                        Danh mục 1
                    </a>
                </li>
                <li className="mb-2">
                    <a href="#" className="text-blue-500 hover:text-primary">
                        Danh mục 2
                    </a>
                </li>
                <li className="mb-2">
                    <a href="#" className="text-blue-500 hover:text-primary">
                        Danh mục 3
                    </a>
                </li>
                {/* Thêm danh mục khác nếu cần */}
            </ul>
        </div>
    );
};

export default SidebarProduct;
