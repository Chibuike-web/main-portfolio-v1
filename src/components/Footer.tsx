import { NavLink } from "react-router";
import { BackArrowIcon } from "../assets/icons";
import { handleCopy } from "../utils";

export default function Footer() {
	return (
		<footer className="py-10 text-gray-700">
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
							<a href="https://www.linkedin.com/in/chibuike-maduabuchi">Linkedin</a>
							<a href="https://github.com/Chibuike-web">Github</a>
							<a href="https://codepen.io/chibuike-web">Codepen</a>
							<a href="https://dribbble.com/maduabuchichibuike">Dribbble</a>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-14 xl:h-full">
					<div className="flex flex-col gap-2">
						<p>Let's build something together.</p>
						<button
							onClick={() => handleCopy()}
							className="font-semibold break-words text-left cursor-pointer select-all"
						>
							chibuikemaduabuchi2023@gmail.com
						</button>
					</div>
					<button
						className="flex gap-[6px] mt-auto items-center"
						onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
					>
						<BackArrowIcon /> <span className="font-semibold">Back to the top</span>
					</button>
				</div>
			</div>
		</footer>
	);
}
