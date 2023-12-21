import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header.js"
import Footer from "./Footer.js"
import MainContent from "./MainContent.js";
import "./style.css"

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
	return (
		<div>
			<Header />
			<MainContent />
			<Footer />
		</div>
	);
}

root.render(<App />);
