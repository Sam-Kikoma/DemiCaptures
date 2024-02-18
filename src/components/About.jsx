const About = () => {
	return (
		<div className="w-full text-white lg:grid lg:grid-cols-2">
			<article className="p-16">
				<h1 className="text-center text-4xl md:text-6xl font-extrabold tracking-wider underline ">ABOUT</h1>
				<p className="text-2xl my-16 text-justify leading-loose">
					Hey there, I&apos;m Demi, a passionate videographer dedicated to telling captivating stories through my lens.
					From cinematic shorts to documentaries, I thrive on creating emotionally resonant content that leaves a
					lasting impact. Join me on my journey of visual exploration and let&apos;s craft something extraordinary
					together.
				</p>
			</article>
			<article className="p-8">
				<img
					src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt=""
					className="max-w-full h-auto lg:h-full object-cover rounded-xl"
				/>
			</article>
		</div>
	);
};

export default About;
