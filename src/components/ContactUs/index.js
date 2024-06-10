import { useState } from "react";
import "./style.scss";

const ContactUs = () => {
	const [name, setName] = useState("");
	const [contactNumber, setContactNumber] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();

		console.log("Name:", name);
		console.log("Contact Number:", contactNumber);
	};

	return (
		<div className="contact-container">
			<h2 className="contact-title">Say Hello – We’re Excited to Connect!</h2>
			<p className="contact-description">
				Your dream home awaits. Get in touch with us today, and let’s start the
				conversation. We can’t wait to hear from you!
			</p>
			<form onSubmit={handleSubmit} className="contact-form">
				<div className="form-group">
					<label htmlFor="name" className="form-label">
						Your Name
					</label>
					<input
						type="text"
						id="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						className="form-input"
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="contactNumber" className="form-label">
						Contact Number
					</label>
					<input
						type="text"
						id="contactNumber"
						value={contactNumber}
						onChange={(e) => setContactNumber(e.target.value)}
						className="form-input"
						required
					/>
				</div>

				<button type="submit" className="form-button">
					Submit Enquiry
				</button>
			</form>
		</div>
	);
};

export default ContactUs;
