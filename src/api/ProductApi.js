import Api from "./Axios";

const url = "/products";

//lấy tất cả sản phẩm
const getAllProduct = (search = "") => {
    const parameters = {};

    // search
    if (search) {
        parameters.search = search;
    }

    return Api.get(`${url}`, { params: parameters });
};

//Lấy sản phẩm theo id
const getProductById = (id) => {
    return Api.get(`${url}/${id}`);
};

//Tạo sản phẩm
const createProduct = (values) => {
    const body = {
        //Thuộc tính của product
        Ten: values.Ten,
        Gia: values.Gia,
        SoLuongConLai: values.SoLuongConLai,
        TrangThai: values.TrangThai,
        SoLuot: values.SoLuot,
        MoTaChiTiet: values.MoTaChiTiet,
        CongDung: values.CongDung,
        ThanhPhan: values.ThanhPhan,
        Image: values.Image,
    };
    return Api.post(`${url}`, body);
};

const updateProduct = (id, values) => {
    const body = {
        Ten: values.Ten,
        Gia: values.Gia,
        SoLuongConLai: values.SoLuongConLai,
        TrangThai: values.TrangThai,
        SoLuot: values.SoLuot,
        MoTaChiTiet: values.MoTaChiTiet,
        CongDung: values.CongDung,
        ThanhPhan: values.ThanhPhan,
        Image: values.Image,
    };
    return Api.put(`${url}/${id}`, body);
};

const deleteProduct = (id) => {
    return Api.delete(`${url}/${id}`);
};

// export
const api = {
    getAllProduct,
    createProduct,
    updateProduct,
    getProductById,
    deleteProduct,
};
export default api;
