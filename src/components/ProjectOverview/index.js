import React from "react";
import "./styles.scss";

const amenities = [
	// {
	// 	title: "Multipurpose Hall",
	// 	image:
	// 		"https://images.unsplash.com/photo-1542665952-14513db15293?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	// 	subtext: "Ideal for events and gatherings with family and friends.",
	// },
	{
		title: "Gymnasium",
		image:
			"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		subtext:
			"State-of-the-art equipment for a comprehensive workout experience.",
	},
	{
		title: "Jogging / Cycle Track",
		image:
			"https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		subtext: "Beautifully landscaped track for your fitness and leisure.",
	},
	{
		title: "Luxury Clubhouse",
		image:
			"https://images.unsplash.com/photo-1599121118834-14b8ab00020c?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		subtext: "Exclusive clubhouse offering premium amenities and services.",
	},
	{
		title: "Swimming Pool",
		image:
			"https://images.unsplash.com/photo-1560090995-01632a28895b?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		subtext: "All-weather swimming pool for relaxation and exercise.",
	},
	// {
	// 	title: "Privacy",
	// 	image:
	// 		"https://images.unsplash.com/photo-1633265486064-086b219458ec?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	// 	subtext: "Designed to ensure maximum privacy and comfort for residents.",
	// },
	{
		title: "Secure Community",
		image:
			"https://images.unsplash.com/flagged/photo-1570343271132-8949dd284a04?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		subtext: "24/7 security to ensure the safety of all residents.",
	},
	{
		title: "Ecologically Friendly",
		image:
			"https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2813&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		subtext: "Environmentally conscious design and sustainable living.",
	},
	{
		title: "Kids Play Area",
		image:
			"https://images.unsplash.com/photo-1599376672737-bd66af54c8f5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		subtext: "Fun and safe play areas for children of all ages.",
	},
	{
		title: "Modular Kitchen with Hob & Chimney",
		image:
			"https://images.unsplash.com/photo-1539922980492-38f6673af8dd?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		subtext: "Modern kitchens equipped with the latest appliances.",
	},
];

const OverviewSection = () => {
	return (
		<div className="overview-section">
			<div className="info-boxing">
				<div className="info-box">Possession Date March 2028</div>
				<div className="info-box">Discount of 2000/sqft</div>
				<div className="info-box">Customised Payment Plan</div>
				<div className="info-box">Rs. 3cr Onwards</div>
			</div>

			<h1>Welcome to M3M Golf Hills, Sector-79, Gurgaon</h1>
			<p>
				This exquisite residential marvel by M3M Properties promises a sublime
				living experience in an ultra-modern enclave. With a prime location in a
				rapidly developing area, M3M Golf Hills offers an exceptional lifestyle
				in a serene setting.
			</p>

			<p>
				Discover spacious 2.5, 3.5, and 4.5 BHK residences with top-notch
				architecture. Enjoy features like modern kitchens, wooden flooring in
				master bedrooms, imported marble flooring, and spacious balconies with
				breathtaking golf course views.
			</p>

			<p>
				M3M Golf Hills is designed for discerning property buyers, offering
				ample privacy and attention to detail in every corner. Experience a
				lifestyle that matches global ultra-luxury standards, with a perfect
				blend of aesthetics and functionality. Your dream home awaits at M3M
				Golf Hills, Sector 79, Gurgaon.
			</p>

			<div style={{ maxWidth: "1100px" }} className="amenities-section">
				{amenities.map((amenity, index) => (
					<div className="amenity-card" key={index}>
						<img src={amenity.image} alt={amenity.title} />
						<h3>{amenity.title}</h3>
						<p>{amenity.subtext}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default OverviewSection;
