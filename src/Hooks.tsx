import { useState, useEffect } from "react";
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
