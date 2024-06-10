import "./App.css";
import LocationContainer from "./components/LocationContainer";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import OverviewSection from "./components/ProjectOverview";
import ProjectHighlights from "./components/ProjectHighlights";
import HeroBanner from "./components/HeroBanner";
import AboutDeveloper from "./components/AboutDeveloper";
import Marquee from "./components/Marquee";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function App() {
	return (
		<>
			<div>
				<HeroBanner />
				<ProjectHighlights />
				<Marquee />
				<AboutDeveloper />
				<OverviewSection />
				<LocationContainer />
				<ContactUs />
				<Footer />
			</div>

			<FloatingWhatsAppButton />
		</>
	);
}

const FloatingWhatsAppButton = () => {
	const phoneNumber = "9560046100";
	const message = "Hello, I would like to get in touch regarding...";
	const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
		message
	)}`;

	return (
		<a
			href={whatsappLink}
			className="floating-whatsapp-button"
			target="_blank"
			rel="noopener noreferrer"
		>
			<WhatsAppIcon style={{ marginRight: "0.4em" }} />
			Get in touch on WhatsApp
		</a>
	);
};

export default App;
