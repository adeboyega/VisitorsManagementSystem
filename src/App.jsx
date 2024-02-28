import { useState } from "react";
import "./App.css";
import "./index.css"
import LayOut from "./components/Layout";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";



function App() {
	

	return (
		// <div>
		
		// 	{/* <LayOut /> */}
		// 	<Login />
		// 	<Footer  />
		// </div>
		<Routes>
		<Route path="/" element={<Login />} />
		<Route path="/layout" element={<LayOut />} />
	</Routes>
	);
}

export default App;
