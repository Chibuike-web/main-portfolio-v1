import { NavLink } from "react-router";
import { CancelIcon, Logo, MenuIcon, RightArrowIcon } from "../assets/icons";
import { useEffect, useState } from "react";
import Button from "./Button";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { useRealTime } from "../hooks/useRealTime";

export default function Navbar() {
	const isDesktop = useMediaQuery("(min-width: 800px)");
	return isDesktop ? <DesktopNav /> : <MobileNav />;
}

const DesktopNav = () => {
	const time = useRealTime();
	return (
		<nav className="bg-white py-[22px]">
			<header className="mx-auto w-full max-w-[1296px] grid grid-cols-[1fr_250px_1fr] gap-6 px-6 xl:px-0">
				<Button as="link" to="/" className="w-max">
					<Logo className=" text-gray-700" />
				</Button>
				<div className="flex items-center w-full justify-between p-1 rounded-full">
					<NavLink
						to="/"
						className={({ isActive }) =>
							`button h-[36px] flex items-center justify-center focus:outline-0 focus-visible:ring-2 focus-visible:ring-gray-300 ${
								isActive ? "text-gray-700 font-semibold" : "text-gray-500 font-normal"
							}`
						}
					>
						Work
					</NavLink>
					<NavLink
						to="/about"
						className={({ isActive }) =>
							`button h-[36px] flex items-center justify-center focus:outline-0 focus-visible:ring-2 focus-visible:ring-gray-300 ${
								isActive ? "text-gray-700 font-semibold" : "text-gray-500 font-normal"
							}`
						}
					>
						About
					</NavLink>
					<a
						href="https://drive.google.com/file/d/1-Pp56NqO3jCauLwMdeoSMwgWw7UvlGnD/view?usp=sharing"
						target="_blank"
						rel="noopener noreferrer"
						className="button h-[36px] flex items-center justify-center rounded-full text-gray-500  focus:outline-0 focus-visible:ring-2 focus-visible:ring-gray-300"
					>
						Resume
					</a>
				</div>
				<div className="flex items-center justify-end gap-4 font-semibold w-full">
					<span>Enugu, Nigeria</span>
					<span>{time}</span>
				</div>
			</header>
		</nav>
	);
};

const MobileNav = () => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	return (
		<nav className="bg-white py-4">
			<header className="mx-auto w-full max-w-[1296px] flex items-center justify-between px-6 xl:px-0">
				<Button as="link" to="/">
					<Logo className="w-[2rem] h-[2rem]" />
				</Button>

				<button type="button" onClick={() => setIsOpen((prev) => !prev)}>
					{isOpen ? <CancelIcon /> : <MenuIcon />}
				</button>
			</header>
			{isOpen && <MobileLink setIsOpen={setIsOpen} />}
		</nav>
	);
};

const MobileLink = ({ setIsOpen }: { setIsOpen: (item: boolean) => void }) => {
	const time = useRealTime();
	return (
		<div className="bg-white flex flex-col text-gray-700 inset-0 fixed top-[65.77px] px-6 z-50">
			<div className="flex flex-col gap-12 font-medium py-10 w-full">
				<NavLink
					to="/"
					className={({ isActive }) =>
						` flex items-center justify-between w-full h-[4rem]  ${
							isActive ? "text-gray-700 font-semibold" : "text-gray-500 font-normal"
						}`
					}
					onClick={() => setIsOpen(false)}
				>
					<span>Work</span>
					<span>
						<RightArrowIcon className="w-6 h-6" />
					</span>
				</NavLink>
				<NavLink
					to="/about"
					className={({ isActive }) =>
						` flex items-center justify-between w-full h-[4rem]  ${
							isActive ? "text-gray-700 font-semibold" : "text-gray-500 font-normal"
						}`
					}
					onClick={() => setIsOpen(false)}
				>
					<span>About</span>
					<span>
						<RightArrowIcon className="w-6 h-6" />
					</span>
				</NavLink>
				<a
					href="/chibuike-maduabuchi-resume.pdf"
					target="_blank"
					rel="noopener noreferrer"
					className=" flex items-center justify-between w-full h-[4rem] text-gray-500"
				>
					<span>Resume</span>
					<span>
						<RightArrowIcon className="w-6 h-6" />
					</span>
				</a>
			</div>
			<div className="flex items-center w-full justify-between font-semibold mt-auto h-16 pb-6">
				<span>Enugu, Nigeria</span>
				<span>{time}</span>
			</div>
		</div>
	);
};
