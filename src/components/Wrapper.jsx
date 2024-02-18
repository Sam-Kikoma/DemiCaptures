import Hero from "./Hero";
import Navbar from "./Navbar";
import videoSource from "../assets/bgVideo.mp4";

const Wrapper = () => {
	return (
		<div>
			<video autoPlay loop muted className="absolute z-0 w-full h-full object-cover">
				<source src={videoSource} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<Navbar />
			<Hero />
		</div>
	);
};

export default Wrapper;
