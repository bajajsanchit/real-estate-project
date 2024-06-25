import React, { useEffect, useState } from "react";
import "./styles.scss";

const phoneNumber = "9560046100";
const message = "I am interested to know more, requesting a call back !";
const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
	message
)}`;

const highlights = [
	{
		title: "12 towers spreading across 23 acres",
		image:
			"https://images.unsplash.com/photo-1527690499469-ef2eff9c6735?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		subtext:
			"Our expansive project covers 23 acres, offering unparalleled living space and comfort. With modern amenities and beautiful landscapes, it provides a perfect blend of urban living and nature.",
	},
	{
		title: "Total 1100 apartments",
		image:
			"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		subtext:
			"With a total of 1100 apartments, each designed to provide luxury and convenience. Enjoy spacious layouts, high-end finishes, and thoughtful details in every corner.",
	},
	{
		title: "Multiple Waterbodies",
		image:
			"https://images.unsplash.com/photo-1626069456127-98577775f0f3?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		subtext:
			"Enjoy the serene ambiance created by our beautifully designed waterbodies. These water features not only enhance the aesthetic appeal but also promote a tranquil living environment.",
	},
	{
		title: "4 Corner Apartments to one floor",
		image:
			"https://images.unsplash.com/photo-1603375605373-4b2229bd5864?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		subtext:
			"Experience enhanced privacy and exclusivity with only four apartments to a core. This design ensures minimal sharing of common spaces and maximum personal space.",
	},
	{
		title: "65% open and green area",
		image:
			"https://plus.unsplash.com/premium_photo-1681910981631-c3aebc0c3b8f?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		subtext:
			"A significant portion of our project is dedicated to open and green spaces. Residents can enjoy lush greenery, open parks, and recreational areas for a healthy lifestyle.",
	},
	{
		title: "5 dedicated elevators for 2 apartments",
		image:
			"https://images.unsplash.com/photo-1631049780190-31c1f051a2a9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		subtext:
			"Each core has 5 dedicated elevators, ensuring quick and convenient access. This reduces wait times and enhances the overall living experience for residents.",
	},
	{
		title: "Extra Spacious Decks",
		image:
			"https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		subtext:
			"Relax and entertain on our extra spacious decks, designed for your comfort. These decks provide ample space for outdoor activities and offer stunning views of the surroundings.",
	},
	{
		title: "EV Charging Bays, Dedicated Car Washing Facility",
		image:
			"https://images.unsplash.com/photo-1617886322207-6f504e7472c5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		subtext:
			"Convenient amenities like EV charging bays and a dedicated car washing facility. These modern conveniences cater to your every need, ensuring a hassle-free lifestyle.",
	},
	{
		title: "Master Bedroom: Wooden Flooring, Acrylic Emulsion",
		image:
			"https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		subtext:
			"Master bedroom with premium finishes and advanced climate control for ultimate luxury. Enjoy features like wooden flooring, acrylic emulsion, and a sophisticated VRV/VRF system.",
	},
	{
		title: "Living Room: Italian Flooring, Acrylic Emulsion",
		image:
			"https://images.unsplash.com/photo-1628592102751-ba83b0314276?q=80&w=2897&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		subtext:
			"Elegant living room with Italian flooring and top-notch materials for a lavish feel. The room is designed to provide a luxurious and comfortable environment for your family.",
	},
];

const ProjectHighlights = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % highlights.length);
		}, 3000); // Change highlight every 3 seconds

		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<div className="info-boxing">
				<div className="info-box">Possession Date March 2028</div>
				<div className="info-box">Discount of 20000/sqft</div>
				<div className="info-box">Customised Payment Plan</div>
				<div className="info-box">3cr Onwards</div>
			</div>

			<div className="project-highlights">
				<div className="highlights" style={{ maxWidth: "80%" }}>
					<h2>Project Highlights</h2>
					<p>
						Immerse yourself in an unmatched lifestyle with M3M Golf Hills'
						unparalleled amenities
					</p>

					<a href={whatsappLink}>
						<button
							style={{
								background: "#3F983D",
								padding: "14px 16px",
								borderRadius: "4px",
								fontSize: "15px",
								fontWeight: "700",
								color: "white",
								border: "none",
								textTransform: "uppercase",
								cursor: "pointer",
								marginBottom: "1.2em",
								width: "100%",
							}}
						>
							Book your dream home
						</button>
					</a>

					<div>
						<h3>{highlights[currentIndex].title}</h3>
						<p>{highlights[currentIndex].subtext}</p>
					</div>
				</div>

				<div className="carousel">
					<img
						src={highlights[currentIndex].image}
						alt={highlights[currentIndex].title}
					/>
				</div>
			</div>
		</>
	);
};

export default ProjectHighlights;
