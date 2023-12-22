import React from "react";
import Logo from "./logo.png";

export default function Navbar() {
	return (
		<nav className="nav">
			<div className="nav-logo">
				<img src={Logo} alt="React Logo" className="nav-logo-image" />
				<h3 className="nav-logo-text">ReactFacts</h3>
			</div>
			<h4 className="nav-title">React Course - Project 1</h4>
		</nav>
	);
}
