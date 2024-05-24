import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "firebase_app/firebase-config";
import logo from "assets/logo/logo.jpg";

const HeaderAdminBoard = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate("/login"); // Chuyển hướng đến trang login sau khi đăng xuất
        } catch (error) {
            console.error("Error logging out: ", error);
        }
    };

    return (
        <div className="flex flex-row items-center justify-between p-2 bg-white text-lg font-semibold">
            {/* header logo - search  */}
            <div className="flex flex-row items-center justify-start flex-1 gap-x-1 bg-white">
                <Link to="/" className="inline-block">
                    <img className="w-20 h-18" src={logo} alt="logo" />
                </Link>
                {/* <div className="max-w-[458px] w-full">
                    <Search></Search>
                </div> */}
            </div>

            {/* header content */}
            <div className="flex items-end justify-end flex-1 gap-x-10 font-bold py-3">
                <div className="flex gap-x-5 pr-10 font-extralight">
                    <Link to={`/admin/profile`}>
                        <span className="p-3">Profile</span>
                    </Link>
                    <span className="cursor-pointer" onClick={handleLogout}>
                        Đăng xuất
                    </span>
                </div>
            </div>
        </div>
    );
};

export default HeaderAdminBoard;
