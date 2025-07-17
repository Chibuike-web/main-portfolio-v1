import { NavLink } from "react-router";
import { CancelIcon, Logo, MenuIcon, RightArrowIcon } from "../assets/icons";
import { useEffect, useState } from "react";
import { useMediaQuery, useRealTime } from "../Hooks";
import Button from "./Button";

export default function Navbar() {
	const isDesktop = useMediaQuery("(min-width: 800px)");
	return isDesktop ? <DesktopNav /> : <MobileNav />;
}

const DesktopNav = () => {
	const time = useRealTime();
	return (
		<nav className="bg-white py-[22px]">
			<header className="mx-auto w-full max-w-[1296px] grid grid-cols-3 place-items-center gap-6 px-6 xl:px-0">
				<figure className="w-full">
					<Logo className="w-auto text-gray-700" />
				</figure>
				<div className="bg-gray-100 flex items-center w-full max-w-max gap-1 p-1">
					<NavLink
						to="/"
						className={({ isActive }) =>
							`w-[112px] h-[36px] flex items-center justify-center text ${
								isActive ? "bg-white text-gray-700 font-semibold" : "text-gray-500 font-normal"
							}`
						}
					>
						Work
					</NavLink>
					<NavLink
						to="/about"
						className={({ isActive }) =>
							`w-[112px] h-[36px] flex items-center justify-center text ${
								isActive ? "bg-white text-gray-700 font-semibold" : "text-gray-500 font-normal"
							}`
						}
					>
						About
					</NavLink>
					<a
						href="/chibuike-maduabuchi-resume.pdf"
						target="_blank"
						rel="noopener noreferrer"
						className="w-[112px] h-[36px] flex items-center justify-center text-gray-500"
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
