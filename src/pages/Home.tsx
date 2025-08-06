import { useState } from "react";
import { CopyIcon, LinkedinLogo, RightArrowIcon } from "../assets/icons";
import { CustomMotion } from "../components/Button";
import Card from "../components/Card";
import { useCopyEmail } from "../Hooks";
import { projects } from "../lib/utils";
import type { ProjectType } from "../lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { v4 as uuidv4 } from "uuid";

const titles = [
	{
		id: uuidv4(),
		title: "Product Designer",
	},
	{
		id: uuidv4(),
		title: "Interaction Designer",
	},

	{
		id: uuidv4(),
		title: "Designer Engineer",
	},
	{
		id: uuidv4(),
		title: "UI Engineer",
	},
	{
		id: uuidv4(),
		title: "UX Engineer",
	},
	{
		id: uuidv4(),
		title: "Creative Technologist",
	},
	{
		id: uuidv4(),
		title: "Fullstack Engineer",
	},
];

export default function Home() {
	const { copyStatus, copyEmail } = useCopyEmail();
	const repeatedTitles = [...titles, ...titles];

	return (
		<div>
			<section className="grid grid-cols-1 md:grid-cols-3 md:gap-x-6 gap-y-5 md:gap-y-10 mx-auto w-full max-w-[1296px] px-6 xl:px-0 mt-[52px] sm:mt-[104px]">
				<h1 className="flex flex-col gap-1 font-semibold tracking-[-0.02em] text-[clamp(2rem,calc(3vw+2vh),4rem)] col-span-3 lg:col-span-2 text-gray-700">
					<span>Hi, I’m Chibuike</span>
					<div className="overflow-hidden h-[1.2em] relative">
						<motion.div
							className="flex flex-col absolute"
							animate={{ y: ["0%", "-100%"] }}
							transition={{
								duration: titles.length * 3,
								ease: "linear",
								repeat: Infinity,
							}}
						>
							{repeatedTitles.map((item, i) => (
								<p key={i}>{item.title}</p>
							))}
						</motion.div>
					</div>
				</h1>
				<div className="flex flex-col gap-10 col-span-3 lg:col-span-1">
					<p className="leading-[1.6] text-gray-500 font-medium w-full">
						I’m a hybrid of{" "}
						<span className="font-semibold text-gray-700">designer and developer</span>. I blend{" "}
						<span className="font-semibold text-gray-700">design and code</span> to build{" "}
						<span className="font-semibold text-gray-700">beautiful,</span>{" "}
						<span>human-centered software</span> that{" "}
						<span className="font-semibold text-gray-700">looks good</span> and{" "}
						<span className="font-semibold text-gray-700">feels great</span> to use.
					</p>
					<div className="flex items-center gap-6">
						<CustomMotion
							size="sm"
							variant="primary"
							className="flex gap-[6px] items-center bg-gray-100 text-gray-700 rounded-full"
							onClick={copyEmail}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							Copy email <CopyIcon />{" "}
							{copyStatus && (
								<motion.span
									initial={{ opacity: 0, y: -5 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -5 }}
									transition={{ duration: 0.2 }}
									className="bottom-[-10px] left-0 translate-y-1/1 absolute text-gray-700"
								>
									{copyStatus}
								</motion.span>
							)}
						</CustomMotion>

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
				</div>
			</section>
			<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 mx-auto w-full max-w-[1296px] px-6 xl:px-0 my-[52px] md:my-[104px]">
				{projects.map((item) => (
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
				))}
			</section>
		</div>
	);
}

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
