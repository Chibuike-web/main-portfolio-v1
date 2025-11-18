import { useEffect, useRef, useState } from "react";

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
