import { motion, type MotionProps } from "motion/react";
import { memo, type ElementType, type HTMLAttributes } from "react";

type MotionComponentProps = MotionProps &
	HTMLAttributes<HTMLElement> & {
		as?: ElementType;
	};

export const MotionComp = ({ as: Component = "div", ...props }: MotionComponentProps) => {
	const MotionComponent = motion.create(Component);

	return <MotionComponent {...props} />;
};

export const MotionComponent = memo(MotionComp);
