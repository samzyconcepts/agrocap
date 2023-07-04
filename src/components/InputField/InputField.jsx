import React from "react";
import './InputField.css'

const InputField = ({ name, type, placeholder, label }) => {
    return (
        <div className="inputField">
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} id={name} placeholder={placeholder} />
        </div>
    );
};

export default InputField;
