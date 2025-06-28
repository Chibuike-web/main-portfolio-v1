import type { ClassValue } from "clsx";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { v4 as uuidv4 } from "uuid";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const handleCopy = async (
	setStatus: (msg: string) => void,
	email: string = "chibuikemaduabuchi2023@gmail.com"
) => {
	try {
		await navigator.clipboard.writeText(email);
		setStatus("Copied!");
	} catch {
		setStatus("Failed to copy");
	}
};

type ProjectType = { value: string; link: string };

type Projects = {
	id: string;
	title: string;
	subtitle: string;
	year: number;
	type: ProjectType | ProjectType[];
	notReady?: boolean;
};

export const projects: Projects[] = [
	{
		title: "Nomba",
		subtitle: "Bulk Airtime",
		year: 2024,
		type: { value: "Case Study", link: "" },
	},
	{
		title: "Kulipal",
		subtitle: "Mobile App Redesign",
		year: 2025,
		type: { value: "Case Study", link: "" },
	},
	{
		title: "Medibridge",
		subtitle: "AI-Powered EHR",
		year: 2024,
		type: { value: "Case Study", link: "" },
	},
	{
		title: "Zenly",
		subtitle: "Burnout Leave",
		year: 2024,
		type: { value: "Case Study", link: "" },
	},
	{
		title: "Modimal",
		subtitle: "Women Clothing Ecommerce Platform",
		year: 2025,
		type: [
			{ value: "Live Site", link: "" },
			{ value: "Github", link: "" },
		],
	},
	{
		title: "Golobe",
		subtitle: "Travel Booking Platform",
		year: 2025,
		type: { value: "Case Study", link: "" },
	},

	{
		title: "Side-Project",
		subtitle: "Movie Search",
		year: 2025,
		type: { value: "Github", link: "" },
	},
	{
		title: "Side-Project",
		subtitle: "Pdf-Summarizer",
		year: 2025,
		type: { value: "Github", link: "" },
	},
	{
		title: "Side-Project",
		subtitle: "Remove Background",
		year: 2025,
		type: { value: "Github", link: "" },
	},
	{
		title: "Side Project",
		subtitle: "Recipe Finder",
		year: 2025,
		type: { value: "Github", link: "" },
	},
	{
		title: "Euphoria",
		subtitle: "Ecommerce (Apparels) Website",
		year: 2025,
		type: { value: "Work in Progress", link: "" },
		notReady: true,
	},
	{
		title: "Clicon",
		subtitle: "Ecommerce Marketplace Website",
		year: 2025,
		type: { value: "Work in Progress", link: "" },
		notReady: true,
	},
].map((item) => ({
	id: uuidv4(),
	...item,
}));
