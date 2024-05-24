import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
    faChair,
    faChevronLeft,
    faChevronRight,
    faCouch,
    faFile,
    faFileInvoiceDollar,
    faTag,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function SideBarAdmin() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const navigate = useNavigate();
    let location = useLocation();

    const url2 = location.pathname;
    const parts2 = url2.split("/");
    let lastSegment = parts2.pop();
    const backGroundstyle = {
        backgroundColor: "#8a9328",
    };

    const nonStyle = {};

    return (
        <div
            className={`transition-width duration-300 ease-in-out min-h-screen border-r border-gray-300 bg-white text-center ${
                isCollapsed ? "w-12 pr-0" : "w-72"
            }`}
        >
            <button
                className="bg-none border-none text-primary text-2xl p-2 cursor-pointer focus:outline-none"
                onClick={() => setIsCollapsed(!isCollapsed)}
            >
                <FontAwesomeIcon icon={isCollapsed ? faChevronRight : faBars} />
            </button>
            {!isCollapsed && (
                <>
                    <div className="text-center mt-4 font-cach_dieu t">
                        <div className="flex justify-center">
                            {/* SVG icon placeholder */}
                        </div>

                        <p className="text-black text-2xl">ADMIN DASHBOARD</p>
                    </div>
                    <div className="mt-4 text-secondary font-primary">
                        <button
                            style={
                                lastSegment === "account"
                                    ? backGroundstyle
                                    : nonStyle
                            }
                            className="w-full h-12 bg-transparent text-black text-left pl-8 focus:outline-none"
                            onClick={() => navigate("/admin/account")}
                        >
                            <FontAwesomeIcon className="pr-2" icon={faUser} />
                            Account manager
                        </button>
                        <button
                            style={
                                lastSegment === "product"
                                    ? backGroundstyle
                                    : nonStyle
                            }
                            className="w-full h-12 bg-transparent text-black text-left pl-8  focus:outline-none"
                            onClick={() => navigate("/admin/product")}
                        >
                            <FontAwesomeIcon className="pr-2" icon={faChair} />
                            Product manager
                        </button>
                        <button
                            style={
                                lastSegment === "order"
                                    ? backGroundstyle
                                    : nonStyle
                            }
                            className="w-full h-12 bg-transparent text-black text-left pl-8  focus:outline-none"
                            onClick={() => navigate("/admin/order")}
                        >
                            <FontAwesomeIcon
                                className="pr-2"
                                icon={faFileInvoiceDollar}
                            />
                            Order manager
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default SideBarAdmin;
