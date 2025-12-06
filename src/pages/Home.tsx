import { useState } from "react";
import { CopyIcon, LinkedinLogo, RightArrowIcon } from "../assets/icons";
import { CustomMotion } from "../components/Button";
import Card from "../components/Card";
import { motion, AnimatePresence } from "motion/react";
import { useSearchParams } from "react-router";
import { useCopyEmail } from "../hooks/useCopyEmail";
import { MotionComponent } from "../components/MotionComponent";
import { filter } from "../lib/filter";
import { projects, type ProjectType } from "../lib/data";

export default function Home() {
	return (
		<>
			<Hero />
			<Section />
		</>
	);
}

const Hero = () => {
	return (
		<section className="grid grid-cols-1 md:grid-cols-3 md:gap-x-6 gap-y-5 md:gap-y-10 mx-auto w-full max-w-[1296px] px-6 xl:px-0 mt-[52px] sm:mt-[104px]">
			<h1 className="flex flex-col gap-1 font-semibold tracking-[-0.02em] text-[clamp(2rem,calc(3vw+2vh),4rem)] col-span-3 lg:col-span-2 text-gray-700">
				<MotionComponent
					as="span"
					initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
					animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
				>
					Hi, I’m Chibuike
				</MotionComponent>
				<MotionComponent
					as="span"
					initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
					animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
				>
					Design Engineer
				</MotionComponent>
			</h1>
			<div className="flex flex-col gap-10 col-span-3 lg:col-span-1">
				<MotionComponent
					as="p"
					initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
					animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
					className="leading-[1.6] text-gray-500 font-medium w-full"
				>
					I’m a hybrid of{" "}
					<span className="font-semibold text-gray-700">designer and developer</span>. I blend{" "}
					<span className="font-semibold text-gray-700">design and code</span> to build{" "}
					<span className="font-semibold text-gray-700">beautiful,</span>{" "}
					<span>human-centered software</span> that{" "}
					<span className="font-semibold text-gray-700">looks good</span> and{" "}
					<span className="font-semibold text-gray-700">feels great</span> to use.
				</MotionComponent>
				<MotionComponent
					initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
					animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
				>
					<div className="flex items-center gap-2">
						<CopyEmail />
						<CustomMotion
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							size="sm"
							variant="primary"
							as="a"
							href="https://www.linkedin.com/in/chibuike-maduabuchi"
							target="_blank"
							rel="noopener noreferrer"
							className="flex gap-[6px] items-center bg-gray-100 text-gray-700 rounded-full"
						>
							Linkedin <LinkedinLogo />
						</CustomMotion>
					</div>
				</MotionComponent>
			</div>
		</section>
	);
};

const CopyEmail = () => {
	const { copyStatus, copyEmail } = useCopyEmail();

	return (
		<div className="relative">
			<CustomMotion
				size="sm"
				variant="secondary"
				className="flex gap-[6px] rounded-full"
				onClick={copyEmail}
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
			>
				Copy email <CopyIcon />
			</CustomMotion>
			<AnimatePresence>
				{copyStatus && (
					<motion.span
						initial={{ opacity: 0, y: -5 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -5 }}
						transition={{ duration: 0.2 }}
						className="bottom-[-10px] left-0 translate-y-1/1 absolute text-gray-700 font-medium"
					>
						{copyStatus}
					</motion.span>
				)}
			</AnimatePresence>
		</div>
	);
};

const Section = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const category = searchParams.get("category") ?? "all";
	const filteredProjects =
		category === "all" ? projects : projects.filter((p) => p.category === category);
	return (
		<>
			<section className="flex gap-2 mx-auto w-full max-w-[1296px] px-6 xl:px-0 mt-[52px] md:mt-[104px]">
				{filter.map((c, i) => (
					<CustomMotion
						initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
						whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 * i }}
						viewport={{ once: true, amount: 0.2 }}
						key={c.id}
						variant={category === c.id ? "primary" : "secondary"}
						className="py-[10px] px-[14px]"
						onClick={() => setSearchParams({ category: c.id })}
					>
						{c.text}
					</CustomMotion>
				))}
			</section>
			<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 mx-auto w-full max-w-[1296px] px-6 xl:px-0 mb-[52px] mt-[20px] md:mb-[104px] md:mt-[40px]">
				{filteredProjects.map((item, i) => (
					<MotionComponent
						key={item.id}
						initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
						whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 * i }}
						viewport={{ once: true, amount: 0.2 }}
					>
						<Card key={item.id}>
							<Card.Image>
								<img src={item.image} alt={item.title} className="w-full h-full object-cover" />
							</Card.Image>
							<Card.Content>
								<div className="flex flex-col gap-[10px] px-1">
									<Card.Title>
										<h3>{item.title.toUpperCase()}</h3> <p>{item.year}</p>
									</Card.Title>
									<Card.SubTitle>{item.subtitle.toUpperCase()}</Card.SubTitle>
								</div>
								<Buttons type={item.type} />
							</Card.Content>
						</Card>
					</MotionComponent>
				))}
			</section>
		</>
	);
};

const Buttons = ({ type }: { type: ProjectType | ProjectType[] }) => {
	const [hovered, setHovered] = useState(false);
	const [hoveredId, setHoveredId] = useState("");
	return (
		<>
			{Array.isArray(type) ? (
				<div className="flex gap-[10px]">
					<CustomMotion
						variant="primary"
						size="md"
						fullWidth
						as="a"
						href={type[0].link}
						target="_blank"
						rel="noopener noreferrer"
						onMouseEnter={() => setHoveredId("primary")}
						onMouseLeave={() => setHoveredId("")}
						whileTap={{ scale: 0.95 }}
					>
						{type[0].value}
						<AnimatePresence>
							<motion.div
								key="arrow"
								initial={{ x: 0 }}
								animate={{ x: hoveredId === "primary" ? -10 : 0 }}
								transition={{ type: "spring", stiffness: 300, damping: 20 }}
							>
								<RightArrowIcon className="white" />
							</motion.div>
						</AnimatePresence>
					</CustomMotion>
					<CustomMotion
						variant="secondary"
						size="md"
						fullWidth
						as="a"
						href={type[1].link}
						target="_blank"
						rel="noopener noreferrer"
						onMouseEnter={() => setHoveredId("secondary")}
						onMouseLeave={() => setHoveredId("")}
						whileTap={{ scale: 0.95 }}
					>
						{type[1].value}
						<AnimatePresence>
							<motion.div
								key="arrow"
								initial={{ x: 0 }}
								animate={{ x: hoveredId === "secondary" ? -10 : 0 }}
								transition={{ type: "spring", stiffness: 300, damping: 20 }}
							>
								<RightArrowIcon />
							</motion.div>
						</AnimatePresence>
					</CustomMotion>
				</div>
			) : type.value === "Case Study" ? (
				<CustomMotion
					onMouseEnter={() => setHovered(true)}
					onMouseLeave={() => setHovered(false)}
					whileTap={{ scale: 0.95 }}
					as="link"
					to={type.link}
					variant="primary"
					size="md"
					fullWidth
					className="flex items-center"
				>
					{type.value}

					<AnimatePresence>
						<motion.div
							key="arrow"
							initial={{ x: 0 }}
							animate={{ x: hovered ? -10 : 0 }}
							transition={{ type: "spring", stiffness: 300, damping: 20 }}
						>
							<RightArrowIcon className="white" />
						</motion.div>
					</AnimatePresence>
				</CustomMotion>
			) : (
				<CustomMotion
					as="a"
					href={type.link}
					variant="primary"
					size="md"
					fullWidth
					target="_blank"
					rel="noopener noreferrer"
					onMouseEnter={() => setHovered(true)}
					onMouseLeave={() => setHovered(false)}
					whileTap={{ scale: 0.95 }}
				>
					{type.value}
					{
						<AnimatePresence>
							<motion.div
								key="arrow"
								initial={{ x: 0 }}
								animate={{ x: hovered ? -10 : 0 }}
								transition={{ type: "spring", stiffness: 300, damping: 20 }}
							>
								<RightArrowIcon className="white" />
							</motion.div>
						</AnimatePresence>
					}
				</CustomMotion>
			)}
		</>
	);
};
