import React from "react";

export const TestimonialCard = ({
	profilePic,
	feedback,
	username,
	position,
}) => {
	return (
		<div className="w-screen md:w-96 h-[25rem] flex flex-col items-center justify-around bg-white rounded-2xl border-2 border-indigo-800">
			<img
				className="w-14 h-14 rounded-full"
				src={profilePic}
				alt="user icon"
			/>
			<p className="font-Barlow text-[1.1rem] text-center text-slate-600 px-10">
				{feedback}
			</p>
			<div className="flex flex-col items-center">
				<h3 className="font-Fraunces font-extrabold">
					{username}.
				</h3>
				<p className="text-slate-500 font-Barlow">{position}</p>
			</div>
		</div>
	);
};
