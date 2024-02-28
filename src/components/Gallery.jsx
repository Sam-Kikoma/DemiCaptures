import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import video4 from "../assets/video4.mp4";
import ReactPlayer from "react-player";
import "../index.css";

const Gallery = () => {
	return (
		<div className="text-white w-full h-screen overflow-y-hidden">
			<h1 className="text-center text-4xl md:text-6xl underline font-extrabold p-8">GALLERY</h1>
			<div className="grid grid-cols-3 grid-rows-2 w-full h-full">
				<div className="col-start-1 row-span-2 pt-[56.25%] relative">
					<ReactPlayer url={video1} width="100%" height="100% " className="absolute top-0 left-0" />
				</div>
				<div className="col-start-2 row-span-1">
					<ReactPlayer url={video2} width="100%" height="100%" />
				</div>
				<div>
					<ReactPlayer url={video3} width="100%" height="100%" />
				</div>
				<div className="col-span-2">
					<ReactPlayer url={video4} width="100%" height="100%" />
				</div>
			</div>
		</div>
	);
};

export default Gallery;
