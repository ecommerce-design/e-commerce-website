import PrimaryNav from "./components/navigation/PrimaryNav";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Product from "./components/pages/Product";
import "./App.css";
import SecondaryNav from "./components/navigation/SecondaryNav";

function App() {
	return (
		<div className="App">
			<PrimaryNav />
			<SecondaryNav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/product" element={<Product />} />
			</Routes>
		</div>
	);
}

export default App;