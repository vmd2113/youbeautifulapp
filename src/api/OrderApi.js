import Api from "./Axios";

const url = "/order";

//lấy tất cả sản phẩm
const getAllOrder = () => {
    return Api.get(`${url}`);
};

//Lấy sản phẩm theo id
const getOrderById = (id) => {
    return Api.get(`${url}/${id}`);
};

//Tạo sản phẩm
const createOrder = (values) => {
    const body = {
        //Thuộc tính của product
        NgayDat: values.NgayDat,
        TrangThai: values.TrangThai,
        TongGiaTri: values.TongGiaTri,
        Ten: values.Ten,
        Email: values.Email,
        Sdt: values.Sdt,
        DiaChi: values.DiaChi,
        DichVuVanChuyen: values.DichVuVanChuyen,
    };
    return Api.post(`${url}`, body);
};

const updateOrder = (id, values) => {
    const body = {
        NgayDat: values.NgayDat,
        TongGiaTri: values.TongGiaTri,
        MaKhachHang: values.MaKhachHang,

        DichVuVanChuyen: values.DichVuVanChuyen,
    };
    return Api.put(`${url}/${id}`, body);
};

const deleteOrder = (id) => {
    return Api.delete(`${url}/${id}`);
};

// export
const api = {
    getAllOrder,
    createOrder,
    updateOrder,
    getOrderById,
    deleteOrder,
};
export default api;
