import { NavLink } from "react-router";
import { BackArrowIcon } from "../assets/icons";
import { useCopyEmail } from "../Hooks";
import { AnimatePresence, motion } from "motion/react";

export default function Footer() {
	const { copyStatus, copyEmail } = useCopyEmail();

	return (
		<footer className="py-10 text-gray-700 bg-white">
			<div className="mx-auto w-full max-w-[1296px] grid grid-cols-1 md:grid-cols-3 gap-12 xl:gap-6 px-6 xl:px-0">
				<div>
					<p className="font-semibold text-gray-700 leading-[1.6] max-w-[259px]">
						Designed and Developed by Chibuike ©2025
					</p>
				</div>

				<div className="flex items-start gap-8">
					<div className="flex flex-col gap-6 w-full">
						<p className="font-semibold leading-[1]">Sitemap</p>
						<div className="flex flex-col gap-4 leading-[1]">
							<NavLink
								to="/"
								className={({ isActive }) => `text-gray-700  ${isActive ? " font-semibold" : ""}`}
							>
								Work
							</NavLink>
							<NavLink
								to="/about"
								className={({ isActive }) => `text-gray-700  ${isActive ? " font-semibold" : ""}`}
							>
								About
							</NavLink>
							<a href="/chibuike-maduabuchi-resume.pdf" target="_blank" rel="noopener noreferrer">
								Resume
							</a>
						</div>
					</div>
					<div className="flex flex-col gap-6 w-full">
						<p className="font-semibold leading-[1]">Connect</p>
						<div className="flex flex-col gap-4 leading-[1]">
							<a
								href="https://www.linkedin.com/in/chibuike-maduabuchi"
								target="_blank"
								rel="noopener noreferrer"
							>
								Linkedin
							</a>
							<a href="https://github.com/Chibuike-web" target="_blank" rel="noopener noreferrer">
								Github
							</a>
							<a href="https://codepen.io/chibuike-web" target="_blank" rel="noopener noreferrer">
								Codepen
							</a>
							<a
								href="https://dribbble.com/maduabuchichibuike"
								target="_blank"
								rel="noopener noreferrer"
							>
								Dribbble
							</a>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-14 xl:h-full">
					<div className="flex flex-col gap-2 relative">
						<p>Let's build something together.</p>
						<button
							onClick={copyEmail}
							className="font-semibold break-words text-left cursor-pointer select-all w-full"
						>
							chibuikemaduabuchi2023@gmail.com
						</button>
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
					<button
						className="flex gap-[6px] mt-auto items-center w-max"
						onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
					>
						<BackArrowIcon /> <span className="font-semibold">Back to the top</span>
					</button>
				</div>
			</div>
		</footer>
	);
}
