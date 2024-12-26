import React from 'react';
import './button.css';

const Button = ({ label, variant, onClick, type = "button", className = "" }) => {
    return (
        <button
            className={`btn ${variant}Btn ${className}`}
            onClick={onClick}
            type={type}
        >
            {label}
        </button>
    )
}

export default Button;
