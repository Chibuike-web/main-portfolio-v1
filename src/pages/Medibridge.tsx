import { CancelIcon } from "../assets/icons";
import { Button } from "../components/Button";
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
import { LazyImage } from "../components/LazyImage";

export function Medibridge() {
	return (
		<main className="w-full max-w-[81rem] mx-auto px-6 xl:px-0 ">
			<nav className="w-full flex justify-between items-center py-8 text-sm md:text-base">
				<header className="flex flex-col gap-2.5">
					<p className="font-secondary font-semibold text-gray-700">AI-POWERED EHR</p>
					<p className="font-secondary font-semibold text-gray-500"> ONE PLATFORM, EVERY PATIENT</p>
				</header>
				<Button as="link" to="/" aria-label="Back to home">
					<CancelIcon />
				</Button>
			</nav>
			<h1 className="text-[2rem] md:text-[4rem] font-semibold tracking-[-0.02em] text-balance">
				Streamlining How Records Are Captured and Shared Across Hospitals
			</h1>
			<figure className="w-full xl:h-[52.5rem] mt-11 md:mt-[5.5rem] mb-[3.25rem] md:mb-[6.5rem]">
				<img
					src={heroImage}
					width="1296"
					height="840"
					alt="Image showing a macbook laptop on a concrete displaying the dashboard screen"
					className="w-full h-full object-cover rounded-[1rem] md:rounded-[2rem]"
				/>
			</figure>
			<section className="flex flex-col md:flex-row gap-6">
				<div className="row-span-3 font-secondary w-full max-w-[26rem] text-gray-700 text-xl md:text-2xl font-bold font-secondarys">
					MEDIBRIDGE
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 max-w-[53.5rem] gap-6">
					<p className="w-full font-medium text-sm md:text-base text-gray-500 leading-[1.6] text-pretty">
						MediBridge started as a hackathon project focused on a healthcare gap: extracting usable
						data from paper records and enabling secure digital transfer between providers. I
						continued building it beyond the hackathon into a working product.
					</p>
					<p className="w-full font-medium text-sm md:text-base text-gray-500 leading-[1.6] text-pretty">
						The platform uses AI to convert scanned documents into structured patient data and
						supports record sharing with patient approval. The second iteration focused on improving
						clinical workflows, data integrity and human review before records are stored or shared.
					</p>
					<div className="w-full flex flex-col gap-1">
						<h3 className="text-sm md:text-base text-gray-700 font-semibold font-secondary">
							PROBLEM STATEMENT
						</h3>
						<p className="w-full font-medium text-sm md:text-base text-gray-500 leading-[1.6] text-pretty">
							Medical records are still stored in paper form or unstructured digital formats like
							scanned PDFs or images. This creates friction for hospitals and clinics trying to
							access accurate patient history, especially during inter facility transfers. There is
							also no clear way to digitize structure and securely share these records based on
							patient request.
						</p>
					</div>
					<div className="w-full flex flex-col gap-1">
						<h3 className="text-sm md:text-base text-gray-700 font-semibold font-secondary">
							SOLUTION OVERVIEW
						</h3>
						<p className="w-full font-medium text-sm md:text-base text-gray-500 leading-[1.6] text-pretty">
							I am designing and building an AI powered platform that extracts structured medical
							data from physical documents so hospitals and clinics can digitize records and manage
							transfers. The system supports record review before storage, patient approved transfer
							requests and secure sharing between institutions.
						</p>
					</div>
					<div className="flex gap-4 items-start w-full">
						<div className="w-full flex flex-col gap-1">
							<h3 className="text-sm md:text-base text-gray-700 font-semibold font-secondary">
								ROLE
							</h3>
							<ul className="list-none flex flex-col">
								<li className="w-full font-medium text-sm md:text-base text-gray-500 leading-[1.6]">
									Product Designer
								</li>
								<li className="w-full font-medium text-sm md:text-base text-gray-500 leading-[1.6]">
									Product Manager
								</li>
								<li className="w-full font-medium text-sm md:text-base text-gray-500 leading-[1.6]">
									Product Engineer
								</li>
							</ul>
						</div>
						<div className="w-full flex flex-col gap-1">
							<h3 className="text-sm md:text-base text-gray-700 font-semibold font-secondary">
								DURATION
							</h3>
							<p className="w-full font-medium text-sm md:text-base text-gray-500 leading-[1.6]">
								Ongoing
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="mt-[3.25rem] md:mt-[6.5rem] flex flex-col gap-6 md:gap-12">
				<p className="w-full max-w-[53.4375rem] font-medium text-sm md:text-base text-gray-500 leading-[1.6] text-pretty">
					I wanted onboarding to feel seamless since the product is built for non technical users,
					mainly clinicians. I chose a simple registration flow for new users. The first person to
					sign up becomes the owner and can invite an admin to manage the account. This happens
					after the hospital details are verified.
				</p>

				<LazyImage
					src={firstImage}
					alt="Image showing onboarding screen"
					width={1296}
					height={750}
					className="rounded-[1rem] md:rounded-[2rem]"
				/>
				<LazyImage
					src={secondImage}
					alt="Image showing two screens side by side — the left screen displays the 'owner account setup form' and the right screen hospital details form."
					width={1296}
					height={750}
					className="rounded-[1rem] md:rounded-[2rem]"
				/>
				<LazyImage
					src={thirdImage}
					alt="Image showing invite admin form and complete account setup form"
					width={1296}
					height={750}
					className="rounded-[1rem] md:rounded-[2rem]"
				/>
			</section>

			<section className="mt-[3.25rem] md:mt-[6.5rem] flex flex-col gap-6 md:gap-12">
				<div className="flex flex-col gap-2.5">
					<h2 className="text-2xl md:text-5xl font-semibold text-gray-700 tracking-[-0.02em] text-balance">
						Add new patients
					</h2>
					<p className="w-full max-w-[53.4375rem] font-medium text-sm md:text-base text-gray-500 leading-[1.6] text-pretty">
						Adding a new patient is streamlined for bulk onboarding. Clinicians upload individual
						documents, each representing a single patient. The system extracts key personal and
						clinical details from each file to generate separate digital patient profiles. Multiple
						patient documents can be uploaded at once, allowing several profiles to be created in a
						single session. Extracted data is structured automatically and presented for clinician
						review before confirmation. This maintains accuracy while reducing manual entry and the
						time spent onboarding new patients.
					</p>
				</div>
				<LazyImage
					src={fourthImage}
					alt="Image showing an empty dashboard screen."
					width={1296}
					height={750}
					className="rounded-[1rem] md:rounded-[2rem]"
				/>
				<LazyImage
					src={fifthImage}
					alt=""
					width={1296}
					height={750}
					className="rounded-[1rem] md:rounded-[2rem]"
				/>

				<LazyImage
					src={sixthImage}
					alt=""
					width={1296}
					height={750}
					className="rounded-[1rem] md:rounded-[2rem]"
				/>

				<LazyImage
					src={seventhImage}
					alt=""
					width={1296}
					height={750}
					className="rounded-[1rem] md:rounded-[2rem]"
				/>
			</section>

			<section className="mt-[3.25rem] md:mt-[6.5rem] flex flex-col gap-6 md:gap-12">
				<div className="flex flex-col gap-2.5">
					<h2 className="text-2xl md:text-5xl font-semibold text-gray-700 tracking-[-0.02em] text-balance">
						Transfer patient record
					</h2>
					<p className="w-full max-w-[53.4375rem] font-medium text-sm md:text-base text-gray-500 leading-[1.6] text-pretty">
						To transfer records, the patient must already exist in the system with their records. A
						clinician selects the patient, chooses the receiving hospital and picks the format for
						sharing such as PDF, image or document file. Instead of sending the records immediately,
						the platform sends a transfer request to the patient for approval. Once approved, the
						records are sent to the target hospital.
					</p>
				</div>

				<LazyImage
					src={eighthImage}
					alt="Image showing a filled dashboard screen with the Patient Records menu active, displaying existing patient records."
					width={1296}
					height={750}
					className="rounded-[1rem] md:rounded-[2rem]"
				/>
				<LazyImage
					src={ninthImage}
					alt="Image showing a filled dashboard screen with the Transfers menu active, displaying existing transfer records."
					width={1296}
					height={750}
					className="rounded-[1rem] md:rounded-[2rem]"
				/>

				<LazyImage
					src={tenthImage}
					alt="Image showing two screens Image showing two modals side by side — the left modal displays the patient selection in an inactive state, while the right modal shows the active state with the dropdown expanded."
					width={1296}
					height={750}
					className="rounded-[1rem] md:rounded-[2rem]"
				/>
			</section>

			<section className="mt-[3.25rem] md:mt-[6.5rem] flex flex-col gap-6 md:gap-12">
				<div className="mt-6 md:mt-12">
					<h2 className="text-2xl md:text-5xl font-semibold text-gray-700 tracking-[-0.02em] text-balance">
						Overview
					</h2>
					<LazyImage
						src={eleventhImage}
						alt="Image showing two modals side by side — the left modal displays empty fields for the target hospital name and admin email, while the right modal shows the same fields filled out."
						width={1296}
						height={750}
						className="mt-6 md:mt-12 rounded-[1rem] md:rounded-[2rem]"
					/>
				</div>
				<div className="mt-6 md:mt-12">
					<h2 className="text-2xl md:text-5xl font-semibold text-gray-700 tracking-[-0.02em] text-balance">
						Patient Records
					</h2>
					<LazyImage
						src={twelfthImage}
						alt="Image showing two modals side by side — the left modal displays empty fields for clinical document, format, and extra note, while the right modal shows the same fields filled out."
						width={1296}
						height={750}
						className="mt-6 md:mt-12 rounded-[1rem] md:rounded-[2rem]"
					/>
				</div>
				<div className="mb-[3.25rem] md:mb-[6.5rem] mt-6 md:mt-12">
					<h2 className="text-2xl md:text-5xl font-semibold text-gray-700 tracking-[-0.02em] text-balance">
						Transfers
					</h2>
					<LazyImage
						src={thirteenthImage}
						alt="Image showing two review modals side by side — the left modal displays the checkbox for confirmation unchecked, while the right modal shows the same checkbox checked."
						width={1296}
						height={750}
						className="mt-6 md:mt-12 rounded-[1rem] md:rounded-[2rem]"
					/>
				</div>
			</section>
		</main>
	);
}
