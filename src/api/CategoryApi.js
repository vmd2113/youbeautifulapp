import Api from "./Axios";

const url = "/category";

//lấy tất cả sản phẩm
const getAllCategory = () => {
    return Api.get(`${url}`);
};

//Lấy sản phẩm theo id
const getCategoryById = (id) => {
    return Api.get(`${url}/${id}`);
};

const deleteCategory = (id) => {
    return Api.delete(`${url}/${id}`);
};

// export
const api = { getAllCategory, getCategoryById, deleteCategory };
export default api;
