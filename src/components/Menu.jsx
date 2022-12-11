import React from "react";

export const Menu = () => {
	return (
		<ul className="flex flex-col items-center justify-center absolute md:hidden w-[18rem] h-[20rem] bg-white font-Barlow text-slate-500 text-lg top-[5rem] right-[2rem] z-40">
			<li className="my-7">About</li>
			<li className="mb-7">Services</li>
			<li className="mb-7">Projects</li>
			<li className="bg-yellow-400 px-4 py-2 rounded-full mb-7 text-center font-Fraunces text-[#333]">
				Contact
			</li>
		</ul>
	);
};
