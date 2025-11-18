type LazyImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

export const LazyImage = (props: LazyImageProps) => {
	return <img loading="lazy" {...props} />;
};
