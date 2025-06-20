export const handleCopy = (email: string = "chibuikemaduabuchi2023@gmail.com") => {
	navigator.clipboard.writeText(email);
	alert("Email copied to clipboard!");
};
