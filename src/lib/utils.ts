import type { ClassValue } from "clsx";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { v4 as uuidv4 } from "uuid";
import nomba from "../assets/home/Nomba.svg";
import kulipal from "../assets/home/Kulipal.svg";
import medibridge from "../assets/home/Medibridge.svg";
import zenly from "../assets/home/Zenly.svg";
import modimal from "../assets/home/Modimal.svg";
import golobe from "../assets/home/Golobe.svg";
import sideProject from "../assets/home/Side-Project.svg";
import euphoria from "../assets/home/Euphoria.svg";
import clicon from "../assets/home/Clicon.svg";

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

export type ProjectType = { value: string; link: string };

type Projects = {
	id: string;
	image: string;
	title: string;
	subtitle: string;
	year: number;
	type: ProjectType | ProjectType[];
	notReady?: boolean;
};

export const projects: Projects[] = [
	{
		image: nomba,
		title: "Nomba",
		subtitle: "Bulk Airtime",
		year: 2024,
		type: { value: "Case Study", link: "/bulk-airtime" },
	},
	{
		image: kulipal,
		title: "Kulipal",
		subtitle: "Smart Ticketing",
		year: 2025,
		type: { value: "Case Study", link: "/smart-ticketing" },
	},
	{
		image: medibridge,
		title: "Medibridge",
		subtitle: "AI-Powered EHR",
		year: 2025,
		type: { value: "Case Study", link: "/medibridge" },
	},
	{
		image: zenly,
		title: "Zenly",
		subtitle: "Burnout Leave",
		year: 2024,
		type: { value: "Case Study", link: "/zenly" },
	},
	{
		image: modimal,
		title: "Modimal",
		subtitle: "Women Clothing Ecommerce Platform",
		year: 2025,
		type: [
			{ value: "Live Site", link: "https://modimal-4keo.vercel.app/" },
			{ value: "Github", link: "https://github.com/Chibuike-web/Modimal" },
		],
	},
	{
		image: golobe,
		title: "Golobe",
		subtitle: "Travel Booking Platform",
		year: 2025,
		type: [
			{ value: "Live Site", link: "https://golobe-otv2.vercel.app/" },
			{ value: "Github", link: "https://github.com/Chibuike-web/Golobe" },
		],
	},

	{
		image: sideProject,
		title: "Side-Project",
		subtitle: "Movie Search",
		year: 2025,
		type: {
			value: "Github",
			link: "https://github.com/Chibuike-web/Practice-Projects/tree/main/Movie%20Search",
		},
	},
	{
		image: sideProject,
		title: "Side-Project",
		subtitle: "Pdf-Summarizer",
		year: 2025,
		type: {
			value: "Github",
			link: "https://github.com/Chibuike-web/AI-Experiments/tree/main/PDF%20Summarizer",
		},
	},
	{
		image: sideProject,
		title: "Side-Project",
		subtitle: "Remove Background",
		year: 2025,
		type: {
			value: "Github",
			link: "https://github.com/Chibuike-web/AI-Experiments/tree/main/RemoveBg",
		},
	},
	{
		image: sideProject,
		title: "Side Project",
		subtitle: "Recipe Finder",
		year: 2025,
		type: {
			value: "Github",
			link: "https://github.com/Chibuike-web/Practice-Projects/tree/main/Recipe%20Finder",
		},
	},
	{
		image: euphoria,
		title: "Euphoria",
		subtitle: "Ecommerce (Apparels) Website",
		year: 2025,
		type: { value: "Work in Progress", link: "" },
		notReady: true,
	},
	{
		image: clicon,
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
