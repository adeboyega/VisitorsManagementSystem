import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
function App() {
	// const [count, setCount] = useState(0)

	return (
		<>
			<Nav />

			<main class="container">
				<h2>Visitors Management System</h2>
			</main>
			<Footer  />
		</>
	);
}

export default App;
