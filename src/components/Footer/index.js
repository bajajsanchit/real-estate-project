import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./style.scss";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-container">
				<div className="footer-section">
					<div className="follow-text">Follow Us & Find Your Dream Home</div>
					<div className="social-icons">
						<a
							href="https://www.facebook.com/profile.php?id=61561533697386&mibextid=LQQJ4d"
							className="social-icon"
							target="_blank"
							rel="noreferrer"
						>
							<FacebookIcon />
						</a>
						{/* <a href="https://twitter.com" className="social-icon">
							<TwitterIcon />
						</a> */}
						<a
							href="https://www.instagram.com/nestquestwithneha/"
							target="_blank"
							rel="noreferrer"
							className="social-icon"
						>
							<InstagramIcon />
						</a>
						{/* <a href="https://linkedin.com" className="social-icon">
							<LinkedInIcon />
						</a> */}
					</div>
				</div>
			</div>

			<div className="footer-bottom">
				<p>© {new Date().getFullYear()} All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
