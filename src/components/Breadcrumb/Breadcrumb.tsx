import { ChevronRight } from "lucide-react";

type BreadcrumbItem = {
    label: string;
    href?: string;
};

type BreadcrumbProps = {
    items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav
            aria-label="Breadcrumb"
            className="flex items-center text-sm text-gray-500"
        >
            {items.map((item, index) => {
                const isLast = index === items.length - 1;

                return (
                    <div key={index} className="flex items-center">
                        {item.href && !isLast ? (
                            <a
                                href={item.href}
                                className="hover:text-black transition-colors"
                            >
                                {item.label}
                            </a>
                        ) : (
                            <span className="font-medium text-black">
                                {item.label}
                            </span>
                        )}

                        {!isLast && (
                            <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
                        )}
                    </div>
                );
            })}
        </nav>
    );
}
