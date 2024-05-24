import Api from "./Axios";

const url = "/account";

//lấy tất cả sản phẩm
const getAllAccount = () => {
    return Api.get(`${url}`);
};

//Lấy sản phẩm theo id
const getAccountById = (id) => {
    return Api.get(`${url}/${id}`);
};

//Tạo sản phẩm
const createAccount = (values) => {
    const body = {
        //Thuộc tính của product
        MaTaiKhoan: values.MaTaiKhoan,
        MatKhau: values.MatKhau,
        TrangThai: values.TrangThai,
        NgayTao: values.NgayTao,
        Quyen: values.Quyen,
    };
    return Api.post(`${url}`, body);
};

const updateAccount = (id, values) => {
    const body = {
        MaTaiKhoan: values.MaTaiKhoan,
        MatKhau: values.MatKhau,
        TrangThai: values.TrangThai,
        NgayTao: values.NgayTao,
        Quyen: values.Quyen,
    };
    return Api.put(`${url}/${id}`, body);
};

const deleteAccount = (id) => {
    return Api.delete(`${url}/${id}`);
};

// export
const api = {
    getAllAccount,
    createAccount,
    updateAccount,
    getAccountById,
    deleteAccount,
};
export default api;
