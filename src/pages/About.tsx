import image from "../assets/image.png";

export default function About() {
	return (
		<main className="mx-auto w-full max-w-[1296px] flex flex-col justify-between px-6 xl:px-0">
			<section className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6 mt-[52px] lg:mt-[104px]">
				<img src={image} alt="A portrait of Chibuike" className="w-full" width={416} height={419} />
				<div className="col-span-2 flex flex-col gap-4">
					<h1 className="text-[2rem] md:text-[4rem] font-semibold text-gray-700">
						Hi, I'm Chibuike Maduabuchi
					</h1>
					<div className="text-gray-500 text-[18px] leading-[1.6] space-y-3.5 col-span-2">
						<p>
							I’ve always thought in systems. As a child, I was curious about how parts fit together
							to form something bigger. That mindset led me to study Civil Engineering.
						</p>
						<p>
							But I became increasingly drawn to the digital world. Unlike the physical one we are
							born into, the digital world is built by people. Its only limitation is our
							imagination.
						</p>
						<p>
							That curiosity led me into brand design, where I shaped the visual identities of
							startups and companies. From there, I moved into digital product design, creating
							digital solutions that solve everyday problems. Eventually, I began learning to code
							so I could bring my ideas to life.
						</p>
						<p>
							Now I work at the intersection of design and engineering. I build software that adapts
							to people, not the other way around. My focus is on accessibility, clarity, and ease
							of use. I care deeply about systems that are smart, simple, and inclusive.
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
								PRESTDESK TECHNOLOGIES LIMITED
							</span>
							<span className="font-secondary text-gray-500 tracking-[0.08em] font-medium">
								2023-PRESENT
							</span>
						</p>
						<p className="text-gray-500 leading-[1.6] ">
							Led visual brand development and marketing design efforts, creating cohesive digital
							assets and campaigns that strengthen brand identity and boost online engagement.
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
					<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6 gap-y-4">
						<p className="text-gray-700 font-bold leading-[1.6] tracking-[0.08em] font-secondary">
							UNIVERSITY OF NIGERIA NSUKKA
						</p>
						<p className="flex flex-col leading-[1.6]">
							<span className="text-gray-700 font-semibold">Bachelor Of Engineering</span>
							<span className="text-gray-500 font-semibold">Civil Engineering</span>
						</p>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6 gap-y-4">
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
