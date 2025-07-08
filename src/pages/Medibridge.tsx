import { CancelIcon } from "../assets/icons";
import Button from "../components/Button";
import heroImage from "../assets/medibridge/hero.webp";
export default function Medibridge() {
	return (
		<main className="w-full max-w-[1296px] mx-auto px-6 xl:px-0 ">
			<nav className="w-full flex justify-between items-center py-8 text-[14px] md:text-[16px]">
				<header className="flex flex-col gap-[10px]">
					<p className="font-secondary font-semibold text-gray-700">AI-POWERED EHR</p>
					<p className="font-secondary font-semibold text-gray-500"> ONE PLATFORM, EVERY PATIENT</p>
				</header>
				<Button as="link" to="/">
					<CancelIcon />
				</Button>
			</nav>

			<h1 className=" text-[2rem] md:text-[4rem] font-semibold tracking-[-0.02em]">
				Streamlining How Records Are Captured and Shared Across Hospitals
			</h1>
			<figure className="w-full xl:h-[840px] mt-[44px] md:mt-[88px] mb-[52px] md:mb-[104px]">
				<img src={heroImage} alt="" className="w-full h-full object-cover" />
			</figure>
		</main>
	);
}
