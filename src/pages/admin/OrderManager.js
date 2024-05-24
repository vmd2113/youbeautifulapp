import { faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Fragment, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProductManager.scss";
import OrderApi from "../../api/OrderApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HeadingTitle from "components/heading_title/HeadingTitle";
let order = {
    MaDonHang: "",
    NgayDat: "",
    TongGiaTri: "",
    MaKhachHang: "",
    PhuongThucThanhToan: "",
    DichVuVanChuyen: "",
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

function OrderManager() {
    const [productData, setProductData] = useState([]);
    const [selectSearchValue, setSearchValue] = useState("");
    const [isShow, setShow] = useState(false);
    const [isUpdate, setUpdate] = useState(false);
    const [isShow3, setShow3] = useState(false);
    const [indexCheck, setIdexCheck] = useState(undefined);
    const getProducData = useRef(() => {});
    const [updateProductData, setUpdateProductData] = useState({
        MaDonHang: "",
        NgayDat: "",
        Gia: "",
        MaKhachHang: "",
        PhuongThucThanhToan: "",
        DichVuVanChuyen: "",
    });

    //todo getListProduct
    getProducData.current = async (selectSearchValue) => {
        try {
            const result = await OrderApi.getAllOrder();
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
            await OrderApi.updateOrder(1, updateProductData);
            getProducData(selectSearchValue);
        } catch (error) {
            console.log(error);
        }
    };
    //Todo create product
    const handleCreateProduct = async () => {
        try {
            await OrderApi.createOrder(updateProductData);
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
            await OrderApi.deleteOrder(index);
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
                    Quản lí đơn hàng
                </HeadingTitle>
                <div className="product-manager-search">
                    <input
                        className="product-manager-search-inp"
                        type="text"
                        placeholder="Tìm kiếm"
                        value={selectSearchValue}
                        onChange={handleChange}
                    />
                    <button
                        className="manager-filter-btn text-secondary"
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
                        setUpdateProductData(order);
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
                    {/* <button
                    className="manager-filter-btn product-manager-delete-btn"
                    onClick={() => {
                        if (selectedIds.length > 0) handleDeleteUser(selectedIds);
                        console.log(selectedIds);
                    }}
                    >
                    <FontAwesomeIcon icon={faTrash} />
                    </button> */}
                    <div className="product-manager-table-div">
                        <table className="product-table">
                            <thead>
                                <tr>
                                    <th>Mã đơn hàng</th>
                                    <th>Ngày đặt hàng</th>
                                    <th>Tổng giá trị</th>
                                    <th>Mã khách hàng</th>

                                    <th>Dịch vụ vận chuyển</th>
                                    <th>Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productData.map((product, index) => (
                                    <tr key={product.MaDonHang}>
                                        <td>{product.MaDonHang}</td>
                                        <td>{product.NgayDat}</td>
                                        <td>{product.TongGiaTri}</td>
                                        <td>{product.MaKhachHang}</td>

                                        <td>{product.DichVuVanChuyen}</td>
                                        <td>
                                            <button
                                                className="product-manager-update-btn"
                                                onClick={() => {
                                                    console.log(
                                                        product.MaDonHang
                                                    );
                                                    setIdexCheck(
                                                        product.MaDonHang
                                                    );
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
                                                    console.log(
                                                        product.MaDonHang
                                                    );
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
                                    ? "Cập nhật đơn hàng"
                                    : "Tạo mới đơn hàng"}
                            </p>
                        </div>
                        <div className="box-body">
                            <div>
                                <label>Ngày đặt</label>
                                <input
                                    type="date"
                                    name="NgayDat"
                                    id="NgayDat"
                                    value={updateProductData.NgayDat}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label>Tổng giá trị</label>
                                <input
                                    type="number"
                                    name="TongGiaTri"
                                    id="TongGiaTri"
                                    value={updateProductData.TongGiaTri}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label>Mã khách hàng</label>
                                <input
                                    value={updateProductData.MaKhachHang}
                                    onChange={handleInputChange}
                                    type="number"
                                    name="MaKhachHang"
                                    id="MaKhachHang"
                                />
                            </div>
                            <div>
                                <label>Phương thức thanh toán</label>
                                <input
                                    value={
                                        updateProductData.PhuongThucThanhToan
                                    }
                                    onChange={handleInputChange}
                                    type="text"
                                    name="PhuongThucThanhToan"
                                    id="PhuongThucThanhToan"
                                />
                            </div>
                            <div>
                                <label>Dịch vụ vận chuyển</label>
                                <input
                                    value={updateProductData.DichVuVanChuyen}
                                    onChange={handleInputChange}
                                    type="text"
                                    name="DichVuVanChuyen"
                                    id="DichVuVanChuyen"
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
                                Xóa sản phẩm {productData[indexCheck].NgayDat}
                            </p>
                        </div>
                        <div className="box-btn">
                            <button
                                className="box-btn-first"
                                onClick={() => {
                                    handleDeleteProduct(
                                        productData[indexCheck].MaDonHang
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

export default OrderManager;
