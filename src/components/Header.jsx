import { useState } from "react";

import arrowDown from "../assets/images/icon-arrow-down.svg";
import { NavBar } from "./NavBar";

export const Header = () => {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<>
			<NavBar />
			<div className="w-screen relative">
				<div className="absolute z-30">
					<h1 className="relative lg:tracking-widest z-2 w-screen h-auto bg-lightBlue font-Fraunces font-extrabold uppercase text-white text-center text-[3.5rem]">
						We Are Creatives
					</h1>
					<div className="w-screen bg-transparent z-40 relative">
						<img
							className="mx-auto mt-8 md:mt-20"
							src={arrowDown}
							alt="arrow down"
						/>
					</div>
				</div>
				<div className="orangeBg"></div>
			</div>
		</>
	);
};
