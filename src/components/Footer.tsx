import { NavLink } from "react-router";
import { BackArrowIcon } from "../assets/icons";
import { AnimatePresence, motion } from "motion/react";
import { useCopyEmail } from "../hooks/useCopyEmail";
import { cn } from "../lib/utils";

export function Footer() {
	const { copyStatus, copyEmail } = useCopyEmail();

	return (
		<footer className="py-10 text-gray-700 bg-white">
			<div className="mx-auto w-full max-w-[81rem] grid grid-cols-1 md:grid-cols-3 gap-12 xl:gap-6 px-6 xl:px-0">
				<div>
					<p className="font-semibold text-gray-700 leading-[1.6] max-w-[16.1875rem]">
						Designed and Developed by Chibuike ©2026
					</p>
				</div>

				<div className="flex items-start gap-8">
					<div className="flex flex-col gap-6 w-full">
						<p className="font-semibold leading-[1]">Sitemap</p>
						<div className="flex flex-col gap-4 leading-[1]">
							<NavLink
								to="/"
								className={({ isActive }) =>
									cn("text-gray-700 w-max", isActive ? "font-semibold" : "", "button")
								}
							>
								Work
							</NavLink>
							<NavLink
								to="/about"
								className={({ isActive }) =>
									cn("text-gray-700 w-max", isActive ? "font-semibold" : "", "button")
								}
							>
								About
							</NavLink>
							<a
								href="/chibuike-maduabuchi-resume.pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="w-max button"
							>
								Resume
							</a>
						</div>
					</div>
					<div className="flex flex-col gap-6 w-full">
						<p className="font-semibold leading-[1]">Connect</p>
						<div className="flex flex-col gap-4 leading-[1] w-max">
							<a
								href="https://www.linkedin.com/in/chibuike-maduabuchi"
								target="_blank"
								rel="noopener noreferrer"
								className="button w-max"
							>
								Linkedin
							</a>
							<a
								href="https://github.com/Chibuike-web"
								target="_blank"
								rel="noopener noreferrer"
								className="button w-max"
							>
								Github
							</a>
							<a
								href="https://codepen.io/chibuike-web"
								target="_blank"
								rel="noopener noreferrer"
								className="button w-max"
							>
								Codepen
							</a>
							<a
								href="https://dribbble.com/maduabuchichibuike"
								target="_blank"
								rel="noopener noreferrer"
								className="button"
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
						className="flex gap-1.5 mt-auto items-center w-max"
						onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
					>
						<BackArrowIcon /> <span className="font-semibold">Back to the top</span>
					</button>
				</div>
			</div>
		</footer>
	);
}
