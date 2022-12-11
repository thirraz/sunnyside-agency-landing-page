import React from "react";

export const MainContent = () => {
	return (
		<main className=" w-[100%] h-auto mb-14 flex flex-wrap flex-col md:flex-row">
			{/* part1 */}
			<div className="w-screen md:w-[50%] h-auto px-8 py-4 bg-white text-center lg:text-left lg:px-[7rem] lg:pt-24">
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
					<button className="font-Fraunces borderBottomAfter1 z-10">
						<p className="absolute uppercase tracking-wide">
							Learn More
						</p>
					</button>
				</div>
			</div>
			<div className="bg-yellow w-screen h-[24rem] lg:h-[32rem] md:w-[50%] bg-dsktEgg  bg-cover bg-no-repeat bg-center md:bg-top" />
			{/* part2 */}
			<div className="bg-pink w-screen h-[22rem] lg:h-[32rem] md:w-[50%] bg-dsktPinkCup bg-cover  bg-no-repeat bg-center md:bg-top" />
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
					<button className="font-Fraunces borderBottomAfter2 z-10">
						<p className="absolute uppercase tracking-wide">
							Learn More
						</p>
					</button>
				</div>
			</div>
			<div className="w-screen h-auto flex flex-col md:flex-row">
				<div className="w-full md:w-[50%] h-[38rem] bg-dsktCherries bg-cover bg-top lg:bg-center relative">
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
				<div className="w-full md:w-[50%] h-[38rem] bg-dsktOrangeFruit bg-cover bg-top lg:bg-center relative">
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
