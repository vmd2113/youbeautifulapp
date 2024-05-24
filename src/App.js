// App.js
import HomePage from "pages/client/HomePage";
import "./App.css";
import { Suspense } from "react";
import { Route, Routes } from "react-router";

import InstructionPage from "pages/client/InstructionPage";
import ProductPage from "pages/client/ProductPage";
import StoryPage from "pages/client/StoryPage";
import SignInPage from "pages/login-logout/SignInPage";
import SignUpPage from "pages/login-logout/SignUpPage";

import { Provider } from "react-redux";
import store from "redux_toolkit_/store";
import StoryDetail from "pages/client/StoryDetail";
import ProductDetail from "pages/client/ProductDetail";
import { AuthProvider } from "context/authContext";
import UserProfile from "pages/client/UserInfor";
import ChangePassword from "pages/client/UserChangePassword";
import CheckOut from "pages/client/CheckOut";
import AdminRouter from "routers/AdminRouter";
import AdminAccount from "layouts/admin/AdminAccount";
import AdminProduct from "layouts/admin/AdminProduct";
import AdminOrder from "layouts/admin/AdminOrder";
import UserRouter from "routers/UserRouter";
import Order from "pages/client/Order";
import Header from "layouts/header/Header";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Provider store={store}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/order" element={<CheckOut />} />
                            <Route
                                path="/order_user"
                                element={
                                    <UserRouter>
                                        <Order />
                                    </UserRouter>
                                }
                            />
                            <Route path="/profile" element={<UserProfile />} />
                            <Route
                                path="/profile/changepassword"
                                element={<ChangePassword />}
                            />
                            <Route path="/products" element={<ProductPage />} />
                            <Route
                                path="/products/:productId"
                                element={<ProductDetail />}
                            />
                            <Route path="/stories" element={<StoryPage />} />
                            <Route
                                path="/stories/:storyId"
                                element={<StoryDetail />}
                            />
                            <Route
                                path="/shopping-manual"
                                element={<InstructionPage />}
                            />
                            <Route
                                path="/admin/product"
                                element={
                                    <AdminRouter>
                                        <AdminProduct />
                                    </AdminRouter>
                                }
                            />
                            <Route
                                path="/admin/account"
                                element={
                                    <AdminRouter>
                                        <AdminAccount />
                                    </AdminRouter>
                                }
                            />
                            <Route
                                path="/admin/order"
                                element={
                                    <AdminRouter>
                                        <AdminOrder />
                                    </AdminRouter>
                                }
                            />
                            <Route path="/login" element={<SignInPage />} />
                            <Route path="/register" element={<SignUpPage />} />
                        </Routes>
                    </Suspense>
                </Provider>
            </AuthProvider>
        </div>
    );
}

export default App;
