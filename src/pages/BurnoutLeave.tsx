import { CancelIcon } from "../assets/icons";
import Button from "../components/Button";
import heroImage from "../assets/burnout-leave/hero-image.webp";
import firstImage from "../assets/burnout-leave/first.webp";
import secondImage from "../assets/burnout-leave/second.webp";
import thirdImage from "../assets/burnout-leave/third.webp";
import fourthImage from "../assets/burnout-leave/fourth.webp";
import fifthImage from "../assets/burnout-leave/fifth.webp";
import sixthImage from "../assets/burnout-leave/sixth.webp";
import seventhImage from "../assets/burnout-leave/seventh.webp";
import eighthImage from "../assets/burnout-leave/eighth.webp";
import ninthImage from "../assets/burnout-leave/ninth.webp";
import tenthImage from "../assets/burnout-leave/tenth.webp";
import eleventhImage from "../assets/burnout-leave/eleventh.webp";
import twelfthImage from "../assets/burnout-leave/twelfth.webp";
import { LazyImage } from "../Hooks";

export default function BurnoutLeave() {
	return (
		<main className="w-full max-w-[1296px] mx-auto px-6 xl:px-0 ">
			<nav className="w-full flex justify-between items-center py-8 text-[14px] md:text-[16px]">
				<header className="flex flex-col gap-[10px]">
					<p className="font-secondary font-semibold text-gray-700">BURNOUT LEAVE</p>
					<p className="font-secondary font-semibold text-gray-500">
						{" "}
						LESS BURNOUT, MORE PRODUCTIVITY{" "}
					</p>
				</header>
				<Button as="link" to="/">
					<CancelIcon />
				</Button>
			</nav>

			<h1 className=" text-[2rem] md:text-[4rem] font-semibold tracking-[-0.02em]">
				Smarter Burnout Tracking for Stronger Team Results
			</h1>
			<figure className="w-full xl:h-[840px] mt-[44px] md:mt-[88px] mb-[52px] md:mb-[104px]">
				<img
					src={heroImage}
					width="1296"
					height="840"
					alt="Image showing a macbook laptop on a concrete displaying the dashboard screen"
					className="w-full h-full object-cover rounded-[1rem] md:rounded-[2rem]"
					loading="lazy"
				/>
			</figure>

			<section className="flex flex-col md:flex-row gap-6">
				<div className="row-span-3 w-full max-w-[416px] font-secondary text-gray-700 text-[20px] md:text-[24px] font-bold font-secondarys">
					ZENLY
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 max-w-[856px] gap-6">
					<p className="w-full font-medium text-[14px] md:text-[16px] text-gray-500 leading-[1.6]">
						Zenly is a final project for Checklearn Intermediate UI/UX Design Batch. The idea is to
						build a system that can anticipate each team member’s burnout state based on the mental
						difficult of the work they have done so far. It is especially targeted at team members
						that
					</p>
					<p className="w-full font-medium text-[14px] md:text-[16px] text-gray-500 leading-[1.6]">
						don’t utilize their annual leave opportunities for rest. We worked on a team of three
						and alternate leadership position every week. I work on admin part of the product.
					</p>
					<div className="w-full flex flex-col gap-[4px]">
						<h3 className="text-[14px] md:text-[16px] text-gray-700 font-semibold font-secondary">
							PROBLEM STATEMENT
						</h3>
						<p className="w-full font-medium text-[14px] md:text-[16px] text-gray-500 leading-[1.6]">
							Many team members struggle to recognize early signs of burnout and often fail to take
							annual leave until exhaustion has already affected their productivity and well-being.
							Managers also lack clear, data-driven tools to anticipate and manage burnout risk
							across teams, making it difficult to balance workloads and encourage timely rest.
						</p>
					</div>
					<div className="w-full flex flex-col gap-[4px]">
						<h3 className="text-[14px] md:text-[16px] text-gray-700 font-semibold font-secondary">
							SOLUTION OVERVIEW
						</h3>
						<p className="w-full font-medium text-[14px] md:text-[16px] text-gray-500 leading-[1.6]">
							I designed the admin side of Zenly’s burnout management dashboard. From this view,
							admins can create, edit, and delete teams, assign team leads, and configure burnout
							limits for each group. These controls give managers the ability to monitor workload
							distribution and anticipate burnout risk at a team level.
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
								1 month
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="mt-[52px] md:mt-[104px]">
				<LazyImage
					src={firstImage}
					alt="Image showing a single dashboard"
					className="rounded-[1rem] md:rounded-[2rem]"
					width={1296}
					height={750}
				/>
			</section>

			<section className="mt-[52px] md:mt-[104px]">
				<h2 className="text-[24px] md:text-[48px] font-semibold text-gray-700 tracking-[-0.02em]">
					Create new team
				</h2>
				<LazyImage
					src={secondImage}
					alt="Image showing two screens with modals each"
					width={1296}
					height={750}
					className="rounded-[1rem] md:rounded-[2rem] mt-6 md:mt-12"
				/>
				<LazyImage
					src={thirdImage}
					alt="Image showing two screens with modals each"
					width={1296}
					height={750}
					className="rounded-[1rem] md:rounded-[2rem] mt-6 md:mt-12"
				/>
			</section>

			<section className="mt-[52px] md:mt-[104px]">
				<h2 className="text-[24px] md:text-[48px] font-semibold text-gray-700 tracking-[-0.02em]">
					Edit Team
				</h2>
				<LazyImage
					src={fourthImage}
					alt="Image showing two screens with modals each"
					width={1296}
					height={750}
					className="mt-6 md:mt-12 rounded-[1rem] md:rounded-[2rem]"
				/>
				<LazyImage
					src={fifthImage}
					alt="Image showing two screens with modals each"
					width={1296}
					height={750}
					className="w-full rounded-[1rem] md:rounded-[2rem] mt-6 md:mt-12"
				/>
				<LazyImage
					src={sixthImage}
					alt="Image showing a single screen"
					width={1296}
					height={750}
					className="w-full mt-6 md:mt-12 rounded-[1rem] md:rounded-[2rem]"
				/>
			</section>

			<section className="mt-[52px] md:mt-[104px]">
				<h2 className="text-[24px] md:text-[48px] font-semibold text-gray-700 tracking-[-0.02em]">
					Assign Team Lead
				</h2>

				<LazyImage
					src={seventhImage}
					alt="Image showing a single screen"
					width={1296}
					height={750}
					className="w-full mt-6 md:mt-12 rounded-[1rem] md:rounded-[2rem]"
				/>
				<LazyImage
					src={eighthImage}
					alt="Image showing two screens with modals each"
					width={1296}
					height={750}
					className="w-full mt-6 md:mt-12 rounded-[1rem] md:rounded-[2rem]"
				/>
			</section>

			<section className="mt-[52px] md:mt-[104px]">
				<h2 className="text-[24px] md:text-[48px] font-semibold text-gray-700 tracking-[-0.02em]">
					Manage Team Member
				</h2>

				<LazyImage
					src={ninthImage}
					alt="Image showing a single screen"
					width={1296}
					height={750}
					className="w-full mt-6 md:mt-12 rounded-[1rem] md:rounded-[2rem]"
				/>
				<LazyImage
					src={tenthImage}
					alt="Image showing a single screen"
					width={1296}
					height={750}
					className="w-full mt-6 md:mt-12 rounded-[1rem] md:rounded-[2rem]"
				/>
				<LazyImage
					src={eleventhImage}
					alt="Image showing a single screen with a modal"
					width={1296}
					height={750}
					className="w-full mt-6 md:mt-12 rounded-[1rem] md:rounded-[2rem]"
				/>
				<LazyImage
					src={twelfthImage}
					alt="Image showing a single screen"
					width={1296}
					height={750}
					className="w-full mt-6 md:mt-12 mb-[52px] md:mb-[104px] rounded-[1rem] md:rounded-[2rem]"
				/>
			</section>
		</main>
	);
}
