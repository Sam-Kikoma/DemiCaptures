import Hero from "./Hero";
import Navbar from "./Navbar";
import videoSource from "../assets/bgVideo.mp4";

const Wrapper = () => {
	return (
		<div className="h-screen relative">
			<video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
				<source src={videoSource} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<div className="relative z-10">
				<Navbar />
				<Hero />
			</div>
		</div>
	);
};

export default Wrapper;
