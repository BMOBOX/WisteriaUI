import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Button", () => {
    it("renders children", () => {
        render(<Button>Click me</Button>);
        expect(
            screen.getByRole("button", { name: "Click me" }),
        ).toBeInTheDocument();
    });

    it("shows loading state", () => {
        render(<Button loading>Click me</Button>);
        const btn = screen.getByRole("button");
        expect(btn).toHaveAttribute("aria-busy", "true");
        expect(btn).toBeDisabled();
        expect(btn).toHaveTextContent("Loading...");
    });

    it("calls onClick when clicked", async () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Click me</Button>);
        await userEvent.click(screen.getByRole("button"));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("does not call onClick when disabled", async () => {
        const handleClick = jest.fn();
        render(
            <Button disabled onClick={handleClick}>
                Click me
            </Button>,
        );
        await userEvent.click(screen.getByRole("button"));
        expect(handleClick).not.toHaveBeenCalled();
    });
});
