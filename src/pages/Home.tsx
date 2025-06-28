import { CopyIcon, LinkedinLogo, RightArrowIcon } from "../assets/icons";
import Button from "../components/Button";
import Card from "../components/Card";
import { useCopyEmail } from "../Hooks";
import { projects } from "../lib/utils";

export default function Home() {
	const { copyStatus, copyEmail } = useCopyEmail();

	return (
		<div>
			<section className="grid grid-cols-1 md:grid-cols-3 md:gap-x-6 gap-y-5 md:gap-y-10 mx-auto w-full max-w-[1296px] px-6 xl:px-0 mt-[52px] sm:mt-[104px]">
				<h1 className="flex flex-col gap-1 font-semibold tracking-[-0.02em] text-[2rem] sm:text-[4rem] col-span-3 lg:col-span-2 text-gray-700">
					<span>Hi, I’m Chibuike</span>
					<span>Creative Technologist</span>
				</h1>
				<div className="flex flex-col gap-10 col-span-3 lg:col-span-1">
					<p className="leading-[1.6] text-gray-500 font-medium w-full">
						I’m a hybrid of{" "}
						<span className="font-semibold text-gray-700">designer and developer</span>. I blend{" "}
						<span className="font-semibold text-gray-700">design and code</span> to build{" "}
						<span className="font-semibold text-gray-700">beautiful</span> and{" "}
						<span>human-centered software</span>
						that <span className="font-semibold text-gray-700">looks good</span> and{" "}
						<span>feels good</span> to use.
					</p>
					<div className="flex items-center gap-6">
						<Button
							size="sm"
							variant="primary"
							className="flex gap-[6px] items-center relative"
							onClick={copyEmail}
						>
							Copy email <CopyIcon />{" "}
							{copyStatus && (
								<span className="p-2 rounded-[8px] bottom-[-10px] left-0 translate-y-1/1 absolute bg-gray-700 text-white w-max leading-[1.2]">
									{copyStatus}
								</span>
							)}
						</Button>
						<a
							href="https://www.linkedin.com/in/chibuike-maduabuchi"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button
								size="sm"
								variant="primary"
								className="flex gap-[6px] items-center bg-gray-100 text-gray-700"
							>
								Linkedin <LinkedinLogo />
							</Button>
						</a>
					</div>
				</div>
			</section>
			<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 mx-auto w-full max-w-[1296px] px-6 xl:px-0 my-[52px] md:my-[104px]">
				{projects.map((item) => (
					<Card key={item.id}>
						<Card.Image>
							<div className="w-full h-full bg-gray-100"></div>
						</Card.Image>
						<Card.Content>
							<div className="flex flex-col gap-[10px]">
								<Card.Title>
									<h3>{item.title.toUpperCase()}</h3> <p>{item.year}</p>
								</Card.Title>
								<Card.SubTitle>{item.subtitle.toUpperCase()}</Card.SubTitle>
							</div>
							<div className="flex gap-[10px]">
								<Button
									variant={item.notReady ? "disabled" : "primary"}
									size="md"
									fullWidth
									onClick={() => {
										console.log("Click");
									}}
									className={item.notReady ? "flex items-center justify-center" : ""}
								>
									{Array.isArray(item.type) ? item.type[0].value : item.type.value}
									{item.notReady ? "" : <RightArrowIcon fill="white" />}
								</Button>
								{Array.isArray(item.type) && (
									<Button variant="outline" size="md" fullWidth>
										{item.type[1].value}
										<RightArrowIcon />
									</Button>
								)}
							</div>
						</Card.Content>
					</Card>
				))}
			</section>
		</div>
	);
}
