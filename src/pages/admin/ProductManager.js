import { faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Fragment, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProductManager.scss";
import ProductApi from "../../api/ProductApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HeadingTitle from "components/heading_title/HeadingTitle";

let product = {
    id: "",
    Ten: "",
    Gia: "",
    SoLuongConLai: "",
    TrangThai: "",
    SoLuot: "",
    MoTaChiTiet: "",
    Image: "",
    CongDung: "",
    ThanhPhan: "",
};

const handleShowSuccessNotification = (message) => {
    toast.success(message, {
        toastId: "login-error",
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};

function ProductManager() {
    const [productData, setProductData] = useState([]);
    const [selectSearchValue, setSearchValue] = useState("");
    const [isShow, setShow] = useState(false);
    const [isUpdate, setUpdate] = useState(false);
    const [isShow3, setShow3] = useState(false);
    const [indexCheck, setIdexCheck] = useState(undefined);

    const [updateProductData, setUpdateProductData] = useState({
        id: "",
        Ten: "",
        Gia: "",
        SoLuongConLai: "",
        TrangThai: "",
        SoLuot: "",
        MoTaChiTiet: "",
        Image: "",
        CongDung: "",
        ThanhPhan: "",
    });

    const getProducData = async (selectSearchValue) => {
        try {
            const result = await ProductApi.getAllProduct();
            setProductData(result);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (event) => {
        setSearchValue(event.target.value);
    };

    const openUpdateDialog = (index) => {
        setUpdateProductData(productData[index]);
        setIdexCheck(index);
        setShow(true);
        setUpdate(true);
    };

    const handleUpdateProduct = async (id) => {
        try {
            await ProductApi.updateProduct(id, updateProductData);
            getProducData(selectSearchValue);
        } catch (error) {
            console.log(error);
        }
    };

    const handleCreateProduct = async () => {
        try {
            await ProductApi.createProduct(updateProductData);
            getProducData(selectSearchValue);
            getProducData(selectSearchValue);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeleteProduct = async (index) => {
        try {
            console.log(index);
            await ProductApi.deleteProduct(index);
            getProducData(selectSearchValue);
            getProducData(selectSearchValue);
        } catch (error) {
            console.log(error);
        }
    };

    const handleInputChange = (event) => {
        setUpdateProductData({
            ...updateProductData,
            [event.target.name]: event.target.value,
        });
    };

    useEffect(() => {
        getProducData();
    }, []);

    return (
        <div>
            <ToastContainer />
            <div className="product-manager-head">
                <HeadingTitle className="italic">Quản lí sản phẩm</HeadingTitle>
                <div className="product-manager-search">
                    <input
                        className="product-manager-search-inp"
                        type="text"
                        placeholder="Search"
                        value={selectSearchValue}
                        onChange={handleChange}
                    />
                    <button
                        className="manager-filter-btn"
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
                        setUpdateProductData(product);
                    }}
                    className="w-30 px-5 py-3 bg-primary font-bold rounded-lg text-whiteSoft"
                >
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
                                    <th>Mã</th>
                                    <th>Tên</th>
                                    <th>Giá</th>
                                    <th>SLSP còn lại</th>
                                    <th>Trạng thái</th>
                                    <th>Số lượt</th>
                                    <th>Mô tả chi tiết</th>
                                    <th>Ảnh</th>
                                    <th>Công dụng</th>
                                    <th>Thành phần</th>
                                    <th>Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productData.map((product, index) => (
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td>{product.Ten}</td>
                                        <td>{product.Gia}</td>
                                        <td>{product.SoLuongConLai}</td>
                                        <td>
                                            {product.TrangThai
                                                ? "true"
                                                : "false"}
                                        </td>
                                        <td>{product.SoLuot}</td>
                                        <td>{product.MoTaChiTiet}</td>
                                        <td>
                                            <img
                                                src={product.Image}
                                                alt="image"
                                            />
                                        </td>
                                        <td>{product.CongDung}</td>
                                        <td>{product.ThanhPhan}</td>
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
                                    ? "Cập nhật sản phẩm"
                                    : "Tạo mới sản phẩm"}
                            </p>
                        </div>
                        <div className="box-body">
                            <div>
                                <label>Tên</label>
                                <input
                                    type="text"
                                    name="Ten"
                                    id="Ten"
                                    value={updateProductData.Ten}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label>Giá</label>
                                <input
                                    type="number"
                                    name="Gia"
                                    id="Gia"
                                    value={updateProductData.Gia}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label>SL còn lại</label>
                                <input
                                    value={updateProductData.SoLuongConLai}
                                    onChange={handleInputChange}
                                    type="number"
                                    name="SoLuongConLai"
                                    id="SoLuongConLai"
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
                                <label>Số lượt</label>
                                <input
                                    value={updateProductData.SoLuot}
                                    onChange={handleInputChange}
                                    type="number"
                                    name="SoLuot"
                                    id="SoLuot"
                                />
                            </div>
                            <div>
                                <label>Mô tả chi tiết</label>
                                <input
                                    value={updateProductData.MoTaChiTiet}
                                    onChange={handleInputChange}
                                    type="text"
                                    name="MoTaChiTiet"
                                    id="MoTaChiTiet"
                                />
                            </div>
                            <div>
                                <label>Ảnh</label>
                                <input
                                    value={updateProductData.Image}
                                    onChange={handleInputChange}
                                    type="text"
                                    name="Image"
                                    id="Image"
                                />
                            </div>
                            <div>
                                <label>Công dụng</label>
                                <input
                                    value={updateProductData.CongDung}
                                    onChange={handleInputChange}
                                    type="text"
                                    name="CongDung"
                                    id="CongDung"
                                />
                            </div>
                            <div>
                                <label>Thành phần</label>
                                <input
                                    value={updateProductData.ThanhPhan}
                                    onChange={handleInputChange}
                                    type="text"
                                    name="ThanhPhan"
                                    id="ThanhPhan"
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
                                                  updateProductData.id
                                              )
                                            : handleCreateProduct();
                                    }
                                    setShow(false);
                                }}
                            >
                                {isUpdate ? "Cập nhật" : "Tạo mới"}
                            </button>
                            <button
                                className="box-btn-second mb-4"
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
                                Xóa sản phẩm {productData[indexCheck].Ten}
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

export default ProductManager;
