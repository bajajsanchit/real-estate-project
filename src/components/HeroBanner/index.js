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
						alt="M3M Logo"
						src="https://m3mindianoida.in/wp-content/uploads/2023/10/m3m-side-logo.png"
						className="signature-logo"
					/>
				</div>
				<div className="hero-content">
					<h1 className="hero-title">M3M GOLF HILLS At Sector 79, Gurgaon</h1>

					<p className="hero-subtitle">
						Discover luxurious living at M3M Golf Hills Gurgaon with our
						exquisite 4.5 BHK Golf Residences. These Hill Living Apartments are
						designed to offer unparalleled comfort and opulence, redefining
						sophistication. Enjoy exclusive access to a state-of-the-art
						clubhouse, dive into relaxation with our luxurious swimming pool,
						and stay fit in our fully equipped gymnasium. Your children will
						love the safe and fun play area, while you can unwind in the
						beautifully landscaped gardens.
					</p>

					<a href={whatsappLink}>
						<button className="hero-button">
							Book YOUR DREAM HOme @ 10 Lacs
							{/* <span className="price-tag">@ 11 Lacs</span> */}
						</button>
					</a>
				</div>

				<div className="info-boxes">
					<div className="info-box">Possession Date March 2028</div>
					<div className="info-box">Discount of 20000/sqft</div>
					<div className="info-box">Customised Payment Plan</div>
					<div className="info-box">3cr Onwards</div>
				</div>
			</div>
		</div>
	);
};

export default HeroBanner;
