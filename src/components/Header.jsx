import React from "react";

import arrowDown from "../assets/images/icon-arrow-down.svg";

import orange from "../assets/images/desktop/image-header.jpg";

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
			<div className="orangeBg"></div>
		</div>
	);
};
