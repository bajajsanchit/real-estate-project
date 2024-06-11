import "./style.scss";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import DirectionsTransitIcon from "@mui/icons-material/DirectionsTransit";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import LocalMallIcon from "@mui/icons-material/LocalMall";

function LocationContainer() {
	return (
		<div className="location-container">
			<div className="map-container">
				<iframe
					title="Signature Global Map"
					style={{ height: "100%", width: "100%" }}
					frameborder="0"
					src="https://www.google.com/maps/embed/v1/place?q=signature+global+titanium&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
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

					<div className="subtext">
						Perfectly Positioned for a Balanced Lifestyle
					</div>
					<p className="content">
						Imagine living in a location that puts everything within reach. From
						major business hubs to entertainment hotspots, your new address
						ensures you're never far from where you need to be.
					</p>

					<div className="subtext">Seamless Connectivity</div>
					<p className="content">
						Whether it's a short commute to work or a weekend getaway, our prime
						location provides seamless connectivity to major roads and
						transportation options. Enjoy the luxury of time saved and
						convenience gained.
					</p>
				</div>

				<div className="location-icons">
					<div className="location-box">
						<LocationOnIcon />
						<div>Just 5 minutes away.</div>
						<span>Golf Course Road</span>
					</div>
					<div className="location-box">
						<DriveEtaIcon />
						<div>A quick 3-minute drive.</div>
						<span>Sohna Road</span>
					</div>
					<div className="location-box">
						<FlightTakeoffIcon />
						<div>Reachable in 26 minutes.</div>
						<span>IGI Airport</span>
					</div>
					<div className="location-box">
						<DirectionsTransitIcon />
						<div>Only 8 minutes from your doorstep.</div>
						<span>Rapid Metro Station</span>
					</div>
					<div className="location-box">
						<LocalHospitalIcon />
						<div>Located within 10-15 minutes.</div>
						<span>Hospitals</span>
					</div>
					<div className="location-box">
						<LocalMallIcon />
						<div>Just a short 10 minute drive.</div>
						<span>Malls and Multiplexes</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LocationContainer;
