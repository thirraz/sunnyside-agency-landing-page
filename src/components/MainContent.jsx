import React from "react";

export const MainContent = () => {
	return (
		<main className=" w-[100%] h-auto flex flex-wrap flex-col md:flex-row">
			{/* part1 */}
			<div className="w-screen md:w-[50%] h-auto px-8 py-4 md:py-0  bg-white text-center lg:text-left lg:px-[7rem] lg:pt-24">
				<h2 className=" font-Fraunces text-[2.5rem] mt-2">
					Transform your brand
				</h2>

				<p className="font-Barlow  text-slate-500 text-[1.1rem] mt-10 lg:mt-12 lg:pr-32">
					We are a full-service creative agency specializing in
					helping brands grow fast. Engage your clients through
					compelling visuals that do most of the marketing for
					you.
				</p>

				<div className="w-[7.5rem] mx-auto lg:mx-0 h-auto relative mt-6 text-left">
					<button className="font-Fraunces z-10 before:content-[''] before:absolute before:bg-[#fef3ba] before:hover:bg-yellow-400 before:rounded-full before:w-full before:h-[0.5rem] before:top-[140%]">
						<p className="absolute uppercase tracking-wide">
							Learn More
						</p>
					</button>
				</div>
			</div>
			<div className="mainContentImg1" />
			{/* part2 */}
			<div className="mainContentImg2" />
			<div className="w-screen md:w-[50%] h-auto px-8 py-4 md:py-0  bg-white text-center lg:text-left lg:px-[7rem] lg:pt-24 ">
				<h2 className=" font-Fraunces text-[2.5rem] mt-2">
					Stand out to the right audience
				</h2>

				<p className="font-Barlow  text-slate-500 text-[1.1rem] mt-10 lg:mt-12 lg:pr-32">
					Using a collaborative formula of designers,
					researchers, photographers, videographers, and
					copywriters, we'll build and extend your brand in
					digital places.
				</p>

				<div className="w-[7.5rem] mx-auto lg:mx-0 h-auto relative mt-6 text-left">
					<button className="font-Fraunces z-10 before:content-[''] before:absolute before:bg-[#ffc2cc] before:hover:bg-red-400 before:rounded-full before:w-full before:h-[0.5rem] before:top-[140%]">
						<p className="absolute uppercase tracking-wide">
							Learn More
						</p>
					</button>
				</div>
			</div>
			<div className="w-screen h-auto flex flex-col md:flex-row">
				<div className="mainContentImg3">
					<div className="w-full absolute bottom-8">
						<h2 className="font-Fraunces text-green-900 text-center text-[2rem]">
							Graphic Design
						</h2>
						<p className="font-Barlow text-green-900 text-center text-lg px-8 lg:px-32 mt-4">
							Great design makes you memorable. We deliver
							artwork that undescores your brand message
							and captures potential clients attention.
						</p>
					</div>
				</div>
				<div className="mainContentImg4">
					<div className="w-full absolute bottom-8">
						<h2 className="font-Fraunces text-[#124D6F] text-center text-[2rem]">
							Graphic Design
						</h2>
						<p className="font-Barlow text-[#124D6F] text-center text-lg px-8 lg:px-32 mt-4">
							Great design makes you memorable. We deliver
							artwork that undescores your brand message
							and captures potential clients attention.
						</p>
					</div>
				</div>
			</div>
		</main>
	);
};
