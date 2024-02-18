import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleNav = () => {
		setNav(!nav);
	};
	return (
		<nav className="h-20 max-w[1240px] mx-auto p-6 text-white font-extrabold text-xl relative z-20">
			<ul className="w-full hidden md:flex justify-center cursor-pointer ">
				<li className="px-16">HOME</li>
				<li className="px-16">ABOUT</li>
				<li className="px-16">GALLERY</li>
				<li className="px-16">CONTACT</li>
			</ul>
			<div className="flex justify-end md:hidden" onClick={handleNav}>
				{nav ? <AiOutlineClose size={30} /> : <GiHamburgerMenu size={30} />}
			</div>
			<div
				className={
					nav
						? "fixed left-0 top-0 w-[80%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-1000 md:hidden"
						: "fixed left-[-100%] ease-in-out duration-1000"
				}
			>
				<ul className="flex flex-col justify-center align-middle w-full text-center">
					<li className="p-8 border-b-2">HOME</li>
					<li className="p-8 border-b-2">ABOUT</li>
					<li className="p-8 border-b-2">GALLERY</li>
					<li className="p-8">CONTACT</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
