import "./style.scss";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SchoolIcon from "@mui/icons-material/School";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import FactoryIcon from "@mui/icons-material/Factory";

function LocationContainer() {
	return (
		<div className="location-container">
			<div className="map-container">
				<iframe
					title="Signature Global Map"
					style={{ height: "100%", width: "100%" }}
					frameborder="0"
					src="https://www.google.com/maps/embed/v1/place?q=m3m+golf+hill&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
				></iframe>
			</div>

			<div style={{ padding: "1.5em" }}>
				<div className="location-content">
					<div className="title">Live in Gurgaon, Enjoy Delhi</div>

					<div className="subtext">Prime Location, Unmatched Convenience</div>
					<p className="content">
						Experience the best of both worlds. Nestled in the heart of Gurgaon,
						your new home offers easy access to Delhi's vibrant life.
					</p>

					{/* <div className="subtext">
						Perfectly Positioned for a Balanced Lifestyle
					</div>
					<p className="content">
						Imagine living in a location that puts everything within reach. From
						major business hubs to entertainment hotspots, your new address
						ensures you're never far from where you need to be.
					</p> */}

					{/* <div className="subtext">Seamless Connectivity</div>
					<p className="content">
						Whether it's a short commute to work or a weekend getaway, our prime
						location provides seamless connectivity to major roads and
						transportation options. Enjoy the luxury of time saved and
						convenience gained.
					</p> */}
				</div>

				<div className="location-icons">
					{/* <div className="location-box">
						<LocationOnIcon />
						<div>15 minutes</div>
						<span>NH-8</span>
					</div> */}
					<div className="location-box">
						<SchoolIcon />
						<div>25 minutes</div>
						<span>DPS, Amity University</span>
					</div>
					<div className="location-box">
						<FlightTakeoffIcon />
						<div>30 minutes</div>
						<span>IGI Airport</span>
					</div>
					<div className="location-box">
						<BusinessCenterIcon />
						<div>25 minutes</div>
						<span>Cyber Hub</span>
					</div>
					<div className="location-box">
						<LocalHospitalIcon />
						<div>20 minutes</div>
						<span>Medanta - The Medicity</span>
					</div>
					<div className="location-box">
						<LocalMallIcon />
						<div>25 minutes</div>
						<span>Ambience Mall</span>
					</div>
					<div className="location-box">
						<FactoryIcon />
						<div>30 minutes</div>
						<span>Manesar Industrial Area</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LocationContainer;
