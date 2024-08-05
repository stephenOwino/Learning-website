import React from "react";
import ReactDOM from "react-dom/client"; // Note the import from 'react-dom/client'
import App from "./App";
import "./index.css"; // If you have global styles

const root = ReactDOM.createRoot(document.getElementById("root")); // Create a root
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
