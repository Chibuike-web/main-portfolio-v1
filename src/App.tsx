import { Routes, Route, useLocation } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ScrollToTop from "./ScrollToTop";
import BulkAirtime from "./pages/BulkAirtime";
import SmartTicketing from "./pages/SmartTicketing";
import Medibridge from "./pages/Medibridge";
import { ReactLenis, type LenisRef } from "lenis/react";
import { useEffect, useRef } from "react";
import { cancelFrame, frame } from "motion/react";

export default function App() {
	const location = useLocation();
	const pathname = location.pathname;
	const lenisRef = useRef<LenisRef>(null);

	useEffect(() => {
		function update(data: { timestamp: number }) {
			const time = data.timestamp;
			lenisRef.current?.lenis?.raf(time);
		}

		frame.update(update, true);

		return () => cancelFrame(update);
	}, []);

	return (
		<>
			<ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
			<ScrollToTop />
			{(pathname === "/" || pathname === "/about") && <Navbar />}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/bulk-airtime" element={<BulkAirtime />} />
				<Route path="/smart-ticketing" element={<SmartTicketing />} />
				<Route path="/medibridge" element={<Medibridge />} />
			</Routes>
			{(pathname === "/" || pathname === "/about") && <Footer />}
		</>
	);
}
