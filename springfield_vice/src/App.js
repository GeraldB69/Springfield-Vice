import React from "react";
import "./App.css";
import Game from "./pages/Game";
import config from "./components/configSpringfieldVice.json";

function App() {
	const bgStyle = {
		backgroundPositionY: config.background.position,
		height: config.background.height
	};

	return (
		<div className="App" style={bgStyle}>
			<Game />
		</div>
	);
}

export default App;
