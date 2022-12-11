import { useState } from "react";
import { Footer } from "./components/Footer";

import { Header } from "./components/Header";
import { Images } from "./components/Images";
import { MainContent } from "./components/MainContent";
import { TestimonialSection } from "./components/TestimonialSection";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="h-auto w-screen bg-white">
			<Header />
			<MainContent />
			<TestimonialSection />
			<Images />
			<Footer />
		</div>
	);
}

export default App;
