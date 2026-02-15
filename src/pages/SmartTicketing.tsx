import { CancelIcon } from "../assets/icons";
import { Button } from "../components/Button";
import heroImage from "../assets/smart-ticketing/hero-image.webp";
import firstImage from "../assets/smart-ticketing/first.webp";
import secondImage from "../assets/smart-ticketing/second.webp";
import thirdImage from "../assets/smart-ticketing/third.webp";
import fourthImage from "../assets/smart-ticketing/fourth.webp";
import fifthImage from "../assets/smart-ticketing/fifth.webp";
import sixthImage from "../assets/smart-ticketing/sixth.webp";
import seventhImage from "../assets/smart-ticketing/seventh.webp";
import eighthImage from "../assets/smart-ticketing/eighth.webp";
import ninthImage from "../assets/smart-ticketing/ninth.webp";
import tenthImage from "../assets/smart-ticketing/tenth.webp";
import eleventhImage from "../assets/smart-ticketing/eleventh.webp";
import twelfthImage from "../assets/smart-ticketing/twelfth.webp";
import thirteenthImage from "../assets/smart-ticketing/thirteenth.webp";
import { LazyImage } from "../components/LazyImage";

export function SmartTicketing() {
	return (
		<main className="w-full max-w-[81rem] mx-auto px-6 xl:px-0 ">
			<nav className="w-full flex justify-between items-center py-8 text-sm md:text-base">
				<header className="flex flex-col gap-2.5">
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
			<figure className="w-full xl:h-[52.5rem] mt-11 md:mt-[5.5rem] mb-[3.25rem] md:mb-[6.5rem]">
				<img
					src={heroImage}
					width="1296"
					height="840"
						alt="Two stacked iPhone 16 Pro devices resting on a rocky surface, showing the Event Details and Select Ticket screens"
					className="w-full h-full object-cover rounded-[1rem] md:rounded-[2rem]"
				/>
			</figure>
			<section className="flex flex-col md:flex-row gap-6">
				<div className="row-span-3 font-secondary w-full max-w-[26rem] text-gray-700 text-xl md:text-2xl font-bold font-secondarys">
					KULIPAL TECHNOLOGIES
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 max-w-[53.5rem] gap-6">
					<p className="w-full font-medium text-sm md:text-base text-gray-500 leading-[1.6]">
						As part of a broader redesign at Kulipal, I focused on improving the event purchasing
						experience within the customer-facing platform.
					</p>
					<p className="w-full font-medium text-sm md:text-base text-gray-500 leading-[1.6]">
						Led end-to-end design of Kulipal’s event platform, improving the ticket flow,
						integrating new features, and refining the experience for smoother experience.
					</p>
					<div className="w-full flex flex-col gap-1">
						<h3 className="text-sm md:text-base text-gray-700 font-semibold font-secondary">
							PROBLEM STATEMENT
						</h3>
						<p className="w-full font-medium text-sm md:text-base text-gray-500 leading-[1.6]">
							The platform only supported single-day events, creating friction with promotions and
							no way to buy tickets across multiple days. Users struggled to browse, select, and
							purchase tickets for multi-day events clearly and efficiently.
						</p>
					</div>
					<div className="w-full flex flex-col gap-1">
						<h3 className="text-sm md:text-base text-gray-700 font-semibold font-secondary">
							SOLUTION OVERVIEW
						</h3>
						<p className="w-full font-medium text-sm md:text-base text-gray-500 leading-[1.6]">
							Redesigned the flow to support multi-day events with clear date selection, tabbed
							navigation, and streamlined promo integration. The result is a simpler and more
							intuitive ticketing experience.
						</p>
					</div>
					<div className="flex gap-4 items-start w-full">
						<div className="w-full flex flex-col gap-1">
							<h3 className="text-sm md:text-base text-gray-700 font-semibold font-secondary">
								ROLE
							</h3>
							<p className="w-full font-medium text-sm md:text-base text-gray-500 leading-[1.6]">
								Product Designer
							</p>
						</div>
						<div className="w-full flex flex-col gap-1">
							<h3 className="text-sm md:text-base text-gray-700 font-semibold font-secondary">
								DURATION
							</h3>
							<p className="w-full font-medium text-sm md:text-base text-gray-500 leading-[1.6]">
								2 months
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="mt-[3.25rem] md:mt-[6.5rem]">
				<LazyImage
					src={firstImage}
							alt="Image showing three elements: the left shows a paid event card, the center displays a vertical stack of events, and the right shows a free event card"
					width={1296}
					height={750}
					className="rounded-[1rem] md:rounded-[2rem]"
				/>
				<p className="w-full max-w-[53.4375rem] font-medium text-sm md:text-base text-gray-500 leading-[1.6] mt-6 md:mt-12">
					For the entry screen, I drew inspiration from Airbnb’s card layout and applied a
					content-first approach that prioritizes scannability. Each card highlights key details
					like date, location, and availability at a glance. The design uses clear visual hierarchy
					and spacing to guide users towards their desired goal with less friction.
				</p>
			</section>
			<section className="mt-[3.25rem] md:mt-[6.5rem]">
				<LazyImage
					src={secondImage}
							alt="Two design screens side by side: the first shows event details for a multi-day event, and the second shows event details for a single-day event"
					width={1296}
					height={750}
					className="rounded-[1rem] md:rounded-[2rem]"
				/>
				<p className="w-full max-w-[53.4375rem] font-medium text-sm md:text-base text-gray-500 leading-[1.6] mt-6 md:mt-12">
					Key event details are shown clearly, whether it's a one-day show or a multi-day
					experience. The focus was on helping users quickly understand what’s happening and when,
					so they can make informed decisions easily.
				</p>
			</section>
			<section className="mt-[3.25rem] md:mt-[6.5rem]">
				<LazyImage
					src={thirdImage}
							alt="Image showing two screens: the first displays the Select Event Day screen with unselected options, and the second shows the same screen with selected options"
					width={1296}
					height={750}
					className="rounded-[1rem] md:rounded-[2rem]"
				/>
				<p className="w-full max-w-[53.4375rem] font-medium text-sm md:text-base text-gray-500 leading-[1.6] mt-6 md:mt-12">
					I designed a low-friction selection flow that encourages quick decisions through clear
					options and immediate visual feedback.
				</p>
			</section>
			{listOfImages1.map((image, index) => (
				<LazyImage
					key={index}
					src={image.src}
						alt={image.alt}
					width={1296}
					height={750}
					className="mt-[3.25rem] md:mt-[6.5rem] rounded-[1rem] md:rounded-[2rem]"
				/>
			))}
			<section className="mt-[3.25rem] md:mt-[6.5rem]">
				<p className="w-full max-w-[53.4375rem] font-medium text-sm md:text-base text-gray-500 leading-[1.6] mb-6 md:mb-12">
					Unfortunately, the entire team was let go, and as a result, much of my work was ultimately
					shelved. Management decided to bring in external contractors to redesign and rebuild the
					app from scratch. Below are some of my contributions to the entire mobile app redesign.
				</p>
				<LazyImage
					src={ninthImage}
						alt="Three app screens: the first shows the Wallet screen, the middle shows the Add Funds screen with input fields, and the third shows the Wallet screen with a toast notification"
					width={1296}
					height={750}
					className="rounded-[1rem] md:rounded-[2rem]"
				/>
			</section>
			{listOfImages2.map((image, index) => (
				<LazyImage
					key={index}
					src={image.src}
						alt={image.alt}
					width={1296}
					height={750}
					className={`mt-[3.25rem] md:mt-[6.5rem] rounded-[1rem] md:rounded-[2rem] ${
						index === 3 && "mb-[3.25rem] md:mb-[6.5rem]"
					}`}
				/>
			))}
		</main>
	);
}

const listOfImages1 = [
	{
		alt: "Image showing two screens: the first shows the Select Ticket screen for a multi-day event, and the second shows the same screen for a single-day event",
		src: fourthImage,
	},
	{
		alt: "Image showing two screens: the first shows the Ticket Summary screen for a multi-day event, and the second shows the same screen for a single-day event",
		src: fifthImage,
	},
	{
		alt: "Image showing two screens: the first shows the promo section on the Ticket Summary screen for a multi-day event, and the second shows the promo section for a single-day event",
		src: sixthImage,
	},
	{
		alt: "Image showing two screens: the first shows the promo code section, and the second shows the bottom sheet for entering a promo code",
		src: seventhImage,
	},
	{
		alt: "Image showing two screens: the first shows the Payment Details screen with two payment options, and the second shows a success modal confirming successful payment",
		src: eighthImage,
	},
];

const listOfImages2 = [
	{
		alt: "Image showing three screens: the first shows the success screen for funds added and the center one shows fialed trasaction scrren and the last of sows transactiondetals",
		src: tenthImage,
	},
	{
		alt: "Image showing three screens: the first shows the success screen for funds added, the center shows the failed transaction screen, and the last shows the transaction details screen",
		src: eleventhImage,
	},
	{
		alt: "Image showing three screens: the first shows the Update Wallet PIN screen, the center shows an error state for the PIN input, and the last shows a modal confirming successful update",
		src: twelfthImage,
	},
	{
		alt: "Image showing three screens: the first shows the Send Funds screen with beneficiaries, the center shows the full list of beneficiaries, and the third shows a selected list of beneficiaries",
		src: thirteenthImage,
	},
];
