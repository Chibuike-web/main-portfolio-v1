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
