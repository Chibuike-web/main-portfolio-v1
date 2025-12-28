import { v4 as uuidv4 } from "uuid";
import nomba from "../assets/home/Nomba.svg";
import kulipal from "../assets/home/Kulipal.svg";
import medibridge from "../assets/home/Medibridge.svg";
import zenly from "../assets/home/Zenly.svg";
import modimal from "../assets/home/Modimal.svg";
import golobe from "../assets/home/Golobe.svg";
import sideProject from "../assets/home/Side-Project.svg";
import euphoria from "../assets/home/Euphoria.svg";
import exclusive from "../assets/home/Exclusive.svg";

export type ProjectType = { value: string; link: string };

export type Projects = {
	id: string;
	image: string;
	title: string;
	subtitle: string;
	year: number;
	type: ProjectType | ProjectType[];
	category: string;
};

export const projects: Projects[] = [
	{
		image: nomba,
		title: "Nomba",
		subtitle: "Bulk Airtime",
		year: 2024,
		type: { value: "Case Study", link: "/bulk-airtime" },
		category: "design",
	},
	{
		image: kulipal,
		title: "Kulipal",
		subtitle: "Smart Ticketing",
		year: 2025,
		type: { value: "Case Study", link: "/smart-ticketing" },
		category: "design",
	},
	{
		image: medibridge,
		title: "Medibridge",
		subtitle: "AI-Powered EHR",
		year: 2025,
		type: { value: "Case Study", link: "/medibridge" },
		category: "design",
	},
	{
		image: zenly,
		title: "Zenly",
		subtitle: "Burnout Leave",
		year: 2024,
		type: { value: "Case Study", link: "/burnout-leave" },
		category: "design",
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
		category: "engineering",
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
		category: "engineering",
	},
	{
		image: exclusive,
		title: "Exclusive",
		subtitle: "Ecommerce Website",
		year: 2025,
		type: [
			{ value: "Live Site", link: "https://react-task-four-two.vercel.app/" },
			{ value: "Github", link: "https://github.com/Chibuike-web/react-task-four" },
		],
		category: "engineering",
	},
	{
		image: euphoria,
		title: "Euphoria",
		subtitle: "Ecommerce Website",
		year: 2025,
		type: [
			{ value: "Live Site", link: "https://euphoria-puce.vercel.app/" },
			{
				value: "Github",
				link: "https://github.com/Chibuike-web/euphoria",
			},
		],
		category: "engineering",
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
		category: "engineering",
	},
	{
		image: sideProject,
		title: "Side-Project",
		subtitle: "AI-Form Builder",
		year: 2025,
		type: {
			value: "Github",
			link: "https://github.com/Chibuike-web/ai-form-builder",
		},
		category: "engineering",
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
		category: "engineering",
	},
].map((item) => ({
	id: uuidv4(),
	...item,
}));
