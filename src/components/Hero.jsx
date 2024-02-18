import { ReactTyped } from "react-typed";

const Hero = () => {
	return (
		<div className="w-full h-screen relative">
			<div className="absolute inset-0 flex flex-col justify-center items-center">
				<div className="md:text-9xl text-5xl tracking-wider font-extrabold text-white relative">
					<ReactTyped className="stroke" strings={["DEMI"]} loop typeSpeed={150} backSpeed={100}></ReactTyped>
					<p className="mt-12 mb-28">CAPTURES</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;
