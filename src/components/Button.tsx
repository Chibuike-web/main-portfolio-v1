import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import type { ButtonHTMLAttributes } from "react";

export interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {}

export default function Button({ className, variant, size, fullWidth, ...props }: ButtonProps) {
	return (
		<button
			className={cn(buttonVariants({ variant, size, fullWidth }), className)}
			disabled={variant === "disabled"}
			{...props}
		/>
	);
}

const buttonVariants = cva("flex items-center justify-between font-semibold cursor-pointer", {
	variants: {
		variant: {
			primary: "bg-gray-700 text-white",
			outline: "border border-gray-500 text-gray-500",
			disabled: "bg-gray-700 text-white opacity-50",
		},
		size: {
			sm: "h-[36px] pl-[12px] pr-[10px] text-sm",
			md: "h-[40px] pl-[12px] pr-[10px] text-sm",
			lg: "h-[48px] pl-[12px] pr-[10px] text-base",
		},
		fullWidth: {
			true: "w-full",
			false: "w-auto",
		},
		defaultVariants: {
			variant: "primary",
			size: "md",
			fullWidth: true,
		},
	},
});
