import { useState } from "react";

import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { NavBar } from "./components/NavBar";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="h-auto w-screen bg-lightBlue">
			<NavBar />
			<Header />
			<MainContent />
		</div>
	);
}

export default App;
