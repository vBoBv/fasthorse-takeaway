import React from "react";

const MenuField = ({ input, label, meta: { error, touched } }) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input} style={{ marginBottom: "5px" }} />
            {/* If touch is true and there is no error dont show error
    If touch is true and there is error then show error */}
            <div style={{ marginBottom: "20px", color: "red" }}>
                {touched && error}
            </div>
        </div>
    );
};

export default MenuField;
