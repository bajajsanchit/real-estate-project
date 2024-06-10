import React from "react";
import "./style.scss";

const amenities = [
	"Running Deck/Balcony",
	"5 Tier Security",
	"Luxury Club House",
	"Infinity Swimming Pool",
	"Landscaped Central Greens",
	"Professional Gym",
	"Jogging Track",
	"Smart Homes",
	"Multi Cuisine Restaurant",
	"Concierge",
	"Dedicated Kids Zone",
	"Tennis & Badminton Court",
];

const Marquee = () => {
	return (
		<div className="marquee">
			<div className="marquee-content">
				{amenities.concat(amenities).map((amenity, index) => (
					<span key={index} className="marquee-item">
						{amenity}
					</span>
				))}
			</div>
		</div>
	);
};

export default Marquee;
