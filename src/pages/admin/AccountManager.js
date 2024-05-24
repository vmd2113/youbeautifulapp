import { faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Fragment, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProductManager.scss";
import AccountApi from "../../api/AccountApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HeadingTitle from "components/heading_title/HeadingTitle";
let account = {
    MaTaiKhoan: "",
    SoLuongConLai: "",
    MatKhau: "",
    TrangThai: "",
    NgayTao: "",
    Quyen: "",
};

const handleShowSuccessNotification = (message) => {
    toast.success(message, {
        toastId: "login-error", // Đặt một toastId cụ thể
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};

function AccountManager() {
    const [productData, setProductData] = useState([]);
    const [selectSearchValue, setSearchValue] = useState("");
    const [isShow, setShow] = useState(false);
    const [isUpdate, setUpdate] = useState(false);
    const [isShow3, setShow3] = useState(false);
    const [indexCheck, setIdexCheck] = useState(undefined);

    const [updateProductData, setUpdateProductData] = useState({
        MaTaiKhoan: "",
        MatKhau: "",
        TrangThai: "",
        NgayTao: "",
        Quyen: "",
    });

    const getProducData = useRef({});

    //todo getListProduct
    getProducData.current = async (selectSearchValue) => {
        try {
            const result = await AccountApi.getAllAccount();
            setProductData(result);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (event) => {
        setSearchValue(event.target.value);
    };

    // Khi mở hộp thoại cập nhật, cập nhật trạng thái updateProductData
    const openUpdateDialog = (index) => {
        setUpdateProductData(productData[index]);
        setIdexCheck(index);
        setShow(true);
        setUpdate(true);
    };
    //Todo update product
    const handleUpdateProduct = async (id) => {
        try {
            await AccountApi.updateAccount(1, updateProductData);
            getProducData(selectSearchValue);
        } catch (error) {
            console.log(error);
        }
    };
    //Todo create product
    const handleCreateProduct = async () => {
        try {
            await AccountApi.createAccount(updateProductData);
            getProducData(selectSearchValue);
            getProducData(selectSearchValue);
        } catch (error) {
            console.log(error);
        }
    };
    //Todo delete product
    const handleDeleteProduct = async (index) => {
        try {
            console.log(index);
            await AccountApi.deleteAccount(index);
            getProducData(selectSearchValue);
            getProducData(selectSearchValue);
        } catch (error) {
            console.log(error);
        }
    };

    // Cập nhật trạng thái updateProductData khi thay đổi giá trị của ô input
    const handleInputChange = (event) => {
        setUpdateProductData({
            ...updateProductData,
            [event.target.name]: event.target.value,
        });
    };

    useEffect(() => {
        getProducData.current();
        return () => {};
    }, []);

    return (
        <div>
            <ToastContainer />
            <div className="product-manager-head">
                <HeadingTitle className="italic text-2xl">
                    Quản lí tài khoản
                </HeadingTitle>
                <div className="product-manager-search">
                    <input
                        className="product-manager-search-inp"
                        type="text"
                        placeholder="Search"
                        value={selectSearchValue}
                        onChange={handleChange}
                    />
                    <button
                        className="manager-filter-btn "
                        onClick={() => {
                            getProducData(selectSearchValue);
                            getProducData(selectSearchValue);
                        }}
                    >
                        Search
                    </button>
                </div>
            </div>
            <div className="product-manager-create-div">
                <button
                    onClick={() => {
                        setShow(true);
                        setUpdate(false);
                        setUpdateProductData(account);
                    }}
                    className="w-30 px-5 py-3 bg-primary font-bold rounded-lg text-whiteSoft"
                >
                    {" "}
                    Thêm mới
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
            <div className="product-manager-body font-primary">
                <div className="product-manager-wrapper">
                    <div className="product-manager-table-div">
                        <table className="product-table">
                            <thead>
                                <tr>
                                    <th>Mã tài khoản</th>
                                    <th>MK</th>
                                    <th>Trạng thái</th>
                                    <th>Ngày tạo</th>
                                    <th>Quyền</th>
                                    <th>Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productData.map((product, index) => (
                                    <tr key={product.id}>
                                        <td>{product.MaTaiKhoan}</td>
                                        <td>{product.MatKhau}</td>
                                        <td>{product.TrangThai}</td>
                                        <td>{product.NgayTao}</td>
                                        <td>{product.Quyen}</td>
                                        <td>
                                            <button
                                                className="product-manager-update-btn"
                                                onClick={() => {
                                                    console.log(product.id);
                                                    setIdexCheck(product.id);
                                                    setUpdate(true);
                                                    setShow(true);
                                                    openUpdateDialog(index);
                                                }}
                                            >
                                                <FontAwesomeIcon icon={faPen} />
                                            </button>
                                            <button
                                                className="product-manager-delete-btn"
                                                onClick={() => {
                                                    console.log(product.id);
                                                    setIdexCheck(index);
                                                    setShow3(true);
                                                }}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faTrash}
                                                />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="product-manager-bottom"></div>
            {isShow ? (
                <div className="box-background">
                    <div className="box-box">
                        <div className="box-content">
                            <p className="box-title">
                                {isUpdate
                                    ? "Cập nhật tài khoản"
                                    : "Tạo mới tài khoản"}
                            </p>
                        </div>
                        <div className="box-body">
                            <div>
                                <label>id</label>
                                <input
                                    type="text"
                                    name="MaTaiKhoan"
                                    id="MaTaiKhoan"
                                    value={updateProductData.MaTaiKhoan}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label>Password</label>
                                <input
                                    value={updateProductData.MatKhau}
                                    onChange={handleInputChange}
                                    type="text"
                                    name="MatKhau"
                                    id="MatKhau"
                                />
                            </div>
                            <div>
                                <label>Trạng thái</label>
                                <input
                                    value={updateProductData.TrangThai}
                                    onChange={handleInputChange}
                                    type="text"
                                    name="TrangThai"
                                    id="TrangThai"
                                />
                            </div>
                            <div>
                                <label>Ngày tạo</label>
                                <input
                                    value={updateProductData.NgayTao}
                                    onChange={handleInputChange}
                                    type="date"
                                    name="NgayTao"
                                    id="NgayTao"
                                />
                            </div>
                            <div>
                                <label>Quyền</label>
                                <input
                                    value={updateProductData.Quyen}
                                    onChange={handleInputChange}
                                    type="text"
                                    name="Quyen"
                                    id="Quyen"
                                    defaultValue="USER"
                                />
                            </div>
                        </div>
                        <div className="box-btn">
                            <button
                                className="box-btn-first"
                                onClick={() => {
                                    console.log(updateProductData);
                                    {
                                        isUpdate
                                            ? handleUpdateProduct(
                                                  productData[indexCheck].id
                                              )
                                            : handleCreateProduct();
                                    }
                                    setShow(false);
                                }}
                            >
                                {isUpdate ? "Cập nhật" : "Tạo mới"}
                            </button>
                            <button
                                className="box-btn-second"
                                onClick={() => {
                                    setShow(false);
                                }}
                            >
                                Thoát
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <Fragment />
            )}
            {isShow3 ? (
                <div className="box-background">
                    <div className="box-box-delete">
                        <div className="box-content">
                            <p className="box-title">
                                Xóa sản phẩm{" "}
                                {productData[indexCheck].MaTaiKhoan}
                            </p>
                        </div>
                        <div className="box-btn">
                            <button
                                className="box-btn-first"
                                onClick={() => {
                                    handleDeleteProduct(
                                        productData[indexCheck].id
                                    );
                                    setShow3(false);
                                    handleShowSuccessNotification(
                                        "Delete successfully!!"
                                    );
                                }}
                            >
                                Xóa
                            </button>
                            <button
                                className="box-btn-second"
                                onClick={() => {
                                    setShow3(false);
                                }}
                            >
                                Thoát
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <Fragment />
            )}
        </div>
    );
}

export default AccountManager;
