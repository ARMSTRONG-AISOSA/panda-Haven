import React from 'react';
import './button.css';

const Button = ({ label, variant, onClick, type = "button" }) => {
    return (
        <button
            className={`btn ${variant}Btn`}
            onClick={onClick}
            type={type}
        >
            {label}
        </button>
    )
}

export default Button;
