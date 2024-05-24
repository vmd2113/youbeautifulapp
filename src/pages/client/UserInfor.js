import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "context/authContext"; // Hook lấy thông tin người dùng
import { auth, db } from "firebase_app/firebase-config";
import {
    updateEmail,
    updateProfile,
    reauthenticateWithCredential,
    EmailAuthProvider,
} from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import Header from "layouts/header/Header";
import Footer from "layouts/footer/Footer";
import { Label } from "components/label"; // Giả sử bạn có component Label

const UserProfile = () => {
    const { userInfo, setUserInfo } = useAuth();
    const [email, setEmail] = useState(userInfo.email);
    const [fullName, setFullName] = useState(userInfo.fullName);
    const [password, setPassword] = useState(""); // Thêm state cho mật khẩu hiện tại
    const navigate = useNavigate();

    const handleChangeInfor = async (e) => {
        e.preventDefault();
        try {
            const user = auth.currentUser;
            const credential = EmailAuthProvider.credential(
                user.email,
                password
            );

            // Reauthenticate user
            await reauthenticateWithCredential(user, credential);

            // Update email and profile
            if (email !== user.email) {
                await updateEmail(user, email);
            }
            await updateProfile(user, {
                displayName: fullName,
            });

            // Update Firestore document
            const userDocRef = doc(db, "users", user.uid);
            await updateDoc(userDocRef, {
                email,
                fullName,
            });

            // Update userInfo in context
            setUserInfo({ ...userInfo, email, fullName });

            toast.success("Cập nhật thông tin thành công!");
        } catch (error) {
            console.error("Error updating user information: ", error);
            toast.error("Cập nhật thông tin thất bại. Vui lòng thử lại.");
        }
    };

    const handleChangePassword = () => {
        navigate("/profile/changepassword");
    };

    return (
        <div>
            <Header />
            <div className="container w-600 mx-auto p-4">
                <div className="p-5">
                    <h1 className="font-cach_dieu text-3xl italic">
                        Thông tin người dùng
                    </h1>
                </div>
                <div>
                    <form onSubmit={handleChangeInfor}>
                        <div className="mb-4">
                            <Label className="text-left pb-4 items-start">
                                Tên đầy đủ
                            </Label>
                            <input
                                type="text"
                                id="fullName"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <Label className="text-left pb-4">Email:</Label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <Label className="text-left pb-4">
                                Mật khẩu hiện tại
                            </Label>
                            <input
                                type="password"
                                id="current-password"
                                placeholder="**************"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-300 my-5 bg-primary hover:bg-green-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Cập nhật
                        </button>
                    </form>
                    <button
                        onClick={handleChangePassword}
                        className="w-300 bg-primary hover:bg-green-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Đổi mật khẩu
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default UserProfile;
