import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";
// import { withErrorBoundary } from "react-error-boundary";
// import ErrorComponents from "../common/ErrorComponents";
import { rest } from "lodash";

const Input = (props) => {
    const { control, name, type = "text", error, ...rest } = props;

    const { field } = useController({
        control,
        name,
        defaultValue: "",
    });

    return (
        <div className="relative">
            <input
                id={name}
                type={type}
                className="w-full px-6 py-4 text-sm font-medium rounded-xl placeholder:text-text4 "
                {...rest}
                {...field}
            />
            <span className="text-red-500 pt-5 text-sm m-2 p-2">{error}</span>
        </div>
    );
};
Input.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    control: PropTypes.any.isRequired,
    error: PropTypes.string,
};
export default Input;
