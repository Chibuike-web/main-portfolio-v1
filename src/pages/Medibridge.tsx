import { CancelIcon } from "../assets/icons";
import Button from "../components/Button";
import heroImage from "../assets/medibridge/hero.webp";
import firstImage from "../assets/medibridge/first.webp";
import secondImage from "../assets/medibridge/second.webp";
import thirdImage from "../assets/medibridge/third.webp";
import fourthImage from "../assets/medibridge/fourth.webp";
import fifthImage from "../assets/medibridge/fifth.webp";
import sixthImage from "../assets/medibridge/sixth.webp";
import seventhImage from "../assets/medibridge/seventh.webp";
import eighthImage from "../assets/medibridge/eighth.webp";
import ninthImage from "../assets/medibridge/ninth.webp";
import tenthImage from "../assets/medibridge/tenth.webp";
import eleventhImage from "../assets/medibridge/eleventh.webp";
import twelfthImage from "../assets/medibridge/twelfth.webp";
import thirteenthImage from "../assets/medibridge/thirteenth.webp";
import { LazyImage } from "../Hooks";

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
				<img
					src={heroImage}
					alt="Image showing a macbook laptop on a concrete displaying the dasbaord screen"
					className="w-full h-full object-cover rounded-[1rem] md:rounded-[2rem]"
				/>
			</figure>
			<section className="flex flex-col md:flex-row gap-6">
				<div className="row-span-3 font-secondary w-full max-w-[416px] text-gray-700 text-[20px] md:text-[24px] font-bold font-secondarys">
					MEDIBRIDGE
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 max-w-[856px] gap-6">
					<p className="w-full font-medium text-[14px] md:text-[16px] text-gray-500 leading-[1.6]">
						MediBridge started as a hackathon project to solve a key challenge in healthcare: the
						inability to easily extract and transfer medical records from physical formats. Using
						AI, the platform helps hospitals and clinics convert scanned documents into structured
					</p>
					<p className="w-full font-medium text-[14px] md:text-[16px] text-gray-500 leading-[1.6]">
						data and securely transfer records at the patient's request. In the second iteration, I
						redesigned the interface and system to better support clinical workflows and data
						integrity.
					</p>
					<div className="w-full flex flex-col gap-[4px]">
						<h3 className="text-[14px] md:text-[16px] text-gray-700 font-semibold font-secondary">
							PROBLEM STATEMENT
						</h3>
						<p className="w-full font-medium text-[14px] md:text-[16px] text-gray-500 leading-[1.6]">
							Medical records are still often stored in paper-based or unstructured digital formats
							like scanned PDFs or images. This creates friction for hospitals and clinics trying to
							access accurate patient history, especially during inter-facility transfers. There’s
							also no streamlined way to digitize, structure, and securely share these records on
							patient request.
						</p>
					</div>
					<div className="w-full flex flex-col gap-[4px]">
						<h3 className="text-[14px] md:text-[16px] text-gray-700 font-semibold font-secondary">
							SOLUTION OVERVIEW
						</h3>
						<p className="w-full font-medium text-[14px] md:text-[16px] text-gray-500 leading-[1.6]">
							I designed an AI-powered platform that extracts structured medical data from physical
							documents, enabling hospitals and clinics to convert and transfer patient records
							efficiently. The redesigned experience supports record review, patient-initiated
							transfer requests, and secure sharing between institutions.
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
					alt="Image showing onboarding screen"
					width={1296}
					height={750}
					className="rounded-[1rem] md:rounded-[2rem]"
				/>
				<p className="w-full max-w-[855px] font-medium text-[14px] md:text-[16px] text-gray-500 leading-[1.6] mt-6 md:mt-12">
					I kept the entry screen simple and focused. When hospitals land here, they’re greeted with
					just two clear options: Begin Registration or Log In. It’s explicit and clear what action
					to take, whether they’re a new hospital joining the platform or an existing one returning.
				</p>
			</section>
			<section className="mt-[52px] md:mt-[104px]">
				<LazyImage
					src={secondImage}
					alt="Image showing signup screen"
					width={1296}
					height={750}
					className="rounded-[1rem] md:rounded-[2rem]"
				/>
				<p className="w-full max-w-[855px] font-medium text-[14px] md:text-[16px] text-gray-500 leading-[1.6] mt-6 md:mt-12">
					The sign-up screen is designed to clearly request the key information needed from the
					hospital, while also providing a way to validate the hospital and user entering the
					platform.
				</p>
			</section>
			<LazyImage
				src={thirdImage}
				alt="Image showing two screens side by side — the left screen displays the institution document upload, while the right screen shows the administrator sign-up form."
				width={1296}
				height={750}
				className="mt-[52px] md:mt-[104px] rounded-[1rem] md:rounded-[2rem]"
			/>
			<LazyImage
				src={fourthImage}
				alt="Image showing an empty dashboard screen, ready to display hospital data once records are added."
				width={1296}
				height={750}
				className="mt-[52px] md:mt-[104px] rounded-[1rem] md:rounded-[2rem]"
			/>
			<section className="mt-[52px] md:mt-[104px]">
				<div className="flex flex-col gap-[10px]">
					<h2 className="text-[24px] md:text-[48px] font-semibold text-gray-700 tracking-[-0.02em]">
						Upload Patient’s Record
					</h2>
					<p className="w-full max-w-[855px] font-medium text-[14px] md:text-[16px] text-gray-500 leading-[1.6] mb-6 md:mb-12">
						The upload flow is designed to be quick and straightforward. Hospitals can upload
						scanned documents, PDFs, or images of patient records. The system uses AI to extract
						structured data, so staff don’t have to manually type in details. It’s built to save
						time, reduce errors, and make sure the patient’s history is digitized and ready for
						review or transfer.
					</p>
				</div>
				<LazyImage
					src={fifthImage}
					alt="Image showing two screens side by side — the left screen displays the “Choose or drag to upload patient’s record” modal, and the right screen shows the final uploaded state."
					width={1296}
					height={750}
					className="rounded-[1rem] md:rounded-[2rem]"
				/>
			</section>
			<section className="mt-[52px] md:mt-[104px]">
				<LazyImage
					src={sixthImage}
					alt="Image showing two screens side by side — the left screen displays the completed data extraction state, while the right screen shows the extracted content."
					width={1296}
					height={750}
					className="rounded-[1rem] md:rounded-[2rem]"
				/>
				<p className="w-full max-w-[855px] font-medium text-[14px] md:text-[16px] text-gray-500 leading-[1.6] mt-6 md:mt-12">
					After upload, the extracted data is shown clearly so staff can review and confirm it. The
					goal is to let hospitals quickly spot and fix any errors before saving. It keeps things
					simple — just the key info pulled from the document, ready for review
				</p>
			</section>
			<LazyImage
				src={seventhImage}
				alt="Image showing a filled dashboard screen with the Dashboard menu active, displaying key hospital metrics and activity."
				width={1296}
				height={750}
				className="mt-[52px] md:mt-[104px] rounded-[1rem] md:rounded-[2rem]"
			/>
			<LazyImage
				src={eighthImage}
				alt="Image showing a filled dashboard screen with the Patient Records menu active, displaying existing patient records."
				width={1296}
				height={750}
				className="mt-[52px] md:mt-[104px] rounded-[1rem] md:rounded-[2rem]"
			/>
			<LazyImage
				src={ninthImage}
				alt="Image showing a filled dashboard screen with the Transfers menu active, displaying existing transfer records."
				width={1296}
				height={750}
				className="mt-[52px] md:mt-[104px] rounded-[1rem] md:rounded-[2rem]"
			/>
			<section className="mt-[52px] md:mt-[104px]">
				<div className="flex flex-col gap-[10px]">
					<h2 className="text-[24px] md:text-[48px] font-semibold text-gray-700 tracking-[-0.02em]">
						New Transfer Request
					</h2>
					<p className="w-full max-w-[855px] font-medium text-[14px] md:text-[16px] text-gray-500 leading-[1.6] mb-6 md:mb-12">
						To start a transfer, the hospital selects a patient, enters the receiving hospital’s
						details, and picks the records to send. They choose the format, add any notes, and
						submit. But nothing moves until the patient approves
					</p>
				</div>
				<LazyImage
					src={tenthImage}
					alt="Image showing two screens Image showing two modals side by side — the left modal displays the patient selection in an inactive state, while the right modal shows the active state with the dropdown expanded."
					width={1296}
					height={750}
					className="rounded-[1rem] md:rounded-[2rem]"
				/>
			</section>
			<LazyImage
				src={eleventhImage}
				alt="Image showing two modals side by side — the left modal displays empty fields for the target hospital name and admin email, while the right modal shows the same fields filled out."
				width={1296}
				height={750}
				className="mt-[52px] md:mt-[104px] rounded-[1rem] md:rounded-[2rem]"
			/>
			<LazyImage
				src={twelfthImage}
				alt="Image showing two modals side by side — the left modal displays empty fields for clinical document, format, and extra note, while the right modal shows the same fields filled out."
				width={1296}
				height={750}
				className="mt-[52px] md:mt-[104px] rounded-[1rem] md:rounded-[2rem]"
			/>
			<LazyImage
				src={thirteenthImage}
				alt="Image showing two review modals side by side — the left modal displays the checkbox for confirmation unchecked, while the right modal shows the same checkbox checked."
				width={1296}
				height={750}
				className="my-[52px] md:my-[104px] rounded-[1rem] md:rounded-[2rem]"
			/>
		</main>
	);
}
