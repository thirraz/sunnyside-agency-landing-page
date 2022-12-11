import React from "react";

import arrowDown from "../assets/images/icon-arrow-down.svg";

export const Header = () => {
	return (
		<div className="w-screen relative">
			<div className="absolute z-30">
				<h1 className=" w-screen h-auto bg-lightBlue font-Fraunces font-extrabold uppercase text-white text-center text-[3.5rem]">
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
			<div className="w-screen h-[31rem]  bg-mbHeader md:bg-dsktHeader lg:h-[40rem] bg-cover bg-no-repeat bg-bottom"></div>
		</div>
	);
};
