import { useState, useEffect, useRef } from "react";
import { handleCopy } from "./lib/utils";

export const useMediaQuery = (query: string) => {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const media = window.matchMedia(query);
		if (media.matches !== matches) {
			setMatches(media.matches);
		}
		const listener = () => setMatches(media.matches);
		media.addEventListener("change", listener);
		return () => media.removeEventListener("change", listener);
	}, [query, matches]);

	return matches;
};

export const useCopyEmail = () => {
	const [copyStatus, setCopyStatus] = useState("");
	let timeOutId: number | undefined;
	const copyEmail = () => {
		handleCopy(setCopyStatus);
		if (timeOutId !== undefined) {
			clearTimeout(timeOutId);
		}
		timeOutId = setTimeout(() => {
			setCopyStatus("");
		}, 800);
	};

	return {
		copyStatus,
		copyEmail,
	};
};

export function useRealTime() {
	const [time, setTime] = useState("");
	const timeRef = useRef<null | number>(null);

	useEffect(() => {
		const updateTime = () => {
			const date = new Date();
			let hours = date.getHours();
			const minutes = date.getMinutes();
			const ampm = hours >= 12 ? "PM" : "AM";
			hours = hours % 12 || 12;
			const formattedtime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
				2,
				"0"
			)}${ampm}`;
			setTime(formattedtime);
		};

		updateTime();
		timeRef.current = setInterval(updateTime, 1000);

		return () => {
			if (timeRef.current) clearInterval(timeRef.current);
		};
	}, []);

	return time;
}
