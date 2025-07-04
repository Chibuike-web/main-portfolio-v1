import { Routes, Route, useLocation } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ScrollToTop from "./ScrollToTop";
import BulkAirtime from "./pages/BulkAirtime";

export default function App() {
	const location = useLocation();
	const pathname = location.pathname;

	return (
		<>
			<ScrollToTop />
			{(pathname === "/" || pathname === "/about") && <Navbar />}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/bulk-airtime" element={<BulkAirtime />} />
			</Routes>
			{(pathname === "/" || pathname === "/about") && <Footer />}
		</>
	);
}
