import { useState } from "react";
import "./App.css";
import "./index.css"
import Footer from "./components/Footer";
import LayOut from "./components/Layout";
import Login from "./components/Login/Login";



function App() {


	return (
		<div>
		
			<LayOut />
			<Login />
			<Footer  />
		</div>
	);
}

export default App;
