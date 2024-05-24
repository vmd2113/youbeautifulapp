// pages/login-logout/SignInPage.js
import React, { useEffect } from "react";
import LayoutAuthentication from "layouts/clients/login-logout/LayoutAuthentication";
import { Link, useNavigate } from "react-router-dom";
import { Label } from "components/label";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "components/input";
import FormGroup from "components/common/FormGroup";
import { Button } from "components/button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "firebase_app/firebase-config";
import { useAuth } from "context/authContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { doc, getDoc } from "firebase/firestore";

const schema = yup.object({
    email: yup
        .string()
        .email("Invalid email address")
        .required("This field is required"),
    password: yup
        .string()
        .required("This field is required")
        .min(8, "Password must be 8 characters"),
});

const SignInPage = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onSubmit",
    });

    const { userInfo, setUserInfo } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (userInfo?.email) {
            navigate("/");
        }
    }, [userInfo, navigate]);

    const handleSignIn = async (values) => {
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                values.email,
                values.password
            );
            const user = userCredential.user;
            const role = await fetchUserRole(user.uid);
            setUserInfo({
                email: user.email,
                role: role,
                fullName: user.displayName || "User",
            });
            toast.success("Login successful!");
            setTimeout(() => {
                if (role === "ADMIN") {
                    navigate("/admin/product");
                } else {
                    navigate("/");
                }
            }, 2000);
        } catch (error) {
            console.error("Error during sign-in: ", error);
            toast.error("Sai thông tin hoặc mật khẩu, vui lòng đăng nhập lại");
        }
    };

    const fetchUserRole = async (uid) => {
        try {
            const userDoc = await getDoc(doc(db, "users", uid));
            if (userDoc.exists()) {
                const userData = userDoc.data();
                return userData.role || "USER";
            } else {
                throw new Error("User not found");
            }
        } catch (error) {
            console.error("Error fetching user role: ", error);
            throw error;
        }
    };

    return (
        <LayoutAuthentication heading="ĐĂNG NHẬP">
            <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
                Bạn có thể{" "}
                <Link
                    to="/register"
                    className="font-medium underline text-primary"
                >
                    Đăng kí
                </Link>{" "}
                nếu chưa có tài khoản
            </p>
            <form onSubmit={handleSubmit(handleSignIn)}>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        control={control}
                        name="email"
                        placeholder="Enter your email"
                        error={errors.email?.message}
                    />
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input
                        type="password"
                        control={control}
                        name="password"
                        placeholder="Enter your password"
                        error={errors.password?.message}
                    />
                </FormGroup>

                <Button type="submit" className="bg-primary text-white w-full">
                    Đăng nhập
                </Button>
            </form>
            <ToastContainer />
        </LayoutAuthentication>
    );
};

export default SignInPage;
