import "./App.css";
import LocationContainer from "./components/LocationContainer";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import OverviewSection from "./components/ProjectOverview";
import ProjectHighlights from "./components/ProjectHighlights";
import HeroBanner from "./components/HeroBanner";
import AboutDeveloper from "./components/AboutDeveloper";
import Marquee from "./components/Marquee";
import ProjectPlans from "./components/ProjectPlans";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";

function App() {
	return (
		<>
			<div>
				<HeroBanner />
				<OverviewSection />
				<AboutDeveloper />
				<ProjectPlans />
				<Marquee />
				<ProjectHighlights />

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
	const message = "I am interested to know more, requesting a call back !";
	const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
		message
	)}`;

	return (
		<>
			<a
				href={whatsappLink}
				className="floating-whatsapp-button"
				target="_blank"
				rel="noopener noreferrer"
			>
				<WhatsAppIcon style={{ marginRight: "0.4em" }} />
				Get in touch on WhatsApp
			</a>

			<a
				href={"tel:+919560046100"}
				className="floating-call-button"
				target="_blank"
				rel="noopener noreferrer"
			>
				<CallIcon style={{ marginRight: "0.4em" }} />
				Call us now
			</a>
		</>
	);
};

export default App;
