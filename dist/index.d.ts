import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "ghost";
    loading?: boolean;
}
declare const Button: ({ variant, loading, children, disabled, ...props }: ButtonProps) => react_jsx_runtime.JSX.Element;

type BreadcrumbItem = {
    label: string;
    href?: string;
};
type BreadcrumbProps = {
    items: BreadcrumbItem[];
};
declare function Breadcrumb({ items }: BreadcrumbProps): react_jsx_runtime.JSX.Element;

export { Breadcrumb, Button };
