import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "context/authContext"; // Hook lấy thông tin người dùng
import { auth } from "firebase_app/firebase-config";
import {
    updatePassword,
    reauthenticateWithCredential,
    EmailAuthProvider,
} from "firebase/auth";
import Header from "layouts/header/Header";
import Footer from "layouts/footer/Footer";
import { Label } from "components/label"; // Giả sử bạn có component Label

const ChangePassword = () => {
    const { userInfo } = useAuth();
    const [currentPassword, setCurrentPassword] = useState(""); // State cho mật khẩu hiện tại
    const [newPassword, setNewPassword] = useState(""); // State cho mật khẩu mới
    const navigate = useNavigate();

    const handlePasswordChange = async (e) => {
        e.preventDefault();
        try {
            const user = auth.currentUser;
            const credential = EmailAuthProvider.credential(
                user.email,
                currentPassword
            );

            // Reauthenticate user
            await reauthenticateWithCredential(user, credential);

            // Update password
            await updatePassword(user, newPassword);

            toast.success("Đổi mật khẩu thành công!");
            navigate("/profile");
        } catch (error) {
            console.error("Error changing password: ", error);
            if (error.code === "auth/wrong-password") {
                toast.error("Mật khẩu hiện tại không đúng. Vui lòng thử lại.");
            } else {
                toast.error("Đổi mật khẩu thất bại. Vui lòng thử lại.");
            }
        }
    };

    return (
        <div>
            <Header />
            <div className="container mx-auto px-4 lg:px-20 py-10 rounded-xl">
                <div className=" max-w-xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h1 className="font-thin text-3xl mb-8 font-cach_dieu italic">
                        Đổi mật khẩu
                    </h1>
                    <form onSubmit={handlePasswordChange}>
                        <div className="mb-4">
                            <Label className="pb-4 px-4">
                                Mật khẩu hiện tại
                            </Label>
                            <input
                                type="password"
                                id="current-password"
                                value={currentPassword}
                                onChange={(e) =>
                                    setCurrentPassword(e.target.value)
                                }
                                className="input-field"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <Label className="pb-4 px-4">Mật khẩu mới</Label>
                            <input
                                type="password"
                                id="new-password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="input-field"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-green-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Đổi mật khẩu
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
            <ToastContainer />
        </div>
    );
};

export default ChangePassword;
