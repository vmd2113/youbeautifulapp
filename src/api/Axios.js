import axios from "axios";
import storage from "../storage/Storage.js";

const axiosClient = axios.create({
    baseURL: `https://664704e851e227f23ab0b6e0.mockapi.io/api/v1`,
    //'https://653e80399e8bd3be29df643b.mockapi.io/api/v1'
    // timeout: 5000, // default is `0` (no timeout)
    // responseType: 'json',
    // headers: {"Access-Control-Allow-Origin": "http://localhost:3000",
    //          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}
});

axiosClient.interceptors.request.use(async (config) => {
    const token = storage.getToken();
    if (token !== null && token !== undefined) {
        config.headers.Authorization = "Bearer " + token;
    }

    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data !== undefined) {
            // only get data
            return response.data;
        }

        return response;
    },
    (error) => {
        // Handle errors
        if (error.response) {
            throw error.response;
        } else if (error.request) {
            throw error.request;
        } else {
            throw error;
        }
    }
);

export default axiosClient;
