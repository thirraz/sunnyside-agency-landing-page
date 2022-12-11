import React from "react";
import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";

export const NavBar = () => {
	return (
		<header className="h-20 flex bg-[#3EBFFF]">
			<nav className=" h-full w-full flex justify-between items-center px-8 ">
				<img className="w-[9rem] h-7" src={logo} alt="logo icon" />
				<img
					className="w-7 h-7 cursor-pointer"
					src={hamburger}
					alt="hamburger menu icon"
				/>
			</nav>
		</header>
	);
};
