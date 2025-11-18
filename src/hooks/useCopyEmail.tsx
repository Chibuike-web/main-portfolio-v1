import { useState } from "react";
import { handleCopy } from "../lib/copy";

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
