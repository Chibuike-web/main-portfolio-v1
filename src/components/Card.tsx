import { cn } from "../lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
	return <div className={cn(" bg-white flex flex-col gap-4 ", className)} {...props} />;
}

Card.Image = function CardImage({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
	return (
		<figure
			className={cn(
				"w-full h-[15.625rem] sm:h-[21.875rem] rounded-2xl md:rounded-[1.25rem] overflow-hidden",
				className,
			)}
			{...props}
		/>
	);
};

Card.Content = function CardContent({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
	return (
		<div
			className={cn("flex flex-col gap-6 text-sm md:text-base leading-[1em]", className)}
			{...props}
		/>
	);
};

Card.Title = function CardTitle({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn(
				"flex items-center justify-between font-semibold font-secondary text-gray-500",
				className,
			)}
			{...props}
		/>
	);
};

Card.SubTitle = function CardSubTitle({
	className,
	...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
	return (
		<p
			className={cn("font-semibold font-secondary text-gray-700 truncate min-w-0", className)}
			{...props}
		/>
	);
};

