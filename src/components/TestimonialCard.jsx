import React from "react";

export const TestimonialCard = ({
	profilePic,
	feedback,
	username,
	position,
}) => {
	return (
		<div className="w-screen md:w-96 h-[auto] flex flex-col items-center justify-around bg-white mb-14">
			<div className="flex flex-col items-center w-full">
				<img
					className="w-14 h-14 rounded-full mb-5"
					src={profilePic}
					alt="user icon"
				/>
				<p className="font-Barlow text-[1.1rem] text-center text-slate-500 px-10">
					{feedback}
				</p>
			</div>
			<div className="flex flex-col items-center mt-14">
				<h3 className="font-Fraunces font-extrabold">
					{username}.
				</h3>
				<p className="text-slate-500 font-Barlow">{position}</p>
			</div>
		</div>
	);
};
