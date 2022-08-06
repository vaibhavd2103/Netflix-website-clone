import logo from "./logo.svg";
import "./App.css";
import react, { useState, useEffect } from "react";
import axios from "axios";
import AppRouter from "./Components/AppRouter";
import { Route, Link, BrowserRouter, Routes } from "react-router-dom";
import Splash from "./Screens/Splash";
import Authentication from "./Screens/Authentication";
import Home from "./Screens/Home";

function App() {
	return (
		// <Routes>
		// 	<Route path="/" element={<Splash />} />
		// </Routes>
		<Home />
	);
}

export default App;
