import React from "react";
import "./style.scss"; // Make sure to create this CSS file

const AboutDeveloper = () => {
	return (
		<div className="about-section">
			<div className="text-column">
				<h2>Transforming Dreams into Reality</h2>
				<p>
					Since 2014, Signature Global has been at the forefront of real estate
					development in India, steadfastly adhering to our pillars of trust,
					quality, and excellence. Our mission goes beyond building houses; we
					craft homes that harbor happiness and contentment.
				</p>
				<p>
					Backed by prestigious investors like HDFC and IFC, we bring high
					corporate governance and a commitment to deliver unparalleled living
					experiences. With over 6.7 million sq. ft. delivered and many more in
					the pipeline, we're shaping the future of affordable and mid-segment
					housing in Delhi NCR.
				</p>
				<h2>Integrity and Innovation in Every Brick</h2>
				<p>
					Signature Global is synonymous with trust and reliability. Our
					dedication to quality and transparency has earned us a significant
					presence in the real estate industry. Supported by global investors,
					we uphold the highest standards of construction and ethical practices,
					delivering luxurious living spaces that you can count on.
				</p>
			</div>
			<div className="image-column">
				<img
					src="https://signature-project.in/sector71-highrise/images/logo.webp"
					alt="Signature Global"
				/>
			</div>
		</div>
	);
};

export default AboutDeveloper;
