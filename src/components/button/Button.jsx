import React from 'react';
import './button.css';

// children Prop: This allows you to pass any JSX element (like icons) inside the Button component.
const Button = ({ label, variant, onClick, type, className = "", children }) => {
    return (
        <button
            className={`btn ${variant}Btn ${className}`}
            onClick={onClick}
            type={type}
        >
            {children}
            {label}
        </button>
    )
}

export default Button;
