import React from "react";
import logo from "assets/logo/logo.jpg";
import { Link } from "react-router-dom";
const Footer = () => {
    // TODO  : thay logoo nếu có
    return (
        <footer className="bg-white text-darkbg  font-primary bottom-0 ">
            <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div class="md:flex md:justify-between">
                    <div class="mb-6 md:mb-0">
                        <a
                            href="https://flowbite.com/"
                            class="flex items-center"
                        >
                            <img
                                src={logo}
                                className="w-300"
                                alt="FlowBite Logo"
                            />
                            {/* <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                ZESTAROMA
                            </span> */}
                        </a>
                    </div>
                    <div class="grid grid-cols-2 gap-12 sm:gap-6 sm:grid-cols-3 text-left">
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                CHÍNH SÁCH
                            </h2>
                            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                <Link to={"/shopping-manual"}>
                                    <li class="mb-4">
                                        <span class="hover:underline">
                                            Hướng dẫn mua hàng
                                        </span>
                                    </li>
                                </Link>
                                <Link to={"/contact"}>
                                    <li>
                                        <span class="hover:underline">
                                            Liên hệ
                                        </span>
                                    </li>
                                </Link>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                MẠNG XÃ HỘI
                            </h2>
                            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                <li class="mb-4">
                                    <span href="#" class="hover:underline ">
                                        Facebook
                                    </span>
                                </li>
                                <li>
                                    <span href="#" class="hover:underline">
                                        Instagram
                                    </span>
                                </li>
                                <li>
                                    <span href="#" class="hover:underline">
                                        youtube
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                LIÊN HỆ
                            </h2>
                            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                <li class="mb-4">
                                    <span href="#" class="hover:underline">
                                        Hotline: 75734759
                                    </span>
                                </li>
                                <li>
                                    <span href="#" class="hover:underline">
                                        Email
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div class="sm:flex sm:items-center sm:justify-between">
                    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2024{" "}
                        <a href="https://flowbite.com/" class="hover:underline">
                            ZestAroma™
                        </a>{" "}
                        Đã đăng ký Bản quyền
                    </span>
                    <div class="flex mt-4 sm:justify-center sm:mt-0">
                        <span class="sr-only">Dribbble account</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
