import { useState } from "react";
import "./App.css";
import "./index.css"
import LayOut from "./components/Layout";
import Login from "./pages/Login";
import Army from "./pages/Branches/Army";
import Navy from "./pages/Branches/Navy";
import Airforce from "./pages/Branches/Airforce";
import Dhq from "./pages/Branches/Dhq";
import { Route, Routes } from "react-router-dom";



function App() {
	

	return (
		// <div>
		
		// 	{/* <LayOut /> */}
		// 	<Login />
		// 	<Footer  />
		// </div>
		<Routes>
		<Route path="/pages/Branches/Army" element ={<Army />} />
		<Route path="/pages/Branches/Airforce" element ={<Airforce />} />
		<Route path="/pages/Branches/Navy" element ={<Navy />} />
		<Route path="/pages/Branches/Dhq" element ={<Dhq />} />
		<Route path="/" element={<Login />} />
		<Route path="/layout" element={<LayOut />} />
	</Routes>
	);
}

export default App;
