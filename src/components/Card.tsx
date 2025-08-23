import { cn } from "../lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
	return <div className={cn(" bg-white flex flex-col gap-4 ", className)} {...props} />;
}

interface CardImageProps extends React.HTMLAttributes<HTMLElement> {}

Card.Image = function CardImage({ className, ...props }: CardImageProps) {
	return (
		<figure
			className={cn(
				"w-full h-[250px] sm:h-[350px] rounded-[16px] md:rounded-[20px] overflow-hidden",
				className
			)}
			{...props}
		/>
	);
};

interface CardContentProps extends React.HtmlHTMLAttributes<HTMLElement> {}
Card.Content = function CardContent({ className, ...props }: CardContentProps) {
	return (
		<div
			className={cn("flex flex-col gap-6 text-[14px] md:text-[16px] leading-[1em]", className)}
			{...props}
		/>
	);
};

interface CardTitleProps extends React.HTMLAttributes<HTMLParagraphElement> {}

Card.Title = function CardTitle({ className, ...props }: CardTitleProps) {
	return (
		<div
			className={cn(
				"flex items-center justify-between font-semibold font-secondary text-gray-500",
				className
			)}
			{...props}
		/>
	);
};

interface CardSubTitleProps extends React.HTMLAttributes<HTMLParagraphElement> {}

Card.SubTitle = function CardSubTitle({ className, ...props }: CardSubTitleProps) {
	return (
		<p
			className={cn("font-semibold font-secondary text-gray-700 truncate min-w-0", className)}
			{...props}
		/>
	);
};

export default Card;
