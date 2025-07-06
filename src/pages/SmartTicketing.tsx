import { CancelIcon } from "../assets/icons";
import Button from "../components/Button";
import heroImage from "../assets/smart-ticketing/hero-image.webp";

export default function SmartTicketing() {
	return (
		<main className="w-full max-w-[1296px] mx-auto px-6 xl:px-0 ">
			<nav className="w-full flex justify-between items-center py-8 text-[14px] md:text-[16px]">
				<header className="flex flex-col gap-[10px]">
					<p className="font-secondary font-semibold text-gray-700">SMART TICKETING</p>
					<p className="font-secondary font-semibold text-gray-500"> ONE FLOW, EVERY DATE</p>
				</header>
				<Button as="link" to="/">
					<CancelIcon />
				</Button>
			</nav>
			<h1 className=" text-[2rem] md:text-[4rem] font-semibold tracking-[-0.02em]">
				Redefining how users browse, select, and buy tickets across multiple event days{" "}
			</h1>
			<figure className="w-full xl:h-[840px] mt-[44px] md:mt-[88px] mb-[52px] md:mb-[104px]">
				<img src={heroImage} alt="" className="w-full h-full object-cover" />
			</figure>
			<section className="flex flex-col md:flex-row gap-6">
				<div className="row-span-3 font-secondary w-full max-w-[416px] text-gray-700 text-[20px] md:text-[24px] font-bold font-secondarys">
					KULIPAL TECHNOLOGIES
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 max-w-[856px] gap-6">
					<p className="w-full font-medium text-[14px] md:text-[16px] text-gray-500 leading-[1.6]">
						As part of a broader redesign at Kulipal, I focused on improving the event purchasing
						experience within the customer-facing platform.
					</p>
					<p className="w-full font-medium text-[14px] md:text-[16px] text-gray-500 leading-[1.6]">
						Led end-to-end design of Kulipal’s event platform, improving the ticket flow,
						integrating new features, and refining the experience for smoother experience.
					</p>
					<div className="w-full flex flex-col gap-[4px]">
						<h3 className="text-[14px] md:text-[16px] text-gray-700 font-semibold font-secondary">
							PROBLEM STATEMENT
						</h3>
						<p className="w-full font-medium text-[14px] md:text-[16px] text-gray-500 leading-[1.6]">
							The platform only supported single-day events, creating friction with promotions and
							no way to buy tickets across multiple days. Users struggled to browse, select, and
							purchase tickets for multi-day events clearly and efficiently.
						</p>
					</div>
					<div className="w-full flex flex-col gap-[4px]">
						<h3 className="text-[14px] md:text-[16px] text-gray-700 font-semibold font-secondary">
							SOLUTION OVERVIEW
						</h3>
						<p className="w-full font-medium text-[14px] md:text-[16px] text-gray-500 leading-[1.6]">
							Redesigned the flow to support multi-day events with clear date selection, tabbed
							navigation, and streamlined promo integration. The result is a simpler and more
							intuitive ticketing experience.
						</p>
					</div>
					<div className="flex gap-4 items-start w-full">
						<div className="w-full flex flex-col gap-[4px]">
							<h3 className="text-[14px] md:text-[16px] text-gray-700 font-semibold font-secondary">
								ROLE
							</h3>
							<p className="w-full font-medium text-[14px] md:text-[16px] text-gray-500 leading-[1.6]">
								Product Designer
							</p>
						</div>
						<div className="w-full flex flex-col gap-[4px]">
							<h3 className="text-[14px] md:text-[16px] text-gray-700 font-semibold font-secondary">
								DURATION
							</h3>
							<p className="w-full font-medium text-[14px] md:text-[16px] text-gray-500 leading-[1.6]">
								2 months
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
