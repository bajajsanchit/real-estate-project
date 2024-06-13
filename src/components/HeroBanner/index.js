import React from "react";
import "./style.scss";

const HeroBanner = () => {
	const phoneNumber = "9560046100";
	const message = "I am interested to know more, requesting a call back !";
	const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
		message
	)}`;

	return (
		<div className="hero-container">
			<div className="hero-banner">
				<div className="overlay"></div>
				<div className="header">
					<img
						alt="Signature Logo"
						src="https://sghighrise.anantrealties.in/assets/images/logo.png"
						className="signature-logo"
					/>
				</div>
				<div className="hero-content">
					<h1 className="hero-title">
						Signature Global Titanium at Sector 71, Gurgaon
					</h1>

					<p className="hero-subtitle">
						Discover unparalleled luxury on SPR Road. This architectural
						masterpiece, IGBC GOLD Pre-Certified, redefines luxury living with
						unique features and sustainable design. Step into a world of
						grandeur, reserved for the privileged few. Where triumph meets
						exclusivity, and every moment exudes opulence. Titanium 71 sets the
						standard for regal living, offering an ambiance rich in indulgence.
						It's an oasis befitting the royal you!
					</p>

					<a href={whatsappLink}>
						<button className="hero-button">
							Book YOUR DREAM HOme <span className="price-tag">@ 11 Lacs</span>
						</button>
					</a>
				</div>

				<div className="info-boxes">
					<div className="info-box">Book Now @ ₹11 Lakhs*</div>
					<div className="info-box">1,00,000 sq ft. Clubhouse</div>
					<div className="info-box">90% Open Area</div>
					<div className="info-box">55+ Amenities</div>
				</div>
			</div>
		</div>
	);
};

export default HeroBanner;
