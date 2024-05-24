import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "components/button";
import { addItemToCart } from "redux_toolkit_/CartSlice";
import { toast, ToastContainer } from "react-toastify"; // Import ToastContainer and toast from react-toastify

const ProductItem = ({ item, src }) => {
    const dispatch = useDispatch();

    const handleClickAddToCart = (product) => {
        dispatch(addItemToCart(product));
        notifyAddToCartSuccess(); // Call notifyAddToCartSuccess when adding to cart
    };

    const notifyAddToCartSuccess = () => {
        toast.success("Thêm vào giỏ hàng thành công!"); // Display success toast
    };

    return (
        <div className="pb-4">
            <div className="h-64 pb-2">
                <img
                    src={src}
                    alt={item.name}
                    className="object-cover w-full h-full rounded-2xl"
                />
            </div>
            <h2 className="text-darkSoft text-2xl py-5 font-cach_dieu italic text-primary">
                {item.name}
            </h2>
            <div className="flex flex-col w-full">
                <div className="flex flex-col items-center justify-center pb-2 w-full">
                    <Button
                        className="bg-primary text-whiteSoft py-3 w-full"
                        onClick={() => handleClickAddToCart(item)}
                    >
                        Thêm vào giỏ hàng
                    </Button>
                </div>
                <div className="flex flex-col items-center justify-center pb-2 w-full">
                    <Link to={`/products/${item.id}`}>
                        <Button className="bg-primary text-whiteSoft py-4 w-full">
                            Xem chi tiết
                        </Button>
                    </Link>
                </div>
            </div>
            VND <span className="py-5 text-xl font-primary"> {item.price}</span>
            <div>
                <p className="text-text4">Thành phần: {item.thanh_phan}</p>
            </div>
            <ToastContainer />{" "}
            {/* Place the ToastContainer outside the ProductItem component */}
        </div>
    );
};

ProductItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        thanh_phan: PropTypes.string.isRequired,
    }).isRequired,
    src: PropTypes.string.isRequired,
};

export default ProductItem;
