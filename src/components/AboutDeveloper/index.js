import React from "react";
import "./style.scss"; // Make sure to create this CSS file

const AboutDeveloper = () => {
	return (
		<div className="about-section">
			<div className="text-column">
				<h2>Shaping Luxury Living in Gurugram</h2>
				<p>
					Since 2007, M3M Properties has been redefining the real estate
					landscape in Gurugram, India. Our dedication to excellence,
					innovation, and sustainability sets us apart as a premier developer of
					high-quality residential, commercial, and retail properties.
				</p>
				<p>
					Our portfolio boasts luxurious apartments, villas, and penthouses,
					alongside state-of-the-art office spaces, shopping malls, and
					entertainment hubs. With a focus on eco-friendly designs and features
					such as rainwater harvesting and solar panels, we are committed to
					creating sustainable living environments.
				</p>
				<h2>Excellence and Innovation in Every Project</h2>
				<p>
					At M3M Properties, we partner with world-renowned architects and
					designers to bring our visionary projects to life. Our collaboration
					with top contractors and suppliers ensures the highest standards of
					construction and timely completion of all our developments.
				</p>
				<p>
					Our efforts have been recognized with numerous awards, including the
					'Luxury Project of the Year' at the 2018 Realty Plus Excellence Awards
					for M3M Golf Estate. We remain committed to delivering unparalleled
					living and working spaces that embody trust, quality, and innovation.
				</p>
			</div>

			<div className="image-column">
				<img
					src="https://m3mindianoida.in/wp-content/uploads/2023/09/M3M-Logo-1.jpg"
					alt="M3M Properties"
				/>
			</div>
		</div>
	);
};

export default AboutDeveloper;
