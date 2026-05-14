import Breadcrumb from "./Breadcrumb";

export default {
    title: "Components/Breadcrumb",
    component: Breadcrumb,
};

export const Default = () => {
    return (
        <Breadcrumb
            items={[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products" },
                { label: "Product 1" },
            ]}
        />
    );
};
