import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Features from "./components/Features";
import Footer from "./components/Footer";

import "./styles/App.css";

document.title = "Typemaster pre-launch landing page";

function App() {
	return (
		<div className="overflow-x-hidden app">
			{/* <div className="container"> */}
			<NavBar />
			<main>
				<Hero />
				<Overview />
				<Features />
			</main>
			<Footer />
			{/* </div> */}
		</div>
	);
}

export default App;
