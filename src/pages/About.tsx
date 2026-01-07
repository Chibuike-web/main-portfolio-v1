import image from "../assets/image.png";

export default function About() {
	return (
		<main className="mx-auto w-full max-w-[1296px] flex flex-col justify-between px-6 xl:px-0">
			<section className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6 mt-[52px] lg:mt-[104px]">
				<img
					src={image}
					alt="A portrait of Chibuike"
					className="w-full rounded-[16px] md:rounded-[20px]"
					width={416}
					height={419}
				/>
				<div className="col-span-2 flex flex-col gap-4">
					<h1 className="text-[2rem] md:text-[4rem] font-semibold text-gray-700">
						Hi, I'm Chibuike Maduabuchi
					</h1>
					<div className="text-gray-500 text-[18px] leading-[1.6] space-y-3.5 col-span-2">
						<p>
							I’ve always been drawn to how things fit together, how small parts connect to create
							something bigger. That mindset led me to study Civil Engineering.
						</p>
						<p>
							Over time, I became more curious about the digital world, a space shaped entirely by
							people, where the only limits are imagination and intent.
						</p>
						<p>
							I started in brand design, crafting the visual identities of startups and early-stage
							companies. Then I moved into product design, building digital solutions that solve
							real problems. Along the way, I learned to code so I could prototype, test, and bring
							ideas to life faster.
						</p>
						<p>
							Today, I work at the intersection of design and engineering. I focus on accessibility,
							clarity, and ease of use, designing systems that adapt to people, not the other way
							around.
						</p>
					</div>
				</div>
			</section>
			<section className="grid grid-cols-1 lg:grid-cols-3 gap-y-6 lg:gap-y-0 lg:gap-x-6 mt-[52px] lg:mt-[104px]">
				<p className="font-secondary font-medium tracking-[0.08em] text-gray-500">EXPERIENCE</p>
				<div className="col-span-2 flex flex-col gap-10">
					<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6 gap-y-4">
						<p className="flex flex-col leading-[1.6]">
							<span className="font-secondary text-gray-700 tracking-[0.08em] font-bold">
								INDEPENDENT PRACTICE
							</span>
							<span className="font-secondary text-gray-500 tracking-[0.08em] font-medium">
								2024-PRESENT
							</span>
						</p>
						<p className="text-gray-500 leading-[1.6]">
							Designed and built responsive web applications using React.js and Next.js, delivering
							seamless user experiences and production-ready solutions for diverse clients.
						</p>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6 gap-y-4">
						<p className="flex flex-col leading-[1.6]">
							<span className="font-secondary text-gray-700 tracking-[0.08em] font-bold">
								KULIPAL TECHNOLOGIES LIMITED
							</span>
							<span className="font-secondary text-gray-500 tracking-[0.08em] font-medium">
								2024-2025
							</span>
						</p>
						<p className="text-gray-500 leading-[1.6]">
							Designed different product features across mobile and web platform while collaborating
							effectively with engineering to ensure pixel-perfect implementation.
						</p>
					</div>
				</div>
			</section>

			<section className="grid grid-cols-1 lg:grid-cols-3 gap-y-6 lg:gap-y-0 lg:gap-x-6 my-[52px] lg:my-[104px]">
				<p className="font-secondary font-medium tracking-[0.08em] text-gray-500">EDUCATION</p>
				<div className="col-span-2 flex flex-col gap-10">
					<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6 gap-y-4 ">
						<p className="text-gray-700 font-bold leading-[1.6] tracking-[0.08em] font-secondary">
							UNIVERSITY OF NIGERIA NSUKKA
						</p>
						<p className="flex flex-col leading-[1.6]">
							<span className="text-gray-700 font-semibold">Bachelor Of Engineering</span>
							<span className="text-gray-500 font-semibold">Civil Engineering</span>
						</p>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6 gap-y-4 items-center">
						<p className="text-gray-700 font-bold leading-[1.6] tracking-[0.08em] font-secondary">
							UI/UX DESIGN COURSE
						</p>
						<p className=" text-gray-700 font-semibold">Checklearn Batch (Experienced)</p>
					</div>
				</div>
			</section>
		</main>
	);
}
