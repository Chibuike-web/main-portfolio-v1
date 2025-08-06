import { Link } from "react-router";
import type { LinkProps } from "react-router";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { motion, type MotionProps } from "motion/react";

type BaseProps = {
	className?: string;
	variant?: "primary" | "secondary";
	size?: "sm" | "md" | "lg";
	fullWidth?: boolean;
};

type ButtonAsButton = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };
type ButtonAsAnchor = BaseProps &
	AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a"; href: string };
type ButtonAsLink = BaseProps & LinkProps & { as: "link"; to: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor | ButtonAsLink;

export default function Button({ className, variant, size, fullWidth, as, ...props }: ButtonProps) {
	const classes = cn(buttonVariants({ variant, size, fullWidth }), className);
	if (as === "a") {
		return <a className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)} />;
	}
	if (as === "link") {
		return <Link className={classes} {...(props as LinkProps)} />;
	}

	return <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)} />;
}

const buttonVariants = cva(
	"flex items-center justify-between font-semibold cursor-pointer rounded-full",
	{
		variants: {
			variant: {
				primary: "pl-[16px] pr-[14px] bg-gray-700 text-white",
				secondary: "pl-[16px] pr-[14px] bg-gray-100 text-gray-700",
			},
			size: {
				sm: "h-[36px]  text-sm",
				md: "h-[40px]  text-sm",
				lg: "h-[48px]  text-base",
			},
			fullWidth: {
				true: "w-full",
				false: "w-auto",
			},
			defaultVariants: {
				variant: "primary",
				size: "md",
				fullWidth: true,
				as: "button",
			},
		},
	}
);

const MotionButton = motion(Button);
type MotionButtonProps = ButtonProps & MotionProps;

export const CustomMotion = (props: MotionButtonProps) => {
	return <MotionButton {...props} />;
};
