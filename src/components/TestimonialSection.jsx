import emily from "../assets/images/image-emily.jpg";
import jennie from "../assets/images/image-jennie.jpg";
import thomas from "../assets/images/image-thomas.jpg";
import { TestimonialCard } from "./TestimonialCard";

export const TestimonialSection = () => {
	return (
		<div className="w-screen h-auto bg-white ">
			<h2 className="text-slate-400 font-Fraunces tracking-[.4rem] text-2xl pb-">
				Client Testimonials
			</h2>
			<div className="flex flex-col md:flex-row flex-wrap items-center justify-center">
				<TestimonialCard
					profilePic={emily}
					feedback="We put our trues in Sunnyside and they delivered, making
				sure our needs were met and deadlines were always hit."
					position="Marketing Director"
					username="Emily R."
				/>
				<TestimonialCard
					profilePic={thomas}
					feedback="Sunnyside's enthusiasm coupled with their interest in our brand's success mad it a satisfying and enjoyable experience"
					username="Thomas S."
					position="Chief Operating Officer"
				/>
				<TestimonialCard
					profilePic={jennie}
					feedback="Incredible end result! Our slaes increased over 400% when we worked with Sunnysice. Highly recommended"
					username="Jennie F."
					position="Business Owner"
				/>
			</div>
		</div>
	);
};
