import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "ghost";
    loading?: boolean;
}

const Button = ({
    variant = "primary",
    loading = false,
    children,
    disabled,
    ...props
}: ButtonProps) => {
    return (
        <button
            data-variant={variant}
            disabled={disabled || loading}
            aria-busy={loading}
            className="p-4 bg-blue-500 text-white"
            {...props}
        >
            {loading ? "Loading..." : children}
        </button>
    );
};

export default Button;
