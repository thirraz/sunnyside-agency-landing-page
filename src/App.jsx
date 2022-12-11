import { useState } from "react";

import { Header } from "./components/Header";
import { Images } from "./components/Images";
import { MainContent } from "./components/MainContent";
import { NavBar } from "./components/NavBar";
import { TestimonialCard } from "./components/TestimonialCard";
import { TestimonialSection } from "./components/TestimonialSection";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="h-auto w-screen bg-lightBlue pb-24">
			<NavBar />
			<Header />
			<MainContent />
			<TestimonialSection />
			<Images />
		</div>
	);
}

export default App;
