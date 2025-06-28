import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ScrollToTop from "./ScrollToTop";
import BulkAirtime from "./pages/BulkAirtime";

export default function App() {
	return (
		<>
			<ScrollToTop />
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/bulk-airtime" element={<BulkAirtime />} />
			</Routes>
			<Footer />
		</>
	);
}
