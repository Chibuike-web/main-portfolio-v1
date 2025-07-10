import { CancelIcon } from "../assets/icons";
import Button from "../components/Button";
import heroImage from "../assets/bulk-airtime/hero.webp";
import firstImage from "../assets/bulk-airtime/first.webp";
import secondImage from "../assets/bulk-airtime/second.webp";
import thirdImage from "../assets/bulk-airtime/third.webp";
import fourthImage from "../assets/bulk-airtime/fourth.webp";
import fifthImage from "../assets/bulk-airtime/fifth.webp";
import sixthImage from "../assets/bulk-airtime/sixth.webp";
import seventhImage from "../assets/bulk-airtime/seventh.webp";
import eighthImage from "../assets/bulk-airtime/eighth.webp";
import { LazyImage } from "../Hooks";

export default function BulkAirtime() {
	return (
		<main className="w-full max-w-[1296px] mx-auto px-6 xl:px-0 ">
			<nav className="w-full flex justify-between items-center py-8 text-[14px] md:text-[16px]">
				<header className="flex flex-col gap-[10px]">
					<p className="font-secondary font-semibold text-gray-700">BULK AIRTIME</p>
					<p className="font-secondary font-semibold text-gray-500">
						{" "}
						LESS STRESS, MORE CELEBRATION
					</p>
				</header>
				<Button as="link" to="/">
					<CancelIcon />
				</Button>
			</nav>

			<h1 className=" text-[2rem] md:text-[4rem] font-semibold tracking-[-0.02em]">
				Crafting a mobile airtime feature that saves time when it matters most
			</h1>
			<figure className="w-full xl:h-[840px] mt-[44px] md:mt-[88px] mb-[52px] md:mb-[104px]">
				<img
					src={heroImage}
					alt="A mockup of the Send Airtime screen displayed on an iPhone 16 Pro resting on a bubbly surface"
					className="w-full h-full object-cover"
					loading="lazy"
				/>
			</figure>

			<section className="flex flex-col md:flex-row gap-6">
				<div className="row-span-3 w-full max-w-[416px] font-secondary text-gray-700 text-[20px] md:text-[24px] font-bold font-secondarys">
					NOMBA
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 max-w-[856px] gap-6">
					<p className="w-full font-medium text-[14px] md:text-[16px] text-gray-500 leading-[1.6]">
						As part of a design task for Nomba’s internship application stage two, I created a
						mobile feature that makes it easier to send airtime to multiple people.
					</p>
					<p className="w-full font-medium text-[14px] md:text-[16px] text-gray-500 leading-[1.6]">
						I independently mapped user flows, designed wireframes, and focused on solving a real
						user problem with a clear, simple solution.
					</p>
					<div className="w-full flex flex-col gap-[4px]">
						<h3 className="text-[14px] md:text-[16px] text-gray-700 font-semibold font-secondary">
							PROBLEM STATEMENT
						</h3>
						<p className="w-full font-medium text-[14px] md:text-[16px] text-gray-500 leading-[1.6]">
							Sending airtime to multiple users especially during special occasions is often slow,
							repetitive, and prone to errors. I designed a feature that provides users with a
							simple way to send airtime to several recipients in one transaction.
						</p>
					</div>
					<div className="w-full flex flex-col gap-[4px]">
						<h3 className="text-[14px] md:text-[16px] text-gray-700 font-semibold font-secondary">
							SOLUTION OVERVIEW
						</h3>
						<p className="w-full font-medium text-[14px] md:text-[16px] text-gray-500 leading-[1.6]">
							I designed a bulk airtime feature structured around two core flows: adding recipients
							from contact list or manually entering recipients’ numbers.
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
								1 week
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="mt-[52px] md:mt-[104px]">
				<LazyImage
					src={firstImage}
					alt="Image showing three screens side by side: Home screen on the left, Choose Airtime screen in the center, and Send to Multiple People screen on the right"
					width={1296}
					height={750}
				/>
				<p className="w-full max-w-[855px] font-medium text-[14px] md:text-[16px] text-gray-500 leading-[1.6] mt-6 md:mt-12">
					By building on existing and familiar patterns, I crafted designs that empower users to
					easily complete both single and bulk airtime transfers. Key actions are easy to access,
					and the straightforward flow helps users stay in control without needing additional
					guidance.
				</p>
			</section>

			<section className="mt-[52px] md:mt-[104px]">
				<div className="flex flex-col gap-[10px]">
					<h2 className="text-[24px] md:text-[48px] font-semibold text-gray-700 tracking-[-0.02em]">
						Select from contacts
					</h2>
					<p className="w-full max-w-[855px] font-medium text-[14px] md:text-[16px] text-gray-500 leading-[1.6] mb-6 md:mb-12">
						I made it easy to select and deselect any contact through tap-based interactions with
						immediate visual feedback. I also introduced search, allowing users to quickly find who
						they need and making the selection process feel smooth and effortless
					</p>
				</div>
				<LazyImage
					src={secondImage}
					alt="Image showing two screens side by side - Select from contacts unselected and the same screen with selection"
					width={1296}
					height={750}
				/>
			</section>
			<section className="mt-[52px] md:mt-[104px]">
				<LazyImage
					src={thirdImage}
					alt="Image showing two screens side by side - Send Airtime with the first contact selected and the same screen with the second contact selected"
					width={1296}
					height={750}
				/>
				<p className="w-full max-w-[855px] font-medium text-[14px] md:text-[16px] text-gray-500 leading-[1.6] mt-6 md:mt-12">
					Clickable chips let users move through recipients quickly without losing focus or being
					pulled away from the main action.
				</p>
			</section>
			<LazyImage
				src={fourthImage}
				alt="Two screens side by side: one showing the Summary screen, and the other showing the same screen with a payment bottom sheet visible"
				width={1296}
				height={750}
				className="mt-[52px] md:mt-[104px]"
			/>

			<section className="mt-[52px] md:mt-[104px]">
				<div className="flex flex-col gap-[10px]">
					<h2 className="text-[24px] md:text-[48px] font-semibold text-gray-700 tracking-[-0.02em]">
						Enter numbers manually
					</h2>
					<p className="w-full max-w-[855px] font-medium text-[14px] md:text-[16px] text-gray-500 leading-[1.6] mb-6 md:mb-12">
						Manually entering recipient numbers is simple and clear. A handy little helper is always
						nearby to keep things smooth and frustration-free
					</p>
				</div>
				<LazyImage
					src={fifthImage}
					alt="Three screens side by side: the left shows manual number input, the center shows a help tip bottom sheet, and the right shows an error state for the input field"
					width={1296}
					height={750}
					className="w-full"
				/>
			</section>
			<LazyImage
				src={sixthImage}
				alt="Image showing two screens side by side - Send Airtime with the first recipient number selected and the same screen with the second recipient number selected"
				width={1296}
				height={750}
				className="w-full mt-[52px] md:mt-[104px]"
			/>
			<LazyImage
				src={seventhImage}
				alt="Three screens side by side: the left shows the Summary screen, the center shows the Summary screen with the Remove Recipient modal open, and the right shows the success modal after removal"
				width={1296}
				height={750}
				className="w-full mt-[52px] md:mt-[104px]"
			/>
			<LazyImage
				src={eighthImage}
				alt="Four images side by side: the first shows a transaction summary for all successful airtime purchases; the second shows detailed information for a specific internet service provider purchase, including recipient, transaction type, number, data, and payment method; the third shows a transaction summary with one failed purchase among three successful ones; and the fourth shows detailed information for the failed transaction, including all related details"
				width={1296}
				height={750}
				className="w-full my-[52px] md:my-[104px]"
			/>
		</main>
	);
}
