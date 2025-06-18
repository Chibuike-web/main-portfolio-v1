import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route index element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
			<Footer />
		</>
	);
}
