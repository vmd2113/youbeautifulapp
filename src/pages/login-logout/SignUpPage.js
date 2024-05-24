import React, { useState } from "react";
import LayoutAuthentication from "layouts/clients/login-logout/LayoutAuthentication";
import { Link } from "react-router-dom";
import { Label } from "components/label";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "components/input";
import FormGroup from "components/common/FormGroup";
import { Button } from "components/button";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "firebase_app/firebase-config";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup.object({
    fullName: yup.string().required("This field is required"),
    email: yup
        .string()
        .email("Invalid email address")
        .required("This field is required"),
    password: yup
        .string()
        .required("This field is required")
        .min(8, "Password must be 8 characters"),
});

const SignUpPage = () => {
    const navigate = useNavigate();
    const {
        handleSubmit,
        control,
        formState: { errors, isValid, isSubmitting },
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onSubmit",
    });

    const handleSignUp = async (values) => {
        if (!isValid) return;
        try {
            await createUserWithEmailAndPassword(
                auth,
                values.email,
                values.password
            );
            await updateProfile(auth.currentUser, {
                displayName: values.fullName,
                photoURL:
                    "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            });

            await setDoc(doc(db, "users", auth.currentUser.uid), {
                fullName: values.fullName,
                email: values.email,
                avatar: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                status: "ACTIVE",
                role: "USER",
                createdAt: serverTimestamp(),
            });

            toast.success("Đăng ký thành công!");
            navigate("/");
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                toast.error(
                    "Email đã được đăng ký. Vui lòng sử dụng email khác."
                );
            } else {
                toast.error("Đăng ký thất bại. Vui lòng thử lại.");
            }
            console.error("Error during sign-up: ", error);
        }
    };

    return (
        <LayoutAuthentication heading="ĐĂNG KÍ TÀI KHOẢN">
            <ToastContainer />
            <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
                Bạn có thể{" "}
                <Link
                    to="/login"
                    className="font-medium underline text-primary"
                >
                    Đăng nhập
                </Link>{" "}
                nếu có tài khoản
            </p>
            <form onSubmit={handleSubmit(handleSignUp)}>
                <FormGroup>
                    <Label htmlFor="fullName">Họ và tên</Label>
                    <Input
                        control={control}
                        name="fullName"
                        placeholder="Enter your full name"
                        error={errors.fullName?.message}
                    ></Input>
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        control={control}
                        name="email"
                        placeholder="Enter your email"
                        error={errors.email?.message}
                    ></Input>
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input
                        type="password"
                        control={control}
                        name="password"
                        placeholder="Enter your password"
                        error={errors.password?.message}
                    ></Input>
                </FormGroup>

                <Button type="submit" className="bg-primary text-white w-full">
                    Register
                </Button>
            </form>
        </LayoutAuthentication>
    );
};

export default SignUpPage;
