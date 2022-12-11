import { useState } from "react";
import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import { Menu } from "./Menu";

export const NavBar = () => {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<header className="h-32 flex bg-[#3EBFFF]">
			<nav className=" h-full w-full flex justify-between items-center px-8 ">
				<img
					className="w-[9rem] h-7 lg:w-[10rem] lg:h-9"
					src={logo}
					alt="logo icon"
				/>
				<img
					onClick={() => setShowMenu(!showMenu)}
					className="w-7 h-7 cursor-pointer md:hidden"
					src={hamburger}
					alt="hamburger menu icon"
				/>
				{showMenu && <Menu />}
				<ul className="hidden md:flex md:items-center text-Barlow text-white">
					<li className="mr-14 text-[1.1rem]">About</li>
					<li className="mr-14 text-[1.1rem]">Services</li>
					<li className="mr-14 text-[1.1rem]">Projects</li>
					<li className="mr-5 px-5 py-3 rounded-full bg-white hover:bg-sky-300 hover:text-white cursor-pointer text-[#333] font-Fraunces">
						Contact
					</li>
				</ul>
			</nav>
		</header>
	);
};
