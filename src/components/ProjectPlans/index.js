import React, { useState } from "react";
import "./styles.scss";

const ProjectPlans = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [clickedCard, setClickedCard] = useState(null);

	const cards = [
		{ id: 1, imgSrc: "layout-1.png", text: "Site Layout" },
		{
			id: 2,
			imgSrc: "layout-2.png",
			text: "Unit Plan 3.5 BHK 1902 SQ.FT (Approx.)",
		},
		{
			id: 3,
			imgSrc: "layout-3.png",
			text: "Unit Plan 3.5BHK + Servant 2090 SQ.FT (Approx.)",
		},
		{
			id: 4,
			imgSrc: "layout-4.png",
			text: "Unit Plan 4.5 BHK 2630 SQ.FT (Approx.)",
		},
	];

	const openModal = (card) => {
		setClickedCard(card);
		setModalIsOpen(true);
	};

	const closeModal = () => {
		setModalIsOpen(false);
		setClickedCard(null);
	};

	return (
		<div>
			<div className="card-container">
				{cards.map((card) => (
					<Card
						key={card.id}
						imgSrc={card.imgSrc}
						text={card.text}
						onClick={() => openModal(card)}
						className={card.id === 1 ? "card special" : "card"}
					/>
				))}
			</div>

			{modalIsOpen && (
				<>
					<div className="overlay-plan" onClick={closeModal} />
					<Modal clickedCard={clickedCard} closeModal={closeModal} />
				</>
			)}
		</div>
	);
};

const Card = ({ imgSrc, text, onClick, className }) => (
	<div className={className} onClick={onClick}>
		<img src={imgSrc} alt="Card" className="card-image" />
		<p>{text}</p>
	</div>
);

const Modal = ({ clickedCard, closeModal }) => (
	<div className={`modal ${clickedCard?.id === 1 ? "special" : ""}`}>
		{clickedCard?.id === 1 ? (
			<img
				src={clickedCard.imgSrc}
				alt="Modal Content"
				className="modal-image"
			/>
		) : (
			<div>
				<h2>Contact Us and Book your Dream Home Today @ 10 Lacs</h2>
				<form
					action="https://formspree.io/f/{your_form_id}"
					method="POST"
					className="contact-form"
				>
					<div className="form-group">
						<label htmlFor="name" className="form-label">
							Name:
						</label>
						<input
							type="text"
							id="name"
							name="name"
							required
							className="form-input"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="contact" className="form-label">
							Contact:
						</label>
						<input
							type="text"
							id="contact"
							name="contact"
							required
							className="form-input"
						/>
					</div>
					<button type="submit" className="form-button">
						Send
					</button>
					<button
						type="button"
						onClick={closeModal}
						className="form-button close-button"
					>
						Close
					</button>
				</form>
			</div>
		)}
	</div>
);

export default ProjectPlans;
