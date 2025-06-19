import { NavLink } from "react-router";
import { CancelIcon, Logo, MenuIcon, RightArrowIcon } from "../assets/icons";
import { useState } from "react";
import { useMediaQuery } from "../Hooks";

export default function Navbar() {
	const isDesktop = useMediaQuery("(min-width: 800px)");
	return isDesktop ? <DesktopNav /> : <MobileNav />;
}

const DesktopNav = () => {
	return (
		<nav className="border-b border-gray-300 py-[22px]">
			<header className="mx-auto w-full max-w-[1296px] flex items-center justify-between px-6 xl:px-0">
				<figure className="w-full max-w-[196px]">
					<Logo className="w-auto" />
				</figure>
				<div className="bg-gray-100 flex items-center gap-1 p-1 rounded-full">
					<NavLink
						to="/"
						className={({ isActive }) =>
							`w-[112px] h-[36px] flex items-center justify-center text rounded-full ${
								isActive ? "bg-white text-gray-700 font-semibold" : "text-gray-500 font-normal"
							}`
						}
					>
						Work
					</NavLink>
					<NavLink
						to="/about"
						className={({ isActive }) =>
							`w-[112px] h-[36px] flex items-center justify-center text rounded-full ${
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
				<div className="flex items-center gap-4 font-semibold">
					<span>Enugu, Nigeria</span>
					<span>07:30PM</span>
				</div>
			</header>
		</nav>
	);
};

const MobileNav = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<nav className="border-b border-gray-300 py-4">
			<header className="mx-auto w-full max-w-[1296px] flex items-center justify-between px-6 xl:px-0">
				<Logo className="w-[2rem] h-[2rem]" />

				<button type="button" onClick={() => setIsOpen((prev) => !prev)}>
					{isOpen ? <CancelIcon /> : <MenuIcon />}
				</button>
			</header>
			{isOpen && <MobileLink setIsOpen={setIsOpen} />}
		</nav>
	);
};

const MobileLink = ({ setIsOpen }: { setIsOpen: (item: boolean) => void }) => {
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
					{({ isActive }) => (
						<>
							<span>Work</span>
							<span>
								<RightArrowIcon fill={`${isActive ? "#2B303B" : "#717784"}`} />
							</span>
						</>
					)}
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
					{({ isActive }) => (
						<>
							<span>About</span>
							<span>
								<RightArrowIcon fill={`${isActive ? "#2B303B" : "#717784"}`} />
							</span>
						</>
					)}
				</NavLink>
				<a
					href="/chibuike-maduabuchi-resume.pdf"
					target="_blank"
					rel="noopener noreferrer"
					className=" flex items-center justify-between w-full h-[4rem] text-gray-500"
				>
					<span>Resume</span>
					<span>
						<RightArrowIcon />
					</span>
				</a>
			</div>
			<div className="flex items-center w-full justify-between font-semibold mt-auto h-16 pb-6">
				<span>Enugu, Nigeria</span>
				<span>07:30PM</span>
			</div>
		</div>
	);
};
