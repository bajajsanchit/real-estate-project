import "./style.scss";

const ContactUs = () => {
	return (
		<div className="contact-container">
			<h2 className="contact-title">Say Hello – We’re Excited to Connect!</h2>
			<p className="contact-description">
				Your dream home awaits. Get in touch with us today, and let’s start the
				conversation. We can’t wait to hear from you!
			</p>
			<form
				action="https://formspree.io/f/moqgggbq" // Replace with your Formspree endpoint
				method="POST"
				className="contact-form"
			>
				<div className="form-group">
					<label htmlFor="name" className="form-label">
						Your Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
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
						name="contactNumber"
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
